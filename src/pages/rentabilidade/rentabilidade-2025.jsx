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
    { tipo: "Benefício Definido",    nome: "Plano BD-01",        desc: "Consistência da estratégia e preservação do equilíbrio atuarial, com superação da meta atuarial.",            rent: "11,23%", ref: "120%", refLbl: "da meta atuarial",        pct: 78  },
    { tipo: "Contribuição Definida", nome: "Plano CD-02",        desc: "Predominância da renda fixa e captura de prêmios elevados, com maior superação do portfólio.",               rent: "12,82%", ref: "152%", refLbl: "do índice de referência", pct: 100 },
    { tipo: "Contribuição Variável", nome: "Plano CV-03",        desc: "Recuperação relevante frente ao exercício anterior, com desempenho acima do índice de referência.",           rent: "12,18%", ref: "144%", refLbl: "do índice de referência", pct: 92  },
    { tipo: "Contribuição Definida", nome: "Plano CD-Metrô/DF",  desc: "Desempenho consistente ao longo do exercício, com superação expressiva do índice de referência.",             rent: "11,74%", ref: "139%", refLbl: "do índice de referência", pct: 85  },
    { tipo: "Contribuição Definida", nome: "Plano CD-05",        desc: "Contribuição equilibrada de renda fixa e variável, com resultado acima do índice de referência.",             rent: "12,28%", ref: "145%", refLbl: "do índice de referência", pct: 93  },
    { tipo: "Plano Aberto",          nome: "Plano BrasíliaPrev", desc: "Consistência evidenciada ao longo do exercício, com resultado próximo ao melhor do portfólio.",               rent: "12,70%", ref: "150%", refLbl: "do índice de referência", pct: 98  },
    { tipo: "Plano Aberto",          nome: "Plano RegiusPrev",   desc: "Encerrou o ano com resultado sólido, acima do índice de referência, reforçando a consistência da gestão.",    rent: "12,37%", ref: "147%", refLbl: "do índice de referência", pct: 95  },
    { tipo: "Gestão Administrativa", nome: "PGA",                desc: "Perfil conservador com resultado consistente, superando o índice de referência com segurança.",               rent: "11,51%", ref: "136%", refLbl: "do índice de referência", pct: 82  },
];

const CHART_DATA = [
    { nome: "BD-01",        rent: 11.23 },
    { nome: "CD-02",        rent: 12.82 },
    { nome: "CV-03",        rent: 12.18 },
    { nome: "CD-Metrô/DF",  rent: 11.74 },
    { nome: "CD-05",        rent: 12.28 },
    { nome: "BrasíliaPrev", rent: 12.70 },
    { nome: "RegiusPrev",   rent: 12.37 },
    { nome: "PGA",          rent: 11.51 },
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
   KPI Strip — dentro do hero
───────────────────────────────────────────── */
function KpiStrip() {
    const stripRef = useRef(null);

    useEffect(() => {
        const blocks = stripRef.current?.querySelectorAll(".rnt-kpi-block");
        if (!blocks) return;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("is-visible");
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.1 }
        );
        blocks.forEach((b) => observer.observe(b));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="rnt-kpi-strip" ref={stripRef}>
            <div className="rnt-kpi-block">
                <div className="rnt-kpi-num">R$ 4,3 bi</div>
                <div className="rnt-kpi-label">Patrimônio total consolidado em 2025</div>
                <div className="rnt-kpi-growth">8,52% vs. ano anterior</div>
            </div>
            <div className="rnt-kpi-block">
                <div className="rnt-kpi-num">8 planos</div>
                <div className="rnt-kpi-label">7 Planos Previdenciários + 1 Plano de Gestão Administrativa</div>
            </div>
            <div className="rnt-kpi-block">
                <div className="rnt-kpi-num">152%</div>
                <div className="rnt-kpi-label">Maior superação do índice de referência (Plano CD-02)</div>
                <div className="rnt-kpi-growth">Melhor desempenho do portfólio</div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Seção Patrimônio
───────────────────────────────────────────── */
function SecaoPatrimonio() {
    const sectionRef = useRef(null);
    const integerRef = useRef(null);  // "4.331"
    const decimalRef = useRef(null);  // "275.834"

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const counter1 = { val: 0 };
        const counter2 = { val: 0 };

        const tween1 = gsap.to(counter1, {
            val: 4331,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
            onUpdate: () => {
                if (integerRef.current)
                    integerRef.current.textContent = Math.round(counter1.val).toLocaleString("pt-BR");
            },
        });

        const tween2 = gsap.to(counter2, {
            val: 275834,
            duration: 2.2,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
            onUpdate: () => {
                if (decimalRef.current)
                    decimalRef.current.textContent = Math.round(counter2.val).toLocaleString("pt-BR");
            },
        });

        return () => {
            tween1.kill();
            tween2.kill();
        };
    }, []);

    return (
        <section id="patrimonio" className="rnt-patrimonio" ref={sectionRef}>
            <div className="rnt-patrimonio-inner">
                <div>
                    <div className="dstq-section-label dstq-reveal">Patrimônio Acumulado 2025</div>
                    <div className="rnt-patrimonio-value">
                        R$&nbsp;<span ref={integerRef}>4.331</span>
                        <br /><span className="rnt-decimal" ref={decimalRef}>275.834</span>
                    </div>
                    <div className="rnt-patrimonio-badge">Crescimento de 8,52% em relação ao ano anterior</div>
                </div>
                <div>
                    <p className="rnt-patrimonio-desc dstq-reveal dstq-reveal--d1">
                        A Previdência BRB encerrou o ano com a gestão de sete Planos Previdenciários e um Plano de
                        Gestão Administrativa, os quais, de forma consolidada, atingiram{" "}
                        <strong style={{ color: "#fff" }}>R$ 4,3 bilhões de patrimônio</strong>, distribuído em
                        diversos ativos, em consonância às respectivas políticas de investimentos, legislação de
                        regência e as características de cada plano.
                    </p>
                    <p className="rnt-patrimonio-note dstq-reveal dstq-reveal--d2">
                        Nas páginas específicas de cada plano, você pode conferir todos os resultados, análises e
                        outras informações relevantes.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Band — Citação
───────────────────────────────────────────── */
function Band() {
    return (
        <div className="dstq-band">
            <div className="dstq-band-inner">
                <p className="dstq-band-quote dstq-reveal">
                    "Todos os planos superaram seus respectivos índices de referência em 2025, com destaque para o
                    Plano CD-02, que atingiu 152% do benchmark, refletindo a consistência da estratégia de gestão."
                </p>
            </div>
        </div>
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
                            <div className="rnt-bar-wrap">
                                <div className="rnt-bar-label">
                                    <span>Desempenho vs. referência</span>
                                    <span>{p.ref}</span>
                                </div>
                                <div className="rnt-bar-track">
                                    <div className="rnt-bar-fill" data-pct={p.pct} />
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
                    Comparativo de <span className="dstq-accent">rentabilidade</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Todos os planos superaram seus índices de referência em 2025. O gráfico abaixo apresenta a
                    rentabilidade de cada plano em ordem comparativa.
                </p>

                <div className="rnt-chart-wrap" ref={chartRef}>
                    <div className="rnt-chart-bars">
                        {CHART_DATA.map((p, i) => {
                            const heightPct = ((p.rent / maxRent) * 100).toFixed(1);
                            return (
                                <div className="rnt-chart-bar-group" key={i}>
                                    <div className="rnt-chart-bar-outer">
                                        <div
                                            className="rnt-chart-bar-fill"
                                            data-height={heightPct}
                                            style={{ transitionDelay: `${i * 0.07}s` }}
                                        >
                                            <span className="rnt-chart-bar-val">{p.rent.toFixed(2)}%</span>
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
                            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "700px" }}>
                                Resultados consolidados dos planos de benefícios. A Previdência BRB encerrou o ano com
                                R$ 4,3 bilhões de patrimônio, distribuído em consonância às respectivas políticas de
                                investimentos.
                            </p>
                            <ol className="breadcrumb" style={{ marginBottom: "40px", padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    Rentabilidade 2025
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* KPI Strip full-width abaixo do texto */}
                    <KpiStrip />
                </div>
            </section>

            {/* ── Seções de conteúdo ── */}
            <SecaoPatrimonio />
            <Band />
            <SecaoPlanos />
            <SecaoComparativo />

            {/* ── Índice de planos ── */}
            <section className="gap services-index-section">
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
                                <div className="services-two">
                                    <i>{data.icon}</i>
                                    <h3><Link to="#">{data.title}</Link></h3>
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
