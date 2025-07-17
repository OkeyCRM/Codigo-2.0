
const style = document.createElement('style');
style.textContent = `
  .finger-flex-box {
    max-width: 450px;
    margin: 0 auto 40px auto;
    background: linear-gradient(to bottom, #c6f7d0, #ffffff);
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 20px;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
  }

  .finger-flex-img-top,
  .finger-flex-img-bottom {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 20px;
  }

  .finger-flex-hook {
    font-size: 22px;
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .finger-flex-desc {
    font-size: 16px;
    color: #333;
    margin-bottom: 15px;
  }

  .finger-flex-tag {
    display: inline-block;
    background-color: #7F4C8A;
    color: white;
    padding: 8px 20px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
    border: 2px solid white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;
document.head.appendChild(style);
