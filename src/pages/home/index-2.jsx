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
        { primary: "7.619", secondary: "Participantes", complementar: "Crescimento de 5,31%", icon: Users, shape: "" },
        { primary: "4,36 bilhões", secondary: "de Patrimônio", complementar: "crescemos 9,27%", icon: TrendingUp, shape: "card-shape-asym-a" },
        { primary: "ICP*: 87,59% de Adesão", secondary: null, complementar: "Indice de Cobertura Previdencial", icon: PieChart, shape: "card-shape-asym-b" },
        { primary: "BD-01 - R$91,141 milhões", secondary: "Superávit do Plano", complementar: null, icon: BarChart2, shape: "card-shape-asym-b" },
        { primary: "CV-03 - R$8,215 milhões", secondary: "Superávit do Plano", complementar: null, icon: Wallet, shape: "card-shape-asym-a" },
        { primary: "4,4% de redução", secondary: "de Despesa administrativa per capita", complementar: null, icon: Settings, shape: "" },
        { primary: "Redução de 6,7%", secondary: "Despesas administrativas X Patrimônio Administrado (– 0,42%)", complementar: null, icon: TrendingUp, shape: "card-shape-asym-a" },
        { primary: "Redução de 4,5%", secondary: "Despesas Realizadas X Orçadas", complementar: "economia de R$849.000", icon: BarChart2, shape: "card-shape-asym-b" },
        { primary: "Aumento de 8,46%", secondary: "Arrecadação total", complementar: null, icon: TrendingUp, shape: "" },
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
                                    <p>A Previdência BRB apresenta no Relatório Anual de Informações, destacando as realizações e resultados alcançados, em 2025.</p>
                                    <p>De fato, o ano de 2025 foi marcado por importantes avanços, tendo como foco estratégico a sustentabilidade dos 7 planos de benefícios administrados e do PGA e, por consequência, a perenidade da Previdência BRB.</p>
                                    <p>O Relatório Anual, de fato, traduz o compromisso da Entidade com Participantes, Patrocinadores e Instituidores e a certeza de que os passos dados levarão a Previdência BRB a novos horizontes, pois muitas iniciativas estratégicas realizadas, se traduzirão em crescimento e fortalecimento da Previdência BRB.</p>
                                    <p>A prestação de contas, a transparência, equidade e responsabilidade corporativa são pilares essenciais na governança corporativa. É com base nesses pilares que o RAI 2025 é apresentado, trazendo informações relevantes da gestão, indicadores, realizações e perspectivas.</p>
                                    <p>Boa leitura!</p>
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
                                        <div className="metric-icon">
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <p className="metric-primary">{item.primary}</p>
                                        {item.secondary && <p className="metric-secondary">{item.secondary}</p>}
                                        {item.complementar && <p className="metric-complementar">{item.complementar}</p>}
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