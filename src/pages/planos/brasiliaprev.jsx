import { Link } from "react-router-dom";
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

function SecaoEconomia() {
    return (
        <section id="economia" className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Contexto Macroeconômico</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    A Economia global em <span className="dstq-accent">2025</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="dstq-split dstq-reveal dstq-reveal--d2">
                    <div>
                        <p className="dstq-text-body">
                            O ano de 2025 foi marcado por um ambiente macroeconômico global ainda desafiador,
                            caracterizado pela transição do ciclo de aperto monetário nas principais economias e pela
                            manutenção de níveis elevados de incerteza.
                        </p>
                        <p className="dstq-text-body" style={{ marginTop: 16 }}>
                            Nos Estados Unidos, o Federal Reserve adotou postura cautelosa ao longo do período,
                            mantendo taxas de juros em patamares restritivos diante de uma inflação que, embora em
                            desaceleração, permaneceu acima da meta.
                        </p>
                        <p className="dstq-text-body" style={{ marginTop: 16 }}>
                            No Brasil, a atividade econômica manteve-se resiliente ao longo do ano, sustentada
                            principalmente pelo desempenho do setor agropecuário e pela solidez do mercado de
                            trabalho. O Banco Central elevou a taxa Selic para patamares próximos de 15,00%.
                        </p>
                    </div>
                    <div>
                        <div className="dstq-img-card">
                            <img
                                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
                                alt="Mercado financeiro global"
                            />
                        </div>
                    </div>
                </div>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Taxa Selic (Brasil)</div>
                        <div className="plano-kpi-value">~15%</div>
                        <div className="plano-kpi-sub">Patamar restritivo mantido</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Cenário Fiscal</div>
                        <div className="plano-kpi-value">Risco</div>
                        <div className="plano-kpi-sub">Principal vetor doméstico</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Renda Fixa</div>
                        <div className="plano-kpi-value">Prêmios</div>
                        <div className="plano-kpi-sub">Oportunidades em ativos</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecaoRentabilidade() {
    const data = {
        labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado"],
        datasets: [
            {
                data: [12.7, 8.43, 7.8],
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
                    O Plano BrasíliaPrev registrou rentabilidade de <strong style={{ color: "#0a1f3c" }}>12,70%</strong>{" "}
                    em 2025, representando{" "}
                    <strong style={{ color: "#0a1f3c" }}>150,65% do índice de referência (IPCA + 4% a.a.)</strong>.
                    Todos os recursos do plano estão alocados em Renda Fixa, com estratégia concentrada em Títulos
                    Públicos Federais pós-fixados atrelados à Selic (68% do portfólio) e NTN-B (23%).
                </p>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    O BrasíliaPrev encontra-se em plena fase de acumulação, com patrimônio que cresceu de R$ 3,97
                    milhões em 2024 para R$ 9,5 milhões em 2025, representando crescimento de 138,63% nas provisões
                    matemáticas.
                </p>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
                    <Bar data={data} options={options} />
                </div>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Desempenho vs. Referência</div>
                        <div className="plano-kpi-value">150,65%</div>
                        <div className="plano-kpi-sub">Recuperação após 5,85% em 2024</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Concentração Renda Fixa</div>
                        <div className="plano-kpi-value">100%</div>
                        <div className="plano-kpi-sub">Carteira conservadora e soberana</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Crescimento Patrimônio</div>
                        <div className="plano-kpi-value">+138%</div>
                        <div className="plano-kpi-sub">De R$ 3,97 mi para R$ 9,5 mi</div>
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
                data: [12.7, 8.43, 7.8],
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

    const popData = {
        labels: ["Ativos (99,54%)", "Assistidos (0,46%)"],
        datasets: [{ data: [99.54, 0.46], backgroundColor: ["#00aeef", "#0074c8"] }],
    };

    const popOptions = {
        plugins: {
            legend: { position: "bottom", labels: { color: DARK_CHART_OPTS.color } },
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
                        <div className="plano-kpi-value">R$ 9,5 mi</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Índice de Referência</div>
                        <div className="plano-kpi-value">8,43%</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Rentabilidade</div>
                        <div className="plano-kpi-value">12,70%</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Desempenho</div>
                        <div className="plano-kpi-value">150,65%</div>
                    </div>
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Rentabilidade vs. Referência vs. Mercado</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                <div style={{ marginTop: 60 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.5rem" }}>
                        Quadro Populacional
                    </h3>
                    <div className="dstq-split" style={{ marginTop: 24 }}>
                        <div>
                            <div className="plano-kpi-row">
                                <div className="plano-kpi-card">
                                    <div className="plano-kpi-label">Total de Participantes</div>
                                    <div className="plano-kpi-value">1.098</div>
                                    <div className="plano-kpi-sub">Aumento de 14,85% vs. 2024</div>
                                </div>
                                <div className="plano-kpi-card">
                                    <div className="plano-kpi-label">Ativos</div>
                                    <div className="plano-kpi-value">99,54%</div>
                                </div>
                                <div className="plano-kpi-card">
                                    <div className="plano-kpi-label">Assistidos</div>
                                    <div className="plano-kpi-value">0,46%</div>
                                </div>
                                <div className="plano-kpi-card">
                                    <div className="plano-kpi-label">Pensionistas</div>
                                    <div className="plano-kpi-value">0,0%</div>
                                </div>
                            </div>
                            <p className="dstq-text-body dstq-reveal" style={{ marginTop: 28 }}>
                                Podem aderir: associados da ANEABRB, da AABR, do COPEV-DF e do ICIPE (administrador
                                do HCB – Hospital da Criança de Brasília José Alencar) e seus familiares de até 4º
                                grau e afins.
                            </p>
                        </div>
                        <div className="plano-chart-box" style={{ marginTop: 0 }}>
                            <div className="plano-chart-title">Distribuição de Participantes</div>
                            <Doughnut data={popData} options={popOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecaoInvestimentos() {
    const [perfilAtivo, setPerfilAtivo] = useState("consolidado");

    const tabelas = {
        consolidado: [
            ["Renda Fixa", "100,00%", "100,00%", "91,78%"],
            ["Renda Variável", "10,00%", "70,00%", "1,65%"],
            ["Estruturado", "10,00%", "20,00%", "1,13%"],
            ["Imobiliário", "5,00%", "20,00%", "0,38%"],
            ["Operações com Participantes", "10,00%", "15,00%", "4,25%"],
            ["Exterior", "10,00%", "10,00%", "0,83%"],
        ],
        conservador: [
            ["Renda Fixa", "100,00%", "100,00%", "95,00%"],
            ["Renda Variável", "5,00%", "70,00%", "-"],
            ["Estruturado", "5,00%", "20,00%", "-"],
            ["Imobiliário", "2,00%", "20,00%", "-"],
            ["Operações com Participantes", "10,00%", "15,00%", "5,00%"],
            ["Exterior", "4,00%", "10,00%", "-"],
        ],
        moderado: [
            ["Renda Fixa", "100,00%", "100,00%", "87,00%"],
            ["Renda Variável", "10,00%", "70,00%", "2,00%"],
            ["Estruturado", "10,00%", "20,00%", "5,00%"],
            ["Imobiliário", "5,00%", "20,00%", "2,00%"],
            ["Operações com Participantes", "10,00%", "15,00%", "-"],
            ["Exterior", "10,00%", "10,00%", "4,00%"],
        ],
        arrojado: [
            ["Renda Fixa", "100,00%", "100,00%", "60,00%"],
            ["Renda Variável", "30,00%", "70,00%", "20,00%"],
            ["Estruturado", "15,00%", "20,00%", "10,00%"],
            ["Imobiliário", "10,00%", "20,00%", "3,00%"],
            ["Operações com Participantes", "5,00%", "15,00%", "-"],
            ["Exterior", "10,00%", "10,00%", "7,00%"],
        ],
    };

    const allocData = {
        labels: [
            "Renda Fixa (91,78%)",
            "Op. Participantes (4,25%)",
            "Renda Variável (1,65%)",
            "Estruturado (1,13%)",
            "Exterior (0,83%)",
            "Imobiliário (0,38%)",
        ],
        datasets: [
            {
                data: [91.78, 4.25, 1.65, 1.13, 0.83, 0.38],
                backgroundColor: ["#00aeef", "#0074c8", "#004282", "#1d4ed8", "#64748b", "#94a3b8"],
            },
        ],
    };

    const allocOptions = {
        plugins: { legend: { position: "bottom", labels: { color: LIGHT_CHART_OPTS.color } } },
    };

    return (
        <section id="investimentos" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Alocação de Recursos</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado da Política de <span className="dstq-accent">Investimentos</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div style={{ marginBottom: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[
                        ["consolidado", "Consolidado"],
                        ["conservador", "Conservador"],
                        ["moderado", "Moderado"],
                        ["arrojado", "Arrojado"],
                    ].map(([key, label]) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setPerfilAtivo(key)}
                            style={{
                                padding: "8px 16px",
                                borderRadius: 8,
                                border: perfilAtivo === key ? "1px solid #0074c8" : "1px solid #dbe3ee",
                                background: perfilAtivo === key ? "#0074c8" : "#fff",
                                color: perfilAtivo === key ? "#fff" : "#0a1f3c",
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
                                <th>Segmento</th>
                                <th className="num">Política Investimento</th>
                                <th className="num">Resolução 4.994</th>
                                <th className="num">Alocação 2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabelas[perfilAtivo].map(([seg, pol, res, aloc], i) => (
                                <tr key={i}>
                                    <td>{seg}</td>
                                    <td className="num">{pol}</td>
                                    <td className="num">{res}</td>
                                    <td className="num">{aloc}</td>
                                </tr>
                            ))}
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
                                    <th className="num">1º Sem</th>
                                    <th className="num">2º Sem</th>
                                    <th className="num">2025</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Renda Fixa", "6,54%", "5,78%", "12,70%"],
                                    ["Renda Variável", "-", "-", "-"],
                                    ["Estruturado", "-", "-", "-"],
                                    ["Imobiliário", "-", "-", "-"],
                                    ["Operações com Participantes", "-", "-", "-"],
                                    ["Exterior", "-", "-", "-"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}>
                                        <td>{seg}</td>
                                        <td className="num">{s1}</td>
                                        <td className="num">{s2}</td>
                                        <td className="num">{total}</td>
                                    </tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">6,54%</td>
                                    <td className="num">5,78%</td>
                                    <td className="num">12,70%</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                                    <td><strong>ÍNDICE DE REFERÊNCIA</strong></td>
                                    <td className="num">5,03%</td>
                                    <td className="num">3,24%</td>
                                    <td className="num">8,43%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Alocação por Segmento (Consolidado)</div>
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
            { label: "Arrecadação", data: [1298295, 1240896, 5194243], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios/Institutos", data: [2862, 108529, 392175], backgroundColor: "#0074c8", borderRadius: 4 },
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
                    Em 2025, houve elevação expressiva de 318,60% na arrecadação das contribuições ao Plano
                    BrasíliaPrev, reflexo do crescimento de 14,85% no número de participantes e da fase de
                    acumulação do plano. O pagamento de benefícios e institutos cresceu 261,56%.
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
    const equilData = {
        labels: ["Ativo Líquido do Plano", "Provisões Matemáticas"],
        datasets: [{ data: [9478766.93, 9478766.93], backgroundColor: ["#00aeef", "#0074c8"], borderRadius: 6 }],
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
                            <strong style={{ color: "#0a1f3c" }}> R$ 9.478.766,93</strong>, comparativamente às de
                            2024 (R$ 3.972.121,30), representaram variação de aproximadamente
                            <strong style={{ color: "#0a1f3c" }}> 138,63%</strong>.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                            O Plano BrasíliaPrev encerrou o exercício de 2025 com
                            <strong style={{ color: "#0a1f3c" }}> Equilíbrio Técnico econômico e atuarial</strong>,
                            registrando suficiência de cobertura e solvência. A variação é justificada pelo incremento
                            no quantitativo de participantes e pela rentabilidade superior aos resgates.
                        </p>
                    </div>
                    <div>
                        <div className="plano-img-card">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                                alt="Análise atuarial"
                            />
                        </div>
                    </div>
                </div>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Patrimônio de Cobertura</div>
                        <div className="plano-kpi-value">R$ 9,48 mi</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Provisões Matemáticas</div>
                        <div className="plano-kpi-value">R$ 9,48 mi</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Variação Provisões</div>
                        <div className="plano-kpi-value">+138,63%</div>
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
                            <tr><td>Ativo Total</td><td className="num">R$ 4.007.499,35</td><td className="num">R$ 9.546.435,41</td></tr>
                            <tr><td>Exigível Operacional</td><td className="num">-R$ 4.653,00</td><td className="num">-R$ 8.464,18</td></tr>
                            <tr><td>Fundos (Administrativo e Investimento)</td><td className="num">-R$ 30.725,05</td><td className="num">-R$ 59.204,30</td></tr>
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num">R$ 3.972.121,30</td>
                                <td className="num">R$ 9.478.766,93</td>
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
                            <tr><td>Provisão Matemática de Benefício Concedido</td><td className="num">R$ 0,00</td><td className="num">R$ 1.781.784,82</td></tr>
                            <tr><td>Provisão Matemática de Benefício a Conceder</td><td className="num">R$ 3.972.121,30</td><td className="num">R$ 7.696.982,11</td></tr>
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td>
                                <td className="num">R$ 3.972.121,30</td>
                                <td className="num">R$ 9.478.766,93</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Equilíbrio Técnico do Plano</div>
                    <Bar data={equilData} options={equilOptions} />
                </div>
            </div>
        </section>
    );
}

function SecaoCustos() {
    const custosData = {
        labels: ["Pessoal e Encargos", "Serviços de Terceiros", "Contingências", "Despesas de Consumo", "Treinamento"],
        datasets: [{ data: [12692, 4473, 2287, 1127, 119], backgroundColor: ["#00aeef", "#0074c8", "#004282", "#64748b", "#94a3b8"] }],
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
                    Em 2025, os custos com a administração do Plano de Benefícios BrasíliaPrev, formados pelas
                    despesas com a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos
                    conforme demonstrado a seguir:
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
                            <tr><td>Pessoal e Encargos</td><td className="num">5.965</td><td className="num">6.727</td><td className="num">12.692</td></tr>
                            <tr><td>Treinamento e Viagens</td><td className="num">56</td><td className="num">63</td><td className="num">119</td></tr>
                            <tr><td>Serviços de Terceiros</td><td className="num">2.102</td><td className="num">2.371</td><td className="num">4.473</td></tr>
                            <tr><td>Despesas de Consumo, Depreciações, Tafic etc</td><td className="num">530</td><td className="num">598</td><td className="num">1.127</td></tr>
                            <tr><td>Contingências (PIS e COFINS)</td><td className="num">0</td><td className="num">2.287</td><td className="num">2.287</td></tr>
                            <tr className="total">
                                <td><strong>TOTAIS</strong></td><td className="num">8.654</td><td className="num">12.045</td><td className="num">20.698</td>
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
            </div>
        </section>
    );
}

function SecaoRegulamentar() {
    return (
        <section className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Governança</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Alterações <span className="dstq-accent">Regulamentares</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Revisão 18 · Aprovada em 06/08/2025</div>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        Regulamento do Plano BrasíliaPrev aprovado na 697ª reunião do Conselho Deliberativo. O
                        regulamento foi alterado para ajustar a mudança da marca de Regius para{" "}
                        <strong style={{ color: "#0a1f3c" }}>Previdência BRB</strong> e inclusão da previsão de perfil
                        de investimentos no Plano BrasíliaPrev.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginTop: 14 }}>
                        Versão vigente disponível em:{" "}
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

function PlanoBrasiliaPrev() {
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
                    <source src={headerBrasiliaprevVideo} type="video/mp4" />
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
                                Plano instituído voltado a associados e seus familiares, com rentabilidade de 12,70%
                                em 2025, equivalente a 150% do índice de referência, e crescimento de 14,85% no número
                                de participantes.
                            </p>

                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    BrasíliaPrev
                                </li>
                            </ol>

                            <div className="plano-hero-meta">
                                <div>
                                    <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                                    <div className="plano-hero-meta-value">12,70%</div>
                                </div>
                                <div>
                                    <div className="plano-hero-meta-label">vs. Índice Referência</div>
                                    <div className="plano-hero-meta-value">150%</div>
                                </div>
                                <div>
                                    <div className="plano-hero-meta-label">Patrimônio</div>
                                    <div className="plano-hero-meta-value">R$ 9,5 mi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SecaoEconomia />
            <Band quote={'"O Plano BrasíliaPrev apresentou rentabilidade de 12,70%, equivalente a 150% do índice de referência, com crescimento expressivo de 14,85% no número de participantes em 2025."'} />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoCustos />
            <SecaoRegulamentar />
            <Band quote={'"O Plano BrasíliaPrev encerrou 2025 com Equilíbrio Técnico atuarial, rentabilidade de 12,70% e patrimônio 138% maior, consolidando sua trajetória de expansão e acumulação."'} />

            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-brasiliaprev" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            Conheça os planos da <span className="services-index-accent">Previdência BRB</span> e
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

export default PlanoBrasiliaPrev;
