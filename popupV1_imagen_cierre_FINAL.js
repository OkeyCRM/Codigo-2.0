
// Estilos del popup con imagen
const popupStyles = document.createElement("style");
popupStyles.innerHTML = `
  #ff-popup {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex; justify-content: center; align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
  }
  .ff-popup-hidden {
    display: none !important;
  }
  .ff-popup-content {
    position: relative;
    background: white;
    border-radius: 16px;
    max-width: 600px;
    width: 90%;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    overflow: hidden;
    animation: fadeIn 0.6s ease forwards;
  }
  .ff-popup-content img {
    width: 100%;
    display: block;
    border-radius: 16px;
  }
  .ff-popup-close {
    position: absolute;
    top: 12px;
    right: 16px;
    font-size: 26px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    z-index: 10001;
  }
  @keyframes fadeIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(popupStyles);

// Función para mostrar el popup
function showPopup() {
  const popup = document.getElementById("ff-popup");
  if (popup) popup.classList.remove("ff-popup-hidden");
}

// Esperar 3 segundos antes de mostrarlo
setTimeout(showPopup, 3000);

// Cierre del popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("ff-popup");

  // Cerrar al hacer clic en la X
  document.addEventListener("click", function (e) {
    const closeBtn = document.querySelector(".ff-popup-close");
    if (closeBtn && e.target === closeBtn) {
      popup.classList.add("ff-popup-hidden");
    }

    // Cerrar al hacer clic fuera del contenido
    const content = document.querySelector(".ff-popup-content");
    if (popup && content && !content.contains(e.target) && popup.contains(e.target)) {
      popup.classList.add("ff-popup-hidden");
    }
  });
});
