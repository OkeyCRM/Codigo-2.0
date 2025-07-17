
const style = document.createElement('style');
style.textContent = `
  .finger-flex-box {
    max-width: 450px;
    margin: 20px auto;
    padding: 15px;
    border-radius: 15px;
    background: linear-gradient(to bottom, #e0f9ed, #ffffff);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
  }

  .finger-flex-img-top,
  .finger-flex-img-bottom {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .finger-flex-hook {
    font-size: 1.6rem;
    font-weight: bold;
    color: #ffffff;
    background-color: #29C87B;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 0 auto 10px auto;
    display: inline-block;
  }

  .finger-flex-desc {
    font-size: 1rem;
    color: #333;
    margin-bottom: 15px;
  }

  .finger-flex-tag {
    display: inline-block;
    background-color: #ffffff;
    color: #29C87B;
    border: 2px solid #29C87B;
    padding: 6px 15px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 0.95rem;
    margin-bottom: 15px;
  }
`;
document.head.appendChild(style);
