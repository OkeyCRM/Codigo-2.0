/* upsells-ml-card.js – Tienda Nube Upsells (estética ML exacta, funciones conservadas)
   Lee el atributo data-prducts-to-upssell (mismo nombre/typo que tu script original),
   renderiza las tarjetas y agrega al carrito con idProducto.
*/
(function () {
  const scripts = document.querySelectorAll('script[data-prducts-to-upssell]');
  if (!scripts.length) return;

  // Formato ARS
  const fmtARS = new Intl.NumberFormat('es-AR', {
    style: 'currency', currency: 'ARS', maximumFractionDigits: 0
  });

  // Íconos inline
  const SVG_PLUS = `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="ba-upsells-plus-icon">
      <path d="M11 5a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5z"></path>
    </svg>`;
  const SVG_BOLT = `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="ba-upsells-bolt">
      <path d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11z"></path>
    </svg>`;

  // Agregar al carrito (intenta endpoint ajax → fallback form POST)
  async function addToCartTN(variantId, qty) {
    qty = qty || 1;
    // 1) /cart/add.js (si el theme lo expone)
    try {
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ items: [{ id: variantId, quantity: qty }] }),
        credentials: 'same-origin'
      });
      if (res.ok) return true;
    } catch (_) {}

    // 2) Fallback POST clásico a /cart
    try {
      const form = document.createElement('form');
      form.action = '/cart';
      form.method = 'POST';
      form.style.display = 'none';

      const inputId = document.createElement('input');
      inputId.name = 'product_id';
      inputId.value = String(variantId);

      const inputQty = document.createElement('input');
      inputQty.name = 'quantity';
      inputQty.value = String(qty);

      const inputAction = document.createElement('input');
      inputAction.name = 'add_to_cart';
      inputAction.value = 'true';

      form.appendChild(inputId);
      form.appendChild(inputQty);
      form.appendChild(inputAction);
      document.body.appendChild(form);
      form.submit();
      return true;
    } catch (_) {
      return false;
    }
  }

  function render(container, products) {
    const wrap = document.createElement('div');
    wrap.className = 'ba-upsells';
    const list = document.createElement('div');
    list.className = 'ba-upsells-row';
    wrap.appendChild(list);

    products.forEach((p) => {
      const name = p.name || '';
      const img = p.img || '';
      const oldPrice = typeof p.oldPrice === 'number' ? p.oldPrice : null;
      const newPrice = typeof p.newPrice === 'number' ? p.newPrice : null;
      const discount = p.discount || '';
      const idVar = p.idProducto || p.id_variant || p.variant_id || null;
      const link = p.url || '#';

      const card = document.createElement('article');
      card.className = 'ba-upsells-card';

      // Foto
      const photo = document.createElement('a');
      photo.className = 'ba-upsells-photo';
      photo.href = link;
      photo.rel = 'noopener';
      photo.innerHTML = `<img loading="lazy" decoding="async" src="${img}" alt="${name}">`;

      // Botón +
      const add = document.createElement('button');
      add.type = 'button';
      add.className = 'ba-upsells-add';
      add.innerHTML = SVG_PLUS;
      add.addEventListener('click', async (ev) => {
        ev.preventDefault();
        if (idVar) {
          add.classList.add('is-loading');
          const ok = await addToCartTN(idVar, 1);
          add.classList.remove('is-loading');
          if (!ok && link && link !== '#') window.location.href = link;
        } else if (link && link !== '#') {
          window.location.href = link;
        }
      });

      photo.appendChild(add);

      // Info
      const info = document.createElement('div');
      info.className = 'ba-upsells-info';
      info.innerHTML = `<h3 class="ba-upsells-name" title="${name}">${name}</h3>`;

      // Precios
      const prices = document.createElement('div');
      prices.className = 'ba-upsells-prices';

      const oldP = document.createElement('div');
      oldP.className = 'ba-upsells-old';
      oldP.textContent = oldPrice != null ? fmtARS.format(oldPrice) : '';

      const mainP = document.createElement('div');
      mainP.className = 'ba-upsells-main';
      mainP.textContent = newPrice != null ? fmtARS.format(newPrice) : '';

      const pill = document.createElement('span');
      pill.className = 'ba-upsells-pill';
      pill.textContent = discount || '';

      prices.appendChild(oldP);
      prices.appendChild(mainP);
      prices.appendChild(pill);

      // Envíos
      const ship = document.createElement('div');
      ship.className = 'ba-upsells-ship';
      ship.innerHTML = `${SVG_BOLT}<span>ENVÍOS EN 24HS</span>`;

      info.appendChild(prices);
      info.appendChild(ship);

      card.appendChild(photo);
      card.appendChild(info);
      list.appendChild(card);
    });

    container.parentNode.insertBefore(wrap, container.nextSibling);
  }

  // Procesa cada bloque <script data-prducts-to-upssell="[...]">
  scripts.forEach((sc) => {
    let products = [];
    try {
      const raw = sc.getAttribute('data-prducts-to-upssell') || '[]';
      products = JSON.parse(raw);
    } catch (_) { products = []; }
    if (!Array.isArray(products) || !products.length) return;
    render(sc, products);
  });
})();
