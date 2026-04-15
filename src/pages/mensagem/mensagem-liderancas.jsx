import { Link } from "react-router-dom";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import { IMAGES } from "../../constant/theme";

function MensagemLiderancas() {
    const resumoCards = [
        {
            value: '7.619',
            label: 'Total de Participantes',
        },
        {
            value: 'XX,XX%',
            label: 'Rentabilidade média dos Planos em 2025 (ao ano)',
        },
        {
            value: 'XXª',
            label: 'No ranking de xxx EFPC da ABRAPP',
        },
        {
            value: '0,42%',
            label: 'Relação de despesas/ Ativo Total Administrado',
        },
        {
            value: '210,3',
            label: 'milhões de reais em contribuições recebidas',
        },
        {
            value: '285,5',
            label: 'milhões de reais em benefícios pagos',
        },
    ];

    return (
        <>
            <Header2 />

            {/* Page Hero Banner */}
            <section
                className="hero-section hero-style-two"
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                    }}
                >
                    <source src={IMAGES.liderancaVideo} type="video/mp4" />
                </video>
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(1, 24, 52, 0.65)',
                        zIndex: 1,
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px', paddingBottom: '40px' }}>
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div style={{ marginBottom: '12px' }}>
                                <span style={{
                                    color: '#00aeef',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                }}>
                                    # Governança
                                </span>
                            </div>
                            <h1 style={{
                                color: '#fff',
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '700',
                                lineHeight: '1.2',
                                marginBottom: '16px',
                            }}>
                                Mensagem das <span style={{ color: '#00aeef' }}>Lideranças</span>
                            </h1>
                            <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: 'transparent' }}>
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                    style={{ color: '#00aeef' }}
                                >
                                    Mensagem das Lideranças
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="gap" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">

                            {/* Section label */}
                            <div style={{ marginBottom: '40px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    marginBottom: '24px',
                                }}>
                                    <div style={{
                                        width: '4px',
                                        height: '48px',
                                        background: 'linear-gradient(180deg, #00aeef 0%, #004282 100%)',
                                        borderRadius: '2px',
                                        flexShrink: 0,
                                    }} />
                                    <div>
                                        <span style={{
                                            display: 'block',
                                            color: '#00aeef',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            letterSpacing: '2.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '4px',
                                        }}>
                                            Relatório Anual 2025
                                        </span>
                                        <h2 style={{
                                            color: '#011834',
                                            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                                            fontWeight: '700',
                                            margin: 0,
                                        }}>
                                            Mensagem da Diretoria Executiva
                                        </h2>
                                    </div>
                                </div>

                                {/* Decorative divider */}
                                <div style={{
                                    height: '1px',
                                    background: 'linear-gradient(90deg, #00aeef 0%, rgba(0,174,239,0.1) 100%)',
                                    marginBottom: '40px',
                                }} />
                            </div>

                            {/* Message content */}
                            <div className="mensagem-content" style={{
                                fontSize: '17px',
                                lineHeight: '1.85',
                                color: '#2d3748',
                            }}>
                                <p style={{ marginBottom: '28px' }}>
                                    O ano de 2024 foi marco de transformação para a Previdência BRB. Consolidamos nossa marca e estabelecemos uma parceria com ABRAPP – Associação Brasileira das Entidades Fechadas de Previdência Complementar para uma atuação mais efetiva em todo o território nacional. Atingimos o patrimônio de quase R$4 bilhões e mais de 7.200 participantes. Isso demonstra a confiança dos nossos públicos e reforça o compromisso com a sustentabilidade dos nossos planos e a entrega de valor a cada um dos nossos participantes.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    Vivemos um período desafiador no cenário econômico, com forte oscilação na renda fixa, o que afetou temporariamente os resultados de alguns planos. Ainda assim, mantivemos a solidez dos planos e apresentamos superávit no Plano BD-01 e CV-03, consequentemente, reforçando a confiança da nossa comunidade previdenciária. Essa resiliência foi possível graças a uma gestão comprometida, orientada pela estratégia, numa visão de longo prazo e baseada em controles robustos e numa governança corporativa bem estruturada.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    Investimos fortemente em inovação e tecnologia: novo site, modernização do canal 0800, migração dos sistemas de gestão, integração de novos serviços digitais e implementação do pagamento por cartão de crédito no plano BrasíliaPrev. Também evoluímos na segurança da informação, mantendo certificações relevantes como ISO 27001, 27701, e DSC 10000.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    Seguimos comprometidos com o desenvolvimento das pessoas. Em 2024, foram mais de 1.600 horas de treinamento, projetos sociais de impacto e ações contínuas de educação financeira e previdenciária.
                                </p>

                                <p style={{ marginBottom: '48px' }}>
                                    A diretoria agradece a confiança dos participantes, patrocinadores, conselheiros e colaboradores. Em 2025, seguiremos trabalhando para fortalecer ainda mais nossa missão: garantir segurança financeira, entregar valor e transformar sonhos em proteção para o futuro.
                                </p>

                                {/* Signature block */}
                                <div style={{
                                    borderTop: '1px solid rgba(0,66,130,0.15)',
                                    paddingTop: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #004282 0%, #00aeef 100%)',
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <img
                                            src={IMAGES.logo2}
                                            alt="BRB Previdência"
                                            style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                                        />
                                    </div>
                                    <div>
                                        <p style={{
                                            margin: 0,
                                            fontWeight: '700',
                                            color: '#004282',
                                            fontSize: '1rem',
                                            letterSpacing: '0.5px',
                                        }}>
                                            Diretoria Executiva
                                        </p>
                                        <p style={{
                                            margin: 0,
                                            color: '#718096',
                                            fontSize: '0.875rem',
                                        }}>
                                            Previdência BRB — Relatório Anual 2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Resumo Executivo Section */}
            <section className="resumo-executivo-section">
                <div className="container">
                    <div className="resumo-header">
                        <span className="resumo-label">Relatório Anual 2025</span>
                        <h2 className="resumo-title">
                            Resumo <span className="resumo-accent">Executivo</span>
                        </h2>
                        <p className="resumo-subtitle">
                            Os principais resultados que marcaram o ano da Previdência BRB
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {resumoCards.map((card, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="resumo-card resumo-metric-card">
                                    <div className="resumo-card-body resumo-metric-body">
                                        <p className="resumo-metric-value">{card.value}</p>
                                        <p className="resumo-metric-label">{card.label}</p>
                                    </div>
                                    <div className="resumo-card-accent" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Index Section (dobra de serviços) */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-mensagem" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            Conheça os planos da{" "}
                            <span className="services-index-accent">Previdência BRB</span>{" "}
                            e descubra o que o seu plano oferece para o seu futuro.
                        </h2>
                    </div>
                    <div className="row row-two g-4">
                        {servicedata2.map((data, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="services-two">
                                    <i>{data.icon}</i>
                                    <h3><Link to={"#"}> {data.title} </Link></h3>
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

export default MensagemLiderancas;
