import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import { servicedata2 } from "../../constant/alldata";
import ParticlesComponent from "../../components/ui/particles-bg";
import perfilCorporativoVideo from "../../assets/img/perfilcroporativo.mp4";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

// Fundo transparente para todos os gráficos
ChartJS.defaults.backgroundColor = 'transparent';
ChartJS.defaults.plugins.legend.labels.color = 'rgba(200,220,255,0.75)';
ChartJS.defaults.color = 'rgba(200,220,255,0.75)';

/* ── helpers ── */
const fmt = (v) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

const chartOpts = (yFmt) => ({
    responsive: true,
    layout: { padding: { top: 28 } },
    plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => yFmt(ctx.parsed.y) } },
        datalabels: {
            anchor: "end",
            align: "end",
            color: "rgba(200,225,255,0.9)",
            font: { weight: 800, size: 16 },
            formatter: (v) => yFmt(v),
        },
    },
    scales: {
        x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
        y: { ticks: { color: "rgba(200,220,255,.75)", callback: yFmt, font: { size: 12 } }, grid: { color: "rgba(255,255,255,.08)" } },
    },
});

const barColor = "rgba(0,174,239,0.85)";
const barColor2 = "rgba(0,80,160,0.85)";
const barColorGreen = "rgba(0,200,120,0.85)";

/* ── section wrapper ── */
function Section({ id, eyebrow, title, children, className = "" }) {
    return (
        <section id={id} className={`perfil-section ${className}`.trim()}>
            <div className="container">
                <div className="perfil-section-header">
                    {eyebrow && <span className="perfil-eyebrow">{eyebrow}</span>}
                    <h2 className="perfil-section-title">{title}</h2>
                    <div className="perfil-divider" />
                </div>
                {children}
            </div>
        </section>
    );
}

/* ── KPI card ── */
function KpiCard({ value, label }) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="perfil-kpi-card">
                <p className="perfil-kpi-value">{value}</p>
                <p className="perfil-kpi-label">{label}</p>
            </div>
        </div>
    );
}

function MissingTextFlag({ note = "Aguardando texto do cliente." }) {
    return (
        <div className="perfil-missing-flag" role="note" aria-label="Texto pendente">
            <strong>FALTA TEXTO:</strong> {note}
        </div>
    );
}

gsap.registerPlugin(ScrollTrigger);

function PerfilCorporativo() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const kpiCards = gsap.utils.toArray("#nossa-gente .perfil-kpi-card");
            const highlightCards = gsap.utils.toArray("#nossa-gente .perfil-highlight-card");

            gsap.set([...kpiCards, ...highlightCards], { autoAlpha: 0, y: 60 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: kpiCards[0],
                    start: "top bottom",
                    end: "top 30%",
                    scrub: 1,
                },
            });

            tl.to(kpiCards, {
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
                stagger: 0.25,
            }).to(
                highlightCards,
                {
                    autoAlpha: 1,
                    y: 0,
                    ease: "power2.out",
                    stagger: 0.25,
                },
                "-=0.3"
            );
        });

        return () => ctx.revert();
    }, []);

    /* ── 3.2 Patrocinadoras ── */
    const patrocinadoras = [
        "Previdência BRB", "Banco BRB", "BRBCARD", "Corretora Seguros BRB",
        "Saúde BRB", "Metrô-DF", "Ceasa-DF", "ANEABRB",
        "Prefeitura Municipal de Maringá-PR", "Câmara Municipal de Maringá-PR",
        "Agência Maringaense de Regulação – AMR", "Instituto Ambiental de Maringá – IAM",
        "Instituto de Pesquisa e Planejamento Urbano de Maringá – IPPLAM", "Maringá Previdência",
        "Prefeitura de São Tomé-PR", "Câmara Municipal de São Tomé-PR",
        "Prefeitura de Cruzeiro do Sul-PR", "Câmara Municipal de Cruzeiro do Sul-PR",
        "Prefeitura de Querência do Norte-PR", "Câmara Municipal de Querência do Norte-PR",
        "Município de Cruzeiro do Oeste-PR", "Cruzeiro do Oeste Câmara Municipal-PR",
    ];

    const instituidoras = [
        "Previdência BRB", "ANEABRB", "AABR", "COPEV-DF", "ABRAPP", "CRMV-DF",
        "Bloco 244", "GS3-Tecnologia", "Colégio Biângulo", "PPN Tecnologia",
        "Colégio do Sol", "Prime", "Academia Ultra 1", "Academia Ultra 2", "Academia Ultra 3",
    ];

    /* ── Crescimento Patrimonial ── */
    const crescimentoPatrimonialData = {
        labels: ["Meta", "Alcançado"],
        datasets: [{ label: "R$ bilhões", data: [4.36, 4.33], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    /* ── Evolução da Rentabilidade ── */
    const rentabilidadeData = {
        labels: ["BD-01", "CD-02", "CV-03", "CD-Metrô", "CD-05", "BrasíliaPrev", "RegiusPrev"],
        datasets: [
            { label: "Referencial", data: [9.32, 8.44, 8.44, 8.44, 8.44, 8.44, 8.44], backgroundColor: barColorGreen, borderRadius: 6 },
            { label: "Rentabilidade", data: [11.23, 12.82, 12.18, 11.74, 12.28, 12.70, 12.37], backgroundColor: barColor, borderRadius: 6 },
        ],
    };

    /* ── Percentual em relação ao referencial ── */
    const percentualReferencialData = {
        labels: ["BD-01", "CD-02", "CV-03", "CD-Metrô", "CD-05", "BrasíliaPrev", "RegiusPrev"],
        datasets: [
            { label: "Referencial", data: [110, 110, 110, 110, 110, 110, 110], backgroundColor: "rgba(160,160,160,0.85)", borderRadius: 6 },
            { label: "Rentabilidade", data: [120.49, 151.90, 144.31, 139.10, 145.50, 150.47, 146.56], backgroundColor: "rgba(230,180,0,0.9)", borderRadius: 6 },
        ],
    };

    /* ── Custo Administrativo Meta x Alcançado ── */
    const custoAdmMetaData = {
        labels: ["Meta", "Alcançado"],
        datasets: [{ label: "%", data: [0.74, 0.77], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    /* ── Custo Adm / Ativo Total Meta x Alcançado ── */
    const custoAtivoMetaData = {
        labels: ["Meta", "Alcançado"],
        datasets: [{ label: "%", data: [0.44, 0.42], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    /* ── Execução Orçamentária Meta x Alcançado ── */
    const execOrcMetaData = {
        labels: ["Meta", "Alcançado"],
        datasets: [{ label: "%", data: [100, 95.86], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };
    const custoPerCapitaMetaData = {
        labels: ["Meta", "Alcançado"],
        datasets: [{ label: "R$", data: [2127.78, 2394.87], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    /* ── 3.5.3 Custo Administrativo ── */
    const custosData = {
        labels: ["Custo Administrativo", "Pis e Cofins", "Total Despesas", "Rec. Administrativa", "Rec. Investimentos", "Total Receitas"],
        datasets: [{
            label: "2025 (R$)",
            data: [18246550, 1165956, 19412507, 15171763, 9902567, 25074330],
            backgroundColor: [barColor2, barColor2, "#003c78", barColor, barColor, "#006aae"],
            borderRadius: 6,
        }],
    };

    /* ── 3.5.4 Custo / Ativo Total ── */
    const custoAtivoData = {
        labels: ["2024", "2025"],
        datasets: [{ label: "Custo/Ativo (%)", data: [0.45, 0.42], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    /* ── 3.5.5 Per Capita ── */
    const perCapitaData = {
        labels: ["2024", "2025"],
        datasets: [{ label: "Per Capita (R$)", data: [2505, 2395], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    /* ── 3.5.6 Orçamento ── */
    const orcamentoData = {
        labels: ["Realizado", "Orçado"],
        datasets: [{ label: "R$", data: [19412507, 20250833], backgroundColor: [barColor, barColor2], borderRadius: 8 }],
    };

    /* ── SGBR ── */
    const sgbrPAData = {
        labels: ["Planos de Ações Abertos", "Planos de Ações Concluídos"],
        datasets: [{ label: "2025", data: [16, 12], backgroundColor: [barColor2, barColor], borderRadius: 6 }],
    };
    const sgbrRNCData = {
        labels: ["RNC Abertos", "RNC Concluídos"],
        datasets: [{ label: "2025", data: [38, 26], backgroundColor: [barColor2, barColor], borderRadius: 6 }],
    };
    const sgbrAMData = {
        labels: ["AM não concluídas em 2024", "AM Abertas", "AM Concluídas"],
        datasets: [{ label: "2025", data: [5, 10, 12], backgroundColor: [barColor2, barColor2, barColor], borderRadius: 6 }],
    };

    /* ── SGBR Consolidado ── */
    const sgbrConsolidadoData = {
        labels: ["Abertos", "Concluídos", "Em andamento"],
        datasets: [
            { label: "Planos de Ação (SGBR)", data: [16, 12, 4], backgroundColor: barColor, borderRadius: 6 },
            { label: "Ações de Melhoria", data: [15, 8, 7], backgroundColor: "rgba(230,120,0,0.85)", borderRadius: 6 },
            { label: "Registros de não conformidades", data: [40, 26, 14], backgroundColor: "rgba(160,160,160,0.85)", borderRadius: 6 },
        ],
    };
    /* ── Ações de Integridade ── */
    const acoesIntegridadeData = {
        labels: ["Previstas", "Realizadas"],
        datasets: [{ label: "Qtd.", data: [17, 17], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    const maturidadeData = {
        labels: ["2024", "2025", "Meta"],
        datasets: [{ label: "Índice", data: [1.36, 1.29, 1.36], backgroundColor: [barColor2, barColor, barColorGreen], borderRadius: 8 }],
    };

    /* ── 3.5.9 Custeio ── */
    const custeioData = {
        labels: ["2025", "Meta"],
        datasets: [{ label: "Índice", data: [87.59, 86.00], backgroundColor: [barColor, barColorGreen], borderRadius: 8 }],
    };

    /* ── 3.6 Arrecadação ── */
    const arrecadacaoData = {
        labels: ["BD-01", "CD-02", "CV-03", "CD-Metrô", "CD-05", "BrasíliaPrev", "RegiusPrev"],
        datasets: [
            { label: "2025", data: [95716065, 2435607, 74803748, 16648083, 15117462, 5194243, 367056], backgroundColor: barColor, borderRadius: 6 },
            { label: "2024", data: [92269766, 2938861, 69290707, 15906670, 11976829, 1240896, 251055], backgroundColor: barColor2, borderRadius: 6 },
        ],
    };

    const arrecadacaoOpts = {
        responsive: true,
        plugins: { legend: { labels: { color: "#334155", font: { size: 13 } } }, tooltip: { callbacks: { label: (ctx) => fmt(ctx.parsed.y) } } },
        scales: {
            x: { ticks: { color: "#475569", font: { size: 12 } }, grid: { color: "rgba(15,23,42,.08)" } },
            y: { ticks: { color: "#475569", callback: (v) => "R$ " + (v / 1e6).toFixed(1) + "M", font: { size: 12 } }, grid: { color: "rgba(15,23,42,.1)" } },
        },
    };

    /* ── Instituidores ── */
    const instituidoresData = {
        labels: ["Meta", "Alcançado"],
        datasets: [{ label: "Qtd.", data: [12, 13], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    /* ── Equilíbrio Técnico ── */
    const equilibrioTecnicoData = {
        labels: ["Plano BD-01", "Plano CV-03"],
        datasets: [
            { label: "Meta", data: [100, 100], backgroundColor: barColor, borderRadius: 6 },
            { label: "Alcançado", data: [103.20, 100.86], backgroundColor: "rgba(230,120,0,0.85)", borderRadius: 6 },
        ],
    };

    /* ── Receita Previdencial Per Capita ── */
    const receitaPerCapitaData = {
        labels: ["BrasíliaPrev", "RegiusPrev", "CV-03", "CD-05", "CD-Metrô"],
        datasets: [
            { label: "Meta", data: [122.44, 334.13, 2330.46, 1076.29, 1328.84], backgroundColor: barColor, borderRadius: 6 },
            { label: "Alcançado", data: [147.30, 447.03, 2555.19, 1078.06, 1401.85], backgroundColor: "rgba(230,120,0,0.85)", borderRadius: 6 },
        ],
    };

    /* ── 3.7 Participantes ── */
    const qtdParticipantesMetaData = {
        labels: ["Meta", "Alcançado"],
        datasets: [{ label: "Participantes", data: [9500, 7619], backgroundColor: [barColor2, barColor], borderRadius: 8 }],
    };

    const participantesData = {
        labels: ["BD-01", "CV-03", "CD-02", "CD Metrô", "CD 05", "BrasíliaPrev", "RegiusPrev"],
        datasets: [
            { label: "Dez/2025", data: [1781, 2351, 221, 932, 1171, 1098, 65], backgroundColor: barColor, borderRadius: 6 },
            { label: "Dez/2024", data: [1793, 2385, 247, 896, 899, 956, 59], backgroundColor: barColor2, borderRadius: 6 },
        ],
    };

    const participantesOpts = {
        responsive: true,
        plugins: { legend: { labels: { color: "#334155", font: { size: 13 } } }, tooltip: { callbacks: { label: (ctx) => ctx.parsed.y + " participantes" } } },
        scales: {
            x: { ticks: { color: "#475569", font: { size: 12 } }, grid: { color: "rgba(15,23,42,.08)" } },
            y: { ticks: { color: "#475569", font: { size: 12 } }, grid: { color: "rgba(15,23,42,.1)" } },
        },
    };

    return (
        <>
            <Header2 />

            {/* ── HERO ── */}
            <section
                className="hero-section hero-style-two"
                style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}
            >
                <video autoPlay muted loop playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
                    <source src={perfilCorporativoVideo} type="video/mp4" />
                </video>
                <div style={{ position: "absolute", inset: 0, background: "rgba(1,24,52,0.72)", zIndex: 1 }} />
                <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "40px" }}>
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div style={{ marginBottom: "12px" }}>
                                <span style={{ color: "#00aeef", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                                    # Institucional
                                </span>
                            </div>
                            <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", lineHeight: "1.2", marginBottom: "16px" }}>
                                Perfil <span style={{ color: "#00aeef" }}>Corporativo</span>
                            </h1>
                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    Perfil Corporativo
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3.1 A ENTIDADE ── */}
            <Section id="a-entidade" eyebrow="# Institucional" title="Sobre a Entidade" className="perfil-section--dark">
                <div className="row align-items-center g-5" style={{ marginBottom: '0' }}>
                    <div className="col-lg-7">
                        <p className="perfil-body-text">
                            Somos uma Entidade Fechada de Previdência Complementar, instituída como uma sociedade civil sem fins lucrativos. Desde 2023 adotamos o nome fantasia de Previdência BRB, em homenagem à Patrocinadora Fundadora, o BRB-Banco de Brasília S/A, onde tudo começou em 1985.
                        </p>
                        <p className="perfil-body-text">
                            Administramos 7 Planos de Benefícios (BD-01, CD-02, CV-03, CD-Metrô-DF, CD-05, RegiusPrev – de entes federativos e o plano instituído BrasíliaPrev), além do PGA – Plano de Gestão Administrativa, que garantem a sustentabilidade administrativa da Entidade.
                        </p>
                        <p className="perfil-body-text">
                            Em 2025, a Previdência BRB consolidou avanços relevantes em sua estratégia de crescimento, fortalecimento institucional e aprimoramento da governança, com destaque para os seguintes resultados:
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.35)' }}>
                            <img src={IMAGES.instTrust} alt="Institucional" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>

                {/* Bento Grid — Destaques 2025 */}
                <div className="destaques-grid">

                    <div className="destaques-item">
                        <div className="destaque-card destaque-card--featured">
                            <div className="destaque-card__img-wrap">
                                <img src={IMAGES.officeCollab} alt="Expansão e Parcerias" />
                            </div>
                            <div className="destaque-card__icon">🤝</div>
                            <h4 className="destaque-card__title">Expansão e Parcerias</h4>
                            <ul className="destaque-card__list">
                                <li>Aprovação da distribuição do Plano BrasíliaPrev nos canais do BRB – Banco de Brasília S.A., incluindo a plataforma digital da BRB Investimentos e as agências físicas com o apoio da BRB Seguros.</li>
                                <li>Celebração de convênios com novos instituidores, com destaque para o CRMV-DF e formalização de parcerias com cinco novos filiados: Colégio Biângulo, PPN Tecnologia, Colégio do Sol, Bloco 244 e GS3 Tecnologia.</li>
                                <li>Êxito nos processos seletivos para administração de planos de benefícios das estatais federais Telebrás S.A. e Infra S.A., aguardando aprovação na SEST.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card destaque-card--growth">
                            <div className="destaque-card__icon">📈</div>
                            <h4 className="destaque-card__title">Crescimento e Desempenho</h4>
                            <ul className="destaque-card__list">
                                <li>O patrimônio administrado atingiu <strong>R$ 4,35 bilhões</strong>, correspondendo a <strong>99,7%</strong> da meta.</li>
                                <li>O <strong>Plano CV-03</strong> alcançou a marca de <strong>R$ 1 bilhão</strong> em patrimônio.</li>
                                <li>Todos os planos superaram suas metas de rentabilidade e os respectivos índices de referência.</li>
                                <li>O Plano BD-01 apresentou superávit de <strong>R$ 91,141 milhões</strong>, e o CV-03, de <strong>R$ 8,215 milhões</strong>.</li>
                                <li>A base de participantes atingiu <strong>7.619 participantes</strong>, com crescimento anual de <strong>5,31%</strong>.</li>
                                <li>O Índice de Cobertura Previdencial (ICP) alcançou <strong>87,59%</strong>.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card">
                            <div className="destaque-card__icon">💰</div>
                            <h4 className="destaque-card__title">Eficiência e Gestão de Custos</h4>
                            <ul className="destaque-card__list">
                                <li>Redução de <strong>4,4%</strong> na despesa per capita em relação a 2024.</li>
                                <li>O custo administrativo correspondeu a <strong>0,42%</strong> do patrimônio administrado, ficando <strong>6,7% abaixo</strong> de 2024.</li>
                                <li>As despesas ficaram <strong>4,5% inferiores</strong> ao orçamento, representando economia de aproximadamente <strong>R$ 849 mil</strong>.</li>
                            </ul>
                        </div>
                        <div className="destaque-card destaque-card--image" style={{ marginTop: '10px' }}>
                            <img
                                src={IMAGES.brasiliaModernImg}
                                alt="Brasília"
                                style={{ height: 'auto', minHeight: 'unset', objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card destaque-card--image">
                            <img src={IMAGES.retirementJoyImg} alt="Previdência" style={{ minHeight: '140px' }} />
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card destaque-card--image">
                            <img src={IMAGES.youngProfPlanning} alt="Participantes" />
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card">
                            <div className="destaque-card__icon">📱</div>
                            <h4 className="destaque-card__title">Experiência do Participante e Canais Digitais</h4>
                            <ul className="destaque-card__list">
                                <li>Índice de satisfação no atendimento de <strong>96,73%</strong>.</li>
                                <li>Registro de <strong>73.173 acessos</strong> ao portal e aplicativo.</li>
                                <li>Implantação de perfis de investimento nos Planos <strong>CD-05</strong> e <strong>BrasíliaPrev</strong>.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card">
                            <div className="destaque-card__icon">💡</div>
                            <h4 className="destaque-card__title">Produtos, Inovação e Expansão</h4>
                            <ul className="destaque-card__list">
                                <li>Implantação do <strong>Projeto Correspondentes</strong>, com foco na ampliação da base de patrocinadores, instituidores e participantes, por meio de consultores credenciados.</li>
                                <li>Lançamento do programa <strong>Indique e Ganhe</strong>, voltado à expansão da base de participantes do Plano BrasíliaPrev.</li>
                                <li>Desenvolvimento da segunda edição do <strong>Projeto Eureka</strong>, estimulando ideias inovadoras entre os colaboradores.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card">
                            <div className="destaque-card__icon">📚</div>
                            <h4 className="destaque-card__title">Educação Financeira e Previdenciária</h4>
                            <p className="destaque-card__text">Projetos em escolas públicas e privadas do DF, com foco em alunos do ensino fundamental e médio — palestras, atividades práticas e ações educativas voltadas ao uso responsável dos recursos financeiros. Apresentado no <strong>Congresso da ABRAPP</strong>, reforçando o compromisso com a agenda <strong>ASG</strong>.</p>
                            <p className="destaque-card__text">Plataforma interativa disponível em: <a href="https://educacao.previdenciabrb.org.br/" target="_blank" rel="noreferrer">educacao.previdenciabrb.org.br</a></p>
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card">
                            <div className="destaque-card__icon">🔗</div>
                            <h4 className="destaque-card__title">Parcerias Estratégicas</h4>
                            <ul className="destaque-card__list">
                                <li>Formalização de parceria com a <strong>ABRAPP</strong> como instituidora do Plano BrasíliaPrev.</li>
                                <li>Formalização de parceria com a <strong>MAG Seguros S.A.</strong> para oferta de seguro de vida e invalidez aos participantes dos planos CD.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card destaque-card--esg">
                            <div className="destaque-card__icon">🌱</div>
                            <h4 className="destaque-card__title">Sustentabilidade e Governança (ASG)</h4>
                            <ul className="destaque-card__list">
                                <li>Implementação da nova <strong>Política de Responsabilidade Socioambiental (PRSA)</strong>, incorporando diretrizes ASG para investimentos e gestão de pessoas (DEI).</li>
                                <li>Conquista do <strong>Selo de Autorregulação em Governança Corporativa (ABRAPP)</strong>.</li>
                                <li>Realização da <strong>Segunda Semana de Integridade</strong>.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card destaque-card--image">
                            <img src={IMAGES.sustainableGrowthAsg} alt="Sustentabilidade" />
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card">
                            <div className="destaque-card__img-wrap">
                                <img src={IMAGES.boardroomMeet} alt="Desenvolvimento de Pessoas" />
                            </div>
                            <div className="destaque-card__icon">👥</div>
                            <h4 className="destaque-card__title">Desenvolvimento de Pessoas</h4>
                            <ul className="destaque-card__list">
                                <li>Realização de treinamentos voltados ao desenvolvimento e capacitação dos colaboradores.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destaques-item">
                        <div className="destaque-card destaque-card--image">
                            <img src={IMAGES.familyFutureImg} alt="Futuro das famílias" />
                        </div>
                    </div>

                </div>

            </Section>

            {/* ── 3.2 PATROCINADORAS ── */}
            <Section id="patrocinadoras" eyebrow="# Vínculos" title="Patrocinadoras">
                <p className="perfil-body-text">
                    As Patrocinadoras são representadas por empresas ou grupos que disponibilizam, mediante formalização de convênio com o fundo de pensão, um Plano de Benefícios previdenciários para os seus empregados. Nessa situação, as contribuições vertidas ao Plano são feitas conjuntamente pela empresa Patrocinadora e pelos participantes do Plano. Desta categoria, que pressupõe a existência de vínculo empregatício entre as partes, os Planos administrados pela Previdência BRB possuem 22 (vinte e duas) Patrocinadoras, incluindo a própria Entidade.
                </p>
                <div className="row g-3 mt-2">
                    {patrocinadoras.map((p, i) => (
                        <div className="col-lg-3 col-md-4 col-6" key={i}>
                            <div className="perfil-list-card">
                                <span className="perfil-list-num">{String(i + 1).padStart(2, "0")}</span>
                                <span className="perfil-list-name">{p}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ── 3.3 INSTITUIDORAS ── */}
            <Section id="instituidoras" eyebrow="# Vínculos" title="Instituidoras">
                <p className="perfil-body-text">
                    As Instituidoras são entidades representativas de caráter profissional, classista ou setorial, que disponibilizam, mediante formalização de convênio com o fundo de pensão, Plano de Benefícios previdenciários para os seus associados ou membros. Nessa situação, as contribuições vertidas ao Plano são feitas exclusivamente pelos participantes, ou seja, sem a obrigação de aportes da associação que os congrega. Atualmente, a Previdência BRB possui convênio com 15 (quinze) instituidoras/filiadas, incluindo a própria Entidade.
                </p>
                <div className="row g-3 mt-2">
                    {instituidoras.map((p, i) => (
                        <div className="col-lg-3 col-md-4 col-6" key={i}>
                            <div className="perfil-list-card perfil-list-card--inst">
                                <span className="perfil-list-num">{String(i + 1).padStart(2, "0")}</span>
                                <span className="perfil-list-name">{p}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tabela Patrocinadoras/Instituidoras por Plano */}
                <div className="perfil-table-wrapper mt-5">
                    <h3 className="perfil-table-title">Patrocinadoras e Instituidoras por Plano</h3>
                    <div className="table-responsive" id="tabela-vinculos-planos">
                        <table className="perfil-table">
                            <thead>
                                <tr>
                                    <th>Plano</th>
                                    <th>Tipo de Vínculo</th>
                                    <th>Empresa</th>
                                    <th className="text-center">Qtd.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(() => {
                                    const rows = [
                                        ["BD-01", "Patrocinadora", "BRB", "2"],
                                        ["BD-01", "Patrocinadora", "Previdência BRB", ""],
                                        ["CD-02", "Patrocinadora", "BRB", "2"],
                                        ["CD-02", "Patrocinadora", "Previdência BRB", ""],
                                        ["CV-03", "Patrocinadora", "BRB", "4"],
                                        ["CV-03", "Patrocinadora", "Previdência BRB", ""],
                                        ["CV-03", "Patrocinadora", "Corretora Seguros BRB", ""],
                                        ["CV-03", "Patrocinadora", "BRBCARD", ""],
                                        ["CD-Metrô", "Patrocinadora", "Metrô-DF", "1"],
                                        ["CD-05", "Patrocinadora", "BRB", "6"],
                                        ["CD-05", "Patrocinadora", "Previdência BRB", ""],
                                        ["CD-05", "Patrocinadora", "BRBCARD", ""],
                                        ["CD-05", "Patrocinadora", "Saúde BRB", ""],
                                        ["CD-05", "Patrocinadora", "Aneabrb", ""],
                                        ["CD-05", "Patrocinadora", "CEASA-DF", ""],
                                        ["BrasíliaPrev", "Instituidora", "Previdência BRB", "15"],
                                        ["BrasíliaPrev", "Instituidora", "Aneabrb", ""],
                                        ["BrasíliaPrev", "Instituidora", "COPEV-DF", ""],
                                        ["BrasíliaPrev", "Instituidora", "AABR", ""],
                                        ["BrasíliaPrev", "Instituidora", "ABRAPP", ""],
                                        ["BrasíliaPrev", "Instituidora", "CRMV-DF", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "Bloco 244", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "GS3 Tecnologia", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "Colégio Biângulo", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "PPN Tecnologia", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "Colégio do Sol", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "Prime", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "Academia Ultra 1", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "Academia Ultra 2", ""],
                                        ["BrasíliaPrev", "Instituidora Filiada", "Academia Ultra 3", ""],
                                        ["RegiusPrev", "Patrocinadora", "Cruzeiro do Oeste Câmara Municipal", "14"],
                                        ["RegiusPrev", "Patrocinadora", "Município de Cruzeiro do Oeste", ""],
                                        ["RegiusPrev", "Patrocinadora", "Cruzeiro do Sul Câmara Municipal", ""],
                                        ["RegiusPrev", "Patrocinadora", "Município de Cruzeiro do Sul", ""],
                                        ["RegiusPrev", "Patrocinadora", "Município de São Tomé", ""],
                                        ["RegiusPrev", "Patrocinadora", "São Tomé Câmara Municipal", ""],
                                        ["RegiusPrev", "Patrocinadora", "Município de Querência do Norte", ""],
                                        ["RegiusPrev", "Patrocinadora", "Querência do Norte Câmara Municipal", ""],
                                        ["RegiusPrev", "Patrocinadora", "Município de Maringá – Prefeitura", ""],
                                        ["RegiusPrev", "Patrocinadora", "Agência Maringaense de Regulação – AMR", ""],
                                        ["RegiusPrev", "Patrocinadora", "IPPLAM", ""],
                                        ["RegiusPrev", "Patrocinadora", "Maringá Previdência", ""],
                                        ["RegiusPrev", "Patrocinadora", "Instituto Ambiental de Maringá – IAM", ""],
                                        ["RegiusPrev", "Patrocinadora", "Câmara Municipal de Maringá", ""],
                                    ];
                                    // Pre-compute rowspan for each unique plano group
                                    const spanMap = {};
                                    rows.forEach(([plano]) => { spanMap[plano] = (spanMap[plano] || 0) + 1; });
                                    const seen = {};
                                    return rows.map(([plano, tipo, empresa, qtd], i) => {
                                        const isFirst = !seen[plano];
                                        if (isFirst) seen[plano] = true;
                                        const tipoClass = tipo.includes("Filiada") ? "perfil-tipo--fil" : tipo === "Instituidora" ? "perfil-tipo--inst" : "";
                                        return (
                                            <tr key={i} className={isFirst ? "perfil-table-group-start" : ""}>
                                                {isFirst && (
                                                    <td rowSpan={spanMap[plano]} className="perfil-table-plano-cell">
                                                        <span className="perfil-badge">{plano}</span>
                                                    </td>
                                                )}
                                                <td><span className={`perfil-tipo ${tipoClass}`}>{tipo}</span></td>
                                                <td>{empresa}</td>
                                                <td className="text-center">{qtd}</td>
                                            </tr>
                                        );
                                    });
                                })()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            {/* ── 3.4 NOSSA GENTE ── */}
            <Section id="nossa-gente" eyebrow="# Pessoas" title="Nossa Gente — Público Interno">
                <div className="row align-items-center g-5 mb-4">
                    <div className="col-lg-6" style={{ animation: "fadeInUp 0.6s ease-out backwards" }}>
                        <p className="perfil-body-text">
                            Em 2025, a Previdência BRB investiu na capacitação contínua de colaboradores e dirigentes, realizando treinamentos voltados ao desenvolvimento de competências alinhadas ao planejamento estratégico. Os encontros mensais e as reuniões de líderes serviram como oportunidades de aprendizado, troca de experiências e fortalecimento do trabalho em equipe.
                        </p>
                        <p className="perfil-body-text">Entre os programas realizados, destacam-se:</p>
                        <ul className="perfil-highlight-list">
                            <li><strong>Programa PREPARE-SE:</strong> voltado à preparação de membros dos órgãos estatutários e comitês para atuar e tomar decisões nos colegiados. O programa incluiu todos os colaboradores da Entidade e foi aberto também para participantes e assistidos que tenham interesse em atuar futuramente como dirigente ou conselheiro, ou que queiram participar da governança da Previdência BRB.</li>
                            <li><strong>Programa de Integridade:</strong> com ações estabelecidas para aprimoramento dos controles internos, mitigação dos riscos relacionados à integridade e reforço às boas práticas de governança, envolvendo a prevenção aos crimes de lavagem de dinheiro e financiamento ao terrorismo, divulgação do canal de ética e ouvidoria, ações para eliminação de conflitos de interesse e de outras situações que afrontem os princípios estabelecidos no Código de Conduta da Entidade. Em 2025, ocorreu a Segunda Semana de Integridade da Previdência BRB.</li>
                        </ul>
                        <p className="perfil-body-text">
                            Também tiveram continuidade os programas de Educação Financeira e Previdenciária e de Gestão ASG, — todos integrantes do Programa de Educação Continuada (PEC) da Previdência BRB. No total, foram registradas 2.516 horas de treinamentos, resultado 66,93% superior ao alcançado em 2024.
                        </p>
                        <p className="perfil-body-text">
                            Além disso, a Previdência BRB viabilizou a renovação de 11 certificações profissionais: 1 CEA, 8 CPA-20 e 2 ICSS, garantindo que a equipe atue com excelência técnica nos órgãos colegiados e comitês técnicos.
                        </p>
                    </div>
                    <div className="col-lg-6" style={{ animation: "fadeInUp 0.6s ease-out backwards" }}>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', border: '8px solid #fff', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                            <img src={IMAGES.officeCollab} alt="Nossa Gente" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </Section>

            {/* ── 3.5 NOSSOS NÚMEROS ── */}
            <Section id="nossos-numeros" eyebrow="# Indicadores" title="Nossos Números — Indicadores de Gestão 2025" className="perfil-section--dark">

                {/* 3.5.1 Patrimônio */}
                <div className="perfil-patrimonio-block">
                    <div className="perfil-patrimonio-value">R$ 4.331.275.834</div>
                    <div className="perfil-patrimonio-label">Patrimônio Consolidado</div>
                    <div className="perfil-patrimonio-delta">▲ +8,52% em relação a 2024</div>
                </div>

                <div className="perfil-destaque-meta">
                    A meta estabelecia alcançar o patrimônio de R$4,36 bilhões. Alcançamos R$4,33, correspondente a 99,31% do previsto. <strong>Meta não alcançada</strong>
                </div>

                <div className="perfil-chart-block mt-4" style={{ maxWidth: 480 }}>
                    <h3 className="perfil-chart-title">Crescimento Patrimonial</h3>
                    <Bar
                        data={crescimentoPatrimonialData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { display: false },
                                tooltip: { callbacks: { label: (ctx) => "R$ " + ctx.parsed.y.toFixed(2).replace(".", ",") + " bi" } },
                                datalabels: {
                                    anchor: "end",
                                    align: "end",
                                    color: "rgba(200,225,255,0.9)",
                                    font: { weight: 800, size: 16 },
                                    formatter: (v) => v.toFixed(2).replace(".", ","),
                                },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: {
                                    min: 4.20,
                                    max: 4.50,
                                    ticks: { color: "rgba(200,220,255,.75)", callback: (v) => "R$ " + v.toFixed(2).replace(".", ",") + " bi", font: { size: 12 } },
                                    grid: { color: "rgba(255,255,255,.08)" },
                                },
                            },
                        }}
                    />
                </div>

                {/* Evolução da Rentabilidade */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Evolução da Rentabilidade</h3>
                    <p className="perfil-body-text">Rentabilidade alcançada, comparada ao referencial das Políticas de Investimento e ou Meta atuarial – Meta alcançada</p>
                    <Bar
                        data={rentabilidadeData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { labels: { color: "rgba(200,220,255,.75)", font: { size: 13 } } },
                                tooltip: { callbacks: { label: (ctx) => ctx.dataset.label + ": " + ctx.parsed.y.toFixed(2).replace(".", ",") + "%" } },
                                datalabels: {
                                    anchor: "end",
                                    align: "end",
                                    color: "rgba(200,225,255,0.9)",
                                    font: { weight: 800, size: 16 },
                                    formatter: (v) => v.toFixed(2).replace(".", ",") + "%",
                                },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: {
                                    min: 0,
                                    max: 16,
                                    ticks: { color: "rgba(200,220,255,.75)", callback: (v) => v.toFixed(2).replace(".", ",") + "%", font: { size: 12 } },
                                    grid: { color: "rgba(255,255,255,.08)" },
                                },
                            },
                        }}
                        height={100}
                    />
                </div>

                {/* Percentual em relação ao referencial */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Percentual em relação ao referencial</h3>
                    <Bar
                        data={percentualReferencialData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { labels: { color: "rgba(200,220,255,.75)", font: { size: 13 } } },
                                tooltip: { callbacks: { label: (ctx) => ctx.dataset.label + ": " + ctx.parsed.y.toFixed(2).replace(".", ",") } },
                                datalabels: {
                                    anchor: "end",
                                    align: "end",
                                    color: "rgba(200,225,255,0.9)",
                                    font: { weight: 800, size: 16 },
                                    formatter: (v) => v.toFixed(2).replace(".", ","),
                                },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: {
                                    min: 0,
                                    max: 170,
                                    ticks: { color: "rgba(200,220,255,.75)", callback: (v) => v.toFixed(2).replace(".", ","), font: { size: 12 } },
                                    grid: { color: "rgba(255,255,255,.08)" },
                                },
                            },
                        }}
                        height={100}
                    />
                </div>

                {/* 3.5.3 Custo Administrativo */}
                <div className="perfil-chart-block mt-5">
                    <p className="perfil-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', color: '#00aeef', marginBottom: '8px' }}>INDICADORES DA GESTÃO ADMINISTRATIVA</p>
                    <h3 className="perfil-chart-title">Custo/Custeio Administrativo</h3>
                    <p className="perfil-body-text">O custo administrativo em 2025 foi menor que o custeio em 29,1%, promovendo a capitalização do PGA. O custo total (despesas +provisão do PIS/COFINS) comparado ao custeio administrativo (receitas) correspondeu 0,77%, portanto, numa situação mais favorável comparada ao resultado de 2024, considerando, principalmente, os resultados positivos das receitas dos investimentos. <strong>Meta alcançada!</strong></p>
                    <p className="perfil-destque-meta">Despesa Administrativa da Previdência BRB / Receita Administrativa Total. (Cobertura da despesa administrativa)</p>
                </div>

                {/* Custo Administrativo Meta x Alcançado */}
                <div className="perfil-chart-block mt-4" style={{ maxWidth: 480 }}>
                    <h3 className="perfil-chart-title">Custo Administrativo</h3>
                    <Bar
                        data={custoAdmMetaData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { display: false },
                                tooltip: { callbacks: { label: (ctx) => ctx.parsed.y.toFixed(2).replace(".", ",") + "%" } },
                                datalabels: {
                                    anchor: "end",
                                    align: "end",
                                    color: "rgba(200,225,255,0.9)",
                                    font: { weight: 800, size: 16 },
                                    formatter: (v) => v.toFixed(2).replace(".", ","),
                                },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: {
                                    min: 0,
                                    max: 1.0,
                                    ticks: { color: "rgba(200,220,255,.75)", callback: (v) => v.toFixed(2).replace(".", ","), font: { size: 12 } },
                                    grid: { color: "rgba(255,255,255,.08)" },
                                },
                            },
                        }}
                    />
                </div>

                {/* Tabelas Despesas e Receitas */}
                <div className="row g-4 mt-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="perfil-table-wrapper">
                            <table className="perfil-table">
                                <thead>
                                    <tr><th>Despesas Totais</th><th className="text-end">2025</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Custo Administrativo</td><td className="text-end">18.246.550</td></tr>
                                    <tr><td>Pis e Cofins</td><td className="text-end">1.165.956</td></tr>
                                    <tr><td><strong>Total</strong></td><td className="text-end"><strong>19.412.507</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="perfil-table-wrapper">
                            <table className="perfil-table">
                                <thead>
                                    <tr><th>Receitas Totais</th><th className="text-end">2025</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Receita Administrativa</td><td className="text-end">15.171.763</td></tr>
                                    <tr><td>Receitas dos Investimentos</td><td className="text-end">9.902.567</td></tr>
                                    <tr><td><strong>Total</strong></td><td className="text-end"><strong>25.074.330</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Custo Administrativo / Ativo Total */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Custo Administrativo / Ativo Total</h3>
                    <p className="perfil-body-text">A comparação das despesas administrativos com o ativo total (patrimônio) resultou em 0,42%, portanto, 6,67% menor que o resultado alcançado em 2024, de 0,45%. Quanto menor, melhor para os Participantes. <strong>Meta alcançada!</strong></p>
                    <p className="perfil-body-text">Fato que evidencia a responsabilidade na gestão dos recursos administrativos. Previdência BRB.</p>
                    <p className="perfil-destque-meta">Custo Administrativo/Ativo Total.</p>
                </div>

                <div className="perfil-chart-block mt-4" style={{ maxWidth: 480 }}>
                    <h3 className="perfil-chart-title">Custo Administrativo</h3>
                    <Bar
                        data={custoAtivoMetaData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { display: false },
                                tooltip: { callbacks: { label: (ctx) => ctx.parsed.y.toFixed(2).replace(".", ",") } },
                                datalabels: {
                                    anchor: "end",
                                    align: "end",
                                    color: "rgba(200,225,255,0.9)",
                                    font: { weight: 800, size: 16 },
                                    formatter: (v) => v.toFixed(2).replace(".", ","),
                                },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: {
                                    min: 0,
                                    max: 1.0,
                                    ticks: { color: "rgba(200,220,255,.75)", callback: (v) => v.toFixed(2).replace(".", ","), font: { size: 12 } },
                                    grid: { color: "rgba(255,255,255,.08)" },
                                },
                            },
                        }}
                    />
                </div>

                {/* Custo Administrativo Per Capita */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Custo administrativo Per Capita</h3>
                    <p className="perfil-body-text">O custo administrativo per capita apresentou uma redução de 4,39%, em 2025, em comparação com 2024. O número de participantes cresceu 5,31%, o que representa um acréscimo de 384 participantes. Em consequência desse crescimento, o custo administrativo per capita, em 2025, fechou em R$ 2.395. <strong>A meta estabelecida não alcançada, devido ao crescimento na quantidade de participantes ter ficado abaixo do planejado.</strong></p>
                </div>

                <div className="perfil-chart-block mt-4" style={{ maxWidth: 480 }}>
                    <h3 className="perfil-chart-title">Custo per capita</h3>
                    <Bar
                        data={custoPerCapitaMetaData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { display: false },
                                tooltip: { callbacks: { label: (ctx) => "R$ " + ctx.parsed.y.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) } },
                                datalabels: {
                                    anchor: "end",
                                    align: "end",
                                    color: "rgba(200,225,255,0.9)",
                                    font: { weight: 800, size: 16 },
                                    formatter: (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2 }),
                                },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: {
                                    min: 0,
                                    max: 3000,
                                    ticks: { color: "rgba(200,220,255,.75)", callback: (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2 }), font: { size: 12 } },
                                    grid: { color: "rgba(255,255,255,.08)" },
                                },
                            },
                        }}
                    />
                </div>

                {/* Execução Orçamentária */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Execução Orçamentária</h3>
                    <p className="perfil-body-text">No ano de 2025, as despesas administrativas totais apresentaram nível de realização de 4,14% abaixo do valor orçado. A meta estabelecida para esse indicador foi alcançada.</p>
                    <div className="perfil-table-wrapper mt-3" style={{ maxWidth: 360 }}>
                        <table className="perfil-table">
                            <thead>
                                <tr><th>Descrição</th><th className="text-end">2025</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Realizado</td><td className="text-end">19.412.507</td></tr>
                                <tr><td>Orçado</td><td className="text-end">20.250.833</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="perfil-body-text mt-3">As despesas administrativas corresponderam a 95,86% do Orçamento. As sobras orçamentárias formam os recursos do PGA de cada plano. <strong>Meta alcançada!</strong></p>
                </div>

                <div className="perfil-chart-block mt-4" style={{ maxWidth: 480 }}>
                    <h3 className="perfil-chart-title">Execução Orçamentária</h3>
                    <Bar
                        data={execOrcMetaData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { display: false },
                                tooltip: { callbacks: { label: (ctx) => ctx.parsed.y.toFixed(2).replace(".", ",") + "%" } },
                                datalabels: {
                                    anchor: "end",
                                    align: "end",
                                    color: "rgba(200,225,255,0.9)",
                                    font: { weight: 800, size: 16 },
                                    formatter: (v) => v.toFixed(2).replace(".", ","),
                                },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: {
                                    min: 0,
                                    max: 120,
                                    ticks: { color: "rgba(200,220,255,.75)", callback: (v) => v.toFixed(2).replace(".", ","), font: { size: 12 } },
                                    grid: { color: "rgba(255,255,255,.08)" },
                                },
                            },
                        }}
                    />
                </div>

                {/* INDICADOR DO SISTEMA DE INTEGRIDADE */}
                <div className="perfil-chart-block mt-5">
                    <p className="perfil-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', color: '#00aeef', marginBottom: '8px' }}>INDICADOR DO SISTEMA DE INTEGRIDADE</p>
                    <h3 className="perfil-chart-title">Controles do Registro no SGBR – Sistema de Gestão Baseada em Riscos</h3>
                    <p className="perfil-body-text" style={{ fontStyle: 'italic', marginBottom: '8px' }}>Cumprimento de Plano de Ações (PA), dos Registro de Não Conformidade (RNC) e Ações de Melhorias (AM).</p>
                    <p className="perfil-body-text">No SGBR ficam registrados os instrumentos de aprimoramento da Gestão de Riscos, no âmbito da Previdência BRB. Em 2025, constata-se que foram concluídos 12 Planos de Ações, 26 Registros de Não Conformidade (RNC) e 12 Ações de Melhorias (AM). Esse processo é dinâmico e mostra que a melhoria nos processos operacionais é meta constante na Previdência BRB.</p>
                </div>

                <div className="row g-4 mt-2">
                    {/* SGBR */}
                    <div className="col-lg-4">
                        <div className="perfil-chart-block">
                            <h3 className="perfil-chart-title">SGBR - Sistema de Gestão Baseada em Riscos</h3>
                            <div className="perfil-table-wrapper mb-3">
                                <table className="perfil-table">
                                    <thead><tr><th>Descrição</th><th className="text-end">2025</th></tr></thead>
                                    <tbody>
                                        <tr><td>Planos de Ações Abertos</td><td className="text-end">16</td></tr>
                                        <tr><td>Planos de Ações Concluídos</td><td className="text-end">12</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* RNC */}
                    <div className="col-lg-4">
                        <div className="perfil-chart-block">
                            <h3 className="perfil-chart-title">RNC - Registros de não Conformidades</h3>
                            <div className="perfil-table-wrapper mb-3">
                                <table className="perfil-table">
                                    <thead><tr><th>Descrição</th><th className="text-end">2025</th></tr></thead>
                                    <tbody>
                                        <tr><td>RNC Abertos</td><td className="text-end">38</td></tr>
                                        <tr><td>RNC Concluídos</td><td className="text-end">26</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* AM */}
                    <div className="col-lg-4">
                        <div className="perfil-chart-block">
                            <h3 className="perfil-chart-title">AM - Ações de Melhorias</h3>
                            <div className="perfil-table-wrapper mb-3">
                                <table className="perfil-table">
                                    <thead><tr><th>Descrição</th><th className="text-end">2025</th></tr></thead>
                                    <tbody>
                                        <tr><td>AM não concluídas em 2024</td><td className="text-end">5</td></tr>
                                        <tr><td>AM Abertas</td><td className="text-end">10</td></tr>
                                        <tr><td>AM Concluídas</td><td className="text-end">12</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SGBR Consolidado */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Planos de Ações/Ações de Melhoria e RNC</h3>
                    <Bar
                        data={sgbrConsolidadoData}
                        options={{
                            ...chartOpts((v) => v),
                            layout: { padding: { top: 50 } },
                            plugins: {
                                legend: { position: 'top', labels: { color: "rgba(200,220,255,.75)", font: { size: 13 } } },
                                tooltip: { callbacks: { label: (ctx) => ctx.dataset.label + ": " + ctx.parsed.y } },
                                datalabels: {
                                    anchor: "end",
                                    align: "end",
                                    color: "rgba(200,225,255,0.9)",
                                    font: { weight: 800, size: 16 },
                                    formatter: (v) => v,
                                },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: { max: 55, ticks: { color: "rgba(200,220,255,.75)", font: { size: 12 } }, grid: { color: "rgba(255,255,255,.08)" } },
                            },
                        }}
                        height={80}
                    />
                </div>

                {/* Ações do Plano de Integridade */}
                <div className="perfil-chart-block mt-5" style={{ maxWidth: 480 }}>
                    <h3 className="perfil-chart-title">Ações dos Plano de Integridade – 2025 – 100% realizadas – Meta alcançada</h3>
                    <Bar
                        data={acoesIntegridadeData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { display: false },
                                tooltip: { callbacks: { label: (ctx) => ctx.parsed.y } },
                                datalabels: { anchor: "end", align: "end", color: "rgba(200,225,255,0.9)", font: { weight: 800, size: 16 }, formatter: (v) => v },
                            },
                            scales: {
                                x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
                                y: { min: 0, max: 20, ticks: { color: "rgba(200,220,255,.75)", stepSize: 2, font: { size: 12 } }, grid: { color: "rgba(255,255,255,.08)" } },
                            },
                        }}
                    />
                </div>

                {/* Canal de Ética e Ouvidoria */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Registros solucionados nos canais de Ética e de Ouvidoria – 100% dos registros solucionados – Meta alcançada</h3>
                    <div className="row g-3 mt-2">
                        <div className="col-lg-4 col-md-6">
                            <div className="perfil-table-wrapper">
                                <table className="perfil-table">
                                    <thead><tr><th colSpan="2">Canal de Ética</th></tr></thead>
                                    <tbody>
                                        <tr><td colSpan="2">Registros no canal de Ética – Não houve registro.</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="perfil-table-wrapper">
                                <table className="perfil-table">
                                    <thead><tr><th>Canal de Ouvidoria</th><th className="text-end">Qtd.</th></tr></thead>
                                    <tbody>
                                        <tr><td>Registros realizados</td><td className="text-end">10</td></tr>
                                        <tr><td>Registros Solucionados</td><td className="text-end">10</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificações */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Certificações Renovadas em 2025 – 100% renovadas</h3>
                    <div className="row g-3 mt-2">
                        <div className="col-lg-4 col-md-6">
                            <div className="perfil-table-wrapper">
                                <table className="perfil-table">
                                    <thead><tr><th>Certificações existentes</th><th className="text-end">Certificações renovadas</th></tr></thead>
                                    <tbody>
                                        <tr><td>4</td><td className="text-end">4 – Meta alcançada</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="perfil-table-wrapper">
                                <table className="perfil-table">
                                    <thead><tr><th>Nova certificação prevista</th><th className="text-end">Nova certificação alcançada</th></tr></thead>
                                    <tbody>
                                        <tr><td>1</td><td className="text-end">1 – Meta alcançada</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INDICADORES DA GESTÃO PREVIDENCIÁRIA */}
                <div className="perfil-chart-block mt-5">
                    <p className="perfil-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', color: '#00aeef', marginBottom: '8px' }}>INDICADORES DA GESTÃO PREVIDENCIÁRIA</p>
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-lg-4">
                        <div className="perfil-chart-block" style={{ height: '100%' }}>
                            <h3 className="perfil-chart-title">Índice de Maturidade Financeira</h3>
                            <p className="perfil-body-text">O IMF é o resultado da comparação entre as receitas e despesas previdenciárias. Constata-se que em 2025 esse indicador mostrou uma redução de 5,15%, portanto a meta foi alcançada.</p>
                            <div className="perfil-table-wrapper mt-3">
                                <table className="perfil-table">
                                    <thead><tr><th>Ano</th><th className="text-end">Índice</th></tr></thead>
                                    <tbody>
                                        <tr><td>2024</td><td className="text-end">1,36</td></tr>
                                        <tr><td>2025</td><td className="text-end">1,29</td></tr>
                                        <tr><td>Meta</td><td className="text-end">Menor que 1,36</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="perfil-chart-block" style={{ height: '100%' }}>
                            <h3 className="perfil-chart-title">Índice de Cobertura Previdencial</h3>
                            <p className="perfil-body-text">Mais participantes vinculados aos Planos de Benefícios – Meta alcançada</p>
                            <Bar data={custeioData} options={chartOpts((v) => v.toFixed(2).replace(".", ","))} />
                        </div>
                    </div>
                </div>
            </Section>

            {/* ── 3.6 ARRECADAÇÃO ── */}
            <Section id="arrecadacao" eyebrow="# Crescimento" title="Crescimento da Arrecadação">

                <div className="perfil-table-wrapper mt-4">
                    <div className="table-responsive" id="tabela-arrecadacao-planos">
                        <table className="perfil-table">
                            <thead>
                                <tr><th>Plano</th><th className="text-end">2025 (R$)</th><th className="text-end">2024 (R$)</th><th className="text-center">Δ% 12m</th></tr>
                            </thead>
                            <tbody>
                                {[
                                    ["BD-01", "95.716.065,00", "92.269.766,14", "+3,74%"],
                                    ["CD-02", "2.435.606,70", "2.938.860,98", "-17,12%"],
                                    ["CV-03", "74.803.748,39", "69.290.707,34", "+7,96%"],
                                    ["CD-Metrô", "16.648.083,33", "15.906.670,42", "+4,66%"],
                                    ["CD-05", "15.117.462,10", "11.976.829,12", "+26,22%"],
                                    ["BrasíliaPrev", "5.194.243,35", "1.240.895,88", "+318,59%"],
                                    ["RegiusPrev", "367.055,58", "251.055,06", "+46,21%"],
                                    ["TOTAL", "210.282.264,45", "193.874.784,94", "+8,46%"],
                                ].map(([plano, v25, v24, delta], i) => (
                                    <tr key={i} className={plano === "TOTAL" ? "perfil-table-total" : ""}>
                                        <td><span className="perfil-badge">{plano}</span></td>
                                        <td className="text-end">R$ {v25}</td>
                                        <td className="text-end">R$ {v24}</td>
                                        <td className="text-center">
                                            <span className={`perfil-delta ${delta.startsWith("-") ? "perfil-delta--neg" : "perfil-delta--pos"}`}>{delta}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            {/* ── 3.7 PARTICIPANTES ── */}
            <Section id="participantes" eyebrow="# Crescimento" title="Crescimento de Participantes">
                <p className="perfil-body-text mb-4">O número de participantes no ano de 2025 dos Planos de Benefícios chegou a 7.619, um crescimento de 5,31% em relação a dezembro de 2024.</p>

                <div className="row g-3 mb-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="perfil-kpi-card">
                            <p className="perfil-kpi-value">9.500</p>
                            <p className="perfil-kpi-label">Meta</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="perfil-kpi-card">
                            <p className="perfil-kpi-value">7.619</p>
                            <p className="perfil-kpi-label">Realizado</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="perfil-kpi-card">
                            <p className="perfil-kpi-value">5,31%</p>
                            <p className="perfil-kpi-label">Crescimento</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="perfil-kpi-card perfil-kpi-card--alert">
                            <p className="perfil-kpi-value">Meta não alcançada</p>
                        </div>
                    </div>
                </div>

                <div className="perfil-table-wrapper mt-4">
                    <div className="table-responsive" id="tabela-participantes-planos">
                        <table className="perfil-table">
                            <thead>
                                <tr><th>Plano</th><th className="text-center">Dez/2025</th><th className="text-center">Dez/2024</th><th className="text-center">Δ% 12m</th></tr>
                            </thead>
                            <tbody>
                                {[
                                    ["BD-01", "1.781", "1.793", "-0,67%"],
                                    ["CV-03", "2.351", "2.385", "-1,43%"],
                                    ["CD-02", "221", "247", "-10,53%"],
                                    ["CD Metrô", "932", "896", "+4,02%"],
                                    ["CD 05", "1.171", "899", "+30,26%"],
                                    ["BrasíliaPrev", "1.098", "956", "+14,85%"],
                                    ["RegiusPrev", "65", "59", "+10,17%"],
                                    ["TOTAL", "7.619", "7.235", "+5,31%"],
                                ].map(([plano, v25, v24, delta], i) => (
                                    <tr key={i} className={plano === "TOTAL" ? "perfil-table-total" : ""}>
                                        <td><span className="perfil-badge">{plano}</span></td>
                                        <td className="text-center">{v25}</td>
                                        <td className="text-center">{v24}</td>
                                        <td className="text-center">
                                            <span className={`perfil-delta ${delta.startsWith("-") ? "perfil-delta--neg" : "perfil-delta--pos"}`}>{delta}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            {/* ── EQUILÍBRIO TÉCNICO ── */}
            <Section id="equilibrio-tecnico" eyebrow="# Desempenho" title="Equilíbrio Técnico dos Planos">

                {/* BD-01 */}
                <div className="row g-3 mb-3">
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p className="perfil-kpi-value" style={{ fontSize: '2rem', fontWeight: '900', textAlign: 'center' }}>Plano BD-01</p></div></div>
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%' }}><p className="perfil-kpi-label">Meta</p><p className="perfil-kpi-value">100%</p></div></div>
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%' }}><p className="perfil-kpi-label">Realizado</p><p className="perfil-kpi-value">103,20%</p><p className="perfil-kpi-label">R$ 91mi de superávit</p></div></div>
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%', background: 'linear-gradient(145deg, #14532d, #166534)', borderColor: 'rgba(74,222,128,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p className="perfil-kpi-value" style={{ fontSize: '1.5rem', fontWeight: '900', color: '#bbf7d0' }}>Meta Alcançada</p></div></div>
                </div>

                {/* CV-03 */}
                <div className="row g-3 mb-4">
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p className="perfil-kpi-value" style={{ fontSize: '2rem', fontWeight: '900', textAlign: 'center' }}>Plano CV-03</p></div></div>
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%' }}><p className="perfil-kpi-label">Meta</p><p className="perfil-kpi-value">100%</p></div></div>
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%' }}><p className="perfil-kpi-label">Realizado</p><p className="perfil-kpi-value">100,86%</p><p className="perfil-kpi-label">R$8,2mi de superávit</p></div></div>
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%', background: 'linear-gradient(145deg, #14532d, #166534)', borderColor: 'rgba(74,222,128,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p className="perfil-kpi-value" style={{ fontSize: '1.5rem', fontWeight: '900', color: '#bbf7d0' }}>Meta Alcançada</p></div></div>
                </div>

                {/* Receita Previdencial Per Capita */}
                <h3 className="perfil-section-title mt-5" style={{ fontSize: '1.3rem' }}>Receita Previdencial Per capita – de todos os planos</h3>
                <div className="perfil-divider mb-4" />

                <div className="perfil-chart-block perfil-chart-block--light mt-2">
                    <h3 className="perfil-chart-title" style={{ color: '#0f172a' }}>Receita Previdencial Per Capita</h3>
                    <Bar data={receitaPerCapitaData} options={{ responsive: true, layout: { padding: { top: 30 } }, plugins: { legend: { position: 'bottom', labels: { color: "#475569", font: { size: 13 } } }, tooltip: { callbacks: { label: (ctx) => ctx.dataset.label + ": R$ " + ctx.parsed.y.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) } }, datalabels: { anchor: "end", align: "end", color: "#0f172a", font: { weight: 800, size: 16 }, formatter: (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) } }, scales: { x: { ticks: { color: "#475569", font: { size: 13 } }, grid: { color: "rgba(15,23,42,.08)" } }, y: { min: 0, ticks: { color: "#475569", callback: (v) => "R$ " + v.toLocaleString("pt-BR"), font: { size: 12 } }, grid: { color: "rgba(15,23,42,.08)" } } } }} height={80} />
                </div>

                {/* Número de Instituidores */}
                <h3 className="perfil-section-title mt-5" style={{ fontSize: '1.3rem' }}>Número de Instituidores (vinculadas ao Plano BrasíliaPrev)</h3>
                <div className="perfil-divider mb-4" />

                <div className="row g-3 mb-4">
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%' }}><p className="perfil-kpi-label">Meta</p><p className="perfil-kpi-value">12</p></div></div>
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%' }}><p className="perfil-kpi-label">Realizado</p><p className="perfil-kpi-value">13</p></div></div>
                    <div className="col-lg-3 col-md-6"><div className="perfil-kpi-card" style={{ height: '100%', background: 'linear-gradient(145deg, #14532d, #166534)', borderColor: 'rgba(74,222,128,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p className="perfil-kpi-value" style={{ fontSize: '1.5rem', fontWeight: '900', color: '#bbf7d0' }}>Meta Alcançada</p></div></div>
                </div>

                <div className="perfil-chart-block perfil-chart-block--light mt-2" style={{ maxWidth: 480 }}>
                    <h3 className="perfil-chart-title" style={{ color: '#0f172a' }}>Instituidores</h3>
                    <Bar
                        data={instituidoresData}
                        options={{
                            responsive: true,
                            layout: { padding: { top: 30 } },
                            plugins: {
                                legend: { display: false },
                                tooltip: { callbacks: { label: (ctx) => ctx.parsed.y } },
                                datalabels: { anchor: "end", align: "end", color: "#0f172a", font: { weight: 800, size: 16 }, formatter: (v) => v },
                            },
                            scales: {
                                x: { ticks: { color: "#475569", font: { size: 13 } }, grid: { color: "rgba(15,23,42,.08)" } },
                                y: { min: 0, max: 16, ticks: { color: "#475569", stepSize: 2, font: { size: 12 } }, grid: { color: "rgba(15,23,42,.08)" } },
                            },
                        }}
                    />
                </div>

            </Section>

            {/* ── ÍNDICE / DOBRA SERVIÇOS ── */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-perfil" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            Conheça os planos da{" "}
                            <span className="services-index-accent">Previdência BRB</span>{" "}
                            e descubra o que o seu plano oferece para o seu futuro.
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

export default PerfilCorporativo;
