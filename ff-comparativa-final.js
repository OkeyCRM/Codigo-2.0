
// Estilos para la tabla comparativa con bloques diferenciados para Finger Flex y Otros
const style = document.createElement('style');
style.innerHTML = `
.ff-comparativa-box {
  max-width: 700px;
  margin: 40px auto;
  border: 3px solid #004d26;
  border-radius: 14px;
  overflow: hidden;
  font-family: sans-serif;
  background: white;
}

.ff-comparativa-header {
  display: flex;
  justify-content: center;
  gap: 0;
  position: relative;
  top: -20px;
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

.ff-comparativa-cuerpo {
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
