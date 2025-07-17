const colorBorder = document.currentScript.getAttribute('data-color-border');
const colorDiscount = document.currentScript.getAttribute('data-color-discount');
const backgroundLabelColor = document.currentScript.getAttribute('data-background-label-color');
const discounts = JSON.parse(document.currentScript.getAttribute('data-discounts'));

const styleBundles = document.createElement('style');
styleBundles.textContent = `
  .emapps-discount-radio-group {
    font-family: sans-serif;
    max-width: 360px;
    margin: 20px auto;
  }
  .emapps-discount-radio-group-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .emapps-discount-radio-group-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .emapps-discount-radio-group-list-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
  }
  .emapps-discount-radio-group-list-item input[type="radio"] {
    margin-right: 10px;
  }
  .emapps-discount-radio-group-list-item-active {
    border: 2px solid ${colorBorder || '#8c52ff'};
    box-shadow: 0 0 0 3px rgba(0, 200, 83, 0.2);
  }
  .emapps-discount-radio-group-list-item-qty-info-unit {
    font-weight: bold;
  }
  .emapps-discount-radio-group-list-item-qty-info-texto {
    font-size: 0.9em;
    color: #666;
  }
  .emapps-discount-radio-group-list-item-qty-price-de {
    text-decoration: line-through;
    font-size: 0.85em;
    color: ${colorDiscount || '#8c52ff'};
  }
  .emapps-discount-radio-group-list-item-qty-price-por {
    font-weight: bold;
    font-size: 1.1em;
  }
  .emapps-discount-radio-group-list-item-default-discount {
    position: absolute;
    top: -10px;
    right: 10px;
    background: ${backgroundLabelColor || '#8c52ff'};
    color: white;
    font-weight: bold;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 4px;
  }
`;
document.head.appendChild(styleBundles);

const containerBundle = document.querySelector('.product-info .price-container') || document.querySelector('.price-container');
const wrapper = document.createElement('div');
wrapper.className = 'emapps-discount-radio-group';

const title = document.createElement('h4');
title.className = 'emapps-discount-radio-group-title';
title.textContent = '¡GANÁ COMPRANDO POR CANTIDAD!';
wrapper.appendChild(title);

const list = document.createElement('div');
list.className = 'emapps-discount-radio-group-list';

discounts.forEach((discount) => {
  const item = document.createElement('div');
  item.className = 'emapps-discount-radio-group-list-item';
  if (discount.default) item.classList.add('emapps-discount-radio-group-list-item-active');

  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'emapps-discount';
  radio.value = discount.quantity;
  if (discount.default) radio.checked = true;

  const qtyInfo = document.createElement('div');
  const unit = document.createElement('div');
  unit.className = 'emapps-discount-radio-group-list-item-qty-info-unit';
  unit.textContent = discount.name || `${discount.quantity} unidades`;

  const textoLibre = document.createElement('div');
  textoLibre.className = 'emapps-discount-radio-group-list-item-qty-info-texto';
  textoLibre.textContent = discount.text || ''; // Texto editable en HTML

  qtyInfo.appendChild(unit);
  qtyInfo.appendChild(textoLibre);

  const priceBox = document.createElement('div');
  const priceDe = document.createElement('div');
  priceDe.className = 'emapps-discount-radio-group-list-item-qty-price-de';
  priceDe.textContent = `$ ${discount.priceOriginal}`;

  const pricePor = document.createElement('div');
  pricePor.className = 'emapps-discount-radio-group-list-item-qty-price-por';
  pricePor.textContent = `$ ${discount.priceFinal}`;

  priceBox.appendChild(priceDe);
  priceBox.appendChild(pricePor);

  item.appendChild(radio);
  item.appendChild(qtyInfo);
  item.appendChild(priceBox);

  if (discount.label && discount.default) {
    const badge = document.createElement('div');
    badge.className = 'emapps-discount-radio-group-list-item-default-discount';
    badge.textContent = discount.label;
    item.appendChild(badge);
  }

  item.addEventListener('click', () => {
    document.querySelectorAll('.emapps-discount-radio-group-list-item').forEach(el => {
      el.classList.remove('emapps-discount-radio-group-list-item-active');
      el.querySelector('input').checked = false;
    });
    item.classList.add('emapps-discount-radio-group-list-item-active');
    radio.checked = true;
    const qtyInput = document.querySelector('.js-quantity-input');
    if (qtyInput) qtyInput.value = item.firstChild.value;
  });

  list.appendChild(item);
});

wrapper.appendChild(list);
if (containerBundle) containerBundle.prepend(wrapper);
