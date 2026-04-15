import { Link } from "react-router-dom";
import { Globe, TrendingUp, Landmark } from "lucide-react";
import { useEffect } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import iconPGA from "../../assets/img/pga.svg";
import headerPGAVideo from "../../assets/img/pga.mp4";
import globalImg from "../../assets/img/global.jpg";
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

function SecaoEconomia() {
    return (
        <section id="economia" className="plano-section">
            <div className="container">

                {/* ── Cabeçalho ── */}
                <div className="dstq-section-label dstq-reveal">Contexto Macroeconômico</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Comportamento da Economia global em <span className="dstq-accent">2025</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                {/* ── Hero da imagem ── */}
                <div className="macro-eco-hero dstq-reveal dstq-reveal--d2">
                    <img src={globalImg} alt="Economia Global 2025" />
                    <div className="macro-eco-hero-overlay" />
                </div>

                {/* ── Grade 2×2 de cartões ── */}
                <div className="macro-eco-sections-grid">

                    {/* Cenário Global */}
                    <div className="macro-eco-section-card dstq-reveal">
                        <div className="macro-eco-section-label">
                            <Globe size={15} strokeWidth={2} />
                            Cenário Global
                        </div>
                        <p className="macro-eco-card-text">O ano de 2025 foi marcado por um ambiente macroeconômico global ainda desafiador, caracterizado pela transição do ciclo de aperto monetário nas principais economias e pela manutenção de níveis elevados de incerteza.</p>
                        <p className="macro-eco-card-text">Nos Estados Unidos, o Federal Reserve adotou postura cautelosa ao longo do período, mantendo taxas de juros em patamares restritivos diante de uma inflação que, embora em desaceleração, permaneceu acima da meta. A economia norte-americana demonstrou resiliência, porém com sinais de moderação, levando os mercados a postergarem as expectativas de início de flexibilização monetária.</p>
                        <p className="macro-eco-card-text">Adicionalmente, o ambiente internacional foi impactado por tensões comerciais relevantes, especialmente associadas à política tarifária dos Estados Unidos, elevando a volatilidade e os riscos sobre crescimento e inflação globais. Na Europa, observou-se tendência de flexibilização gradual da política monetária, enquanto a China apresentou crescimento mais moderado, com estímulos menos intensos, reforçando um cenário global de desaceleração controlada.</p>
                    </div>

                    {/* Brasil */}
                    <div className="macro-eco-section-card macro-eco-section-card--brasil dstq-reveal dstq-reveal--d1">
                        <div className="macro-eco-section-label">
                            <span style={{ fontSize: '0.95rem', lineHeight: 1 }}>🇧🇷</span>
                            Brasil
                        </div>
                        <div className="macro-eco-selic-badge">
                            <span className="macro-eco-selic-val">15,00%</span>
                            <span className="macro-eco-selic-lbl">Taxa Selic a.a.</span>
                        </div>
                        <p className="macro-eco-card-text">No Brasil, a atividade econômica manteve-se resiliente ao longo do ano, sustentada principalmente pelo desempenho do setor agropecuário e pela solidez do mercado de trabalho. Contudo, a inflação, apesar de apresentar trajetória de moderação, permaneceu pressionada em seus componentes mais persistentes, exigindo a manutenção de uma política monetária restritiva. Nesse contexto, o Banco Central elevou a taxa Selic para patamares próximos de 15,00%, sinalizando o encerramento do ciclo de alta, com perspectiva de manutenção em nível elevado por período prolongado.</p>
                        <p className="macro-eco-card-text">O cenário fiscal seguiu como principal vetor de risco doméstico, influenciando diretamente a dinâmica das curvas de juros e a percepção de risco dos investidores. As discussões sobre equilíbrio das contas públicas e medidas de ajuste fiscal contribuíram para a manutenção de prêmios elevados nos ativos locais.</p>
                    </div>

                    {/* Mercados Financeiros */}
                    <div className="macro-eco-section-card dstq-reveal dstq-reveal--d1">
                        <div className="macro-eco-section-label">
                            <TrendingUp size={15} strokeWidth={2} />
                            Mercados Financeiros
                        </div>
                        <p className="macro-eco-card-text">Nos mercados financeiros, a renda fixa refletiu a volatilidade das expectativas macroeconômicas, com oscilações relevantes nas curvas de juros ao longo do ano. O ambiente de taxas elevadas proporcionou oportunidades em ativos com prêmios atrativos, ainda que demandando maior seletividade. No crédito privado, observou-se manutenção da demanda e compressão gradual de spreads, reforçando a importância de alocação criteriosa.</p>
                        <p className="macro-eco-card-text">A renda variável apresentou comportamento volátil no cenário global, alternando períodos de recuperação e ajuste, em função das incertezas relacionadas à política monetária e ao crescimento econômico. No Brasil, o desempenho da bolsa foi parcialmente sustentado por fluxos externos, mas limitado pelas incertezas fiscais e pelo nível elevado de juros. No mercado de câmbio, o real apresentou oscilações ao longo do ano, influenciado pelo diferencial de juros e pelo ambiente de risco global e doméstico.</p>
                        <p className="macro-eco-card-text">No campo estrutural, destacaram-se os avanços relacionados à inteligência artificial, com impactos relevantes sobre produtividade e demanda por energia, além de evoluções no ambiente regulatório do mercado de capitais brasileiro, com foco em aprimoramento de governança.</p>
                    </div>

                    {/* Gestão dos Planos */}
                    <div className="macro-eco-section-card dstq-reveal dstq-reveal--d2">
                        <div className="macro-eco-section-label">
                            <Landmark size={15} strokeWidth={2} />
                            Gestão dos Planos
                        </div>
                        <p className="macro-eco-card-text">No âmbito institucional, os planos administrados apresentaram desempenho consistente ao longo do exercício, refletindo a estratégia de alocação adotada em um ambiente de juros elevados e elevada volatilidade. A predominância de ativos de renda fixa, combinada com gestão ativa e seletiva, contribuiu para a captura de prêmios relevantes, especialmente em títulos indexados à inflação e instrumentos de crédito privado. A exposição à renda variável foi conduzida de forma prudente, considerando o cenário de incertezas, enquanto as posições em ativos internacionais e câmbio contribuíram para diversificação e mitigação de riscos.</p>
                        <p className="macro-eco-card-text">Os indicadores consolidados demonstram evolução patrimonial dos planos, com manutenção do equilíbrio atuarial e aderência às metas estabelecidas nas políticas de investimento. Observa-se, ainda, adequada gestão de liquidez e controle de riscos, alinhados às diretrizes regulatórias e à estratégia institucional.</p>
                    </div>

                </div>

                {/* ── Síntese — pull-quote editorial ── */}
                <div className="macro-eco-pullquote dstq-reveal dstq-reveal--d3">
                    <div className="macro-eco-pullquote-mark">"</div>
                    <p>Em síntese, 2025 consolidou um ambiente de transição, no qual a convergência inflacionária, a condução das políticas monetárias e a sustentabilidade fiscal permaneceram como principais condicionantes da dinâmica dos mercados. Esse contexto exigiu abordagem cautelosa e seletiva na alocação de recursos, ao mesmo tempo em que proporcionou oportunidades relevantes em função dos níveis elevados de prêmio de risco observados ao longo do período, refletindo-se de forma positiva na gestão dos recursos dos planos.</p>
                    <span className="macro-eco-pullquote-label">Síntese Macroeconômica 2025</span>
                </div>

            </div>
        </section>
    );
}


function SecaoRentabilidade() {
    const data = {
        labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado (pendente)"],
        datasets: [
            {
                data: [11.51, 8.43, 0],
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
                    O PGA atingiu rentabilidade de 0,25% no acumulado de 2024, frente a uma meta atuarial de 9,02%,
                    o que representa um desempenho de apenas 3% do benchmark, representado por IPCA+4% a.a.
                    A carteira é composta por 100% em ativos de Renda Fixa, com 80% em Títulos Públicos Federais
                    e 68% dos ativos com marcação a mercado.
                </p>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    O ano foi marcado pela alta da Taxa Selic e pela consequente queda dos títulos públicos federais de
                    longo prazo. Para efeito de comparação, o IMA-B 5+ caiu -8,63% no ano. Com a entrada em vigor da
                    Resolução CNPC nº 61, de 11 de dezembro de 2024, a volatilidade da carteira de títulos do PGA
                    tende a ser minimizada nos próximos ciclos.
                </p>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
                    <Bar data={data} options={options} />
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Rentabilidade 2025", value: "11,51%", sub: "Desempenho atual do plano" },
                        { label: "Índice de Referência", value: "8,43%", sub: "IPCA + 4% a.a." },
                        { label: "Desempenho", value: "136,54%", sub: "Rentabilidade / Referencial" },
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

function SecaoCusteioAdministrativo() {
    return (
        <section className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">14.3</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Custeio <span className="dstq-accent">Administrativo</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Para custear as despesas administrativas é cobrada a taxa de carregamento (percentual aplicado
                    sobre as contribuições dos participantes e patrocinadoras) ou a taxa administrativa (percentual
                    aplicado sobre os recursos dos planos).
                </p>

                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    Em 2024, a Previdência BRB, com base em estudos atuariais, adotou as seguintes taxas de
                    carregamento e de administração. Percentuais sujeitos à confirmação final.
                </p>

                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th>Plano</th>
                                <th className="num">Taxa de Carregamento</th>
                                <th className="num">Taxa de Administração</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["BD-01", "2,20% a.m.", "-"],
                                ["CD-02", "-", "0,30% a.a."],
                                ["CV-03", "-", "0,50% a.a."],
                                ["CD-Metrô-DF", "-", "0,50% a.a."],
                                ["CD-05", "3,00% a.m.", "-"],
                                ["BrasíliaPrev", "-", "0,50% a.a."],
                                ["RegiusPrev", "2,95% a.m.", "-"],
                            ].map(([plano, car, adm], i) => (
                                <tr key={i}>
                                    <td>{plano}</td>
                                    <td className="num">{car}</td>
                                    <td className="num">{adm}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function SecaoDesempenhoPlano() {
    const compData = {
        labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado (pendente)"],
        datasets: [
            {
                data: [11.51, 8.43, 0],
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

    return (
        <section id="desempenho" className="plano-section plano-section--dark">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">14.4</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Desempenho do <span className="dstq-accent">Plano</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em 2024, a rentabilidade acumulada foi de 0,25%, equivalente a 3% do benchmark, representado
                    por IPCA+4% a.a. A principal estratégia do Plano está na alocação em títulos públicos indexados
                    à inflação (NTN-B), representando 80% do portfólio de investimentos. Em 2025, o plano registrou
                    evolução dos indicadores e desempenho de 136,54% do referencial.
                </p>

                <div className="plano-kpi-row">
                    {[
                        { label: "Recurso do Plano", value: "R$ 94.149.613" },
                        { label: "Índice de Referência", value: "8,43%" },
                        { label: "Rentabilidade", value: "11,51%" },
                        { label: "Desempenho", value: "136,54%" },
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
            </div>
        </section>
    );
}

function SecaoRateioEInvestimentos() {
    const prevData = {
        labels: ["BD-01", "CD-02", "CV-03", "CD-Metrô-DF", "CD-05", "BrasíliaPrev", "RegiusPrev"],
        datasets: [{ data: [73.02, 1.76, 21.07, 3.11, 0.92, 0.1, 0.01], backgroundColor: ["#00aeef", "#0074c8", "#004282", "#1d4ed8", "#64748b", "#94a3b8", "#cbd5e1"] }],
    };

    const invData = {
        labels: ["BD-01", "CD-02", "CV-03", "CD-Metrô-DF", "CD-05", "BrasíliaPrev", "RegiusPrev"],
        datasets: [{ data: [72.14, 1.78, 21.74, 3.25, 0.97, 0.11, 0.01], backgroundColor: ["#00aeef", "#0074c8", "#004282", "#1d4ed8", "#64748b", "#94a3b8", "#cbd5e1"] }],
    };

    const pieOptions = {
        plugins: {
            legend: { position: "bottom", labels: { color: LIGHT_CHART_OPTS.color } },
        },
    };

    return (
        <section id="investimentos" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">14.5</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Rateio das Despesas e <span className="dstq-accent">Investimentos</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Total Custo Previdencial</div>
                        <div className="plano-kpi-value">R$ 8.663.190</div>
                    </div>
                    <div className="plano-kpi-card plano-kpi-card--light">
                        <div className="plano-kpi-label">Total Custo Investimentos</div>
                        <div className="plano-kpi-value">R$ 10.748.567</div>
                    </div>
                </div>

                <div className="dstq-split" style={{ marginTop: 24 }}>
                    <div className="plano-chart-box plano-chart-box--light" style={{ marginTop: 0 }}>
                        <div className="plano-chart-title">Rateio Custo Previdencial (%)</div>
                        <Pie data={prevData} options={pieOptions} />
                    </div>
                    <div className="plano-chart-box plano-chart-box--light" style={{ marginTop: 0 }}>
                        <div className="plano-chart-title">Rateio Custo Investimentos (%)</div>
                        <Pie data={invData} options={pieOptions} />
                    </div>
                </div>

                <div style={{ marginTop: 40 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Resultados da Política de Investimentos
                    </h3>

                    <div className="plano-table-wrap">
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th>Segmento</th>
                                    <th className="num">Política 2026</th>
                                    <th className="num">Política 2025</th>
                                    <th className="num">Resolução 4.994</th>
                                    <th className="num">Alocação Objetivo 2026</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Renda Fixa", "100,00", "100,00", "100,00", "100,00"],
                                    ["Renda Variável", "-", "-", "70,00", "-"],
                                    ["Estruturado", "5,00", "4,00", "20,00", "-"],
                                    ["Imobiliário", "1,00", "1,00", "20,00", "-"],
                                    ["Operações com Participantes", "-", "-", "15,00", "-"],
                                    ["Exterior", "-", "-", "10,00", "-"],
                                ].map(([seg, a, b, c, d], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ marginTop: 32 }}>
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
                                {[
                                    ["Renda Fixa", "6,69", "4,53", "11,51"],
                                    ["Renda Variável", "-", "-", "-"],
                                    ["Estruturado", "-", "-", "-"],
                                    ["Imobiliário", "-", "-", "-"],
                                    ["Operações com Participantes", "-", "-", "-"],
                                    ["Exterior", "-", "-", "-"],
                                ].map(([seg, a, b, c], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{a}</td><td className="num">{b}</td><td className="num">{c}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">6,69</td>
                                    <td className="num">4,53</td>
                                    <td className="num">11,51</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                                    <td><strong>ÍNDICE DE REFERÊNCIA</strong></td>
                                    <td className="num">5,03</td>
                                    <td className="num">3,24</td>
                                    <td className="num">8,43</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal" style={{ marginTop: 24 }}>
                    Clique aqui para acessar o Demonstrativo Analítico dos Investimentos do Plano PGA – Dezembro/2025.
                </p>
            </div>
        </section>
    );
}

function SecaoEquilibrio() {
    const barData = {
        labels: ["Despesas de Fomento 2024", "Despesas de Fomento 2025"],
        datasets: [{ data: [299813, 0], backgroundColor: ["#0074c8", "#94a3b8"], borderRadius: 6 }],
    };

    const barOptions = {
        plugins: { legend: { display: false } },
        scales: {
            y: { ticks: { color: DARK_CHART_OPTS.color }, grid: { color: DARK_CHART_OPTS.borderColor } },
            x: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
        },
    };

    return (
        <section id="atuarial" className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">14.6</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Equilíbrio Técnico do <span className="dstq-accent">Plano</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    O Fundo Administrativo registra o resultado do movimento de receitas e despesas administrativas
                    dos planos de benefícios. Quando as receitas administrativas são maiores do que as despesas, há
                    constituição do fundo; quando ocorre o inverso, há reversão do fundo administrativo.
                </p>

                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    A Resolução CNPC nº 28/2018 estabelece que entidades com sobras administrativas podem constituir
                    fundo de fomento. Em 2024, os gastos com fomento totalizaram R$ 299.813.
                </p>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Despesas de Fomento (2024)</div>
                        <div className="plano-kpi-value">R$ 299.813</div>
                    </div>
                    <div className="plano-kpi-card">
                        <div className="plano-kpi-label">Despesas de Fomento (2025)</div>
                        <div className="plano-kpi-value">Pendente</div>
                        <div className="plano-kpi-sub">R$ xxxxxxxxxxx</div>
                    </div>
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Evolução das Despesas de Fomento</div>
                    <Bar data={barData} options={barOptions} />
                </div>
            </div>
        </section>
    );
}

function SecaoExecucaoOrcamentaria() {
    const chartData = {
        labels: ["2023", "2024", "2025"],
        datasets: [
            { label: "Despesas Administrativas Realizadas", data: [18491309, 19009306, 19412507], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Despesas Administrativas Orçadas", data: [18723799, 19626338, 20250833], backgroundColor: "#0074c8", borderRadius: 4 },
        ],
    };

    const chartOptions = {
        plugins: { legend: { position: "top", labels: { color: LIGHT_CHART_OPTS.color } } },
        scales: {
            y: { ticks: { color: LIGHT_CHART_OPTS.color }, grid: { color: LIGHT_CHART_OPTS.borderColor } },
            x: { ticks: { color: LIGHT_CHART_OPTS.color }, grid: { display: false } },
        },
    };

    return (
        <section className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">14.7</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Execução <span className="dstq-accent">Orçamentária</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                    As despesas totais realizadas ficaram 3,14% abaixo do valor orçado para 2024,
                    representando uma economia de R$ 617.032 mil.
                </p>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Despesas Administrativas: Realizado vs. Orçado</div>
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
        </section>
    );
}

function SecaoAcompanhamentoDespesas() {
    return (
        <section className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">14.8</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Acompanhamento das Despesas <span className="dstq-accent">X Orçamento</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr><th>Descrição</th><th className="num">Realizado</th><th className="num">Orçado</th><th className="num">%</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Despesas e Contingências", "19.412.507", "20.250.833", "-4,14"],
                                ["Despesas", "18.246.550", "19.095.722", "-4,45"],
                                ["Pessoal e Encargos", "12.418.417", "12.517.713", "-0,79"],
                                ["Serviços de Terceiros", "4.433.314", "4.730.333", "-6,28"],
                                ["Despesas Gerais", "962.223", "1.397.809", "-31,16"],
                                ["Deprec. e Amortizações", "92.041", "101.417", "-9,25"],
                                ["Tributos", "318.450", "318.450", "0,00"],
                                ["Outras Despesas – Administ.", "22.106", "30.000", "-26,31"],
                                ["Contingências", "1.165.956", "1.155.111", "0,94"],
                                ["PIS e COFINS", "1.165.956", "1.155.111", "0,94"],
                            ].map(([a, b, c, d], i) => (
                                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: 40 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Pessoal e Encargos
                    </h3>
                    <div className="plano-table-wrap">
                        <table className="plano-table">
                            <thead>
                                <tr><th>Descrição</th><th className="num">Realizado</th><th className="num">Orçado</th><th className="num">%</th></tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Proventos e Encargos", "12.418.417", "12.517.713", "-0,79"],
                                    ["Proventos", "7.793.999", "7.841.838", "-0,61"],
                                    ["Contratados", "5.281.680", "5.290.440", "-0,17"],
                                    ["Conselhos", "714.188", "730.351", "-2,21"],
                                    ["Dirigentes", "1.798.131", "1.821.047", "-1,26"],
                                    ["Encargos", "4.624.418", "4.675.875", "-1,10"],
                                    ["Contratados", "3.706.989", "3.711.664", "-0,13"],
                                    ["Conselhos", "160.692", "164.329", "-2,21"],
                                    ["Dirigentes", "756.737", "799.882", "-5,39"],
                                ].map(([a, b, c, d], i) => (
                                    <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ marginTop: 40 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Serviços de Terceiros
                    </h3>
                    <div className="plano-table-wrap">
                        <table className="plano-table">
                            <thead>
                                <tr><th>Descrição</th><th className="num">Realizado</th><th className="num">Orçado</th><th className="num">%</th></tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Consultorias e Outros Serviços", "4.433.314", "4.730.333", "-6,28"],
                                    ["Consultorias", "2.963.175", "3.177.728", "-6,75"],
                                    ["Contábil", "58.800", "91.990", "-36,08"],
                                    ["Atuarial", "403.856", "403.856", "0,00"],
                                    ["Administrativa", "97.648", "143.016", "-31,72"],
                                    ["Jurídico", "351.899", "351.899", "0,00"],
                                    ["Comunicação", "210.083", "221.228", "-5,04"],
                                    ["Investimentos", "140.636", "140.636", "0,00"],
                                    ["Análises", "49.791", "49.791", "0,00"],
                                    ["Difusão de Informação", "109.641", "109.641", "0,00"],
                                    ["Controles Internos", "87.814", "91.142", "-3,65"],
                                    ["Informática", "1.062.891", "1.062.891", "0,00"],
                                    ["Compliance", "39.524", "40.169", "-1,61"],
                                    ["Governança", "257.113", "335.469", "-23,36"],
                                    ["Auditoria", "93.480", "136.000", "-31,26"],
                                    ["Outros Serviços", "1.470.139", "1.552.605", "-5,31"],
                                    ["Manutenção/Conservação", "283.962", "311.203", "-8,75"],
                                    ["Estagiários", "39.862", "62.221", "-35,94"],
                                    ["Software", "1.129.445", "1.154.510", "-2,17"],
                                    ["Gestão Documental", "16.870", "24.671", "-31,62"],
                                ].map(([a, b, c, d], i) => (
                                    <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecaoEvolucoes() {
    return (
        <section className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">14.9 - 14.12</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Séries de <span className="dstq-accent">Evolução</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Ano</th><th className="num">Ativo Total</th><th className="num">Despesas</th><th className="num">Despesa / Ativo Total (%)</th><th className="num">Participantes</th><th className="num">Empregados</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["2018", "2.569.827.878", "11.667.906", "0,45", "5.598", "26"],
                                ["2019", "2.821.691.382", "13.273.179", "0,47", "5.518", "30"],
                                ["2020", "3.028.933.524", "13.933.048", "0,46", "5.565", "29"],
                                ["2021", "3.261.700.790", "14.942.400", "0,46", "5.886", "35"],
                                ["2022", "3.528.084.182", "16.558.589", "0,47", "6.291", "39"],
                                ["2023", "3.884.720.164", "17.280.497", "0,44", "6.929", "40"],
                                ["2024", "4.010.627.285", "18.122.922", "0,45", "7.235", "37"],
                                ["2025", "4.352.202.578", "18.246.550", "0,42", "7.619", "36"],
                            ].map(([a, b, c, d, e, f], i) => (
                                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td><td className="num">{e}</td><td className="num">{f}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="plano-table-wrap" style={{ marginTop: 32 }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Ano</th><th className="num">Despesa</th><th className="num">Receitas de Custeio</th><th className="num">Despesa / Receita de Custeio</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["2018", "11.667.906", "12.068.096", "0,97"],
                                ["2019", "13.273.179", "12.399.801", "1,07"],
                                ["2020", "13.933.048", "12.756.397", "1,09"],
                                ["2021", "14.942.400", "12.498.108", "1,20"],
                                ["2022", "16.558.589", "13.417.911", "1,23"],
                                ["2023", "17.280.497", "13.754.293", "1,26"],
                                ["2024", "18.122.922", "13.751.960", "1,32"],
                                ["2025", "18.246.550", "15.141.834", "1,21"],
                            ].map(([a, b, c, d], i) => (
                                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="plano-table-wrap" style={{ marginTop: 32 }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Ano</th><th className="num">Receita</th><th className="num">Nº Participantes</th><th className="num">Receita Per Capita</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["2018", "12.068.096", "5.598", "2.155,79"],
                                ["2019", "12.399.801", "5.518", "2.247,15"],
                                ["2020", "12.756.397", "5.565", "2.292,25"],
                                ["2021", "12.498.108", "5.886", "2.123,36"],
                                ["2022", "13.417.911", "6.291", "2.132,87"],
                                ["2023", "13.754.293", "6.929", "1.985,03"],
                                ["2024", "13.751.960", "7.235", "1.900,75"],
                                ["2025", "15.141.834", "7.619", "1.987,38"],
                            ].map(([a, b, c, d], i) => (
                                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function SecaoCustosFinais() {
    return (
        <section className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">14.13 - 14.14</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Custos de Administração e Gestão <span className="dstq-accent">Previdencial</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Dados não lançados na planilha para os itens: corretagens sobre operações em bolsa, taxa de
                    administração/gestão de fundos abertos, taxa de custódia/controladoria, taxa de performance e
                    outras despesas de fundos abertos.
                </p>

                <div className="plano-table-wrap">
                    <table className="plano-table">
                        <thead>
                            <tr><th>Descrição</th><th className="num">PGA</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Despesas de fomento", "-"],
                                ["Pessoal e encargos", "-"],
                                ["Treinamentos/viagens", "-"],
                                ["Serviços de terceiros", "-"],
                                ["Despesas de consumo, depreciação, tafic, etc", "-"],
                                ["Contingências (PIS e COFINS)", "749"],
                                ["Sub-total (despesas adm)", "749"],
                                ["Corretagens/emolumentos bolsa valores", "-"],
                                ["Taxa adm/gestão fundos abertos", "-"],
                                ["Taxa custódia/controladoria fundos abertos", "-"],
                                ["Taxa performance fundos abertos", "-"],
                                ["Outras despesas fundos abertos", "-"],
                                ["Sub-total (despesas outras)", "-"],
                            ].map(([a, b], i) => (
                                <tr key={i}><td>{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>TOTAL</strong></td>
                                <td className="num">749</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="plano-kpi-row">
                    {[
                        { label: "Demonstrações Contábeis e Notas", value: "Aguardando Material" },
                        { label: "Relatório dos Auditores", value: "Aguardando Material" },
                        { label: "Parecer do Conselho Fiscal", value: "Aguardando Material" },
                        { label: "Manifestação do Conselho Deliberativo", value: "Aguardando Material" },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value" style={{ fontSize: "1.2rem" }}>{k.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PlanoPGA() {
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
                    <source src={headerPGAVideo} type="video/mp4" />
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
                                    # Nossos Planos · Gestão Administrativa
                                </span>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
                                <img src={iconPGA} alt="PGA" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                                <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: 0 }}>
                                    Plano de Gestão Administrativa <span style={{ color: "#00aeef" }}>PGA</span>
                                </h1>
                            </div>

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px", maxWidth: "760px" }}>
                                Estrutura de custeio e suporte administrativo da Previdência BRB, com foco em eficiência,
                                governança de despesas e sustentabilidade operacional.
                            </p>

                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    PGA
                                </li>
                            </ol>

                        </div>
                    </div>

                    {/* Meta strip — full width */}
                    <div className="plano-hero-meta">
                        <div>
                            <div className="plano-hero-meta-value">R$ 94,1 mi</div>
                            <div className="plano-hero-meta-label">Recurso do Plano</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">11,51%</div>
                            <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">136,54%</div>
                            <div className="plano-hero-meta-label">Desempenho</div>
                        </div>
                    </div>
                </div>
            </section>

            <SecaoEconomia />
            <Band quote={'"O PGA registrou evolução em 2025, com rentabilidade de 11,51% e desempenho de 136,54% do índice de referência, mantendo foco em eficiência administrativa e governança de custos."'} />
            <SecaoRentabilidade />
            <SecaoCusteioAdministrativo />
            <SecaoDesempenhoPlano />
            <SecaoRateioEInvestimentos />
            <SecaoEquilibrio />
            <SecaoExecucaoOrcamentaria />
            <SecaoAcompanhamentoDespesas />
            <SecaoEvolucoes />
            <SecaoCustosFinais />
            <Band quote={'"Os blocos com indicação de pendência foram mantidos de forma explícita para validação final dos dados antes da versão definitiva do relatório."'} />

            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-pga" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
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

export default PlanoPGA;
