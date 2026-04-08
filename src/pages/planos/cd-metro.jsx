import { Link } from "react-router-dom";
import { useEffect } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import iconCDMetro from "../../assets/img/cdmetro.svg";
import headerCDMetroVideo from "../../assets/img/cd-metro.mp4";

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
    const data = {
        labels: ["Rentabilidade", "Indice de Referencia", "Mediana Mercado"],
        datasets: [
            {
                data: [11.74, 8.43, 7.8],
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
                    O Plano CD-Metro/DF registrou rentabilidade de <strong style={{ color: "#0a1f3c" }}>11,74%</strong> em 2025,
                    representando <strong style={{ color: "#0a1f3c" }}>139,26% do indice de referencia (IPCA + 4% a.a.)</strong>.
                    A Renda Fixa, que representa 96% da carteira, registrou 11,53%, com destaque para o Exterior
                    (+18,94%) e Operacoes com Participantes (+14,46%).
                </p>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    Nos ultimos dez anos, a rentabilidade acumulada do CD-Metro/DF atingiu 141,03% em termos nominais,
                    compativel com a variacao da Taxa SELIC no periodo (142,10%).
                </p>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Rentabilidade vs. Indice de Referencia</div>
                    <Bar data={data} options={options} />
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Rentabilidade Acumulada (10 anos)", value: "141,03%", sub: "Compativel com Selic (142,10%)" },
                        { label: "Desempenho vs. Referencia", value: "139,26%", sub: "Recuperacao apos -0,59% em 2024" },
                        { label: "Exterior", value: "+18,94%", sub: "Melhor segmento do portfolio" },
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
        labels: ["Rentabilidade", "Indice de Referencia", "Mediana Mercado"],
        datasets: [
            {
                data: [11.74, 8.43, 7.8],
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
        labels: ["Ativos (99,89%)", "Assistidos (0,11%)"],
        datasets: [{ data: [99.89, 0.11], backgroundColor: ["#00aeef", "#0074c8"] }],
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
                        { label: "Recurso do Plano", value: "R$ 151,3 mi" },
                        { label: "Indice de Referencia", value: "8,43%" },
                        { label: "Rentabilidade", value: "11,74%" },
                        { label: "Desempenho", value: "139,26%" },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Rentabilidade vs. Referencia vs. Mercado</div>
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
                                    { label: "Total de Participantes", value: "932", sub: "Aumento de 4,02% vs. 2024" },
                                    { label: "Ativos", value: "99,89%" },
                                    { label: "Assistidos", value: "0,11%" },
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
                                Podem aderir: todos os empregados da Companhia do Metropolitano do Distrito Federal,
                                inclusive gerentes, diretores, conselheiros, ocupantes de cargo eletivo e outros
                                dirigentes da Patrocinadora.
                            </p>
                        </div>
                        <div className="plano-chart-box" style={{ marginTop: 0 }}>
                            <div className="plano-chart-title">Distribuicao de Participantes</div>
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
        labels: ["Renda Fixa (96%)", "Renda Variavel (1%)", "Op. Participantes (2%)", "Exterior (1%)"],
        datasets: [{ data: [96, 1, 2, 1], backgroundColor: ["#00aeef", "#0074c8", "#004282", "#94a3b8"] }],
    };

    const allocOptions = {
        plugins: {
            legend: { position: "bottom", labels: { color: LIGHT_CHART_OPTS.color } },
        },
    };

    return (
        <section id="investimentos" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Alocacao de Recursos</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado da Politica de <span className="dstq-accent">Investimentos</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th>Segmento</th>
                                <th className="num">Politica Investimento</th>
                                <th className="num">Resolucao 4.994</th>
                                <th className="num">Alocacao 2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Renda Fixa", "100,00%", "100,00%", "96,00%"],
                                ["Renda Variavel", "10,00%", "70,00%", "1,00%"],
                                ["Estruturado", "10,00%", "20,00%", "-"],
                                ["Imobiliario", "1,00%", "20,00%", "-"],
                                ["Operacoes com Participantes", "5,00%", "15,00%", "2,00%"],
                                ["Exterior", "5,00%", "10,00%", "1,00%"],
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
                                    <th className="num">1o Sem</th>
                                    <th className="num">2o Sem</th>
                                    <th className="num">2025</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Renda Fixa", "6,33%", "4,89%", "11,53%"],
                                    ["Renda Variavel", "11,71%", "12,62%", "25,81%"],
                                    ["Estruturado", "13,02%", "0,44%", "13,52%"],
                                    ["Imobiliario", "-", "-", "-"],
                                    ["Operacoes com Participantes", "6,67%", "7,30%", "14,46%"],
                                    ["Exterior", "8,76%", "9,35%", "18,94%"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">6,43%</td>
                                    <td className="num">4,99%</td>
                                    <td className="num">11,74%</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                                    <td><strong>INDICE DE REFERENCIA</strong></td>
                                    <td className="num">5,03%</td>
                                    <td className="num">3,24%</td>
                                    <td className="num">8,43%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Alocacao por Segmento</div>
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
            { label: "Arrecadacao", data: [12.282, 15.907, 16.648], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Beneficios/Institutos", data: [0.93, 1.32, 2.233], backgroundColor: "#0074c8", borderRadius: 4 },
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
                    Arrecadacao e <span className="dstq-accent">Beneficios</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em 2025, houve aumento de 4,66% na arrecadacao das contribuicoes ao Plano CD-Metro/DF,
                    movimento coerente com o crescimento do numero de participantes. O pagamento de beneficios e
                    institutos aumentou 69,10% no comparativo com 2024, refletindo a maturacao gradual do plano.
                </p>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Evolucao Arrecadacao vs. Beneficios (R$ milhoes)</div>
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
                                <td>Arrecadacao</td>
                                <td className="num">R$ 12.281.590</td>
                                <td className="num">R$ 15.906.670</td>
                                <td className="num">R$ 16.648.083</td>
                            </tr>
                            <tr>
                                <td>Beneficios/Institutos</td>
                                <td className="num">R$ 929.707</td>
                                <td className="num">R$ 1.320.296</td>
                                <td className="num">R$ 2.232.688</td>
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
        labels: ["Patrimonio de Cobertura", "Provisoes Matematicas"],
        datasets: [{
            data: [150.3, 150.3],
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
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Situacao Atuarial</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado <span className="dstq-accent">Atuarial</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="dstq-split">
                    <div>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                            As Provisoes Matematicas dimensionadas em 31 de dezembro de 2025, no montante de
                            <strong style={{ color: "#0a1f3c" }}> R$ 150.300.327,51</strong>, comparativamente
                            aquelas de 2024 (R$ 121.887.029,16), representaram variacao de aproximadamente
                            <strong style={{ color: "#0a1f3c" }}> 23,31%</strong>.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                            O Plano de Beneficios CD-METRO-DF encerrou o exercicio de 2025 com
                            <strong style={{ color: "#0a1f3c" }}> Equilibrio Tecnico economico e atuarial</strong>,
                            registrando suficiencia de cobertura e solvencia. A variacao e justificada pelo crescimento
                            das contribuicoes e rentabilidade superior aos resgates do exercicio.
                        </p>
                    </div>
                    <div>
                        <div className="plano-img-card">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                                alt="Analise atuarial"
                            />
                        </div>
                    </div>
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Patrimonio de Cobertura", value: "R$ 150,3 mi" },
                        { label: "Provisoes Matematicas", value: "R$ 150,3 mi" },
                        { label: "Variacao Provisoes", value: "+23,31%" },
                        { label: "Situacao", value: "Equilibrio" },
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
                                ["Ativo Total", "R$ 124.704.127,86", "R$ 153.715.488,25"],
                                ["Exigivel Operacional", "-R$ 67.415,27", "-R$ 74.654,11"],
                                ["Fundos (Administrativo e Investimento)", "-R$ 2.010.747,26", "-R$ 2.386.127,72"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Ativo Liquido do Plano</strong></td>
                                <td className="num">R$ 122.625.965,33</td>
                                <td className="num">R$ 151.254.706,42</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Provisoes Matematicas</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Provisao Matematica de Beneficio Concedido", "R$ 72.909,11", "R$ 348.348,45"],
                                ["Provisao Matematica de Beneficio a Conceder", "R$ 121.814.120,05", "R$ 149.951.979,06"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Provisao Matematica Total</strong></td>
                                <td className="num">R$ 121.887.029,16</td>
                                <td className="num">R$ 150.300.327,51</td>
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
                            <tr><td>Ativo Liquido do Plano</td><td className="num">R$ 122.625.965,33</td><td className="num">R$ 151.254.706,42</td></tr>
                            <tr><td>Provisao Matematica Total</td><td className="num">-R$ 121.887.029,16</td><td className="num">-R$ 150.300.327,51</td></tr>
                            <tr><td>Fundo Previdencial</td><td className="num">-R$ 738.936,17</td><td className="num">-R$ 954.378,91</td></tr>
                            <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                                <td><strong>Resultado Atuarial</strong></td>
                                <td className="num">R$ 0,00</td>
                                <td className="num">R$ 0,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Equilibrio Tecnico do Plano</div>
                    <Bar data={equilData} options={equilOptions} />
                </div>
            </div>
        </section>
    );
}

function SecaoCustos() {
    const custosData = {
        labels: ["Pessoal e Encargos", "Servicos de Terceiros", "Despesas de Consumo", "Contingencias", "Treinamento"],
        datasets: [{
            data: [391826, 138077, 40519, 45606, 3682],
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
                    Custos com a <span className="dstq-accent">Administracao</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em 2025, os custos com a administracao do Plano de Beneficios CD-METRO-DF, formados pelas
                    despesas com a gestao previdencial e a gestao de investimentos do Plano, foram distribuidos
                    conforme demonstrado a seguir:
                </p>

                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th>Despesas (R$)</th>
                                <th className="num">Gestao Previdencial</th>
                                <th className="num">Gestao de Investimentos</th>
                                <th className="num">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Pessoal e Encargos", "184.158", "207.668", "391.826"],
                                ["Treinamento e Viagens", "1.730", "1.951", "3.682"],
                                ["Servicos de Terceiros", "64.896", "73.181", "138.077"],
                                ["Despesas de Consumo, Depreciacoes, Tafic etc", "19.044", "21.475", "40.519"],
                                ["Contingencias (PIS e COFINS)", "294", "45.576", "45.606"],
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
                                <td className="num">269.858</td>
                                <td className="num">349.851</td>
                                <td className="num">619.710</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Distribuicao de Custos Administrativos</div>
                    <div style={{ maxWidth: 420, margin: "0 auto" }}>
                        <Doughnut data={custosData} options={custosOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PlanoCDMetro() {
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
                    <source src={headerCDMetroVideo} type="video/mp4" />
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
                                    # Nossos Planos · Contribuicao Definida
                                </span>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
                                <img src={iconCDMetro} alt="Plano CD-Metro/DF" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                                <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: 0 }}>
                                    Plano <span style={{ color: "#00aeef" }}>CD-Metro/DF</span>
                                </h1>
                            </div>

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "720px" }}>
                                Plano de Contribuicao Definida dos empregados do Metro-DF, com desempenho consistente
                                de 11,74% em 2025 — 139% do indice de referencia.
                            </p>

                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    Plano CD-Metro/DF
                                </li>
                            </ol>

                        </div>
                    </div>

                    {/* Meta strip — full width */}
                    <div className="plano-hero-meta">
                        <div>
                            <div className="plano-hero-meta-value">11,74%</div>
                            <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">139%</div>
                            <div className="plano-hero-meta-label">vs. Índice Referência</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">R$ 151,3 mi</div>
                            <div className="plano-hero-meta-label">Patrimônio</div>
                        </div>
                    </div>
                </div>
            </section>

            <SecaoEconomia />
            <Band quote={'"O Plano CD-Metro/DF apresentou rentabilidade de 11,74%, equivalente a 139% do indice de referencia, com desempenho consistente e crescimento de 4,02% no numero de participantes."'} />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoCustos />
            <Band quote={'"O Plano CD-Metro/DF encerrou 2025 com Equilibrio Tecnico economico e atuarial, rentabilidade de 11,74% e crescimento de 4,02% no numero de participantes."'} />

            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-cdmetro" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Indice</span>
                        <h2 className="services-index-heading">
                            Conheca os planos da <span className="services-index-accent">Previdencia BRB</span> e
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

export default PlanoCDMetro;
