import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";

function Footer2() {
    return (
        <footer className="footer-two brb-footer">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="brb-footer-brand">
                            <Link to={"/"} className="brb-footer-logo" aria-label="Previdência BRB">
                                <img src={IMAGES.logo2} alt="Previdência BRB" />
                            </Link>
                            <p>
                                Relatório Anual de Informações 2025. Previdência BRB - Entidade Fechada de
                                Previdência Complementar administrando sete planos de benefícios e um Plano de
                                Gestão Administrativa.
                            </p>
                            <p className="brb-footer-cnpj">CNPJ: 01.225.861/0001-30</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="brb-footer-col">
                            <h5>Navegação</h5>
                            <ul>
                                <li><Link to="#">Início</Link></li>
                                <li><Link to="#">Institucional</Link></li>
                                <li><Link to="#">Mensagem da Diretoria</Link></li>
                                <li><Link to="#">Resumo Executivo</Link></li>
                                <li><Link to="/perfil-corporativo">Perfil Corporativo</Link></li>
                                <li><Link to="/governanca">Governança</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="brb-footer-col">
                            <h5>Planos</h5>
                            <ul>
                                <li><Link to="#">BD-01</Link></li>
                                <li><Link to="#">CD-02</Link></li>
                                <li><Link to="#">CV-03</Link></li>
                                <li><Link to="#">CD-Metrô-DF</Link></li>
                                <li><Link to="#">CD-05</Link></li>
                                <li><Link to="#">BrasíliaPrev</Link></li>
                                <li><Link to="#">RegiusPrev</Link></li>
                                <li><Link to="#">PGA</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="brb-footer-col brb-footer-contact">
                            <h5>Conecte-se conosco!</h5>
                            <ul>
                                <li>
                                    SGAS Quadra 902, Ed. Athenas, Bloco A,<br />
                                    Térreo, Brasília - DF, CEP: 70.390-020
                                </li>
                                <li>
                                    SAC: <a href="tel:08000002977" style={{color: 'inherit', textDecoration: 'underline'}}>0800 000 2977</a>
                                </li>
                                <li>
                                    WhatsApp: <a href="https://wa.me/5561998031922" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>(61) 99803-1922</a>
                                </li>
                                <li>
                                    Atendimento:<br />
                                    <a href="mailto:relacionamento@previdenciabrb.org.br" style={{color: 'inherit', textDecoration: 'underline'}}>relacionamento@previdenciabrb.org.br</a>
                                </li>
                                <li>
                                    Fale com o Encarregado de Dados:<br />
                                    <a href="mailto:encarregadodedados@previdenciabrb.org.br" style={{color: 'inherit', textDecoration: 'underline'}}>encarregadodedados@previdenciabrb.org.br</a>
                                </li>
                                <li>
                                    Ouvidoria:<br />
                                    <a href="https://canal.ouvidordigital.com.br" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>canal.ouvidordigital.com.br</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="brb-footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <p>© 2026 Previdência BRB · Todos os direitos reservados · RAI 2025</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <p style={{ fontSize: '0.95rem', whiteSpace: 'nowrap', marginBottom: 0 }}>
                                Desenvolvido com ❤️ por <a href="https://mirador360.com.br" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>Mirador Technology</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer2;
