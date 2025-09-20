document.addEventListener("DOMContentLoaded", function () {
    const scriptTag = document.querySelector('script[src*="upsells-v6.js"]');
    const data = scriptTag.getAttribute("data-prducts-to-upssell");
    const products = JSON.parse(data);
    const container = document.getElementById("upsell-products-container");

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = product.img;
        card.appendChild(img);

        const btn = document.createElement("div");
        btn.className = "add-btn";
        btn.innerHTML = "+";
        btn.onclick = () => window.location.href = product.url;
        card.appendChild(btn);

        const name = document.createElement("div");
        name.className = "product-name";
        name.textContent = product.name;
        card.appendChild(name);

        const oldPrice = document.createElement("div");
        oldPrice.className = "price-old";
        oldPrice.textContent = `$${product.oldPrice}`;
        card.appendChild(oldPrice);

        const priceLine = document.createElement("div");

        const newPrice = document.createElement("span");
        newPrice.className = "price-new";
        newPrice.textContent = `$${product.newPrice}`;
        priceLine.appendChild(newPrice);

        const discount = document.createElement("span");
        discount.className = "discount";
        discount.textContent = product.discount;
        priceLine.appendChild(discount);

        card.appendChild(priceLine);

        const envio = document.createElement("div");
        envio.className = "envio-rapido";
        envio.textContent = "ENVIOS EN 24HS";
        card.appendChild(envio);

        container.appendChild(card);
    });
});
