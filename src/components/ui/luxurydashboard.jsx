/**
 * LuxuryDashboard — Horizontal Pinned Scroll
 * Grandes Números · BRB Previdência RAI 2025
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Paleta alinhada ao design system BRB ────────────────────────────────────
const BLUE      = '#0074c8';
const ACCENT    = '#00aeef';
const DEEP      = '#0a1f3c';
const WHITE     = '#ffffff';
const WHITE_50  = 'rgba(255,255,255,0.50)';
const WHITE_30  = 'rgba(255,255,255,0.30)';
const WHITE_12  = 'rgba(255,255,255,0.12)';
const WHITE_06  = 'rgba(255,255,255,0.06)';

// ─── Dados ────────────────────────────────────────────────────────────────────
const METRICS = [
  {
    id: 0, target: 7619, prefix: '', decimals: 0,
    unit: '', unitSmall: 'participantes',
    label: 'Base de Participantes',
    note: 'crescimento de 5,31% no exercício',
    color: ACCENT,
  },
  {
    id: 1, target: 4.36, prefix: '', decimals: 2,
    unit: 'bilhões', unitSmall: 'de reais',
    label: 'Patrimônio Total',
    note: 'crescimento de 9,27% em 2025',
    color: BLUE,
  },
  {
    id: 2, target: 87.59, prefix: '', decimals: 2,
    unit: '%', unitSmall: 'de adesão',
    label: 'Índice de Cobertura',
    note: 'ICP — cobertura previdencial',
    color: ACCENT,
  },
  {
    id: 3, target: 91.1, prefix: 'R$\u00A0', decimals: 1,
    unit: 'mi', unitSmall: 'superávit',
    label: 'BD-01',
    note: 'solidez e resultado acumulado',
    color: BLUE,
  },
  {
    id: 4, target: 8.2, prefix: 'R$\u00A0', decimals: 1,
    unit: 'mi', unitSmall: 'superávit',
    label: 'CV-03',
    note: 'plano consolidado e equilibrado',
    color: ACCENT,
  },
  {
    id: 5, target: 4.4, prefix: '', decimals: 1,
    unit: '%', unitSmall: 'de redução',
    label: 'Despesas Per Capita',
    note: 'eficiência administrativa anual',
    color: BLUE,
  },
  {
    id: 6, target: 4.5, prefix: '', decimals: 1,
    unit: '%', unitSmall: 'de redução',
    label: 'Despesas Realizadas x Orçadas',
    note: 'economia de R$ 849.000 no exercício',
    color: ACCENT,
  },
  {
    id: 7, target: 8.46, prefix: '', decimals: 2,
    unit: '%', unitSmall: 'de crescimento',
    label: 'Arrecadação Total',
    note: 'expansão da base de contribuições',
    color: BLUE,
  },
  {
    id: 8, target: 6.7, prefix: '', decimals: 1,
    unit: '%', unitSmall: 'de redução',
    label: 'Despesas administrativas X Patrimônio Administrado',
    note: 'otimização da gestão de recursos',
    color: ACCENT,
  },
];

function formatVal(metric, val) {
  if (metric.decimals === 0)
    return metric.prefix + Math.floor(val).toLocaleString('pt-BR');
  return metric.prefix + val.toFixed(metric.decimals).replace('.', ',');
}

// ─── Componente ───────────────────────────────────────────────────────────────
const LuxuryDashboard = () => {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const numRefs    = useRef([]);

  useEffect(() => {
    let ctx;
    const timer = setTimeout(() => {
      const section = sectionRef.current;
      const track   = trackRef.current;
      if (!section || !track) return;

      ctx = gsap.context(() => {
        const getScrollDist = () =>
          track.scrollWidth - section.offsetWidth;

        // ── Move o track horizontalmente (scrub) ─────────────────────────
        const hTween = gsap.to(track, {
          x: () => -getScrollDist(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getScrollDist() + 200}`,
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // ── Cada card anima quando entra na viewport horizontal ───────────
        track.querySelectorAll('.hn-card').forEach((card, i) => {
          const metric = METRICS[i];
          if (!metric) return;

          const stBase = {
            trigger: card,
            containerAnimation: hTween,
            start: 'left 90%',
            once: true,
          };

          gsap.fromTo(card,
            { opacity: 0, y: 28, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
              scrollTrigger: stBase }
          );

          const line = card.querySelector('.hn-line');
          if (line) gsap.fromTo(line,
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 1, ease: 'power2.inOut', delay: 0.2,
              scrollTrigger: stBase }
          );

          const idx = card.querySelector('.hn-index');
          if (idx) gsap.fromTo(idx,
            { opacity: 0, x: 10 },
            { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', delay: 0.3,
              scrollTrigger: stBase }
          );

          // Contador de número
          const el = numRefs.current[i];
          if (el) {
            const counter = { val: 0 };
            gsap.to(counter, {
              val: metric.target, duration: 1.8, ease: 'power2.out',
              onUpdate() { el.textContent = formatVal(metric, counter.val); },
              scrollTrigger: { ...stBase, start: 'left 88%' },
            });
          }
        });

        // ── Intro anima ao entrar na viewport ────────────────────────────
        gsap.fromTo(
          section.querySelectorAll('.hn-intro-anim'),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.13, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 80%', once: true } }
        );

        ScrollTrigger.refresh();
      }, section);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  // ── JSX ────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Estilos apenas para o que não pode ser inline: hover, pseudo, keyframes */}
      <style>{`
        .hn-card:hover { background: rgba(0,174,239,0.05) !important; }
        .hn-card:hover .hn-card-glow { opacity: 1 !important; }
        .hn-card:hover .hn-bar { opacity: 1 !important; }
        .hn-section::before {
          content:'';
          position:absolute; top:-30%; right:-20%;
          width:70%; height:130%;
          background: radial-gradient(ellipse, rgba(0,174,239,0.09) 0%, transparent 65%);
          pointer-events:none; z-index:0;
        }
        .hn-section::after {
          content:'';
          position:absolute; bottom:-20%; left:-15%;
          width:50%; height:80%;
          background: radial-gradient(ellipse, rgba(0,116,200,0.07) 0%, transparent 70%);
          pointer-events:none; z-index:0;
        }
        @keyframes hn-pulse {
          0%,100% { opacity:.6; transform:scale(1); }
          50%      { opacity:.85; transform:scale(1.03); }
        }
        .hn-scroll-dots span {
          display:block; width:6px; height:6px;
          border-radius:50%; background:${ACCENT};
          animation: hn-pulse 1.4s ease-in-out infinite;
        }
        .hn-scroll-dots span:nth-child(2){ animation-delay:.2s; }
        .hn-scroll-dots span:nth-child(3){ animation-delay:.4s; }
      `}</style>

      {/* SEÇÃO — inline styles garantem que o layout nunca seja sobrescrito */}
    <div className="luxury-dashboard-wrapper" style={{ position: 'relative' }}>
      <section
        ref={sectionRef}
        className="hn-section"
        style={{
          background: DEEP,
          position: 'relative',
          overflow: 'hidden',
          height: '100vh',
          minHeight: '600px',
        }}
      >
        {/* TRACK horizontal */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            height: '100%',
            willChange: 'transform',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* ─── SLIDE INTRO ──────────────────────────────── */}
          <div style={{
            flex: '0 0 52vw',
            maxWidth: '680px',
            minWidth: '380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 72px',
            borderRight: `1px solid ${WHITE_12}`,
            position: 'relative',
          }}>
            {/* Eyebrow */}
            <div className="hn-intro-anim" style={{
              display: 'flex', alignItems: 'center', gap: 14,
              marginBottom: 28,
            }}>
              <div style={{ width: 30, height: 2, background: ACCENT, flexShrink: 0 }} />
              <span style={{
                fontFamily: '"Sora", sans-serif', fontSize: '0.72rem',
                fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase',
                color: ACCENT,
              }}>
                Desempenho · 2025
              </span>
            </div>

            {/* Headline */}
            <div style={{ marginBottom: 28, lineHeight: 1.0 }}>
              <div className="hn-intro-anim" style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: 'clamp(3.2rem, 5vw, 5.5rem)',
                fontWeight: 800, color: WHITE,
                letterSpacing: '-2px', lineHeight: 1.0,
                display: 'block',
              }}>
                Grandes
              </div>
              <div className="hn-intro-anim" style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: 'clamp(3.2rem, 5vw, 5.5rem)',
                fontWeight: 800, color: ACCENT,
                letterSpacing: '-2px', lineHeight: 1.05,
                display: 'block',
              }}>
                Números
              </div>
            </div>

            {/* Descrição */}
            <p className="hn-intro-anim" style={{
              fontFamily: '"Urbanist", sans-serif',
              fontSize: '1rem', lineHeight: 1.65,
              color: WHITE_50, maxWidth: 340, margin: 0,
            }}>
              Um ano de solidez, crescimento e eficiência.
              Conheça os indicadores que definiram 2025 para a Previdência BRB.
            </p>

            {/* Scroll hint */}
            <div className="hn-intro-anim" style={{
              display: 'flex', alignItems: 'center', gap: 12, marginTop: 48,
              fontFamily: '"Sora", sans-serif', fontSize: '0.68rem',
              fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase',
              color: WHITE_30,
            }}>
              <div className="hn-scroll-dots" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span /><span /><span />
              </div>
              Role para explorar
            </div>
          </div>

          {/* ─── CARDS DE MÉTRICAS ────────────────────────── */}
          {METRICS.map((metric, i) => (
            <div
              key={metric.id}
              className="hn-card"
              style={{
                flex: '0 0 400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '64px 48px',
                borderRight: `1px solid ${WHITE_06}`,
                position: 'relative',
                opacity: 0,        /* GSAP anima para 1 */
                cursor: 'default',
                transition: 'background .4s ease',
                background: 'transparent',
              }}
            >
              {/* Glow interno (hover) */}
              <div className="hn-card-glow" style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 30% 50%, ${metric.color}10 0%, transparent 65%)`,
                opacity: 0,
                transition: 'opacity .5s ease',
                pointerEvents: 'none',
              }} />

              {/* Barra lateral colorida */}
              <div className="hn-bar" style={{
                position: 'absolute', left: 0, top: '20%', bottom: '20%',
                width: 3, background: metric.color,
                borderRadius: '0 2px 2px 0',
                opacity: 0.55, transition: 'opacity .4s ease',
              }} />



              {/* Número grande */}
              <div style={{
                display: 'flex', alignItems: 'flex-end',
                gap: 10, lineHeight: 1, marginBottom: 8, flexWrap: 'wrap',
              }}>
                <span
                  ref={el => (numRefs.current[i] = el)}
                  style={{
                    fontFamily: '"Sora", sans-serif',
                    fontSize: 'clamp(3rem, 4.5vw, 4.8rem)',
                    fontWeight: 800, color: WHITE,
                    letterSpacing: '-2px', lineHeight: 1,
                    fontVariantNumeric: 'lining-nums tabular-nums',
                  }}
                >
                  {formatVal(metric, metric.target)}
                </span>
                {metric.unit && (
                  <span style={{
                    fontFamily: '"Sora", sans-serif',
                    fontSize: '1rem', fontWeight: 600,
                    letterSpacing: '1px', textTransform: 'uppercase',
                    color: metric.color, paddingBottom: 10,
                  }}>
                    {metric.unit}
                  </span>
                )}
              </div>

              {/* Unit small */}
              <span style={{
                fontFamily: '"Urbanist", sans-serif',
                fontSize: '0.8rem', color: WHITE_30,
                letterSpacing: '1px', display: 'block', marginBottom: 20,
              }}>
                {metric.unitSmall}
              </span>

              {/* Linha decorativa que se desenha */}
              <div className="hn-line" style={{
                width: 44, height: 2,
                background: metric.color,
                borderRadius: 2, display: 'block',
                marginBottom: 20,
              }} />

              {/* Label */}
              <span style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: '0.85rem', fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase',
                color: WHITE, display: 'block', marginBottom: 10,
              }}>
                {metric.label}
              </span>

              {/* Nota */}
              <span style={{
                fontFamily: '"Urbanist", sans-serif',
                fontSize: '0.9rem', lineHeight: 1.5,
                color: WHITE_30, display: 'block',
              }}>
                {metric.note}
              </span>
            </div>
          ))}

          {/* Espaçador final */}
          <div style={{ flex: '0 0 18vw', minWidth: 120 }} />
        </div>
      </section>
    </div>
    </>
  );
};

export default LuxuryDashboard;
