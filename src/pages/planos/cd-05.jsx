import { Link } from "react-router-dom";
import SecaoEconomia from "../../components/ui/SecaoEconomia";
import SecaoIndicePlanos from "../../components/ui/SecaoIndicePlanos";
import { useEffect, useState } from "react";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
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
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

import { motion, AnimatePresence } from "framer-motion";

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
    return (
        <section id="rentabilidade" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Resultados 2025</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Rentabilidade <span className="dstq-accent">2025</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2" style={{ marginBottom: '20px' }}>
                    O Plano CD-05 encerrou 2025 com rentabilidade de <strong style={{ color: '#0a1f3c' }}>12,28%</strong>, superando com folga o índice de referência de <strong style={{ color: '#0a1f3c' }}>8,44%</strong> (IPCA + 4,00% a.a.), o que evidencia desempenho consistente ao longo do exercício.
                </p>

                <ul className="dstq-reveal dstq-reveal--d3" style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {[
                        "A Renda Fixa manteve papel estruturante da carteira, com retorno de 11,97%, impulsionada por LFTs (+14,38%), NTN-B (+11,56%) e fundos de renda fixa com desempenho superior ao CDI.",
                        "Já as Letras Financeiras Perpétuas (LFSC) emitidas pelo BRB, que representam 1,24% do patrimônio total do CD-05, sofreram desvalorização expressiva no mês de dezembro (-1,96%), em decorrência do rebaixamento do rating do Banco. Não obstante, no acumulado de 12 meses, as LFSC do BRB tiveram uma valorização de 12,93%, o que representa 153% em relação ao índice de referência do Plano.",
                        "A Renda Variável teve contribuição relevante, acumulando 28,54%, com destaque para os fundos AZ Quest Small Mid Caps (+31,09%) e Guepardo (+25,81%), refletindo maior exposição ao ciclo econômico doméstico.",
                        "O segmento estruturado/multimercados apresentou retorno consistente de 13,64%, enquanto as operações com participantes se destacaram com 17,01%, bem acima do benchmark.",
                        "No consolidado, o CD-05 combinou diversificação, retorno elevado e aderência ao perfil do plano, com resultado ajustado ao risco favorável aos participantes.",
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

function SecaoDesempenho() {
    const compData = {
        labels: ["Referencial", "Rentabilidade", "Ganho Real"],
        datasets: [{
            label: "%",
            data: [8.44, 12.28, 7.69],
            backgroundColor: ["rgba(0,116,200,0.85)", "rgba(0,174,239,0.9)", "rgba(72,199,142,0.9)"],
            borderRadius: 6,
        }],
    };
    const compOptions = {
        indexAxis: "y",
        plugins: {
            legend: { display: false },
            datalabels: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            x: {
                ticks: { callback: (v) => v + "%", color: DARK_CHART_OPTS.color },
                grid: { color: DARK_CHART_OPTS.borderColor },
                max: 15,
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

                {/* Textos */}
                <div className="dstq-reveal dstq-reveal--d2" style={{ marginBottom: '32px' }}>
                    <p className="dstq-text-body" style={{ marginBottom: '12px' }}>
                        O Plano registrou uma rentabilidade acumulada de <strong style={{ color: '#00aeef' }}>12,28%</strong> em 2025, equivalente a <strong style={{ color: '#00aeef' }}>145%</strong> do seu índice de referência (IPCA+4,00% a.a.). Esse resultado representa um ganho real (acima da inflação) de <strong style={{ color: '#00aeef' }}>7,69%</strong>, incrementando os ganhos para a constituição da reserva de aposentadoria dos seus participantes.
                    </p>
                    <p className="dstq-text-body">
                        O CD-05 possui <strong style={{ color: '#00aeef' }}>78%</strong> do seu patrimônio total alocado em NTN-B, com taxa média ponderada de <strong style={{ color: '#00aeef' }}>7,15% a.a. + IPCA</strong>.
                    </p>
                </div>

                {/* Gráfico horizontal */}
                <div className="plano-chart-box">
                    <div className="plano-chart-title">Indicadores do Plano · Recurso: R$ 53.938.255</div>
                    <Bar data={compData} options={compOptions} />
                </div>

                {/* Quadro Populacional — pop- */}
                <div className="pop-section dstq-reveal" style={{ marginTop: 60 }}>
                    <div className="pop-hero">
                        <div>
                            <div className="pop-section-label">Quadro Populacional</div>
                            <div className="pop-total-num">1.171</div>
                            <span className="pop-total-label">participantes em 2025</span>
                            <div className="pop-total-delta">
                                <span className="pop-delta-badge">▲ 30,26%</span>
                                <span className="pop-delta-context">vs. 899 em 2024</span>
                            </div>
                        </div>
                        <div className="pop-closed-tag" style={{ background: 'rgba(0,174,239,0.1)', borderColor: 'rgba(0,174,239,0.2)' }}>
                            <span className="pop-closed-icon" style={{ background: '#00aeef' }}>✓</span>
                            <div>
                                <strong style={{ color: '#00aeef' }}>Plano aberto</strong>
                                <span style={{ color: 'rgba(255,255,255,0.7)' }}>para novas adesões</span>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bar-wrap dstq-reveal dstq-reveal--d1">
                        <div className="pop-bar-label">Composição do plano</div>
                        <div className="pop-bar">
                            <div className="pop-bar-seg pop-bar-seg--ativos" style={{ width: '99.83%' }}>
                                <span>Ativos</span>
                                <strong>99,83%</strong>
                            </div>
                            <div className="pop-bar-seg pop-bar-seg--assistidos" style={{ width: '0.17%' }}>
                                <span>Assistidos</span>
                                <strong>0,17%</strong>
                            </div>
                        </div>
                    </div>

                    <div className="pop-bottom-grid dstq-reveal dstq-reveal--d2">
                        <div className="pop-card">
                            <div className="pop-card-label">Distribuição por Gênero</div>
                            <div className="pop-gender-bar">
                                <div className="pop-gender-masc" style={{ width: '65.33%' }}>
                                    <span>♂ Masculino</span>
                                    <strong>65,33%</strong>
                                </div>
                                <div className="pop-gender-fem" style={{ width: '34.67%' }}>
                                    <strong>34.67%</strong>
                                    <span>Feminino ♀</span>
                                </div>
                            </div>
                            <div className="pop-gender-legend">
                                <span><i className="pop-dot pop-dot--masc" />Masculino — 65,33%</span>
                                <span><i className="pop-dot pop-dot--fem" />Feminino — 34,67%</span>
                            </div>
                        </div>

                        <div className="pop-card">
                            <div className="pop-card-label">Média de Idade</div>
                            <div className="pop-age-pair">
                                <div className="pop-age-item">
                                    <span className="pop-age-num">36,62</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Ativos</span>
                                </div>
                                <div className="pop-age-divider" />
                                <div className="pop-age-item">
                                    <span className="pop-age-num">69,53</span>
                                    <span className="pop-age-lbl">anos</span>
                                    <span className="pop-age-tag">Assistidos</span>
                                </div>
                            </div>
                        </div>

                        <div className="pop-card pop-card--maturity">
                            <div className="pop-card-label">Maturidade do Plano</div>
                            <div className="pop-maturity-num">0,17%</div>
                            <div className="pop-maturity-bar">
                                <div className="pop-maturity-fill" style={{ width: '0.17%' }} />
                            </div>
                            <span className="pop-maturity-sub">Predominância de participantes ativos</span>
                        </div>
                    </div>

                    <div className="dstq-reveal" style={{ marginTop: 32 }}>
                        <p className="dstq-text-body" style={{ opacity: 0.8, fontSize: '0.95rem' }}>
                            Todos os novos empregados do BRB, da Saúde BRB, da BRBCARD, da CEASA-DF, da ANEABRB e da própria Previdência BRB podem aderir ao Plano CD-05.
                        </p>
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
            ["Renda Fixa",                  "100,00", "100,00", "100,00", "91,78"],
            ["Renda Variável",              "10,00",  "30,00",  "70,00",  "1,65"],
            ["Estruturado",                 "10,00",  "20,00",  "20,00",  "1,13"],
            ["Imobiliário",                 "5,00",   "2,00",   "20,00",  "0,38"],
            ["Operações com Participantes", "10,00",  "10,00",  "15,00",  "4,25"],
            ["Exterior",                    "10,00",  "10,00",  "10,00",  "0,83"],
        ],
        conservador: [
            ["Renda Fixa",                  "100,00", "100,00", "100,00", "95,00"],
            ["Renda Variável",              "5,00",   "5,00",   "70,00",  "-"],
            ["Estruturado",                 "5,00",   "5,00",   "20,00",  "-"],
            ["Imobiliário",                 "2,00",   "2,00",   "20,00",  "-"],
            ["Operações com Participantes", "10,00",  "10,00",  "15,00",  "5,00"],
            ["Exterior",                    "4,00",   "4,00",   "10,00",  "-"],
        ],
        moderado: [
            ["Renda Fixa",                  "100,00", "100,00", "100,00", "87,00"],
            ["Renda Variável",              "10,00",  "10,00",  "70,00",  "2,00"],
            ["Estruturado",                 "10,00",  "10,00",  "20,00",  "5,00"],
            ["Imobiliário",                 "5,00",   "2,00",   "20,00",  "2,00"],
            ["Operações com Participantes", "10,00",  "-",      "15,00",  "-"],
            ["Exterior",                    "10,00",  "10,00",  "10,00",  "4,00"],
        ],
        arrojado: [
            ["Renda Fixa",                  "100,00", "100,00", "100,00", "60,00"],
            ["Renda Variável",              "30,00",  "30,00",  "70,00",  "20,00"],
            ["Estruturado",                 "15,00",  "20,00",  "20,00",  "10,00"],
            ["Imobiliário",                 "10,00",  "10,00",  "20,00",  "3,00"],
            ["Operações com Participantes", "5,00",   "5,00",   "15,00",  "-"],
            ["Exterior",                    "10,00",  "10,00",  "10,00",  "7,00"],
        ],
    };

    return (
        <section id="investimentos" className="plano-section plano-section--light">
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal">Alocação de Recursos</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                    Resultado da Política de <span className="dstq-accent">Investimentos</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                {/* Abas de perfil */}
                <div className="dstq-reveal" style={{ marginBottom: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[
                        ["consolidado", "Plano Consolidado"],
                        ["conservador", "Perfil Conservador"],
                        ["moderado",    "Perfil Moderado"],
                        ["arrojado",    "Perfil Arrojado"],
                    ].map(([key, label]) => (
                        <button key={key} type="button" onClick={() => setPerfilAtivo(key)} style={{
                            padding: "8px 16px", borderRadius: 8, fontWeight: 600, fontSize: "0.82rem", cursor: "pointer",
                            border: perfilAtivo === key ? "1px solid #0074c8" : "1px solid #dbe3ee",
                            background: perfilAtivo === key ? "#0074c8" : "#fff",
                            color: perfilAtivo === key ? "#fff" : "#0a1f3c",
                        }}>{label}</button>
                    ))}
                </div>

                {/* Tabela política com animação */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={perfilAtivo}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="plano-table-wrap dstq-reveal is-visible"
                    >
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th rowSpan={2} style={{ minWidth: '200px' }}>Segmento</th>
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
                                {tabelas[perfilAtivo].map(([seg, p26, p25, res, aloc], i) => (
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
                    </motion.div>
                </AnimatePresence>

                {/* Tabela resultado */}
                <div style={{ marginTop: 48 }}>
                    <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
                        Resultado dos Investimentos
                    </h3>
                    <div className="plano-table-wrap dstq-reveal">
                        <table className="plano-table plano-table--light">
                            <thead>
                                <tr>
                                    <th rowSpan={2} style={{ minWidth: '200px' }}>Segmento</th>
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
                                    ["Renda Fixa",                  "6,39",  "5,25", "11,97"],
                                    ["Renda Variável",              "15,93", "10,87","28,54"],
                                    ["Estruturado",                 "6,91",  "6,30", "13,64"],
                                    ["Imobiliário",                 "-",     "-",    "-"],
                                    ["Operações com Participantes", "10,01", "6,36", "17,01"],
                                    ["Exterior",                    "-",     "-",    "-"],
                                ].map(([seg, s1, s2, total], i) => (
                                    <tr key={i}><td>{seg}</td><td className="num">{s1}</td><td className="num">{s2}</td><td className="num">{total}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>Plano</strong></td>
                                    <td className="num">6,58</td>
                                    <td className="num">5,35</td>
                                    <td className="num">12,28</td>
                                </tr>
                                <tr style={{ background: "rgba(0,174,239,0.07)" }}>
                                    <td><strong>Índice de Referência</strong></td>
                                    <td className="num">5,03</td>
                                    <td className="num">3,24</td>
                                    <td className="num">8,44</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* CTA Demonstrativo Analítico */}
                    <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dstq-reveal"
                        whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,116,200,0.12)' }}
                        whileTap={{ scale: 0.99 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                            marginTop: '32px',
                            padding: '24px 32px',
                            borderRadius: '16px',
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 116, 200, 0.15)',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '14px',
                            background: 'linear-gradient(135deg, #0074c8 0%, #00aeef 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: '0 6px 16px rgba(0, 116, 200, 0.25)'
                        }}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p style={{ 
                                margin: 0, 
                                color: '#0a1f3c', 
                                fontSize: '1.05rem', 
                                lineHeight: '1.5',
                                fontWeight: '500'
                            }}>
                                <strong style={{ color: '#0074c8', fontWeight: '800' }}>CLIQUE AQUI</strong> para acessar o Demonstrativo Analítico dos Investimentos do Plano CD-05 – Dezembro/2025
                            </p>
                        </div>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(0,116,200,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0074c8',
                            fontSize: '1.2rem',
                            transition: 'all 0.3s ease'
                        }}>
                            →
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

function SecaoArrecadacao() {
    const fluxData = {
        labels: ["2023", "2024", "2025"],
        datasets: [
            { label: "Arrecadação",          data: [9065015, 11976829, 15117462], backgroundColor: "#00aeef", borderRadius: 4 },
            { label: "Benefícios/Institutos", data: [1895446, 1229946,  2323791],  backgroundColor: "#0074c8", borderRadius: 4 },
        ],
    };

    const fluxOptions = {
        plugins: {
            legend: { position: "top", labels: { color: DARK_CHART_OPTS.color } },
            tooltip: { callbacks: { label: (ctx) => ` ${ctx.dataset.label}: R$ ${ctx.raw.toLocaleString("pt-BR")}` } },
            datalabels: { display: false },
        },
        scales: {
            y: {
                ticks: { callback: (v) => "R$ " + (v / 1000000).toFixed(1) + "M", color: DARK_CHART_OPTS.color },
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
                    Em 2025, houve elevação de <strong style={{ color: '#00aeef' }}>26,22%</strong> na arrecadação das contribuições ao Plano CD-05. O pagamento de Benefícios e/ou opção pelo resgate aumentou <strong style={{ color: '#00aeef' }}>88,93%</strong> no comparativo com o ano anterior.
                </p>

                <div className="plano-chart-box">
                    <div className="plano-chart-title">Evolução Arrecadação vs. Benefícios/Institutos</div>
                    <Bar data={fluxData} options={fluxOptions} />
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

                {/* Tabela 1 — Ativo Líquido */}
                <div className="plano-table-wrap dstq-reveal">
                    <table className="plano-table plano-table--light" style={{ tableLayout: 'fixed' }}>
                        <colgroup><col /><col style={{ width: '22%' }} /><col style={{ width: '22%' }} /></colgroup>
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Total",                              "37.139.191,09",  "54.870.121,03"],
                                ["Exigível Operacional",                     "-20.787,08",     "-28.971,52"],
                                ["Fundos (Administrativo e Investimento)",   "-817.484,10",    "-938.539,79"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Ativo Líquido do Plano</strong></td>
                                <td className="num"><strong>36.300.919,91</strong></td>
                                <td className="num"><strong>53.902.609,72</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela 2 — Provisões Matemáticas */}
                <div className="plano-table-wrap dstq-reveal" style={{ marginTop: '24px' }}>
                    <table className="plano-table plano-table--light" style={{ tableLayout: 'fixed' }}>
                        <colgroup><col /><col style={{ width: '22%' }} /><col style={{ width: '22%' }} /></colgroup>
                        <thead>
                            <tr><th>Provisões Matemáticas</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Provisão Matemática de Benefício Concedido",  "236.862,48",    "277.671,60"],
                                ["Provisão Matemática de Benefício a Conceder", "33.977.837,82", "50.932.212,96"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Provisão Matemática Total</strong></td>
                                <td className="num"><strong>34.214.700,30</strong></td>
                                <td className="num"><strong>51.209.884,56</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela 3 — Resultado Atuarial */}
                <div className="plano-table-wrap dstq-reveal" style={{ marginTop: '24px' }}>
                    <table className="plano-table plano-table--light" style={{ tableLayout: 'fixed' }}>
                        <colgroup><col /><col style={{ width: '22%' }} /><col style={{ width: '22%' }} /></colgroup>
                        <thead>
                            <tr><th>Rubrica</th><th className="num">2024</th><th className="num">2025</th></tr>
                        </thead>
                        <tbody>
                            {[
                                ["Ativo Líquido do Plano",    "36.300.919,91",   "53.902.609,72"],
                                ["Provisão Matemática Total", "-34.214.700,30",  "-51.209.884,56"],
                                ["Fundo Previdencial",        "-2.086.219,61",   "-2.692.725,16"],
                            ].map(([r, a, b], i) => (
                                <tr key={i}><td>{r}</td><td className="num">{a}</td><td className="num">{b}</td></tr>
                            ))}
                            <tr className="total">
                                <td><strong>Resultado Atuarial</strong></td>
                                <td className="num"><strong>0,00</strong></td>
                                <td className="num"><strong>0,00</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Textos Atuariais */}
                <div className="dstq-reveal dstq-reveal--d2" style={{ marginTop: '32px' }}>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginBottom: '14px' }}>
                        As Provisões Matemáticas dimensionadas em 31 de dezembro de 2025, no montante de <strong style={{ color: '#0a1f3c' }}>R$ 51.209.884</strong>, comparativamente àquelas constantes de Avaliação Atuarial de 2024, que perfizeram <strong style={{ color: '#0a1f3c' }}>R$ 34.214.700,30</strong>, representaram uma variação de aproximadamente <strong style={{ color: '#0a1f3c' }}>49,67%</strong>.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light" style={{ marginBottom: '14px' }}>
                        A variação registrada é justificada pelo incremento no quantitativo de participantes, pela manutenção de contribuições, acrescidas do estoque e respectiva rentabilidade auferida no período, superior aos montantes de resgates, portabilidades e concessões ocorridas no exercício.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        O Plano de Benefícios CD-05 encerrou o exercício de 2025 com <strong style={{ color: '#0a1f3c' }}>Equilíbrio Técnico econômico e atuarial</strong>, registrando, portanto, suficiência de cobertura e solvência.
                    </p>
                </div>

                {/* CTA Parecer Atuarial */}
                <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dstq-reveal"
                    whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,116,200,0.12)' }}
                    whileTap={{ scale: 0.99 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        marginTop: '32px',
                        padding: '24px 32px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 116, 200, 0.15)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    }}
                >
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #0074c8 0%, #00aeef 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 6px 16px rgba(0, 116, 200, 0.25)'
                    }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <circle cx="12" cy="14" r="3"></circle>
                            <path d="M12 11v3h3"></path>
                        </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{ 
                            margin: 0, 
                            color: '#0a1f3c', 
                            fontSize: '1.05rem', 
                            lineHeight: '1.5',
                            fontWeight: '500'
                        }}>
                            <strong style={{ color: '#0074c8', fontWeight: '800' }}>CLIQUE AQUI</strong> para acessar o Parecer Atuarial do Plano CD-05 Arquivo anexo
                        </p>
                    </div>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(0,116,200,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0074c8',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s ease'
                    }}>
                        →
                    </div>
                </motion.a>
            </div>
        </section>
    );
}
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
                            <span className="eq-integer">51.209.884</span>
                            <span className="eq-decimal">,56</span>
                        </div>
                    </div>

                    <div className="eq-card eq-card--prov">
                        <span className="eq-card-label">Provisões Matemáticas</span>
                        <div className="eq-card-number">
                            <span className="eq-currency">R$</span>
                            <span className="eq-integer">51.209.884</span>
                            <span className="eq-decimal">,56</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function SecaoCustos() {
    return (
        <section className="plano-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Despesas Administrativas</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Custos com a <span className="dstq-accent">Administração</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                <p className="dstq-text-body dstq-reveal" style={{ marginBottom: '32px' }}>
                    Em 2025, os custos com a administração do Plano de Benefícios CD-05, formados pelas despesas com a gestão previdencial e a gestão de investimentos do Plano, foram distribuídos conforme demonstrado a seguir:
                </p>

                {/* Tabela 1 — Despesas Gestão */}
                <div className="plano-table-wrap dstq-reveal">
                    <table className="plano-table">
                        <thead>
                            <tr>
                                <th colSpan={4} style={{ textAlign: 'center' }}>Despesas (R$)</th>
                            </tr>
                            <tr>
                                <th style={{ minWidth: '220px' }}>Gestão Própria</th>
                                <th className="num">Gestão Previdencial</th>
                                <th className="num">Gestão de Investimentos</th>
                                <th className="num">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Pessoal e Encargos",                           "54.530",  "61.491", "116.021"],
                                ["Treinamento e Viagens",                        "512",     "578",    "1.090"],
                                ["Serviços de Terceiros",                        "19.216",  "21.669", "40.885"],
                                ["Despesas de Consumo, Depreciações, Tafic etc", "5.529",   "6.235",  "11.764"],
                                ["Contingências (PIS e COFINS)",                 "91",      "3.937",  "13.946"],
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
                                <td className="num"><strong>79.797</strong></td>
                                <td className="num"><strong>103.910</strong></td>
                                <td className="num"><strong>183.707</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Tabela 2 — Custos com a Gestão dos Planos Previdenciais */}
                <div style={{ marginTop: '40px' }}>
                    <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: '1.3rem', marginBottom: '20px' }}>
                        Custos com a Gestão dos Planos Previdenciais
                    </h3>
                    <div className="plano-table-wrap dstq-reveal">
                        <table className="plano-table">
                            <thead>
                                <tr>
                                    <th style={{ minWidth: '260px' }}>Descrição</th>
                                    <th className="num">CD-05</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Despesas de Fomento",                          "-"],
                                    ["Pessoal e Encargos",                           "116.021"],
                                    ["Treinamentos/Viagens",                         "1.090"],
                                    ["Serviços de Terceiros",                        "40.885"],
                                    ["Despesas de Consumo, Depreciação, Tafic, Etc", "11.764"],
                                    ["Contingências (PIS e COFINS)",                 "13.946"],
                                ].map(([desc, val], i) => (
                                    <tr key={i}><td>{desc}</td><td className="num">{val}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>Total</strong></td>
                                    <td className="num"><strong>183.707</strong></td>
                                </tr>
                                {[
                                    ["Corretagens/Emolumentos Bolsa Valores",        "-"],
                                    ["Taxa Adm/Gestão Fundos Abertos",               "12.733"],
                                    ["Taxa Custódia/Controladoria Fundos Abertos",   "1.602"],
                                    ["Taxa Performance Fundos Abertos",              "11.172"],
                                    ["Outras Despesas Fundos Abertos",               "1.303"],
                                ].map(([desc, val], i) => (
                                    <tr key={i}><td>{desc}</td><td className="num">{val}</td></tr>
                                ))}
                                <tr className="total">
                                    <td><strong>Sub-Total (Despesas Outras)</strong></td>
                                    <td className="num"><strong>26.810</strong></td>
                                </tr>
                                <tr className="total" style={{ background: 'rgba(0,174,239,0.12)' }}>
                                    <td><strong>TOTAL</strong></td>
                                    <td className="num"><strong>210.516</strong></td>
                                </tr>
                            </tbody>
                        </table>
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

                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px" }}>
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
            <SecaoEquilibrio />
            <SecaoCustos />
            <Band quote={'"O Plano CD-05 encerrou 2025 com Equilíbrio Técnico atuarial, rentabilidade de 12,28% e crescimento expressivo de 30,26% no número de participantes, consolidando sua expansão."'} />

            <SecaoIndicePlanos particlesId="services-particles-cd05" />

            <Footer2 />
        </>
    );
}

export default PlanoCD05;
