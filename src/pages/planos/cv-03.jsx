import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import iconCV03 from "../../assets/img/cv03.svg";
import headerCV03Video from "../../assets/img/cv-03.mp4";

import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement, ArcElement,
    Title, Tooltip, Legend,
} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

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
    const chartRef = useRef(null);

    const data = {
        labels: ["Rentabilidade", "Meta Atuarial", "Mediana Mercado"],
        datasets: [{
            data: [12.18, 8.43, 7.8],
            backgroundColor: ["#00aeef", "#0074c8", "#94a3b8"],
            borderRadius: 6,
        }],
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
                    No agregado de todos os ativos, a carteira de investimento do Plano reportou rentabilidade de
                    <strong style={{ color: "#0a1f3c" }}> 12,18%</strong> em 2025, representando
                    <strong style={{ color: "#0a1f3c" }}> 144,48% da meta atuarial (IPCA + 4% a.a.)</strong>.
                    A Renda Fixa, que representa 95% da carteira, registrou 12,03% no ano, com destaque para a
                    Renda Variável, que atingiu 35,96%.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    Nos últimos dez anos, a rentabilidade acumulada do CV-03 atingiu 162,37% em termos nominais,
                    superando o seu referencial de rentabilidade e a Taxa SELIC, que no mesmo período variou 142,10%.
                </p>

                <div className="plano-chart-box plano-chart-box--light" ref={chartRef}>
                    <div className="plano-chart-title">Rentabilidade vs. Meta Atuarial</div>
                    <Bar data={data} options={options} />
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Rentabilidade Acumulada (10 anos)", value: "162,37%", sub: "Supera referencial e Selic (142%)" },
                        { label: "Desempenho vs. Meta", value: "144,48%", sub: "Recuperação após -1,01% em 2024" },
                        { label: "Renda Variável", value: "+35,96%", sub: "Destaque positivo do portfólio" },
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
        labels: ["Rentabilidade", "Meta Atuarial", "Mediana Mercado"],
        datasets: [{
            data: [12.18, 8.43, 7.8],
            backgroundColor: ["#00aeef", "#0074c8", "#94a3b8"],
            borderRadius: 6,
        }],
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
        labels: ["Ativos (97,66%)", "Assistidos (2,34%)"],
        datasets: [{ data: [97.66, 2.34], backgroundColor: ["#00aeef", "#0074c8"] }],
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
                        { label: "Recurso do Plano", value: "R$ 71,0 mi" },
                        { label: "Meta Atuarial", value: "8,43%" },
                        { label: "Rentabilidade", value: "12,18%" },
                        { label: "Desempenho", value: "144,48%" },
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

                <div style={{ marginTop: 60 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.5rem" }}>
                        Quadro Populacional
                    </h3>
                    <div className="dstq-split" style={{ marginTop: 24 }}>
                        <div>
                            <div className="plano-kpi-row">
                                {[
                                    { label: "Total de Participantes", value: "2.351", sub: "Redução de 1,43% vs. 2024" },
                                    { label: "Ativos", value: "97,66%" },
                                    { label: "Assistidos", value: "2,34%" },
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
                                Plano fechado para novas adesões desde 2023. Em 2024 havia 2.385 participantes;
                                em 2025, 2.351 — redução de 1,43%.
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
    const allocData = {
        labels: ["Renda Fixa (95%)", "Renda Variável (1%)", "Op. Participantes (1,5%)", "Exterior (2,5%)"],
        datasets: [{ data: [95, 1, 1.5, 2.5], backgroundColor: ["#00aeef", "#0074c8", "#004282", "#94a3b8"] }],
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
                                <th className="num">Política Investimento</th>
                                <th className="num">Resolução 4.994</th>
                                <th className="num">Alocação 2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Renda Fixa", "100,00%", "100,00%", "95,00%"],
                                ["Renda Variável", "15,00%", "70,00%", "1,00%"],
                                ["Estruturado", "8,00%", "20,00%", "—"],
                                ["Imobiliário", "1,00%", "20,00%", "—"],
                                ["Operações com Participantes", "10,00%", "15,00%", "1,50%"],
                                ["Exterior", "4,00%", "10,00%", "2,50%"],
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
                                    ["Renda Fixa", "7,22%", "4,49%", "12,03%"],
                                    ["Renda Variável", "19,83%", "13,46%", "35,96%"],
                                    ["Estruturado", "5,19%", "0,00%", "5,19%"],
                                    ["Imobiliário", "-1,36%", "-8,74%", "-9,98%"],
                                    ["Operações com Participantes", "4,67%", "6,14%", "11,09%"],
                                    ["Exterior", "—", "—", "—"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">7,27%</td>
                                    <td className="num">4,58%</td>
                                    <td className="num">12,18%</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                                    <td><strong>META ATUARIAL</strong></td>
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
                    <div style={{ maxWidth: 380, margin: "0 auto" }}>
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
            { label: "Arrecadação", data: [63.079, 69.291, 74.804], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios/Institutos", data: [5.202, 4.773, 6.508], backgroundColor: "#0074c8", borderRadius: 4 },
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
                    Em 2025, houve elevação de 7,96% na arrecadação das contribuições ao Plano CV-03, decorrente da
                    melhora no nível de contribuição, com reflexo no benefício futuro. No período, houve aumento de
                    36,37% na saída de recursos do Plano, relacionada ao montante de valores pagos de benefícios e institutos.
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
                                <td className="num">R$ 63.079.059</td>
                                <td className="num">R$ 69.290.707</td>
                                <td className="num">R$ 74.803.748</td>
                            </tr>
                            <tr>
                                <td>Benefícios/Institutos</td>
                                <td className="num">R$ 5.201.976</td>
                                <td className="num">R$ 4.772.613</td>
                                <td className="num">R$ 6.508.311</td>
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
            data: [964.28, 956.07],
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
                            Cotejando o Patrimônio de Cobertura do Plano em 31 de dezembro de 2025, no montante de
                            <strong style={{ color: "#0a1f3c" }}> R$ 964.283.259,49</strong>, com as Provisões
                            Matemáticas de <strong style={{ color: "#0a1f3c" }}>R$ 956.067.945,97</strong>,
                            o Plano CV-03 registrou
                            <strong style={{ color: "#0a1f3c" }}> Superávit Técnico de R$ 8.215.313,52</strong>.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                            O Superávit Técnico apresentou elevação de aproximadamente
                            <strong style={{ color: "#0a1f3c" }}> 51,43%</strong> em relação a 2024, influenciado
                            pela alteração das premissas atuariais e pela rentabilidade superior à meta atuarial.
                            Este é o primeiro ano de apuração de Reserva Especial para Revisão de Plano.
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
                        { label: "Patrimônio de Cobertura", value: "R$ 964,3 mi" },
                        { label: "Provisões Matemáticas", value: "R$ 956,1 mi" },
                        { label: "Superávit Técnico", value: "R$ 8,2 mi" },
                        { label: "Variação vs. 2024", value: "+51,43%" },
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
                                ["Ativo Total", "R$ 844.911.940,82", "R$ 1.015.500.627,60"],
                                ["Exigível Operacional", "-R$ 400.854,32", "-R$ 504.776,41"],
                                ["Fundos (Administrativo e Investimento)", "-R$ 13.371.149,15", "-R$ 15.340.453,30"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num">R$ 831.139.937,35</td>
                                <td className="num">R$ 999.655.397,89</td>
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
                                ["Provisão Matemática de Benefício Concedido", "R$ 23.112.439,34", "R$ 31.481.835,54"],
                                ["Provisão Matemática de Benefício a Conceder", "R$ 772.347.259,37", "R$ 924.775.606,06"],
                                ["Provisão Matemática a Constituir", "-R$ 253.343,70", "-R$ 189.495,63"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td>
                                <td className="num">R$ 795.206.355,01</td>
                                <td className="num">R$ 956.067.945,97</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Resultado Atuarial</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Ativo Líquido do Plano</td><td className="num">R$ 831.139.937,35</td><td className="num">R$ 999.655.397,89</td></tr>
                            <tr><td>Provisão Matemática Total</td><td className="num">-R$ 795.206.355,01</td><td className="num">-R$ 956.067.945,97</td></tr>
                            <tr><td>Fundo Previdencial</td><td className="num">-R$ 30.508.480,11</td><td className="num">-R$ 35.372.138,40</td></tr>
                            <tr><td>Superávit (Reserva de Contingência)</td><td className="num">R$ 5.425.102,23</td><td className="num">R$ 7.202.138,12</td></tr>
                            <tr><td>Reserva Especial</td><td className="num">R$ 0,00</td><td className="num">R$ 1.013.175,40</td></tr>
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

function SecaoPremissas() {
    return (
        <section className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Avaliação Atuarial</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Comportamento das <span className="dstq-accent">Premissas Atuariais</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Foi realizado o estudo de aderência do Plano CV-03, resultando nas seguintes alterações de premissas:
                </p>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card" style={{ transitionDelay: "0s" }}>
                        <div className="plano-kpi-label">Taxa de Crescimento Real dos Salários</div>
                        <div className="plano-kpi-value">1,67%</div>
                        <div className="plano-kpi-sub">Anterior: 2,73% — redução histórica confirmada</div>
                    </div>
                    <div className="plano-kpi-card" style={{ transitionDelay: "0.08s" }}>
                        <div className="plano-kpi-label">Taxa Real de Juros</div>
                        <div className="plano-kpi-value">4,50% a.a.</div>
                        <div className="plano-kpi-sub">Anterior: 4,00% — Estudo de Convergência 2025</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecaoCustos() {
    const custosData = {
        labels: ["Pessoal e Encargos", "Serviços de Terceiros", "Despesas de Consumo", "Contingências", "Treinamento"],
        datasets: [{
            data: [2656919, 936284, 263558, 279889, 24966],
            backgroundColor: ["#00aeef", "#0074c8", "#004282", "#64748b", "#94a3b8"],
        }],
    };

    const custosOptions = {
        plugins: {
            legend: { position: "bottom", labels: { color: LIGHT_CHART_OPTS.color } },
        },
    };

    return (
        <section className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Despesas Administrativas</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Custos com a <span className="dstq-accent">Administração</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                    Em 2025, os custos com a administração do Plano de Benefícios CV-03, formados pelas despesas com
                    a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos conforme
                    demonstrado a seguir:
                </p>

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
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
                                ["Pessoal e Encargos", "1.248.752", "1.408.167", "2.656.919"],
                                ["Treinamento e Viagens", "11.734", "13.232", "24.966"],
                                ["Serviços de Terceiros", "440.053", "496.231", "936.284"],
                                ["Despesas de Consumo, Depreciações, Tafic etc", "123.872", "139.685", "263.558"],
                                ["Contingências (PIS e COFINS)", "842", "279.047", "279.889"],
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
                                <td className="num">1.825.254</td>
                                <td className="num">2.336.362</td>
                                <td className="num">4.161.616</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Distribuição de Custos Administrativos</div>
                    <div style={{ maxWidth: 420, margin: "0 auto" }}>
                        <Doughnut data={custosData} options={custosOptions} />
                    </div>
                </div>

                <div style={{ marginTop: 44 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.35rem" }}>
                        Mudança no Custeio Previdencial
                    </h3>
                    <p className="dstq-text-body dstq-text-body--on-light dstq-reveal" style={{ marginTop: 10 }}>
                        No Plano CV-03, passou o desconto da contribuição de risco da contribuição patronal para
                        cobrança de uma alíquota de <strong style={{ color: "#0a1f3c" }}>0,189%</strong> durante a
                        vigência do presente plano de custeio previdencial.
                    </p>
                </div>
            </div>
        </section>
    );
}

function PlanoCV03() {
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
                    <source src={headerCV03Video} type="video/mp4" />
                </video>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(1,24,52,0.74) 0%, rgba(0,66,130,0.68) 55%, rgba(0,116,200,0.58) 100%), radial-gradient(circle at 20% 15%, rgba(0,174,239,0.24), transparent 38%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 40%)", zIndex: 1 }} />
                <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "40px" }}>
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div style={{ marginBottom: "12px" }}>
                                <span style={{ color: "#00aeef", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                                    # Nossos Planos · Contribuição Variável
                                </span>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
                                <img src={iconCV03} alt="Plano CV-03" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                                <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: 0 }}>
                                    Plano <span style={{ color: "#00aeef" }}>CV-03</span>
                                </h1>
                            </div>

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "720px" }}>
                                Plano de Contribuição Variável com recuperação relevante em 2025, registrando
                                rentabilidade de 12,18% — 144% da meta atuarial, após resultado negativo em 2024.
                            </p>

                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    Plano CV-03
                                </li>
                            </ol>

                            <div className="plano-hero-meta">
                                <div>
                                    <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                                    <div className="plano-hero-meta-value">12,18%</div>
                                </div>
                                <div>
                                    <div className="plano-hero-meta-label">vs. Meta Atuarial</div>
                                    <div className="plano-hero-meta-value">144%</div>
                                </div>
                                <div>
                                    <div className="plano-hero-meta-label">Patrimônio</div>
                                    <div className="plano-hero-meta-value">R$ 71,0 mi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SecaoEconomia />
            <Band quote='"O Plano CV-03 registrou rentabilidade de 12,18%, equivalente a 144% da meta atuarial, com recuperação relevante frente ao exercício anterior, quando o plano registrou -1,01%."' />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoPremissas />
            <SecaoCustos />
            <Band quote='"O Plano CV-03 encerrou 2025 com Superávit Técnico de R$ 8,2 milhões — elevação de 51,43% em relação a 2024 — registrando suficiência de cobertura e solvência econômica e atuarial."' />

            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-cv03" className="services-particles-bg" />
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

export default PlanoCV03;
