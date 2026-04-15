import { Link } from "react-router-dom";
import { Globe, TrendingUp, Landmark } from "lucide-react";
import { useEffect, useRef } from "react";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import headerCD02Video from "../../assets/img/cd-02.mp4";
import globalImg from "../../assets/img/global.jpg";
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement,
    Title, Tooltip, Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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


/* ─────────────────────────────────────────────
   Seção 2 — Rentabilidade 2025
───────────────────────────────────────────── */
function SecaoRentabilidade() {
    const data = {
        labels: ["Rentabilidade", "Índice de Referência"],
        datasets: [{
            data: [12.82, 8.43],
            backgroundColor: ["#00aeef", "#0074c8"],
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
                <h6 style={{color: '#555', marginBottom: '8px', fontSize: '0.8rem'}}>fonte: previdência em números dezembro/2025</h6>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                    O Plano CD-02 encerrou 2025 com rentabilidade de 12,82%, representando um desempenho de 152% do seu índice de referência (IPCA + 4,00% a.a.).
                </p>

                <ul className="dstq-reveal dstq-reveal--d3" style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {[
                        "O resultado foi sustentado principalmente pela Renda Fixa, que acumulou 12,84%, com destaque para os títulos públicos, especialmente LFT (14,36%) e NTN-B (11,97%), beneficiados pelo elevado patamar das taxas de juros do mercado.",
                        "Os fundos de renda fixa também apresentaram desempenho consistente, com retorno acumulado de 14,05%, reforçando a estratégia de diversificação, gestão ativa e controle da volatilidade da carteira.",
                    ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <span style={{ color: '#00aeef', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.4, flexShrink: 0 }}>•</span>
                            <p className="dstq-text-body dstq-text-body--on-light" style={{ margin: 0 }}>{item}</p>
                        </li>
                    ))}
                </ul>

                <div className="plano-chart-box plano-chart-box--light">
                    <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
                    <Bar data={data} options={options} />
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
        labels: ["Referencial", "Rentabilidade", "Ganho Real"],
        datasets: [{
            data: [8.44, 12.82, 8.21],
            backgroundColor: ["#0074c8", "#00aeef", "#004282"],
            borderRadius: 6,
        }],
    };
    const compOptions = {
        indexAxis: "y",
        plugins: { legend: { display: false } },
        scales: {
            x: {
                ticks: { callback: (v) => v + "%", color: DARK_CHART_OPTS.color },
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
                    O Plano registrou uma rentabilidade acumulada de 12,82% em 2025, equivalente a 152% do seu índice de referência (IPCA+4,00% a.a.). Esse resultado representa um ganho real (acima da inflação) de 8,21%, sendo o plano de melhor desempenho entre todos os administrados pela Previdência BRB.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 12 }}>
                    O CD-02 possui 64% do seu patrimônio total alocado em NTN-B, com taxa média ponderada de 5,39% a.a. + IPCA.
                </p>

                <div className="plano-kpi-row" style={{ marginTop: 32 }}>
                    {[
                        { label: "Recurso do Plano",              value: "R$ 70.959.586" },
                        { label: "Referencial",                   value: "8,44%" },
                        { label: "Rentabilidade",                 value: "12,82%" },
                        { label: "Ganho Real (acima da inflação)",value: "8,21% a.a." },
                    ].map((k, i) => (
                        <div className="plano-kpi-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="plano-kpi-label">{k.label}</div>
                            <div className="plano-kpi-value">{k.value}</div>
                        </div>
                    ))}
                </div>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Indicadores do Plano · Recurso: R$ 70.959.586</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                {/* Quadro Populacional — redesign pop- */}
                <div className="pop-section dstq-reveal" style={{ marginTop: 60 }}>
                    <div className="pop-hero">
                        <div>
                            <div className="pop-section-label">Quadro Populacional</div>
                            <div className="pop-total-num">221</div>
                            <span className="pop-total-label">participantes em 2025</span>
                            <div className="pop-total-delta">
                                <span className="pop-delta-badge">▼ 10,53%</span>
                                <span className="pop-delta-context">vs. 247 em 2024</span>
                            </div>
                        </div>
                        <div className="pop-closed-tag">
                            <span className="pop-closed-icon">✓</span>
                            <div>
                                <strong>Podem aderir</strong>
                                <span>empregados ativos do BRB e da Previdência BRB, que são participantes do Plano BD-01</span>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bar-wrap dstq-reveal dstq-reveal--d1">
                        <div className="pop-bar-label">Composição do plano</div>
                        <div className="pop-bar">
                            <div className="pop-bar-seg pop-bar-seg--ativos" style={{ width: '67.10%' }}>
                                <span>Ativos</span>
                                <strong>67,10%</strong>
                            </div>
                            <div className="pop-bar-seg pop-bar-seg--assistidos" style={{ width: '32.90%' }}>
                                <span>Assistidos</span>
                                <strong>32,9%</strong>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bottom-grid dstq-reveal dstq-reveal--d2">
                        <div className="pop-card">
                            <div className="pop-card-label">Distribuição por Gênero</div>
                            <div className="pop-gender-bar">
                                <div className="pop-gender-masc" style={{ width: '61.1%' }}>
                                    <span>♂ Masculino</span>
                                    <strong>61,1%</strong>
                                </div>
                                <div className="pop-gender-fem" style={{ width: '33.9%' }}>
                                    <strong>33,9%</strong>
                                    <span>Feminino ♀</span>
                                </div>
                            </div>
                            <div className="pop-gender-legend">
                                <span><i className="pop-dot pop-dot--masc" />Masculino — 61,1%</span>
                                <span><i className="pop-dot pop-dot--fem" />Feminino — 33,9%</span>
                            </div>
                        </div>

                        <div className="pop-card">
                            <div className="pop-card-label">Média de Idade</div>
                            <div className="pop-age-pair">
                                <div className="pop-age-item">
                                    <span className="pop-age-num">60,21</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Ativos</span>
                                </div>
                                <div className="pop-age-divider" />
                                <div className="pop-age-item">
                                    <span className="pop-age-num">62,52</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Assistidos</span>
                                </div>
                            </div>
                        </div>

                        <div className="pop-card pop-card--maturity">
                            <div className="pop-card-label">Maturidade do Plano</div>
                            <div className="pop-maturity-num">32,58%</div>
                            <div className="pop-maturity-bar">
                                <div className="pop-maturity-fill" style={{ width: '32.58%' }} />
                            </div>
                            <span className="pop-maturity-sub">Predominância de participantes ativos</span>
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
                                ["Renda Fixa",                  "100,00", "100,00", "100,00", "98,50"],
                                ["Renda Variável",              "3,00",   "3,00",   "70,00",  "—"],
                                ["Estruturado",                 "5,00",   "5,00",   "20,00",  "1,00"],
                                ["Imobiliário",                 "1,00",   "1,00",   "20,00",  "—"],
                                ["Operações com Participantes", "—",      "—",      "15,00",  "—"],
                                ["Exterior",                    "1,00",   "1,00",   "10,00",  "0,50"],
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
                                    ["Renda Fixa",                  "6,36", "6,09", "12,84"],
                                    ["Renda Variável",              "—",    "—",    "—"],
                                    ["Estruturado",                 "4,24", "0,00", "4,24"],
                                    ["Imobiliário",                 "—",    "—",    "—"],
                                    ["Operações com Participantes", "—",    "—",    "—"],
                                    ["Exterior",                    "—",    "—",    "—"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>PLANO</strong></td>
                                    <td className="num">6,34</td>
                                    <td className="num">6,09</td>
                                    <td className="num">12,82</td>
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
                        <strong>CLIQUE AQUI</strong> para acessar o Demonstrativo Analítico dos Investimentos do Plano CD-02 – Dezembro/2025 <span>→</span>
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
                    Em 2025, houve redução de 17,13% na arrecadação das contribuições ao Plano CD-02, movimento coerente com a diminuição do número de Participantes do Plano, dado o prazo de escolha de pagamento de benefícios e/ou opção pelo resgate. O Plano registrou também uma diminuição de 16,30% no pagamento de benefícios e institutos.
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
                            <tr>
                                <th style={{ minWidth: '260px' }}>Rubrica</th>
                                <th className="num">2024</th>
                                <th className="num">2025</th>
                            </tr>
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

                {/* Tabela Provisões Matemáticas */}
                <div className="plano-table-wrap" style={{ marginTop: 32 }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th style={{ minWidth: '260px' }}>Provisões Matemáticas</th><th className="num">2024</th><th className="num">2025</th></tr>
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

                {/* Tabela Resultado Atuarial */}
                <div className="plano-table-wrap" style={{ marginTop: 32 }}>
                    <table className="plano-table plano-table--light">
                        <thead>
                            <tr><th style={{ minWidth: '260px' }}>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Líquido do Plano",    "R$ 69.381.282,26",  "R$ 70.809.127,92"],
                                ["Provisão Matemática Total", "-R$ 68.656.354,01", "-R$ 69.958.449,64"],
                                ["Fundo Previdencial",        "-R$ 724.928,25",    "-R$ 850.678,28"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Resultado Atuarial</strong></td>
                                <td className="num">R$ 0,00</td>
                                <td className="num">R$ 0,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2" style={{ marginTop: 36 }}>
                    As Provisões Matemáticas dimensionadas em 31 de dezembro de 2025, no montante de R$ 69.958.449,64, comparativamente àquelas constantes de Avaliação Atuarial de 2024, que perfizeram R$ 68.656.354,01, representaram um aumento de aproximadamente 1,90%.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    A variação registrada é justificada pela manutenção de contribuições de participantes e patrocinadores, acrescidas do estoque e respectiva rentabilidade auferida no período, inferior aos montantes de resgate, portabilidade e concessões ocorridas no exercício.
                </p>
                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
                    O Plano de Benefícios CD-02 encerrou o exercício de 2025 com Equilíbrio Técnico econômico e atuarial, registrando, portanto, suficiência de cobertura e solvência.
                </p>

                {/* CTA */}
                <div className="dstq-cta-wrap" style={{ marginTop: 40 }}>
                    <a
                        href="#"
                        className="dstq-cta-btn dstq-cta-btn--light"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                    >
                        Clique aqui para acessar o Parecer Atuarial do Plano CD-02 <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 6b — Equilíbrio Técnico
───────────────────────────────────────────── */
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
                            <span className="eq-integer">69.958.449</span>
                            <span className="eq-decimal">,64</span>
                        </div>
                    </div>
                    <div className="eq-card eq-card--prov">
                        <span className="eq-card-label">Provisões Matemáticas</span>
                        <div className="eq-card-number">
                            <span className="eq-currency">R$</span>
                            <span className="eq-integer">69.958.449</span>
                            <span className="eq-decimal">,64</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 7 — Custos
───────────────────────────────────────────── */
function SecaoCustos() {
    return (
        <section className="plano-section plano-section--dark">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Despesas Administrativas</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Custos com a <span className="dstq-accent">Administração</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em 2025, os custos com a administração do Plano de Benefícios CD-02, formados pelas despesas com a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos conforme demonstrado a seguir:
                </p>

                {/* Tabela 1 — Despesas Gestão */}
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

                {/* Tabela 2 — Custos com a Gestão dos Planos Previdenciais */}
                <div className="plano-table-wrap" style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.4rem", marginBottom: "24px" }}>
                        Custos com a Gestão dos Planos Previdenciais
                    </h3>
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th className="num">CD-02</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Despesas de Fomento",                              "—"],
                                ["Pessoal e Encargos",                               "2.656.919"],
                                ["Treinamentos/Viagens",                             "24.966"],
                                ["Serviços de Terceiros",                            "936.284"],
                                ["Despesas de Consumo, Depreciação, Tafic, etc",    "263.558"],
                                ["Contingências (PIS e COFINS)",                     "279.889"],
                            ].map(([desc, val], i) => (
                                <tr key={i}>
                                    <td>{desc}</td>
                                    <td className="num">{val}</td>
                                </tr>
                            ))}
                            <tr className="total">
                                <td><strong>TOTAL</strong></td>
                                <td className="num">4.161.616</td>
                            </tr>
                            {[
                                ["Corretagens/Emolumentos Bolsa Valores",            "—"],
                                ["Taxa Adm/Gestão Fundos Abertos",                   "25.747"],
                                ["Taxa Custódia/Controladoria Fundos Abertos",       "8.048"],
                                ["Taxa Performance Fundos Abertos",                  "9"],
                                ["Outras Despesas Fundos Abertos",                   "18.328"],
                            ].map(([desc, val], i) => (
                                <tr key={i}>
                                    <td>{desc}</td>
                                    <td className="num">{val}</td>
                                </tr>
                            ))}
                            <tr style={{ background: "rgba(0,174,239,0.06)" }}>
                                <td><strong>Sub-total (Despesas Outras)</strong></td>
                                <td className="num">52.132</td>
                            </tr>
                            <tr className="total">
                                <td><strong>TOTAL GERAL</strong></td>
                                <td className="num">4.213.747</td>
                            </tr>
                        </tbody>
                    </table>
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
                            <div className="plano-hero-meta-value">R$ 70.959.586</div>
                            <div className="plano-hero-meta-label">Patrimônio</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Seções de conteúdo ── */}
            <SecaoEconomia />
            <SecaoRentabilidade />
            <SecaoDesempenho />
            <SecaoInvestimentos />
            <SecaoArrecadacao />
            <SecaoAtuarial />
            <SecaoEquilibrio />
            <SecaoCustos />

            {/* ── Índice de planos ── */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-cd02" className="services-particles-bg" />
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

export default PlanoCD02;
