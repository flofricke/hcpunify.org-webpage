// Small helpers: set current year in footer
(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    const y = new Date().getFullYear();
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = y;
  });
})();

// Masonry gallery + lightbox
(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelectorAll('.masonry-grid img');
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.querySelector('.lb-img');
    const btnClose = document.querySelector('.lb-close');
    const btnNext = document.querySelector('.lb-next');
    const btnPrev = document.querySelector('.lb-prev');
    let current = 0;

    if(!grid.length || !lightbox) return;

    function openAt(idx){
      current = idx;
      const src = grid[current].getAttribute('src');
      const alt = grid[current].getAttribute('alt') || '';
      lbImg.src = src;
      lbImg.alt = alt;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close(){
      lightbox.setAttribute('aria-hidden','true');
      lbImg.src = '';
      document.body.style.overflow = '';
    }
    function next(){
      current = (current + 1) % grid.length;
      openAt(current);
    }
    function prev(){
      current = (current - 1 + grid.length) % grid.length;
      openAt(current);
    }

    grid.forEach((img, i)=>{
      img.addEventListener('click', ()=>openAt(i));
      img.style.cursor = 'zoom-in';
    });

    btnClose.addEventListener('click', close);
    btnNext.addEventListener('click', next);
    btnPrev.addEventListener('click', prev);

    lightbox.addEventListener('click', (e)=>{
      if(e.target === lightbox) close();
    });

    document.addEventListener('keydown', (e)=>{
      if(lightbox.getAttribute('aria-hidden') === 'false'){
        if(e.key === 'Escape') close();
        if(e.key === 'ArrowRight') next();
        if(e.key === 'ArrowLeft') prev();
      }
    });
  });
})();
