import { Link } from "react-router-dom";
import SecaoEconomia from "../../components/ui/SecaoEconomia";
import { useEffect, useState } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
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

// ─── SEÇÃO ECONOMIA ───────────────────────────────────────────────────────────
function SecaoRentabilidade() {
    const chartData = {
        labels: ["Rentabilidade", "Índice de Referência (IPCA+4,00% a.a.)"],
        datasets: [{
            data: [12.70, 8.44],
            backgroundColor: ["#00aeef", "#0074c8"],
            borderRadius: 6,
        }],
    };
    const chartOptions = {
        indexAxis: "y",
        plugins: { legend: { display: false } },
        scales: {
            x: { ticks: { callback: (v) => v + "%", color: LIGHT_CHART_OPTS.color }, grid: { color: LIGHT_CHART_OPTS.borderColor } },
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

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
                    <Bar data={chartData} options={chartOptions} />
                </div>

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
    const popData = {
        labels: ["Ativos (99,55%)", "Assistidos (0,45%)"],
        datasets: [{ data: [99.55, 0.45], backgroundColor: ["#00aeef", "#0074c8"] }],
    };
    const popOptions = {
        plugins: { legend: { position: "bottom", labels: { color: DARK_CHART_OPTS.color } } },
    };

    const evolData = {
        labels: ["2024", "2025"],
        datasets: [{
            label: "Participantes",
            data: [956, 1098],
            backgroundColor: ["#0074c8", "#00aeef"],
            borderRadius: 6,
        }],
    };
    const evolOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: { ticks: { color: DARK_CHART_OPTS.color }, grid: { color: DARK_CHART_OPTS.borderColor } },
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

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    O Plano registrou uma rentabilidade acumulada de 12,70% em 2025, equivalente a 150% do seu índice de referência (IPCA+4,00% a.a.). Esse resultado representa um ganho real (acima da inflação) de 8,10%, incrementando os ganhos para a constituição da reserva de aposentadoria dos seus participantes.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 12 }}>
                    O BrasíliaPrev possui 62% do seu patrimônio total alocado em NTN-B, com taxa média ponderada de 7,25% a.a. + IPCA.
                </p>

                <div style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.5rem" }}>
                        Quadro Populacional
                    </h3>

                    <div className="plano-kpi-row" style={{ marginTop: 24 }}>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Total de Participantes</div>
                            <div className="plano-kpi-value">1.098</div>
                            <div className="plano-kpi-sub">Aumento de 14,85% vs. 2024</div>
                        </div>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Ativos</div>
                            <div className="plano-kpi-value">99,55%</div>
                        </div>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Assistidos</div>
                            <div className="plano-kpi-value">0,45%</div>
                        </div>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Pensionistas</div>
                            <div className="plano-kpi-value">0,0%</div>
                        </div>
                    </div>

                    <div className="plano-kpi-row" style={{ marginTop: 16 }}>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Feminino</div>
                            <div className="plano-kpi-value">53,51%</div>
                        </div>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Masculino</div>
                            <div className="plano-kpi-value">46,49%</div>
                        </div>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Média de Idade de Ativos</div>
                            <div className="plano-kpi-value">23,67</div>
                        </div>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Média de Idade de Assistidos</div>
                            <div className="plano-kpi-value">59,17</div>
                        </div>
                    </div>

                    <div className="plano-kpi-row" style={{ marginTop: 16 }}>
                        <div className="plano-kpi-card">
                            <div className="plano-kpi-label">Maturidade do Plano</div>
                            <div className="plano-kpi-value">0,45%</div>
                        </div>
                    </div>

                    <div className="dstq-split" style={{ marginTop: 40 }}>
                        <div className="plano-chart-box" style={{ marginTop: 0 }}>
                            <div className="plano-chart-title">Distribuição de Participantes</div>
                            <Doughnut data={popData} options={popOptions} />
                        </div>
                        <div className="plano-chart-box" style={{ marginTop: 0 }}>
                            <div className="plano-chart-title">Evolução de Participantes — 2024 vs. 2025</div>
                            <Bar data={evolData} options={evolOptions} />
                        </div>
                    </div>

                    <p className="dstq-text-body dstq-reveal" style={{ marginTop: 32 }}>
                        Todos os associados da ANEABRB – Associação Nacional dos Empregados Ativos e Aposentados do Banco de Brasília (AEBRB), da AABR – Associação Atlética Banco de Brasília, do COPEV-DF – Conselho dos Pastores Evangélicos do DF e do CRMV&#8209;DF (Conselho Regional de Medicina Veterinária e Zootecnistas do Distrito Federal), além dos empregados das instituidoras filiadas à ABRAPP (Bloco 244, GS3 Tecnologia, Colégio Biângulo, PPN Tecnologia, Colégio do Sol, Prime, 3 Unidades da Academia Ultra) e seus familiares, até 4º grau e afins, podem aderir ao Plano BrasíliaPrev.
                    </p>
                </div>
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
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="plano-table-wrap">
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
                </div>

                <div style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Resultados dos Investimentos
                    </h3>
                    <div className="plano-table-wrap">
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th>Segmento</th>
                                    <th className="num">Desempenho 1º Sem</th>
                                    <th className="num">2º Sem</th>
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

                <div style={{ marginTop: 24 }} className="dstq-reveal">
                    <p className="dstq-text-body dstq-text-body--on-light">
                        <a
                            href="https://previdenciabrb.org.br/brasiliaprev-instituido-cd/"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#0074c8", fontWeight: 700, textDecoration: "none" }}
                        >
                            CLIQUE AQUI
                        </a>{" "}
                        para acessar o Demonstrativo Analítico dos Investimentos do Plano BrasíliaPrev – Dezembro/2025
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── SEÇÃO ARRECADAÇÃO ────────────────────────────────────────────────────────
function SecaoArrecadacao() {
    const fluxData = {
        labels: ["2023", "2024", "2025"],
        datasets: [
            { label: "Arrecadação",          data: [1298295, 1240896, 5194243], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios/Institutos", data: [2862,    108529,  392175],  backgroundColor: "#0074c8", borderRadius: 4 },
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

// ─── SEÇÃO ATUARIAL ───────────────────────────────────────────────────────────
function SecaoAtuarial() {
    return (
        <section id="atuarial" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Situação Atuarial</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado <span className="dstq-accent">Atuarial</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                {/* Tabela 1 */}
                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th>Rubrica</th>
                                <th className="num">2024</th>
                                <th className="num">2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Ativo Total</td><td className="num">4.007.499,35</td><td className="num">9.546.435,41</td></tr>
                            <tr><td>Exigível Operacional</td><td className="num">-4.653,00</td><td className="num">-8.464,18</td></tr>
                            <tr><td>Fundos (Administrativo e Investimento)</td><td className="num">-30.725,05</td><td className="num">-59.204,30</td></tr>
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num"><strong>3.972.121,30</strong></td>
                                <td className="num"><strong>9.478.766,93</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela 2 */}
                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th>Rubrica</th>
                                <th className="num">2024</th>
                                <th className="num">2025</th>
                            </tr>
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

                {/* Tabela 3 */}
                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th>Rubrica</th>
                                <th className="num">2024</th>
                                <th className="num">2025</th>
                            </tr>
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

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2" style={{ marginTop: 32 }}>
                    As Provisões Matemáticas dimensionadas em 31 de dezembro de 2025, no montante de R$ 9.478.766,93, comparativamente àquelas constantes de Avaliação Atuarial de 2024, que perfizeram R$ 3.972.121,30, representaram uma variação de aproximadamente 138,63%.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    A variação registrada é justificada pelo incremento no quantitativo de participantes, pela manutenção de contribuições, acrescidas do estoque e respectiva rentabilidade auferida no período, superior aos montantes de resgates, portabilidade e concessões ocorridas no exercício.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    O Plano de Benefícios BRASÍLIAPREV encerrou o exercício de 2025 com Equilíbrio Técnico econômico e atuarial, registrando, portanto, suficiência de cobertura e solvência.
                </p>

                <div className="dstq-reveal" style={{ marginTop: 24 }}>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        <a
                            href="https://previdenciabrb.org.br/brasiliaprev-instituido-cd/"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#0074c8", fontWeight: 700, textDecoration: "none" }}
                        >
                            Clique aqui
                        </a>{" "}
                        para acessar o Parecer Atuarial do Plano BrasíliaPrev.
                    </p>
                </div>

                <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem", marginTop: 48 }}>
                    Equilíbrio Técnico do Plano
                </h3>
                <div className="plano-kpi-row">
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Patrimônio de Cobertura</div>
                        <div className="plano-kpi-value">R$ 9.478.766,93</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Provisões Matemáticas</div>
                        <div className="plano-kpi-value">R$ 9.478.766,93</div>
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
function PlanoBrasiliaPrev2025() {
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
            <SecaoCustos />
            <SecaoRegulamentar />

            {/* Índice de planos */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-brasiliaprev2025" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            Conheça os planos da <span className="services-index-accent">Previdência BRB</span> e descubra o que o seu plano oferece para o seu futuro.
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

export default PlanoBrasiliaPrev2025;
