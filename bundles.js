(function () {
  const scriptTag = document.currentScript;
  const discounts = JSON.parse(scriptTag.getAttribute('data-discounts') || '[]');
  const colorBorder = scriptTag.getAttribute('data-color-border') || '#29C87B';
  const colorDiscount = scriptTag.getAttribute('data-color-discount') || '#29C87B';
  const bgLabel = scriptTag.getAttribute('data-background-label-color') || '#e0f9ed';

  const container = document.createElement('div');
  container.style.margin = '20px 0';
  container.className = 'emapps-discount-radio-group';

  const title = document.createElement('div');
  title.className = 'emapps-discount-radio-group-title';
  title.textContent = '⏰ POR TIEMPO LIMITADO ⏰';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '10px';
  title.style.textAlign = 'center';
  container.appendChild(title);

  discounts.forEach((bundle, index) => {
    const option = document.createElement('label');
    option.style.display = 'block';
    option.style.border = `2px solid ${bundle.default ? colorBorder : '#ccc'}`;
    option.style.borderRadius = '8px';
    option.style.padding = '10px';
    option.style.marginBottom = '10px';
    option.style.position = 'relative';
    option.style.cursor = 'pointer';
    option.style.backgroundColor = bundle.default ? '#f5faff' : '#fff';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'bundle-option';
    input.checked = bundle.default || false;
    input.style.marginRight = '10px';

    const strong = document.createElement('strong');
    strong.innerText = bundle.name;

    const prices = document.createElement('div');
    prices.innerHTML = `
      <s style="margin-right: 8px;">$${bundle.priceOriginal}</s> 
      <span style="font-weight: bold;">$${bundle.priceFinal}</span>
    `;

    const discountTag = document.createElement('div');
    discountTag.innerText = bundle.percent || '';
    discountTag.style.fontSize = '13px';
    discountTag.style.color = colorDiscount;
    discountTag.style.marginTop = '5px';

    if (bundle.label) {
      const badge = document.createElement('div');
      badge.innerText = bundle.label;
      badge.style.position = 'absolute';
      badge.style.top = '-10px';
      badge.style.right = '-10px';
      badge.style.background = bgLabel;
      badge.style.color = '#fff';
      badge.style.fontSize = '10px';
      badge.style.padding = '4px 8px';
      badge.style.borderRadius = '8px';
      badge.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      option.appendChild(badge);
    }

    option.appendChild(input);
    option.appendChild(strong);
    option.appendChild(prices);
    option.appendChild(discountTag);
    container.appendChild(option);
  });

  // 🔥 INSERCIÓN AUTOMÁTICA BAJO EL PRECIO
  document.addEventListener('DOMContentLoaded', () => {
    const priceSection = document.querySelector('.product__price');
    if (priceSection) {
      priceSection.insertAdjacentElement('afterend', container);
    } else {
      scriptTag.parentNode.insertBefore(container, scriptTag);
    }
  });
})();
