
// landing-fingerflex.js - Estructura general de la landing

document.addEventListener("DOMContentLoaded", function () {
  // BLOQUE VISUAL
  const visual = document.createElement("div");
  visual.innerHTML = `
    <div style='text-align:center; background:#e7fdfc; padding:20px; border-radius:20px; margin-bottom:30px;'>
      <img src='URL_IMAGEN_DESTACADA' alt='Finger Flex' style='max-width:100%; border-radius:12px; margin-bottom:10px;' />
      <h2 style='font-size:26px; color:#007C80; margin:10px 0;'>¡Adiós al dolor y la incomodidad!</h2>
      <p style='color:#333; font-size:18px;'>Finger Flex te ayuda a recuperar la movilidad y aliviar molestias en los dedos y articulaciones.</p>
    </div>
  `;

  // CARACTERÍSTICAS CON EMOJIS
  const caracteristicas = document.createElement("div");
  caracteristicas.innerHTML = `
    <div style='background:#e0f9ed; border-radius:20px; padding:20px; box-shadow:0 4px 10px rgba(0,0,0,0.1); margin-bottom:30px;'>
      <h3 style='text-align:center; color:#007C80; font-size:24px; margin-bottom:15px;'>Características del Finger Flex</h3>
      <ul style='list-style:none; padding:0; margin:0; font-size:20px; color:#333;'>
        <li style='margin-bottom:15px;'>🧘‍♂️ &nbsp; Mejora la flexibilidad de los dedos</li>
        <li style='margin-bottom:15px;'>💪 &nbsp; Fortalece articulaciones y músculos</li>
        <li style='margin-bottom:15px;'>🏠 &nbsp; Ideal para uso en casa o trabajo</li>
      </ul>
    </div>
  `;

  // CTA CON BOTÓN
  const cta = document.createElement("div");
  cta.innerHTML = `
    <div style='text-align:center; margin:30px 0;'>
      <img src='URL_GIF_PRODUCTO' alt='Gif producto' style='width:100%; max-width:300px; margin-bottom:15px;' />
      <h3 style='font-size:22px; margin-bottom:10px;'>¡No esperes más!</h3>
      <button class='compraDirectaButton' style='background-color:#29C87B; color:white; font-size:18px; padding:12px 25px; border:none; border-radius:10px; cursor:pointer;'>
        COMPRAR AHORA
      </button>
    </div>
  `;

  // CÓMO FUNCIONA
  const comoFunciona = document.createElement("div");
  comoFunciona.innerHTML = `
    <div style='background:#f9f9f9; padding:20px; border-radius:20px; margin:30px 0; border:1px solid #ccc;'>
      <h3 style='color:#007C80; font-size:24px; text-align:center; margin-bottom:15px;'>¿Cómo se usa?</h3>
      <ol style='font-size:18px; color:#444; max-width:600px; margin:auto; text-align:left;'>
        <li>Colocá el Finger Flex en tus dedos.</li>
        <li>Hacé movimientos suaves de apertura y cierre.</li>
        <li>Usalo todos los días durante 5 a 10 minutos.</li>
      </ol>
    </div>
  `;

  // RESULTADOS REALES
  const resultados = document.createElement("div");
  resultados.innerHTML = `
    <div style='background-color:#007C80; padding: 20px; border-radius: 20px; font-family: sans-serif; color: white; text-align: center; margin-bottom: 30px;'>
      <h2 style='font-size: 28px; margin-bottom: 10px;'>Resultados <br><strong>REALES</strong></h2>
      <div style='display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 10px;'>
        <div style='position: relative;'>
          <img src='URL_IMAGEN_DIA1_1' alt='Antes - Día 1' style='width: 150px; border-radius: 10px;'>
          <span style='position: absolute; top: 8px; left: 8px; background-color:#004f4f; padding: 3px 10px; border-radius: 20px; font-size: 14px;'>Día 1</span>
        </div>
        <div style='position: relative;'>
          <img src='URL_IMAGEN_DIA30_1' alt='Después - Día 30' style='width: 150px; border-radius: 10px;'>
          <span style='position: absolute; bottom: 8px; right: 8px; background-color:#004f4f; padding: 3px 10px; border-radius: 20px; font-size: 14px;'>Día 30</span>
        </div>
      </div>
      <p style='font-size: 20px; background-color: white; color: #007C80; padding: 15px 10px; border-radius: 15px; font-weight: bold; margin-top: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);'>
        ¡Estás a un paso de eliminar este problema!
      </p>
    </div>
  `;

  // Agregamos todos los bloques al body
  const destino = document.getElementById("bloque-landing-fingerflex");
  destino.appendChild(visual);
  destino.appendChild(caracteristicas);
  destino.appendChild(cta);
  destino.appendChild(comoFunciona);
  destino.appendChild(resultados);

  // Funcionalidad del botón
  document.querySelectorAll('.compraDirectaButton').forEach(button => {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
