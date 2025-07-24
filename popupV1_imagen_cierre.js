
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
    display: none;
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
  }
  @keyframes fadeIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(popupStyles);

// Mostrar el popup a los 3 segundos
setTimeout(() => {
  const popup = document.getElementById("ff-popup");
  if (popup) popup.classList.remove("ff-popup-hidden");
}, 3000);

// Funcionalidad de cierre
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("ff-popup");
  const closeBtn = document.querySelector(".ff-popup-close");
  const popupContent = document.querySelector(".ff-popup-content");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (popup) popup.classList.add("ff-popup-hidden");
    });
  }

  if (popup) {
    popup.addEventListener("click", (e) => {
      if (!popupContent.contains(e.target)) {
        popup.classList.add("ff-popup-hidden");
      }
    });
  }
});
