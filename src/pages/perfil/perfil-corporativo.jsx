import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

/* ── helpers ── */
const fmt = (v) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

const chartOpts = (yFmt) => ({
    responsive: true,
    plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => yFmt(ctx.parsed.y) } } },
    scales: {
        x: { ticks: { color: "rgba(200,220,255,.75)", font: { size: 13 } }, grid: { color: "rgba(255,255,255,.06)" } },
        y: { ticks: { color: "rgba(200,220,255,.75)", callback: yFmt, font: { size: 12 } }, grid: { color: "rgba(255,255,255,.08)" } },
    },
});

const barColor = "rgba(0,174,239,0.85)";
const barColor2 = "rgba(0,80,160,0.85)";

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

function PerfilCorporativo() {
    const downloadTablePdf = async (containerId, fileName) => {
        const target = document.getElementById(containerId);
        if (!target) return;

        const canvas = await html2canvas(target, {
            scale: 2,
            backgroundColor: "#ffffff",
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 10;
        const contentWidth = pageWidth - margin * 2;
        const imgHeight = (canvas.height * contentWidth) / canvas.width;

        let remainingHeight = imgHeight;
        let position = margin;

        pdf.addImage(imgData, "PNG", margin, position, contentWidth, imgHeight);
        remainingHeight -= pageHeight - margin * 2;

        while (remainingHeight > 0) {
            position = remainingHeight - imgHeight + margin;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", margin, position, contentWidth, imgHeight);
            remainingHeight -= pageHeight - margin * 2;
        }

        pdf.save(fileName);
    };

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

    /* ── 3.5.7 Eficiência ── */
    const sgbrData = {
        labels: ["SGBR Abertos", "SGBR Concluídos", "RNC Abertos", "RNC Concluídos", "AM Abertos", "AM Concluídos"],
        datasets: [{ label: "Qtd.", data: [16, 12, 38, 26, 10, 12], backgroundColor: [barColor, barColor2, barColor, barColor2, barColor, barColor2], borderRadius: 6 }],
    };

    /* ── 3.5.8 Maturidade ── */
    const maturidadeData = {
        labels: ["2024", "2025", "Meta"],
        datasets: [{ label: "Índice", data: [1.36, 1.13, 1.36], backgroundColor: [barColor2, barColor, "rgba(0,200,120,0.75)"], borderRadius: 8 }],
    };

    /* ── 3.5.9 Custeio ── */
    const custeioData = {
        labels: ["2024", "2025", "Meta"],
        datasets: [{ label: "Índice", data: [85.12, 87.59, 86.00], backgroundColor: [barColor2, barColor, "rgba(0,200,120,0.75)"], borderRadius: 8 }],
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

    /* ── 3.7 Participantes ── */
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
            <Section id="a-entidade" eyebrow="# A Entidade" title="A Entidade">
                <div className="perfil-pending-block">
                    <div className="perfil-pending-icon">⏳</div>
                    <p className="perfil-pending-text">Conteúdo em validação — disponibilização prevista para 20/03.</p>
                </div>
            </Section>

            {/* ── 3.2 PATROCINADORAS ── */}
            <Section id="patrocinadoras" eyebrow="# Vínculos" title="Patrocinadoras">
                <p className="perfil-body-text">
                    As Patrocinadoras são representadas por empresas ou grupos que disponibilizam, mediante formalização de convênio com o fundo de pensão, um Plano de Benefícios previdenciários para os seus empregados. As contribuições são feitas conjuntamente pela empresa Patrocinadora e os participantes do Plano. Os Planos administrados pela Previdência BRB possuem <strong>22 Patrocinadoras</strong>, incluindo a própria Entidade.
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
                    As Instituidoras são entidades representativas de caráter profissional, classista ou setorial, que disponibilizam Plano de Benefícios para seus associados. As contribuições são feitas exclusivamente pelos participantes. A Previdência BRB possui convênio com <strong>15 Instituidoras/filiadas</strong>, incluindo a própria Entidade.
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
                                        ["BD-01","Patrocinadora","BRB","2"],
                                        ["BD-01","Patrocinadora","Previdência BRB","1"],
                                        ["CD-02","Patrocinadora","BRB","2"],
                                        ["CD-02","Patrocinadora","Previdência BRB","1"],
                                        ["CV-03","Patrocinadora","BRB","4"],
                                        ["CV-03","Patrocinadora","Previdência BRB","1"],
                                        ["CV-03","Patrocinadora","Corretora Seguros BRB","1"],
                                        ["CV-03","Patrocinadora","BRBCARD","1"],
                                        ["CD-Metrô","Patrocinadora","Metrô-DF","1"],
                                        ["CD-05","Patrocinadora","BRB","6"],
                                        ["CD-05","Patrocinadora","Previdência BRB","1"],
                                        ["CD-05","Patrocinadora","BRBCARD","1"],
                                        ["CD-05","Patrocinadora","Saúde BRB","1"],
                                        ["CD-05","Patrocinadora","Aneabrb","1"],
                                        ["CD-05","Patrocinadora","CEASA-DF","1"],
                                        ["BrasíliaPrev","Instituidora","Previdência BRB","15"],
                                        ["BrasíliaPrev","Instituidora","Aneabrb","1"],
                                        ["BrasíliaPrev","Instituidora","COPEV-DF","1"],
                                        ["BrasíliaPrev","Instituidora","AABR","1"],
                                        ["BrasíliaPrev","Instituidora","ABRAPP","1"],
                                        ["BrasíliaPrev","Instituidora","CRMV-DF","1"],
                                        ["BrasíliaPrev","Instituidora Filiada","Bloco 244","1"],
                                        ["BrasíliaPrev","Instituidora Filiada","GS3 Tecnologia","1"],
                                        ["BrasíliaPrev","Instituidora Filiada","Colégio Biângulo","1"],
                                        ["BrasíliaPrev","Instituidora Filiada","PPN Tecnologia","1"],
                                        ["BrasíliaPrev","Instituidora Filiada","Colégio do Sol","1"],
                                        ["BrasíliaPrev","Instituidora Filiada","Prime","1"],
                                        ["BrasíliaPrev","Instituidora Filiada","Academia Ultra 1","—"],
                                        ["BrasíliaPrev","Instituidora Filiada","Academia Ultra 2","—"],
                                        ["BrasíliaPrev","Instituidora Filiada","Academia Ultra 3","1"],
                                        ["RegiusPrev","Patrocinadora","Cruzeiro do Oeste Câmara Municipal","14"],
                                        ["RegiusPrev","Patrocinadora","Município de Cruzeiro do Oeste","1"],
                                        ["RegiusPrev","Patrocinadora","Cruzeiro do Sul Câmara Municipal","1"],
                                        ["RegiusPrev","Patrocinadora","Município de Cruzeiro do Sul","1"],
                                        ["RegiusPrev","Patrocinadora","Município de São Tomé","1"],
                                        ["RegiusPrev","Patrocinadora","São Tomé Câmara Municipal","1"],
                                        ["RegiusPrev","Patrocinadora","Município de Querência do Norte","1"],
                                        ["RegiusPrev","Patrocinadora","Querência do Norte Câmara Municipal","1"],
                                        ["RegiusPrev","Patrocinadora","Município de Maringá – Prefeitura","1"],
                                        ["RegiusPrev","Patrocinadora","Agência Maringaense de Regulação – AMR","1"],
                                        ["RegiusPrev","Patrocinadora","IPPLAM","1"],
                                        ["RegiusPrev","Patrocinadora","Maringá Previdência","1"],
                                        ["RegiusPrev","Patrocinadora","Instituto Ambiental de Maringá – IAM","1"],
                                        ["RegiusPrev","Patrocinadora","Câmara Municipal de Maringá","1"],
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
                    <div className="perfil-table-actions">
                        <button
                            type="button"
                            className="perfil-pdf-btn"
                            onClick={() => downloadTablePdf("tabela-vinculos-planos", "patrocinadoras-instituidoras-por-plano.pdf")}
                        >
                            Download da Tabela em PDF
                        </button>
                    </div>
                </div>
            </Section>

            {/* ── 3.4 NOSSA GENTE ── */}
            <Section id="nossa-gente" eyebrow="# Pessoas" title="Nossa Gente — Público Interno">
                <p className="perfil-body-text">
                    Em 2025, a Previdência BRB investiu na capacitação contínua de colaboradores e dirigentes, realizando treinamentos voltados ao desenvolvimento de competências alinhadas ao planejamento estratégico.
                </p>

                <div className="row g-4 mt-1">
                    <KpiCard value="2.516h" label="Total de horas de treinamento" />
                    <KpiCard value="+66,93%" label="de crescimento em horas de treinamento vs. 2024" />
                    <KpiCard value="11" label="Certificações profissionais renovadas" />
                    <KpiCard value="1 CEA · 8 CPA-20 · 2 ICSS" label="Composição das certificações" />
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-lg-6">
                        <div className="perfil-highlight-card">
                            <div className="perfil-highlight-icon">🎓</div>
                            <div>
                                <h4>Programa PREPARE-SE</h4>
                                <p>Voltado à preparação de membros dos órgãos estatutários e comitês para atuar e tomar decisões em suas respectivas áreas nos colegiados. Incluiu todos os colaboradores e foi aberto a participantes e assistidos com interesse em atuar como dirigente ou conselheiro.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="perfil-highlight-card">
                            <div className="perfil-highlight-icon">🔒</div>
                            <div>
                                <h4>2ª Semana de Integridade</h4>
                                <p>Reforçou o compromisso da Empresa com ética, integridade e boas práticas de governança. Direcionado a todos os colaboradores, dirigentes, conselheiros, prestadores de serviços, parceiros e participantes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="perfil-body-text mt-4">
                    Tiveram continuidade os programas de <strong>Educação Financeira e Previdenciária</strong>, <strong>Gestão Baseada em Riscos</strong>, <strong>Experiência do Cliente</strong> e <strong>Prevenção à Lavagem de Dinheiro e ao Financiamento ao Terrorismo</strong> — todos integrantes do Programa de Educação Continuada (PEC) da Previdência BRB.
                </p>
            </Section>

            {/* ── 3.5 NOSSOS NÚMEROS ── */}
            <Section id="nossos-numeros" eyebrow="# Indicadores" title="Nossos Números — Indicadores de Gestão 2025" className="perfil-section--dark">

                {/* 3.5.1 Patrimônio */}
                <div className="perfil-patrimonio-block">
                    <div className="perfil-patrimonio-value">R$ 4.331.275.834</div>
                    <div className="perfil-patrimonio-label">Patrimônio Consolidado</div>
                    <div className="perfil-patrimonio-delta">▲ +8,52% em relação a 2024</div>
                </div>

                {/* 3.5.3 Custo Administrativo */}
                <div className="perfil-chart-block mt-5">
                    <h3 className="perfil-chart-title">Custeio Administrativo 2025</h3>
                    <p className="perfil-body-text">O custo administrativo em 2025 foi menor que o custeio em 29,1%, provocando capitalização do PGA. Esse resultado ocorreu devido à rentabilidade alcançada no ano.</p>
                    <Bar data={custosData} options={chartOpts(fmt)} height={120} />
                </div>

                {/* 3.5.4 Custo / Ativo */}
                <div className="row g-4 mt-3">
                    <div className="col-lg-6">
                        <div className="perfil-chart-block">
                            <h3 className="perfil-chart-title">Custo Administrativo / Ativo Total (%)</h3>
                            <p className="perfil-body-text">Em 2025, o custo administrativo fechou em <strong>0,42%</strong> do patrimônio total, uma redução de 7,22% — evidenciando a responsabilidade na gestão dos recursos.</p>
                            <Bar data={custoAtivoData} options={chartOpts((v) => v + "%")} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="perfil-chart-block">
                            <h3 className="perfil-chart-title">Custo Administrativo Per Capita (R$)</h3>
                            <p className="perfil-body-text">O custo per capita em 2025 foi de <strong>R$ 2.395</strong>, redução de 4,39% vs. 2024. O número de participantes cresceu 5,31%, refletindo ganho de escala.</p>
                            <Bar data={perCapitaData} options={chartOpts((v) => "R$ " + v.toLocaleString("pt-BR"))} />
                        </div>
                    </div>
                </div>

                {/* 3.5.6 Execução Orçamentária */}
                <div className="perfil-chart-block mt-4">
                    <h3 className="perfil-chart-title">Execução Orçamentária 2025</h3>
                    <p className="perfil-body-text">As despesas administrativas totais ficaram <strong>4,14% abaixo do valor orçado</strong>. A meta estabelecida para esse indicador foi alcançada.</p>
                    <div style={{ maxWidth: 420 }}>
                        <Bar data={orcamentoData} options={chartOpts(fmt)} />
                    </div>
                </div>

                {/* 3.5.7 Eficiência */}
                <div className="perfil-chart-block mt-4">
                    <h3 className="perfil-chart-title">Indicadores de Eficiência — SGBR · RNC · AM</h3>
                    <p className="perfil-body-text">Em 2025 foram criados 16 planos de ação no SGBR (12 concluídos), abertos 38 RNCs (26 concluídos) e abertas 10 Ações de Melhoria (12 finalizadas, incluindo saldo de 2024).</p>
                    <Bar data={sgbrData} options={chartOpts((v) => v)} />
                </div>

                {/* 3.5.8 e 3.5.9 */}
                <div className="row g-4 mt-3">
                    <div className="col-lg-6">
                        <div className="perfil-chart-block">
                            <h3 className="perfil-chart-title">Índice de Maturidade Financeira</h3>
                            <MissingTextFlag note="Inserir texto explicativo do indicador e leitura do resultado em 2025." />
                            <p className="perfil-body-text">Meta: abaixo de 1,36. Em 2025 o índice atingiu <strong>1,13</strong>.</p>
                            <Bar data={maturidadeData} options={chartOpts((v) => v.toFixed(2))} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="perfil-chart-block">
                            <h3 className="perfil-chart-title">Índice de Custeio Previdencial</h3>
                            <MissingTextFlag note="Inserir texto explicativo do indicador, meta e interpretação do desempenho." />
                            <p className="perfil-body-text">Meta: 86,00. Em 2025 o índice alcançou <strong>87,59</strong>.</p>
                            <Bar data={custeioData} options={chartOpts((v) => v.toFixed(2))} />
                        </div>
                    </div>
                </div>
            </Section>

            {/* ── 3.6 ARRECADAÇÃO ── */}
            <Section id="arrecadacao" eyebrow="# Crescimento" title="Crescimento da Arrecadação">
                <div className="row g-3 mb-4">
                    <KpiCard value="R$ 210,3M" label="Total arrecadado em 2025" />
                    <KpiCard value="+8,46%" label="Crescimento vs. 2024" />
                    <KpiCard value="+318,59%" label="Crescimento BrasíliaPrev (maior alta)" />
                    <KpiCard value="+46,21%" label="Crescimento RegiusPrev" />
                </div>

                <div className="perfil-chart-block perfil-chart-block--light">
                    <h3 className="perfil-chart-title">Arrecadação por Plano — 2024 vs. 2025</h3>
                    <Bar data={arrecadacaoData} options={arrecadacaoOpts} />
                </div>

                <div className="perfil-table-wrapper mt-4">
                    <div className="table-responsive" id="tabela-arrecadacao-planos">
                        <table className="perfil-table">
                            <thead>
                                <tr><th>Plano</th><th className="text-end">2025 (R$)</th><th className="text-end">2024 (R$)</th><th className="text-center">Δ% 12m</th></tr>
                            </thead>
                            <tbody>
                                {[
                                    ["BD-01","95.716.065,00","92.269.766,14","+3,74%"],
                                    ["CD-02","2.435.606,70","2.938.860,98","-17,12%"],
                                    ["CV-03","74.803.748,39","69.290.707,34","+7,96%"],
                                    ["CD-Metrô","16.648.083,33","15.906.670,42","+4,66%"],
                                    ["CD-05","15.117.462,10","11.976.829,12","+26,22%"],
                                    ["BrasíliaPrev","5.194.243,35","1.240.895,88","+318,59%"],
                                    ["RegiusPrev","367.055,58","251.055,06","+46,21%"],
                                    ["TOTAL","210.282.264,45","193.874.784,94","+8,46%"],
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
                    <div className="perfil-table-actions">
                        <button
                            type="button"
                            className="perfil-pdf-btn"
                            onClick={() => downloadTablePdf("tabela-arrecadacao-planos", "arrecadacao-por-plano.pdf")}
                        >
                            Download da Tabela em PDF
                        </button>
                    </div>
                </div>
            </Section>

            {/* ── 3.7 PARTICIPANTES ── */}
            <Section id="participantes" eyebrow="# Crescimento" title="Crescimento de Participantes">
                <div className="row g-3 mb-4">
                    <KpiCard value="7.619" label="Total de participantes em Dez/2025" />
                    <KpiCard value="+5,31%" label="Crescimento vs. Dez/2024" />
                    <KpiCard value="+384" label="Novos participantes em 2025" />
                    <KpiCard value="+30,26%" label="Maior crescimento: CD-05" />
                </div>

                <div className="perfil-chart-block perfil-chart-block--light">
                    <h3 className="perfil-chart-title">Participantes por Plano — Dez/2024 vs. Dez/2025</h3>
                    <Bar data={participantesData} options={participantesOpts} />
                </div>

                <div className="perfil-table-wrapper mt-4">
                    <div className="table-responsive" id="tabela-participantes-planos">
                        <table className="perfil-table">
                            <thead>
                                <tr><th>Plano</th><th className="text-center">Dez/2025</th><th className="text-center">Dez/2024</th><th className="text-center">Δ% 12m</th></tr>
                            </thead>
                            <tbody>
                                {[
                                    ["BD-01","1.781","1.793","-0,67%"],
                                    ["CV-03","2.351","2.385","-1,43%"],
                                    ["CD-02","221","247","-10,53%"],
                                    ["CD Metrô","932","896","+4,02%"],
                                    ["CD 05","1.171","899","+30,26%"],
                                    ["BrasíliaPrev","1.098","956","+14,85%"],
                                    ["RegiusPrev","65","59","+10,17%"],
                                    ["TOTAL","7.619","7.235","+5,31%"],
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
                    <div className="perfil-table-actions">
                        <button
                            type="button"
                            className="perfil-pdf-btn"
                            onClick={() => downloadTablePdf("tabela-participantes-planos", "participantes-por-plano.pdf")}
                        >
                            Download da Tabela em PDF
                        </button>
                    </div>
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
                                <div className="services-two">
                                    <i>{data.icon}</i>
                                    <h3><Link to={"#"}> {data.title} </Link></h3>
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
