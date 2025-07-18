
// ESTILOS COMPLETOS PARA FINGER FLEX

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
  }

  /* BLOQUE ¿CÓMO FUNCIONA? */
  .ff-funciona-box {
    max-width: 500px;
    margin: 0 auto 40px;
    padding: 25px 20px;
    border: 2px solid #145A32;
    border-radius: 18px;
    font-family: 'Helvetica Neue', sans-serif;
    color: #145A32;
    background-color: #ffffff;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  }

  .ff-funciona-title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .ff-funciona-contenido {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .ff-funciona-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }

  .ff-funciona-icono {
    width: 48px;
    height: 48px;
  }

  .ff-funciona-subtitulo {
    background-color: #145A32;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  .ff-funciona-texto p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
`;
document.head.appendChild(style);
