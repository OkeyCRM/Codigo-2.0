/* upsells-ml-card.js v1.1 – Upsells Tienda Nube (carrito + estética del mock)
   - Lee data-prducts-to-upssell (mismo nombre/typo).
   - Inserta en el carrito (busca contenedores TN) o fallback tras el <script>.
   - “+” translúcido; viejo arriba del nuevo; cuadrado verde con descuento a la derecha.
*/
(function () {
  const blocks = document.querySelectorAll('script[data-prducts-to-upssell]');
  if (!blocks.length) return;

  const fmtARS = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });

  const SVG_PLUS = `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="ba-upsells-plus-icon">
      <path d="M11 5a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5z"></path>
    </svg>`;
  const SVG_BOLT = `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="ba-upsells-bolt">
      <path d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11z"></path>
    </svg>`;

  // Inserción en carrito (busca contenedores comunes de TN / themes)
  function findCartMount() {
    const selectors = [
      '.js-cart-products',            // muy común
      '.cart-products',               // variantes
      '.cart__products',              // themes nuevos
      '.mini-cart__content',          // mini cart / drawer
      '.js-minicart-products',
      '#cart .container',             // página /cart
      '#cart', '.cart-content', '.cart-items'
    ];
    for (const s of selectors) {
      const el = document.querySelector(s);
      if (el) return el;
    }
    return null;
  }

  async function addToCartTN(variantId, qty) {
    qty = qty || 1;
    try {
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ items: [{ id: variantId, quantity: qty }] }),
        credentials: 'same-origin'
      });
      if (res.ok) return true;
    } catch (e) {}
    try {
      const form = document.createElement('form');
      form.action = '/cart';
      form.method = 'POST';
      form.style.display = 'none';
      const idI = document.createElement('input');
      idI.name = 'product_id'; idI.value = String(variantId);
      const qI  = document.createElement('input');
      qI.name = 'quantity'; qI.value = String(qty);
      const aI  = document.createElement('input');
      aI.name = 'add_to_cart'; aI.value = 'true';
      form.append(idI, qI, aI);
      document.body.appendChild(form);
      form.submit();
      return true;
    } catch (e) { return false; }
  }

  function render(targetAfter, products) {
    const wrap = document.createElement('section');
    wrap.className = 'ba-upsells';

    const title = document.createElement('h4');
    title.className = 'ba-upsells-title';
    title.textContent = 'Productos que te interesaron';
    wrap.appendChild(title);

    const row = document.createElement('div');
    row.className = 'ba-upsells-row';
    wrap.appendChild(row);

    products.forEach(p => {
      const name = p.name || '';
      const img  = p.img  || '';
      const oldP = typeof p.oldPrice === 'number' ? p.oldPrice : null;
      const newP = typeof p.newPrice === 'number' ? p.newPrice : null;
      const disc = p.discount || ''; // ej.: "33% OFF"
      const id   = p.idProducto || p.id_variant || p.variant_id || null;
      const url  = p.url || '#';

      const card = document.createElement('article');
      card.className = 'ba-upsells-card';

      const photo = document.createElement('a');
      photo.href = url; photo.rel = 'noopener';
      photo.className = 'ba-upsells-photo';
      photo.innerHTML = `<img loading="lazy" decoding="async" src="${img}" alt="${name}">`;

      const add = document.createElement('button');
      add.type = 'button'; add.className = 'ba-upsells-add';
      add.innerHTML = SVG_PLUS;
      add.addEventListener('click', async (e) => {
        e.preventDefault();
        if (id) {
          add.classList.add('is-loading');
          const ok = await addToCartTN(id, 1);
          add.classList.remove('is-loading');
          if (!ok && url && url !== '#') window.location.href = url;
        } else if (url && url !== '#') {
          window.location.href = url;
        }
      });
      photo.appendChild(add);

      const info = document.createElement('div');
      info.className = 'ba-upsells-info';

      const h3 = document.createElement('h3');
      h3.className = 'ba-upsells-name';
      h3.textContent = name;
      info.appendChild(h3);

      // Bloque de precios: izquierda (viejo arriba / nuevo grande) + derecha (cuadrado)
      const prices = document.createElement('div');
      prices.className = 'ba-upsells-prices';

      const left = document.createElement('div');
      left.className = 'ba-upsells-price-left';
      left.innerHTML = `
        <div class="ba-upsells-old">${oldP != null ? fmtARS.format(oldP) : ''}</div>
        <div class="ba-upsells-main">${newP != null ? fmtARS.format(newP) : ''}</div>
      `;

      const right = document.createElement('div');
      right.className = 'ba-upsells-discount-box';
      right.textContent = disc || '';

      prices.append(left, right);
      info.appendChild(prices);

      const ship = document.createElement('div');
      ship.className = 'ba-upsells-ship';
      ship.innerHTML = `${SVG_BOLT}<span>ENVÍOS EN 24HS</span>`;
      info.appendChild(ship);

      card.append(photo, info);
      row.appendChild(card);
    });

    // Preferir carrito; si no existe, fallback tras el <script>
    const cartMount = findCartMount();
    if (cartMount) {
      cartMount.appendChild(wrap);
    } else {
      targetAfter.parentNode.insertBefore(wrap, targetAfter.nextSibling);
    }
  }

  blocks.forEach(sc => {
    let products = [];
    try { products = JSON.parse(sc.getAttribute('data-prducts-to-upssell') || '[]'); }
    catch (e) { products = []; }
    if (products && products.length) render(sc, products);
  });
})();
