
// Estilos para bloque visual de producto tipo Spirulina
const style = document.createElement('style');
style.innerHTML = `
.spiru-box {
  max-width: 450px;
  background: #dff8df;
  border-radius: 15px;
  padding: 20px;
  font-family: sans-serif;
  text-align: center;
  margin: 0 auto 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.spiru-img-top {
  width: 100%;
  max-width: 180px;
  margin-bottom: 15px;
}

.spiru-hook {
  color: #14532d;
  font-size: 26px;
  font-weight: 800;
  margin: 10px 0 5px;
}

.spiru-desc {
  font-size: 15px;
  color: #333;
  margin-bottom: 15px;
}

.spiru-name {
  font-size: 18px;
  color: #065f46;
  font-weight: 700;
  margin-bottom: 18px;
}

.spiru-img-wrapper {
  background: rgba(0, 0, 0, 0.05);
  padding: 12px;
  border-radius: 12px;
  display: inline-block;
}

.spiru-img-bottom {
  width: 100%;
  max-width: 160px;
}
`;
document.head.appendChild(style);
