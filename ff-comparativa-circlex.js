
// Estilos para la comparativa final ajustada (Finger Flex vs Otros)
const style = document.createElement('style');
style.textContent = `
  .ff-comparativa-wrapper {
    font-family: sans-serif;
    text-align: center;
    margin-bottom: 30px;
  }
  .ff-comparativa-header {
    display: flex;
    justify-content: center;
    margin-bottom: -15px;
    position: relative;
    z-index: 2;
  }
  .ff-comparativa-tab {
    padding: 8px 25px;
    border-radius: 25px;
    font-weight: bold;
    margin: 0 2px;
  }
  .ff-comparativa-tab.nuestros {
    background-color: #004d26;
    color: white;
  }
  .ff-comparativa-tab.ellos {
    background-color: #cfe1d6;
    color: #004d26;
  }
  .ff-comparativa-box {
    border: 2px solid #004d26;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  .ff-comparativa-cuerpo {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .ff-comparativa-col {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ff-comparativa-col.izq .ff-comparativa-item {
    background-color: #004d26;
    color: white;
    font-weight: bold;
    padding: 15px;
    border-radius: 12px;
    min-width: 260px;
  }
  .ff-comparativa-col.der .ff-comparativa-item {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ff-comparativa-col.der .ff-comparativa-item::after {
    content: "x";
    color: #004d26;
    background-color: #cfe1d6;
    border-radius: 50%;
    padding: 10px 14px;
    font-weight: bold;
    font-size: 16px;
  }
`;
document.head.appendChild(style);
