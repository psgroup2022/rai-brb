import { Link } from "react-router-dom";
import { Globe, TrendingUp, Landmark } from "lucide-react";
import { useEffect } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import iconCV03 from "../../assets/img/cv03.svg";
import headerCV03Video from "../../assets/img/cv-03.mp4";
import globalImg from "../../assets/img/global.jpg";
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement,
    Title, Tooltip, Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        labels: ["Rentabilidade", "Índice de Referência"],
        datasets: [{
            data: [12.18, 8.43],
            backgroundColor: ["#00aeef", "#0074c8"],
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
                <h6 style={{color: '#555', marginBottom: '8px', fontSize: '0.8rem'}}>fonte: previdência em números dezembro/2025</h6>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <ul className="plano-bullets dstq-reveal dstq-reveal--d2">
                    <li>O Plano CV-03 apresentou rentabilidade de 12,18% em 2025, superando com folga o índice de referência (IPCA + 4,00% a.a.), refletindo o adequado equilíbrio entre ativos conservadores e de maior exposição ao risco.</li>
                    <li>A Renda Fixa manteve papel estabilizador da carteira, com retorno de 12,03%, sustentada principalmente por títulos públicos indexados à inflação e por fundos de renda fixa com desempenho consistente.</li>
                    <li>Já as Letras Financeiras Subordinadas (LFS e LFSC) emitidas pelo BRB, que representam 4,17% do patrimônio total do CV-03, sofreram desvalorização expressiva no mês de dezembro (-5,27%), em decorrência do rebaixamento do <em>rating</em> do Banco. Não obstante, no acumulado de 12 meses, as Letras Financeiras do BRB tiveram uma valorização de 9,65%, superando a meta atuarial do Plano.</li>
                    <li>O principal destaque do plano em 2025 foi a Renda Variável, que acumulou expressivos 35,96%, superando o Ibovespa (33,95%), com contribuições relevantes de ações como Itaú, Copel, Vale e B3, além do fundo de ações Guepardo, que registrou 25,81%.</li>
                    <li>O segmento estruturado/multimercados contribuiu de forma positiva, ainda que pontual.</li>
                    <li>Por outro lado, o imobiliário apresentou desempenho negativo (-9,98%), impactado por reavaliações patrimoniais do FII SIA Corporate, que ainda está em fase de reestruturação, após a migração para um novo gestor.</li>
                    <li>Outro destaque importante é o resultado do Plano CV-03, que fechou o ano com um superávit de R$ 8,21 milhões, melhorando substancialmente o seu índice de solvência atuarial. Esse superávit representa um crescimento de 51,43% em relação ao registrado em 2024 e foi constituído pelo resultado dos investimentos e pela mudança na taxa de juros do plano, que passou de 4% para 4,5% a.a.</li>
                    <li>No consolidado, a carteira de investimentos do CV-03 evidenciou menor volatilidade, com retorno ajustado ao risco favorável, compatível com seu perfil e horizonte de longo prazo, dado que 92% da sua carteira é composta por NTN-B com marcação na curva, com taxa média de IPCA +6,74% a.a. Essa composição deve garantir uma estabilidade de resultado ao longo dos próximos anos.</li>
                </ul>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </section>
    );
}

function SecaoDesempenho() {
    const compData = {
        labels: ["Referencial", "Rentabilidade", "Ganho Real"],
        datasets: [{
            data: [8.44, 12.18, 7.60],
            backgroundColor: ["#0074c8", "#00aeef", "#004282"],
            borderRadius: 6,
        }],
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

    return (
        <section id="desempenho" className="plano-section plano-section--dark">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Performance do Plano</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Desempenho do <span className="dstq-accent">Plano</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    O Plano registrou uma rentabilidade acumulada de 12,18% em 2025, equivalente a 144% da sua meta atuarial (IPCA+4,00% a.a.), representando um ganho real (acima da inflação) de 7,60%.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 12 }}>
                    O CV-03 possui 92% do seu patrimônio total alocado em NTN-B, com taxa média ponderada de 6,74% a.a. + IPCA.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 12 }}>
                    O Plano encerrou o ano com um superávit técnico acumulado de R$ 8,21 milhões.
                </p>

                <div className="plano-kpi-row" style={{ marginTop: 32 }}>
                    {[
                        { label: "Recurso do Plano",              value: "R$ 1.000.663.024" },
                        { label: "Meta Atuarial",                 value: "8,44%" },
                        { label: "Rentabilidade",                 value: "12,18%" },
                        { label: "Ganho Real (acima da inflação)", value: "7,60% a.a." },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Indicadores do Plano · Recurso: R$ 1.000.663.024</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                {/* Quadro Populacional — pop- */}
                <div className="pop-section dstq-reveal" style={{ marginTop: 60 }}>
                    <div className="pop-hero">
                        <div>
                            <div className="pop-section-label">Quadro Populacional</div>
                            <div className="pop-total-num">2.351</div>
                            <span className="pop-total-label">participantes em 2025</span>
                            <div className="pop-total-delta">
                                <span className="pop-delta-badge">▼ 1,43%</span>
                                <span className="pop-delta-context">vs. 2.385 em 2024</span>
                            </div>
                        </div>
                        <div className="pop-closed-tag">
                            <span className="pop-closed-icon">✓</span>
                            <div>
                                <strong>Plano fechado</strong>
                                <span>para novas adesões desde 2023</span>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bar-wrap dstq-reveal dstq-reveal--d1">
                        <div className="pop-bar-label">Composição do plano</div>
                        <div className="pop-bar">
                            <div className="pop-bar-seg pop-bar-seg--ativos" style={{ width: '95.66%' }}>
                                <span>Ativos</span>
                                <strong>95,66%</strong>
                            </div>
                            <div className="pop-bar-seg pop-bar-seg--assistidos" style={{ width: '4.34%' }}>
                                <span>Assistidos</span>
                                <strong>4,34%</strong>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bottom-grid dstq-reveal dstq-reveal--d2">
                        <div className="pop-card">
                            <div className="pop-card-label">Distribuição por Gênero</div>
                            <div className="pop-gender-bar">
                                <div className="pop-gender-masc" style={{ width: '57.29%' }}>
                                    <span>♂ Masculino</span>
                                    <strong>57,29%</strong>
                                </div>
                                <div className="pop-gender-fem" style={{ width: '42.71%' }}>
                                    <strong>42,71%</strong>
                                    <span>Feminino ♀</span>
                                </div>
                            </div>
                            <div className="pop-gender-legend">
                                <span><i className="pop-dot pop-dot--masc" />Masculino — 57,29%</span>
                                <span><i className="pop-dot pop-dot--fem" />Feminino — 42,71%</span>
                            </div>
                        </div>

                        <div className="pop-card">
                            <div className="pop-card-label">Média de Idade</div>
                            <div className="pop-age-pair">
                                <div className="pop-age-item">
                                    <span className="pop-age-num">43,60</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Ativos</span>
                                </div>
                                <div className="pop-age-divider" />
                                <div className="pop-age-item">
                                    <span className="pop-age-num">62,50</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Assistidos</span>
                                </div>
                            </div>
                        </div>

                        <div className="pop-card pop-card--maturity">
                            <div className="pop-card-label">Maturidade do Plano</div>
                            <div className="pop-maturity-num">2,34%</div>
                            <div className="pop-maturity-bar">
                                <div className="pop-maturity-fill" style={{ width: '2.34%' }} />
                            </div>
                            <span className="pop-maturity-sub">Predominância de participantes ativos</span>
                        </div>
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
                                <th className="num" colSpan="2">Política Investimento</th>
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
                                ["Renda Fixa",                  "100,00", "100,00", "100,00", "95,00"],
                                ["Renda Variável",              "15,00",  "15,00",  "70,00",  "1,00"],
                                ["Estruturado",                 "8,00",   "8,00",   "20,00",  "—"],
                                ["Imobiliário",                 "1,00",   "1,00",   "20,00",  "—"],
                                ["Operações com Participantes", "10,00",  "10,00",  "15,00",  "1,50"],
                                ["Exterior",                    "4,00",   "4,00",   "10,00",  "2,50"],
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

                {/* Tabela — Resultados dos Investimentos */}
                <div style={{ marginTop: 48 }}>
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
                                    ["Renda Fixa",                  "7,22",  "4,49",  "12,03"],
                                    ["Renda Variável",              "19,83", "13,46", "35,96"],
                                    ["Estruturado",                 "5,19",  "0,00",  "5,19"],
                                    ["Imobiliário",                 "-1,36", "-8,74", "-9,98"],
                                    ["Operações com Participantes", "4,67",  "6,14",  "11,09"],
                                    ["Exterior",                    "—",     "—",     "—"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">7,27</td>
                                    <td className="num">4,58</td>
                                    <td className="num">12,18</td>
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

                {/* CTA */}
                <div className="dstq-cta-wrap" style={{ marginTop: 40 }}>
                    <a
                        href="#"
                        className="dstq-cta-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                    >
                        <strong>CLIQUE AQUI</strong> para acessar o Demonstrativo Analítico dos Investimentos do Plano CV-03 – Dezembro/2025 <span>→</span>
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
    return (
        <section id="atuarial" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Situação Atuarial</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado <span className="dstq-accent">Atuarial</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                {/* Tabela Ativo Líquido */}
                <div className="plano-table-wrap">
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Total",                             "R$ 844.911.940,82",  "R$ 1.015.500.627,60"],
                                ["Exigível Operacional",                   "-R$ 400.854,32",     "-R$ 504.776,41"],
                                ["Fundos (Administrativo e Investimento)", "-R$ 13.371.149,15",  "-R$ 15.340.453,30"],
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

                {/* Tabela Provisões Matemáticas */}
                <div className="plano-table-wrap" style={{ marginTop: 32 }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Provisões Matemáticas</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Provisão Matemática de Benefício Concedido",  "R$ 23.112.439,34",  "R$ 31.481.835,54"],
                                ["Provisão Matemática de Benefício a Conceder", "R$ 772.347.259,37", "R$ 924.775.606,06"],
                                ["Provisão Matemática a Constituir",            "-R$ 253.343,70",    "-R$ 189.495,63"],
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

                {/* Tabela Resultado Atuarial */}
                <div className="plano-table-wrap" style={{ marginTop: 32 }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Líquido do Plano",           "R$ 831.139.937,35",  "R$ 999.655.397,89"],
                                ["Provisão Matemática Total",        "-R$ 795.206.355,01", "-R$ 956.067.945,97"],
                                ["Fundo Previdencial",               "-R$ 30.508.480,11",  "-R$ 35.372.138,40"],
                                ["Superávit (Reserva de Contingência)", "R$ 5.425.102,23", "R$ 7.202.138,12"],
                                ["Reserva Especial",                 "R$ 0,00",            "R$ 1.013.175,40"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2" style={{ marginTop: 36 }}>
                    Cotejando o Patrimônio de Cobertura do Plano em 31 de dezembro de 2025, no montante de R$ 964.283.259,49 com as Provisões Matemáticas, no mesmo período, de R$ 956.067.945,97, o Plano CV-03 registrou Superávit Técnico de R$ 8.215.313,52.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    Uma vez observada a <em>Duration</em> do passivo, apurada em 13,4221 pontos, conforme Resolução PREVIC nº 23, de 14 de agosto de 2023, o valor do limite da Reserva de Contingência, em 31 de dezembro de 2025, foi de R$ 7.202.138,12, sendo o restante, R$ 1.013.175,40 alocado em Reserva Especial para Revisão de Plano, cabendo registrar que este é o primeiro ano de apuração da referida reserva.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    Comparativamente ao Resultado de 31 de dezembro de 2024, o Superávit Técnico, no montante de R$ 5.425.102,23, apresentou uma elevação de aproximadamente 51,43%, influenciado, principalmente, pela alteração das premissas atuariais do Plano cujo impacto de redução do passivo atuarial conjugado com rentabilidade observada no Plano, superior à meta atuarial.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    O Plano CV-03 encerrou o exercício de 2025 com Superávit Técnico, registrando, portanto, suficiência de cobertura e solvência Econômica e Atuarial.
                </p>

                {/* CTA */}
                <div className="dstq-cta-wrap" style={{ marginTop: 40 }}>
                    <a
                        href="#"
                        className="dstq-cta-btn dstq-cta-btn--light"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                    >
                        Clique aqui para acessar o Parecer Atuarial do Plano CV-03 <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

function SecaoEquilibrio() {
    return (
        <section id="equilibrio" className="plano-section plano-section--dark">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Equilíbrio do Plano</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Equilíbrio Técnico <span className="dstq-accent">do Plano</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                <div className="eq-grid dstq-reveal dstq-reveal--d2">
                    <div className="eq-card eq-card--pat">
                        <span className="eq-card-label">Patrimônio de Cobertura</span>
                        <div className="eq-card-number">
                            <span className="eq-currency">R$</span>
                            <span className="eq-integer">964.283.259</span>
                            <span className="eq-decimal">,49</span>
                        </div>
                    </div>
                    <div className="eq-card eq-card--prov">
                        <span className="eq-card-label">Provisões Matemáticas</span>
                        <div className="eq-card-number">
                            <span className="eq-currency">R$</span>
                            <span className="eq-integer">956.067.945</span>
                            <span className="eq-decimal">,97</span>
                        </div>
                    </div>
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
                    Foi realizado o estudo de aderência do Plano CV-03, de modo que foram alteradas as seguintes premissas:
                </p>

                <div className="plano-kpi-row">
                    <div className="plano-kpi-card" style={{ transitionDelay: "0s" }}>
                        <div className="plano-kpi-label">Taxa de Crescimento Real dos Salários</div>
                        <div className="plano-kpi-value">1,67%</div>
                        <div className="plano-kpi-sub">Anterior: 2,73%</div>
                    </div>
                    <div className="plano-kpi-card" style={{ transitionDelay: "0.08s" }}>
                        <div className="plano-kpi-label">Taxa Real de Juros</div>
                        <div className="plano-kpi-value">4,50% a.a.</div>
                        <div className="plano-kpi-sub">Anterior: 4,00% a.a.</div>
                    </div>
                </div>

                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 24 }}>
                    Destaca-se a alteração da Taxa de Crescimento Real dos Salários para 1,67%, em substituição a taxa de 2,73%, face os estudos de aderências que comprovaram a redução histórica dentro dos intervalos de confiança dos respectivos testes.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    Também se observa a alteração da premissa de Taxa Real de Juros de 4,00% a.a. para 4,50% a.a., em consonância com Estudo de Convergência da Taxa Real de Juros de 2025.
                </p>
            </div>
        </section>
    );
}

function SecaoCustos() {
    return (
        <section className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Despesas Administrativas</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Custos com a <span className="dstq-accent">Administração</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                    Em 2025, os custos com a administração do Plano de Benefícios CV-03, formados pelas despesas com a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos conforme demonstrado a seguir:
                </p>

                {/* Tabela 1 — Despesas Gestão */}
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
                                ["Pessoal e Encargos",                            "1.248.752", "1.408.167", "2.656.919"],
                                ["Treinamento e Viagens",                         "11.734",    "13.232",    "24.966"],
                                ["Serviços de Terceiros",                         "440.053",   "496.231",   "936.284"],
                                ["Despesas de Consumo, Depreciações, Tafic etc", "123.872",   "139.685",   "263.558"],
                                ["Contingências (PIS e COFINS)",                  "842",       "279.047",   "279.889"],
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

                {/* Tabela 2 — Custos com a Gestão dos Planos Previdenciais */}
                <div className="plano-table-wrap" style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem", marginBottom: "24px" }}>
                        Custos com a Gestão dos Planos Previdenciais
                    </h3>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th className="num">CV-03</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Despesas de Fomento",                              "—"],
                                ["Pessoal e Encargos",                               "222.097"],
                                ["Treinamentos/Viagens",                             "2.087"],
                                ["Serviços de Terceiros",                            "78.266"],
                                ["Despesas de Consumo, Depreciação, Tafic, etc",    "21.891"],
                                ["Contingências (PIS e COFINS)",                     "19.478"],
                            ].map(([desc, val], i) => (
                                <tr key={i}>
                                    <td>{desc}</td>
                                    <td className="num">{val}</td>
                                </tr>
                            ))}
                            <tr className="total">
                                <td><strong>TOTAL</strong></td>
                                <td className="num">343.820</td>
                            </tr>
                            {[
                                ["Corretagens/Emolumentos Bolsa Valores",            "—"],
                                ["Taxa Adm/Gestão Fundos Abertos",                   "38.167"],
                                ["Taxa Custódia/Controladoria Fundos Abertos",       "12.609"],
                                ["Taxa Performance Fundos Abertos",                  "23"],
                                ["Outras Despesas Fundos Abertos",                   "7.247"],
                            ].map(([desc, val], i) => (
                                <tr key={i}>
                                    <td>{desc}</td>
                                    <td className="num">{val}</td>
                                </tr>
                            ))}
                            <tr style={{ background: "rgba(0,174,239,0.06)" }}>
                                <td><strong>Sub-total (Despesas Outras)</strong></td>
                                <td className="num">58.045</td>
                            </tr>
                            <tr className="total">
                                <td><strong>TOTAL GERAL</strong></td>
                                <td className="num">401.865</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: 44 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.35rem" }}>
                        Mudança no Custeio Previdencial
                    </h3>
                    <p className="dstq-text-body dstq-text-body--on-light dstq-reveal" style={{ marginTop: 10 }}>
                        No Plano CV-03, o desconto da contribuição de Risco da contribuição patronal passou para uma alíquota de <strong style={{ color: "#0a1f3c" }}>0,189%</strong>.
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

                        </div>
                    </div>

                    {/* Meta strip — full width */}
                    <div className="plano-hero-meta">
                        <div>
                            <div className="plano-hero-meta-value">12,18%</div>
                            <div className="plano-hero-meta-label">Rentabilidade 2025</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">144%</div>
                            <div className="plano-hero-meta-label">vs. Meta Atuarial</div>
                        </div>
                        <div>
                            <div className="plano-hero-meta-value">R$ 1,0 bi</div>
                            <div className="plano-hero-meta-label">Patrimônio</div>
                        </div>
                    </div>
                </div>
            </section>

            <SecaoEconomia />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoEquilibrio />
            <SecaoPremissas />
            <SecaoCustos />

            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-cv03" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            Conheça os Planos da <span className="services-index-accent">Previdência BRB</span>
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
