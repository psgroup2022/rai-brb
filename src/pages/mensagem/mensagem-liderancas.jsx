import { Link } from "react-router-dom";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import ParticlesComponent from "../../components/ui/particles-bg";
import { IMAGES } from "../../constant/theme";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MensagemLiderancas() {
    const resumoCards = [
        {
            value: '7.619',
            label: 'Total de Participantes',
        },
        {
            value: '11,51%',
            label: 'Rentabilidade média dos Planos em 2025 (ao ano)',
        },
        {
            value: '53',
            ordinal: 'ª',
            label: 'No ranking de xxx EFPC da ABRAPP',
        },
        {
            value: '0,42%',
            label: ['economia de 6,7%, na comparação com 2024', 'Relação de despesas/ Ativo Total Administrado'],
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
                                <span>Mensagem das </span><span style={{ color: '#00aeef' }}>Lideranças</span>
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
                    <div className="row">
                        <div className="col-lg-7">

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
                                            Mensagem da Diretoria
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
                                    O ano de 2025 foi especialmente significativo para a Previdência BRB. Celebramos 40 anos de atuação, dedicados a cuidar do futuro das pessoas, consolidando uma trajetória marcada pelo crescimento sustentável, pela responsabilidade na gestão e pelo fortalecimento contínuo da governança. Desde nossa criação, em 1985, evoluímos de forma consistente, ampliando a atuação, diversificando planos e fortalecendo nossa base de participantes, sempre guiados pelo compromisso de oferecer segurança financeira e tranquilidade no longo prazo.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    Encerramos este ciclo reafirmando nossa identidade institucional e reforçando a independência na gestão dos planos, com estruturas robustas de governança, controles e transparência. Hoje, contamos com mais de 7.300 participantes, e destinamos, em 2025, mais de R$ 270 milhões em pagamentos de benefícios, evidenciando o propósito que nos move: proteger participantes e beneficiários, por meio de uma gestão responsável e orientada para o longo prazo.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    Os resultados alcançados refletem o compromisso da governança com a execução do Planejamento Estratégico e das diretrizes estabelecidas pelo Conselho Deliberativo. Entre os principais avanços da gestão, destacam-se a parceria firmada com a Seguros BRB para ampliação dos canais de distribuição do plano instituído BrasíliaPrev, com a disponibilização na plataforma digital da BRB Investimentos e nas agências do BRB.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    Também vencemos o processo seletivo para novas patrocinadoras ao Plano CD-05, como INFRA S/A e TELEBRÁS. Implantamos perfis de investimentos para os Planos BrasíliaPrev e CD-05, ampliando a flexibilidade para os participantes. E firmamos parceria para oferta de seguro de vida e invalidez aos participantes dos planos da modalidade CD, reforçando a proteção previdenciária.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    No campo dos investimentos, todos os planos superaram suas metas de rentabilidade e os índices de referência, contribuindo para a solidez dos planos administrados e para o crescimento do patrimônio administrado. Mantivemos o foco na eficiência administrativa, com controle de custos e gestão responsável dos recursos, ao mesmo tempo em que investimos na melhoria da experiência dos participantes, com novos canais de atendimento.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    O desenvolvimento do time foi uma marca em 2025, com a realização de 1.417 horas de treinamento, e incentivamos a inovação, por meio do Programa Eureka, em que os colaboradores apresentaram projetos de melhoria nos processos internos e no atendimento ao Participante. Avançamos, ainda, na agenda de governança e integridade, com a obtenção e renovação de certificações relevantes, que atestam a qualidade dos processos, a segurança da informação e a solidez da gestão (ISO 27.7001 e 27.701, Certificações ABRAPP em Governança de Investimentos e Governança Corporativa e a DSC 10.000, que referendou o nosso Sistema de Integridade e Compliance).
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    Esses resultados demonstram o comprometimento dos Conselhos Deliberativo e Fiscal, da Diretoria Executiva, dos patrocinadores, instituidores, parceiros e, especialmente, dos colaboradores, que atuam em sinergia para fortalecer a Previdência BRB.
                                </p>

                                <p style={{ marginBottom: '28px' }}>
                                    A partir do que foi realizado em 2025, a expectativa para 2026 seja ainda melhor!
                                </p>

                                <p style={{ marginBottom: '48px' }}>
                                    A Diretoria Executiva agradece a confiança dos participantes, patrocinadores, instituidores, membros dos Conselhos Deliberativo e Fiscal e ao time de colaboradores da Previdência BRB, que se uniram num importante propósito de consolidar a Previdência BRB como uma Entidade séria, ética e comprometida com a realização dos sonhos dos Participantes de alcançarem um futuro feliz e sustentável! Que 2026, traga novos horizontes e mais realizações.
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
                        <div className="col-lg-5 d-none d-lg-block">
                            <div style={{
                                position: 'sticky',
                                top: '100px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            }}>
                                <img
                                    src={IMAGES.corpLeadership}
                                    alt="Liderança Previdência BRB"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                style={{
                    height: '400px',
                    backgroundImage: `url(${IMAGES.execSummaryImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    position: 'relative'
                }}
            >
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
                }} />
            </section>

            {/* Resumo Executivo Section */}
            <section className="resumo-executivo-section">
                <div className="container">
                    <div className="resumo-header">
                        <span className="resumo-label">Relatório Anual 2025</span>
                        <h2 className="resumo-title">
                            <span>Resumo </span><span className="resumo-accent">Executivo</span>
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
                                        <p className="resumo-metric-value">
                                            {card.value}{card.ordinal && <sup style={{ fontSize: '0.5em', verticalAlign: 'super', fontWeight: 'inherit' }}>{card.ordinal}</sup>}
                                        </p>
                                        <p className="resumo-metric-label">
                                            {Array.isArray(card.label)
                                                ? card.label.map((line, j) => (
                                                    <span key={j} style={{ display: 'block' }}>{line}</span>
                                                ))
                                                : card.label}
                                        </p>
                                    </div>
                                    <div className="resumo-card-accent" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ASG Scroll Motion Section */}
            <AsgScrollPhrase />

            {/* Services Index Section (dobra de serviços) */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-mensagem" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            <span>Conheça os planos da </span>
                            <span className="services-index-accent">Previdência BRB</span>
                            <span> e descubra o que o seu plano oferece para o seu futuro.</span>
                        </h2>
                    </div>
                    <div className="row row-two g-4">
                        {servicedata2.map((data, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="services-two">
                                    <i>{data.icon}</i>
                                    <h3><Link to={data.link || "#"}> {data.title} </Link></h3>
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

function AsgScrollPhrase() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        const ctx = gsap.context(() => {
            gsap.fromTo(track,
                { x: section.offsetWidth },
                {
                    x: () => -track.scrollWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        pin: true,
                        start: "top top",
                        end: () => `+=${track.scrollWidth + section.offsetWidth}`,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const words = ["Somos", "ASG", "na", "essência!"];

    return (
        <div className="asg-scroll-wrapper" style={{ position: 'relative' }}>
            <div ref={sectionRef} style={{ background: '#000814', overflow: 'hidden', height: '100vh', display: 'flex', alignItems: 'center' }}>
                <div
                    ref={trackRef}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1em',
                        paddingLeft: '10vw',
                        paddingRight: '10vw',
                        whiteSpace: 'nowrap',
                        willChange: 'transform',
                    }}
                >
                    {words.map((word, i) => (
                        <span
                            key={i}
                            style={{
                                fontSize: 'clamp(5rem, 15vw, 14rem)',
                                fontWeight: 900,
                                lineHeight: 1,
                                background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'inline-block',
                                flexShrink: 0,
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MensagemLiderancas;
