/* upsells-v6.1.js — Tecnochii/utilidades-tn
   Correcciones clave:
   - Acepta data-prducts-to-upssell (legacy) y data-products-to-upsell (correcto)
   - Inserta antes de .subtotal-price dentro de .cart-row (selector fijo)
   - Idempotente (#tn-upsells-wrapper)
   - Construye DOM con createElement (evita XSS)
   - Formatea precios es-AR
   - Flechas sólo si hay overflow; scroll suave
   - Botón “+” dispara hooks: window.tnUpsellsAddToCart || CustomEvent('upsell:add')
*/
(() => {
  const READY = (fn) =>
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", fn, { once: true })
      : fn();

  // Util: formateo de precios ARS
  const fmtARS = (n) =>
    typeof n === "number"
      ? new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n)
      : n;

  // Util: crea elemento con clases/attrs
  const el = (tag, opts = {}) => {
    const node = document.createElement(tag);
    if (opts.class) node.className = opts.class;
    if (opts.text != null) node.textContent = opts.text;
    if (opts.html != null) node.innerHTML = opts.html; // usar sólo con contenido controlado
    if (opts.attrs) for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
    if (opts.on) for (const [name, handler] of Object.entries(opts.on)) node.addEventListener(name, handler);
    return node;
  };

  // Inserta el bloque en el carrito
  const mountPoint = () => {
    const cart = document.querySelector(".cart-row");
    if (!cart) return null;
    const anchor = cart.querySelector(".subtotal-price");
    if (anchor) return { parent: cart, before: anchor };
    // fallback: al final
    return { parent: cart, before: null };
  };

  // Lee configuración desde la etiqueta <script> que incluye este archivo
  const readConfig = () => {
    // Localiza el <script src=...upsells-v6(.x).js>
    const scripts = Array.from(document.scripts);
    const self = scripts.find((s) =>
      (s.src || "").includes("upsells-v6")
    ) || scripts[scripts.length - 1];

    if (!self) return null;

    // Acepta ambos atributos (legacy y corregido)
    const legacy = self.getAttribute("data-prducts-to-upssell");
    const fixed  = self.getAttribute("data-products-to-upsell");
    const title  = self.getAttribute("data-title") || "Te puede interesar";

    let products = [];
    try {
      const raw = fixed ?? legacy ?? "[]";
      products = JSON.parse(raw);
      if (!Array.isArray(products)) products = [];
    } catch (e) {
      console.warn("[upsells] JSON inválido en data-products-to-upsell:", e);
    }

    return { products, title };
  };

  // Crea una tarjeta de producto con estética ML y tus clases
  const createCard = (p, onAdd) => {
    const card = el("div", { class: "product-card" });

    // Imagen
    const img = el("img", {
      attrs: { loading: "lazy", alt: p.name || "Producto", src: p.img || p.image || "" },
    });

    // Nombre
    const name = el("div", { class: "product-name", text: p.name || "" });

    // Precios + descuento
    const priceLine = el("div");
    if (p.oldPrice) priceLine.appendChild(el("span", { class: "price-old", text: fmtARS(p.oldPrice) }));
    if (p.newPrice) priceLine.appendChild(el("span", { class: "price-new", text: fmtARS(p.newPrice) }));
    if (p.discount) priceLine.appendChild(el("span", { class: "discount", text: String(p.discount).trim() }));

    // Envío rápido
    const envio = el("div", { class: "envio-rapido", text: "ENVIOS EN 24HS" });

    // Botón +
    const addBtn = el("button", {
      class: "add-btn",
      attrs: { type: "button", "aria-label": "Agregar al carrito" },
      text: "+",
      on: {
        click: async (ev) => {
          addBtn.classList.add("adding");
          try {
            if (typeof window.tnUpsellsAddToCart === "function") {
              await window.tnUpsellsAddToCart({ product: p, quantity: 1 });
            } else {
              document.dispatchEvent(
                new CustomEvent("upsell:add", { detail: { product: p, quantity: 1 } })
              );
            }
            addBtn.classList.remove("adding");
            addBtn.classList.add("added");
          } catch (err) {
            console.error("[upsells] error al agregar:", err);
            addBtn.classList.remove("adding");
          }
        },
      },
    });

    // Link opcional
    const link = p.url ? el("a", { attrs: { href: p.url, target: "_blank", rel: "noopener noreferrer" } }) : null;

    // Jerarquía
    const body = el("div");
    body.appendChild(name);
    body.appendChild(priceLine);
    body.appendChild(envio);
    body.appendChild(addBtn);

    if (link) {
      link.appendChild(img);
      card.appendChild(link);
    } else {
      card.appendChild(img);
    }
    card.appendChild(body);

    return card;
  };

  // Crea carrusel + flechas si hay overflow
  const createCarousel = (products, titleText) => {
    const wrapper = el("div", { class: "carousel-wrapper", attrs: { id: "tn-upsells-wrapper" } });

    if (titleText) {
      const h = el("h3", { text: titleText });
      h.style.margin = "10px 12px";
      h.style.fontFamily = "Arial, sans-serif";
      h.style.fontSize = "18px";
      h.style.fontWeight = "700";
      wrapper.appendChild(h);
    }

    const scroller = el("div", { class: "products-container", attrs: { role: "group" } });
    products.forEach((p) => scroller.appendChild(createCard(p)));
    wrapper.appendChild(scroller);

    // Flechas
    const left  = el("div", { class: "arrow arrow-left",  html: "&#10094;" });
    const right = el("div", { class: "arrow arrow-right", html: "&#10095;" });

    const updateArrows = () => {
      const over = scroller.scrollWidth > scroller.clientWidth + 4;
      left.style.display  = over ? "flex" : "none";
      right.style.display = over ? "flex" : "none";
      if (over) {
        left.style.opacity  = scroller.scrollLeft <= 4 ? "0.5" : "1";
        const maxScroll = scroller.scrollWidth - scroller.clientWidth - 4;
        right.style.opacity = scroller.scrollLeft >= maxScroll ? "0.5" : "1";
      }
    };

    left.addEventListener("click", () => {
      const card = wrapper.querySelector(".product-card");
      const w = card ? card.getBoundingClientRect().width + 16 : 260;
      scroller.scrollBy({ left: -w, behavior: "smooth" });
    });
    right.addEventListener("click", () => {
      const card = wrapper.querySelector(".product-card");
      const w = card ? card.getBoundingClientRect().width + 16 : 260;
      scroller.scrollBy({ left: w, behavior: "smooth" });
    });

    scroller.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    wrapper.appendChild(left);
    wrapper.appendChild(right);

    queueMicrotask(updateArrows);

    return wrapper;
  };

  const render = () => {
    const cfg = readConfig();
    if (!cfg || !cfg.products || !cfg.products.length) return;

    const mount = mountPoint();
    if (!mount) return;

    const old = document.getElementById("tn-upsells-wrapper");
    if (old && old.parentNode) old.parentNode.removeChild(old);

    const ui = createCarousel(cfg.products, cfg.title);

    if (mount.before) {
      mount.parent.insertBefore(ui, mount.before);
    } else {
      mount.parent.appendChild(ui);
    }
  };

  READY(render);
})();