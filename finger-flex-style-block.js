const styleFingerFlex = document.createElement('style');
styleFingerFlex.textContent = `
  .finger-flex-box {
    max-width: 350px;
    margin: 0 auto;
    background: linear-gradient(to bottom, #B38CB4, #fff);
    border-radius: 15px;
    padding: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: sans-serif;
  }
  .finger-flex-box .img-top {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 12px;
  }
  .finger-flex-box .hook {
    color: #7F4C8A;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  .finger-flex-box .subhook {
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 14px;
  }
  .finger-flex-box .product-name {
    background-color: #7F4C8A;
    color: white;
    padding: 8px 18px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 15px;
    display: inline-block;
  }
`;
document.head.appendChild(styleFingerFlex);