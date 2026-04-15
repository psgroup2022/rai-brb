import { Link } from "react-router-dom";
import { servicedata2 } from "../../constant/alldata";
import ParticlesComponent from "./particles-bg";

/** Índice de planos (grid `servicedata2`) — `particlesId` deve ser único por página. */
export default function SecaoIndicePlanos({ particlesId }) {
    return (
        <section className="gap services-index-section">
            <ParticlesComponent id={particlesId} className="services-particles-bg" />
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
    );
}
