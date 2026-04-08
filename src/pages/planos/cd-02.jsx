import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import headerCD02Video from "../../assets/img/cd-02.mp4";

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
                        { label: "Taxa Selic (Brasil)", value: "~15%",    sub: "Patamar restritivo mantido" },
                        { label: "Cenário Fiscal",       value: "Risco",   sub: "Principal vetor doméstico" },
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
        labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado"],
        datasets: [{
            data: [12.82, 8.43, 7.8],
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
                    O resultado agregado dos ativos do Plano encerrou 2025 com uma rentabilidade nominal de{" "}
                    <strong style={{ color: "#0a1f3c" }}>12,82%</strong>, o que representa{" "}
                    <strong style={{ color: "#0a1f3c" }}>152% do índice de referência (IPCA + 4% a.a.)</strong>.
                    A Renda Fixa, que representa 98,50% da carteira, teve rentabilidade anual de 12,84%.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    Nos últimos dez anos, a rentabilidade acumulada do CD-02 atingiu 164,45% em termos nominais,
                    superando o seu referencial de rentabilidade e a Taxa SELIC, que no mesmo período variou 142,10%.
                </p>

                <div className="plano-chart-box plano-chart-box--light" ref={chartRef}>
                    <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
                    <Bar data={data} options={options} />
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Rentabilidade Acumulada (10 anos)", value: "164,45%", sub: "Supera referencial e Selic (142%)" },
                        { label: "Desempenho vs. Referência",          value: "152%",    sub: "Melhor performance do portfólio" },
                        { label: "Concentração Renda Fixa",            value: "98,50%",  sub: "Estratégia conservadora" },
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
        labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado"],
        datasets: [{
            data: [12.82, 8.43, 7.8],
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
        labels: ["Ativos (67,42%)", "Assistidos (32,58%)"],
        datasets: [{ data: [67.42, 32.58], backgroundColor: ["#00aeef", "#0074c8"] }],
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
                        { label: "Recurso do Plano",     value: "R$ 1,00 bi" },
                        { label: "Índice de Referência", value: "8,43%" },
                        { label: "Rentabilidade",        value: "12,82%" },
                        { label: "Desempenho",           value: "152,08%" },
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

                {/* Quadro Populacional */}
                <div style={{ marginTop: 60 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.5rem" }}>
                        Quadro Populacional
                    </h3>
                    <div className="dstq-split" style={{ marginTop: 24 }}>
                        <div>
                            <div className="plano-kpi-row">
                                {[
                                    { label: "Total de Participantes", value: "221",     sub: "Redução de 10,53% vs. 2024" },
                                    { label: "Ativos",                  value: "67,42%" },
                                    { label: "Assistidos",              value: "32,58%" },
                                    { label: "Pensionistas",            value: "0,0%" },
                                ].map((k, i) => (
                                    <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                                        <div className="plano-kpi-label">{k.label}</div>
                                        <div className="plano-kpi-value">{k.value}</div>
                                        {k.sub && <div className="plano-kpi-sub">{k.sub}</div>}
                                    </div>
                                ))}
                            </div>
                            <p className="dstq-text-body dstq-reveal" style={{ marginTop: 28 }}>
                                Podem aderir: empregados ativos do BRB e da Previdência BRB, que são participantes
                                do Plano BD-01.
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
        labels: ["Renda Fixa (98,5%)", "Estruturado (1%)", "Exterior (0,5%)"],
        datasets: [{ data: [98.5, 1.0, 0.5], backgroundColor: ["#00aeef", "#0074c8", "#64748b"] }],
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
                                ["Renda Fixa",                  "100,00%", "100,00%", "98,50%"],
                                ["Renda Variável",              "3,00%",   "70,00%",  "—"],
                                ["Estruturado",                 "5,00%",   "20,00%",  "1,00%"],
                                ["Imobiliário",                 "1,00%",   "20,00%",  "—"],
                                ["Operações com Participantes", "—",       "15,00%",  "—"],
                                ["Exterior",                    "1,00%",   "10,00%",  "0,50%"],
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
                                    ["Renda Fixa",                  "6,36%", "6,09%", "12,84%"],
                                    ["Renda Variável",              "—",     "—",     "—"],
                                    ["Estruturado",                 "4,24%", "0,00%", "4,24%"],
                                    ["Imobiliário",                 "—",     "—",     "—"],
                                    ["Operações com Participantes", "—",     "—",     "—"],
                                    ["Exterior",                    "—",     "—",     "—"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">6,34%</td>
                                    <td className="num">6,09%</td>
                                    <td className="num">12,82%</td>
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
            { label: "Arrecadação",           data: [3494.26, 2939.10, 2435.61],   backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios/Institutos",  data: [15638.14, 10939.53, 9155.84], backgroundColor: "#0074c8", borderRadius: 4 },
        ],
    };
    const fluxOptions = {
        plugins: { legend: { position: "top", labels: { color: DARK_CHART_OPTS.color } } },
        scales: {
            y: {
                ticks: { callback: (v) => "R$ " + v.toLocaleString("pt-BR"), color: DARK_CHART_OPTS.color },
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
                    Em 2025, houve redução de 17,13% na arrecadação das contribuições ao Plano CD-02, movimento
                    coerente com a diminuição do número de Participantes do Plano. O Plano registrou também uma
                    diminuição de 16,30% no pagamento de benefícios e institutos.
                </p>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Evolução Arrecadação vs. Benefícios (R$ milhares)</div>
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
                                <td className="num">R$ 3.494.263</td>
                                <td className="num">R$ 2.939.098</td>
                                <td className="num">R$ 2.435.607</td>
                            </tr>
                            <tr>
                                <td>Benefícios/Institutos</td>
                                <td className="num">R$ 15.638.144</td>
                                <td className="num">R$ 10.939.525</td>
                                <td className="num">R$ 9.155.841</td>
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
        labels: ["Ativo Líquido do Plano", "Provisões Matemáticas"],
        datasets: [{
            data: [70809127.92, 69958449.64],
            backgroundColor: ["#00aeef", "#0074c8"],
            borderRadius: 6,
        }],
    };
    const equilOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: {
                ticks: { callback: (v) => "R$ " + (v / 1000000).toFixed(1) + "M", color: LIGHT_CHART_OPTS.color },
                grid: { color: LIGHT_CHART_OPTS.borderColor },
                min: 69000000,
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
                            As Provisões Matemáticas dimensionadas em 31 de dezembro de 2025, no montante de{" "}
                            <strong style={{ color: "#0a1f3c" }}>R$ 69.958.449,64</strong>, comparativamente àquelas
                            de 2024, que perfizeram R$ 68.656.354,01, representaram um aumento de aproximadamente 1,90%.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                            O Plano de Benefícios CD-02 encerrou o exercício de 2025 com{" "}
                            <strong style={{ color: "#0a1f3c" }}>Equilíbrio Técnico econômico e atuarial</strong>,
                            registrando, portanto, suficiência de cobertura e solvência.
                        </p>
                    </div>
                    <div>
                        <div className="plano-img-card">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                alt="Equilíbrio atuarial"
                            />
                        </div>
                    </div>
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Patrimônio de Cobertura", value: "R$ 70,8 mi" },
                        { label: "Provisões Matemáticas",   value: "R$ 70,0 mi" },
                        { label: "Fundo Previdencial",      value: "R$ 850 mil" },
                        { label: "Situação",                value: "Equilíbrio" },
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
                                ["Ativo Total",                             "R$ 70.115.689,56", "R$ 71.614.636,73"],
                                ["Exigível Operacional",                   "-R$ 185.690,00",    "-R$ 181.725,46"],
                                ["Fundos (Administrativo e Investimento)", "-R$ 548.717,30",    "-R$ 623.783,35"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num">R$ 69.381.282,26</td>
                                <td className="num">R$ 70.809.127,92</td>
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
                                ["Provisão Matemática de Benefício Concedido",  "R$ 9.441.535,79",  "R$ 12.649.666,37"],
                                ["Provisão Matemática de Benefício a Conceder", "R$ 59.214.818,22", "R$ 57.308.783,27"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td>
                                <td className="num">R$ 68.656.354,01</td>
                                <td className="num">R$ 69.958.449,64</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Equilíbrio Técnico do Plano</div>
                    <Bar data={equilData} options={equilOptions} />
                </div>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal" style={{ marginTop: 36 }}>
                    O Plano CD-02 encontra-se em{" "}
                    <strong style={{ color: "#0a1f3c" }}>Equilíbrio Técnico econômico e atuarial</strong>,
                    registrando suficiência de cobertura e solvência. As Provisões Matemáticas registraram aumento
                    de aproximadamente 1,90% em relação a 2024, reflexo natural da evolução dos benefícios concedidos.
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
            data: [222097, 78266, 21891, 19478, 2087],
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
                    Em 2025, os custos com a administração do Plano de Benefícios CD-02, formados pelas despesas com
                    a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos conforme
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
                            {[
                                ["Pessoal e Encargos",                            "104.386", "117.712", "222.097"],
                                ["Treinamento e Viagens",                         "981",     "1.106",   "2.087"],
                                ["Serviços de Terceiros",                         "36.785",  "41.481",  "78.266"],
                                ["Despesas de Consumo, Depreciações, Tafic etc", "10.289",  "11.602",  "21.891"],
                                ["Contingências (PIS e COFINS)",                  "42",      "19.436",  "19.478"],
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
                                <td className="num">152.482</td>
                                <td className="num">191.337</td>
                                <td className="num">343.820</td>
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
function PlanoCD02() {
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
                    <source src={headerCD02Video} type="video/mp4" />
                </video>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(1,24,52,0.74) 0%, rgba(0,66,130,0.68) 55%, rgba(0,116,200,0.58) 100%), radial-gradient(circle at 20% 15%, rgba(0,174,239,0.24), transparent 38%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 40%)", zIndex: 1 }} />
                <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "40px" }}>
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div style={{ marginBottom: "12px" }}>
                                <span style={{ color: "#00aeef", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                                    # Nossos Planos · Contribuição Definida
                                </span>
                            </div>

                            <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: "0 0 16px" }}>
                                Plano <span style={{ color: "#00aeef" }}>CD-02</span>
                            </h1>

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "660px" }}>
                                Plano de Contribuição Definida com predominância em renda fixa e captura de prêmios
                                elevados, apresentando o melhor desempenho do portfólio em 2025.
                            </p>

                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    Plano CD-02
                                </li>
                            </ol>

                        </div>
                    </div>

                    {/* Meta strip — full width */}
                    <div className="plano-hero-meta">
                        <div>
                            <div className="plano-hero-meta-value">12,82%</div>
                            <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">152%</div>
                            <div className="plano-hero-meta-label">vs. Índice Referência</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">R$ 1,0 bi</div>
                            <div className="plano-hero-meta-label">Patrimônio</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Seções de conteúdo ── */}
            <SecaoEconomia />
            <Band quote='"O Plano CD-02 apresentou rentabilidade de 12,82%, equivalente a 152% do índice de referência, refletindo a predominância da renda fixa e captura de prêmios elevados — o melhor desempenho do portfólio em 2025."' />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoCustos />
            <Band quote='"O Plano CD-02 encerrou 2025 com Equilíbrio Técnico econômico e atuarial, registrando suficiência de cobertura e solvência, com rentabilidade de 12,82% — 152% do índice de referência."' />

            {/* ── Índice de planos ── */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-cd02" className="services-particles-bg" />
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

export default PlanoCD02;
