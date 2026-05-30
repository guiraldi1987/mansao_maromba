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

  // 5. EFEITO INTERATIVO DE TILT E ROTAÇÃO 3D NA LATA
  const productWrapper = document.querySelector('.hero__image-wrapper');
  const productImage = document.querySelector('.hero__image');
  const glowRing = document.querySelector('.hero__glow-ring');

  if (productWrapper && productImage) {
    productWrapper.addEventListener('mousemove', (e) => {
      const rect = productWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left; // Coordenada X dentro do container
      const y = e.clientY - rect.top;  // Coordenada Y dentro do container
      
      const width = rect.width;
      const height = rect.height;
      
      // Mapeamento de rotação máxima de 28 graus
      const rotateX = ((y / height) - 0.5) * -28; 
      const rotateY = ((x / width) - 0.5) * 28;
      
      // Ajusta a transição de forma dinâmica para movimentos imediatos sem atraso
      productImage.style.transition = 'transform 0.08s ease-out';
      productImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
      
      if (glowRing) {
        glowRing.style.transition = 'transform 0.08s ease-out';
        glowRing.style.transform = `translate(-50%, -50%) translate(${-rotateY * 0.5}px, ${-rotateX * 0.5}px) scale(1.05)`;
      }
    });

    productWrapper.addEventListener('mouseleave', () => {
      // Restaura com uma transição suave e fluida
      productImage.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      productImage.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      
      if (glowRing) {
        glowRing.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        glowRing.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    });
  }

  // 6. EFEITO GLOBAL DE BOLHAS DE GÁS QUE SEGUEM O MOUSE E TOQUE (EFEITO EFERVESCENTE)
  let lastSpawnTime = 0;
  
  const spawnBubble = (clientX, clientY) => {
    const now = Date.now();
    // Limita a criação de bolhas a cada 40ms para garantir performance e visual denso efervescente
    if (now - lastSpawnTime < 40) return;
    lastSpawnTime = now;
    
    const bubble = document.createElement('div');
    const size = Math.random() * 9 + 3; // Tamanho randômico entre 3px e 12px
    
    bubble.style.position = 'fixed';
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.borderRadius = '50%';
    
    // Visual de bolha efervescente premium: transparente, borda neon esmeralda, brilho inset e sombra suave
    bubble.style.border = '1px solid rgba(0, 255, 102, 0.6)';
    bubble.style.backgroundColor = 'rgba(163, 255, 0, 0.03)';
    bubble.style.boxShadow = '0 0 6px rgba(0, 255, 102, 0.3), inset 0 0 4px rgba(255, 255, 255, 0.2)';
    bubble.style.left = `${clientX}px`;
    bubble.style.top = `${clientY}px`;
    bubble.style.pointerEvents = 'none';
    bubble.style.zIndex = '9998';
    bubble.style.transform = 'translate(-50%, -50%)';
    
    // Detalhe de reflexo de luz interna (efeito volumétrico de gás)
    if (size > 5) {
      const bubbleHighlight = document.createElement('div');
      bubbleHighlight.style.position = 'absolute';
      bubbleHighlight.style.width = '25%';
      bubbleHighlight.style.height = '25%';
      bubbleHighlight.style.borderRadius = '50%';
      bubbleHighlight.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      bubbleHighlight.style.top = '15%';
      bubbleHighlight.style.left = '15%';
      bubble.appendChild(bubbleHighlight);
    }
    
    document.body.appendChild(bubble);
    
    let opacity = 0.9;
    let y = 0;
    let xOffset = 0;
    const wobbleSpeed = Math.random() * 0.04 + 0.02;
    const riseSpeed = Math.random() * 1.8 + 1.0;
    const horizontalDrift = Math.random() * 1.0 - 0.5; // Deriva sutil lateral
    
    const animateBubble = () => {
      opacity -= 0.01; // Efeito de evaporação
      y -= riseSpeed;  // Sobe continuamente
      xOffset += horizontalDrift + Math.sin(y * wobbleSpeed) * 0.5; // Oscilação física sinusoidal
      
      bubble.style.opacity = opacity;
      bubble.style.transform = `translate(calc(-50% + ${xOffset}px), calc(-50% + ${y}px))`;
      
      if (opacity > 0) {
        requestAnimationFrame(animateBubble);
      } else {
        bubble.remove();
      }
    };
    
    requestAnimationFrame(animateBubble);
  };

  document.addEventListener('mousemove', (e) => {
    spawnBubble(e.clientX, e.clientY);
  });
  
  // Suporte total a toque em celulares (iPhone, Android, etc.) ao arrastar o dedo
  document.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      spawnBubble(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
});
