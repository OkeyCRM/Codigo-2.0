// Estilos combinados para Finger Flex: visual + características + CTA
const style = document.createElement('style');
style.innerHTML = `
  /* BLOQUE VISUAL */
  .ff-box {
    max-width: 360px;
    margin: 0 auto 30px;
    padding: 20px;
    border-radius: 20px;
    background-color: #ffffff;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
  }
  .ff-img-top {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 15px;
  }
  .ff-hook {
    font-size: 22px;
    color: #ffffff;
    background-color: #145A32;
    padding: 10px 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }
  .ff-desc {
    font-size: 16px;
    color: #145A32;
    margin-bottom: 15px;
  }
  .ff-name {
    font-size: 20px;
    background-color: #145A32;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: bold;
    display: inline-block;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }
  /* BLOQUE DE CARACTERÍSTICAS */
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
  /* BLOQUE CTA */
  .ff-cta-box {
    max-width: 420px;
    margin: 0 auto 40px;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
  }
  .ff-cta-img {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
    border-radius: 12px;
  }
  .ff-cta-title {
    font-size: 18px;
    font-weight: bold;
    color: #145A32;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  .ff-btn-shake {
    background-color: #145A32;
    color: white;
    border: none;
    padding: 14px 30px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    cursor: pointer;
    animation: shake 1.5s infinite;
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-3px); }
    40% { transform: translateX(3px); }
    60% { transform: translateX(-2px); }
    80% { transform: translateX(2px); }
  }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.compraDirectaButton').forEach(button => {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});

// BLOQUE EXPERTOS (FINAL)
const expertosStyle = document.createElement('style');
expertosStyle.innerHTML = `
  .ff-expertos-box {
    max-width: 520px;
    margin: 60px auto;
    padding: 20px 30px;
    background: #E9FDF3;
    border: 2px solid #29C87B;
    border-radius: 20px;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    color: #145A32;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }
  .ff-expertos-titulo {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
    background-color: #29C87B;
    color: #ffffff;
    display: inline-block;
    padding: 14px 22px;
    border-radius: 18px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .ff-expertos-nombre {
    font-size: 15px;
    color: #1C1C1C;
    margin-bottom: 14px;
    padding: 0 12px;
    line-height: 1.5;
  }
  .ff-expertos-cita {
    font-size: 16px;
    font-style: italic;
    margin-bottom: 24px;
    color: #0B5345;
    padding: 0 18px;
  }
  .ff-expertos-cita strong {
    font-weight: bold;
    color: #0B5345;
  }
  .ff-expertos-img {
    width: 150px;
    border-radius: 16px;
    box-shadow: 0 6px 14px rgba(0,0,0,0.12);
    margin-top: 8px;
  }
`;
document.head.appendChild(expertosStyle);