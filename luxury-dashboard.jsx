import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LuxuryDashboard = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Dados dos cards
  const cards = [
    {
      id: 1,
      title: 'Participantes',
      number: 7619,
      subtitle: 'Crescimento de 5,31%',
      icon: '👥',
      accent: '#00D4FF'
    },
    {
      id: 2,
      title: 'Patrimônio',
      number: 4.36,
      unit: 'bilhões',
      subtitle: 'crescemos 9,27%',
      icon: '💰',
      accent: '#FFD700'
    },
    {
      id: 3,
      title: 'Cobertura Previdencial',
      number: 87.59,
      unit: '%',
      subtitle: 'Índice de Adesão',
      icon: '📊',
      accent: '#00FF88'
    },
    {
      id: 4,
      title: 'Superávit BD-01',
      number: 91.141,
      unit: 'milhões',
      subtitle: 'Solidez Financeira',
      icon: '📈',
      accent: '#FF6B9D'
    },
    {
      id: 5,
      title: 'Superávit CV-03',
      number: 8.215,
      unit: 'milhões',
      subtitle: 'Plano Consolidado',
      icon: '✨',
      accent: '#9D4EDD'
    },
    {
      id: 6,
      title: 'Redução de Despesa',
      number: 4.4,
      unit: '%',
      subtitle: 'Per Capita Anual',
      icon: '📉',
      accent: '#3A86FF'
    }
  ];

  // Efeito de partículas fluidas no canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Criar partículas
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      particles = [];
    };
  }, []);

  // Animações GSAP ao montar
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Timeline principal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true
      }
    });

    // Animar fundo
    tl.from(container.querySelector('.luxury-bg'), {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0);

    // Animar cada card com stagger
    const cards = container.querySelectorAll('.luxury-card');

    tl.from(cards, {
      opacity: 0,
      y: 40,
      rotationZ: -5,
      duration: 0.8,
      stagger: 0.12,
      ease: 'back.out'
    }, 0.2);

    // Animações de contadores de números
    cards.forEach((card, index) => {
      const numberEl = card.querySelector('.number-value');
      if (!numberEl) return;

      const finalValue = parseFloat(numberEl.dataset.value);

      tl.from({
        value: 0
      }, {
        value: finalValue,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: function() {
          const val = this.targets()[0].value;
          if (finalValue < 100) {
            numberEl.textContent = val.toFixed(2);
          } else if (finalValue < 1000) {
            numberEl.textContent = Math.floor(val).toLocaleString();
          } else {
            numberEl.textContent = (val / 1000).toFixed(2);
          }
        }
      }, index * 0.15);
    });

    // Efeto de glow animado
    cards.forEach((card, index) => {
      gsap.to(card, {
        boxShadow: () => {
          const accent = card.dataset.accent;
          return `0 0 30px ${accent}40, inset 0 0 30px ${accent}10`;
        },
        duration: 3,
        delay: index * 0.15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

  }, []);

  // Interatividade com mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });

      // Efeito parallax nos cards
      const cards = container.querySelectorAll('.luxury-card');
      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left - rect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top - rect.top + cardRect.height / 2;

        const distX = x - cardCenterX;
        const distY = y - cardCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const angle = Math.atan2(distY, distX);
          const force = (maxDistance - distance) / maxDistance;

          gsap.to(card, {
            x: Math.cos(angle) * force * 20,
            y: Math.sin(angle) * force * 20,
            rotationZ: force * 3,
            duration: 0.3,
            overwrite: 'auto'
          });
        } else {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotationZ: 0,
            duration: 0.5,
            overwrite: 'auto'
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Efeito hover nos cards
  const handleCardHover = (e, isHover) => {
    gsap.to(e.currentTarget, {
      scale: isHover ? 1.08 : 1,
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <div
      ref={containerRef}
      className="luxury-dashboard"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a1428 0%, #1a2950 50%, #0f2a5f 100%)',
        padding: '80px 40px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Syne", "Space Mono", sans-serif'
      }}
    >
      {/* Canvas de partículas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6
        }}
      />

      {/* Fundo decorativo com gradiente radial */}
      <div
        className="luxury-bg"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1200px',
          height: '1200px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, rgba(255, 215, 0, 0.04) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      {/* Título */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #FFD700 0%, #00D4FF 50%, #00FF88 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 20px 0',
          letterSpacing: '-1px'
        }}>
          Grandes Números
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#00D4FF',
          fontWeight: 300,
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Desempenho e Solidez 2025
        </p>
      </div>

      {/* Grid de Cards */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        width: '100%',
        maxWidth: '1400px',
        perspective: '1000px'
      }}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="luxury-card"
            data-accent={card.accent}
            data-value={card.number}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
            style={{
              position: 'relative',
              padding: '40px 30px',
              background: `linear-gradient(135deg, rgba(30, 50, 90, 0.6) 0%, rgba(20, 40, 70, 0.4) 100%)`,
              border: `1px solid ${card.accent}20`,
              borderRadius: '20px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              transformStyle: 'preserve-3d',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Brilho de fundo */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '200%',
              height: '200%',
              background: `radial-gradient(circle, ${card.accent}15 0%, transparent 70%)`,
              pointerEvents: 'none',
              opacity: 0.3
            }} />

            {/* Ícone */}
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 1
            }}>
              {card.icon}
            </div>

            {/* Conteúdo */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Número com animação */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '10px',
                marginBottom: '15px'
              }}>
                <div
                  className="number-value"
                  data-value={card.number}
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${card.accent}, #FFFFFF)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: '"Space Mono", monospace',
                    lineHeight: 1
                  }}
                >
                  0
                </div>
                {card.unit && (
                  <span style={{
                    fontSize: '1.1rem',
                    color: card.accent,
                    fontWeight: 600,
                    opacity: 0.8
                  }}>
                    {card.unit}
                  </span>
                )}
              </div>

              {/* Título */}
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 10px 0',
                letterSpacing: '0.5px'
              }}>
                {card.title}
              </h3>

              {/* Subtítulo */}
              <p style={{
                fontSize: '0.9rem',
                color: card.accent,
                margin: 0,
                fontWeight: 500,
                opacity: 0.7
              }}>
                {card.subtitle}
              </p>
            </div>

            {/* Barra de progresso dinâmica */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: `linear-gradient(90deg, ${card.accent}, transparent)`,
              borderRadius: '0 0 20px 20px',
              opacity: 0.5
            }} />
          </div>
        ))}
      </div>

      {/* Estilos globais */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .luxury-card {
          box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
          will-change: transform;
        }

        .luxury-card:hover {
          border-color: currentColor;
        }

        /* Animação de entrada suave */
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        /* Scroll suave */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default LuxuryDashboard;
