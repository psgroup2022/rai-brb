import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES } from "../../constant/theme";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import { servicedata2 } from "../../constant/alldata";
import ParticlesComponent from "../../components/ui/particles-bg";
import heroGovVideo from "../../assets/img/hero_gov.mp4";
import imgProposito from "../../assets/img/proposito.png";
import imgProposta from "../../assets/img/proposta.png";
import imgPosicionamento from "../../assets/img/posicionamento.png";
import imgVisao from "../../assets/img/visao.png";
import imgValores from "../../assets/img/valores.png";

/* ─── helpers ─── */
function GovSection({ id, eyebrow, title, children, className = "" }) {
    return (
        <section id={id} className={`gov-section ${className}`.trim()}>
            <div className="container">
                {(eyebrow || title) && (
                    <div className="gov-section-header">
                        {eyebrow && <span className="gov-eyebrow">{eyebrow}</span>}
                        {title && <h2 className="gov-section-title">{title}</h2>}
                        <div className="gov-divider" />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}

function OrgBody({ sigla, title, subtitle, icon, children }) {
    return (
        <div className="gov-info-box">
            {/* watermark arcs */}
            <div className="gov-info-box-arcs" aria-hidden="true">
                <span /><span /><span /><span />
            </div>

            {/* top: sigla tag + arrow */}
            <div className="gov-info-box-toprow">
                <span className="gov-info-box-tag">
                    <i className={`fas ${icon}`} />
                    {sigla}
                </span>
                <span className="gov-info-box-arrow" aria-hidden="true">↗</span>
            </div>

            {/* title */}
            <h3 className="gov-info-box-title">{title}</h3>
            {subtitle && <p className="gov-info-box-subtitle">{subtitle}</p>}

            {/* body content */}
            {children && <div className="gov-info-box-body">{children}</div>}

            {/* image placeholder */}
            <div className="gov-info-box-img-wrap">
                <div className="gov-info-box-img">
                    <i className="fas fa-image" />
                    <span>imagem</span>
                </div>
            </div>
        </div>
    );
}

function MemberCard({ name, role, isPresident = false }) {
    const parts = name.trim().split(" ");
    const initials = (parts[0][0] + (parts[parts.length - 1][0] || "")).toUpperCase();
    return (
        <div className={`gov-member-card${isPresident ? " gov-member-card--pres" : ""}`}>
            <div className="gov-member-photo">
                <span className="gov-member-initials">{initials}</span>
                <span className="gov-member-photo-hint">foto</span>
            </div>
            <div className="gov-member-info">
                <h4 className="gov-member-name">{name}</h4>
                <span className="gov-member-role">{role}</span>
                {isPresident && <span className="gov-member-badge">Presidente</span>}
            </div>
        </div>
    );
}

/* ─── data ─── */
const values = [
    { icon: "fa-heart",        label: "Respeito",                desc: "Respeitamos e valorizamos as pessoas." },
    { icon: "fa-users",        label: "Foco no Participante",    desc: "Reconhecemos no participante a razão de existir da Previdência BRB." },
    { icon: "fa-handshake",    label: "Relações Institucionais", desc: "Zelamos pela qualidade e transparência nas relações." },
    { icon: "fa-eye",          label: "Transparência",           desc: "Primamos pela clareza e tempestividade na prestação de informações." },
    { icon: "fa-star",         label: "Compromisso",             desc: "Somos comprometidos com a realização dos sonhos e qualidade de vida dos participantes e seus familiares." },
    { icon: "fa-chart-line",   label: "Eficácia na Gestão",      desc: "Temos foco no resultado e agimos com transparência, integridade e responsabilidade socioambiental." },
    { icon: "fa-shield-alt",   label: "Segurança",               desc: "Prezamos pela segurança das informações, do dinheiro investido e pelo cumprimento das normas e regulamentos." },
    { icon: "fa-lightbulb",    label: "Espírito Empreendedor",   desc: "Agimos com pensamento inovador para agregar valor à experiência dos nossos clientes." },
    { icon: "fa-leaf",         label: "Sustentabilidade",        desc: "Priorizamos a sustentabilidade dos planos administrados e a perenidade da Previdência BRB." },
];

const comites = [
    {
        sigla: "COMIN",
        nome: "Comitê de Investimentos",
        desc: "O COMIN tem como atribuição analisar e acompanhar as estratégias de investimentos, incluindo operações que envolvem risco de crédito, moeda e derivativos. Além disso, orienta a execução da Política de Investimentos aprovada pelo Conselho Deliberativo e monitora o crescimento das reservas matemáticas em relação aos recursos necessários para garantir o pagamento dos benefícios.",
        icon: "fa-chart-bar",
        color: "#0050a0",
    },
    {
        sigla: "COPAT",
        nome: "Comitê de Patrocinadoras",
        desc: "O COPAT é responsável por acompanhar o desempenho atuarial, financeiro e administrativo dos planos de benefícios, em consonância com o planejamento estratégico e políticas internas da Entidade. Também pode se manifestar sobre propostas de alteração regulamentar, estatutária e de plano de custeio.",
        icon: "fa-building",
        color: "#006aae",
    },
    {
        sigla: "COMCI",
        nome: "Comitê de Gerenciamento de Crise e Imagem",
        desc: "O Comitê de Gerenciamento de Crise e de Imagem é um órgão colegiado deliberativo, responsável pela condução de processos de gerenciamento de crise e pela definição de ações para mitigação de riscos e preservação da imagem e reputação da Previdência BRB.",
        icon: "fa-shield-alt",
        color: "#00aeef",
    },
    {
        sigla: "CORIS",
        nome: "Comitê de Gestão de Riscos",
        desc: "O CORIS tem como missão acompanhar a identificação, classificação, medição, controle e monitoramento dos riscos e controles internos da Entidade. Suas atividades seguem os critérios definidos no Regimento Interno e demais normativos aplicáveis.",
        icon: "fa-search",
        color: "#003c78",
    },
    {
        sigla: "COMED",
        nome: "Comitê de Ética e Disciplina",
        desc: "O COMED atua na apuração, instauração, instrução e julgamento de processos éticos e disciplinares envolvendo empregados, membros de órgãos estatutários e terceiros relacionados à PREVIDÊNCIA BRB. Suas ações seguem o Regimento Interno, a legislação vigente, o Estatuto da Entidade e os normativos internos.",
        icon: "fa-balance-scale",
        color: "#011834",
    },
];

/* ─── component ─── */
function Governanca() {
    const [orgChartScale, setOrgChartScale] = useState(1);
    const heroRef = useRef(null);
    const heroVideoRef = useRef(null);

    // Scroll scrub no vídeo do hero
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const video = heroVideoRef.current;
        if (!video || !heroRef.current) return;

        const setupScrollVideo = () => {
            const duration = video.duration || 0;
            if (!duration) return;
            
            // Permite autoplay inicial por 2 segundos antes de ativar o scroll scrub
            setTimeout(() => {
                video.currentTime = 0;
                video.pause();

                const trigger = ScrollTrigger.create({
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onUpdate: (self) => {
                        const targetTime = self.progress * duration;
                        video.currentTime = Math.min(Math.max(targetTime, 0), Math.max(duration - 0.01, 0));
                    },
                });

                return () => trigger.kill();
            }, 2000);
        };

        let cleanup;
        if (video.readyState >= 1) {
            cleanup = setupScrollVideo();
        } else {
            const handler = () => { cleanup = setupScrollVideo(); };
            video.addEventListener("loadedmetadata", handler, { once: true });
            return () => video.removeEventListener("loadedmetadata", handler);
        }

        return () => cleanup && cleanup();
    }, []);

    useEffect(() => {
        const els = document.querySelectorAll("[data-reveal]");

        const reveal = (el) => el.classList.add("is-revealed");

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        reveal(entry.target);
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0, rootMargin: "0px 0px -10px 0px" }
        );

        els.forEach((el) => io.observe(el));

        // Fallback: garantir que elementos já visíveis no viewport sejam revelados
        const fallback = setTimeout(() => {
            document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach(reveal);
        }, 350);

        return () => {
            io.disconnect();
            clearTimeout(fallback);
        };
    }, []);

    const orgScrollRef = useRef(null);
    const orgChartShellRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const section = orgScrollRef.current;
        if (!section) return;

        const cards = gsap.utils.toArray(".gov-scroll-card");
        const bg = section.querySelector(".gov-org-bg");
        if (!cards.length || !bg) return;

        const gradients = [
            "linear-gradient(135deg, #031128 0%, #063468 100%)",   /* CONDE  — azul profundo */
            "linear-gradient(135deg, #0d3d2e 0%, #0a6e4f 100%)",   /* COFIS  — verde esmeralda */
            "linear-gradient(135deg, #3d1a0d 0%, #8b3a1a 100%)",   /* DIRET. — âmbar / terracota */
            "linear-gradient(135deg, #1a0a3d 0%, #4a1a7a 100%)",   /* AUDIN  — violeta */
        ];

        gsap.set(cards, { y: 180, opacity: 0, scale: 0.95, rotateX: -8 });
        gsap.set(cards[0], { y: 0, opacity: 1, scale: 1, rotateX: 0, zIndex: 20 });
        gsap.set(bg, { background: gradients[0] });

        const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            },
        });

        cards.forEach((card, index) => {
            if (index === 0) return;
            const previous = cards[index - 1];
            tl.to(previous, { y: -210, opacity: 0.36, scale: 0.9, rotateX: 9, zIndex: 5, duration: 0.8 }, ">")
              .fromTo(
                card,
                { y: 210, opacity: 0, scale: 0.95, rotateX: -8, zIndex: 25 },
                { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.9 },
                "<"
              )
              .to(bg, { background: gradients[index], duration: 0.9 }, "<");
        });

        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handleResize);

        const st = tl.scrollTrigger;

        return () => {
            tl.kill();
            st && st.kill();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const shell = orgChartShellRef.current;
        if (!shell) return;

        const updateScale = () => {
            const styles = window.getComputedStyle(shell);
            const innerWidth = shell.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
            setOrgChartScale(Math.min(innerWidth / 1680, 1));
        };

        updateScale();
        const ro = new ResizeObserver(updateScale);
        ro.observe(shell);

        return () => ro.disconnect();
    }, []);

    return (
        <>
            <Header2 />

            {/* ─── HERO ─── */}
            <section className="gov-hero" ref={heroRef}>
                <div className="gov-hero-video-bg" aria-hidden="true">
                    <video
                        ref={heroVideoRef}
                        className="gov-hero-video"
                        src={heroGovVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />
                </div>
                <div className="gov-hero-overlay" aria-hidden="true" />

                <div className="container gov-hero-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <span className="gov-hero-eyebrow"># Institucional</span>
                            <h1 className="gov-hero-title">
                                Governança<br />
                                <span className="gov-hero-accent">Corporativa</span>
                            </h1>
                            <p className="gov-hero-lead">
                                Estrutura, transparência e comprometimento com os participantes.
                                A Previdência BRB opera com um modelo robusto de governança alinhado
                                às melhores práticas do setor.
                            </p>
                            <ol className="breadcrumb gov-breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                                    Governança
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 4.1 ESTRATÉGIA ─── */}
            <GovSection id="estrategia" eyebrow="Planejamento Estratégico 2025" title="Pensamento e Postura Estratégica" className="gov-section--light">

                <StackedPanels />


            </GovSection>

            {/* ─── SCROLL CARDS: Órgãos Estatutários ─── */}
            <section id="estrutura" className="gov-org-scroll" ref={orgScrollRef}>
                <div className="gov-org-stage">
                    <div className="gov-org-bg" />
                    <div className="gov-org-stage-content">
                        <header className="gov-org-stage-header">
                            <span className="gov-eyebrow" style={{ color: "rgba(200,220,255,.55)" }}>Estrutura</span>
                            <h2 className="gov-org-stage-title">Estrutura de Governança</h2>
                            <p className="gov-org-stage-desc">
                                A estrutura de governança da Previdência BRB, em conformidade com a legislação vigente, está definida por:
                            </p>
                        </header>
                        <div className="gov-org-cards-wrap">

                            {/* CONDE */}
                            <article className="gov-scroll-card">
                                <div className="gov-scroll-card-arcs" aria-hidden="true">
                                    <span /><span /><span /><span />
                                </div>
                                <div>
                                    <div className="gov-info-box-toprow">
                                        <span className="gov-info-box-tag"><i className="fas fa-crown" />CONDE</span>
                                        <span className="gov-info-box-arrow" aria-hidden="true">↗</span>
                                    </div>
                                    <h3 className="gov-scroll-card-title">Conselho Deliberativo</h3>
                                    <p className="gov-info-box-subtitle">Órgão máximo da Entidade</p>
                                    <p className="gov-scroll-card-desc">
                                        Órgão máximo da Entidade, o Conselho Deliberativo é responsável pela definição da política geral de administração da PREVIDÊNCIA BRB e de seus planos de benefícios. Suas atribuições incluem o estabelecimento de diretrizes e orientações estratégicas que norteiam a organização, a operação e a gestão da Entidade.
                                    </p>
                                    <ul className="gov-scroll-card-desc">
                                        <li>2 (dois) membros efetivos dentre Participantes Ativos e Assistidos e igual número de suplentes escolhidos em eleição direta pelos Participantes Ativos e Assistidos; </li>
                                        <li>2 (dois) membros efetivos e igual número de suplentes designados pelas Patrocinadoras ou Instituidoras, desde que dentre os Participantes Ativos e Assistidos dos Planos de Benefícios administrados pela PREVIDÊNCIA BRB.</li>
                                    </ul>
                                </div>
                                <div className="gov-info-box-img-wrap">
                                    <div className="gov-info-box-img">
                                        <img src={IMAGES.boardroomMeet} alt="Governança" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </article>

                            {/* COFIS */}
                            <article className="gov-scroll-card">
                                <div className="gov-scroll-card-arcs" aria-hidden="true">
                                    <span /><span /><span /><span />
                                </div>
                                <div>
                                    <div className="gov-info-box-toprow">
                                        <span className="gov-info-box-tag"><i className="fas fa-search" />COFIS</span>
                                        <span className="gov-info-box-arrow" aria-hidden="true">↗</span>
                                    </div>
                                    <h3 className="gov-scroll-card-title">Conselho Fiscal</h3>
                                    <p className="gov-info-box-subtitle">Controle e fiscalização interna</p>
                                    <p className="gov-scroll-card-desc">
                                        Órgão de controle interno e fiscalização, o Conselho Fiscal tem como principal função zelar pela gestão da PREVIDÊNCIA BRB, assegurando o cumprimento de normas e a correta aplicação dos recursos da Entidade.
•	

                                    </p>
                                    <ul className="gov-scroll-card-desc">
                                        <li>2 (dois) membros efetivos e igual número de suplentes designados por Patrocinadoras e Instituidoras, dentre os Participantes Ativos e Participantes Assistidos. </li>
                                        <li>2 (dois) membros efetivos e igual número de suplentes escolhidos em eleição direta pelos Participantes Ativos e Assistidos.</li>
                                        <li>A presidência do Conselho Fiscal caberá a um dos membros eleitos, escolhido por estes. </li>
                                    </ul>
                                </div>
                                <div className="gov-info-box-img-wrap">
                                    <div className="gov-info-box-img">
                                        <img src={IMAGES.boardroomMeet} alt="Governança" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </article>

                            {/* DIRETORIA */}
                            <article className="gov-scroll-card">
                                <div className="gov-scroll-card-arcs" aria-hidden="true">
                                    <span /><span /><span /><span />
                                </div>
                                <div>
                                    <div className="gov-info-box-toprow">
                                        <span className="gov-info-box-tag"><i className="fas fa-cogs" />DIRET.</span>
                                        <span className="gov-info-box-arrow" aria-hidden="true">↗</span>
                                    </div>
                                    <h3 className="gov-scroll-card-title">Diretoria Executiva</h3>
                                    <p className="gov-info-box-subtitle">Administração geral</p>
                                    <p className="gov-scroll-card-desc">
                                        Responsável pela administração geral da PREVIDÊNCIA BRB, cabe à Diretoria Executiva garantir a observância das normas legais, estatutárias e regulamentares, além de implementar as diretrizes estabelecidas pelo Conselho Deliberativo, alinhadas aos objetivos institucionais.
                                    </p>
                                    <ul className="gov-scroll-card-desc">
                                        <li>Diretor-Presidente – definido por processo seletivo; </li>
                                        <li>Diretor Financeiro — definido por processo seletivo</li>
                                        <li>Diretor de Previdência – eleito dentre os Participantes Ativos e Assistidos.</li>
                                    </ul>
                                </div>
                                <div className="gov-info-box-img-wrap">
                                    <div className="gov-info-box-img">
                                        <img src={IMAGES.boardroomMeet} alt="Governança" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </article>

                            {/* AUDIN */}
                            <article className="gov-scroll-card">
                                <div className="gov-scroll-card-arcs" aria-hidden="true">
                                    <span /><span /><span /><span />
                                </div>
                                <div>
                                    <div className="gov-info-box-toprow">
                                        <span className="gov-info-box-tag"><i className="fas fa-file-alt" />AUDIN</span>
                                        <span className="gov-info-box-arrow" aria-hidden="true">↗</span>
                                    </div>
                                    <h3 className="gov-scroll-card-title">Auditoria Interna</h3>
                                    <p className="gov-info-box-subtitle">Linha de defesa da gestão de riscos</p>
                                    <p className="gov-scroll-card-desc">
                                       Subordinada ao Conselho Deliberativo, a Auditoria Interna, se estrutura como mais uma linha de defesa da gestão de riscos, controles e conformidade.
                                    </p>
                                </div>
                                <div className="gov-info-box-img-wrap">
                                    <div className="gov-info-box-img">
                                        <img src={IMAGES.instTrust} alt="Auditoria Interna" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Comitês ─── */}
            <section className="gov-section gov-section--dark gov-section--support-bg">
                <div className="container">
                    <div className="gov-committees-intro mt-5 mb-4">
                        <span className="gov-eyebrow" style={{ color: "rgba(200,220,255,.55)" }}>Órgãos de Suporte</span>
                        <h3 className="gov-subsection-title" style={{ color: "#fff" }}>Comitês Estratégicos</h3>
                        <p style={{ color: "rgba(200,220,255,.65)", fontSize: "19px", marginTop: "12px", lineHeight: "1.7" }}>
                            Os Órgãos Estatutários da Previdência BRB contam com o suporte de quatro comitês estratégicos: o Comitê de Investimentos (COMIN), o Comitê de Patrocinadoras (COPAT), o Comitê de Gerenciamento de Crise e Imagem (COMCI) e o Comitê de Gestão de Riscos (CORIS).
Os comitês COMIN e COPAT são formados por membros indicados pelas Patrocinadoras e Instituidoras dos planos administrados pela Entidade. Já os comitês COMCI e CORIS são compostos por representantes das unidades organizacionais da Previdência BRB.

                        </p>
                        <div className="gov-divider" style={{ marginTop: "20px" }} />
                    </div>
                    <div className="row g-4">
                        {comites.map((c, i) => (
                            <div className="col-lg-4 col-md-6" key={i} data-reveal style={{ transitionDelay: `${(i % 3) * 110}ms` }}>
                                <div className="gov-info-box gov-info-box--sm">
                                    <div className="gov-info-box-arcs" aria-hidden="true">
                                        <span /><span /><span /><span />
                                    </div>
                                    <div className="gov-info-box-toprow">
                                        <span className="gov-info-box-tag">
                                            <i className={`fas ${c.icon}`} />
                                            {c.sigla}
                                        </span>
                                        <span className="gov-info-box-arrow" aria-hidden="true">↗</span>
                                    </div>
                                    <h4 className="gov-info-box-title gov-info-box-title--sm">{c.nome}</h4>
                                    <p className="gov-info-box-desc">{c.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 4.3 COMPOSIÇÃO ─── */}
            <GovSection id="composicao" eyebrow="Composição" title="Órgãos Estatutários" className="gov-section--light">

                {/* CONDE */}
                <div className="gov-body-group">
                    <div className="gov-body-label">
                        <span className="gov-body-label-tag">CONDE</span>
                        <h3 className="gov-body-title">Conselho Deliberativo</h3>
                    </div>
                    <h4 className="gov-members-category">Membros Efetivos</h4>
                    <div className="row g-3 mb-4">
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "0ms" }}><MemberCard name="Cristiane Maria Lima Bukowitz" role="Conselheira" isPresident /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "80ms" }}><MemberCard name="Dario Oswaldo Garcia Júnior" role="Conselheiro" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "160ms" }}><MemberCard name="Marcelo da Costa Bernardo" role="Conselheiro" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "240ms" }}><MemberCard name="Eliomar dos Santos Lacerda" role="Conselheiro" /></div>
                    </div>
                    <h4 className="gov-members-category">Membros Suplentes</h4>
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "0ms" }}><MemberCard name="Cynthia Judite Perciano Borges" role="Suplente" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "80ms" }}><MemberCard name="Robério César Bonfim Mangueira" role="Suplente" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "160ms" }}><MemberCard name="Luciano Henn Bernardi" role="Suplente" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "240ms" }}><MemberCard name="José Cristóvão de Souza" role="Suplente" /></div>
                    </div>
                </div>

                <div className="gov-section-divider" />

                {/* COFIS */}
                <div className="gov-body-group">
                    <div className="gov-body-label">
                        <span className="gov-body-label-tag gov-body-label-tag--cofis">COFIS</span>
                        <h3 className="gov-body-title">Conselho Fiscal</h3>
                    </div>
                    <h4 className="gov-members-category">Membros Efetivos</h4>
                    <div className="row g-3 mb-4">
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "0ms" }}><MemberCard name="Wendell Feitosa Castro" role="Conselheiro" isPresident /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "80ms" }}><MemberCard name="Carlos José Alves Costa" role="Conselheiro" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "160ms" }}><MemberCard name="Gabriele Galheno Dias" role="Conselheira" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "240ms" }}><MemberCard name="Rodrigo Alves dos Santos" role="Conselheiro" /></div>
                    </div>
                    <h4 className="gov-members-category">Membros Suplentes</h4>
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "0ms" }}><MemberCard name="Wesley de Araújo Medeiros" role="Suplente" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "80ms" }}><MemberCard name="José Percy de Amorim e Silva Filho" role="Suplente" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "160ms" }}><MemberCard name="Abner Luiz da Cruz Nascimento" role="Suplente" /></div>
                        <div className="col-lg-3 col-md-6" data-reveal style={{ transitionDelay: "240ms" }}><MemberCard name="Iure Cavalcante Oliveira" role="Suplente" /></div>
                    </div>
                </div>

                <div className="gov-section-divider" />

                {/* Diretoria */}
                <div className="gov-body-group">
                    <div className="gov-body-label">
                        <span className="gov-body-label-tag gov-body-label-tag--dir">DIRET.</span>
                        <h3 className="gov-body-title">Diretoria Executiva</h3>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6" data-reveal style={{ transitionDelay: "0ms" }}>
                            <MemberCard name="Semíramis Rezende e Silva Magalhães Cezar" role="Diretora-Presidente" isPresident />
                        </div>
                        <div className="col-lg-4 col-md-6" data-reveal style={{ transitionDelay: "110ms" }}>
                            <MemberCard name="Sandro Soares de Souza" role="Diretor Financeiro" />
                        </div>
                        <div className="col-lg-4 col-md-6" data-reveal style={{ transitionDelay: "220ms" }}>
                            <MemberCard name="Laécio Barros Júnior" role="Diretor de Previdência" />
                        </div>
                    </div>
                </div>
            </GovSection>

            <section className="gov-orgchart-section">
                <div className="container">
                    <h2 className="gov-orgchart-title">Organograma Institucional</h2>

                    <section
                        className="gov-orgchart-shell gov-orgchart-desktop"
                        aria-label="Organograma desktop"
                        ref={orgChartShellRef}
                        style={{ "--orgchart-scale": orgChartScale, "--orgchart-height": `${1240 * orgChartScale}px` }}
                    >
                        <div className="gov-orgchart-canvas-stage">
                        <div className="gov-orgchart-canvas">
                            <svg viewBox="0 0 1680 1240" aria-hidden="true">
                                <line className="gov-org-line gov-org-line-strong" x1="840" y1="116" x2="840" y2="220" />
                                <line className="gov-org-line" x1="840" y1="220" x2="550" y2="220" />
                                <line className="gov-org-line" x1="840" y1="220" x2="1130" y2="220" />
                                <line className="gov-org-line gov-org-line-strong" x1="840" y1="220" x2="840" y2="820" />

                                <line className="gov-org-line" x1="840" y1="353" x2="560" y2="353" />
                                <line className="gov-org-line" x1="840" y1="435" x2="560" y2="435" />
                                <line className="gov-org-line" x1="840" y1="517" x2="560" y2="517" />
                                <line className="gov-org-line" x1="840" y1="538" x2="730" y2="538" />
                                <line className="gov-org-line" x1="840" y1="653" x2="560" y2="653" />
                                <line className="gov-org-line" x1="840" y1="735" x2="560" y2="735" />

                                <line className="gov-org-line gov-org-line-strong" x1="840" y1="896" x2="840" y2="930" />
                                <line className="gov-org-line gov-org-line-strong" x1="260" y1="930" x2="1460" y2="930" />

                                <line className="gov-org-line" x1="260" y1="930" x2="260" y2="960" />
                                <line className="gov-org-line" x1="710" y1="930" x2="710" y2="960" />
                                <line className="gov-org-line" x1="950" y1="930" x2="950" y2="960" />
                                <line className="gov-org-line" x1="1190" y1="930" x2="1190" y2="960" />
                                <line className="gov-org-line" x1="1460" y1="930" x2="1460" y2="960" />

                                <line className="gov-org-line" x1="260" y1="1036" x2="260" y2="1070" />
                                <line className="gov-org-line" x1="220" y1="1070" x2="440" y2="1070" />
                                <line className="gov-org-line" x1="220" y1="1070" x2="220" y2="1110" />
                                <line className="gov-org-line" x1="440" y1="1070" x2="440" y2="1110" />

                                <line className="gov-org-line" x1="1460" y1="1036" x2="1460" y2="1070" />
                                <line className="gov-org-line" x1="1406" y1="1070" x2="1592" y2="1070" />
                                <line className="gov-org-line" x1="1406" y1="1070" x2="1406" y2="1110" />
                                <line className="gov-org-line" x1="1592" y1="1070" x2="1592" y2="1110" />
                            </svg>

                            <article className="gov-org-node gov-org-node-core gov-org-node-center" style={{ left: 730, top: 40, width: 220, height: 76, animationDelay: "0.02s" }}>
                                <h3>Conde</h3>
                                <p>Conselho Deliberativo</p>
                            </article>

                            <article className="gov-org-node gov-org-node-side" style={{ left: 280, top: 180, width: 270, height: 76, animationDelay: "0.08s" }}>
                                <h3>Audin</h3>
                                <p>Auditoria Interna</p>
                            </article>

                            <article className="gov-org-node gov-org-node-side" style={{ left: 1130, top: 180, width: 270, height: 76, animationDelay: "0.1s" }}>
                                <h3>Cofis</h3>
                                <p>Conselho Fiscal</p>
                            </article>

                            <article className="gov-org-node gov-org-node-side" style={{ left: 250, top: 320, width: 310, height: 66, animationDelay: "0.15s" }}>
                                <h3>Comed</h3>
                                <p>Comitê de Ética e Disciplina</p>
                            </article>

                            <article className="gov-org-node gov-org-node-side" style={{ left: 250, top: 402, width: 310, height: 66, animationDelay: "0.18s" }}>
                                <h3>Coris</h3>
                                <p>Comitê de Gestão de Riscos</p>
                            </article>

                            <article className="gov-org-node gov-org-node-side" style={{ left: 250, top: 484, width: 310, height: 66, animationDelay: "0.2s" }}>
                                <h3>Comci</h3>
                                <p>Comitê de Gerenciamento de Crise e Imagem</p>
                            </article>

                            <article className="gov-org-node gov-org-node-core" style={{ left: 730, top: 500, width: 240, height: 76, animationDelay: "0.22s" }}>
                                <h3>Direx</h3>
                                <p>Diretoria Executiva</p>
                            </article>

                            <article className="gov-org-node gov-org-node-side" style={{ left: 250, top: 620, width: 310, height: 66, animationDelay: "0.25s" }}>
                                <h3>Comin</h3>
                                <p>Comitê de Investimento</p>
                            </article>

                            <article className="gov-org-node gov-org-node-side" style={{ left: 250, top: 702, width: 310, height: 66, animationDelay: "0.28s" }}>
                                <h3>Copat</h3>
                                <p>Comitê de Patrocinadoras e Instituidoras</p>
                            </article>

                            <article className="gov-org-node gov-org-node-presi gov-org-node-core" style={{ left: 690, top: 820, width: 300, height: 76, animationDelay: "0.32s" }}>
                                <h3>Presi</h3>
                                <p>Presidência</p>
                            </article>

                            <article className="gov-org-node" style={{ left: 120, top: 960, width: 280, height: 76, animationDelay: "0.36s" }}>
                                <h3>Dipre</h3>
                                <p>Previdência</p>
                            </article>

                            <article className="gov-org-node" style={{ left: 600, top: 960, width: 220, height: 76, animationDelay: "0.38s" }}>
                                <h3>Gejur</h3>
                                <p>Jurídico</p>
                            </article>

                            <article className="gov-org-node" style={{ left: 840, top: 960, width: 220, height: 76, animationDelay: "0.4s" }}>
                                <h3>Gegop</h3>
                                <p>Governança e Planejamento</p>
                            </article>

                            <article className="gov-org-node" style={{ left: 1080, top: 960, width: 220, height: 76, animationDelay: "0.42s" }}>
                                <h3>Gecor</h3>
                                <p>Controle, Orçamento e Risco (Compliance Officer)</p>
                            </article>

                            <article className="gov-org-node" style={{ left: 1320, top: 960, width: 280, height: 76, animationDelay: "0.44s" }}>
                                <h3>Difin</h3>
                                <p>Diretoria de Administração e Finanças</p>
                            </article>

                            <article className="gov-org-node gov-org-node-child" style={{ left: 120, top: 1110, width: 200, height: 68, animationDelay: "0.47s" }}>
                                <h3>Gerep</h3>
                                <p>Relacionamento e Previdência</p>
                            </article>

                            <article className="gov-org-node gov-org-node-child" style={{ left: 340, top: 1110, width: 200, height: 68, animationDelay: "0.49s" }}>
                                <h3>Gecat</h3>
                                <p>Canais e Tecnologia</p>
                            </article>

                            <article className="gov-org-node gov-org-node-child" style={{ left: 1318, top: 1110, width: 176, height: 68, animationDelay: "0.52s" }}>
                                <h3>Geinv</h3>
                                <p>Investimento</p>
                            </article>

                            <article className="gov-org-node gov-org-node-child" style={{ left: 1504, top: 1110, width: 176, height: 68, animationDelay: "0.54s" }}>
                                <h3>Gepac</h3>
                                <p>Pessoas, Adm. e Contratos</p>
                            </article>
                        </div>
                        </div>
                    </section>

                    <section className="gov-orgchart-shell gov-orgchart-mobile" aria-label="Organograma mobile">
                        <div className="gov-org-stack">
                            <article className="gov-org-node gov-org-node-core gov-org-node-center">
                                <h3>Conde</h3>
                                <p>Conselho Deliberativo</p>
                            </article>

                            <div className="gov-org-group-title">Órgãos de apoio</div>
                            <article className="gov-org-node gov-org-node-side"><h3>Audin</h3><p>Auditoria Interna</p></article>
                            <article className="gov-org-node gov-org-node-side"><h3>Cofis</h3><p>Conselho Fiscal</p></article>
                            <article className="gov-org-node gov-org-node-side"><h3>Comed</h3><p>Comitê de Ética e Disciplina</p></article>
                            <article className="gov-org-node gov-org-node-side"><h3>Coris</h3><p>Comitê de Gestão de Riscos</p></article>
                            <article className="gov-org-node gov-org-node-side"><h3>Comci</h3><p>Comitê de Gerenciamento de Crise e Imagem</p></article>
                            <article className="gov-org-node gov-org-node-core"><h3>Direx</h3><p>Diretoria Executiva</p></article>
                            <article className="gov-org-node gov-org-node-side"><h3>Comin</h3><p>Comitê de Investimento</p></article>
                            <article className="gov-org-node gov-org-node-side"><h3>Copat</h3><p>Comitê de Patrocinadoras e Instituidoras</p></article>
                            <article className="gov-org-node gov-org-node-presi gov-org-node-core"><h3>Presi</h3><p>Presidência</p></article>

                            <div className="gov-org-group-title">Áreas subordinadas</div>
                            <article className="gov-org-node"><h3>Dipre</h3><p>Previdência</p></article>
                            <article className="gov-org-node gov-org-node-child"><h3>Gerep</h3><p>Relacionamento e Previdência</p></article>
                            <article className="gov-org-node gov-org-node-child"><h3>Gecat</h3><p>Canais e Tecnologia</p></article>

                            <article className="gov-org-node"><h3>Gejur</h3><p>Jurídico</p></article>
                            <article className="gov-org-node"><h3>Gegop</h3><p>Governança e Planejamento</p></article>
                            <article className="gov-org-node"><h3>Gecor</h3><p>Controle, Orçamento e Risco (Compliance Officer)</p></article>

                            <article className="gov-org-node"><h3>Difin</h3><p>Diretoria de Administração e Finanças</p></article>
                            <article className="gov-org-node gov-org-node-child"><h3>Geinv</h3><p>Investimento</p></article>
                            <article className="gov-org-node gov-org-node-child"><h3>Gepac</h3><p>Pessoas, Adm. e Contratos</p></article>
                        </div>
                    </section>

                    <section className="gov-org-legend" aria-label="Legenda de siglas">
                        <div className="gov-org-legend-box">
                            <div className="gov-org-legend-item"><strong>Conde</strong> - Conselho Deliberativo</div>
                            <div className="gov-org-legend-item"><strong>Cofis</strong> - Conselho Fiscal</div>
                            <div className="gov-org-legend-item"><strong>Direx</strong> - Diretoria Executiva</div>
                            <div className="gov-org-legend-gap" />
                            <div className="gov-org-legend-item gov-org-legend-soft"><strong>Audin</strong> - Auditoria Interna</div>
                            <div className="gov-org-legend-gap" />
                            <div className="gov-org-legend-item"><strong>Comed</strong> - Comitê de Ética e Disciplina</div>
                            <div className="gov-org-legend-item"><strong>Coris</strong> - Comitê de Gestão de Riscos</div>
                            <div className="gov-org-legend-item"><strong>Comci</strong> - Comitê de Gerenciamento de Crise e Imagem</div>
                            <div className="gov-org-legend-item"><strong>Comin</strong> - Comitê de Investimento</div>
                            <div className="gov-org-legend-item"><strong>Copat</strong> - Comitê de Patrocinadoras e Instituidoras</div>
                        </div>

                        <div className="gov-org-legend-divider" aria-hidden="true" />

                        <div className="gov-org-legend-box">
                            <div className="gov-org-legend-item"><strong>Presi</strong> - Presidência</div>
                            <div className="gov-org-legend-item"><strong>Gejur</strong> - Gerência Jurídica</div>
                            <div className="gov-org-legend-item"><strong>Gegop</strong> - Gerência de Governança e Planejamento</div>
                            <div className="gov-org-legend-item"><strong>Gecor</strong> - Gerência de Controle, Orçamento e Risco</div>
                            <div className="gov-org-legend-gap" />
                            <div className="gov-org-legend-item"><strong>Difin</strong> - Diretoria de Administração e Finanças</div>
                            <div className="gov-org-legend-item"><strong>Geinv</strong> - Gerência de Investimento</div>
                            <div className="gov-org-legend-item"><strong>Gepac</strong> - Gerência de Pessoas, Adm. e Contratos</div>
                            <div className="gov-org-legend-gap" />
                            <div className="gov-org-legend-item"><strong>Dipre</strong> - Diretoria de Previdência</div>
                            <div className="gov-org-legend-item"><strong>Gerep</strong> - Gerência de Relacionamento e Previdência</div>
                            <div className="gov-org-legend-item"><strong>Gecat</strong> - Gerência de Canais e Tecnologia</div>
                        </div>
                    </section>
                </div>
            </section>

            {/* ─── INDEX DOBRA ─── */}
            <section className="gap services-index-section">
                <ParticlesComponent id="services-particles-gov" className="services-particles-bg" />
                <div className="container">
                    <div className="services-index-intro">
                        <span className="services-index-label"># Índice</span>
                        <h2 className="services-index-heading">
                            <span>Conheça os planos da </span>
                            <span className="services-index-accent">Previdência BRB</span>{" "}
                            <span>e descubra o que o seu plano oferece para o seu futuro.</span>
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

export default Governanca;

function StackedPanels() {
    const containerRef = useRef(null);

    const panels = [
        {
            bg: "#003566",
            img: imgProposito,
            eyebrow: "Propósito",
            title: "Missão",
            text: "O futuro que você sonha está em nossos Planos.",
        },
        {
            bg: "#004e92",
            img: imgProposta,
            eyebrow: null,
            title: "Proposta de Valor",
            text: "Entregar Planos de Previdência Complementar sustentáveis e seguros, proporcionando qualidade de vida e bem-estar para você.",
        },
        {
            bg: "#0077b6",
            img: imgPosicionamento,
            eyebrow: null,
            title: "Posicionamento Estratégico da Organização",
            text: "Crescimento sustentado na excelência operacional, relacionamento de qualidade, segurança e rentabilidade na gestão dos recursos e custos adequados.",
        },
        {
            bg: "#00b4d8",
            img: imgVisao,
            eyebrow: null,
            title: "Visão",
            text: "Ser uma entidade fechada de previdência complementar com portfólio de produtos inovadores e de qualidade, com rentabilidade acima do mercado, solidez nos controles internos, marca forte, com gradual e consistente crescimento no volume dos recursos administrados e no número de participantes, com atuação em todo o território nacional, até 2030.",
        },
        {
            bg: "#023e8a",
            img: imgValores,
            eyebrow: null,
            title: "Valores",
            values: [
                { label: "Respeito", desc: "Respeitamos e valorizamos as pessoas." },
                { label: "Foco no Participante", desc: "Reconhecemos no participante a razão de existir da Previdência BRB." },
                { label: "Relações Institucionais", desc: "Zelamos pela qualidade e transparência nas relações." },
                { label: "Transparência", desc: "Primamos pela clareza e tempestividade na prestação de informações." },
                { label: "Compromisso", desc: "Somos comprometidos com a realização dos sonhos e qualidade de vida dos participantes e seus familiares." },
                { label: "Eficácia na Gestão", desc: "Temos foco no resultado e agimos com transparência, integridade e responsabilidade socioambiental." },
                { label: "Segurança", desc: "Prezamos pela segurança das informações, do dinheiro investido e pelo cumprimento das normas e regulamentos." },
                { label: "Espírito Empreendedor", desc: "Agimos com pensamento inovador para agregar valor à experiência dos nossos clientes." },
                { label: "Sustentabilidade", desc: "Priorizamos a sustentabilidade dos planos administrados e a perenidade da Previdência BRB." },
            ],
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".stacked-panel", containerRef.current);

            items.forEach((panel, index) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    pinSpacing: index === items.length - 1,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="stacked-panels-wrapper" style={{ position: 'relative' }}>
            <div ref={containerRef} style={{ margin: '0 calc(-50vw + 50%)', width: '100vw' }}>
                {panels.map((p, i) => (
                    <div
                        key={i}
                        className="stacked-panel"
                        style={{
                            backgroundImage: `url(${p.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '60px 40px',
                            position: 'relative',
                            zIndex: i + 1,
                        }}
                    >
                        {/* overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: `${p.bg}cc`,
                        }} />
                        <div style={{ position: 'relative', zIndex: 1, maxWidth: p.values ? '1100px' : '800px', textAlign: 'center' }}>
                            <span style={{
                                display: 'block',
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '14px',
                                fontWeight: '700',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                marginBottom: '24px',
                            }}>
                                {p.eyebrow}
                            </span>
                            {p.title && (
                                <h2 style={{
                                    color: '#fff',
                                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                                    fontWeight: '900',
                                    marginBottom: '28px',
                                    lineHeight: 1.1,
                                }}>
                                    {p.title}
                                </h2>
                            )}
                            {p.text && (
                                <p style={{
                                    color: 'rgba(255,255,255,0.92)',
                                    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                                    lineHeight: '1.65',
                                    fontWeight: '400',
                                    margin: 0,
                                }}>
                                    {p.text}
                                </p>
                            )}
                            {p.values && (
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '12px',
                                    textAlign: 'left',
                                }}>
                                    {p.values.map((v, k) => (
                                        <div key={k} style={{
                                            background: 'rgba(255,255,255,0.1)',
                                            borderRadius: '10px',
                                            padding: '20px 22px',
                                            backdropFilter: 'blur(4px)',
                                        }}>
                                            <span style={{ color: '#fff', fontWeight: '700', fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)', display: 'block', marginBottom: '4px' }}>
                                                {v.label}
                                            </span>
                                            <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', lineHeight: '1.5' }}>
                                                {v.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* dots */}
                        <div style={{
                            position: 'absolute',
                            bottom: '32px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '8px',
                            zIndex: 1,
                        }}>
                            {panels.map((_, j) => (
                                <div key={j} style={{
                                    width: j === i ? '28px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: j === i ? '#fff' : 'rgba(255,255,255,0.35)',
                                    transition: 'width 0.3s',
                                }} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
