import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import chartVideo from "../../assets/img/chart.mp4";

import { IMAGES } from "../../constant/theme";

/* ─────────────────────────────────────────────
   Dados centralizados
───────────────────────────────────────────── */
const PLANOS = [
    { tipo: "Benefício Definido",    nome: "Plano BD-01",        desc: "O Plano BD-01 encerrou 2025 com rentabilidade de 11,23%, equivalente a 120% da meta atuarial, evidenciando consistência da estratégia e preservação do equilíbrio atuarial.",            rent: "11,23%", ref: "120%", refLbl: "da meta atuarial",        pct: 78  },
    { tipo: "Contribuição Definida", nome: "Plano CD-02",        desc: "O Plano CD-02 apresentou rentabilidade de 12,82%, equivalente a 152% do índice de referência, refletindo a predominância da renda fixa e captura de prêmios elevados.",               rent: "12,82%", ref: "152%", refLbl: "do índice de referência", pct: 100 },
    { tipo: "Contribuição Variável", nome: "Plano CV-03",        desc: "O Plano CV-03 registrou rentabilidade de 12,18%, equivalente a 144% do índice de referência, com recuperação relevante frente ao exercício anterior.",           rent: "12,18%", ref: "144%", refLbl: "do índice de referência", pct: 92  },
    { tipo: "Contribuição Definida", nome: "Plano CD-Metrô/DF",  desc: "O Plano CD-Metrô/DF apresentou rentabilidade de 11,74%, equivalente a 139% do índice de referência, com desempenho consistente.",             rent: "11,74%", ref: "139%", refLbl: "do índice de referência", pct: 85  },
    { tipo: "Contribuição Definida", nome: "Plano CD-05",        desc: "O Plano CD-05 registrou rentabilidade de 12,28%, equivalente a 145% do índice de referência, com contribuição de renda fixa e variável.",             rent: "12,28%", ref: "145%", refLbl: "do índice de referência", pct: 93  },
    { tipo: "Plano Aberto",          nome: "Plano BrasíliaPrev", desc: "O Plano BrasíliaPrev apresentou rentabilidade de 12,70%, equivalente a 150% do índice de referência, evidenciando consistência.",               rent: "12,70%", ref: "150%", refLbl: "do índice de referência", pct: 98  },
    { tipo: "Plano Aberto",          nome: "Plano RegiusPrev",   desc: "O Plano RegiusPrev encerrou o ano com rentabilidade de 12,37%, equivalente a 147% do índice de referência.",    rent: "12,37%", ref: "147%", refLbl: "do índice de referência", pct: 95  },
    { tipo: "Gestão Administrativa", nome: "PGA",                desc: "O PGA apresentou rentabilidade de 11,51%, equivalente a 136% do índice de referência, com perfil conservador.",               rent: "11,51%", ref: "136%", refLbl: "do índice de referência", pct: 82  },
];

const CHART_DATA = [
    { nome: "BD-01",        rent: 11.23, meta: 9.32  },
    { nome: "CD-02",        rent: 12.82, meta: 8.44  },
    { nome: "CV-03",        rent: 12.18, meta: 8.44  },
    { nome: "CD-Metrô",     rent: 11.74, meta: 8.44  },
    { nome: "CD-05",        rent: 12.28, meta: 8.44  },
    { nome: "BrasíliaPrev", rent: 12.70, meta: 8.44  },
    { nome: "RegiusPREV",   rent: 12.37, meta: 8.44  },
    { nome: "PGA",          rent: 11.51, meta: 8.44  },
];

/* ─────────────────────────────────────────────
   Hook: reveal por IntersectionObserver
───────────────────────────────────────────── */
function useReveal(selector = ".dstq-reveal") {
    useEffect(() => {
        const els = document.querySelectorAll(selector);
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("is-visible");
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.1 }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [selector]);
}

/* ─────────────────────────────────────────────
   Seção Patrimônio
───────────────────────────────────────────── */
function SecaoPatrimonio() {
    const sectionRef = useRef(null);
    const valueRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const counter = { val: 0 };

        const tween = gsap.to(counter, {
            val: 4331275834,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
            onUpdate: () => {
                if (valueRef.current)
                    valueRef.current.textContent = "R$ " + Math.round(counter.val).toLocaleString("pt-BR");
            },
        });

        return () => { tween.kill(); };
    }, []);

    return (
        <section id="patrimonio" className="rnt-patrimonio" ref={sectionRef}>
            <div className="rnt-patrimonio-inner">
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <div className="dstq-section-label dstq-reveal" style={{ textAlign: 'center' }}>Patrimônio Acumulado 2025</div>
                    <div className="rnt-patrimonio-value" ref={valueRef} style={{ textAlign: 'center' }}>
                        R$ 0
                    </div>
                    <div className="rnt-patrimonio-badge" style={{ margin: '0 auto' }}>Crescimento de 8,52% em relação ao ano anterior</div>
                </div>
                <div>
                    <p className="rnt-patrimonio-desc dstq-reveal dstq-reveal--d1">
                        A Previdência BRB encerrou o ano com a gestão de sete Planos Previdenciários e um Plano de Gestão Administrativa, os quais, de forma consolidada, atingiram{" "}
                        <strong style={{ color: "#fff" }}>R$ 4,3 bilhões de patrimônio</strong>, distribuído em diversos ativos, em consonância às respectivas políticas de investimentos, legislação de regência e as características de cada plano.
                    </p>
                    <p className="rnt-patrimonio-note dstq-reveal dstq-reveal--d2">
                        Confira um resumo dos resultados de cada plano!
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção Planos — grid de 8 cards
───────────────────────────────────────────── */
function SecaoPlanos() {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll(".rnt-plano-card");
        if (!cards) return;

        const cardObserver = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("is-visible");
                    const fill = e.target.querySelector(".rnt-bar-fill");
                    if (fill) {
                        const pct = fill.getAttribute("data-pct");
                        setTimeout(() => { fill.style.width = pct + "%"; }, 120);
                    }
                    cardObserver.unobserve(e.target);
                }
            }),
            { threshold: 0.12 }
        );

        cards.forEach((c, i) => {
            c.style.transitionDelay = Math.min(i * 0.05, 0.35) + "s";
            cardObserver.observe(c);
        });

        return () => cardObserver.disconnect();
    }, []);

    return (
        <section id="planos" className="rnt-section-planos">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Evolução dos Planos</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Resultados de cada <span className="dstq-accent">plano</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Confira um resumo dos resultados de cada plano. Todos os planos apresentaram rentabilidade acima
                    do índice de referência, demonstrando a solidez da gestão de investimentos da Entidade.
                </p>

                <div className="rnt-planos-grid" ref={gridRef}>
                    {PLANOS.map((p, i) => (
                        <div className="rnt-plano-card" key={i}>
                            <div className="rnt-plano-tag">
                                <span className="rnt-plano-tag-dot" />
                                {p.tipo}
                            </div>
                            <div className="rnt-plano-name">{p.nome}</div>
                            <div className="rnt-plano-desc">{p.desc}</div>
                            <div className="rnt-plano-metrics">
                                <div>
                                    <div className="rnt-plano-metric-val">{p.rent}</div>
                                    <div className="rnt-plano-metric-lbl">Rentabilidade 2025</div>
                                </div>
                                <div>
                                    <div className="rnt-plano-metric-ref">{p.ref}</div>
                                    <div className="rnt-plano-metric-lbl">{p.refLbl}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção Comparativo — gráfico de barras
───────────────────────────────────────────── */
function SecaoComparativo() {
    const chartRef = useRef(null);
    const maxRent = Math.max(...CHART_DATA.map((p) => p.rent));

    useEffect(() => {
        const wrap = chartRef.current;
        if (!wrap) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const fills = wrap.querySelectorAll(".rnt-chart-bar-fill");
                    fills.forEach((fill) => {
                        const pct = fill.getAttribute("data-height");
                        setTimeout(() => {
                            fill.style.height = pct + "%";
                            fill.classList.add("is-visible");
                        }, 100);
                    });
                    observer.unobserve(wrap);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(wrap);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="comparativo" className="rnt-section-comparativo">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Visão Consolidada</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Rentabilidade dos Planos de Benefícios em <span className="dstq-accent">2025</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Todos os planos superaram seus índices de referência em 2025. O gráfico abaixo apresenta a
                    rentabilidade de cada plano em ordem comparativa.
                </p>

                <div className="rnt-chart-wrap" ref={chartRef}>
                    <div className="rnt-chart-bars">
                        {CHART_DATA.map((p, i) => {
                            const rentPct = ((p.rent / maxRent) * 100).toFixed(1);
                            const metaPct = ((p.meta / maxRent) * 100).toFixed(1);
                            return (
                                <div className="rnt-chart-bar-group" key={i}>
                                    <div className="rnt-chart-bar-outer">
                                        <div
                                            className="rnt-chart-bar-fill"
                                            data-height={rentPct}
                                            style={{ transitionDelay: `${i * 0.07}s` }}
                                        >
                                            <span className="rnt-chart-bar-val">{p.rent.toFixed(2)}%</span>
                                        </div>
                                    </div>
                                    <div className="rnt-chart-bar-outer">
                                        <div
                                            className="rnt-chart-bar-fill rnt-chart-bar-fill--meta"
                                            data-height={metaPct}
                                            style={{ transitionDelay: `${i * 0.07 + 0.05}s` }}
                                        >
                                            <span className="rnt-chart-bar-val">{p.meta.toFixed(2)}%</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="rnt-chart-labels">
                        {CHART_DATA.map((p, i) => (
                            <div className="rnt-chart-label" key={i}>{p.nome}</div>
                        ))}
                    </div>
                    {/* legenda */}
                    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#00aeef' }} />
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Rentabilidade</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#22c55e' }} />
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Meta/Benchmark</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Componente principal
───────────────────────────────────────────── */
function Rentabilidade2025() {
    useReveal(".dstq-reveal");

    return (
        <>
            <Header2 />

            {/* ── Hero com vídeo de fundo ── */}
            <section
                className="hero-section hero-style-two"
                style={{ position: "relative", overflow: "hidden" }}
            >
                {/* Vídeo de fundo */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                >
                    <source src={chartVideo} type="video/mp4" />
                </video>

                {/* Overlay gradiente sobre o vídeo */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(135deg, rgba(1,24,52,0.82) 0%, rgba(0,66,130,0.74) 55%, rgba(0,116,200,0.68) 100%)",
                        zIndex: 1,
                    }}
                />

                <div
                    className="container"
                    style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "0" }}
                >
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div style={{ marginBottom: "12px" }}>
                                <span style={{ color: "#00aeef", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                                    # Institucional
                                </span>
                            </div>
                            <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", lineHeight: "1.2", marginBottom: "16px" }}>
                                RENTABILIDADE <span style={{ color: "#00aeef" }}>2025</span>
                            </h1>
                            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "24px", maxWidth: "700px" }}>
                                Resultados consolidados dos planos de benefícios.
                            </p>
                            <a
                                href="#indices"
                                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #00aeef, #0077b6)", color: "#fff", fontSize: "1rem", fontWeight: 700, padding: "14px 28px", borderRadius: "50px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,174,239,0.35)", marginBottom: "40px" }}
                            >
                                Nas páginas específicas de cada plano, você pode conferir<br />todos os resultados, análises e outras informações relevantes <span style={{ marginLeft: "6px" }}>→</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Seções de conteúdo ── */}
            <SecaoPatrimonio />
            <SecaoPlanos />
            <SecaoComparativo />

            {/* ── Índice de planos ── */}
            <section id="indices" className="gap services-index-section">
                <ParticlesComponent id="services-particles-rentabilidade" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            Conheça os planos da <span className="services-index-accent">Previdência BRB</span>
                            {" "}e descubra o que o seu plano oferece para o seu futuro.
                        </h2>
                    </div>
                    <div className="row row-two g-4">
                        {servicedata2.map((data, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="services-two" style={{ position: 'relative' }}>
                                    <Link to={data.link || "#"} style={{ position: 'absolute', inset: 0, zIndex: 10 }} aria-label={data.title} />
                                    <i>{data.icon}</i>
                                    <h3>{data.title}</h3>
                                    <span>{data.number}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer2 />
        </>
    );
}

export default Rentabilidade2025;
