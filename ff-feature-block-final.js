
// Estilos finales para bloque de características Finger Flex
const style = document.createElement('style');
style.innerHTML = `
  .ff2-box {
    max-width: 420px;
    margin: 0 auto 40px;
    font-family: 'Helvetica Neue', sans-serif;
    color: #145A32;
    text-align: center;
  }

  .ff2-img-banner {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 20px;
  }

  .ff2-caract-title {
    background-color: #145A32;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    padding: 12px;
    border-radius: 12px 12px 0 0;
    text-transform: uppercase;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  .ff2-caracteristicas {
    background-color: #ffffff;
    border-radius: 0 0 16px 16px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    text-align: left;
  }

  .ff2-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .ff2-emoji {
    font-size: 32px;
    margin-right: 14px;
    line-height: 1;
    width: 40px;
    text-align: center;
  }

  .ff2-texto {
    flex: 1;
  }

  .ff2-texto strong {
    display: block;
    font-size: 16px;
    color: #145A32;
    margin-bottom: 5px;
  }

  .ff2-texto p {
    font-size: 14px;
    margin: 0;
    color: #333;
  }
`;
document.head.appendChild(style);
