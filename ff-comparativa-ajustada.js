
// Estilos para la tabla comparativa con encabezado por fuera
const style = document.createElement('style');
style.innerHTML = `
.ff-comparativa-wrapper {
  max-width: 720px;
  margin: 40px auto;
  font-family: sans-serif;
}

.ff-comparativa-header {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: -10px;
  position: relative;
  z-index: 2;
}

.ff-comparativa-tab {
  padding: 10px 25px;
  border-radius: 40px;
  font-weight: bold;
  font-size: 18px;
}

.ff-comparativa-tab.nuestros {
  background-color: #004d26;
  color: white;
}

.ff-comparativa-tab.ellos {
  background-color: #c5d9cc;
  color: #004d26;
}

.ff-comparativa-box {
  border: 3px solid #004d26;
  border-radius: 14px;
  overflow: hidden;
  background: white;
  padding: 30px 20px;
  position: relative;
  z-index: 1;
}

.ff-comparativa-cuerpo {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.ff-comparativa-col {
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ff-comparativa-item {
  padding: 15px 20px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
}

.ff-comparativa-col.izq .ff-comparativa-item {
  background-color: #004d26;
  color: white;
}

.ff-comparativa-col.der .ff-comparativa-item {
  background-color: #c5d9cc;
  color: #004d26;
}
`;
document.head.appendChild(style);
