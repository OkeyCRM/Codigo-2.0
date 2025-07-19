
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




/* BLOQUE TESTIMONIOS */
const testimonioStyle = document.createElement('style');
testimonioStyle.innerHTML = `
  .ff-testimonios-box {
    text-align: center;
    margin: 40px auto;
    font-family: sans-serif;
  }
  .ff-testimonios-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 25px;
    color: #145A32;
  }
  .ff-testimonio {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .ff-testimonio-img {
    width: 100px;
    border-radius: 12px;
  }
  .ff-testimonio-texto {
    max-width: 300px;
    text-align: left;
  }
  .ff-testimonio-nombre {
    font-weight: bold;
    font-size: 14px;
  }
  .ff-testimonio-frase {
    font-style: italic;
    margin-top: 8px;
    font-size: 14px;
  }
  .ff-testimonio-final-img {
    margin-top: 30px;
    width: 100%;
    border-radius: 16px;
  }
`;
document.head.appendChild(testimonioStyle);

/* BLOQUE USO RECURRENTE */
const usoStyle = document.createElement('style');
usoStyle.innerHTML = `
  .ff-uso-box {
    margin: 40px auto;
    font-family: sans-serif;
  }
  .ff-uso-item {
    margin-bottom: 30px;
    text-align: center;
  }
  .ff-uso-icono {
    width: 60px;
    margin-bottom: 10px;
  }
  .ff-uso-titulo {
    font-weight: bold;
    color: #145A32;
    font-size: 16px;
  }
  .ff-uso-texto {
    padding: 0 20px;
    font-size: 14px;
  }
`;
document.head.appendChild(usoStyle);

/* BLOQUE RESULTADOS REALES */
const resultadosStyle = document.createElement('style');
resultadosStyle.innerHTML = `
  .ff-resultados-box {
    text-align: center;
    font-family: sans-serif;
    margin: 40px auto;
  }
  .ff-resultados-title {
    font-size: 20px;
    font-weight: bold;
    color: #145A32;
    margin-bottom: 20px;
  }
  .ff-resultados-img img {
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    margin: 10px 0;
  }
  .ff-resultados-frase {
    font-weight: bold;
    margin: 20px 0;
    color: #145A32;
  }
`;
document.head.appendChild(resultadosStyle);

/* BLOQUE POR QUÉ ELEGIRNOS */
const elegirnosStyle = document.createElement('style');
elegirnosStyle.innerHTML = `
  .ff-elegirnos-box {
    text-align: center;
    font-family: sans-serif;
    margin: 40px auto;
    background: #e6f9f0;
    padding: 30px 15px;
    border-radius: 20px;
  }
  .ff-elegirnos-box h2 {
    font-size: 20px;
    color: #145A32;
    text-decoration: underline #29C87B;
    margin-bottom: 20px;
  }
  .ff-elegirnos-item {
    background: white;
    border-radius: 16px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    position: relative;
  }
  .ff-elegirnos-item h3 {
    color: #145A32;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .ff-elegirnos-item p {
    font-size: 14px;
    color: #333;
  }
  .ff-elegirnos-emoji {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 22px;
  }
  .ff-elegirnos-cta-msg {
    font-weight: bold;
    margin: 20px 0;
    color: #145A32;
  }
`;
document.head.appendChild(elegirnosStyle);

/* BLOQUE ENVÍOS Y FINANCIACIÓN */
const envioStyle = document.createElement('style');
envioStyle.innerHTML = `
  .ff-envios-box {
    font-family: sans-serif;
    text-align: center;
    padding: 20px;
    background: #e0f9ed;
    border-radius: 20px;
    margin: 40px auto;
  }
  .ff-envios-title {
    font-size: 18px;
    font-weight: bold;
    color: #145A32;
    margin-bottom: 10px;
  }
  .ff-envios-subtitle {
    font-size: 14px;
    margin-bottom: 15px;
  }
  .ff-envios-badges {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  .ff-envios-badge {
    background: #29C87B;
    color: white;
    padding: 10px 16px;
    border-radius: 10px;
    font-size: 13px;
  }
  .ff-envios-badge small {
    display: block;
    font-size: 11px;
    margin-top: 3px;
  }
  .ff-separador {
    height: 1px;
    background: #b2d8c7;
    margin: 20px auto;
    max-width: 300px;
  }
  .ff-financia-title {
    font-size: 14px;
    margin-top: 10px;
    color: #333;
  }
  .ff-financia-hook {
    font-weight: bold;
    color: #145A32;
    margin-top: 8px;
  }
`;
document.head.appendChild(envioStyle);
