// Small helpers: set current year in footer
(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    const y = new Date().getFullYear();
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = y;
  });
})();
