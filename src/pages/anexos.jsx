import { useEffect } from "react";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import ParticlesComponent from "../components/ui/particles-bg";
import { motion } from "framer-motion";
import { Download, FileText, FileDown, ShieldCheck } from "lucide-react";

/**
 * Função para limpar o nome do arquivo conforme solicitado:
 * - Ignora números iniciais (hashes)
 * - Ignora números finais, versões (v1, v2) e sufixos (-final, -assinado)
 * - Formata com espaços e Capitalization
 */
const cleanFileName = (rawName) => {
    const low = rawName.toLowerCase();
    
    // Mapeamento Direto das Regras do Usuário
    if (low.includes("demonstracao") && low.includes("atuarial")) {
        if (low.includes("bd-01")) return "Demonstração Atuarial - Plano BD-01";
        if (low.includes("cd-02")) return "Demonstração Atuarial - Plano CD-02";
        if (low.includes("cv-03")) return "Demonstração Atuarial - Plano CV-03";
        if (low.includes("cd-metro")) return "Demonstração Atuarial - Plano CD Metrô-DF";
        if (low.includes("cd-05")) return "Demonstração Atuarial - Plano CD-05";
        if (low.includes("brasiliaprev")) return "Demonstração Atuarial - BrasíliaPrev";
        if (low.includes("regiusprev")) return "Demonstração Atuarial - RegiusPrev";
    }
    
    if (low.includes("parecer-atuarial") || (low.includes("parecer") && low.includes("atuarial"))) {
        if (low.includes("bd-01")) return "Parecer Atuarial - BD-01";
        if (low.includes("cd-02")) return "Parecer Atuarial - CD-02";
        if (low.includes("cv-03")) return "Parecer Atuarial - CV-03";
        if (low.includes("cd-metro")) return "Parecer Atuarial - CD Metrô-DF";
        if (low.includes("cd-05")) return "Parecer Atuarial - CD-05";
        if (low.includes("regiusprev")) return "Parecer Atuarial - RegiusPrev";
        if (low.includes("brasiliaprev")) return "Parecer Atuarial - BrasíliaPrev";
    }

    if (low.includes("notas-explicativas")) return "Notas Explicativas";
    if (low.includes("relatorio-do-auditor")) return "Relatório do Auditor Independente";
    if (low.includes("parecer-cofis")) return "Parecer do Conselho Fiscal";
    if (low.includes("manifestacao-conde")) return "Parecer do Conselho Deliberativo";

    // Fallback para nomes não mapeados
    let name = rawName;
    while (name.match(/^[a-z0-9]{8,}-/i)) name = name.replace(/^[a-z0-9]{8,}-/i, "");
    name = name.replace(/\.pdf$/i, "").replace(/-/g, " ");
    return name.trim().charAt(0).toUpperCase() + name.trim().slice(1);
};

const documentList = [
    "177608968069dcfa50e8a05-demonstracao-atuarial-2025-plano-cv-03-2000002511.pdf",
    "177608968069dcfa50eb12f-demonstracao-atuarial-2025-plano-regiusprev-2021003574.pdf",
    "177608968069dcfa50ebdcb-demonstracao-atuarial-2025-plano-bd-01-1985000792.pdf",
    "177608968069dcfa50ec6ed-demonstracao-atuarial-2025-plano-brasiliaprev-2020001829.pdf",
    "177608968069dcfa50ed6c5-demonstracao-atuarial-2025-plano-cd-02-2012001718.pdf",
    "177608968069dcfa50ee24e-demonstracao-atuarial-2025-plano-cd-05-2017000183.pdf",
    "177608968069dcfa50eecca-demonstracao-atuarial-2025-plano-cd-metro-2014002118.pdf",
    "177608968069dcfa50ef74e-notas-explicativas-as-demonstracoes-contabeis-2025-final.pdf",
    "177608968069dcfa50f0a8d-relatorio-do-auditor-previdencia-brb-2025-assinado.pdf",
    "177608968069dcfa50f1586-log-parecer-cofis-exercicio-2025.pdf",
    "177608968069dcfa50f2094-log-manifestacao-conde-exercicio-2025-v3.pdf",
    "177608968069dcfa50f2abc-parecer-atuarial-exercicio-2025-cd-05-v2.pdf",
    "177608968069dcfa50f37c6-parecer-atuarial-exercicio-2025-brasiliaprev-v2.pdf",
    "177608968069dcfa50f49d2-parecer-atuarial-exercicio-2025-bd-01.pdf",
    "177608968069dcfa50f5a11-parecer-atuarial-exercicio-2025-cd-metro.pdf"
];

const Anexos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="anexos-page">
            <Header2 />
            
            {/* HERO SECTION */}
            <section className="anexos-hero" style={{ 
                padding: "130px 0 60px", 
                background: "#021935", 
                position: "relative",
                overflow: "hidden"
            }}>
                <ParticlesComponent />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ 
                            color: "#00aeef", 
                            fontWeight: "700", 
                            textTransform: "uppercase", 
                            letterSpacing: "2px",
                            fontSize: "0.8rem",
                            display: "block",
                            marginBottom: "10px"
                        }}>
                            Transparência e Governança
                        </span>
                        <h1 style={{ 
                            color: "#fff", 
                            fontSize: "2.8rem", 
                            fontWeight: "800",
                            marginBottom: "15px",
                            lineHeight: "1.1"
                        }}>
                            Anexos e <span style={{ color: "#00aeef" }}>Documentos</span>
                        </h1>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem" }}>
                            Acesse aqui a lista completa de demonstrações atuariais, pareceres, notas explicativas e relatórios de auditoria da Previdência BRB.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* DOCUMENT LIST SECTION */}
            <section className="anexos-list" style={{ padding: "60px 0", background: "#f8fafc" }}>
                <div className="container">
                    <div className="row">
                        {documentList.map((doc, index) => {
                            const cleanName = cleanFileName(doc);
                            const isParecer = cleanName.toLowerCase().includes("parecer");
                            const isAtuarial = cleanName.toLowerCase().includes("atuarial");
                            
                            return (
                                <div className="col-lg-6 col-md-12 mb-4" key={index}>
                                    <motion.div 
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                                        style={{
                                            background: "#fff",
                                            borderRadius: "20px",
                                            padding: "30px",
                                            border: "1px solid rgba(0,0,0,0.04)",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "25px",
                                            height: "100%",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                                            transition: "all 0.3s ease"
                                        }}
                                    >
                                        <div style={{
                                            width: "65px",
                                            height: "65px",
                                            borderRadius: "16px",
                                            background: isAtuarial ? "rgba(0, 174, 239, 0.1)" : isParecer ? "rgba(84, 84, 255, 0.1)" : "rgba(2, 25, 53, 0.05)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: isAtuarial ? "#00aeef" : isParecer ? "#5454FF" : "#021935",
                                            flexShrink: 0
                                        }}>
                                            {isParecer ? <ShieldCheck size={32} /> : <FileText size={32} />}
                                        </div>
                                        
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ 
                                                fontSize: "1.15rem", 
                                                fontWeight: "700", 
                                                color: "#021935",
                                                marginBottom: "8px",
                                                lineHeight: "1.4"
                                            }}>
                                                {cleanName}
                                            </h3>
                                            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                                                <span style={{ fontSize: "0.85rem", color: "#64748b", display: "flex", alignItems: "center", gap: "5px" }}>
                                                    <FileDown size={14} /> PDF
                                                </span>
                                                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
                                                    Exercicio 2025
                                                </span>
                                            </div>
                                        </div>

                                        <motion.a
                                            href={`/downloads/${doc}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "12px",
                                                background: "linear-gradient(135deg, #021935 0%, #0a3a7a 100%)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#fff",
                                                boxShadow: "0 6px 15px rgba(2, 25, 53, 0.15)",
                                                cursor: "pointer"
                                            }}
                                            title="Baixar Documento"
                                        >
                                            <Download size={20} />
                                        </motion.a>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer2 />

            <style jsx="true">{`
                .anexos-page {
                    font-family: 'Sora', sans-serif;
                }
                .anexos-hero h1 {
                    font-family: 'Sora', sans-serif;
                }
                @media (max-width: 768px) {
                    .anexos-hero {
                        padding: 140px 0 70px !important;
                    }
                    .anexos-hero h1 {
                        font-size: 2.5rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Anexos;
