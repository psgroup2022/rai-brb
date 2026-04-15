import { Link } from "react-router-dom";
import SecaoEconomia from "../../components/ui/SecaoEconomia";
import { useEffect } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import iconRegiusprev from "../../assets/img/regiusprev.svg";
import headerRegiusprevVideo from "../../assets/img/regiusprev.mp4";
import { IMAGES } from "../../constant/theme";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".dstq-reveal, .plano-kpi-card, .plano-chart-box, .plano-table-wrap");
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        observer.unobserve(e.target);
                    }
                }),
            { threshold: 0.1 }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

const DARK_CHART_OPTS = {
    color: "rgba(255,255,255,0.6)",
    borderColor: "rgba(255,255,255,0.08)",
};

const LIGHT_CHART_OPTS = {
    color: "rgba(10,31,60,0.7)",
    borderColor: "rgba(0,0,0,0.06)",
};

function Band({ quote }) {
    return (
        <div className="dstq-band">
            <div className="dstq-band-inner">
                <p className="dstq-band-quote dstq-reveal">{quote}</p>
            </div>
        </div>
    );
}



function SecaoRentabilidade() {
    const data = {
        labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado"],
        datasets: [
            {
                data: [12.37, 8.44, 7.8],
                backgroundColor: ["#00aeef", "#0074c8", "#94a3b8"],
                borderRadius: 6,
            },
        ],
    };

    const options = {
        indexAxis: "y",
        plugins: { legend: { display: false } },
        scales: {
            x: {
                ticks: { callback: (v) => v + "%", color: LIGHT_CHART_OPTS.color },
                grid: { color: LIGHT_CHART_OPTS.borderColor },
            },
            y: { ticks: { color: LIGHT_CHART_OPTS.color }, grid: { display: false } },
        },
    };

    return (
        <section id="rentabilidade" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Resultados 2025</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Rentabilidade <span className="dstq-accent">2025</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                    O Plano RegiusPrev registrou rentabilidade de <strong style={{ color: "#0a1f3c" }}>12,37%</strong>{" "}
                    em 2025, representando{" "}
                    <strong style={{ color: "#0a1f3c" }}>147% do índice de referência (IPCA + 4% a.a.)</strong>.
                    Toda a carteira está alocada em Renda Fixa, com estratégia concentrada em Títulos Públicos
                    Federais atrelados à Selic (94% do portfólio).
                </p>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    O RegiusPrev é o plano de previdência complementar mais recente administrado pela Previdência BRB,
                    destinado a Estados e Municípios que desejam implantar o Regime de Previdência Complementar (RPC)
                    para seus servidores, conforme previsto na Emenda Constitucional nº 103/2019.
                </p>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
                    <Bar data={data} options={options} />
                </div>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Desempenho vs. Referência</div>
                        <div className="plano-kpi-value">147%</div>
                        <div className="plano-kpi-sub">Acima de 118% registrado em 2024</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Concentração Renda Fixa</div>
                        <div className="plano-kpi-value">94%</div>
                        <div className="plano-kpi-sub">Carteira conservadora e soberana</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Crescimento Patrimônio</div>
                        <div className="plano-kpi-value">+117,66%</div>
                        <div className="plano-kpi-sub">De R$ 348 mil para R$ 758 mil</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecaoDesempenho() {
    const compData = {
        labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado"],
        datasets: [
            {
                data: [12.37, 8.44, 7.8],
                backgroundColor: ["#00aeef", "#0074c8", "#94a3b8"],
                borderRadius: 6,
            },
        ],
    };

    const compOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: {
                ticks: { callback: (v) => v + "%", color: DARK_CHART_OPTS.color },
                grid: { color: DARK_CHART_OPTS.borderColor },
            },
            x: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
        },
    };

    return (
        <section id="desempenho" className="plano-section plano-section--dark">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Performance do Plano</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Desempenho do <span className="dstq-accent">Plano</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Recurso do Plano</div>
                        <div className="plano-kpi-value">R$ 760 mil</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Índice de Referência</div>
                        <div className="plano-kpi-value">8,44%</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Rentabilidade</div>
                        <div className="plano-kpi-value">12,37%</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Desempenho</div>
                        <div className="plano-kpi-value">147%</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Ganho Real</div>
                        <div className="plano-kpi-value">7,78%</div>
                        <div className="plano-kpi-sub">Acima da inflação (a.a.)</div>
                    </div>
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Rentabilidade vs. Referência vs. Mercado</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                <div style={{ marginTop: 60 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.5rem" }}>
                        Municípios Patrocinadores
                    </h3>
                    <p className="dstq-text-body dstq-reveal" style={{ marginTop: 8 }}>
                        O RegiusPrev possui como patrocinadores órgãos ligados às prefeituras de quatro municípios do
                        estado do Paraná:
                    </p>
                    <div
                        className="dstq-reveal"
                        style={{
                            marginTop: 20,
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: 16,
                        }}
                    >
                        {["Maringá", "Cruzeiro do Sul", "Querência do Norte", "São Tomé"].map((municipio) => (
                            <div
                                key={municipio}
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(0,174,239,0.15)",
                                    borderRadius: 12,
                                    padding: "20px 24px",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "0.65rem",
                                        letterSpacing: "0.16em",
                                        textTransform: "uppercase",
                                        color: "#00aeef",
                                        marginBottom: 6,
                                    }}
                                >
                                    Paraná
                                </div>
                                <div style={{ fontWeight: 700, color: "#fff", fontSize: "1rem" }}>{municipio}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quadro Populacional — redesign pop- */}
                <div className="pop-section dstq-reveal" style={{ marginTop: 60 }}>

                    {/* ── Cabeçalho + hero stat ── */}
                    <div className="pop-hero">
                        <div>
                            <div className="pop-section-label">Quadro Populacional</div>
                            <div className="pop-total-num">65</div>
                            <span className="pop-total-label">participantes em 2025</span>
                            <div className="pop-total-delta">
                                <span className="pop-delta-badge">▲ 10,17%</span>
                                <span className="pop-delta-context">vs. 59 em 2024</span>
                            </div>
                        </div>
                        <div className="pop-closed-tag">
                            <span className="pop-closed-icon">✓</span>
                            <div>
                                <strong>Plano aberto</strong>
                                <span>para servidores municipais de municípios patrocinadores do Paraná</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Barra proporcional de composição ── */}
                    <div className="pop-bar-wrap dstq-reveal dstq-reveal--d1">
                        <div className="pop-bar-label">Composição do plano</div>
                        <div className="pop-bar">
                            <div className="pop-bar-seg pop-bar-seg--ativos" style={{ width: '100%' }}>
                                <span>Ativos</span>
                                <strong>100%</strong>
                            </div>
                        </div>
                    </div>

                    {/* ── Grid: Gênero | Idades | Maturidade ── */}
                    <div className="pop-bottom-grid dstq-reveal dstq-reveal--d2">

                        {/* Gênero */}
                        <div className="pop-card">
                            <div className="pop-card-label">Distribuição por Gênero</div>
                            <div className="pop-gender-bar">
                                <div className="pop-gender-masc" style={{ width: '56.92%' }}>
                                    <span>♂ Masculino</span>
                                    <strong>56,92%</strong>
                                </div>
                                <div className="pop-gender-fem" style={{ width: '43.08%' }}>
                                    <strong>43,08%</strong>
                                    <span>Feminino ♀</span>
                                </div>
                            </div>
                            <div className="pop-gender-legend">
                                <span><i className="pop-dot pop-dot--masc" />Masculino — 56,92%</span>
                                <span><i className="pop-dot pop-dot--fem" />Feminino — 43,08%</span>
                            </div>
                        </div>

                        {/* Médias de Idade */}
                        <div className="pop-card">
                            <div className="pop-card-label">Média de Idade</div>
                            <div className="pop-age-pair">
                                <div className="pop-age-item">
                                    <span className="pop-age-num">41,11</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Ativos</span>
                                </div>
                                <div className="pop-age-divider" />
                                <div className="pop-age-item">
                                    <span className="pop-age-num">—</span>
                                    <span className="pop-age-lbl" />
                                    <span className="pop-age-tag">Assistidos</span>
                                </div>
                            </div>
                        </div>

                        {/* Maturidade */}
                        <div className="pop-card pop-card--maturity">
                            <div className="pop-card-label">Maturidade do Plano</div>
                            <div className="pop-maturity-num">0%</div>
                            <div className="pop-maturity-bar">
                                <div className="pop-maturity-fill" style={{ width: '0%' }} />
                            </div>
                            <span className="pop-maturity-sub">Plano em fase de acumulação — sem assistidos</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function SecaoInvestimentos() {
    const allocData = {
        labels: ["Renda Fixa (94%)", "Operações com Participantes (5%)", "Renda Variável (1%)"],
        datasets: [{ data: [94, 5, 1], backgroundColor: ["#00aeef", "#0074c8", "#64748b"] }],
    };

    const allocOptions = {
        plugins: {
            legend: { position: "bottom", labels: { color: LIGHT_CHART_OPTS.color } },
        },
    };

    return (
        <section id="investimentos" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Alocação de Recursos</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado da Política de <span className="dstq-accent">Investimentos</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th>Segmento</th>
                                <th className="num">Política 2026</th>
                                <th className="num">Política 2025</th>
                                <th className="num">Resolução 4.994</th>
                                <th className="num">Alocação Obj. 2026</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Renda Fixa</td><td className="num">100,00%</td><td className="num">100,00%</td><td className="num">100,00%</td><td className="num">94,00%</td></tr>
                            <tr><td>Renda Variável</td><td className="num">5,00%</td><td className="num">5,00%</td><td className="num">70,00%</td><td className="num">1,00%</td></tr>
                            <tr><td>Estruturado</td><td className="num">5,00%</td><td className="num">5,00%</td><td className="num">20,00%</td><td className="num">-</td></tr>
                            <tr><td>Imobiliário</td><td className="num">1,00%</td><td className="num">1,00%</td><td className="num">20,00%</td><td className="num">-</td></tr>
                            <tr><td>Operações com Participantes</td><td className="num">15,00%</td><td className="num">-</td><td className="num">15,00%</td><td className="num">5,00%</td></tr>
                            <tr><td>Exterior</td><td className="num">10,00%</td><td className="num">10,00%</td><td className="num">10,00%</td><td className="num">-</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Resultado dos Investimentos
                    </h3>
                    <div className="plano-table-wrap">
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th>Segmento</th>
                                    <th className="num">1º SEM</th>
                                    <th className="num">2º SEM</th>
                                    <th className="num">2025</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Renda Fixa</td><td className="num">6,52%</td><td className="num">5,49%</td><td className="num">12,37%</td></tr>
                                <tr><td>Renda Variável</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr><td>Estruturado</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr><td>Imobiliário</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr><td>Operações com Participantes</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr><td>Exterior</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr className="total">
                                    <td><strong>PLANO</strong></td><td className="num">6,52%</td><td className="num">5,49%</td><td className="num">12,37%</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                                    <td><strong>ÍNDICE DE REFERÊNCIA</strong></td><td className="num">5,03%</td><td className="num">3,24%</td><td className="num">8,43%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dstq-cta-wrap" style={{ marginTop: 24 }}>
                    <a
                        href="#"
                        className="dstq-cta-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                    >
                        <strong>CLIQUE AQUI</strong> para acessar o Demonstrativo Analítico dos Investimentos do Plano RegiusPrev – Dezembro/2025 <span>→</span>
                    </a>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Alocação por Segmento</div>
                    <div style={{ maxWidth: 420, margin: "0 auto" }}>
                        <Pie data={allocData} options={allocOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecaoArrecadacao() {
    const fluxData = {
        labels: ["2023", "2024", "2025"],
        datasets: [
            { label: "Arrecadação", data: [89888, 251055, 367056], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios/Institutos", data: [0, 5527, 4175], backgroundColor: "#0074c8", borderRadius: 4 },
        ],
    };

    const fluxOptions = {
        plugins: { legend: { position: "top", labels: { color: DARK_CHART_OPTS.color } } },
        scales: {
            y: { ticks: { color: DARK_CHART_OPTS.color }, grid: { color: DARK_CHART_OPTS.borderColor } },
            x: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
        },
    };

    return (
        <section className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Fluxo Financeiro</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Arrecadação e <span className="dstq-accent">Benefícios</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em fevereiro de 2023 foram vertidas as primeiras contribuições ao Plano RegiusPrev. Em 2025, a
                    arrecadação cresceu 46,21% em relação a 2024, reflexo do crescimento no número de participantes.
                    O pagamento de benefícios e institutos reduziu 24,47%.
                </p>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Evolução Arrecadação vs. Benefícios (R$)</div>
                    <Bar data={fluxData} options={fluxOptions} />
                </div>

                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th>Rubrica</th>
                                <th className="num">2023</th>
                                <th className="num">2024</th>
                                <th className="num">2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Arrecadação</td><td className="num">R$ 89.888</td><td className="num">R$ 251.055</td><td className="num">R$ 367.056</td></tr>
                            <tr><td>Benefícios/Institutos</td><td className="num">R$ 0</td><td className="num">R$ 5.527</td><td className="num">R$ 4.175</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function SecaoAtuarial() {
    const equilData = {
        labels: ["Ativo Líquido do Plano", "Provisões Matemáticas"],
        datasets: [{ data: [758557.14, 758557.14], backgroundColor: ["#00aeef", "#0074c8"], borderRadius: 6 }],
    };

    const equilOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: { ticks: { color: LIGHT_CHART_OPTS.color }, grid: { color: LIGHT_CHART_OPTS.borderColor } },
            x: { ticks: { color: LIGHT_CHART_OPTS.color }, grid: { display: false } },
        },
    };

    return (
        <section id="atuarial" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Situação Atuarial</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado <span className="dstq-accent">Atuarial</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="dstq-split">
                    <div>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                            As Provisões Matemáticas dimensionadas em 31 de dezembro de 2025, no montante de
                            <strong style={{ color: "#0a1f3c" }}> R$ 758.557,14</strong>, comparativamente às de 2024
                            (R$ 348.511,50), representaram variação de aproximadamente
                            <strong style={{ color: "#0a1f3c" }}> 117,66%</strong>.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                            O Plano RegiusPrev encerrou o exercício de 2025 com
                            <strong style={{ color: "#0a1f3c" }}> Equilíbrio Técnico econômico e atuarial</strong>,
                            registrando suficiência de cobertura e solvência. A variação é justificada pelo incremento
                            no quantitativo de participantes e pela rentabilidade superior aos resgates.
                        </p>
                    </div>
                    <div>
                        <div className="plano-img-card" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                            <img
                                src={IMAGES.instTrust}
                                alt="Análise atuarial"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Patrimônio de Cobertura</div>
                        <div className="plano-kpi-value">R$ 758,6 mil</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Provisões Matemáticas</div>
                        <div className="plano-kpi-value">R$ 758,6 mil</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Variação Provisões</div>
                        <div className="plano-kpi-value">+117,66%</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Situação</div>
                        <div className="plano-kpi-value">Equilíbrio</div>
                    </div>
                </div>

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Ativo Total</td><td className="num">R$ 358.916,96</td><td className="num">R$ 780.553,41</td></tr>
                            <tr><td>Exigível Operacional</td><td className="num">-R$ 1.163,26</td><td className="num">-R$ 1.822,78</td></tr>
                            <tr><td>Fundos (Administrativo e Investimento)</td><td className="num">-R$ 9.242,20</td><td className="num">-R$ 20.173,49</td></tr>
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td><td className="num">R$ 348.511,50</td><td className="num">R$ 758.557,14</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Provisões Matemáticas</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Provisão Matemática de Benefício Concedido</td><td className="num">R$ 0,00</td><td className="num">R$ 0,00</td></tr>
                            <tr><td>Provisão Matemática de Benefício a Conceder</td><td className="num">R$ 348.511,50</td><td className="num">R$ 758.557,14</td></tr>
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td><td className="num">R$ 348.511,50</td><td className="num">R$ 758.557,14</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Equilíbrio Técnico do Plano</div>
                    <Bar data={equilData} options={equilOptions} />
                </div>

                <div className="dstq-cta-wrap" style={{ marginTop: 40 }}>
                    <a
                        href="#"
                        className="dstq-cta-btn dstq-cta-btn--light"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                    >
                        Clique aqui para acessar o Parecer Atuarial do Plano RegiusPrev <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

function SecaoCustos() {
    const custosData = {
        labels: ["Pessoal e Encargos", "Contingências", "Serviços de Terceiros", "Despesas de Consumo", "Treinamento"],
        datasets: [{ data: [1117, 614, 394, 130, 10], backgroundColor: ["#00aeef", "#0074c8", "#004282", "#64748b", "#94a3b8"] }],
    };

    const custosOptions = {
        plugins: { legend: { position: "bottom", labels: { color: DARK_CHART_OPTS.color } } },
    };

    return (
        <section className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Despesas Administrativas</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Custos com a <span className="dstq-accent">Administração</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em 2025, os custos com a administração do Plano de Benefícios RegiusPrev, formados pelas despesas
                    com a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos conforme
                    demonstrado a seguir:
                </p>

                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th>Despesas (R$)</th>
                                <th className="num">Gestão Previdencial</th>
                                <th className="num">Gestão de Investimentos</th>
                                <th className="num">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Pessoal e Encargos</td><td className="num">525</td><td className="num">592</td><td className="num">1.117</td></tr>
                            <tr><td>Treinamento e Viagens</td><td className="num">5</td><td className="num">5</td><td className="num">10</td></tr>
                            <tr><td>Serviços de Terceiros</td><td className="num">185</td><td className="num">209</td><td className="num">394</td></tr>
                            <tr><td>Despesas de Consumo, Depreciações, Tafic etc</td><td className="num">61</td><td className="num">69</td><td className="num">130</td></tr>
                            <tr><td>Contingências (PIS e COFINS)</td><td className="num">504</td><td className="num">110</td><td className="num">614</td></tr>
                            <tr className="total">
                                <td><strong>TOTAIS</strong></td><td className="num">1.279</td><td className="num">986</td><td className="num">2.265</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Distribuição de Custos Administrativos</div>
                    <div style={{ maxWidth: 420, margin: "0 auto" }}>
                        <Doughnut data={custosData} options={custosOptions} />
                    </div>
                </div>

                <div style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Custos com a Gestão dos Planos Previdenciais
                    </h3>
                    <div className="plano-table-wrap">
                        <table className="plano-table">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th className="num">RegiusPrev (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Despesas de Fomento</td><td className="num">-</td></tr>
                                <tr><td>Pessoal e Encargos</td><td className="num">1.117</td></tr>
                                <tr><td>Treinamentos/Viagens</td><td className="num">10</td></tr>
                                <tr><td>Serviços de Terceiros</td><td className="num">394</td></tr>
                                <tr><td>Despesas de Consumo, Depreciação, Tafic etc</td><td className="num">130</td></tr>
                                <tr><td>Contingências (PIS e COFINS)</td><td className="num">614</td></tr>
                                <tr className="total">
                                    <td><strong>TOTAL</strong></td><td className="num">2.265</td>
                                </tr>
                                <tr><td>Corretagens/Emolumentos Bolsa Valores</td><td className="num">-</td></tr>
                                <tr><td>Taxa Adm/Gestão Fundos Abertos</td><td className="num">195</td></tr>
                                <tr><td>Taxa Custódia/Controladoria Fundos Abertos</td><td className="num">70</td></tr>
                                <tr><td>Taxa Performance Fundos Abertos</td><td className="num">-</td></tr>
                                <tr><td>Outras Despesas Fundos Abertos</td><td className="num">52</td></tr>
                                <tr className="total">
                                    <td><strong>Sub-total (Despesas Outras)</strong></td><td className="num">317</td>
                                </tr>
                                <tr className="total">
                                    <td><strong>TOTAL GERAL</strong></td><td className="num">2.582</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PlanoRegiusPrev() {
    useReveal();

    return (
        <>
            <Header2 />

            <section
                className="hero-section hero-style-two"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "#011834",
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.42,
                        zIndex: 0,
                    }}
                >
                    <source src={headerRegiusprevVideo} type="video/mp4" />
                </video>
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(135deg, rgba(1,24,52,0.74) 0%, rgba(0,66,130,0.68) 55%, rgba(0,116,200,0.58) 100%), radial-gradient(circle at 20% 15%, rgba(0,174,239,0.24), transparent 38%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 40%)",
                        zIndex: 1,
                    }}
                />
                <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "40px" }}>
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div style={{ marginBottom: "12px" }}>
                                <span style={{ color: "#00aeef", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                                    # Nossos Planos · Servidores Municipais
                                </span>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
                                <img src={iconRegiusprev} alt="RegiusPrev" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                                <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: 0 }}>
                                    Plano <span style={{ color: "#00aeef" }}>RegiusPrev</span>
                                </h1>
                            </div>

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "760px" }}>
                                O plano mais recente da Previdência BRB, destinado a servidores municipais do Paraná.
                                Rentabilidade de 12,37% em 2025, equivalente a 146% do índice de referência, com
                                crescimento de 10,17% no número de participantes.
                            </p>

                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    RegiusPrev
                                </li>
                            </ol>

                        </div>
                    </div>

                    {/* Meta strip — full width */}
                    <div className="plano-hero-meta">
                        <div>
                            <div className="plano-hero-meta-value">12,37%</div>
                            <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">147%</div>
                            <div className="plano-hero-meta-label">vs. Índice Referência</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">R$ 760 mil</div>
                            <div className="plano-hero-meta-label">Patrimônio</div>
                        </div>
                    </div>
                </div>
            </section>

            <SecaoEconomia />
            <Band quote={'"O Plano RegiusPrev encerrou o ano com rentabilidade de 12,37%, equivalente a 146% do índice de referência, em plena fase de crescimento e acumulação."'} />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoCustos />
            <Band quote={'"O Plano RegiusPrev encerrou 2025 com Equilíbrio Técnico atuarial, rentabilidade de 12,37% e patrimônio 117% maior, consolidando o RPC para servidores municipais do Paraná."'} />

            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-regiusprev" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            Conheça os Planos da <span className="services-index-accent">Previdência BRB</span> e
                            descubra o que o seu plano oferece para o seu futuro.
                        </h2>
                    </div>
                    <div className="row row-two g-4">
                        {servicedata2.map((data, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="services-two">
                                    <i>{data.icon}</i>
                                    <h3>
                                        <Link to="#">{data.title}</Link>
                                    </h3>
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

export default PlanoRegiusPrev;
