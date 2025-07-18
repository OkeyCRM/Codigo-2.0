
// COMPARATIVA FINGER FLEX vs OTROS - ESTILO RESPONSIVE
document.addEventListener("DOMContentLoaded", function () {
  const estilo = document.createElement("style");
  estilo.textContent = `
    .ff-comparativa-wrapper {
      max-width: 800px;
      margin: 0 auto;
      font-family: sans-serif;
    }

    .ff-comparativa-header {
      display: flex;
      justify-content: center;
      margin-bottom: -10px;
      position: relative;
      z-index: 2;
    }

    .ff-comparativa-tab {
      padding: 8px 20px;
      border-radius: 999px;
      font-weight: bold;
      font-size: 14px;
      margin: 0 2px;
    }

    .ff-comparativa-tab.nuestros {
      background-color: #004d26;
      color: white;
    }

    .ff-comparativa-tab.ellos {
      background-color: #d3e3d3;
      color: #004d26;
    }

    .ff-comparativa-box {
      border: 2px solid #004d26;
      border-radius: 12px;
      padding: 20px;
    }

    .ff-comparativa-cuerpo {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .ff-comparativa-col {
      flex: 1 1 45%;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .ff-comparativa-col.izq .ff-comparativa-item {
      background-color: #004d26;
      color: white;
      padding: 12px 16px;
      border-radius: 12px;
      font-weight: bold;
      text-align: center;
    }

    .ff-comparativa-col.der .ff-comparativa-item {
      background-color: #d3e3d3;
      color: #004d26;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      font-weight: bold;
    }

    /* RESPONSIVE MOBILE */
    @media (max-width: 600px) {
      .ff-comparativa-cuerpo {
        flex-direction: column;
        align-items: center;
      }
      .ff-comparativa-col {
        flex: 1 1 100%;
        width: 100%;
        align-items: center;
      }
    }
  `;
  document.head.appendChild(estilo);

  // Agregar "x" a cada ítem de la columna derecha
  document.querySelectorAll(".ff-comparativa-col.der .ff-comparativa-item").forEach(el => {
    el.textContent = "x";
  });
});
