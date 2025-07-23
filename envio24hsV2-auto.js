
const envio24Style = document.createElement('style');
envio24Style.innerHTML = `
  .envio24-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background-color: #000;
    color: #00FFAE;
    font-size: 14px;
    font-weight: bold;
    border-radius: 12px;
    font-family: 'Helvetica Neue', sans-serif;
    position: relative;
    overflow: hidden;
    animation: pulseEnvio 2s infinite;
    box-shadow: 0 0 8px #00FFAE, 0 0 16px #00FFAE, 0 0 24px #00FFAE;
    margin-top: 12px;
    margin-bottom: 8px;
    width: fit-content;
  }

  .envio24-btn .envio24-check {
    width: 20px;
    height: 20px;
    background-color: #2196f3;
    color: white;
    border-radius: 50%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 6px #2196f3;
  }

  .envio24-btn .envio24-horas {
    font-size: 18px;
    color: #00FFAE;
    text-shadow: 0 0 4px #00FFAE, 0 0 8px #00FFAE;
  }

  @keyframes pulseEnvio {
    0% { transform: scale(1); box-shadow: 0 0 8px #00FFAE; }
    70% { transform: scale(1.05); box-shadow: 0 0 20px #00FFAE; }
    100% { transform: scale(1); box-shadow: 0 0 8px #00FFAE; }
  }
`;
document.head.appendChild(envio24Style);

// Crear el botón
const botonEnvio = document.createElement('div');
botonEnvio.className = 'envio24-btn';
botonEnvio.innerHTML = '<div class="envio24-check">✔</div> ENVÍO EN <span class="envio24-horas">24hs</span>';

// Esperar que cargue el título y luego insertar el botón
const esperarTitulo = setInterval(() => {
  const titulo = document.querySelector('.product-title') || document.querySelector('h1.product-name');
  if (titulo) {
    titulo.insertAdjacentElement('afterend', botonEnvio);
    clearInterval(esperarTitulo);
  }
}, 300);
