import { useEffect } from "react";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import WovenLightHero from "../components/ui/woven-light-hero";
import { motion } from "framer-motion";
import { Download, FileText, FileDown, ShieldCheck, BookOpen, BarChart3 } from "lucide-react";

const BASE = "https://previdenciabrb.org.br/wp-content/uploads/2026/04/";

const categories = [
    {
        id: "demonstracoes-atuariais",
        title: "Demonstrações Atuariais",
        color: "#00aeef",
        bg: "rgba(0, 174, 239, 0.1)",
        Icon: BarChart3,
        documents: [
            { label: "Demonstração Atuarial — Plano BD-01",        url: BASE + "demonstracao-atuarial-2025-plano-bd-01.pdf" },
            { label: "Demonstração Atuarial — Plano CD-02",        url: BASE + "demonstracao-atuarial-2025-plano-cd-02.pdf" },
            { label: "Demonstração Atuarial — Plano CV-03",        url: BASE + "demonstracao-atuarial-2025-plano-cv-03.pdf" },
            { label: "Demonstração Atuarial — Plano CD Metrô-DF", url: BASE + "demonstracao-atuarial-2025-plano-cd-metro.pdf" },
            { label: "Demonstração Atuarial — Plano CD-05",        url: BASE + "demonstracao-atuarial-2025-plano-cd-05.pdf" },
            { label: "Demonstração Atuarial — BrasíliaPrev",       url: BASE + "demonstracao-atuarial-2025-plano-brasiliaprev.pdf" },
            { label: "Demonstração Atuarial — RegiusPrev",         url: BASE + "demonstracao-atuarial-2025-plano-regiusprev.pdf" },
        ],
    },
    {
        id: "pareceres-atuariais",
        title: "Pareceres Atuariais",
        color: "#5454FF",
        bg: "rgba(84, 84, 255, 0.1)",
        Icon: ShieldCheck,
        documents: [
            { label: "Parecer Atuarial — Plano BD-01",        url: BASE + "parecer-atuarial-exercicio-2025-bd-01-previdencia-brb.pdf" },
            { label: "Parecer Atuarial — Plano CV-03",        url: BASE + "parecer-atuarial-exercicio-2025-cv-03-previdencia-brb.pdf" },
            { label: "Parecer Atuarial — Plano CD Metrô-DF", url: BASE + "parecer-atuarial-exercicio-2025-cd-metro-previdencia-brb.pdf" },
            { label: "Parecer Atuarial — Plano CD-05",        url: BASE + "parecer-atuarial-exercicio-2025-cd-05-previdencia-brb.pdf" },
            { label: "Parecer Atuarial — BrasíliaPrev",       url: BASE + "parecer-atuarial-exercicio-2025-brasiliaprev-previdencia.pdf" },
            { label: "Parecer Atuarial — RegiusPrev",         url: BASE + "parecer-atuarial-exercicio-2025-regiusprev-previdencia-brb.pdf" },
        ],
    },
    {
        id: "conselhos",
        title: "Pareceres e Manifestações dos Conselhos",
        color: "#0074c8",
        bg: "rgba(0, 116, 200, 0.1)",
        Icon: BookOpen,
        documents: [
            { label: "Parecer do Conselho Fiscal — Exercício 2025",              url: BASE + "parecer-conselhofiscal-exercicio-2025.pdf" },
            { label: "Manifestação do Conselho Deliberativo — Exercício 2025",   url: BASE + "manifestacao-conselhodeliberativo-exercicio-2025.pdf" },
        ],
    },
    {
        id: "auditoria-notas",
        title: "Auditoria e Notas Explicativas",
        color: "#021935",
        bg: "rgba(2, 25, 53, 0.07)",
        Icon: FileText,
        documents: [
            { label: "Relatório do Auditor Independente — 2025",            url: BASE + "relatorio-do-auditor-previdencia-brb-2025.pdf" },
            { label: "Notas Explicativas às Demonstrações Contábeis — 2025", url: BASE + "notas-explicativas-as-demonstracoes-contabeis-2025.pdf" },
        ],
    },
];

const Anexos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="anexos-page">
            <Header2 />

            <WovenLightHero
                title="Anexos"
                label="Transparência e Governança"
                subtitle="Acesse a lista completa de demonstrações atuariais, pareceres, notas explicativas e relatórios de auditoria da Previdência BRB."
                buttonText="Ver documentos"
                onButtonClick={() => {
                    const section = document.getElementById("anexos-list");
                    section?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                height="68vh"
            />

            {/* DOCUMENT LIST SECTION */}
            <section id="anexos-list" className="anexos-list" style={{ padding: "60px 0 80px", background: "#f8fafc" }}>
                <div className="container">
                    {categories.map((cat, catIdx) => (
                        <div key={cat.id} style={{ marginBottom: catIdx < categories.length - 1 ? "56px" : 0 }}>

                            {/* Category header */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: 0.05 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "14px",
                                    marginBottom: "28px",
                                    paddingBottom: "18px",
                                    borderBottom: `2px solid ${cat.color}22`,
                                }}
                            >
                                <div style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "12px",
                                    background: cat.bg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: cat.color,
                                    flexShrink: 0,
                                }}>
                                    <cat.Icon size={22} />
                                </div>
                                <h2 style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    color: "#021935",
                                    margin: 0,
                                    letterSpacing: "-0.01em",
                                }}>
                                    {cat.title}
                                </h2>
                                <span style={{
                                    marginLeft: "auto",
                                    fontSize: "0.8rem",
                                    fontWeight: "600",
                                    color: cat.color,
                                    background: cat.bg,
                                    padding: "4px 12px",
                                    borderRadius: "20px",
                                    whiteSpace: "nowrap",
                                }}>
                                    {cat.documents.length} {cat.documents.length === 1 ? "documento" : "documentos"}
                                </span>
                            </motion.div>

                            {/* Documents grid */}
                            <div className="row">
                                {cat.documents.map((doc, index) => (
                                    <div className="col-lg-6 col-md-12 mb-4" key={index}>
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: index * 0.05 }}
                                            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                                            style={{
                                                background: "#fff",
                                                borderRadius: "18px",
                                                padding: "26px 28px",
                                                border: "1px solid rgba(0,0,0,0.05)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "20px",
                                                height: "100%",
                                                boxShadow: "0 4px 18px rgba(0,0,0,0.03)",
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            {/* Icon */}
                                            <div style={{
                                                width: "52px",
                                                height: "52px",
                                                borderRadius: "14px",
                                                background: cat.bg,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: cat.color,
                                                flexShrink: 0,
                                            }}>
                                                <cat.Icon size={26} />
                                            </div>

                                            {/* Label */}
                                            <div style={{ flex: 1 }}>
                                                <h3 style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "700",
                                                    color: "#021935",
                                                    marginBottom: "6px",
                                                    lineHeight: "1.4",
                                                }}>
                                                    {doc.label}
                                                </h3>
                                                <span style={{ fontSize: "0.82rem", color: "#64748b", display: "flex", alignItems: "center", gap: "5px" }}>
                                                    <FileDown size={13} /> PDF · Exercício 2025
                                                </span>
                                            </div>

                                            {/* Download button */}
                                            <motion.a
                                                href={doc.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                style={{
                                                    width: "46px",
                                                    height: "46px",
                                                    borderRadius: "12px",
                                                    background: "linear-gradient(135deg, #021935 0%, #0a3a7a 100%)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    boxShadow: "0 6px 15px rgba(2, 25, 53, 0.15)",
                                                    cursor: "pointer",
                                                    flexShrink: 0,
                                                }}
                                                title="Baixar Documento"
                                            >
                                                <Download size={18} />
                                            </motion.a>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer2 />

            <style jsx="true">{`
                .anexos-page {
                    font-family: 'Sora', sans-serif;
                }
                @media (max-width: 768px) {
                    #anexos-list {
                        padding-top: 40px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Anexos;
