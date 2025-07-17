
// FINGER FLEX VISUAL BLOCK – BIENESTARACTIVO STYLE

const fingerFlexContainer = document.createElement('div');
fingerFlexContainer.style.maxWidth = '350px';
fingerFlexContainer.style.margin = '20px auto';
fingerFlexContainer.style.fontFamily = 'sans-serif';
fingerFlexContainer.style.borderRadius = '16px';
fingerFlexContainer.style.overflow = 'hidden';
fingerFlexContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
fingerFlexContainer.style.background = 'linear-gradient(to bottom, #e0f9ed, #ffffff)';
fingerFlexContainer.style.border = '3px solid #29C87B';

fingerFlexContainer.innerHTML = `
  <div style="background: #ffffff; padding: 12px;">
    <img src="URL_IMAGEN_FRONTAL" alt="Imagen problema" style="width: 100%; border-radius: 12px;" />
    <h2 style="color: #29C87B; font-size: 20px; margin: 12px 0 8px;">¡Alinea tus dedos de forma fácil!</h2>
    <p style="color: #555; font-size: 14px; margin: 0 0 12px;">Este corrector es la innovación de la ortopedia inteligente.</p>
  </div>
  <div style="background: #29C87B; color: white; text-align: center; padding: 8px; font-weight: bold; font-size: 16px;">
    Finger Flex
  </div>
  <div style="padding: 10px; background: #f9f9f9;">
    <img src="URL_IMAGEN_ABAJO" alt="Imagen producto colocado" style="width: 100%; border-radius: 12px; border: 2px solid #29C87B;" />
  </div>
`;

document.currentScript.parentNode.insertBefore(fingerFlexContainer, document.currentScript);
