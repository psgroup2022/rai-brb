import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import { servicedata2 } from "../../constant/alldata";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import CountUp from "react-countup";
import { Users, TrendingUp, PieChart, BarChart2, Wallet, Settings } from "lucide-react";
import ParticlesComponent from "../../components/ui/particles-bg";
import headerVideo from '../../assets/img/header.mp4';

function Index2() {
    const grandesNumeros = [
        { prefix: "+", value: 5.31, suffix: "%", title: "Crescimento de participantes", detail: "Atingimos 7.619", decimals: 2, icon: Users, gradient: true, shape: "" },
        { prefix: "+", value: 8.46, suffix: "%", title: "Arrecadação total", detail: "Receitas previdenciárias", decimals: 2, icon: TrendingUp, gradient: true, shape: "card-shape-asym-a" },
        { prefix: "", value: 103.20, suffix: "%", title: "Superávit BD-01", detail: "R$ 91,1 milhões", decimals: 2, icon: PieChart, gradient: false, shape: "card-shape-asym-b" },
        { prefix: "", value: 100.86, suffix: "%", title: "Superávit CV-03", detail: "R$ 8,2 milhões", decimals: 2, icon: BarChart2, gradient: false, shape: "card-shape-asym-b" },
        { prefix: "+", value: 8.52, suffix: "%", title: "Aumento de recursos dos planos", detail: "De R$ 3,99 bi em 2024 para R$ 4,33 bi em 2025", decimals: 2, icon: Wallet, gradient: true, shape: "card-shape-asym-a" },
        { prefix: "-", value: 4.14, suffix: "%", title: "Redução das Despesas Adm.", detail: "Orçamento executado ficou abaixo do projetado", decimals: 2, icon: Settings, gradient: false, shape: "" },
    ];

    return (
        <>
            <Header2 />
            <section className="hero-section hero-style-two" style={{ position: 'relative', overflow: 'hidden' }}>
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
                    <source src={headerVideo} type="video/mp4" />
                </video>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 31, 60, 0.65)', zIndex: 1 }} />
                <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'inherit', paddingTop: '100px', paddingBottom: '40px' }}>
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="hero-text" style={{ marginTop: '0' }}>
                                <h1>Um ano de <br />solidez e <br />crescimento <br /><span className="title-accent">sustentado</span></h1>
                                <p>BEM-VINDO AO RELATÓRIO ANUAL DA PREVIDÊNCIA BRB</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gap no-top section-about-two" style={{ paddingTop: '60px', paddingBottom: '0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-two-img">
                                <div className="circle-img">
                                    <img alt="img" src={IMAGES.chooseuslogo} />
                                    <img alt="img" src={IMAGES.circleimage} className="circle" />
                                </div>
                                <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                    <video
                                        src={IMAGES.video01}
                                        controls
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            clipPath: 'inset(0 0 20% 0 round 12px)',
                                            display: 'block',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading">
                                <span># Apresentação</span>
                                <h2>Mensagem de Abertura</h2>
                                <div className="presentation-text">
                                    <p>Consolidar uma série de resultados positivos em um ano bastante desafiador nos motiva a buscar metas mais ousadas para os próximos exercícios. Neste Relatório Anual 2025, apresentamos um panorama dos principais resultados dos planos previdenciários, bem como das ações institucionais realizadas pela Previdência BRB. Conquistamos objetivos que reforçam ainda mais nosso compromisso com uma gestão responsável, sustentável e orientada para o longo prazo.</p>
                                    <p>Ultrapassamos a marca de R$ 4 bilhões em patrimônio, conquista que reflete a solidez da Previdência BRB e a confiança de nossos participantes. Alcançamos retornos consistentes de rentabilidade nos sete planos, superando as metas atuariais e os índices de referência. Avançamos em iniciativas voltadas ao crescimento, à sustentabilidade dos planos de benefícios e à perenidade da Entidade. Inovamos nossos produtos, criando perfis de investimento para dois de nossos planos. Estabelecemos parcerias relevantes para o crescimento do BrasíliaPrev em número de participantes e novos instituidores.</p>
                                    <p>Esses são alguns exemplos que demonstram o comprometimento da governança e dos colaboradores que trabalham alinhados e em sinergia para atingir os objetivos do Planejamento Estratégico. Convidamos você a conhecer, nas próximas páginas deste Relatório Anual, os principais destaques e conquistas que marcaram o ano de 2025.</p>
                                    <p><strong>Boa leitura!</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gap big-numbers-section">
                <div className="container">
                    <div className="big-numbers-header">
                        <span className="big-numbers-eyebrow"># Desempenho</span>
                        <h2>Grandes <span>Números</span></h2>
                    </div>
                    <div className="row g-4">
                        {grandesNumeros.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className={`big-number-card ${item.shape}`}>
                                        <div className="metric-top">
                                            <div className="metric-icon">
                                                <Icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div className="metric-value">
                                                <CountUp
                                                    start={0}
                                                    end={item.value}
                                                    duration={2.5}
                                                    decimals={item.decimals}
                                                    decimal=","
                                                    prefix={item.prefix}
                                                    suffix={item.suffix}
                                                    enableScrollSpy
                                                    scrollSpyOnce
                                                />
                                            </div>
                                        </div>
                                        <div className="metric-text">
                                            <h4>{item.title}</h4>
                                        </div>
                                        <p className="metric-detail">{item.detail}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles" className="services-particles-bg" />
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
export default Index2;