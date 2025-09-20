
// upsells-v6-custom.js
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const upsellScripts = document.querySelectorAll('script[data-prducts-to-upssell]');
    upsellScripts.forEach(script => {
      let data = script.getAttribute('data-prducts-to-upssell');
      if (!data) return;
      let products;
      try {
        products = JSON.parse(data);
      } catch (err) {
        console.error("JSON inválido en data-prducts-to-upssell", err);
        return;
      }

      const container = document.createElement('div');
      container.className = 'products-container';

      products.forEach(prod => {
        const { name, img, oldPrice, newPrice, discount, url } = prod;

        const card = document.createElement('div');
        card.className = 'product-card';

        const link = document.createElement('a');
        link.href = url || '#';
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';

        const image = document.createElement('img');
        image.src = img;
        image.alt = name;
        link.appendChild(image);

        const title = document.createElement('div');
        title.className = 'product-name';
        title.textContent = name;
        link.appendChild(title);

        if (oldPrice) {
          const precioViejo = document.createElement('div');
          precioViejo.className = 'price-old';
          precioViejo.textContent = formatPrice(oldPrice);
          link.appendChild(precioViejo);
        }

        const precioNuevo = document.createElement('div');
        precioNuevo.className = 'price-new';
        precioNuevo.textContent = formatPrice(newPrice);
        link.appendChild(precioNuevo);

        const promoBox = document.createElement('div');
        promoBox.className = 'promo-box';

        const discountDiv = document.createElement('div');
        discountDiv.className = 'discount';
        discountDiv.textContent = discount;

        const subtext = document.createElement('div');
        subtext.className = 'promo-subtext';
        subtext.textContent = '24HS disponible';

        promoBox.appendChild(discountDiv);
        promoBox.appendChild(subtext);

        card.appendChild(link);
        card.appendChild(promoBox);

        container.appendChild(card);
      });

      script.parentNode.insertBefore(container, script.nextSibling);
    });

    function formatPrice(num) {
      return '$' + Number(num).toLocaleString('es-AR', { minimumFractionDigits: 0 });
    }
  });
})();
