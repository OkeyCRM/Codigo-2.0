
/* === ESTILOS GENERALES === */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background: #fff;
  color: #000;
}
img {
  max-width: 100%;
  display: block;
}
h2, h3 {
  margin: 0 0 10px;
}
button {
  background: #29C87B;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background: #24a96b;
}

/* === BLOQUE VISUAL === */
.spiru-box {
  text-align: center;
  padding: 30px 15px;
}
.spiru-img-top {
  max-width: 180px;
  margin: 0 auto 10px;
}
.spiru-hook {
  font-size: 24px;
  color: #29C87B;
  font-weight: bold;
  text-shadow: 1px 1px 2px #ccc;
}
.spiru-desc {
  font-size: 16px;
  margin: 10px 0;
}
.spiru-name {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}
.spiru-img-wrapper {
  margin-top: 20px;
}

/* === CARACTERÍSTICAS === */
.ff-caracteristicas {
  background: #f2fef9;
  padding: 20px;
}
.ff-title {
  color: #29C87B;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
}
.ff-item {
  margin-bottom: 20px;
}
.ff-subtitle {
  font-weight: bold;
  color: #000;
  font-size: 17px;
}

/* === CTA === */
.ff-cta {
  background: #29C87B;
  color: #fff;
  text-align: center;
  padding: 30px 20px;
}
.ff-cta img {
  margin: 0 auto 15px;
  max-width: 200px;
}
.ff-cta h2 {
  font-size: 22px;
  margin-bottom: 20px;
}

/* === FUNCIONA === */
.ff-funciona-box {
  background: #f8f8f8;
  padding: 20px;
}
.ff-funciona-title {
  font-size: 20px;
  font-weight: bold;
  color: #29C87B;
  text-align: center;
  margin-bottom: 20px;
}
.ff-funciona-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}
.ff-funciona-icono {
  width: 40px;
  height: 40px;
}

/* === RESULTADOS === */
.ff-resultados-box {
  background: #e8fdf3;
  padding: 30px 15px;
  text-align: center;
}
.ff-resultados-title {
  font-size: 22px;
  font-weight: bold;
  color: #29C87B;
  margin-bottom: 15px;
}
.ff-resultados-imgs {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}
.ff-resultados-footer {
  font-size: 18px;
  margin-bottom: 15px;
}

/* === TESTIMONIOS === */
.ff-testimonios-box {
  background: #f2fff7;
  padding: 30px 20px;
}
.ff-testimonios-title {
  background: #29C87B;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 12px;
  font-size: 20px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 20px;
}
.ff-testimonio {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}
.ff-testimonio img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.ff-testimonio strong {
  color: #000;
  font-weight: bold;
}

/* === CARACTERÍSTICAS DE USO === */
.ff-uso-box {
  background: #e5faef;
  padding: 20px;
}
.ff-uso-item {
  margin-bottom: 20px;
  text-align: center;
}
.ff-uso-item img {
  max-width: 50px;
  margin-bottom: 10px;
}
.ff-uso-item h3 {
  font-size: 18px;
  color: #29C87B;
}
.ff-uso-item p {
  font-size: 14px;
  color: #000;
}

/* === POR QUÉ ELEGIRNOS === */
.ff-elegir-box {
  padding: 30px 15px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ff-elegir-title {
  font-size: 22px;
  color: #29C87B;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-align: center;
  margin-bottom: 25px;
}
.ff-elegir-item {
  background: #d2f7e6;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  margin-bottom: 15px;
  position: relative;
}
.ff-elegir-item::after {
  content: '🛡️';
  position: absolute;
  right: 10px;
  top: 10px;
}
.ff-elegir-final {
  text-align: center;
  font-size: 18px;
  margin: 20px 0 10px;
  font-weight: bold;
  color: #29C87B;
}
.ff-btn-shake {
  animation: shake 2s infinite;
  display: block;
  margin: 0 auto;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}
