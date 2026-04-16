import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header2 from "../../layout/header2";
import Footer2 from "../../layout/footer2";
import ParticlesComponent from "../../components/ui/particles-bg";
import { servicedata2 } from "../../constant/alldata";
import headerDestaqueVideo from "../../assets/img/header_destaque.mp4";
import viviBannerVideo from "../../assets/img/vivi_banner.mp4";
import { IMAGES } from "../../constant/theme";

/* ─────────────────────────────────────────────
   Hook de reveal por IntersectionObserver
   (aplica .is-visible a cada .dstq-reveal)
───────────────────────────────────────────── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".dstq-reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

/* ─────────────────────────────────────────────
   Seção 1 — ASG
───────────────────────────────────────────── */
function SecaoASG() {
    return (
        <section id="asg" className="dstq-section">
            <div className="container">
                <div className="dstq-split">
                    <div>
                        <div className="dstq-section-label dstq-reveal">Responsabilidade Socioambiental</div>
                        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                            <span>Previdência BRB integra ações </span><span className="dstq-accent">ASG</span>
                        </h2>
                        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                            A Previdência BRB entende que a responsabilidade socioambiental deve estar integrada à sua atuação cotidiana, indo além de iniciativas pontuais. Esse compromisso faz parte da cultura organizacional e orienta o relacionamento com participantes, colaboradores e a sociedade.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            Nossas práticas são fundamentadas em princípios de Governança Corporativa, Sustentabilidade Ambiental e Responsabilidade Social, conforme diretrizes estabelecidas na Política de Responsabilidade Socioambiental (PRSA).
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            Com o propósito de assegurar transparência às iniciativas desenvolvidas, divulgamos semestralmente o Relatório de Entregas ASG, no qual são apresentadas as ações realizadas em benefício do meio ambiente, do bem-estar coletivo e do fortalecimento da governança.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                            Os relatórios contemplam iniciativas como programas de educação financeira e previdenciária, apoio a projetos sociais, promoção do uso consciente de recursos, incentivo ao voluntariado e adoção de práticas sustentáveis no ambiente corporativo.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                            A publicação desses relatórios atende às exigências normativas aplicáveis e reforça o compromisso da Entidade com a ética, a transparência e a geração de valor sustentável.
                        </p>
                        <div className="dstq-reveal dstq-reveal--d4" style={{ marginTop: '28px' }}>
                            <a
                                href="https://previdenciabrb.org.br/esg/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dstq-cta-btn"
                            >
                                Conheça o relatório completo de 2025, clicando no link <span style={{ marginLeft: '8px' }}>→</span>
                            </a>
                        </div>
                    </div>
                    <div className="dstq-reveal dstq-reveal--d2">
                        <div className="dstq-img-card" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                            <img
                                src={IMAGES.sustainableGrowthAsg}
                                alt="Sustentabilidade ASG"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            <div className="dstq-img-badge">Relatório ASG 2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Band 1 — Citação ASG
───────────────────────────────────────────── */
function Band1() {
    return (
        <div className="dstq-band">
            <div className="dstq-band-inner">
                <p className="dstq-band-quote dstq-reveal">
                    "A publicação dos relatórios ASG atende às exigências normativas e reforça o compromisso da
                    Entidade com a ética, a transparência e a geração de valor sustentável."
                </p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Seção 2 — Investimentos
───────────────────────────────────────────── */
function SecaoInvestimentos() {
    return (
        <section id="investimentos" className="dstq-section dstq-section--dark">
            <div className="container">
                <div className="dstq-split dstq-split--rev">
                    <div>
                        <div className="dstq-section-label dstq-reveal">Gestão de Recursos</div>
                        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                            <span>Sustentabilidade nos </span><span className="dstq-accent">investimentos</span>
                        </h2>
                        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                            No exercício de 2025, a Entidade reconheceu e consolidou a relevância dos aspectos relacionados à sustentabilidade econômica, ambiental, social e de governança (ASG) no processo de investimentos, em linha com as diretrizes da Resolução PREVIC nº 26/2025.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            Nesse contexto, a Entidade incorpora, de forma progressiva, critérios ASG em suas práticas de investimentos, tanto por meio da análise qualitativa de riscos socioambientais e de governança nos ativos investidos, quanto pela alocação de parcela relevante dos recursos em estratégias com abordagem específica ASG, incluindo fundo dedicado com essa diretriz. Esses investimentos priorizam emissores e ativos que apresentam boas práticas de governança, uso responsável de recursos e contribuição para o desenvolvimento sustentável, além de adotarem processos estruturados de seleção, monitoramento e gestão de riscos.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            Adicionalmente, as diretrizes relacionadas à sustentabilidade foram formalmente previstas na Política de Investimentos, que contemplam a avaliação de riscos associados a fatores ambientais, sociais e de governança no âmbito da gestão dos recursos garantidores, reforçando a integração entre a gestão de riscos e as decisões de alocação.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                            Paralelamente, foram conduzidas análises internas e discussões técnicas com vistas ao desenvolvimento do framework de integração de fatores ASG às atividades da área de investimentos, com foco na evolução dos critérios de análise, identificação de materialidade, monitoramento e reporte.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                            A Entidade reforça seu compromisso com o contínuo aperfeiçoamento das práticas ASG, incluindo a ampliação da integração sistemática desses fatores nos processos de investimento ao longo de 2026, visando o fortalecimento da gestão de riscos, a transparência e a geração de valor sustentável de longo prazo para participantes e assistidos.
                        </p>
                    </div>
                    <div className="dstq-reveal dstq-reveal--d2">
                        <div className="dstq-img-card" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                            <img
                                src={IMAGES.corpLeadership}
                                alt="Investimentos sustentáveis"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            <div className="dstq-img-badge">Resolução PREVIC nº 26/2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 3 — Projetos Sociais
───────────────────────────────────────────── */
function SecaoProjetos() {
    return (
        <section id="projetos" className="dstq-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Educação e Comunidade</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    <span>Projetos </span><span className="dstq-accent">Sociais</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                
                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    A Previdência BRB participou de iniciativas sociais voltadas à educação de jovens e crianças em escolas públicas do Distrito Federal.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    Em abril de 2025, pela segunda vez, a Empresa esteve presente na Feira de Profissões do Centro de Ensino Médio 01 de Sobradinho, onde foram realizadas duas palestras sobre as profissões mais demandadas pelo mercado e sobre educação financeira para os estudantes.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                    No âmbito do Projeto de Educação Financeira e Previdenciária, foram realizadas apresentações em duas escolas públicas:
                </p>

                <ul className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    <li style={{ marginBottom: '10px' }}>* Escola Classe 02 da Candangolândia (22/4/2025): duas apresentações para turmas do 5º ano.</li>
                    <li style={{ marginBottom: '10px' }}>* Escola Classe 413 Sul (25/4/2025): duas apresentações para turmas do 5º ano, além de uma apresentação para pais e responsáveis em 15/5/2025.</li>
                </ul>

                <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                    A Entidade também participou da Festa da Família da Escola Classe 03 do Núcleo Bandeirante, em 30/5/2025, levando o tema de educação financeira e previdenciária para a comunidade escolar.
                </p>
                <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                    Ao final das atividades nas Escolas Classes 02 da Candangolândia e 413 Sul, foi realizada uma campanha de arrecadação de tampinhas plásticas, que foram doadas ao projeto Tampinhas do Bem BRB.
                </p>
            </div>
        </section>
    );
}
/* ─────────────────────────────────────────────
   Full Image — Transição Comunicação
───────────────────────────────────────────── */
function FullImgComunicacao() {
    return (
        <div className="dstq-full-img" style={{ background: '#fff', minHeight: '80vh' }}>
            <video
                src={viviBannerVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                }}
            />
            <div className="dstq-full-img-content">
                <div className="dstq-section-label dstq-reveal" style={{ color: '#00aeef' }}>Transparência Ativa</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1" style={{ maxWidth: 700, color: '#0a1f3c', marginBottom: '1.5rem' }}>
                    <span>Comunicação com foco na </span><span className="dstq-accent">transparência</span>
                </h2>
                <p className="dstq-reveal dstq-reveal--d2" style={{ color: '#314e7a', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 500 }}>
                    A Previdência BRB mantém o compromisso contínuo com a transparência, a clareza das informações e o fortalecimento do relacionamento com seus participantes, assistidos e demais públicos de interesse.
                </p>
            </div>
        </div>
    );
}




/* ─────────────────────────────────────────────
   Seção 4 — Comunicação
───────────────────────────────────────────── */
function SecaoComunicacao() {
    return (
        <section id="comunicacao" className="dstq-section dstq-section--light">
            <div className="container">
                <div className="dstq-reveal dstq-reveal--d1">
                    <p className="dstq-text-body dstq-text-body--on-light">
                        Ao final de 2024, a Entidade implementou um novo site institucional, mais moderno, intuitivo e acessível, desenvolvido para facilitar o acesso às informações e aprimorar a experiência do usuário. A plataforma passou a concentrar, de forma organizada e dinâmica, conteúdos relevantes sobre a gestão, os planos de benefícios e as iniciativas institucionais.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        O ambiente digital conta com notícias constantemente atualizadas, além de disponibilizar diferentes frentes de informação, como o Previdência em Números, informativo mensal com dados e indicadores dos planos de benefícios, publicado em área aberta para acesso público.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        Destaca-se também o Comunica Previdência BRB, canal voltado à disseminação de conteúdos relacionados a compliance, integridade, ESG e LGPD, reforçando o compromisso da Entidade com as melhores práticas de governança e conformidade.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        Em linha com os princípios de transparência, o site reúne ainda uma área dedicada à divulgação do orçamento da Entidade, bem como conteúdos específicos sobre as ações ESG desenvolvidas, permitindo maior visibilidade às iniciativas socioambientais e de governança. Também, são disponibilizadas informações completas sobre os planos de benefícios, incluindo regulamentos, características e desempenho, bem como a carteira de investimentos, garantindo amplo acesso às informações e promovendo uma comunicação clara, acessível e responsável.
                    </p>
                    <p className="dstq-text-body dstq-text-body--on-light">
                        Com essas iniciativas, a Previdência BRB reafirma seu compromisso com a transparência ativa, a prestação de contas e o fortalecimento da confiança junto aos seus públicos.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 5 — Integridade e Compliance
───────────────────────────────────────────── */
function SecaoIntegridade() {
    return (
        <section id="integridade" className="dstq-section dstq-editorial" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal" style={{ color: '#004282' }}>Governança e Ética</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1" style={{ color: '#0a1f3c' }}>
                    <span style={{ color: '#0a1f3c' }}>Programa de </span><span className="dstq-accent">Integridade e Compliance</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                
                <div className="row mt-5 g-5">
                    <div className="col-lg-8 dstq-reveal dstq-reveal--d2">
                        <p className="dstq-editorial-paragraph is-lead">
                            Em 2025, o Sistema de Integridade da Previdência BRB foi tratado como prioridade estratégica, com foco no cumprimento integral do Plano de Integridade, e na consolidação de uma cultura organizacional ética e transparente. Todas as ações previstas para o exercício foram executadas, e o Plano de Integridade de 2026 foi elaborado e aprovado pela Diretoria Executiva, garantindo a continuidade das iniciativas.
                        </p>
                        
                        <h3 className="dstq-editorial-subtitle">Atuação da alta administração</h3>
                        <p className="dstq-editorial-paragraph">
                            A alta administração manteve atuação próxima e preventiva, com realização das reuniões de análise crítica do Sistema de Integridade. Foram realizadas comunicações e manifestações formais da Diretoria Executiva, reforçando o compromisso com a ética, a transparência, a governança e o cumprimento do dever fiduciário, sempre vinculando a integridade à gestão responsável dos recursos dos participantes.
                        </p>

                        <h3 className="dstq-editorial-subtitle">Manutenção e fortalecimento do sistema de compliance</h3>
                        <p className="dstq-editorial-paragraph">
                            Em 2025, o Plano de Integridade concentrou-se na mitigação de riscos de compliance, no aprimoramento de processos e na atualização de normativos internos, em alinhamento ao Programa de Integridade e Compliance da Previdência BRB. A entidade manteve a certificação DSC 10.000, entendida como um marco relevante para a gestão e um selo que referenda todas as medidas adotadas para o monitoramento e aperfeiçoamento contínuo dos controles internos e da cultura de integridade, no âmbito da atuação institucional.
                        </p>

                        <h3 className="dstq-editorial-subtitle">Comunicações e Minuto Compliance</h3>
                        <p className="dstq-editorial-paragraph">
                            A comunicação interna e externa sobre integridade foi aprimorada e intensificada, com divulgação de conteúdos em diferentes canais para conscientizar e evidenciar as medidas implementadas, reforçando o uso dos canais de ética e de ouvidoria e promovendo o aculturamento organizacional.
                        </p>

                        <h3 className="dstq-editorial-subtitle">Canal de Ética e Ouvidoria</h3>
                        <p className="dstq-editorial-paragraph">
                            O Canal de Ética permaneceu amplamente divulgado no site da entidade nos comunicados de compliance, com informações claras sobre quando e como utilizá-lo, assegurando confidencialidade, independência e tratamento de eventuais relatos. Em complemento, a Ouvidoria continuou a atuar como canal estruturado para manifestações não solucionadas no primeiro atendimento, fortalecendo a transparência, o acolhimento e a melhoria contínua dos serviços prestados.
                        </p>

                        <h3 className="dstq-editorial-subtitle">Treinamentos e Semana de Integridade</h3>
                        <p className="dstq-editorial-paragraph">
                            Ao longo de 2025, o time participou de treinamentos em temas de integridade, compliance, em linha com o Programa de Integridade e Compliance. Foi realizada a Segunda Semana de Integridade, com programação voltada à importância do Sistema de Integridade e Compliance, à prevenção de crimes de lavagem de dinheiro, à ética e ao uso do canal de denúncia, reforçando o papel de cada colaborador na sustentação do sistema de integridade. A semana contou com a participação de palestrantes externos da CGU, do Banco Central e do presidente do Conselho Fiscal da Previdência BRB.
                        </p>

                        <h3 className="dstq-editorial-subtitle">Cultura de integridade e dever fiduciário</h3>
                        <p className="dstq-editorial-paragraph">
                            Em todas essas ações, a Previdência BRB reforçou a mensagem de que a integridade é a base para o desenvolvimento dos processos internos e para a gestão responsável dos recursos previdenciários administrados. O dever fiduciário foi continuamente associado à conduta ética e à conformidade normativa, evidenciando que decisões responsáveis e coerentes são essenciais para garantir um futuro sustentável e a confiança de participantes, patrocinadores e órgãos de controle.
                        </p>
                    </div>
                    <div className="col-lg-4 dstq-reveal dstq-reveal--d4 d-none d-lg-block">
                        <div className="dstq-img-card" style={{ position: 'sticky', top: '120px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                            <img src={IMAGES.instTrust} alt="Integridade e Compliance" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            <div className="dstq-img-badge">Selo DSC 10.000</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 6 — Segurança da Informação
───────────────────────────────────────────── */
function SecaoSeguranca() {
    return (
        <section id="seguranca" className="dstq-section dstq-editorial" style={{ backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal" style={{ color: '#004282' }}>Proteção de Dados</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1" style={{ color: '#0a1f3c' }}>
                    <span style={{ color: '#0a1f3c' }}>Segurança da informação e </span><span className="dstq-accent">proteção de dados: </span><span style={{fontWeight: 400, color: '#0a1f3c'}}>consolidação da maturidade e evolução do sistema de gestão</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                
                <div className="row mt-5 g-5 flex-row-reverse">
                    <div className="col-lg-8 dstq-reveal dstq-reveal--d2">
                        <p className="dstq-editorial-paragraph is-lead">
                            No exercício de 2025, a PREVIDÊNCIA BRB manteve seu posicionamento institucional em governança, segurança da informação e proteção de dados pessoais, consolidando práticas estruturadas ao longo dos ciclos anteriores de certificação, demonstrando que seus controles não apenas estão implementados, mas internalizados em sua cultura organizacional e nos processos decisórios estratégicos.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            A manutenção desse posicionamento ganha especial relevância ao se considerar que a Entidade se encontra no terceiro ciclo de auditoria de certificação das ISO 27.001 e 27.701, evidenciando estabilidade, continuidade e efetividade do seu Sistema de Gestão da Segurança da Informação (SGSI) e do Sistema de Gestão da Privacidade da Informação (SGPI).
                        </p>
                        <p className="dstq-editorial-paragraph">
                            No período, além da manutenção das certificações, a PREVIDÊNCIA BRB promoveu evolução relevante de seu sistema de gestão, com a realização de upgrade normativo da certificação ISO/IEC 27001, passando integralmente à versão mais atual da norma (ISO/IEC 27001:2022), conforme certificado emitido por organismo acreditado internacionalmente.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            Tal movimento não se limita a uma atualização, mas representa a adequação estrutural do modelo de gestão aos novos requisitos internacionais, especialmente no que se refere à abordagem de riscos, contexto organizacional, governança de controles e integração com temas emergentes, como segurança cibernética, continuidade operacional e aspectos ambientais.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            A certificação vigente, somada à manutenção da ISO/IEC 27701:2019, abrange as atividades da Entidade, incluindo a administração de planos de previdência complementar, o relacionamento com participantes e assistidos e o suporte aos processos de investimentos, demonstrando a abrangência e a transversalidade dos controles implementados.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            No âmbito das auditorias realizadas em 2025, a Entidade foi submetida a processo estruturado de avaliação externa, conduzido por certificadora independente, com base em critérios internacionais e alinhados às diretrizes do International Accreditation Forum (IAF), com o objetivo de aferir a capacidade, suficiência e eficácia do sistema de gestão.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            O escopo da auditoria contemplou a análise de controles organizacionais e técnicos, incluindo gestão de riscos, continuidade de negócios, segurança de acessos, proteção de dados pessoais, monitoramento de eventos, resposta a incidentes e conformidade regulatória, evidenciando um sistema de gestão integrado e aderente às melhores práticas globais.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            Os resultados obtidos demonstraram que as não conformidades identificadas em ciclos anteriores foram devidamente tratadas, com implementação de ações corretivas, análise de causa raiz e validação de eficácia, evidenciando a efetividade do modelo de melhoria contínua adotado pela Entidade.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            O registro formal dessas tratativas reforça a rastreabilidade das ações e a capacidade institucional de evolução contínua, inclusive em temas contemporâneos como gestão de vulnerabilidades, governança de dados e integração com práticas ESG.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            No campo da segurança da informação, a Entidade promoveu avanços relevantes, com destaque para a implementação de autenticação multifator (MFA), em ambientes críticos, reforçando os mecanismos de controle de acesso e mitigando riscos associados a credenciais comprometidas.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            Adicionalmente, houve evolução na capacidade de monitoramento e resposta a incidentes, com aprimoramento do Centro de Operações de Segurança (SOC) e dos mecanismos de correlação de eventos (SIEM), permitindo maior eficiência na detecção e resposta a eventos de segurança.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            A realização de testes de intrusão (pentests) e avaliações periódicas de vulnerabilidades contribuiu para a validação da eficácia dos controles implementados, não sendo identificadas vulnerabilidades críticas de alto impacto, o que reforça a consistência do ambiente tecnológico da Entidade.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            No que se refere à gestão de incidentes, a PREVIDÊNCIA BRB demonstrou capacidade estruturada de resposta, com registro formal, análise técnica, adoção de medidas de contenção e implementação de ações preventivas, em conformidade com a legislação aplicável, especialmente a Lei Geral de Proteção de Dados Pessoais (LGPD).
                        </p>
                        <p className="dstq-editorial-paragraph">
                            Paralelamente, a Entidade já se encontra estrategicamente posicionada para o próximo ciclo evolutivo, com iniciativas voltadas à adequação futura aos novos referenciais internacionais de privacidade, incluindo a preparação para a atualização da ISO/IEC 27701:2025, o que reforça sua postura proativa e alinhada às tendências regulatórias.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            A trajetória observada confirma que a proteção de dados pessoais e a segurança da informação estão plenamente integradas à estratégia institucional da Entidade, contribuindo para a confiança dos participantes, assistidos, patrocinadores e órgãos reguladores.
                        </p>
                    </div>
                    <div className="col-lg-4 dstq-reveal dstq-reveal--d4 d-none d-lg-block">
                        <div className="dstq-img-card" style={{ position: 'sticky', top: '120px' }}>
                            <img src={IMAGES.officeCollab} alt="Segurança da Informação" style={{ borderRadius: '20px', width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 7 — Inovação Tecnológica
───────────────────────────────────────────── */
function SecaoInovacao() {
    return (
        <section id="inovacao" className="dstq-section dstq-editorial" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="dstq-section-label dstq-section-label--light dstq-reveal" style={{ color: '#004282' }}>Transformação Digital</div>
                <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1" style={{ color: '#0a1f3c' }}>
                    <span style={{ color: '#0a1f3c' }}>Avanços em </span><span className="dstq-accent">inovação tecnológica</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                
                <div className="row mt-5">
                    <div className="col-lg-10 offset-lg-1 dstq-reveal dstq-reveal--d3">
                        <p className="dstq-editorial-paragraph is-lead">
                            O ano de 2025, ocorreu avanços com relação às iniciativas estratégicas voltadas à experiência do participante, eficiência operacional e segurança da informação.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            Foi implantada a VIVI, assistente virtual baseada em inteligência artificial, integrada ao WhatsApp. A solução trouxe mais agilidade, disponibilidade e qualidade no atendimento aos participantes, permitindo respostas rápidas e padronizadas, com vistas a ampliar a capacidade de atendimento da entidade. A VIVI está franco aprimoramento e, serão incorporados novos temas para essa nova modalidade de atendimento aos participantes.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            Iniciou-se, também, a construção de um novo aplicativo institucional, com foco em modernização, usabilidade e integração de serviços, com vistas a oferecer uma experiência digital mais completa, intuitiva e alinhada às necessidades dos participantes, consolidando diversos serviços em um único canal.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            Na linha de estimular novas adesões e reconhecer ações feitas pelo participante para fortalecer a formação da reserva previdenciária, foi implantada a primeira fase do projeto da Plataforma de Prêmios, uma solução inovadora para fortalecer o engajamento dos participantes. Por meio dela, o usuário que indicar novos participantes, acumula pontos e resgata brindes, promovendo uma jornada mais interativa, gamificada e orientada à fidelização.
                        </p>
                        <p className="dstq-editorial-paragraph">
                            No âmbito da governança e segurança da informação, mantivemos as certificações ISO 27001 e ISO 27701, reforçando o compromisso da entidade com a proteção de dados sensíveis e a privacidade das informações de participantes, patrocinadoras e demais partes interessadas. Essa manutenção evidencia a maturidade dos nossos processos e a aderência às melhores práticas internacionais.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Componente principal
───────────────────────────────────────────── */
function Destaques2025() {
    const heroRef = useRef(null);
    const headerVideoRef = useRef(null);

    // Animações GSAP no hero
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tweens = [];
        const triggers = [];

        if (heroRef.current) {
            const heroTween = gsap.fromTo(
                heroRef.current.querySelectorAll(".destaques-hero-anim"),
                { y: 36, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" }
            );
            tweens.push(heroTween);
        }

        if (heroRef.current && headerVideoRef.current) {
            const video = headerVideoRef.current;
            const setupScrollVideo = () => {
                const duration = video.duration || 0;
                if (!duration) return;
                video.currentTime = 0;
                video.pause();

                const videoTrigger = ScrollTrigger.create({
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onUpdate: (self) => {
                        const targetTime = self.progress * duration;
                        video.currentTime = Math.min(Math.max(targetTime, 0), Math.max(duration - 0.01, 0));
                    },
                });
                triggers.push(videoTrigger);
            };

            if (video.readyState >= 1) {
                setupScrollVideo();
            } else {
                video.addEventListener("loadedmetadata", setupScrollVideo, { once: true });
            }
        }

        return () => {
            tweens.forEach((t) => t.kill());
            triggers.forEach((t) => t.kill());
        };
    }, []);

    // Reveal por IntersectionObserver nas novas seções
    useReveal();

    return (
        <>
            <Header2 />

            {/* ── Hero ── */}
            <section className="destaques-hero-fold-v2" ref={heroRef}>
                <div className="destaques-hero-video-bg" aria-hidden="true">
                    <video
                        ref={headerVideoRef}
                        className="destaques-hero-video"
                        src={headerDestaqueVideo}
                        muted
                        playsInline
                        preload="metadata"
                    />
                </div>
                <div className="destaques-hero-overlay" aria-hidden="true" />
                <div className="container">
                    <p className="destaques-hero-kicker destaques-hero-anim">Institucional</p>
                    <h1 className="destaques-hero-title-v2 destaques-hero-anim">
                        <span className="thin">2025</span><span> Destaques</span>
                    </h1>
                    <p className="destaques-hero-sub destaques-hero-anim">
                        Principais avanços da Previdência BRB em sustentabilidade, governança, projetos sociais,
                        segurança da informação e transformação digital.
                    </p>
                </div>
            </section>

            {/* ── Seções de conteúdo ricas ── */}
            <SecaoASG />
            <Band1 />
            <SecaoInvestimentos />
            <SecaoProjetos />
            <FullImgComunicacao />
            <SecaoComunicacao />
            <SecaoIntegridade />
            <SecaoSeguranca />
            <SecaoInovacao />

            {/* ── Índice de planos ── */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-destaques" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            Conheça os planos da <span className="services-index-accent">Previdência BRB</span>
                            {" "}e descubra o que o seu plano oferece para o seu futuro.
                        </h2>
                    </div>
                    <div className="row row-two g-4">
                        {servicedata2.map((data, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="services-two" style={{ position: 'relative' }}>
                                    <Link to={data.link || "#"} style={{ position: 'absolute', inset: 0, zIndex: 10 }} aria-label={data.title} />
                                    <i>{data.icon}</i>
                                    <h3>{data.title}</h3>
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

export default Destaques2025;
