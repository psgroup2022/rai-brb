import { Globe, TrendingUp, Landmark } from "lucide-react";
import globalImg from "../../assets/img/global.jpg";

export default function SecaoEconomia() {
    return (
        <section id="economia" className="plano-section">
            <div className="container">

                {/* ── Cabeçalho ── */}
                <div className="dstq-section-label dstq-reveal">Contexto Macroeconômico</div>
                <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
                    Comportamento da Economia global em <span className="dstq-accent">2025</span>
                </h2>
                <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

                {/* ── Hero da imagem ── */}
                <div className="macro-eco-hero dstq-reveal dstq-reveal--d2">
                    <img src={globalImg} alt="Economia Global 2025" />
                    <div className="macro-eco-hero-overlay" />
                </div>

                {/* ── Grade 2×2 de cartões ── */}
                <div className="macro-eco-sections-grid">

                    {/* Cenário Global */}
                    <div className="macro-eco-section-card dstq-reveal">
                        <div className="macro-eco-section-label">
                            <Globe size={15} strokeWidth={2} />
                            Cenário Global
                        </div>
                        <p className="macro-eco-card-text">O ano de 2025 foi marcado por um ambiente macroeconômico global ainda desafiador, caracterizado pela transição do ciclo de aperto monetário nas principais economias e pela manutenção de níveis elevados de incerteza.</p>
                        <p className="macro-eco-card-text">Nos Estados Unidos, o Federal Reserve adotou postura cautelosa ao longo do período, mantendo taxas de juros em patamares restritivos diante de uma inflação que, embora em desaceleração, permaneceu acima da meta. A economia norte-americana demonstrou resiliência, porém com sinais de moderação, levando os mercados a postergarem as expectativas de início de flexibilização monetária.</p>
                        <p className="macro-eco-card-text">Adicionalmente, o ambiente internacional foi impactado por tensões comerciais relevantes, especialmente associadas à política tarifária dos Estados Unidos, elevando a volatilidade e os riscos sobre crescimento e inflação globais. Na Europa, observou-se tendência de flexibilização gradual da política monetária, enquanto a China apresentou crescimento mais moderado, com estímulos menos intensos, reforçando um cenário global de desaceleração controlada.</p>
                    </div>

                    {/* Brasil */}
                    <div className="macro-eco-section-card macro-eco-section-card--brasil dstq-reveal dstq-reveal--d1">
                        <div className="macro-eco-section-label">
                            <span style={{ fontSize: '0.95rem', lineHeight: 1 }}>🇧🇷</span>
                            Brasil
                        </div>
                        <div className="macro-eco-selic-badge">
                            <span className="macro-eco-selic-val">15,00%</span>
                            <span className="macro-eco-selic-lbl">Taxa Selic a.a.</span>
                        </div>
                        <p className="macro-eco-card-text">No Brasil, a atividade econômica manteve-se resiliente ao longo do ano, sustentada principalmente pelo desempenho do setor agropecuário e pela solidez do mercado de trabalho. Contudo, a inflação, apesar de apresentar trajetória de moderação, permaneceu pressionada em seus componentes mais persistentes, exigindo a manutenção de uma política monetária restritiva. Nesse contexto, o Banco Central elevou a taxa Selic para patamares próximos de 15,00%, sinalizando o encerramento do ciclo de alta, com perspectiva de manutenção em nível elevado por período prolongado.</p>
                        <p className="macro-eco-card-text">O cenário fiscal seguiu como principal vetor de risco doméstico, influenciando diretamente a dinâmica das curvas de juros e a percepção de risco dos investidores. As discussões sobre equilíbrio das contas públicas e medidas de ajuste fiscal contribuíram para a manutenção de prêmios elevados nos ativos locais.</p>
                    </div>

                    {/* Mercados Financeiros */}
                    <div className="macro-eco-section-card dstq-reveal dstq-reveal--d1">
                        <div className="macro-eco-section-label">
                            <TrendingUp size={15} strokeWidth={2} />
                            Mercados Financeiros
                        </div>
                        <p className="macro-eco-card-text">Nos mercados financeiros, a renda fixa refletiu a volatilidade das expectativas macroeconômicas, com oscilações relevantes nas curvas de juros ao longo do ano. O ambiente de taxas elevadas proporcionou oportunidades em ativos com prêmios atrativos, ainda que demandando maior seletividade. No crédito privado, observou-se manutenção da demanda e compressão gradual de spreads, reforçando a importância de alocação criteriosa.</p>
                        <p className="macro-eco-card-text">A renda variável apresentou comportamento volátil no cenário global, alternando períodos de recuperação e ajuste, em função das incertezas relacionadas à política monetária e ao crescimento econômico. No Brasil, o desempenho da bolsa foi parcialmente sustentado por fluxos externos, mas limitado pelas incertezas fiscais e pelo nível elevado de juros. No mercado de câmbio, o real apresentou oscilações ao longo do ano, influenciado pelo diferencial de juros e pelo ambiente de risco global e doméstico.</p>
                        <p className="macro-eco-card-text">No campo estrutural, destacaram-se os avanços relacionados à inteligência artificial, com impactos relevantes sobre produtividade e demanda por energia, além de evoluções no ambiente regulatório do mercado de capitais brasileiro, com foco em aprimoramento de governança.</p>
                    </div>

                    {/* Gestão dos Planos */}
                    <div className="macro-eco-section-card dstq-reveal dstq-reveal--d2">
                        <div className="macro-eco-section-label">
                            <Landmark size={15} strokeWidth={2} />
                            Gestão dos Planos
                        </div>
                        <p className="macro-eco-card-text">No âmbito institucional, os planos administrados apresentaram desempenho consistente ao longo do exercício, refletindo a estratégia de alocação adotada em um ambiente de juros elevados e elevada volatilidade. A predominância de ativos de renda fixa, combinada com gestão ativa e seletiva, contribuiu para a captura de prêmios relevantes, especialmente em títulos indexados à inflação e instrumentos de crédito privado. A exposição à renda variável foi conduzida de forma prudente, considerando o cenário de incertezas, enquanto as posições em ativos internacionais e câmbio contribuíram para diversificação e mitigação de riscos.</p>
                        <p className="macro-eco-card-text">Os indicadores consolidados demonstram evolução patrimonial dos planos, com manutenção do equilíbrio atuarial e aderência às metas estabelecidas nas políticas de investimento. Observa-se, ainda, adequada gestão de liquidez e controle de riscos, alinhados às diretrizes regulatórias e à estratégia institucional.</p>
                    </div>

                </div>

                {/* ── Síntese — pull-quote editorial ── */}
                <div className="macro-eco-pullquote dstq-reveal dstq-reveal--d3">
                    <div className="macro-eco-pullquote-mark">"</div>
                    <p>Em síntese, 2025 consolidou um ambiente de transição, no qual a convergência inflacionária, a condução das políticas monetárias e a sustentabilidade fiscal permaneceram como principais condicionantes da dinâmica dos mercados. Esse contexto exigiu abordagem cautelosa e seletiva na alocação de recursos, ao mesmo tempo em que proporcionou oportunidades relevantes em função dos níveis elevados de prêmio de risco observados ao longo do período, refletindo-se de forma positiva na gestão dos recursos dos planos.</p>
                    <span className="macro-eco-pullquote-label">Síntese Macroeconômica 2025</span>
                </div>

            </div>
        </section>
    );
}
