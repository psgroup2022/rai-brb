import { Link } from "react-router-dom";
import SecaoEconomia from "../../components/ui/SecaoEconomia";
import { useEffect } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import iconCDMetro from "../../assets/img/cdmetro.svg";
import headerCDMetroVideo from "../../assets/img/cd-metro.mp4";
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

                <ul className="plano-bullets dstq-reveal dstq-reveal--d2">
                    <li>O Plano CD-METRÔ/DF encerrou 2025 com rentabilidade de 11,74%, equivalente a 139% do seu índice de referência (IPCA + 4,00% a.a.).</li>
                    <li>O resultado alcançado foi impulsionado por uma estrutura mais diversificada, combinando renda fixa, renda variável, multimercados, operações com participantes e investimentos no exterior.</li>
                    <li>A Renda Fixa manteve papel central, com retorno de 11,53%, sustentada por LFT e NTN-B. Destaque-se ainda que 93% da carteira do Plano CD-Metrô/DF é composto por NTN-B, com taxa média de aquisição de 6,99% a.a., com predominância de marcação na curva.</li>
                    <li>A Renda Variável, via fundo Guepardo, apresentou desempenho expressivo de 25,81%, contribuindo de forma relevante ao resultado consolidado.</li>
                    <li>O segmento estruturado/multimercados também teve contribuição positiva de 13,52%, enquanto os investimentos no exterior destacaram-se com retorno de 18,94%, reforçando a diversificação geográfica.</li>
                    <li>As operações com participantes mantiveram desempenho consistente de 14,46%, também superando o índice de referência do Plano.</li>
                    <li>No conjunto, o plano apresentou equilíbrio entre retorno e diversificação, compatível com seu perfil e horizonte de longo prazo.</li>
                </ul>


            </div>
        </section>
    );
}

function SecaoDesempenho() {
    const compData = {
        labels: ["Referencial", "Rentabilidade", "Ganho Real"],
        datasets: [
            {
                data: [8.44, 11.74, 7.17],
                backgroundColor: ["#0074c8", "#00aeef", "#004282"],
                borderRadius: 6,
            },
        ],
    };

    const compOptions = {
        indexAxis: "y",
        plugins: { legend: { display: false } },
        scales: {
            x: {
                ticks: { callback: (v) => `${v}%`, color: DARK_CHART_OPTS.color },
                grid: { color: DARK_CHART_OPTS.borderColor },
            },
            y: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
        },
    };

    const popEvoData = {
        labels: ["2024", "2025"],
        datasets: [
            {
                data: [896, 932],
                backgroundColor: ["rgba(0,174,239,0.3)", "#00aeef"],
                borderRadius: 6,
                barPercentage: 0.5,
            },
        ],
    };

    const popEvoOptions = {
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
            y: { ticks: { color: DARK_CHART_OPTS.color }, grid: { color: DARK_CHART_OPTS.borderColor } },
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

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    O Plano registrou uma rentabilidade acumulada de 11,74% em 2025, equivalente a 139% do seu índice de referência (IPCA+4,00% a.a.). Esse resultado representa um ganho real (acima da inflação) de 7,17%, incrementando os ganhos para a constituição da reserva de aposentadoria dos seus participantes.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 12 }}>
                    O CD-Metrô/DF possui 93% do seu patrimônio total alocado em NTN-B, com taxa média ponderada de 6,99% a.a. + IPCA.
                </p>

                <div className="plano-kpi-row" style={{ marginTop: 32 }}>
                    {[
                        { label: "Recurso do Plano", value: "R$ 151.337.404" },
                        { label: "Referencial", value: "8,44%" },
                        { label: "Rentabilidade", value: "11,74%" },
                        { label: "Ganho Real (acima da inflação)", value: "7,17% a.a." },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Indicadores do Plano · Recurso: R$ 151.337.404</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                {/* Quadro Populacional — pop- */}
                <div className="pop-section dstq-reveal" style={{ marginTop: 60 }}>
                    <div className="pop-hero">
                        <div>
                            <div className="pop-section-label">Quadro Populacional</div>
                            <div className="pop-total-num">932</div>
                            <span className="pop-total-label">participantes em 2025</span>
                            <div className="pop-total-delta">
                                <span className="pop-delta-badge" style={{ color: '#16a34a', background: 'rgba(22, 163, 74, 0.1)' }}>▲ 4,02%</span>
                                <span className="pop-delta-context">vs. 2024</span>
                            </div>
                        </div>
                        <div className="pop-closed-tag" style={{ background: "rgba(0,174,239,0.06)", border: "1px solid rgba(0,174,239,0.15)" }}>
                            <span className="pop-closed-icon" style={{ background: "#00aeef", color: "#fff" }}>+</span>
                            <div>
                                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Plano aberto</strong>
                                <span style={{ color: "rgba(255,255,255,0.6)" }}>Podem aderir todos os empregados do Metrô-DF</span>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bar-wrap dstq-reveal dstq-reveal--d1">
                        <div className="pop-bar-label">Composição do plano</div>
                        <div className="pop-bar">
                            <div className="pop-bar-seg pop-bar-seg--ativos" style={{ width: '99.9%' }}>
                                <span>Ativos</span>
                                <strong>99,9%</strong>
                            </div>
                            <div className="pop-bar-seg pop-bar-seg--assistidos" style={{ width: '0.1%' }}>
                                <span>Assistidos</span>
                                <strong>0,1%</strong>
                            </div>
                        </div>
                        <div style={{ marginTop: 12, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                            * Pensionistas: 0,0%
                        </div>
                    </div>

                    <div className="pop-bottom-grid dstq-reveal dstq-reveal--d2">
                        <div className="pop-card">
                            <div className="pop-card-label">Distribuição por Gênero</div>
                            <div className="pop-gender-bar">
                                <div className="pop-gender-masc" style={{ width: '75.43%' }}>
                                    <span>♂ Masc</span>
                                    <strong>75,43%</strong>
                                </div>
                                <div className="pop-gender-fem" style={{ width: '24.57%' }}>
                                    <strong>24,57%</strong>
                                    <span>Fem ♀</span>
                                </div>
                            </div>
                            <div className="pop-gender-legend">
                                <span><i className="pop-dot pop-dot--masc" />Masculino — 75,43%</span>
                                <span><i className="pop-dot pop-dot--fem" />Feminino — 24,57%</span>
                            </div>
                        </div>

                        <div className="pop-card">
                            <div className="pop-card-label">Média de Idade</div>
                            <div className="pop-age-pair">
                                <div className="pop-age-item">
                                    <span className="pop-age-num">47</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Ativos</span>
                                </div>
                                <div className="pop-age-divider" />
                                <div className="pop-age-item">
                                    <span className="pop-age-num">67</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Assistidos</span>
                                </div>
                            </div>
                        </div>

                        <div className="pop-card pop-card--maturity">
                            <div className="pop-card-label">Maturidade do Plano</div>
                            <div className="pop-maturity-num">0,12%</div>
                            <div className="pop-maturity-bar">
                                <div className="pop-maturity-fill" style={{ width: '0.12%' }} />
                            </div>
                            <span className="pop-maturity-sub">Predominância de participantes ativos</span>
                        </div>
                    </div>
                </div>

                <div className="dstq-split" style={{ marginTop: 60, alignItems: "center" }}>
                    <div>
                        <h4 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.25rem", marginBottom: 16 }}>Adesão ao Plano</h4>
                        <p className="dstq-text-body dstq-reveal">
                            Todos os empregados da Companhia do Metropolitano do Distrito Federal – Metrô-DF podem aderir ao Plano, inclusive gerentes, diretores, conselheiros, ocupantes de cargo eletivo e outros dirigentes da Patrocinadora.
                        </p>
                        <p className="dstq-text-body dstq-reveal" style={{ marginTop: 16 }}>
                            Aumento de <strong>4,02%</strong> no total de participantes em relação ao ano anterior.
                        </p>
                    </div>
                    <div className="plano-chart-box dstq-reveal" style={{ marginTop: 0 }}>
                        <div className="plano-chart-title">Evolução do Total de Participantes</div>
                        <Bar data={popEvoData} options={popEvoOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecaoInvestimentos() {
    return (
        <section id="investimentos" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Alocação de Recursos</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado da Política de <span className="dstq-accent">Investimentos</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                {/* Tabela — Política de Investimentos */}
                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th rowSpan="2">Segmento</th>
                                <th className="num" colSpan="2" style={{ textAlign: "center" }}>Política Investimento</th>
                                <th className="num" rowSpan="2">Resolução 4.994</th>
                                <th className="num" rowSpan="2">Alocação Objetivo 2026</th>
                            </tr>
                            <tr>
                                <th className="num">2026</th>
                                <th className="num">2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Renda Fixa", "100,00", "100,00", "100,00", "96,00"],
                                ["Renda Variável", "10,00", "10,00", "70,00", "1,00"],
                                ["Estruturado", "10,00", "10,00", "20,00", "-"],
                                ["Imobiliário", "1,00", "1,00", "20,00", "-"],
                                ["Operações com Participantes", "5,00", "5,00", "15,00", "2,00"],
                                ["Exterior", "5,00", "5,00", "10,00", "1,00"],
                            ].map(([seg, p1, p2, res, aloc], i) => (
                                <tr key={i}>
                                    <td>{seg}</td>
                                    <td className="num">{p1}</td>
                                    <td className="num">{p2}</td>
                                    <td className="num">{res}</td>
                                    <td className="num">{aloc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Tabela — Resultados dos Investimentos */}
                <div style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Resultados dos Investimentos
                    </h3>
                    <div className="plano-table-wrap">
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th rowSpan="2">Segmento</th>
                                    <th className="num" colSpan="3" style={{ textAlign: "center" }}>Desempenho</th>
                                </tr>
                                <tr>
                                    <th className="num">1º SEM</th>
                                    <th className="num">2º SEM</th>
                                    <th className="num">2025</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Renda Fixa", "6,33", "4,89", "11,53"],
                                    ["Renda Variável", "11,71", "12,62", "25,81"],
                                    ["Estruturado", "13,02", "0,44", "13,52"],
                                    ["Imobiliário", "-", "-", "-"],
                                    ["Operações com Participantes", "6,67", "7,30", "14,46"],
                                    ["Exterior", "8,76", "9,35", "18,94"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}>
                                        <td>{seg}</td>
                                        <td className="num">{s1}</td>
                                        <td className="num">{s2}</td>
                                        <td className="num">{total}</td>
                                    </tr>
                                ))}
                                <tr className="total" style={{ borderTop: "2px solid #cbd5e1" }}>
                                    <td><strong>Plano</strong></td>
                                    <td className="num">6,43</td>
                                    <td className="num">4,99</td>
                                    <td className="num">11,74</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                                    <td><strong>Índice de Referência</strong></td>
                                    <td className="num">5,03</td>
                                    <td className="num">3,24</td>
                                    <td className="num">8,43</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dstq-reveal" style={{ marginTop: 32, paddingBottom: 24 }}>
                    <a href="#" className="plano-cta-link" style={{ fontSize: "1.1rem", color: "#0074c8", textDecoration: "none", fontWeight: 600, display: "inline-block", padding: "12px 24px", border: "2px solid #00aeef", borderRadius: "8px", transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.background = "#00aeef"; e.currentTarget.style.color="#fff"; }} onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color="#0074c8"; }}>
                        CLIQUE AQUI para acessar o Demonstrativo Analítico dos Investimentos do Plano CD-METRÔ-DF – Dezembro/2025
                    </a>
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
                    No ano, houve aumento de 4,66% na arrecadação das contribuições ao Plano CD-Metrô-DF, movimento coerente com o aumento do número de Participantes do Plano. Verifica-se aumento do pagamento de benefícios e/ou opção pelo resgate, que, em 2025, aumentou 69,11% no comparativo com o ano anterior.
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
    return (
        <section id="atuarial" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Situacao Atuarial</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado <span className="dstq-accent">Atuarial</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-table-wrap dstq-reveal">
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

                <div className="plano-table-wrap dstq-reveal">
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

                <div className="plano-table-wrap dstq-reveal">
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

                <div className="atuarial-content" style={{ marginTop: 40 }}>
                    <p className="dstq-text-body dstq-text-body--on-light dstq-reveal">
                        As Provisões Matemáticas dimensionadas em 31 de dezembro de 2025, no montante de <strong>R$ 150.300.327,51</strong>, comparativamente àquelas constantes de Avaliação Atuarial de 2024, que perfizeram R$ 121.887.029,16, representaram uma variação de aproximadamente 23,31%.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light dstq-reveal" style={{ marginTop: 20 }}>
                        A variação registrada é justificada pela manutenção de contribuições de participantes, autopatrocinados e patrocinadores, acrescidas do estoque e respectiva rentabilidade auferida no período, superior aos montantes de resgates ocorridos no exercício.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light dstq-reveal" style={{ marginTop: 20 }}>
                        O Plano de Benefícios CD-METRÔ-DF encerrou o exercício de 2025 com <strong>Equilíbrio Técnico econômico e atuarial</strong>, registrando, portanto, suficiência de cobertura e solvência.
                    </p>
                </div>

                <div className="dstq-reveal" style={{ marginTop: 40, paddingBottom: 24 }}>
                    <a href="#" className="plano-cta-link" style={{ fontSize: "1.1rem", color: "#0074c8", textDecoration: "none", fontWeight: 600, display: "inline-block", padding: "12px 24px", border: "2px solid #00aeef", borderRadius: "8px", transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.background = "#00aeef"; e.currentTarget.style.color="#fff"; }} onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color="#0074c8"; }}>
                        Clique aqui para acessar o Parecer Atuarial do Plano CD-METRÔ-DF – Arquivo anexo
                    </a>
                </div>

            </div>
        </section>
    );
}

function SecaoEquilibrio() {
    return (
        <section className="plano-section plano-section--dark">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Dashboard</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Equilíbrio Técnico <span className="dstq-accent">do Plano</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-kpi-row" style={{ marginTop: 40 }}>
                    {[
                        { label: "Patrimônio de Cobertura", value: "R$ 150.300.327,51" },
                        { label: "Provisões Matemáticas", value: "R$ 150.300.327,51" }
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ flex: 1, minWidth: '300px' }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value" style={{ fontSize: '1.8rem' }}>{k.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SecaoCustos() {
    return (
        <section id="custos" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Despesas Administrativas</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Custos com a <span className="dstq-accent">Administração</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                    Em 2025, os custos com a administração do Plano de Benefícios CD-METRÔ-DF, formados pelas despesas com a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos conforme demonstrado a seguir:
                </p>

                <div className="plano-table-wrap dstq-reveal" style={{ marginTop: 40 }}>
                    <table className="plano-table plano-table--light">
                        <thead style={{ backgroundColor: "#0074c8", color: "#fff" }}>
                            <tr>
                                <th colSpan="4" style={{ textAlign: "center", backgroundColor: "#3b82f6", color: "#fff", padding: "12px", fontSize: "1.1rem", borderBottom: "2px solid #fff" }}>
                                    DESPESAS (R$)
                                </th>
                            </tr>
                            <tr style={{ backgroundColor: "#3b82f6" }}>
                                <th style={{ color: "#fff", fontWeight: "700" }}>GESTÃO PRÓPRIA</th>
                                <th className="num" style={{ color: "#fff", fontWeight: "700", textAlign: "center" }}>GESTÃO PREVIDENCIAL</th>
                                <th className="num" style={{ color: "#fff", fontWeight: "700", textAlign: "center" }}>GESTÃO DE INVESTIMENTOS</th>
                                <th className="num" style={{ color: "#fff", fontWeight: "700", textAlign: "center" }}>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Pessoal e Encargos", "184.158", "207.668", "391.826"],
                                ["Treinamento e Viagens", "1.730", "1.951", "3.682"],
                                ["Serviços de Terceiros", "64.896", "73.181", "138.077"],
                                ["Despesas de Consumo, Depreciações, Tafic etc", "19.044", "21.475", "40.519"],
                                ["Contingências (PIS e COFINS)", "30", "45.576", "45.606"],
                            ].map(([desc, prev, inv, tot], i) => (
                                <tr key={i}>
                                    <td style={{ fontWeight: i === 0 ? "600" : "400" }}>{desc}</td>
                                    <td className="num">{prev}</td>
                                    <td className="num">{inv}</td>
                                    <td className="num">{tot}</td>
                                </tr>
                            ))}
                            <tr className="total" style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}>
                                <td style={{ backgroundColor: "#3b82f6", color: "#fff", fontWeight: "700" }}>TOTAIS</td>
                                <td className="num" style={{ fontWeight: "700", backgroundColor: "rgba(59, 130, 246, 0.05)" }}>269.858</td>
                                <td className="num" style={{ fontWeight: "700", backgroundColor: "rgba(59, 130, 246, 0.05)" }}>349.851</td>
                                <td className="num" style={{ fontWeight: "700", backgroundColor: "rgba(59, 130, 246, 0.05)" }}>619.710</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function SecaoCustosGestao() {
    return (
        <section className="plano-section plano-section--light" style={{ paddingTop: 0 }}>
            <div className="container">
                <h3 className="dstq-reveal" style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "24px", color: "#0074c8", textTransform: "uppercase" }}>
                    Custos com a Gestão de Planos Previdenciais
                </h3>
                
                <div className="plano-table-wrap dstq-reveal">
                    <table className="plano-table plano-table--light">
                        <thead style={{ backgroundColor: "#0074c8", color: "#fff" }}>
                            <tr>
                                <th style={{ color: "#fff", padding: "12px 20px", textAlign: "left", fontWeight: "700" }}>DESCRIÇÃO</th>
                                <th style={{ color: "#fff", padding: "12px 20px", textAlign: "right", width: "200px", fontWeight: "700" }}>CD METRÔ-DF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["DESPESAS DE FOMENTO", "-"],
                                ["PESSOAL E ENCARGOS", "391.826", true],
                                ["TREINAMENTOS/VIAGENS", "3.682"],
                                ["SERVIÇOS DE TERCEIROS", "138.077"],
                                ["DESPESAS DE CONSUMO, DEPRECIAÇÃO, TAFIC, ETC)", "40.519"],
                                ["CONTINGÊNCIAS (PIS e COFINS)", "45.606"],
                                ["TOTAL", "619.710", false, true],
                                ["CORRETAGENS/EMOLUMENTOS BOLSA VALORES", "-"],
                                ["TAXA ADM/GESTÃO FUNDOS ABERTOS", "20.243"],
                                ["TAXA CUSTODIA/CONTROLADORIA FUNDOS ABERTOS", "2.737"],
                                ["TAXA PERFORMACE FUNDOS ABERTOS", "7.006"],
                                ["OUTRAS DESPESAS FUNDOS ABERTOS", "2.855"],
                                ["SUB-TOTAL (DESPESAS OUTRAS)", "32.841", true, true],
                                ["TOTAL", "652.550", false, true],
                            ].map(([desc, val, underline, isTotal], i) => (
                                <tr key={i} className={isTotal ? "total" : ""}>
                                    <td style={{ 
                                        textDecoration: underline ? "underline" : "none",
                                        fontWeight: isTotal ? "700" : "400"
                                    }}>
                                        {desc}
                                    </td>
                                    <td className="num" style={{ fontWeight: isTotal ? "700" : "400" }}>
                                        {val}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
            <SecaoEquilibrio />
            <SecaoCustos />
            <SecaoCustosGestao />
            <Band quote={'"O Plano CD-Metro/DF encerrou 2025 com Equilibrio Tecnico economico e atuarial, rentabilidade de 11,74% e crescimento de 4,02% no numero de participantes."'} />

            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-cdmetro" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Indice</span>
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

export default PlanoCDMetro;
