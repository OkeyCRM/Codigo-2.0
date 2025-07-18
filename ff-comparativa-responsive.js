document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.ff-comparativa-cuerpo');
  if (container) {
    container.style.display = 'flex';
    container.style.flexWrap = 'nowrap';
    container.style.flexDirection = 'row';
    container.style.gap = '10px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';
  }

  const cols = document.querySelectorAll('.ff-comparativa-col');
  cols.forEach(col => {
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
    col.style.gap = '10px';
    col.style.flex = '1';
    col.style.alignItems = 'center';
  });

  const izqItems = document.querySelectorAll('.ff-comparativa-col.izq .ff-comparativa-item');
  izqItems.forEach(item => {
    item.style.backgroundColor = '#004D26';
    item.style.color = '#fff';
    item.style.borderRadius = '12px';
    item.style.padding = '10px 20px';
    item.style.fontWeight = 'bold';
    item.style.textAlign = 'center';
    item.style.minWidth = '180px';
  });

  const derItems = document.querySelectorAll('.ff-comparativa-col.der .ff-comparativa-item');
  derItems.forEach(item => {
    item.style.backgroundColor = '#d1e3d6';
    item.style.color = '#004D26';
    item.style.fontWeight = 'bold';
    item.style.borderRadius = '999px';
    item.style.width = '40px';
    item.style.height = '40px';
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'center';
  });
});