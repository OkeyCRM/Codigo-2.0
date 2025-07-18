
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

  /* BLOQUE RESULTADOS REALES */
  .ff-resultados-box {
    max-width: 420px;
    margin: 40px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 16px;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  .ff-resultados-title {
    font-size: 22px;
    font-weight: bold;
    color: #145A32;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .ff-resultados-img img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .ff-resultados-frase {
    font-size: 16px;
    font-weight: bold;
    color: #145A32;
    margin-bottom: 20px;
  }


  /* BLOQUE TESTIMONIOS */
  .ff-testimonios-box {
    max-width: 460px;
    margin: 40px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 16px;
    font-family: 'Helvetica Neue', sans-serif;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  }

  .ff-testimonios-title {
    background-color: #145A32;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 12px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 12px 12px 0 0;
    margin: -20px -20px 25px -20px;
  }

  .ff-testimonio {
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
  }

  .ff-testimonio-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  .ff-testimonio-texto {
    flex: 1;
  }

  .ff-testimonio-nombre {
    font-weight: bold;
    color: #145A32;
    margin-bottom: 4px;
  }

  .ff-testimonio-stars {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 6px;
  }

  .ff-testimonio-stars svg {
    width: 14px;
    height: 14px;
    fill: #FFD700;
    margin-right: 2px;
  }

  .ff-testimonio-frase {
    font-size: 14px;
    color: #333;
    margin-top: 4px;
  }

  .ff-testimonio-final-img {
    width: 100%;
    margin-top: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  }


  
  /* BLOQUE USO RECURRENTE */
  .ff-uso-box {
    max-width: 460px;
    margin: 40px auto;
    padding: 20px;
    font-family: 'Helvetica Neue', sans-serif;
    background-color: #ffffff;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }

  .ff-uso-item {
    margin-bottom: 30px;
  }

  .ff-uso-icono {
    width: 50px;
    margin-bottom: 10px;
  }

  .ff-uso-titulo {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #000;
  }

  .ff-uso-titulo strong {
    color: #145A32;
  }

  .ff-uso-texto {
    font-size: 14px;
    color: #333;
    line-height: 1.5;
  }

  .ff-uso-texto strong {
    color: #000;
  }


  /* BLOQUE ELEGIRNOS */
  .ff-elegir-box {
    max-width: 480px;
    margin: 40px auto;
    padding: 30px 20px;
    background-image: url('URL_IMAGEN_DE_FONDO');
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    color: white;
    font-family: 'Helvetica Neue', sans-serif;
    position: relative;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }

  .ff-elegir-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 25px;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  }

  .ff-elegir-item {
    background-color: rgba(255, 255, 255, 0.12);
    border-left: 5px solid #ffffff;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 20px;
    text-align: left;
  }

  .ff-elegir-item strong {
    display: block;
    font-size: 15px;
    margin-bottom: 5px;
    color: #ffffff;
  }

  .ff-elegir-item p {
    font-size: 13px;
    color: #f0f0f0;
    margin: 0;
  }

  .ff-elegir-final {
    font-size: 16px;
    margin: 30px 0 15px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  }

  .ff-btn-shake {
    background-color: #ffffff;
    color: #145A32;
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
