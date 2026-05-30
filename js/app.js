/* 
  Mansão Maromba - JavaScript do App
  Interações interativas e efeitos premium
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1. HEADER SCROLL EFFECT
  const header = document.querySelector('.header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  // Executa uma vez no início caso o usuário já inicie com scroll
  handleScroll();

  // 2. MOBILE MENU TOGGLE
  const toggleBtn = document.querySelector('.header__toggle');
  const menu = document.querySelector('.header__menu');
  const menuLinks = document.querySelectorAll('.header__menu-link');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('header__toggle--active');
      menu.classList.toggle('header__menu--active');
    });

    // Fecha o menu ao clicar em qualquer link
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('header__toggle--active');
        menu.classList.remove('header__menu--active');
      });
    });
  }

  // 3. ANIMAÇÃO DE NÚMEROS (CONTADOR PROGRESSIVO)
  const metricVals = document.querySelectorAll('.about__metric-val');
  
  const animateNumbers = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const speed = 100; // Quanto menor, mais rápido
    let count = 0;
    
    const updateCount = () => {
      const increment = Math.ceil(target / speed);
      if (count < target) {
        count += increment;
        if (count > target) count = target;
        element.innerText = count + suffix;
        setTimeout(updateCount, 15);
      } else {
        element.innerText = target + suffix;
      }
    };
    
    updateCount();
  };

  // Intersection Observer para disparar a animação dos números quando estiver visível
  const observerOptions = {
    threshold: 0.5
  };

  const metricsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const metricVal = entry.target;
        animateNumbers(metricVal);
        observer.unobserve(metricVal); // Roda apenas uma vez
      }
    });
  }, observerOptions);

  metricVals.forEach(val => {
    metricsObserver.observe(val);
  });

  // 4. EFEITO DE PARTICULAS NO FUNDO DE COMPRA (INTERATIVO)
  // Adiciona um pequeno rastro de faíscas laranjas ao passar o mouse por cima da seção CTA
  const ctaSection = document.querySelector('.cta');
  if (ctaSection) {
    ctaSection.addEventListener('mousemove', (e) => {
      const rect = ctaSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Cria uma faísca a cada movimento
      if (Math.random() < 0.15) {
        const spark = document.createElement('div');
        spark.style.position = 'absolute';
        spark.style.width = '4px';
        spark.style.height = '4px';
        spark.style.borderRadius = '50%';
        spark.style.backgroundColor = 'var(--color-accent-secondary)';
        spark.style.boxShadow = '0 0 10px var(--color-accent)';
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.pointerEvents = 'none';
        spark.style.transform = 'translate(-50%, -50%)';
        
        ctaSection.appendChild(spark);
        
        // Animação de subida e fadeout
        let opacity = 1;
        let scale = 1;
        let translateY = 0;
        
        const fade = () => {
          opacity -= 0.02;
          scale += 0.05;
          translateY -= 1.5;
          spark.style.opacity = opacity;
          spark.style.transform = `translate(-50%, -50%) scale(${scale}) translateY(${translateY}px)`;
          
          if (opacity > 0) {
            requestAnimationFrame(fade);
          } else {
            spark.remove();
          }
        };
        
        requestAnimationFrame(fade);
      }
    });
  }
});
