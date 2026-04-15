import { Link } from "react-router-dom";
import SecaoEconomia from "../../components/ui/SecaoEconomia";
import SecaoIndicePlanos from "../../components/ui/SecaoIndicePlanos";
import { useEffect, useState } from "react";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import iconBrasiliaprev from "../../assets/img/brasiliaprev.svg";
import headerBrasiliaprevVideo from "../../assets/img/brasiliaprev.mp4";

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
import { Bar, Doughnut } from "react-chartjs-2";
import { motion, AnimatePresence } from "framer-motion";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend, ChartDataLabels);

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

// ─── SEÇÃO RENTABILIDADE ──────────────────────────────────────────────────────
function SecaoRentabilidade() {
    return (
        <section id="rentabilidade" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Resultados 2025</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Rentabilidade <span className="dstq-accent">2025</span>
                </h2>
                <p style={{ fontSize: "0.78rem", color: "#64748b", marginBottom: 8 }} className="dstq-reveal">
                    fonte: previdência em números dezembro/2025
                </p>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <ul className="dstq-reveal dstq-reveal--d2" style={{ paddingLeft: "1.4rem", lineHeight: 1.8, color: "#0a1f3c" }}>
                    <li style={{ marginBottom: 10 }}>O Plano BrasíliaPrev apresentou rentabilidade de 12,70% em 2025, superando de forma significativa o índice de referência de 8,44% (IPCA + 4,00% a.a.), refletindo a consistência de uma estratégia integralmente alocada em renda fixa.</li>
                    <li style={{ marginBottom: 10 }}>O desempenho foi sustentado principalmente pelos títulos públicos federais, com destaque para as LFTs (+14,46%) e as NTN-B (+12,83%), beneficiadas pelo elevado patamar da taxa Selic e pela inflação ainda resistente no período.</li>
                    <li style={{ marginBottom: 10 }}>Os fundos de renda fixa também apresentaram contribuição relevante de 14,08%, reforçando a gestão ativa e a diversificação dentro do próprio segmento.</li>
                    <li>A estratégia conservadora mostrou-se adequada ao perfil do plano, assegurando previsibilidade, baixa volatilidade e preservação do poder de compra, com resultado consistente ao longo de todo o exercício.</li>
                </ul>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Recurso do Plano</div>
                        <div className="plano-kpi-value">R$ 9.481.887</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Referencial</div>
                        <div className="plano-kpi-value">8,44%</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Rentabilidade</div>
                        <div className="plano-kpi-value">12,70%</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Ganho Real (acima da inflação)</div>
                        <div className="plano-kpi-value">8,10% a.a.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── SEÇÃO DESEMPENHO ─────────────────────────────────────────────────────────
function SecaoDesempenho() {
    const compData = {
        labels: ["Referencial", "Rentabilidade", "Ganho Real"],
        datasets: [{
            data: [8.44, 12.70, 8.10],
            backgroundColor: ["#0074c8", "#00aeef", "#004282"],
            borderRadius: 6,
        }],
    };

    const compOptions = {
        indexAxis: "y",
        plugins: {
            legend: { display: false },
            datalabels: {
                color: "#fff",
                anchor: "end",
                align: "start",
                offset: 4,
                font: { weight: "bold", size: 12 },
                formatter: (v) => `${v.toFixed(2)}%`,
            },
        },
        scales: {
            x: {
                ticks: { callback: (v) => `${v}%`, color: DARK_CHART_OPTS.color },
                grid: { color: DARK_CHART_OPTS.borderColor },
            },
            y: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
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

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    O Plano registrou uma rentabilidade acumulada de 12,70% em 2025, equivalente a 150% do seu índice de referência (IPCA+4,00% a.a.). Esse resultado representa um ganho real (acima da inflação) de 8,10%, incrementando os ganhos para a constituição da reserva de aposentadoria dos seus participantes.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 12 }}>
                    O BrasíliaPrev possui 62% do seu patrimônio total alocado em NTN-B, com taxa média ponderada de 7,25% a.a. + IPCA.
                </p>

                <div className="plano-kpi-row" style={{ marginTop: 32 }}>
                    {[
                        { label: "Recurso do Plano", value: "R$ 9.481.887" },
                        { label: "Referencial", value: "8,44%" },
                        { label: "Rentabilidade", value: "12,70%" },
                        { label: "Ganho Real (acima da inflação)", value: "8,10% a.a." },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Indicadores do Plano · Recurso: R$ 9.481.887</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                {/* Quadro Populacional — pop- */}
                <div className="pop-section dstq-reveal" style={{ marginTop: 60 }}>
                    <div className="pop-hero">
                        <div>
                            <div className="pop-section-label">Quadro Populacional</div>
                            <div className="pop-total-num">1.098</div>
                            <span className="pop-total-label">participantes em 2025</span>
                            <div className="pop-total-delta">
                                <span className="pop-delta-badge">▲ 14,85%</span>
                                <span className="pop-delta-context">vs. 956 em 2024</span>
                            </div>
                        </div>
                        <div className="pop-closed-tag">
                            <span className="pop-closed-icon">✓</span>
                            <div>
                                <strong>Plano Aberto</strong>
                                <span>Disponível para adesões</span>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bar-wrap dstq-reveal dstq-reveal--d1">
                        <div className="pop-bar-label">Composição do plano</div>
                        <div className="pop-bar">
                            <div className="pop-bar-seg pop-bar-seg--ativos" style={{ width: '99.55%' }}>
                                <span>Ativos</span>
                                <strong>99,55%</strong>
                            </div>
                            <div className="pop-bar-seg pop-bar-seg--assistidos" style={{ width: '0.45%' }}>
                                <span>Assistidos</span>
                                <strong>0,45%</strong>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bottom-grid dstq-reveal dstq-reveal--d2">
                        <div className="pop-card">
                            <div className="pop-card-label">Distribuição por Gênero</div>
                            <div className="pop-gender-bar">
                                <div className="pop-gender-masc" style={{ width: '46.49%' }}>
                                    <span>♂ Masculino</span>
                                    <strong>46.49%</strong>
                                </div>
                                <div className="pop-gender-fem" style={{ width: '53.51%' }}>
                                    <strong>53.51%</strong>
                                    <span>Feminino ♀</span>
                                </div>
                            </div>
                            <div className="pop-gender-legend">
                                <span><i className="pop-dot pop-dot--masc" />Masculino — 46,49%</span>
                                <span><i className="pop-dot pop-dot--fem" />Feminino — 53,51%</span>
                            </div>
                        </div>

                        <div className="pop-card">
                            <div className="pop-card-label">Média de Idade</div>
                            <div className="pop-age-pair">
                                <div className="pop-age-item">
                                    <span className="pop-age-num">23,67</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Ativos</span>
                                </div>
                                <div className="pop-age-divider" />
                                <div className="pop-age-item">
                                    <span className="pop-age-num">59,17</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Assistidos</span>
                                </div>
                            </div>
                        </div>

                        <div className="pop-card pop-card--maturity">
                            <div className="pop-card-label">Maturidade do Plano</div>
                            <div className="pop-maturity-num">0,45%</div>
                            <div className="pop-maturity-bar">
                                <div className="pop-maturity-fill" style={{ width: '0.45%' }} />
                            </div>
                            <span className="pop-maturity-sub">Predominância de participantes ativos</span>
                        </div>
                    </div>
                </div>

                <p className="dstq-text-body dstq-reveal" style={{ marginTop: 60, opacity: 0.85 }}>
                    Todos os associados da ANEABRB – Associação Nacional dos Empregados Ativos e Aposentados do Banco de Brasília (AEBRB), da AABR – Associação Atlética Banco de Brasília, do COPEV-DF – Conselho dos Pastores Evangélicos do DF e do CRMV&#8209;DF (Conselho Regional de Medicina Veterinária e Zootecnistas do Distrito Federal), além dos empregados das instituidoras filiadas à ABRAPP (Bloco 244, GS3 Tecnologia, Colégio Biângulo, PPN Tecnologia, Colégio do Sol, Prime, 3 Unidades da Academia Ultra) e seus familiares, até 4º grau e afins, podem aderir ao Plano BrasíliaPrev.
                </p>
            </div>
        </section>
    );
}

// ─── SEÇÃO INVESTIMENTOS ──────────────────────────────────────────────────────
function SecaoInvestimentos() {
    const [perfil, setPerfil] = useState("consolidado");

    const tabelas = {
        consolidado: [
            ["Renda Fixa",                  "100,00", "100,00", "100,00", "91,78"],
            ["Renda Variável",              "10,00",  "5,00",   "70,00",  "1,65"],
            ["Estruturado",                 "10,00",  "5,00",   "20,00",  "1,13"],
            ["Imobiliário",                 "5,00",   "1,00",   "20,00",  "0,38"],
            ["Operações com Participantes", "10,00",  "10,00",  "15,00",  "4,25"],
            ["Exterior",                    "10,00",  "10,00",  "10,00",  "0,83"],
        ],
        conservador: [
            ["Renda Fixa",                  "100,00", "-",  "100,00", "95,00"],
            ["Renda Variável",              "5,00",   "-",  "70,00",  "-"],
            ["Estruturado",                 "5,00",   "-",  "20,00",  "-"],
            ["Imobiliário",                 "2,00",   "-",  "20,00",  "-"],
            ["Operações com Participantes", "10,00",  "-",  "15,00",  "5,00"],
            ["Exterior",                    "4,00",   "-",  "10,00",  "-"],
        ],
        moderado: [
            ["Renda Fixa",                  "100,00", "-",  "100,00", "87,00"],
            ["Renda Variável",              "10,00",  "-",  "70,00",  "2,00"],
            ["Estruturado",                 "10,00",  "-",  "20,00",  "5,00"],
            ["Imobiliário",                 "5,00",   "-",  "20,00",  "2,00"],
            ["Operações com Participantes", "10,00",  "-",  "15,00",  "-"],
            ["Exterior",                    "10,00",  "-",  "10,00",  "4,00"],
        ],
        arrojado: [
            ["Renda Fixa",                  "100,00", "-",  "100,00", "60,00"],
            ["Renda Variável",              "30,00",  "-",  "70,00",  "20,00"],
            ["Estruturado",                 "15,00",  "-",  "20,00",  "10,00"],
            ["Imobiliário",                 "10,00",  "-",  "20,00",  "3,00"],
            ["Operações com Participantes", "5,00",   "-",  "15,00",  "-"],
            ["Exterior",                    "10,00",  "-",  "10,00",  "7,00"],
        ],
    };

    const abas = [
        ["consolidado", "Plano Consolidado"],
        ["conservador", "Perfil Conservador"],
        ["moderado",    "Perfil Moderado"],
        ["arrojado",    "Perfil Arrojado"],
    ];

    return (
        <section id="investimentos" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Alocação de Recursos</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultados da Política de <span className="dstq-accent">Investimentos</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div style={{ marginBottom: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {abas.map(([key, label]) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setPerfil(key)}
                            style={{
                                padding: "8px 16px",
                                borderRadius: 8,
                                border: perfil === key ? "1px solid #0074c8" : "1px solid #dbe3ee",
                                background: perfil === key ? "#0074c8" : "#fff",
                                color: perfil === key ? "#fff" : "#0a1f3c",
                                fontWeight: 600,
                                fontSize: "0.82rem",
                                cursor: "pointer",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={perfil}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="plano-table-wrap"
                    >
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th rowSpan={2}>Segmento</th>
                                    <th className="num" colSpan={2}>Política Investimento</th>
                                    <th className="num">Resolução 4.994</th>
                                    <th className="num">Alocação Objetivo 2026</th>
                                </tr>
                                <tr>
                                    <th className="num">2026</th>
                                    <th className="num">2025</th>
                                    <th className="num"></th>
                                    <th className="num"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabelas[perfil].map(([seg, p26, p25, res, aloc], i) => (
                                    <tr key={i}>
                                        <td>{seg}</td>
                                        <td className="num">{p26}</td>
                                        <td className="num">{p25}</td>
                                        <td className="num">{res}</td>
                                        <td className="num">{aloc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </AnimatePresence>

                <div style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Resultados dos Investimentos
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
                                <tr><td>Renda Fixa</td><td className="num">6,54</td><td className="num">5,78</td><td className="num">12,70</td></tr>
                                <tr><td>Renda Variável</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr><td>Estruturado</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr><td>Imobiliário</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr><td>Operações com Participantes</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr><td>Exterior</td><td className="num">-</td><td className="num">-</td><td className="num">-</td></tr>
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">6,54</td>
                                    <td className="num">5,78</td>
                                    <td className="num">12,70</td>
                                </tr>
                                <tr>
                                    <td><strong>ÍNDICE DE REFERÊNCIA</strong></td>
                                    <td className="num">5,03</td>
                                    <td className="num">3,24</td>
                                    <td className="num">8,43</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA Demonstrativo Analítico */}
                <motion.a
                    href="https://previdenciabrb.org.br/brasiliaprev-instituido-cd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dstq-reveal"
                    whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,116,200,0.12)' }}
                    whileTap={{ scale: 0.99 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        marginTop: '32px',
                        padding: '24px 32px',
                        borderRadius: '16px',
                        background: '#f8fafc',
                        border: '1px solid rgba(0, 116, 200, 0.15)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    }}
                >
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #0074c8 0%, #00aeef 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 6px 16px rgba(0, 116, 200, 0.25)'
                    }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, color: '#0a1f3c', fontSize: '1.05rem', lineHeight: '1.5', fontWeight: '500' }}>
                            <strong style={{ color: '#0074c8', fontWeight: '800' }}>CLIQUE AQUI</strong> para acessar o Demonstrativo Analítico dos Investimentos do Plano BrasíliaPrev – Dezembro/2025
                        </p>
                    </div>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(0,116,200,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0074c8',
                        fontSize: '1.2rem'
                    }}>
                        →
                    </div>
                </motion.a>
            </div>
        </section>
    );
}

// ─── SEÇÃO ARRECADACAO ────────────────────────────────────────────────────────
function SecaoArrecadacao() {
    const fluxData = {
        labels: ["2023", "2024", "2025"],
        datasets: [
            { label: "Arrecadação",          data: [1298295, 1240896, 5194243], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios/Institutos", data: [2862,    108529,  392175],  backgroundColor: "#0074c8", borderRadius: 4 },
        ],
    };
    const fluxOptions = {
        plugins: {
            legend: { position: "top", labels: { color: DARK_CHART_OPTS.color } },
            datalabels: {
                color: "#fff",
                anchor: "end",
                align: "top",
                offset: 4,
                font: { weight: "bold", size: 10 },
                formatter: (value) => 
                    value.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                display: (context) => context.dataset.data[context.dataIndex] > 500000 ? true : 'auto', // Avoid crowding on small bars
            },
        },
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
                    Em 2025, houve um aumento de 318,59% na arrecadação das contribuições e repasses ao Plano BrasíliaPrev. O pagamento de benefícios e Institutos aumentou 261,36%, o que é coerente com o aumento no número de participantes.
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
                            <tr>
                                <td>Arrecadação</td>
                                <td className="num">R$ 1.298.295</td>
                                <td className="num">R$ 1.240.896</td>
                                <td className="num">R$ 5.194.243</td>
                            </tr>
                            <tr>
                                <td>Benefícios/Institutos</td>
                                <td className="num">R$ 2.862</td>
                                <td className="num">R$ 108.529</td>
                                <td className="num">R$ 392.175</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function SecaoAtuarial() {
    return (
        <section id="atuarial" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Situação Atuarial</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado <span className="dstq-accent">Atuarial</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                {/* Tabela 1 — Ativo Líquido */}
                <div className="plano-table-wrap dstq-reveal">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Total",                                 "4.007.499,35", "9.546.435,41"],
                                ["Exigível Operacional",                       "-4.653,00",    "-8.464,18"],
                                ["Fundos (Administrativo e Investimento)", "-30.725,05",   "-59.204,30"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num"><strong>3.972.121,30</strong></td>
                                <td className="num"><strong>9.478.766,93</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela 2 — Provisões Matemáticas */}
                <div className="plano-table-wrap dstq-reveal" style={{ marginTop: '24px' }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Provisão Matemática de Benefício Concedido</td><td className="num">0,00</td><td className="num">1.781.784,82</td></tr>
                            <tr><td>Provisão Matemática de Benefício a Conceder</td><td className="num">3.972.121,30</td><td className="num">7.696.982,11</td></tr>
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td>
                                <td className="num"><strong>3.972.121,30</strong></td>
                                <td className="num"><strong>9.478.766,93</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela 3 — Resultado Atuarial */}
                <div className="plano-table-wrap dstq-reveal" style={{ marginTop: '24px' }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Ativo Líquido do Plano</td><td className="num">3.972.121,30</td><td className="num">9.478.766,93</td></tr>
                            <tr><td>Provisão Matemática Total</td><td className="num">-3.972.121,30</td><td className="num">-9.478.766,93</td></tr>
                            <tr><td>Fundo Previdencial</td><td className="num">0,00</td><td className="num">0,00</td></tr>
                            <tr className="total">
                                <td><strong>Resultado Atuarial</strong></td>
                                <td className="num"><strong>0,00</strong></td>
                                <td className="num"><strong>0,00</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="dstq-reveal dstq-reveal--d2" style={{ marginTop: '32px' }}>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginBottom: '14px' }}>
                        As Provisões Matemáticas dimensionadas em 31 de dezembro de 2025, no montante de <strong style={{ color: '#0a1f3c' }}>R$ 9.478.766,93</strong>, comparativamente àquelas constantes de Avaliação Atuarial de 2024, que perfizeram <strong style={{ color: '#0a1f3c' }}>R$ 3.972.121,30</strong>, representaram uma variação de aproximadamente <strong style={{ color: '#0a1f3c' }}>138,63%</strong>.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginBottom: '14px' }}>
                        A variação registrada é justificada pelo incremento no quantitativo de participantes, pela manutenção de contribuições, acrescidas do estoque e respectiva rentabilidade auferida no período, superior aos montantes de resgates, portabilidade e concessões ocorridas no exercício.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        O Plano de Benefícios BRASÍLIAPREV encerrou o exercício de 2025 com <strong style={{ color: '#0a1f3c' }}>Equilíbrio Técnico econômico e atuarial</strong>, registrando, portanto, suficiência de cobertura e solvência.
                    </p>
                </div>

                {/* CTA Parecer Atuarial */}
                <motion.a
                    href="https://previdenciabrb.org.br/brasiliaprev-instituido-cd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dstq-reveal"
                    whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,116,200,0.12)' }}
                    whileTap={{ scale: 0.99 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        marginTop: '32px',
                        padding: '24px 32px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 116, 200, 0.15)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    }}
                >
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #0074c8 0%, #00aeef 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 6px 16px rgba(0, 116, 200, 0.25)'
                    }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <circle cx="12" cy="14" r="3"></circle>
                            <path d="M12 11v3h3"></path>
                        </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, color: '#0a1f3c', fontSize: '1.05rem', lineHeight: '1.5', fontWeight: '500' }}>
                            <strong style={{ color: '#0074c8', fontWeight: '800' }}>CLIQUE AQUI</strong> para acessar o Parecer Atuarial do Plano BrasíliaPrev.
                        </p>
                    </div>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(0,116,200,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0074c8',
                        fontSize: '1.2rem'
                    }}>
                        →
                    </div>
                </motion.a>
            </div>
        </section>
    );
}

function SecaoEquilibrio() {
    return (
        <section id="equilibrio" className="plano-section plano-section--dark">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Situação Financeira</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Equilíbrio <span className="dstq-accent">Técnico</span> do Plano
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="eq-grid dstq-reveal dstq-reveal--d2">
                    <div className="eq-card eq-card--pat">
                        <span className="eq-card-label">Patrimônio de Cobertura</span>
                        <div className="eq-card-number">
                            <span className="eq-currency">R$</span>
                            <span className="eq-integer">9.478.766</span>
                            <span className="eq-decimal">,93</span>
                        </div>
                    </div>
                    <div className="eq-card eq-card--prov">
                        <span className="eq-card-label">Provisões Matemáticas</span>
                        <div className="eq-card-number">
                            <span className="eq-currency">R$</span>
                            <span className="eq-integer">9.478.766</span>
                            <span className="eq-decimal">,93</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── SEÇÃO CUSTOS ─────────────────────────────────────────────────────────────
function SecaoCustos() {
    return (
        <section className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Despesas Administrativas</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Custos com a <span className="dstq-accent">Administração</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em 2025, os custos com a administração do Plano de Benefícios BrasíliaPrev, formados pelas despesas com a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos conforme demonstrado a seguir:
                </p>

                {/* Tabela 1 */}
                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th>Despesas (R$)</th>
                                <th className="num">Gestão Própria</th>
                                <th className="num">Gestão Previdencial</th>
                                <th className="num">Gestão de Investimentos</th>
                                <th className="num">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Pessoal e Encargos</td><td className="num">5.965</td><td className="num">6.727</td><td className="num">-</td><td className="num">12.692</td></tr>
                            <tr><td>Treinamento e Viagens</td><td className="num">56</td><td className="num">63</td><td className="num">-</td><td className="num">119</td></tr>
                            <tr><td>Serviços de Terceiros</td><td className="num">2.102</td><td className="num">2.371</td><td className="num">-</td><td className="num">4.473</td></tr>
                            <tr><td>Despesas de Consumo, Depreciações, Tafic etc</td><td className="num">530</td><td className="num">598</td><td className="num">-</td><td className="num">1.127</td></tr>
                            <tr><td>Contingências (PIS e COFINS)</td><td className="num">0</td><td className="num">2.287</td><td className="num">-</td><td className="num">2.287</td></tr>
                            <tr className="total">
                                <td><strong>TOTAIS</strong></td>
                                <td className="num"><strong>8.654</strong></td>
                                <td className="num"><strong>12.045</strong></td>
                                <td className="num"><strong>-</strong></td>
                                <td className="num"><strong>20.698</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela 2 */}
                <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.3rem", marginTop: 48 }}>
                    Custos com a Gestão dos Planos Previdenciais
                </h3>
                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th className="num">BrasíliaPrev</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Despesas de Fomento</td><td className="num">-</td></tr>
                            <tr><td>Pessoal e Encargos</td><td className="num">12.692</td></tr>
                            <tr><td>Treinamentos/Viagens</td><td className="num">119</td></tr>
                            <tr><td>Serviços de Terceiros</td><td className="num">4.473</td></tr>
                            <tr><td>Despesas de Consumo, Depreciação, Tafic, etc</td><td className="num">1.127</td></tr>
                            <tr><td>Contingências (PIS e COFINS)</td><td className="num">2.287</td></tr>
                            <tr className="total"><td><strong>Total</strong></td><td className="num"><strong>20.698</strong></td></tr>
                            <tr><td>Corretagens/Emolumentos Bolsa Valores</td><td className="num">-</td></tr>
                            <tr><td>Taxa Adm/Gestão Fundos Abertos</td><td className="num">1.869</td></tr>
                            <tr><td>Taxa Custódia/Controladoria Fundos Abertos</td><td className="num">717</td></tr>
                            <tr><td>Taxa Performance Fundos Abertos</td><td className="num">-</td></tr>
                            <tr><td>Outras Despesas Fundos Abertos</td><td className="num">551</td></tr>
                            <tr className="total"><td><strong>Sub-Total (Despesas Outras)</strong></td><td className="num"><strong>3.137</strong></td></tr>
                            <tr className="total"><td><strong>Total</strong></td><td className="num"><strong>23.835</strong></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

// ─── SEÇÃO REGULAMENTAR ───────────────────────────────────────────────────────
function SecaoRegulamentar() {
    return (
        <section className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Governança</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Alterações <span className="dstq-accent">Regulamentares</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-chart-box plano-chart-box--light dstq-reveal dstq-reveal--d2">
                    <div className="plano-chart-title">Revisão 18 do Regulamento do Plano BrasíliaPrev</div>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        Aprovado na 697ª reunião do Conselho Deliberativo, em 06 de agosto de 2025.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginTop: 14 }}>
                        Justificativa da alteração: o regulamento foi alterado para ajustar a mudança da marca de Regius para Previdência BRB e inclusão da previsão de perfil de investimentos no Plano BrasíliaPrev.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginTop: 14 }}>
                        Versão vigente está publicada em:{" "}
                        <a
                            href="https://previdenciabrb.org.br/brasiliaprev-instituido-cd/"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#0074c8", textDecoration: "none", fontWeight: 700 }}
                        >
                            previdenciabrb.org.br/brasiliaprev-instituido-cd/
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
function PlanoBrasiliaPrev() {
    useReveal();

    return (
        <>
            <Header2 />

            {/* Hero */}
            <section
                className="hero-section hero-style-two"
                style={{ position: "relative", overflow: "hidden", background: "#011834" }}
            >
                <video
                    autoPlay muted loop playsInline
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.42, zIndex: 0 }}
                >
                    <source src={headerBrasiliaprevVideo} type="video/mp4" />
                </video>
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(1,24,52,0.74) 0%, rgba(0,66,130,0.68) 55%, rgba(0,116,200,0.58) 100%), radial-gradient(circle at 20% 15%, rgba(0,174,239,0.24), transparent 38%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 40%)",
                    zIndex: 1,
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "40px" }}>
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div style={{ marginBottom: "12px" }}>
                                <span style={{ color: "#00aeef", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                                    # Nossos Planos · Instituído
                                </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
                                <img src={iconBrasiliaprev} alt="BrasíliaPrev" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                                <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: 0 }}>
                                    Plano <span style={{ color: "#00aeef" }}>BrasíliaPrev</span>
                                </h1>
                            </div>
                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "760px" }}>
                                Plano instituído voltado a associados e seus familiares, com rentabilidade de 12,70% em 2025, equivalente a 150% do índice de referência, e crescimento de 14,85% no número de participantes.
                            </p>
                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    BrasíliaPrev
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="plano-hero-meta">
                        <div>
                            <div className="plano-hero-meta-value">12,70%</div>
                            <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">150%</div>
                            <div className="plano-hero-meta-label">vs. Índice Referência</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">R$ 9.481.887</div>
                            <div className="plano-hero-meta-label">Recurso do Plano</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">8,10% a.a.</div>
                            <div className="plano-hero-meta-label">Ganho Real</div>
                        </div>
                    </div>
                </div>
            </section>

            <SecaoEconomia />
            <Band quote={'"O Plano BrasíliaPrev apresentou rentabilidade de 12,70% em 2025, superando de forma significativa o índice de referência de 8,44% (IPCA + 4,00% a.a.), refletindo a consistência de uma estratégia integralmente alocada em renda fixa."'} />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <Band quote={'"O BrasíliaPrev possui 62% do seu patrimônio total alocado em NTN-B, com taxa média ponderada de 7,25% a.a. + IPCA."'} />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoEquilibrio />
            <SecaoCustos />
            <SecaoRegulamentar />

            <SecaoIndicePlanos particlesId="services-particles-brasiliaprev" />

            <Footer2 />
        </>
    );
}

export default PlanoBrasiliaPrev;
