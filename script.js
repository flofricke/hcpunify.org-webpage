// Language switching functionality
const langButtons = document.querySelectorAll('.language-switch button');
const elements = document.querySelectorAll('[data-lang-de], [data-lang-en]');

function setLanguage(lang) {
  elements.forEach(el => {
    const text = el.getAttribute(`data-lang-${lang}`);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });
  document.documentElement.lang = lang;
  
  // Update active button
  langButtons.forEach(btn => btn.classList.remove('active'));
  const activeButton = document.getElementById(`lang-${lang}`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
  
  // Save language preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
}

// Load and apply saved language immediately
function loadLanguageImmediate() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'de';
  
  // Apply language immediately without waiting for DOM
  const allElements = document.querySelectorAll('[data-lang-de], [data-lang-en]');
  allElements.forEach(el => {
    const text = el.getAttribute(`data-lang-${savedLang}`);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });
  
  document.documentElement.lang = savedLang;
  
  // Update active button when available
  const updateButtons = () => {
    const buttons = document.querySelectorAll('.language-switch button');
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeButton = document.getElementById(`lang-${savedLang}`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  };
  
  // Try to update buttons immediately, then again when DOM is ready
  updateButtons();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateButtons);
  }
}

// Event listeners for language buttons
function initLanguageButtons() {
  const buttons = document.querySelectorAll('.language-switch button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.id.split('-')[1];
      setLanguage(lang);
    });
  });
}

// Initialize immediately and on DOM ready
loadLanguageImmediate();
document.addEventListener('DOMContentLoaded', () => {
  loadLanguageImmediate();
  initLanguageButtons();
  initSmoothScrolling();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      if (targetId === '#home') {
        // Scroll to top for home link
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Scroll to section with offset for fixed header
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const elementPosition = targetElement.offsetTop - headerHeight - 20; // 20px extra spacing
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
