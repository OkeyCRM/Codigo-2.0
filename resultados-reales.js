
document.addEventListener('DOMContentLoaded', function () {
    const seccionResultados = document.createElement('div');
    seccionResultados.innerHTML = `
        <div style="max-width: 320px; margin: 20px auto; background: #f3eafc; padding: 20px; border-radius: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.15); font-family: sans-serif; text-align: center; color: #5e2ca5;">
            <h2 style="margin-top: 0; font-size: 26px; font-weight: bold;">Resultados <br><span style="font-size: 30px;">REALES</span></h2>
            <div style="margin-bottom: 20px;">
                <div style="position: relative;">
                    <span style="position: absolute; top: 8px; left: 8px; background: #a362ea; color: white; padding: 2px 8px; border-radius: 8px; font-size: 12px;">Día 1</span>
                    <span style="position: absolute; top: 8px; right: 8px; background: #a362ea; color: white; padding: 2px 8px; border-radius: 8px; font-size: 12px;">Día 30</span>
                    <img src="URL_DE_LA_IMAGEN_BEFORE_AFTER_1" alt="Antes y después" style="width: 100%; border-radius: 10px; margin-top: 20px;">
                </div>
            </div>
            <div style="margin-bottom: 20px;">
                <div style="position: relative;">
                    <span style="position: absolute; top: 8px; left: 8px; background: #a362ea; color: white; padding: 2px 8px; border-radius: 8px; font-size: 12px;">Día 1</span>
                    <span style="position: absolute; top: 8px; right: 8px; background: #a362ea; color: white; padding: 2px 8px; border-radius: 8px; font-size: 12px;">Día 42</span>
                    <img src="URL_DE_LA_IMAGEN_BEFORE_AFTER_2" alt="Antes y después 2" style="width: 100%; border-radius: 10px; margin-top: 20px;">
                </div>
            </div>
            <p style="font-size: 20px; font-weight: bold; color: #5e2ca5;">¡Estás a un paso de eliminar este problema!</p>
        </div>
    `;
    document.body.appendChild(seccionResultados);
});
