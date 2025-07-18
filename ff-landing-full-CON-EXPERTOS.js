
const expertosStyle = document.createElement('style');
expertosStyle.innerHTML = `
  .ff-expertos-box {
    max-width: 480px;
    margin: 50px auto;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    color: #145A32;
  }

  .ff-expertos-titulo {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
    border-bottom: 3px solid #7BE0A2;
    display: inline-block;
    padding-bottom: 6px;
  }

  .ff-expertos-nombre {
    font-size: 14px;
    font-weight: normal;
    color: #333;
    margin-bottom: 16px;
    line-height: 1.4;
  }

  .ff-expertos-cita {
    font-size: 15px;
    font-style: italic;
    margin-bottom: 20px;
    color: #145A32;
    padding: 0 15px;
  }

  .ff-expertos-cita strong {
    font-weight: bold;
    color: #145A32;
  }

  .ff-expertos-img {
    width: 140px;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`;
document.head.appendChild(expertosStyle);
