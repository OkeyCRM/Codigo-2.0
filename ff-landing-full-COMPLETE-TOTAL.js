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

const elegirnosStyle = document.createElement('style');
elegirnosStyle.innerHTML = `
  .ff-elegirnos-box {
    max-width: 480px;
    margin: 40px auto;
    font-family: 'Helvetica Neue', sans-serif;
    text-align: center;
    color: #145A32;
  }

  .ff-elegirnos-box h2 {
    font-size: 20px;
    font-weight: bold;
    color: #145A32;
    border-bottom: 3px solid #7BE0A2;
    display: inline-block;
    padding-bottom: 5px;
    margin-bottom: 30px;
  }

  .ff-elegirnos-item {
    background: #ffffff;
    border: 2px solid #29C87B;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    position: relative;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    text-align: left;
  }

  .ff-elegirnos-item h3 {
    font-size: 16px;
    margin: 0 0 8px;
    color: #145A32;
  }

  .ff-elegirnos-item p {
    font-size: 14px;
    margin: 0;
    color: #333;
  }

  .ff-elegirnos-emoji {
    font-size: 28px;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .ff-elegirnos-cta-msg {
    font-size: 14px;
    margin: 30px 0 10px;
    color: #145A32;
    font-weight: bold;
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
`;
document.head.appendChild(elegirnosStyle);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.compraDirectaButton').forEach(button => {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});

const bloquesExtrasStyle = document.createElement('style');
bloquesExtrasStyle.innerHTML = `
  .ff-testimonios-box {
    max-width: 480px;
    margin: 40px auto;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    color: #145A32;
  }

  .ff-testimonios-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 25px;
    border-bottom: 3px solid #7BE0A2;
    display: inline-block;
    padding-bottom: 5px;
  }

  .ff-testimonio {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    background: #ffffff;
    border: 1px solid #29C87B;
    border-radius: 16px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .ff-testimonio-img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
  }

  .ff-testimonio-texto {
    text-align: left;
    flex: 1;
  }

  .ff-testimonio-nombre {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .ff-testimonio-frase {
    font-size: 14px;
    font-style: italic;
    color: #333;
  }

  .ff-testimonio-final-img {
    margin-top: 15px;
    width: 100%;
    border-radius: 12px;
  }

  .ff-uso-box {
    max-width: 480px;
    margin: 40px auto;
    font-family: 'Helvetica Neue', sans-serif;
    color: #145A32;
  }

  .ff-uso-item {
    background: #ffffff;
    border: 2px solid #29C87B;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .ff-uso-icono {
    width: 48px;
    margin-bottom: 10px;
  }

  .ff-uso-titulo {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .ff-uso-texto {
    font-size: 14px;
    color: #333;
  }

  .ff-resultados-box {
    max-width: 480px;
    margin: 40px auto;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    color: #145A32;
  }

  .ff-resultados-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 25px;
    border-bottom: 3px solid #7BE0A2;
    display: inline-block;
    padding-bottom: 5px;
  }

  .ff-resultados-img img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  }

  .ff-resultados-frase {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
document.head.appendChild(bloquesExtrasStyle);