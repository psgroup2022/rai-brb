import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import iconBD01 from "../../assets/img/bd01.svg";
import headerBD01Video from "../../assets/img/bd-01.mp4";

import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement, ArcElement,
    Title, Tooltip, Legend,
} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

/* ─────────────────────────────────────────────
   Utilitários
───────────────────────────────────────────── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".dstq-reveal, .plano-kpi-card, .plano-chart-box, .plano-table-wrap");
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

/* ─────────────────────────────────────────────
   Seção 1 — Economia Global
───────────────────────────────────────────── */
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
                    {[
                        { label: "Taxa Selic (Brasil)", value: "~15%",   sub: "Patamar restritivo mantido" },
                        { label: "Cenário Fiscal",       value: "Risco",  sub: "Principal vetor doméstico" },
                        { label: "Renda Fixa",           value: "Prêmios", sub: "Oportunidades em ativos" },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                            {k.sub && <div className="plano-kpi-sub">{k.sub}</div>}
                        </div>
                    ))}
                </div>

                <p className="dstq-text-body dstq-reveal" style={{ marginTop: 40 }}>
                    O cenário fiscal seguiu como principal vetor de risco doméstico, influenciando diretamente a
                    dinâmica das curvas de juros e a percepção de risco dos investidores. Nos mercados financeiros,
                    a renda fixa refletiu a volatilidade das expectativas macroeconômicas, com oscilações relevantes
                    nas curvas de juros ao longo do ano.
                </p>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Band reutilizável
───────────────────────────────────────────── */
function Band({ quote }) {
    return (
        <div className="dstq-band">
            <div className="dstq-band-inner">
                <p className="dstq-band-quote dstq-reveal">{quote}</p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Seção 2 — Rentabilidade 2025
───────────────────────────────────────────── */
function SecaoRentabilidade() {
    const chartRef = useRef(null);

    const data = {
        labels: ["Rentabilidade", "Meta Atuarial", "Mediana Mercado"],
        datasets: [{
            data: [11.23, 9.32, 8.5],
            backgroundColor: ["#00aeef", "#0074c8", "#94a3b8"],
            borderRadius: 6,
        }],
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
                    A maior concentração dos ativos está em Renda Fixa, com 97,15%, dos quais 91,36% em Títulos
                    Públicos Federais (NTN-B). A rentabilidade da Renda Fixa foi de 11,59%, que agregada com os
                    demais ativos do segmento refletiu no desempenho total do Plano.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3">
                    O plano registrou um desempenho de 120% da meta atuarial (IPCA + 4,90% a.a.), revertendo o
                    déficit de 2024 e encerrando 2025 com superávit de R$ 91,1 milhões.
                </p>

                <div className="plano-chart-box plano-chart-box--light" ref={chartRef}>
                    <div className="plano-chart-title">Rentabilidade vs. Meta Atuarial</div>
                    <Bar data={data} options={options} />
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Rentabilidade Acumulada (10 anos)", value: "196%",      sub: "Supera meta atuarial e Selic (142%)" },
                        { label: "Ganho Real",                         value: "+1,93%",   sub: "Acima do compromisso de 4,90%" },
                        { label: "Superávit Técnico",                  value: "R$ 91,1 mi", sub: "Reversão do déficit de 2024" },
                    ].map((k, i) => (
                        <div className="plano-kpi-card plano-kpi-card--light" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                            {k.sub && <div className="plano-kpi-sub">{k.sub}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 3 — Desempenho
───────────────────────────────────────────── */
function SecaoDesempenho() {
    const compData = {
        labels: ["Rentabilidade", "Meta Atuarial", "Mediana Mercado"],
        datasets: [{
            data: [11.23, 9.32, 8.5],
            backgroundColor: ["#00aeef", "#0074c8", "#94a3b8"],
            borderRadius: 6,
        }],
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
        labels: ["Assistidos (78,05%)", "Pensionistas (10,67%)", "Ativos (11,28%)"],
        datasets: [{ data: [78.05, 10.67, 11.28], backgroundColor: ["#00aeef", "#0074c8", "#64748b"] }],
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
                    {[
                        { label: "Recurso do Plano", value: "R$ 2,95 bi" },
                        { label: "Meta Atuarial",    value: "9,32%" },
                        { label: "Rentabilidade",    value: "11,23%" },
                        { label: "Desempenho",       value: "120,49%" },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Rentabilidade vs. Meta vs. Mercado</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                {/* Quadro Populacional */}
                <div style={{ marginTop: 60 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.5rem" }}>
                        Quadro Populacional
                    </h3>
                    <div className="dstq-split" style={{ marginTop: 24 }}>
                        <div>
                            <div className="plano-kpi-row">
                                {[
                                    { label: "Total de Participantes", value: "1.781",   sub: "Redução de 0,67% vs. 2024" },
                                    { label: "Ativos",                  value: "11,28%" },
                                    { label: "Assistidos",              value: "78,05%" },
                                    { label: "Pensionistas",            value: "10,67%" },
                                ].map((k, i) => (
                                    <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                                        <div className="plano-kpi-label">{k.label}</div>
                                        <div className="plano-kpi-value">{k.value}</div>
                                        {k.sub && <div className="plano-kpi-sub">{k.sub}</div>}
                                    </div>
                                ))}
                            </div>
                            <p className="dstq-text-body dstq-reveal" style={{ marginTop: 28 }}>
                                Plano fechado para novas adesões desde 2000. A maturidade do plano reflete a
                                predominância de assistidos e pensionistas.
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

/* ─────────────────────────────────────────────
   Seção 4 — Investimentos
───────────────────────────────────────────── */
function SecaoInvestimentos() {
    const allocData = {
        labels: ["Renda Fixa (97%)", "Imobiliário (2%)", "Op. Participantes (1%)"],
        datasets: [{ data: [97, 2, 1], backgroundColor: ["#00aeef", "#0074c8", "#64748b"] }],
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

                {/* Tabela alocação */}
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
                            {[
                                ["Renda Fixa",                  "100,00%", "100,00%", "97,00%"],
                                ["Renda Variável",              "5,00%",   "70,00%",  "—"],
                                ["Estruturado",                 "4,00%",   "20,00%",  "—"],
                                ["Imobiliário",                 "2,00%",   "20,00%",  "2,00%"],
                                ["Operações com Participantes", "5,00%",   "15,00%",  "1,00%"],
                                ["Exterior",                    "5,00%",   "10,00%",  "—"],
                            ].map(([seg, pol, res, aloc], i) => (
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

                {/* Tabela resultado */}
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
                                    ["Renda Fixa",                  "6,28%",   "5,00%",    "11,59%"],
                                    ["Renda Variável",              "—",       "—",         "—"],
                                    ["Estruturado",                 "-75,48%", "-597,34%", "-221,94%"],
                                    ["Imobiliário",                 "0,39%",   "-9,73%",   "-9,38%"],
                                    ["Operações com Participantes", "7,71%",   "7,27%",    "15,54%"],
                                    ["Exterior",                    "—",       "—",         "—"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">6,18%</td>
                                    <td className="num">4,75%</td>
                                    <td className="num">11,23%</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                                    <td><strong>META ATUARIAL</strong></td>
                                    <td className="num">5,65%</td>
                                    <td className="num">3,47%</td>
                                    <td className="num">9,32%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Alocação por Segmento</div>
                    <div style={{ maxWidth: 360, margin: "0 auto" }}>
                        <Pie data={allocData} options={allocOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 5 — Arrecadação e Benefícios
───────────────────────────────────────────── */
function SecaoArrecadacao() {
    const fluxData = {
        labels: ["2023", "2024", "2025"],
        datasets: [
            { label: "Arrecadação", data: [89.58, 98.69, 95.81], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios",  data: [234.75, 251.56, 264.93], backgroundColor: "#0074c8", borderRadius: 4 },
        ],
    };
    const fluxOptions = {
        plugins: { legend: { position: "top", labels: { color: DARK_CHART_OPTS.color } } },
        scales: {
            y: {
                ticks: { callback: (v) => "R$ " + v + "M", color: DARK_CHART_OPTS.color },
                grid: { color: DARK_CHART_OPTS.borderColor },
            },
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
                    O Plano BD-01 paga mais Benefícios do que recebe de contribuições, dada a sua maturidade. Em
                    2025, houve aumento de 5,31% na rubrica de pagamento de Benefícios, crescimento compatível com
                    o aumento do número de assistidos e pensionistas.
                </p>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Evolução Arrecadação vs. Benefícios (R$ milhões)</div>
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
                                <td className="num">R$ 89.576.679</td>
                                <td className="num">R$ 98.685.983</td>
                                <td className="num">R$ 95.810.427</td>
                            </tr>
                            <tr>
                                <td>Benefícios/Institutos</td>
                                <td className="num">R$ 234.748.705</td>
                                <td className="num">R$ 251.562.380</td>
                                <td className="num">R$ 264.930.430</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 6 — Resultado Atuarial
───────────────────────────────────────────── */
function SecaoAtuarial() {
    const equilData = {
        labels: ["Patrimônio de Cobertura", "Provisões Matemáticas"],
        datasets: [{
            data: [2937.29, 2846.15],
            backgroundColor: ["#00aeef", "#0074c8"],
            borderRadius: 6,
        }],
    };
    const equilOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: {
                ticks: { callback: (v) => "R$ " + v + "M", color: LIGHT_CHART_OPTS.color },
                grid: { color: LIGHT_CHART_OPTS.borderColor },
            },
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
                            Cotejando o Patrimônio de Cobertura do Plano em 31 de dezembro de 2025, no montante de
                            R$ 2.937.286.793,58 com as Provisões Matemáticas de R$ 2.846.145.502,31, o Plano BD-01
                            registrou <strong style={{ color: "#0a1f3c" }}>Superávit Técnico de R$ 91.141.291,27</strong>.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                            Com o concurso do Ajuste de Precificação, dimensionado em R$ 217.078.128,00, o Plano
                            encerrou o exercício de 2025 com{" "}
                            <strong style={{ color: "#0a1f3c" }}>Superávit Técnico Ajustado de R$ 308.219.419,27</strong>.
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
                    {[
                        { label: "Patrimônio de Cobertura", value: "R$ 2,94 bi" },
                        { label: "Provisões Matemáticas",   value: "R$ 2,85 bi" },
                        { label: "Superávit Técnico",       value: "R$ 91,1 mi" },
                        { label: "Superávit Ajustado",      value: "R$ 308,2 mi" },
                    ].map((k, i) => (
                        <div className="plano-kpi-card plano-kpi-card--light" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
                </div>

                {/* Tabela Ativo Líquido */}
                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Total",                         "R$ 2.912.506.490,60", "R$ 3.027.945.809,26"],
                                ["Exigível Operacional",                "-R$ 5.890.899,93",    "-R$ 6.387.160,85"],
                                ["Exigível Contingencial",              "-R$ 2.114.367,24",    "-R$ 2.344.365,82"],
                                ["Fundos (Administrativo e Investimento)", "-R$ 78.178.126,06", "-R$ 81.927.489,01"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num">R$ 2.826.323.097,37</td>
                                <td className="num">R$ 2.937.286.793,58</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela Provisões */}
                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Provisões Matemáticas</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Prov. Mat. de Benefício Concedido",  "R$ 2.592.041.198,59", "R$ 2.654.793.538,06"],
                                ["Prov. Mat. de Benefício a Conceder", "R$ 415.438.840,44",   "R$ 370.376.631,78"],
                                ["Prov. Mat. a Constituir",            "-R$ 181.537.940,61",  "-R$ 179.024.667,53"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td>
                                <td className="num">R$ 2.825.942.098,42</td>
                                <td className="num">R$ 2.846.145.502,31</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Equilíbrio Técnico do Plano</div>
                    <Bar data={equilData} options={equilOptions} />
                </div>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal" style={{ marginTop: 36 }}>
                    O Plano BD-01 encontra-se <strong style={{ color: "#0a1f3c" }}>superavitário</strong> e,
                    portanto, não há necessidade de aplicação de novo plano de equacionamento. A variação favorável
                    de 19,13% em relação a 2024 foi justificada principalmente pela redução do passivo atuarial
                    do Plano.
                </p>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 7 — Custos
───────────────────────────────────────────── */
function SecaoCustos() {
    const custosData = {
        labels: ["Pessoal e Encargos", "Serviços de Terceiros", "Despesas de Consumo", "Contingências", "Treinamento"],
        datasets: [{
            data: [9063201, 3193823, 934369, 803388, 85162],
            backgroundColor: ["#00aeef", "#0074c8", "#004282", "#64748b", "#94a3b8"],
        }],
    };
    const custosOptions = {
        plugins: {
            legend: { position: "bottom", labels: { color: DARK_CHART_OPTS.color } },
        },
    };

    return (
        <section className="plano-section plano-section--dark">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Despesas Administrativas</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Custos com a <span className="dstq-accent">Administração</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em 2025, os custos com a administração do Plano BD-01, formados pelas despesas com a gestão
                    previdencial e a gestão de investimentos do Plano, foram distribuídos conforme demonstrado a
                    seguir:
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
                            {[
                                ["Pessoal e Encargos",                          "4.259.704", "4.803.496",  "9.063.201"],
                                ["Treinamento e Viagens",                       "40.026",    "45.136",     "85.162"],
                                ["Serviços de Terceiros",                       "1.501.097", "1.692.726",  "3.193.823"],
                                ["Despesas de Consumo, Depreciações, Tafic etc","439.153",   "495.216",    "934.369"],
                                ["Contingências (PIS e COFINS)",                "85.885",    "717.503",    "803.388"],
                            ].map(([desc, prev, inv, tot], i) => (
                                <tr key={i}>
                                    <td>{desc}</td>
                                    <td className="num">{prev}</td>
                                    <td className="num">{inv}</td>
                                    <td className="num">{tot}</td>
                                </tr>
                            ))}
                            <tr className="total">
                                <td><strong>TOTAIS</strong></td>
                                <td className="num">6.325.865</td>
                                <td className="num">7.754.077</td>
                                <td className="num">14.079.942</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Distribuição de Custos Administrativos</div>
                    <div style={{ maxWidth: 400, margin: "0 auto" }}>
                        <Doughnut data={custosData} options={custosOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Componente principal
───────────────────────────────────────────── */
function PlanoBD01() {
    useReveal();

    return (
        <>
            <Header2 />

            {/* ── Hero ── */}
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
                    <source src={headerBD01Video} type="video/mp4" />
                </video>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(1,24,52,0.74) 0%, rgba(0,66,130,0.68) 55%, rgba(0,116,200,0.58) 100%), radial-gradient(circle at 20% 15%, rgba(0,174,239,0.24), transparent 38%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 40%)", zIndex: 1 }} />
                <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "40px" }}>
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div style={{ marginBottom: "12px" }}>
                                <span style={{ color: "#00aeef", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                                    # Nossos Planos · Benefício Definido
                                </span>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
                                <img src={iconBD01} alt="Plano BD-01" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                                <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: 0 }}>
                                    Plano <span style={{ color: "#00aeef" }}>BD-01</span>
                                </h1>
                            </div>

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "660px" }}>
                                Plano de Benefício Definido com gestão focada em equilíbrio atuarial e preservação
                                do patrimônio dos participantes.
                            </p>

                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    Plano BD-01
                                </li>
                            </ol>

                        </div>
                    </div>

                    {/* Meta strip — full width */}
                    <div className="plano-hero-meta">
                        <div>
                            <div className="plano-hero-meta-value">11,23%</div>
                            <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">120%</div>
                            <div className="plano-hero-meta-label">vs. Meta Atuarial</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">R$ 2,9 bi</div>
                            <div className="plano-hero-meta-label">Patrimônio</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Seções de conteúdo ── */}
            <SecaoEconomia />
            <Band quote='"O Plano BD-01 encerrou 2025 com rentabilidade de 11,23%, equivalente a 120% da meta atuarial, evidenciando consistência da estratégia e preservação do equilíbrio atuarial."' />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoCustos />
            <Band quote='"O Plano BD-01 encerrou 2025 com Superávit Técnico Ajustado de R$ 308,2 milhões, representando uma variação favorável de 19,13% em relação a 2024, justificada principalmente pela redução do passivo atuarial."' />

            {/* ── Índice de planos ── */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-bd01" className="services-particles-bg" />
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

export default PlanoBD01;
