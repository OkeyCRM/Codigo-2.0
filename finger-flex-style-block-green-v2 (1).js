
// Estilos para Finger Flex - Versión fondo verde pastel y texto negro
const style = document.createElement('style');
style.textContent = `
.finger-flex-box {
  max-width: 450px;
  background-color: #d4f5e6; /* Verde pastel atractivo */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  margin: 0 auto;
}

.finger-flex-img-top {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
}

.finger-flex-hook {
  color: #111; /* Negro fuerte */
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.finger-flex-desc {
  color: #444; /* Negro más suave */
  font-size: 16px;
  margin-bottom: 15px;
}

.finger-flex-tag {
  display: inline-block;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 15px;
  margin-bottom: 15px;
  border: 2px solid #333;
}

.finger-flex-img-bottom {
  width: 100%;
  border-radius: 12px;
  border: 3px solid #7fd6ae; /* Borde verde para resaltar */
}
`;
document.head.appendChild(style);
