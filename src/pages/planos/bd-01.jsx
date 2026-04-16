import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecaoEconomia from "../../components/ui/SecaoEconomia";
import SecaoIndicePlanos from "../../components/ui/SecaoIndicePlanos";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import iconBD01 from "../../assets/img/bd01.svg";
import headerBD01Video from "../../assets/img/bd-01.mp4";
import { IMAGES } from "../../constant/theme";

import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement, ArcElement,
    Title, Tooltip, Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend, ChartDataLabels);
gsap.registerPlugin(ScrollTrigger);

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

    return (
        <section id="rentabilidade" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Resultados 2025</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Rentabilidade <span className="dstq-accent">2025</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <ul className="dstq-reveal dstq-reveal--d2" style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {[
                        "O Plano BD-01 encerrou 2025 com rentabilidade de 11,23%, atingindo 120% da sua meta atuarial (IPCA + 4,65% a.a.), o que evidencia a consistência da estratégia adotada.",
                        "O desempenho foi sustentado principalmente pela Renda Fixa, que acumulou 11,59%, beneficiada pela forte participação de títulos públicos indexados à inflação (NTN-B), com marcação na curva (92% da carteira) e com taxa média de IPCA + 6,31% a.a.",
                        "As LFT e os fundos de renda fixa também apresentaram resultados expressivos, com retornos de 14,33% e 14,10%, respectivamente.",
                        "Já as Letras Financeiras Subordinadas (LFS e LFSC) emitidas pelo BRB, que representam 5,18% do patrimônio total do BD-01, sofreram desvalorização expressiva no mês de dezembro (-5,57%), em decorrência do rebaixamento do rating do Banco. Não obstante, no acumulado de 12 meses, as Letras Financeiras do BRB tiveram uma valorização de 9,35%, batendo a meta atuarial no período. Esses títulos permanecerão em carteira.",
                        "As operações com participantes mantiveram desempenho robusto, com rentabilidade de 15,54%, acima do seu indicador de referência.",
                        "Por outro lado, o segmento imobiliário registrou desempenho negativo no ano (-9,38%), influenciado por reavaliações patrimoniais, enquanto o estruturado permaneceu residual e volátil.",
                        "No consolidado, o plano apresentou resultado sólido, preservando o equilíbrio atuarial e a sustentabilidade de longo prazo, com um superávit acumulado de R$ 91,14 milhões em 2025, valor esse 239 vezes superior ao verificado no exercício de 2024. O resultado superavitário foi constituído pelo retorno dos investimentos e pela mudança na meta atuarial, que passou para IPCA + 4,9%.",
                    ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <span style={{ color: '#00aeef', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.4, flexShrink: 0 }}>•</span>
                            <p className="dstq-text-body dstq-text-body--on-light" style={{ margin: 0 }}>{item}</p>
                        </li>
                    ))}
                </ul>


            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 3 — Desempenho
───────────────────────────────────────────── */
function SecaoDesempenho() {
    const compData = {
        labels: ["Meta Atuarial", "Rentabilidade", "Ganho Real"],
        datasets: [{
            label: "%",
            data: [9.32, 11.23, 6.69],
            backgroundColor: ["rgba(0,116,200,0.85)", "rgba(0,174,239,0.9)", "rgba(72,199,142,0.9)"],
            borderRadius: 6,
        }],
    };
    const compOptions = {
        indexAxis: "y",
        plugins: {
            legend: { display: false },
            datalabels: { display: false },
        },
        scales: {
            x: {
                ticks: { callback: (v) => v + "%", color: DARK_CHART_OPTS.color },
                grid: { color: DARK_CHART_OPTS.borderColor },
                max: 14,
            },
            y: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
        },
        animation: {
            onComplete: function() {
                const chart = this;
                const ctx = chart.ctx;
                ctx.font = 'bold 13px Sora, Poppins, sans-serif';
                ctx.fillStyle = 'rgba(255,255,255,0.9)';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                const vals = ["9,32%", "11,23%", "6,69% a.a."];
                chart.data.datasets[0].data.forEach((val, i) => {
                    const meta = chart.getDatasetMeta(0).data[i];
                    ctx.fillText(vals[i], meta.x + 8, meta.y);
                });
            }
        }
    };

    const popData = {
        labels: ["Pensionistas (78,0%)", "Ativos (11,28%)", "Assistidos (10,7%)"],
        datasets: [{ data: [78.0, 11.28, 10.7], backgroundColor: ["#00aeef", "#0074c8", "#64748b"] }],
    };
    const popOptions = {
        plugins: {
            legend: { position: "bottom", labels: { color: DARK_CHART_OPTS.color } },
            datalabels: { display: false },
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

                {/* Textos */}
                <div className="dstq-reveal dstq-reveal--d2" style={{ marginBottom: '32px' }}>
                    <p className="dstq-text-body" style={{ marginBottom: '12px' }}>
                        O Plano registrou uma rentabilidade acumulada de <strong style={{ color: '#00aeef' }}>11,23%</strong> em 2025, equivalente a <strong style={{ color: '#00aeef' }}>120%</strong> da sua meta atuarial (IPCA+4,65% a.a.), representando um ganho real (acima da inflação) de <strong style={{ color: '#00aeef' }}>6,69%</strong>.
                    </p>
                    <p className="dstq-text-body" style={{ marginBottom: '12px' }}>
                        O BD-01 possui <strong style={{ color: '#00aeef' }}>90%</strong> do seu patrimônio total alocado em NTN-B, com taxa média ponderada de <strong style={{ color: '#00aeef' }}>6,31% a.a. + IPCA</strong>.
                    </p>
                    <p className="dstq-text-body">
                        O Plano encerrou o ano com um superávit técnico acumulado de <strong style={{ color: '#00aeef' }}>R$ 91,14 milhões</strong>.
                    </p>
                </div>

                {/* Gráfico horizontal */}
                <div className="plano-chart-box">
                    <div className="plano-chart-title">Indicadores do Plano · Recurso: R$ 2.949.985.795</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                {/* Quadro Populacional — redesign */}
                <div className="pop-section dstq-reveal" style={{ marginTop: 60 }}>

                    {/* ── Cabeçalho + hero stat ── */}
                    <div className="pop-hero">
                        <div>
                            <div className="pop-section-label">Quadro Populacional</div>
                            <div className="pop-total-num">1.781</div>
                            <span className="pop-total-label">participantes em 2025</span>
                            <div className="pop-total-delta">
                                <span className="pop-delta-badge">▼ 0,67%</span>
                                <span className="pop-delta-context">vs. 1.793 em 2024</span>
                            </div>
                        </div>
                        <div className="pop-closed-tag">
                            <span className="pop-closed-icon">⊘</span>
                            <div>
                                <strong>Plano fechado</strong>
                                <span>para novas adesões desde 2000</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Barra proporcional de composição ── */}
                    <div className="pop-bar-wrap dstq-reveal dstq-reveal--d1">
                        <div className="pop-bar-label">Composição do plano</div>
                        <div className="pop-bar">
                            <div className="pop-bar-seg pop-bar-seg--pensionistas" style={{ width: '78%' }}>
                                <span>Pensionistas</span>
                                <strong>78,0%</strong>
                            </div>
                            <div className="pop-bar-seg pop-bar-seg--ativos" style={{ width: '11.28%' }}>
                                <span>Ativos</span>
                                <strong>11,28%</strong>
                            </div>
                            <div className="pop-bar-seg pop-bar-seg--assistidos" style={{ width: '10.72%' }}>
                                <span>Assist.</span>
                                <strong>10,7%</strong>
                            </div>
                        </div>
                    </div>

                    {/* ── Grid: Gênero | Idades | Maturidade ── */}
                    <div className="pop-bottom-grid dstq-reveal dstq-reveal--d2">

                        {/* Gênero */}
                        <div className="pop-card">
                            <div className="pop-card-label">Distribuição por Gênero</div>
                            <div className="pop-gender-bar">
                                <div className="pop-gender-masc" style={{ width: '62.72%' }}>
                                    <span>♂ Masculino</span>
                                    <strong>62,72%</strong>
                                </div>
                                <div className="pop-gender-fem" style={{ width: '37.28%' }}>
                                    <strong>37,28%</strong>
                                    <span>Feminino ♀</span>
                                </div>
                            </div>
                            <div className="pop-gender-legend">
                                <span><i className="pop-dot pop-dot--masc" />Masculino — 62,72%</span>
                                <span><i className="pop-dot pop-dot--fem" />Feminino — 37,28%</span>
                            </div>
                        </div>

                        {/* Médias de Idade */}
                        <div className="pop-card">
                            <div className="pop-card-label">Média de Idade</div>
                            <div className="pop-age-pair">
                                <div className="pop-age-item">
                                    <span className="pop-age-num">60,94</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Ativos</span>
                                </div>
                                <div className="pop-age-divider" />
                                <div className="pop-age-item">
                                    <span className="pop-age-num">72,21</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Assistidos</span>
                                </div>
                            </div>
                        </div>

                        {/* Maturidade */}
                        <div className="pop-card pop-card--maturity">
                            <div className="pop-card-label">Maturidade do Plano</div>
                            <div className="pop-maturity-num">88,71%</div>
                            <div className="pop-maturity-bar">
                                <div className="pop-maturity-fill" style={{ width: '88.71%' }} />
                            </div>
                            <span className="pop-maturity-sub">Predominância de assistidos e pensionistas</span>
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

                {/* Tabela 1 — Política de Investimentos */}
                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th rowSpan={2}>Segmento</th>
                                <th className="num" colSpan={2}>Política de Investimento</th>
                                <th className="num" rowSpan={2}>Resolução 4.994</th>
                                <th className="num" rowSpan={2}>Alocação Objetivo 2026</th>
                            </tr>
                            <tr>
                                <th className="num">2026</th>
                                <th className="num">2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Renda Fixa",                  "100,00", "100,00", "100,00", "97,00"],
                                ["Renda Variável",              "5,00",   "5,00",   "70,00",  "-"],
                                ["Estruturado",                 "4,00",   "4,00",   "20,00",  "-"],
                                ["Imobiliário",                 "2,00",   "2,00",   "20,00",  "2,00"],
                                ["Operações com Participantes", "5,00",   "5,00",   "15,00",  "1,00"],
                                ["Exterior",                    "5,00",   "5,00",   "10,00",  "-"],
                            ].map(([seg, p26, p25, res, aloc], i) => (
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

                {/* Tabela 2 — Resultado dos Investimentos */}
                <div style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Resultado dos Investimentos
                    </h3>
                    <div className="plano-table-wrap">
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th rowSpan={2}>Segmento</th>
                                    <th className="num" colSpan={3}>Desempenho</th>
                                </tr>
                                <tr>
                                    <th className="num">1º SEM</th>
                                    <th className="num">2º SEM</th>
                                    <th className="num">2025</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Renda Fixa",                  "6,28",    "5,00",     "11,59"],
                                    ["Renda Variável",              "-",       "-",         "-"],
                                    ["Estruturado",                 "-75,48",  "-597,34",  "-221,94"],
                                    ["Imobiliário",                 "0,39",    "-9,73",    "-9,38"],
                                    ["Operações com Participantes", "7,71",    "7,27",     "15,54"],
                                    ["Exterior",                    "-",       "-",         "-"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>Plano</strong></td>
                                    <td className="num">6,18</td>
                                    <td className="num">4,75</td>
                                    <td className="num">11,23</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.07)" }}>
                                    <td><strong>Meta Atuarial</strong></td>
                                    <td className="num">5,65</td>
                                    <td className="num">3,47</td>
                                    <td className="num">9,32</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dstq-reveal" style={{ marginTop: '32px', textAlign: 'center' }}>
                    <a
                        href="#"
                        className="dstq-cta-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                    >
                        <strong>CLIQUE AQUI</strong> para acessar o Demonstrativo Analítico dos Investimentos do Plano BD-01 – Dezembro/2025 <span>→</span>
                    </a>
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
            {
                label: "Arrecadação",
                data: [89576679, 98685983, 95810427],
                backgroundColor: "#00aeef",
                borderRadius: 4,
            },
            {
                label: "Benefícios/Institutos",
                data: [234748705, 251562380, 264930430],
                backgroundColor: "#0074c8",
                borderRadius: 4,
            },
        ],
    };
    const fluxOptions = {
        plugins: {
            legend: { position: "top", labels: { color: DARK_CHART_OPTS.color, font: { size: 13 } } },
            tooltip: {
                callbacks: {
                    label: (ctx) => ` ${ctx.dataset.label}: R$ ${ctx.raw.toLocaleString("pt-BR")}`,
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: '#fff',
                font: { size: 12, weight: 'bold' },
                formatter: (val) => 'R$ ' + val.toLocaleString('pt-BR'),
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (v) => "R$ " + (v / 1000000).toFixed(0) + "M",
                    color: DARK_CHART_OPTS.color,
                    font: { size: 13 },
                },
                grid: { color: DARK_CHART_OPTS.borderColor },
            },
            x: { ticks: { color: DARK_CHART_OPTS.color, font: { size: 13 } }, grid: { display: false } },
        },
        layout: { padding: { top: 30 } },
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
                    O Plano BD-01 paga mais Benefícios do que recebe de contribuições, dada a sua maturidade. Em 2025, houve aumento de 5,31% na rubrica de pagamento de Benefícios, crescimento compatível com o aumento do número de assistidos e pensionistas. A redução de 2,91% na arrecadação foi proveniente também ao aumento do número de assistidos.
                </p>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Evolução Arrecadação vs. Benefícios/Institutos</div>
                    <Bar data={fluxData} options={fluxOptions} />
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
        plugins: { legend: { display: false }, datalabels: { display: false } },
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

                {/* Textos */}
                <div className="dstq-reveal dstq-reveal--d2" style={{ marginBottom: '32px' }}>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginBottom: '14px' }}>
                        Cotejando o Patrimônio de Cobertura do Plano em 31 de dezembro de 2025, no montante de <strong style={{ color: '#0a1f3c' }}>R$ 2.937.286.793,58</strong> com as Provisões Matemáticas, no mesmo período, de <strong style={{ color: '#0a1f3c' }}>R$ 2.846.145.502,31</strong>, o Plano BD-01 registrou <strong style={{ color: '#0a1f3c' }}>Superávit Técnico de R$ 91.141.291,27</strong>.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginBottom: '14px' }}>
                        Uma vez observada a Duration do passivo, apurada em 10,4795 pontos, conforme Resolução PREVIC nº 23, de 14 de agosto de 2023, o valor do limite da Reserva de Contingência, em 31 de dezembro de 2025, foi de <strong style={{ color: '#0a1f3c' }}>R$ 582.876.728,92</strong>. Desta forma, o Superávit Técnico foi devidamente alocado na Reserva de Contingência.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginBottom: '14px' }}>
                        Com o concurso do Ajuste de Precificação, dimensionado em <strong style={{ color: '#0a1f3c' }}>R$ 217.078.128,00</strong>, conforme legislação previdenciária aplicável, o Plano encerrou o exercício de 2025 com <strong style={{ color: '#0a1f3c' }}>Superávit Técnico Ajustado de R$ 308.219.419,27</strong>.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginBottom: '14px' }}>
                        Com efeito, o Resultado Ajustado, comparativamente aquele de 31 de dezembro de 2024, Superávit Técnico Ajustado de <strong style={{ color: '#0a1f3c' }}>R$ 258.734.262</strong>, representou uma variação favorável de <strong style={{ color: '#0a1f3c' }}>19,13%</strong>, justificada principalmente pela redução do passivo atuarial do Plano, proveniente da mudança na taxa real de juros, que passou de 4,65% para 4,90%.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        O Plano BD-01 encontra-se <strong style={{ color: '#0a1f3c' }}>superavitário</strong> e, portanto, não há necessidade de aplicação de novo plano de equacionamento.
                    </p>
                </div>

                {/* Tabela 1 — Ativo Líquido */}
                <div className="plano-table-wrap dstq-reveal">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Total",                              "2.912.506.490,60",  "3.027.945.809,26"],
                                ["Exigível Operacional",                     "-5.890.899,93",     "-6.387.160,85"],
                                ["Exigível Contingencial",                   "-2.114.367,24",     "-2.344.365,82"],
                                ["Fundos (Administrativo e Investimento)",   "-78.178.126,06",    "-81.927.489,01"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num"><strong>2.826.323.097,37</strong></td>
                                <td className="num"><strong>2.937.286.793,58</strong></td>
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
                            {[
                                ["Provisão Matemática de Benefício Concedido",  "2.592.041.198,59",  "2.654.793.538,06"],
                                ["Provisão Matemática de Benefício a Conceder", "415.438.840,44",    "370.376.631,78"],
                                ["Provisão Matemática a Constituir",            "-181.537.940,61",   "-179.024.667,53"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td>
                                <td className="num"><strong>2.825.942.098,42</strong></td>
                                <td className="num"><strong>2.846.145.502,31</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela 3 — Déficit/Superávit */}
                <div className="plano-table-wrap dstq-reveal" style={{ marginTop: '24px' }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Ativo Líquido do Plano</td><td className="num">2.826.323.097,37</td><td className="num">2.937.286.793,58</td></tr>
                            <tr><td>Provisão Matemática Total</td><td className="num">-2.825.942.098,42</td><td className="num">-2.846.145.502,31</td></tr>
                            <tr className="total">
                                <td><strong>Déficit\Superávit</strong></td>
                                <td className="num"><strong>380.998,95</strong></td>
                                <td className="num"><strong>91.141.291,27</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* CTA */}
                <div className="dstq-reveal" style={{ marginTop: '32px', textAlign: 'center' }}>
                    <a href="#" className="dstq-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        Clique aqui para acessar o Parecer Atuarial do Plano BD-01 <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 6B — Equilíbrio Técnico
───────────────────────────────────────────── */
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
                            <span className="eq-integer">2.937.286</span>
                            <span className="eq-decimal">.793,58</span>
                        </div>
                    </div>

                    <div className="eq-card eq-card--prov">
                        <span className="eq-card-label">Provisões Matemáticas</span>
                        <div className="eq-card-number">
                            <span className="eq-currency">R$</span>
                            <span className="eq-integer">2.846.145</span>
                            <span className="eq-decimal">.502,31</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 6b — Premissas Atuariais
───────────────────────────────────────────── */
function SecaoPremissas() {
    return (
        <section id="premissas" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Avaliação Atuarial</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Comportamento das Premissas <span className="dstq-accent">Atuariais</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2" style={{ marginBottom: '12px' }}>
                    Foi realizado o estudo de aderência do Plano BD-01, de modo que foram alteradas as seguintes premissas:
                </p>

                {/* Tabela de premissas */}
                <div className="plano-table-wrap dstq-reveal dstq-reveal--d2">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th colSpan={2}>Hipóteses e Premissas Atuariais</th>
                                <th className="num">Avaliação Atuarial Anual 2025</th>
                                <th className="num">Avaliação Atuarial Anual 2024</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={3} style={{ fontWeight: 600, color: '#0a1f3c' }}>Biométricas</td>
                                <td>Tábua de Mortalidade Geral</td>
                                <td className="num">AT 2012 M &amp; F</td>
                                <td className="num">AT 2012 M &amp; F</td>
                            </tr>
                            <tr>
                                <td>Tábua de Mortalidade de Inválidos</td>
                                <td className="num">CSO 80 M Basic</td>
                                <td className="num">CSO 80 M Basic</td>
                            </tr>
                            <tr>
                                <td>Tábua de Entrada em Invalidez</td>
                                <td className="num">Álvaro Vindas</td>
                                <td className="num">Álvaro Vindas</td>
                            </tr>
                            <tr>
                                <td rowSpan={5} style={{ fontWeight: 600, color: '#0a1f3c' }}>Econômico e Financeiras</td>
                                <td>Taxa Real de Juros</td>
                                <td className="num" style={{ color: '#00aeef', fontWeight: 700 }}>4,90%</td>
                                <td className="num">4,65%</td>
                            </tr>
                            <tr>
                                <td>Crescimento Real de Salários</td>
                                <td className="num">0,00%</td>
                                <td className="num">0,00%</td>
                            </tr>
                            <tr>
                                <td>Índice de Atualização</td>
                                <td className="num">IPCA</td>
                                <td className="num">IPCA</td>
                            </tr>
                            <tr>
                                <td>Taxa de Carregamento</td>
                                <td className="num">2,10%</td>
                                <td className="num">2,10%</td>
                            </tr>
                            <tr>
                                <td>Fator de Capacidade</td>
                                <td className="num">98,44%</td>
                                <td className="num">98,44%</td>
                            </tr>
                            <tr>
                                <td rowSpan={3} style={{ fontWeight: 600, color: '#0a1f3c' }}>Demográficas</td>
                                <td>Taxa de Rotatividade</td>
                                <td className="num">0,00%</td>
                                <td className="num">0,00%</td>
                            </tr>
                            <tr>
                                <td>Composição Familiar</td>
                                <td className="num">Família Média</td>
                                <td className="num">Família Média</td>
                            </tr>
                            <tr>
                                <td>Entrada em Aposentadoria</td>
                                <td className="num" style={{ color: '#00aeef', fontWeight: 700 }}>Postergação de 24 meses para participantes até 60 anos, postergação de 6 meses para participantes entre 60 e 65 anos e que não ocorra postergação após 65 anos.</td>
                                <td className="num">24 meses</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: '28px' }}>
                    Consoante ao quadro supra, destacamos:
                </p>
                <ul className="dstq-reveal dstq-reveal--d3" style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#00aeef', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>•</span>
                        <p className="dstq-text-body dstq-text-body--on-light" style={{ margin: 0 }}>
                            Alteração da <strong style={{ color: '#0a1f3c' }}>Taxa Real de Juros de 4,65% a.a. para 4,90% a.a.</strong>, em consonância com Estudo de Convergência da Taxa Real de Juros de 2025.
                        </p>
                    </li>
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#00aeef', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>•</span>
                        <p className="dstq-text-body dstq-text-body--on-light" style={{ margin: 0 }}>
                            Atualização da premissa de <strong style={{ color: '#0a1f3c' }}>Entrada em Aposentadoria</strong> de 24 meses para "Postergação de 24 meses para participantes até 60 anos, postergação de 6 meses para participantes entre 60 e 65 anos e que não ocorra postergação após 65 anos", em linha com o comportamento observado da postergação da aposentadoria dos Participantes do Plano, em conformidade com o Estudo de Aderência das Premissas e Hipóteses Atuariais 2025.
                        </p>
                    </li>
                </ul>
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



                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th colSpan={4} style={{ textAlign: 'center' }}>Despesas (R$)</th>
                            </tr>
                            <tr>
                                <th>Gestão Própria</th>
                                <th className="num">Gestão Previdencial</th>
                                <th className="num">Gestão de Investimentos</th>
                                <th className="num">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Pessoal e Encargos",                           "4.259.704", "4.803.496", "9.063.201"],
                                ["Treinamento e Viagens",                        "40.026",    "45.136",    "85.162"],
                                ["Serviços de Terceiros",                        "1.501.097", "1.692.726", "3.193.823"],
                                ["Despesas de Consumo, Depreciações, Tafic etc", "439.153",   "495.216",   "934.369"],
                                ["Contingências (PIS e COFINS)",                 "85.885",    "717.503",   "803.388"],
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
                                <td className="num"><strong>6.325.865</strong></td>
                                <td className="num"><strong>7.754.077</strong></td>
                                <td className="num"><strong>14.079.942</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela — Custos com a Gestão dos Planos Previdenciais */}
                <div style={{ marginTop: '40px' }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: '1.3rem', marginBottom: '20px' }}>
                        Custos com a Gestão dos Planos Previdenciais
                    </h3>
                    <div className="plano-table-wrap dstq-reveal">
                        <table className="plano-table">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th className="num">BD-01</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Despesas de Fomento",                           "-"],
                                    ["Pessoal e Encargos",                            "9.063.201"],
                                    ["Treinamentos/Viagens",                          "85.162"],
                                    ["Serviços de Terceiros",                         "3.193.823"],
                                    ["Despesas de Consumo, Depreciação, Tafic, Etc",  "934.369"],
                                    ["Contingências (PIS e COFINS)",                  "803.388"],
                                ].map(([desc, val], i) => (
                                    <tr key={i}><td>{desc}</td><td className="num">{val}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>Sub-Total (Despesas Adm)</strong></td>
                                    <td className="num"><strong>14.079.942</strong></td>
                                </tr>
                                {[
                                    ["Corretagens/Emolumentos Bolsa Valores",         "-"],
                                    ["Taxa Adm/Gestão Fundos Abertos",                "57.548"],
                                    ["Taxa Custódia/Controladoria Fundos Abertos",    "16.712"],
                                    ["Taxa Performance Fundos Abertos",               "-"],
                                    ["Outras Despesas Fundos Abertos",                "117.577"],
                                ].map(([desc, val], i) => (
                                    <tr key={i}><td>{desc}</td><td className="num">{val}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>Sub-Total (Despesas Outras)</strong></td>
                                    <td className="num"><strong>191.837</strong></td>
                                </tr>
                                <tr className="total" style={{ background: 'rgba(0,174,239,0.12)' }}>
                                    <td><strong>TOTAL</strong></td>
                                    <td className="num"><strong>14.271.780</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 8 — Alteração Regulamentar
───────────────────────────────────────────── */
function JustificativaBox() {
    const boxRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const box = boxRef.current;
        const line = lineRef.current;
        if (!box || !line) return;

        gsap.set(box, { opacity: 0, y: 40 });
        gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });

        const trigger = ScrollTrigger.create({
            trigger: box,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                gsap.to(box, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
                gsap.to(line, { scaleY: 1, duration: 0.6, delay: 0.3, ease: 'power2.out' });
            },
        });

        return () => trigger.kill();
    }, []);

    const paragrafos = [
        "A regulamentação que regia o adiantamento de 50% do Abono de Natal para os participantes assistidos do Plano BD-01, preconizava que o adiantamento fosse efetuado de forma integral no mês de julho de cada ano.",
        "Em virtude de uma colaboração entre a Previdência BRB e a Associação dos Funcionários Aposentados e Beneficiários do Banco BRB (AFABRB), foi estabelecido o entendimento comum com vistas a proporcionar pagamento mais diluído e, portanto, com maior equilíbrio financeiro aos participantes.",
        null, // parágrafo especial com destaques
        "De fato, o modelo construído refletiu o compromisso das partes envolvidas com a sustentabilidade do plano e o bem-estar financeiro dos participantes.",
    ];

    return (
        <div ref={boxRef} style={{ marginTop: '36px', display: 'flex', gap: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,116,200,0.18)' }}>
            {/* Barra lateral animada */}
            <div ref={lineRef} style={{ width: '6px', flexShrink: 0, background: 'linear-gradient(to bottom, #00aeef, #0074c8)', borderRadius: '16px 0 0 16px' }} />

            <div style={{ flex: 1, background: 'linear-gradient(135deg, #e8f4ff 0%, #f0f8ff 100%)', padding: '32px 36px' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #00aeef, #0074c8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ color: '#fff', fontSize: '1rem' }}>⚖️</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#0074c8', margin: 0 }}>
                        Justificativa da Alteração
                    </p>
                </div>

                {/* Parágrafos */}
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#1e3a5f', marginBottom: '14px' }}>{paragrafos[0]}</p>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#1e3a5f', marginBottom: '14px' }}>{paragrafos[1]}</p>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#1e3a5f', marginBottom: '14px' }}>
                    Este entendimento resultou na modificação do adiantamento do Abono de Natal, criando a possibilidade de que o adiantamento passasse a ser realizado em dois momentos distintos ao longo do ano. A primeira parcela, correspondente a{' '}
                    <strong style={{ color: '#0074c8', background: 'rgba(0,116,200,0.1)', padding: '1px 6px', borderRadius: '4px' }}>30%</strong>
                    {' '}do valor total do abono, passou a ser paga no mês de{' '}
                    <strong style={{ color: '#0074c8' }}>abril</strong>. A segunda parcela, de{' '}
                    <strong style={{ color: '#0074c8', background: 'rgba(0,116,200,0.1)', padding: '1px 6px', borderRadius: '4px' }}>20%</strong>
                    , ocorreu em{' '}
                    <strong style={{ color: '#0074c8' }}>julho</strong>. Tal divisão proporcionou aos participantes uma gestão mais fluida e equilibrada de seus recursos, ao mesmo tempo em que garantiu o acerto final do benefício, no mês de dezembro.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#1e3a5f', margin: 0 }}>{paragrafos[3]}</p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Seção 8 — Alteração Regulamentar
───────────────────────────────────────────── */
function SecaoRegulamentar() {
    return (
        <section id="regulamentar" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Governança</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Alteração <span className="dstq-accent">Regulamentar</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-chart-box plano-chart-box--light dstq-reveal dstq-reveal--d2">
                    <div className="plano-chart-title">Revisão 18 do Regulamento do Plano BD-01 · Aprovado na 684ª reunião do Conselho Deliberativo, em 28 de janeiro de 2025.</div>

                    <div className="plano-table-wrap" style={{ marginTop: '16px' }}>
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th colSpan={2} style={{ textAlign: 'center' }}>Revisão 18 do Regulamento do Plano BD-01</th>
                                </tr>
                                <tr>
                                    <th>DE</th>
                                    <th>PARA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2} style={{ fontWeight: 600 }}>SEÇÃO V</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ fontWeight: 600 }}>DO ABONO DE NATAL</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Art 56 (...).</td>
                                </tr>
                                <tr>
                                    <td>§ 2º. A Previdência BRB poderá, em julho de cada ano, adiantar o pagamento de 50% (cinquenta por cento) do abono de Natal, para os Participantes e Beneficiários descritos no caput deste artigo.</td>
                                    <td>§ 2º. A Previdência BRB poderá, <strong>até</strong> julho de cada ano, adiantar o pagamento do abono de Natal, <strong>observada a proporcionalidade no mês de adiantamento,</strong> para os Participantes e Beneficiários descritos no caput deste artigo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginTop: '16px', fontSize: '0.9rem' }}>
                        Versão vigente está publicada em:{" "}
                        <a
                            href="https://previdenciabrb.org.br/beneficio-definido-bd-01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0074c8', fontWeight: 600, textDecoration: 'none' }}
                        >
                            https://previdenciabrb.org.br/beneficio-definido-bd-01/
                        </a>
                    </p>
                </div>

                {/* Box justificativa — animado com GSAP */}
                <JustificativaBox />
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

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px" }}>
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
            <SecaoEquilibrio />
            <SecaoAtuarial />
            <SecaoPremissas />
            <SecaoCustos />
            <SecaoRegulamentar />
            <Band quote='"O Plano BD-01 encerrou 2025 com Superávit Técnico Ajustado de R$ 308,2 milhões, representando uma variação favorável de 19,13% em relação a 2024, justificada principalmente pela redução do passivo atuarial."' />

            <SecaoIndicePlanos particlesId="services-particles-bd01" />

            <Footer2 />
        </>
    );
}

export default PlanoBD01;
