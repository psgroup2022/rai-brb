import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import iconCD05 from "../../assets/img/cd05.svg";
import headerCD05Video from "../../assets/img/cd-05.mp4";
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
                        <div className="dstq-img-card" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                            <img
                                src={IMAGES.execSummaryImg}
                                alt="Mercado financeiro global"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Taxa Selic (Brasil)", value: "~15%", sub: "Patamar restritivo mantido" },
                        { label: "Cenário Fiscal", value: "Risco", sub: "Principal vetor doméstico" },
                        { label: "Renda Fixa", value: "Prêmios", sub: "Oportunidades em ativos" },
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
                data: [12.28, 8.43, 7.8],
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
                ticks: { callback: (v) => `${v}%`, color: LIGHT_CHART_OPTS.color },
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
                    O Plano CD-05 registrou rentabilidade de <strong style={{ color: "#0a1f3c" }}>12,28%</strong> em 2025,
                    representando <strong style={{ color: "#0a1f3c" }}>145,67% do índice de referência (IPCA + 4% a.a.)</strong>.
                    A Renda Fixa, que representa 91,78% da carteira consolidada, registrou 11,97%, com destaque para
                    Operações com Participantes (+17,01%) e Renda Variável (+28,54%).
                </p>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    O plano é multiperfilado, oferecendo aos participantes os perfis Conservador, Moderado e Arrojado,
                    com diferentes alocações entre os segmentos de investimento.
                </p>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
                    <Bar data={data} options={options} />
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Desempenho vs. Referência", value: "145,67%", sub: "Recuperação após 0,33% em 2024" },
                        { label: "Op. com Participantes", value: "+17,01%", sub: "Melhor segmento do portfólio" },
                        { label: "Renda Variável", value: "+28,54%", sub: "Contribuição relevante" },
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

function SecaoDesempenho() {
    const compData = {
        labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado"],
        datasets: [
            {
                data: [12.28, 8.43, 7.8],
                backgroundColor: ["#00aeef", "#0074c8", "#94a3b8"],
                borderRadius: 6,
            },
        ],
    };

    const compOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: {
                ticks: { callback: (v) => `${v}%`, color: DARK_CHART_OPTS.color },
                grid: { color: DARK_CHART_OPTS.borderColor },
            },
            x: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
        },
    };

    const popData = {
        labels: ["Ativos (99,83%)", "Assistidos (0,17%)"],
        datasets: [{ data: [99.83, 0.17], backgroundColor: ["#00aeef", "#0074c8"] }],
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
                        { label: "Recurso do Plano", value: "R$ 53,9 mi" },
                        { label: "Índice de Referência", value: "8,43%" },
                        { label: "Rentabilidade", value: "12,28%" },
                        { label: "Desempenho", value: "145,67%" },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
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
                                {[
                                    { label: "Total de Participantes", value: "1.171", sub: "Aumento de 30,26% vs. 2024" },
                                    { label: "Ativos", value: "99,83%" },
                                    { label: "Assistidos", value: "0,17%" },
                                    { label: "Pensionistas", value: "0,0%" },
                                ].map((k, i) => (
                                    <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                                        <div className="plano-kpi-label">{k.label}</div>
                                        <div className="plano-kpi-value">{k.value}</div>
                                        {k.sub && <div className="plano-kpi-sub">{k.sub}</div>}
                                    </div>
                                ))}
                            </div>
                            <p className="dstq-text-body dstq-reveal" style={{ marginTop: 28 }}>
                                Podem aderir: todos os empregados do BRB, da Saúde BRB, da BRBCARD, da CEASA-DF,
                                da ANEABRB e da própria Previdência BRB. Em 2024 havia 899 participantes; em 2025,
                                1.171 — crescimento expressivo de 30,26%.
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
            "Renda Variável (1,65%)",
            "Estruturado (1,13%)",
            "Imobiliário (0,38%)",
            "Op. Participantes (4,25%)",
            "Exterior (0,83%)",
        ],
        datasets: [{ data: [91.78, 1.65, 1.13, 0.38, 4.25, 0.83], backgroundColor: ["#00aeef", "#0074c8", "#004282", "#64748b", "#1d4ed8", "#94a3b8"] }],
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

                <div className="plano-profile-tabs dstq-reveal" style={{ marginBottom: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
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
                                    ["Renda Fixa", "6,39%", "5,25%", "11,97%"],
                                    ["Renda Variável", "15,93%", "10,87%", "28,54%"],
                                    ["Estruturado", "6,91%", "6,30%", "13,64%"],
                                    ["Imobiliário", "-", "-", "-"],
                                    ["Operações com Participantes", "10,01%", "6,36%", "17,01%"],
                                    ["Exterior", "-", "-", "-"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">6,58%</td>
                                    <td className="num">5,35%</td>
                                    <td className="num">12,28%</td>
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
            { label: "Arrecadação", data: [9.065, 11.977, 15.117], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios/Institutos", data: [1.895, 1.23, 2.324], backgroundColor: "#0074c8", borderRadius: 4 },
        ],
    };

    const fluxOptions = {
        plugins: { legend: { position: "top", labels: { color: DARK_CHART_OPTS.color } } },
        scales: {
            y: {
                ticks: { callback: (v) => `R$ ${v}M`, color: DARK_CHART_OPTS.color },
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
                    Em 2025, houve elevação de 26,22% na arrecadação das contribuições ao Plano CD-05,
                    reflexo do crescimento expressivo de 30,26% no número de participantes. O pagamento de
                    benefícios e institutos aumentou 88,93% no comparativo com 2024.
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
                                <td className="num">R$ 9.065.015</td>
                                <td className="num">R$ 11.976.829</td>
                                <td className="num">R$ 15.117.462</td>
                            </tr>
                            <tr>
                                <td>Benefícios/Institutos</td>
                                <td className="num">R$ 1.895.446</td>
                                <td className="num">R$ 1.229.946</td>
                                <td className="num">R$ 2.323.791</td>
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
        labels: ["Patrimônio de Cobertura", "Provisões Matemáticas"],
        datasets: [{
            data: [51.2, 51.2],
            backgroundColor: ["#00aeef", "#0074c8"],
            borderRadius: 6,
        }],
    };

    const equilOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: {
                ticks: { callback: (v) => `R$ ${v}M`, color: LIGHT_CHART_OPTS.color },
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
                            As Provisões Matemáticas dimensionadas em 31 de dezembro de 2025, no montante de
                            <strong style={{ color: "#0a1f3c" }}> R$ 51.209.884,56</strong>, comparativamente
                            às de 2024 (R$ 34.214.700,30), representaram variação de aproximadamente
                            <strong style={{ color: "#0a1f3c" }}> 49,67%</strong>.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                            O Plano de Benefícios CD-05 encerrou o exercício de 2025 com
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
                    {[
                        { label: "Patrimônio de Cobertura", value: "R$ 51,2 mi" },
                        { label: "Provisões Matemáticas", value: "R$ 51,2 mi" },
                        { label: "Variação Provisões", value: "+49,67%" },
                        { label: "Situação", value: "Equilíbrio" },
                    ].map((k, i) => (
                        <div className="plano-kpi-card plano-kpi-card--light" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
                </div>

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Total", "R$ 37.139.191,09", "R$ 54.870.121,03"],
                                ["Exigível Operacional", "-R$ 20.787,08", "-R$ 28.971,52"],
                                ["Fundos (Administrativo e Investimento)", "-R$ 817.484,10", "-R$ 938.539,79"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num">R$ 36.300.919,91</td>
                                <td className="num">R$ 53.902.609,72</td>
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
                            {[
                                ["Provisão Matemática de Benefício Concedido", "R$ 236.862,48", "R$ 277.671,60"],
                                ["Provisão Matemática de Benefício a Conceder", "R$ 33.977.837,82", "R$ 50.932.212,96"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td>
                                <td className="num">R$ 34.214.700,30</td>
                                <td className="num">R$ 51.209.884,56</td>
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
        labels: ["Pessoal e Encargos", "Serviços de Terceiros", "Despesas de Consumo", "Contingências", "Treinamento"],
        datasets: [{
            data: [116021, 40885, 11764, 13946, 1090],
            backgroundColor: ["#00aeef", "#0074c8", "#004282", "#64748b", "#94a3b8"],
        }],
    };

    const custosOptions = {
        plugins: {
            legend: { position: "bottom", labels: { color: DARK_CHART_OPTS.color } },
        },
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
                    Em 2025, os custos com a administração do Plano de Benefícios CD-05, formados pelas
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
                            {[
                                ["Pessoal e Encargos", "54.530", "61.491", "116.021"],
                                ["Treinamento e Viagens", "512", "578", "1.090"],
                                ["Serviços de Terceiros", "19.216", "21.669", "40.885"],
                                ["Despesas de Consumo, Depreciações, Tafic etc", "5.529", "6.235", "11.764"],
                                ["Contingências (PIS e COFINS)", "91", "3.937", "13.946"],
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
                                <td className="num">79.797</td>
                                <td className="num">103.910</td>
                                <td className="num">183.707</td>
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

function PlanoCD05() {
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
                    <source src={headerCD05Video} type="video/mp4" />
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
                                    # Nossos Planos · Contribuição Definida
                                </span>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
                                <img src={iconCD05} alt="Plano CD-05" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                                <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: 0 }}>
                                    Plano <span style={{ color: "#00aeef" }}>CD-05</span>
                                </h1>
                            </div>

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "720px" }}>
                                Plano multiperfilado com perfis Conservador, Moderado e Arrojado. Rentabilidade de
                                12,28% em 2025 — 145% do índice de referência, com crescimento de 30% no número de participantes.
                            </p>

                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    Plano CD-05
                                </li>
                            </ol>

                        </div>
                    </div>

                    {/* Meta strip — full width */}
                    <div className="plano-hero-meta">
                        <div>
                            <div className="plano-hero-meta-value">12,28%</div>
                            <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">145%</div>
                            <div className="plano-hero-meta-label">vs. Índice Referência</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">R$ 53,9 mi</div>
                            <div className="plano-hero-meta-label">Patrimônio</div>
                        </div>
                    </div>
                </div>
            </section>

            <SecaoEconomia />
            <Band quote={'"O Plano CD-05 registrou rentabilidade de 12,28%, equivalente a 145% do índice de referência, com contribuição de renda fixa e variável e crescimento expressivo de 30,26% no número de participantes."'} />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoCustos />
            <Band quote={'"O Plano CD-05 encerrou 2025 com Equilíbrio Técnico atuarial, rentabilidade de 12,28% e crescimento expressivo de 30,26% no número de participantes, consolidando sua expansão."'} />

            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-cd05" className="services-particles-bg" />
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

export default PlanoCD05;
