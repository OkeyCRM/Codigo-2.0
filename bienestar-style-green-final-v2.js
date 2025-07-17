
const style = document.createElement('style');
style.textContent = `
.bienestar-verde-box {
  max-width: 450px;
  background-color: #d8fdd1;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 25px 20px;
  margin: 30px auto;
  text-align: center;
  font-family: 'Helvetica Neue', sans-serif;
  color: #1d1d1d;
}

.bienestar-img-top {
  width: 100%;
  max-width: 220px;
  margin-bottom: 25px;
}

.bienestar-hook {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1c1c1c;
}

.bienestar-desc {
  font-size: 17px;
  color: #444;
  margin-bottom: 20px;
}

.bienestar-nombre {
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 12px;
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #111;
}

.bienestar-img-bottom-container {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 15px;
  border-radius: 16px;
  display: inline-block;
}

.bienestar-img-bottom {
  width: 100%;
  max-width: 200px;
  display: block;
  margin: 0 auto;
}
`;
document.head.appendChild(style);
