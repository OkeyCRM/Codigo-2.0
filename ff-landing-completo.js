
// === ESTILOS: BLOQUE VISUAL PRINCIPAL ===
const style1 = document.createElement("style");
style1.textContent = `
.spiru-box {
  max-width: 500px;
  margin: 0 auto 40px auto;
  font-family: sans-serif;
  text-align: center;
}
.spiru-img-top {
  max-width: 100%;
  border-radius: 10px;
}
.spiru-hook {
  background-color: #004225;
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 20px;
  margin: 20px auto 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  display: inline-block;
}
.spiru-desc {
  font-size: 16px;
  color: #004225;
  margin-bottom: 15px;
}
.spiru-name {
  background-color: #004225;
  color: white;
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  font-size: 18px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
.spiru-img-bottom {
  max-width: 100%;
  margin-top: 20px;
  border-radius: 10px;
}
`;

// === ESTILOS: CARACTERÍSTICAS CON EMOJIS ===
const style2 = document.createElement("style");
style2.textContent = `
.ff-caracteristicas {
  max-width: 700px;
  margin: 40px auto;
  border: 2px solid #004225;
  border-radius: 12px;
  padding: 25px;
  font-family: sans-serif;
  box-shadow: 0 6px 12px rgba(0,0,0,0.08);
}
.ff-title {
  font-weight: bold;
  background: #004225;
  color: white;
  padding: 12px;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.ff-item {
  margin-bottom: 20px;
}
.ff-item p {
  margin: 8px 0 0;
  font-size: 15px;
}
.ff-subtitle {
  font-weight: bold;
  font-size: 16px;
  color: #004225;
}
`;

// === ESTILOS: CTA CON BOTÓN ===
const style3 = document.createElement("style");
style3.textContent = `
.ff-cta {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  font-family: sans-serif;
}
.ff-cta img {
  max-width: 100%;
  margin-bottom: 20px;
}
.ff-cta h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #004225;
}
.compraDirectaButton {
  background-color: #004225;
  color: white;
  padding: 14px 30px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
`;

// === ESTILOS: ¿CÓMO FUNCIONA? ===
const style4 = document.createElement("style");
style4.textContent = `
.ff-funciona-box {
  max-width: 700px;
  margin: 50px auto;
  font-family: sans-serif;
  border: 2px solid #004225;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
}
.ff-funciona-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #004225;
  margin-bottom: 20px;
}
.ff-funciona-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}
.ff-funciona-icono {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.ff-funciona-subtitulo {
  font-weight: bold;
  color: #004225;
}
`;

// === ESTILOS: COMPARATIVA NOSOTROS VS ELLOS ===
const style5 = document.createElement("style");
style5.textContent = `
.ff-comparativa-box {
  max-width: 700px;
  margin: 40px auto;
  border: 3px solid #004225;
  border-radius: 15px;
  font-family: sans-serif;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
}
.ff-comparativa-header {
  display: flex;
  justify-content: center;
  background: white;
  margin-bottom: 10px;
  gap: 10px;
}
.ff-comparativa-tab {
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 25px;
  font-size: 18px;
  color: white;
}
.ff-comparativa-tab.nosotros {
  background-color: #004225;
}
.ff-comparativa-tab.ellos {
  background-color: #b9c6bb;
  color: #004225;
}
.ff-comparativa-cuerpo {
  display: flex;
  flex-direction: column;
}
.ff-comparativa-row {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
}
.ff-comparativa-nosotros,
.ff-comparativa-ellos {
  flex: 1;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ff-comparativa-nosotros {
  background-color: #004225;
  color: white;
  border-right: 1px solid white;
}
.ff-comparativa-ellos {
  background-color: #dce7de;
  color: #004225;
}
`;

// === FUNCIONALIDAD BOTÓN CTA ===
document.querySelectorAll('.compraDirectaButton').forEach(button => {
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Inyectar todos los estilos
document.head.appendChild(style1);
document.head.appendChild(style2);
document.head.appendChild(style3);
document.head.appendChild(style4);
document.head.appendChild(style5);
