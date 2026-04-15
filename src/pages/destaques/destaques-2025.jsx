import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header2 from "../../layout/header2";
import Footer2 from "../../layout/footer2";
import ParticlesComponent from "../../components/ui/particles-bg";
import { servicedata2 } from "../../constant/alldata";
import headerDestaqueVideo from "../../assets/img/header_destaque.mp4";

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
                            Previdência BRB integra ações <span className="dstq-accent">ASG</span>
                        </h2>
                        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                            A Previdência BRB entende que a responsabilidade socioambiental deve estar integrada à sua
                            atuação cotidiana, indo além de iniciativas pontuais. Esse compromisso faz parte da cultura
                            organizacional e orienta o relacionamento com participantes, colaboradores e a sociedade.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            Nossas práticas são fundamentadas em princípios de Governança Corporativa, Sustentabilidade
                            Ambiental e Responsabilidade Social, conforme diretrizes estabelecidas na Política de
                            Responsabilidade Socioambiental (PRSA).
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            Com o propósito de assegurar transparência às iniciativas desenvolvidas, divulgamos
                            semestralmente o Relatório de Entregas ASG, no qual são apresentadas as ações realizadas em
                            benefício do meio ambiente, do bem-estar coletivo e do fortalecimento da governança.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                            Os relatórios contemplam iniciativas como programas de educação financeira e previdenciária,
                            apoio a projetos sociais, promoção do uso consciente de recursos, incentivo ao voluntariado
                            e adoção de práticas sustentáveis no ambiente corporativo.
                        </p>
                    </div>
                    <div className="dstq-reveal dstq-reveal--d2">
                        <div className="dstq-img-card">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                                alt="Sustentabilidade ASG"
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
                            Sustentabilidade nos <span className="dstq-accent">investimentos</span>
                        </h2>
                        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                            No exercício de 2025, a Entidade reconheceu e consolidou a relevância dos aspectos
                            relacionados à sustentabilidade econômica, ambiental, social e de governança (ASG) no
                            processo de investimentos, em linha com as diretrizes da Resolução PREVIC nº 26/2025.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            A Entidade já incorpora, de forma progressiva, critérios ASG em suas práticas de
                            investimentos, tanto por meio da análise qualitativa de riscos socioambientais e de
                            governança nos ativos investidos, quanto pela alocação de parcela relevante dos recursos
                            em estratégias com abordagem específica ASG.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            As diretrizes relacionadas à sustentabilidade encontram-se refletidas na Política de
                            Investimentos, que contempla a avaliação de riscos associados a fatores ambientais, sociais
                            e de governança no âmbito da gestão dos recursos garantidores.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                            A Entidade reforça seu compromisso com o contínuo aperfeiçoamento das práticas ASG,
                            incluindo a ampliação da integração sistemática desses fatores nos processos de
                            investimento ao longo de 2026.
                        </p>
                    </div>
                    <div className="dstq-reveal dstq-reveal--d2">
                        <div className="dstq-img-card">
                            <img
                                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
                                alt="Investimentos sustentáveis"
                            />
                            <div className="dstq-img-badge">Resolução PREVIC nº 26/2025</div>
                        </div>
                    </div>
                </div>

                <div className="dstq-stats-row dstq-reveal dstq-reveal--d2">
                    <div className="dstq-stat">
                        <div className="dstq-stat-num">ASG</div>
                        <div className="dstq-stat-lbl">Critérios integrados à Política de Investimentos</div>
                    </div>
                    <div className="dstq-stat">
                        <div className="dstq-stat-num">2026</div>
                        <div className="dstq-stat-lbl">Meta de ampliação sistemática dos fatores ASG</div>
                    </div>
                    <div className="dstq-stat">
                        <div className="dstq-stat-num">3º</div>
                        <div className="dstq-stat-lbl">Ciclo de evolução do framework de integração ASG</div>
                    </div>
                    <div className="dstq-stat">
                        <div className="dstq-stat-num">100%</div>
                        <div className="dstq-stat-lbl">Aderência às diretrizes da PREVIC</div>
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
    const eventos = [
        {
            data: "Abril 2025",
            titulo: "Feira de Profissões – CEM 01 de Sobradinho",
            texto: "Pela segunda vez, a Entidade esteve presente na Feira de Profissões, com duas palestras sobre as profissões mais demandadas pelo mercado e sobre educação financeira para os estudantes.",
        },
        {
            data: "22/04/2025",
            titulo: "Escola Classe 02 da Candangolândia",
            texto: "Duas apresentações para turmas do 5º ano no âmbito do Projeto de Educação Financeira e Previdenciária.",
        },
        {
            data: "25/04/2025",
            titulo: "Escola Classe 413 Sul",
            texto: "Duas apresentações para turmas do 5º ano, além de uma apresentação para pais e responsáveis em 15/05/2025.",
        },
        {
            data: "30/05/2025",
            titulo: "Festa da Família – Escola Classe 03 do Núcleo Bandeirante",
            texto: "Participação levando o tema de educação financeira e previdenciária para a comunidade escolar.",
        },
        {
            data: "Campanha",
            titulo: "Tampinhas do Bem BRB",
            texto: "Ao final das atividades nas escolas, foi realizada uma campanha de arrecadação de tampinhas plásticas, doadas ao projeto Tampinhas do Bem BRB.",
        },
    ];

    return (
        <section id="projetos" className="dstq-section">
            <div className="container">
                <div className="dstq-section-label dstq-reveal">Educação e Comunidade</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Projetos <span className="dstq-accent">Sociais</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                    A Previdência BRB participou de iniciativas sociais voltadas à educação de jovens e crianças em
                    escolas públicas do Distrito Federal, levando educação financeira e previdenciária para a comunidade.
                </p>

                <div className="dstq-timeline dstq-reveal dstq-reveal--d3">
                    {eventos.map((ev, i) => (
                        <div className="dstq-tl-item" key={i}>
                            <div className="dstq-tl-date">{ev.data}</div>
                            <div>
                                <div className="dstq-tl-title">{ev.titulo}</div>
                                <div className="dstq-tl-text">{ev.texto}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Full Image — Transição Comunicação
───────────────────────────────────────────── */
function FullImgComunicacao() {
    return (
        <div className="dstq-full-img">
            <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
                alt="Comunicação digital"
            />
            <div className="dstq-full-img-content">
                <div className="dstq-section-label dstq-reveal">Transparência Ativa</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1" style={{ maxWidth: 700 }}>
                    Comunicação com foco na <span className="dstq-accent">transparência</span>
                </h2>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Seção 4 — Comunicação
───────────────────────────────────────────── */
function SecaoComunicacao() {
    const cards = [
        {
            icon: "🌐",
            titulo: "Novo Site Institucional",
            texto: "Plataforma moderna, intuitiva e acessível com conteúdos organizados e dinâmicos sobre gestão e planos de benefícios.",
        },
        {
            icon: "📊",
            titulo: "Previdência em Números",
            texto: "Informativo mensal com dados e indicadores dos planos de benefícios, publicado em área aberta para acesso público.",
        },
        {
            icon: "📢",
            titulo: "Comunica Previdência BRB",
            texto: "Canal de disseminação de conteúdos sobre compliance, integridade, ESG e LGPD.",
        },
        {
            icon: "💼",
            titulo: "Carteira de Investimentos",
            texto: "Informações completas sobre planos de benefícios, regulamentos, características, desempenho e carteira de investimentos.",
        },
    ];

    return (
        <section id="comunicacao" className="dstq-section dstq-section--light">
            <div className="container">
                <div className="dstq-split">
                    <div>
                        <div className="dstq-section-label dstq-reveal">Transparência Ativa</div>
                        <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
                            Comunicação com foco na <span className="dstq-accent">transparência</span>
                        </h2>
                        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
                            A Previdência BRB mantém o compromisso contínuo com a transparência, a clareza das
                            informações e o fortalecimento do relacionamento com seus participantes, assistidos e
                            demais públicos de interesse.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3">
                            Ao final de 2024, a Entidade implementou um novo site institucional, mais moderno, intuitivo
                            e acessível, desenvolvido para facilitar o acesso às informações e aprimorar a experiência
                            do usuário.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3">
                            O ambiente digital conta com notícias constantemente atualizadas, além de disponibilizar
                            diferentes frentes de informação, como o{" "}
                            <strong style={{ color: "#0a1f3c" }}>Previdência em Números</strong>, informativo mensal
                            com dados e indicadores dos planos de benefícios.
                        </p>
                        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d4">
                            Destaca-se também o{" "}
                            <strong style={{ color: "#0a1f3c" }}>Comunica Previdência BRB</strong>, canal voltado à
                            disseminação de conteúdos relacionados a compliance, integridade, ESG e LGPD.
                        </p>
                    </div>
                    <div>
                        <div className="dstq-cards-grid" style={{ marginTop: 0 }}>
                            {cards.map((c, i) => (
                                <div className={`dstq-card dstq-card--on-light dstq-reveal dstq-reveal--d${i + 1}`} key={i}>
                                    <div className="dstq-card-icon">{c.icon}</div>
                                    <div className="dstq-card-title">{c.titulo}</div>
                                    <div className="dstq-card-text">{c.texto}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Seção 5 — Segurança
───────────────────────────────────────────── */
function SecaoSeguranca() {
    const cards = [
        { icon: "🔐", titulo: "Autenticação Multifator (MFA)", texto: "Implementação de MFA em ambientes críticos, reforçando os mecanismos de controle de acesso e mitigando riscos associados a credenciais comprometidas." },
        { icon: "🛡️", titulo: "SOC e SIEM Aprimorados", texto: "Evolução na capacidade de monitoramento e resposta a incidentes, com aprimoramento do Centro de Operações de Segurança e dos mecanismos de correlação de eventos." },
        { icon: "🔍", titulo: "Testes de Intrusão", texto: "Realização de pentests e avaliações periódicas de vulnerabilidades. Nenhuma vulnerabilidade crítica de alto impacto foi identificada." },
        { icon: "📋", titulo: "Gestão de Incidentes", texto: "Capacidade estruturada de resposta com registro formal, análise técnica, medidas de contenção e ações preventivas, em conformidade com a LGPD." },
        { icon: "🔄", titulo: "Melhoria Contínua", texto: "Não conformidades identificadas em ciclos anteriores foram devidamente tratadas, com implementação de ações corretivas e validação de eficácia." },
        { icon: "🚀", titulo: "Preparação para ISO 27701:2025", texto: "Entidade estrategicamente posicionada para o próximo ciclo evolutivo, com iniciativas voltadas à adequação aos novos referenciais internacionais de privacidade." },
    ];

    return (
        <section id="seguranca" className="dstq-section">
            <div className="container">
                <div className="dstq-split dstq-split--rev">
                    <div>
                        <div className="dstq-section-label dstq-reveal">Governança e Conformidade</div>
                        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                            Segurança da informação e <span className="dstq-accent">proteção de dados</span>
                        </h2>
                        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                            No exercício de 2025, a PREVIDÊNCIA BRB manteve seu posicionamento institucional em
                            governança, segurança da informação e proteção de dados pessoais, consolidando práticas
                            estruturadas ao longo dos ciclos anteriores de certificação.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            A Entidade se encontra no terceiro ciclo de auditoria de certificação, evidenciando
                            estabilidade, continuidade e efetividade do seu Sistema de Gestão da Segurança da
                            Informação (SGSI) e do Sistema de Gestão da Privacidade da Informação (SGPI).
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            Foi realizado upgrade normativo da certificação ISO/IEC 27001, passando integralmente à
                            versão mais atual da norma (ISO/IEC 27001:2022), conforme certificado emitido por organismo
                            acreditado internacionalmente.
                        </p>
                        <div className="dstq-cert-badges dstq-reveal dstq-reveal--d4">
                            {["ISO/IEC 27001:2022", "ISO/IEC 27701:2019", "LGPD", "ANPD", "PREVIC"].map((b) => (
                                <span className="dstq-cert-badge" key={b}>{b}</span>
                            ))}
                        </div>
                    </div>
                    <div className="dstq-reveal dstq-reveal--d2">
                        <div className="dstq-img-card">
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                                alt="Segurança da informação"
                            />
                            <div className="dstq-img-badge">3º Ciclo de Certificação</div>
                        </div>
                    </div>
                </div>

                <div className="dstq-cards-grid dstq-reveal dstq-reveal--d2" style={{ marginTop: "4rem" }}>
                    {cards.map((c, i) => (
                        <div className="dstq-card" key={i}>
                            <div className="dstq-card-icon">{c.icon}</div>
                            <div className="dstq-card-title">{c.titulo}</div>
                            <div className="dstq-card-text">{c.texto}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Band 2 — Citação Segurança
───────────────────────────────────────────── */
function Band2() {
    return (
        <div className="dstq-band">
            <div className="dstq-band-inner">
                <p className="dstq-band-quote dstq-reveal">
                    "O exercício de 2025 consolidou o posicionamento da Previdência BRB em elevado nível de maturidade
                    em segurança da informação e proteção de dados pessoais, refletido na manutenção do terceiro ciclo
                    de certificação ISO."
                </p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Seção 6 — Inovação
───────────────────────────────────────────── */
function SecaoInovacao() {
    const cards = [
        { icon: "🤖", titulo: "VIVI – Assistente Virtual com IA", texto: "Implantação da VIVI, assistente virtual baseada em inteligência artificial, integrada ao WhatsApp. Trouxe mais agilidade, disponibilidade e qualidade no atendimento aos participantes." },
        { icon: "📱", titulo: "Novo Aplicativo Institucional", texto: "Construção de novo aplicativo com foco em modernização, usabilidade e integração de serviços, consolidando diversos serviços em um único canal digital." },
        { icon: "🏆", titulo: "Plataforma de Prêmios", texto: "Solução inovadora que fortalece o engajamento dos participantes. Os usuários podem indicar novos participantes, acumular pontos e resgatar brindes em uma jornada gamificada." },
        { icon: "🔒", titulo: "Certificações ISO Mantidas", texto: "Manutenção das certificações ISO 27001 e ISO 27701, reforçando o compromisso com a proteção de dados sensíveis e a privacidade das informações." },
    ];

    return (
        <section id="inovacao" className="dstq-section dstq-section--dark">
            <div className="container">
                <div className="dstq-split">
                    <div>
                        <div className="dstq-section-label dstq-reveal">Transformação Digital</div>
                        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                            Grandes avanços em <span className="dstq-accent">inovação tecnológica</span>
                        </h2>
                        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
                            O ano de 2025 consolidou a GECAT como um dos principais vetores de inovação e transformação
                            digital da Previdência BRB, com iniciativas estratégicas voltadas à experiência do
                            participante, eficiência operacional e segurança da informação.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d3">
                            Essas entregas refletem uma atuação cada vez mais estratégica da GECAT, posicionando a
                            tecnologia como elemento central na evolução dos serviços previdenciários, sempre com foco
                            em inovação, segurança e excelência no atendimento.
                        </p>
                        <p className="dstq-text-body dstq-reveal dstq-reveal--d4">
                            Seguimos comprometidos com a construção de soluções que agreguem valor real aos
                            participantes e fortaleçam a Previdência BRB como referência em transformação digital
                            no setor.
                        </p>
                    </div>
                    <div className="dstq-reveal dstq-reveal--d2">
                        <div className="dstq-img-card">
                            <img
                                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
                                alt="Inovação tecnológica e IA"
                            />
                            <div className="dstq-img-badge">GECAT · Inovação 2025</div>
                        </div>
                    </div>
                </div>

                <div className="dstq-cards-grid dstq-reveal dstq-reveal--d2" style={{ marginTop: "4rem" }}>
                    {cards.map((c, i) => (
                        <div className="dstq-card" key={i}>
                            <div className="dstq-card-icon">{c.icon}</div>
                            <div className="dstq-card-title">{c.titulo}</div>
                            <div className="dstq-card-text">{c.texto}</div>
                        </div>
                    ))}
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
                        <span className="thin">2025</span> Destaques
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
            <SecaoSeguranca />
            <Band2 />
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
                                <div className="services-two">
                                    <i>{data.icon}</i>
                                    <h3><Link to={"#"}>{data.title}</Link></h3>
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
