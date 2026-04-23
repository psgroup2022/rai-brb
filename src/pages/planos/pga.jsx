import { Link } from "react-router-dom";
import SecaoEconomia from "../../components/ui/SecaoEconomia";
import SecaoIndicePlanos from "../../components/ui/SecaoIndicePlanos";
import { useEffect } from "react";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import iconPGA from "../../assets/img/pga.svg";
import headerPGAVideo from "../../assets/img/pga.mp4";
import { IMAGES } from "../../constant/theme";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".dstq-reveal, .plano-kpi-card, .plano-chart-box, .plano-table-wrap");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const DARK_CHART_OPTS = {
  color: "rgba(255,255,255,0.6)",
  borderColor: "rgba(255,255,255,0.08)",
};

const LIGHT_CHART_OPTS = {
  color: "rgba(10,31,60,0.7)",
  borderColor: "rgba(0,0,0,0.06)",
};

function Band({ quote }) {
  return (
    <div className="dstq-band">
      <div className="dstq-band-inner">
        <p className="dstq-band-quote dstq-reveal">{quote}</p>
      </div>
    </div>
  );
}



function SecaoRentabilidade() {
  const data = {
    labels: ["Rentabilidade", "Índice de Referência", "Mediana Mercado (pendente)"],
    datasets: [
      {
        data: [11.51, 8.44, 0],
        backgroundColor: ["#00aeef", "#0074c8", "#94a3b8"],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    plugins: { legend: { display: false } },
    scales: {
      x: {
        ticks: { callback: (v) => `${v}%`, color: LIGHT_CHART_OPTS.color },
        grid: { color: LIGHT_CHART_OPTS.borderColor },
      },
      y: { ticks: { color: LIGHT_CHART_OPTS.color }, grid: { display: false } },
    },
  };

  return (
    <section id="rentabilidade" className="plano-section plano-section--light">
      <div className="container">
        <div className="dstq-section-label dstq-section-label--light dstq-reveal">Resultados 2025</div>
        <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
          Rentabilidade <span className="dstq-accent">2025</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
          O PGA encerrou 2025 com rentabilidade de 11,51%, superando de forma significativa o índice
          de referência de 8,44% (IPCA + 4,00% a.a.), refletindo a adequação da estratégia adotada.
        </p>

        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
          A carteira, integralmente alocada em renda fixa, apresentou desempenho consistente ao longo
          do exercício, com destaque para os títulos públicos federais (+11,40%) e para os fundos de
          renda fixa, que acumularam 14,10%, em 12 meses.
        </p>

        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d4" style={{ marginTop: 16 }}>
          As LFT contribuíram positivamente no contexto de juros elevados, enquanto as NTN-B
          asseguraram proteção real ao patrimônio administrativo.
        </p>

        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d5" style={{ marginTop: 16 }}>
          A estratégia conservadora garantiu baixa volatilidade, elevada liquidez e previsibilidade de
          resultados, preservando a capacidade de cobertura das despesas administrativas. No consolidado,
          o PGA demonstrou elevada aderência à política de investimentos e eficiência na gestão dos recursos.
        </p>
        {/* 
        <div className="plano-chart-box plano-chart-box--light">
          <div className="plano-chart-title">Rentabilidade vs. Índice de Referência</div>
          <Bar data={data} options={options} />
        </div> */}


      </div>
    </section>
  );
}

function SecaoCusteioAdministrativo() {
  return (
    <section className="plano-section">
      <div className="container">

        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
          Custeio <span className="dstq-accent">Administrativo</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
          Para custear as despesas administrativas é cobrada a taxa de carregamento (percentual aplicado
          sobre as contribuições dos participantes e patrocinadoras) ou a taxa administrativa (percentual
          aplicado sobre os recursos dos planos).
        </p>

        <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
          Em 2025, a Previdência BRB, com base em estudos atuariais, adotou as seguintes taxas de carregamento e de administração:
        </p>

        <div className="plano-table-wrap">
          <table className="plano-table">
            <thead>
              <tr>
                <th>Plano</th>
                <th className="num">Taxa de Carregamento</th>
                <th className="num">Taxa de Administração</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BD-01", "2,10% a.m.", "-"],
                ["CD-02", "-", "0,50% a.a."],
                ["CV-03", "-", "0,50% a.a."],
                ["CD-Metrô-DF", "-", "0,50% a.a."],
                ["CD-05", "-", "0,40% a.a."],
                ["BrasíliaPrev", "-", "0,50% a.a."],
                ["RegiusPrev", "2,95% a.m.", "-"],
              ].map(([plano, car, adm], i) => (
                <tr key={i}>
                  <td>{plano}</td>
                  <td className="num">{car}</td>
                  <td className="num">{adm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SecaoDesempenhoPlano() {
  const compData = {
    labels: ["Referencial", "Rentabilidade", "Ganho Real"],
    datasets: [{
      label: "%",
      data: [8.44, 11.51, 6.95],
      backgroundColor: ["rgba(0,116,200,0.85)", "rgba(0,174,239,0.9)", "rgba(72,199,142,0.9)"],
      borderRadius: 6,
    }],
  };

  const compOptions = {
    indexAxis: "y",
    plugins: {
      legend: { display: false },
      datalabels: { display: false },
    },
    scales: {
      x: {
        ticks: { callback: (v) => v + "%", color: DARK_CHART_OPTS.color },
        grid: { color: DARK_CHART_OPTS.borderColor },
        max: 14,
      },
      y: { ticks: { color: DARK_CHART_OPTS.color }, grid: { display: false } },
    },
    animation: {
      onComplete: function () {
        const chart = this;
        const ctx = chart.ctx;
        ctx.font = 'bold 13px Sora, Poppins, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        const vals = ["8,44%", "11,51%", "6,95% a.a."];
        chart.data.datasets[0].data.forEach((val, i) => {
          const meta = chart.getDatasetMeta(0).data[i];
          ctx.fillText(vals[i], meta.x + 8, meta.y);
        });
      },
    },
  };

  return (
    <section id="desempenho" className="plano-section plano-section--dark">
      <div className="container">

        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
          Desempenho do <span className="dstq-accent">Plano</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <div className="dstq-reveal dstq-reveal--d2" style={{ marginBottom: '32px' }}>
          <p className="dstq-text-body" style={{ marginBottom: '12px' }}>
            O PGA registrou uma rentabilidade acumulada de <strong style={{ color: '#00aeef' }}>11,51%</strong> em 2025, equivalente a <strong style={{ color: '#00aeef' }}>136%</strong> do seu índice de referência (IPCA+4,00% a.a.). Esse resultado representa um ganho real (acima da inflação) de <strong style={{ color: '#00aeef' }}>6,95%</strong>, incrementando os ganhos para a constituição da reserva de aposentadoria dos seus participantes.
          </p>
          <p className="dstq-text-body">
            O PGA possui <strong style={{ color: '#00aeef' }}>98%</strong> do seu patrimônio total alocado em NTN-B, com taxa média ponderada de <strong style={{ color: '#00aeef' }}>7,06% a.a. + IPCA</strong>.
          </p>
        </div>

        <div className="plano-chart-box">
          <div className="plano-chart-title">Indicadores do Plano · Recurso: R$ 94.149.613</div>
          <Bar data={compData} options={compOptions} />
        </div>
      </div>
    </section>
  );
}

function SecaoRateioEInvestimentos() {
  const BAR_COLORS = ["#00aeef", "#0074c8", "#004282", "#1d4ed8", "#64748b", "#94a3b8", "#cbd5e1"];
  const BAR_LABELS = ["BD-01", "CD-02", "CV-03", "CD-Metrô-DF", "CD-05", "BrasíliaPrev", "RegiusPrev"];

  const prevData = {
    labels: BAR_LABELS,
    datasets: [{ data: [73.02, 1.76, 21.07, 3.11, 0.92, 0.1, 0.01], backgroundColor: BAR_COLORS, borderRadius: 5 }],
  };

  const invData = {
    labels: BAR_LABELS,
    datasets: [{ data: [72.14, 1.78, 21.74, 3.25, 0.97, 0.11, 0.01], backgroundColor: BAR_COLORS, borderRadius: 5 }],
  };

  const barOptions = {
    indexAxis: "y",
    plugins: {
      legend: { display: false },
      datalabels: { display: false },
    },
    scales: {
      x: {
        ticks: { callback: (v) => v + "%", color: LIGHT_CHART_OPTS.color },
        grid: { color: LIGHT_CHART_OPTS.borderColor },
        max: 80,
      },
      y: { ticks: { color: LIGHT_CHART_OPTS.color }, grid: { display: false } },
    },
    animation: {
      onComplete: function () {
        const chart = this;
        const ctx = chart.ctx;
        ctx.font = 'bold 12px Sora, Poppins, sans-serif';
        ctx.fillStyle = 'rgba(10,31,60,0.75)';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        chart.data.datasets[0].data.forEach((val, i) => {
          const meta = chart.getDatasetMeta(0).data[i];
          ctx.fillText(val + "%", meta.x + 6, meta.y);
        });
      },
    },
  };

  return (
    <section id="investimentos" className="plano-section plano-section--light">
      <div className="container">

        <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
          Rateio das Despesas e <span className="dstq-accent">Investimentos</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <div className="plano-kpi-row">
          <div className="plano-kpi-card plano-kpi-card--light">
            <div className="plano-kpi-label">Total Custo Previdencial</div>
            <div className="plano-kpi-value">R$ 8.663.190</div>
          </div>
          <div className="plano-kpi-card plano-kpi-card--light">
            <div className="plano-kpi-label">Total Custo Investimentos</div>
            <div className="plano-kpi-value">R$ 10.748.567</div>
          </div>
        </div>

        <div className="dstq-split" style={{ marginTop: 24 }}>
          <div className="plano-chart-box plano-chart-box--light" style={{ marginTop: 0 }}>
            <div className="plano-chart-title">Rateio Custo Previdencial (%)</div>
            <Bar data={prevData} options={barOptions} />
          </div>
          <div className="plano-chart-box plano-chart-box--light" style={{ marginTop: 0 }}>
            <div className="plano-chart-title">Rateio Custo Investimentos (%)</div>
            <Bar data={invData} options={barOptions} />
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
            Resultados da Política de Investimentos
          </h3>

          <div className="plano-table-wrap">
            <table className="plano-table plano-table--light">
              <thead>
                <tr>
                  <th>Segmento</th>
                  <th className="num">Política 2026</th>
                  <th className="num">Política 2025</th>
                  <th className="num">Resolução 4.994</th>
                  <th className="num">Alocação Objetivo 2026</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Renda Fixa", "100,00", "100,00", "100,00", "100,00"],
                  ["Renda Variável", "-", "-", "70,00", "-"],
                  ["Estruturado", "5,00", "4,00", "20,00", "-"],
                  ["Imobiliário", "1,00", "1,00", "20,00", "-"],
                  ["Operações com Participantes", "-", "-", "15,00", "-"],
                  ["Exterior", "-", "-", "10,00", "-"],
                ].map(([seg, a, b, c, d], i) => (
                  <tr key={i}><td>{seg}</td><td className="num">{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.4rem" }}>
            Resultados dos Investimentos
          </h3>

          <div className="plano-table-wrap">
            <table className="plano-table plano-table--light">
              <thead>
                <tr>
                  <th>Segmento</th>
                  <th className="num">1º SEM</th>
                  <th className="num">2º SEM</th>
                  <th className="num">2025</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Renda Fixa", "6,69", "4,53", "11,51"],
                  ["Renda Variável", "-", "-", "-"],
                  ["Estruturado", "-", "-", "-"],
                  ["Imobiliário", "-", "-", "-"],
                  ["Operações com Participantes", "-", "-", "-"],
                  ["Exterior", "-", "-", "-"],
                ].map(([seg, a, b, c], i) => (
                  <tr key={i}><td>{seg}</td><td className="num">{a}</td><td className="num">{b}</td><td className="num">{c}</td></tr>
                ))}
                <tr className="total">
                  <td><strong>PLANO</strong></td>
                  <td className="num">6,69</td>
                  <td className="num">4,53</td>
                  <td className="num">11,51</td>
                </tr>
                <tr style={{ background: "rgba(0,174,239,0.05)" }}>
                  <td><strong>ÍNDICE DE REFERÊNCIA</strong></td>
                  <td className="num">5,03</td>
                  <td className="num">3,24</td>
                  <td className="num">8,43</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dstq-cta-wrap" style={{ marginTop: 24 }}>
          <a href="#" className="dstq-cta-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <strong>CLIQUE AQUI</strong> para acessar o Demonstrativo Analítico dos Investimentos do Plano PGA – Dezembro/2025 <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}


function SecaoExecucaoOrcamentaria() {
  const chartData = {
    labels: [["Despesas Administrativas", "Realizadas"], ["Despesas Administrativas", "Orçadas"]],
    datasets: [
      { label: "2023", data: [18491309, 18723799], backgroundColor: "#004282", borderRadius: 4 },
      { label: "2024", data: [19009306, 19626338], backgroundColor: "#0074c8", borderRadius: 4 },
      { label: "2025", data: [19412507, 20250833], backgroundColor: "#00aeef", borderRadius: 4 },
    ],
  };

  const fmtBRL = (v) =>
    "R$ " + v.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  const chartOptions = {
    indexAxis: "y",
    plugins: {
      legend: { position: "top", labels: { color: LIGHT_CHART_OPTS.color } },
      datalabels: { display: false },
    },
    scales: {
      x: {
        ticks: {
          color: LIGHT_CHART_OPTS.color,
          callback: (v) => "R$ " + (v / 1_000_000).toFixed(1).replace(".", ",") + " mi",
        },
        grid: { color: LIGHT_CHART_OPTS.borderColor },
      },
      y: { ticks: { color: LIGHT_CHART_OPTS.color }, grid: { display: false } },
    },
    animation: {
      onComplete: function () {
        const chart = this;
        const ctx = chart.ctx;
        ctx.font = 'bold 11px Sora, Poppins, sans-serif';
        ctx.fillStyle = 'rgba(10,31,60,0.8)';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        chart.data.datasets.forEach((dataset, di) => {
          const meta = chart.getDatasetMeta(di);
          meta.data.forEach((bar, i) => {
            const val = dataset.data[i];
            if (val > 0) ctx.fillText(fmtBRL(val), bar.x + 6, bar.y);
          });
        });
      },
    },
  };

  return (
    <section className="plano-section plano-section--light">
      <div className="container">

        <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
          Execução <span className="dstq-accent">Orçamentária</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <p className="dstq-text-body dstq-text-body--on-light dstq-reveal dstq-reveal--d2">
          As despesas totais realizadas ficaram 4,14% abaixo do valor orçado para 2025,
          representando uma economia de R$ 838.326.
        </p>

        <div className="plano-chart-box plano-chart-box--light">
          <div className="plano-chart-title">Despesas Administrativas: Realizado vs. Orçado</div>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </section>
  );
}

function SecaoAcompanhamentoDespesas() {
  return (
    <section className="plano-section">
      <div className="container">

        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
          Acompanhamento das Despesas <span className="dstq-accent">vs Orçamento</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <div className="plano-table-wrap">
          <table className="plano-table">
            <thead>
              <tr><th>Descrição</th><th className="num">Realizado</th><th className="num">Orçado</th><th className="num">%</th></tr>
            </thead>
            <tbody>
              {[
                ["Despesas e Contingências", "19.412.507", "20.250.833", "-4,14"],
                ["Despesas", "18.246.550", "19.095.722", "-4,45"],
                ["Pessoal e Encargos", "12.418.417", "12.517.713", "-0,79"],
                ["Serviços de Terceiros", "4.433.314", "4.730.333", "-6,28"],
                ["Despesas Gerais", "962.223", "1.397.809", "-31,16"],
                ["Deprec. e Amortizações", "92.041", "101.417", "-9,25"],
                ["Tributos", "318.450", "318.450", "0,00"],
                ["Outras Despesas – Administ.", "22.106", "30.000", "-26,31"],
                ["Contingências", "1.165.956", "1.155.111", "0,94"],
                ["PIS e COFINS", "1.165.956", "1.155.111", "0,94"],
              ].map(([a, b, c, d], i) => (
                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.4rem" }}>
            Pessoal e Encargos
          </h3>
          <div className="plano-table-wrap">
            <table className="plano-table">
              <thead>
                <tr><th>Descrição</th><th className="num">Realizado</th><th className="num">Orçado</th><th className="num">%</th></tr>
              </thead>
              <tbody>
                {[
                  ["Proventos e Encargos", "12.418.417", "12.517.713", "-0,79"],
                  ["Proventos", "7.793.999", "7.841.838", "-0,61"],
                  ["Contratados", "5.281.680", "5.290.440", "-0,17"],
                  ["Conselhos", "714.188", "730.351", "-2,21"],
                  ["Dirigentes", "1.798.131", "1.821.047", "-1,26"],
                  ["Encargos", "4.624.418", "4.675.875", "-1,10"],
                  ["Contratados", "3.706.989", "3.711.664", "-0,13"],
                  ["Conselhos", "160.692", "164.329", "-2,21"],
                  ["Dirigentes", "756.737", "799.882", "-5,39"],
                ].map(([a, b, c, d], i) => (
                  <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 className="dstq-section-heading dstq-reveal" style={{ fontSize: "1.4rem" }}>
            Serviços de Terceiros
          </h3>
          <div className="plano-table-wrap">
            <table className="plano-table">
              <thead>
                <tr><th>Descrição</th><th className="num">Realizado</th><th className="num">Orçado</th><th className="num">%</th></tr>
              </thead>
              <tbody>
                {[
                  ["Consultorias e Outros Serviços", "4.433.314", "4.730.333", "-6,28"],
                  ["Consultorias", "2.963.175", "3.177.728", "-6,75"],
                  ["Contábil", "58.800", "91.990", "-36,08"],
                  ["Atuarial", "403.856", "403.856", "0,00"],
                  ["Administrativa", "97.648", "143.016", "-31,72"],
                  ["Jurídico", "351.899", "351.899", "0,00"],
                  ["Comunicação", "210.083", "221.228", "-5,04"],
                  ["Investimentos", "140.636", "140.636", "0,00"],
                  ["Análises", "49.791", "49.791", "0,00"],
                  ["Difusão de Informação", "109.641", "109.641", "0,00"],
                  ["Controles Internos", "87.814", "91.142", "-3,65"],
                  ["Informática", "1.062.891", "1.062.891", "0,00"],
                  ["Compliance", "39.524", "40.169", "-1,61"],
                  ["Governança", "257.113", "335.469", "-23,36"],
                  ["Auditoria", "93.480", "136.000", "-31,26"],
                  ["Outros Serviços", "1.470.139", "1.552.605", "-5,31"],
                  ["Manutenção/Conservação", "283.962", "311.203", "-8,75"],
                  ["Estagiários", "39.862", "62.221", "-35,94"],
                  ["Software", "1.129.445", "1.154.510", "-2,17"],
                  ["Gestão Documental", "16.870", "24.671", "-31,62"],
                ].map(([a, b, c, d], i) => (
                  <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecaoEvolucoes() {
  return (
    <section className="plano-section plano-section--light">
      <div className="container">

        <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
          Séries de <span className="dstq-accent">Evolução</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.2rem", marginBottom: 12 }}>
          Evolução das Despesas Administrativas
        </h3>
        <div className="plano-table-wrap">
          <table className="plano-table plano-table--light">
            <thead>
              <tr><th>Ano</th><th className="num">Ativo Total</th><th className="num">Despesas</th><th className="num">Despesa / Ativo Total (%)</th><th className="num">Participantes</th><th className="num">Empregados</th></tr>
            </thead>
            <tbody>
              {[
                ["2018", "2.569.827.878", "11.667.906", "0,45", "5.598", "26"],
                ["2019", "2.821.691.382", "13.273.179", "0,47", "5.518", "30"],
                ["2020", "3.028.933.524", "13.933.048", "0,46", "5.565", "29"],
                ["2021", "3.261.700.790", "14.942.400", "0,46", "5.886", "35"],
                ["2022", "3.528.084.182", "16.558.589", "0,47", "6.291", "39"],
                ["2023", "3.884.720.164", "17.280.497", "0,44", "6.929", "40"],
                ["2024", "4.010.627.285", "18.122.922", "0,45", "7.235", "37"],
                ["2025", "4.352.202.578", "18.246.550", "0,42", "7.619", "36"],
              ].map(([a, b, c, d, e, f], i) => (
                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td><td className="num">{e}</td><td className="num">{f}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.2rem", marginBottom: 12, marginTop: 40 }}>
          Evolução do Custo Administrativo
        </h3>
        <div className="plano-table-wrap">
          <table className="plano-table plano-table--light">
            <thead>
              <tr><th>Ano</th><th className="num">Ativo Total</th><th className="num">Despesas</th><th className="num">Despesa / Ativo Total (%)</th></tr>
            </thead>
            <tbody>
              {[
                ["2018", "2.569.827.878", "11.667.906", "0,45"],
                ["2019", "2.821.691.382", "13.273.179", "0,47"],
                ["2020", "3.028.933.524", "13.933.048", "0,46"],
                ["2021", "3.261.700.790", "14.942.400", "0,46"],
                ["2022", "3.528.084.182", "16.558.589", "0,47"],
                ["2023", "3.884.720.164", "17.280.497", "0,44"],
                ["2024", "4.010.627.285", "18.122.922", "0,45"],
                ["2025", "4.352.202.578", "18.246.550", "0,42"],
              ].map(([a, b, c, d], i) => (
                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.2rem", marginBottom: 12, marginTop: 40 }}>
          Evolução da Despesa sobre a Receita
        </h3>
        <div className="plano-table-wrap">
          <table className="plano-table plano-table--light">
            <thead>
              <tr><th>Ano</th><th className="num">Despesa</th><th className="num">Receitas de Custeio</th><th className="num">Despesa / Receita de Custeio</th></tr>
            </thead>
            <tbody>
              {[
                ["2018", "11.667.906", "12.068.096", "0,97"],
                ["2019", "13.273.179", "12.399.801", "1,07"],
                ["2020", "13.933.048", "12.756.397", "1,09"],
                ["2021", "14.942.400", "12.498.108", "1,20"],
                ["2022", "16.558.589", "13.417.911", "1,23"],
                ["2023", "17.280.497", "13.754.293", "1,26"],
                ["2024", "18.122.922", "13.751.960", "1,32"],
                ["2025", "18.246.550", "15.141.834", "1,21"],
              ].map(([a, b, c, d], i) => (
                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal" style={{ fontSize: "1.2rem", marginBottom: 12, marginTop: 40 }}>
          Evolução da Receita Per Capita
        </h3>
        <div className="plano-table-wrap">
          <table className="plano-table plano-table--light">
            <thead>
              <tr><th>Ano</th><th className="num">Receita</th><th className="num">Nº Participantes</th><th className="num">Receita Per Capita</th></tr>
            </thead>
            <tbody>
              {[
                ["2018", "12.068.096", "5.598", "2.155,79"],
                ["2019", "12.399.801", "5.518", "2.247,15"],
                ["2020", "12.756.397", "5.565", "2.292,25"],
                ["2021", "12.498.108", "5.886", "2.123,36"],
                ["2022", "13.417.911", "6.291", "2.132,87"],
                ["2023", "13.754.293", "6.929", "1.985,03"],
                ["2024", "13.751.960", "7.235", "1.900,75"],
                ["2025", "15.141.834", "7.619", "1.987,38"],
              ].map(([a, b, c, d], i) => (
                <tr key={i}><td>{a}</td><td className="num">{b}</td><td className="num">{c}</td><td className="num">{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SecaoCustoAdministracao() {
  return (
    <section className="plano-section plano-section--light">
      <div className="container">
        <h2 className="dstq-section-heading dstq-section-heading--on-light dstq-reveal dstq-reveal--d1">
          Custo de <span className="dstq-accent">Administração</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />
      </div>
    </section>
  );
}

function SecaoCustosFinais() {
  return (
    <section className="plano-section">
      <div className="container">

        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
          Custo com a Gestão dos Planos <span className="dstq-accent">Previdenciais</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <div className="plano-table-wrap">
          <table className="plano-table">
            <thead>
              <tr><th>Descrição</th><th className="num">PGA</th></tr>
            </thead>
            <tbody>
              {[
                ["Despesas de fomento", "-"],
                ["Pessoal e encargos", "-"],
                ["Treinamentos/viagens", "-"],
                ["Serviços de terceiros", "-"],
                ["Despesas de consumo, depreciação, tafic, etc", "-"],
                ["Contingências (PIS e COFINS)", "749"],
                ["Sub-total (despesas adm)", "749"],
                ["Corretagens/emolumentos bolsa valores", "-"],
                ["Taxa adm/gestão fundos abertos", "8.832"],
                ["Taxa custódia/controladoria fundos abertos", "3.596"],
                ["Taxa performance fundos abertos", "-"],
                ["Outras despesas fundos abertos", "2.711"],
                ["Sub-total (despesas outras)", "15.139"],
              ].map(([a, b], i) => (
                <tr key={i}><td>{a}</td><td className="num">{b}</td></tr>
              ))}
              <tr className="total">
                <td><strong>TOTAL</strong></td>
                <td className="num">15.888</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SecaoSustentabilidade() {
  return (
    <section className="plano-section plano-section--dark">
      <div className="container">
        <h2 className="dstq-section-heading dstq-reveal dstq-reveal--d1">
          Sustentabilidade do <span className="dstq-accent">PGA</span>
        </h2>
        <div className="dstq-divider dstq-reveal dstq-reveal--d2" />

        <p className="dstq-text-body dstq-reveal dstq-reveal--d2">
          <b>Fundo Administrativo</b>
          <br /><br />
          O Fundo Administrativo representa o conjunto de recursos utilizados para custear as atividades administrativas da Entidade, no âmbito do Plano de Gestão Administrativa (PGA). De forma simplificada, ele funciona como se fosse uma “conta bancária”, seu saldo ao final do mês cresce quando as receitas administrativas são maiores do que as despesas administrativas, neste caso, diz-se que houve uma “constituição”. Já quando o saldo diminui, pelo fato de as despesas serem maiores que as receitas no período, há uma “reversão” do fundo administrativo.
        </p>
        <p className="dstq-text-body dstq-reveal dstq-reveal--d3" style={{ marginTop: 16 }}>
          Os recursos acumulados no Fundo Administrativo não permanecem parados. Eles são aplicados no mercado financeiro, conforme as diretrizes da política de investimentos do PGA, gerando rendimentos que são incorporados ao próprio fundo, contribuindo para sua manutenção e crescimento ao longo do tempo.
        </p>
        <p className="dstq-text-body dstq-reveal dstq-reveal--d4" style={{ marginTop: 16 }}>
          Na Previdência BRB, a gestão desses recursos é realizada de forma compartilhada entre os planos de benefícios. Isso significa que, embora exista um fundo único, é possível identificar quanto cada plano participa desse montante. Essa participação é calculada mensalmente, considerando fatores como as receitas oriundas dos planos de benefícios, como a taxa de administração e/ou a taxa de carregamento, despesas administrativas e resultados financeiros que são rateados entre cada plano, garantindo uma distribuição justa e transparente.
        </p>
        <br />
        <p className="dstq-text-body dstq-reveal dstq-reveal--d5" style={{ marginTop: 16 }}>
          <b>Fundo Administrativo Compartilhado</b>
          <br /><br />
          Além do Fundo Administrativo tradicional, a regulamentação permite a criação do chamado Fundo Administrativo Compartilhado, que possui uma finalidade distinta e caráter estratégico.
        </p>
        <p className="dstq-text-body dstq-reveal dstq-reveal--d6" style={{ marginTop: 16 }}>
          No âmbito da Previdência BRB, já existia saldo constituído nesse fundo com base na Resolução CNPC nº 43/2021, totalizando, em dezembro de 2025, o montante de R$ 156 mil. Com a evolução normativa promovida pela Resolução CNPC nº 62/2024, o modelo foi aprimorado, passando a exigir estudo de viabilidade técnico-financeira e aprovação pelos órgãos de governança.
        </p>
        <p className="dstq-text-body dstq-reveal dstq-reveal--d7" style={{ marginTop: 16 }}>
          Nesse contexto, o Conselho Deliberativo aprovou em 2026 a constituição adicional de recursos no montante de R$ 3,8 milhões, destinados à utilização em ações de fomento e inovação ao longo dos exercícios de 2026, 2027 e 2028, conforme diretrizes do Plano de Gestão Administrativa e alinhamento ao planejamento estratégico institucional.
        </p>
        <p className="dstq-text-body dstq-reveal dstq-reveal--d8" style={{ marginTop: 16 }}>
          Diferentemente do Fundo Administrativo, que está diretamente relacionado às despesas do dia a dia da Entidade, o Fundo Administrativo Compartilhado é destinado a investimentos em iniciativas de crescimento e desenvolvimento institucional. Entre essas iniciativas, destacam-se ações de fomento, inovação, prospecção e captação de novas patrocinadoras e instituidoras, bem como melhorias tecnológicas e ampliação dos serviços oferecidos.
        </p>
        <p className="dstq-text-body dstq-reveal dstq-reveal--d9" style={{ marginTop: 16 }}>
          Outra diferença importante é que, nesse fundo, os recursos não são vinculados individualmente a cada plano de benefícios. Em vez disso, eles são utilizados de forma conjunta, com foco no fortalecimento da Entidade como um todo, sempre respeitando critérios de governança, transparência e sustentabilidade financeira.
        </p>
        <p className="dstq-text-body dstq-reveal dstq-reveal--d10" style={{ marginTop: 16 }}>
          A criação desse fundo permite que a Entidade invista de forma planejada em seu crescimento, sem comprometer os recursos necessários para a manutenção das atividades administrativas regulares.
        </p>
        <p className="dstq-text-body dstq-reveal dstq-reveal--d11" style={{ marginTop: 16 }}>
          Ressalta-se que, no exercício de 2025, não houve utilização de recursos do Fundo Administrativo Compartilhado, não sendo registrados gastos com ações de fomento ou inovação no período.
        </p>
      </div>
    </section>
  );
}

function PlanoPGA() {
  useReveal();

  return (
    <>
      <Header2 />

      <section
        className="hero-section hero-style-two"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#011834",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.42,
            zIndex: 0,
          }}
        >
          <source src={headerPGAVideo} type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(1,24,52,0.74) 0%, rgba(0,66,130,0.68) 55%, rgba(0,116,200,0.58) 100%), radial-gradient(circle at 20% 15%, rgba(0,174,239,0.24), transparent 38%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 40%)",
            zIndex: 1,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "100px", paddingBottom: "40px" }}>
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div style={{ marginBottom: "12px" }}>
                <span style={{ color: "#00aeef", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                  # Nossos Planos · Gestão Administrativa
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
                <img src={iconPGA} alt="PGA" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "700", lineHeight: "1.1", margin: 0 }}>
                  Plano de Gestão Administrativa <span style={{ color: "#00aeef" }}>PGA</span>
                </h1>
              </div>

              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px" }}>
                Estrutura de custeio e suporte administrativo da Previdência BRB, com foco em eficiência,
                governança de despesas e sustentabilidade operacional.
              </p>

              <ol className="breadcrumb" style={{ marginBottom: 0, padding: 0, background: "transparent" }}>
                <li className="breadcrumb-item">
                  <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00aeef" }}>
                  PGA
                </li>
              </ol>

            </div>
          </div>

          {/* Meta strip — full width */}
          <div className="plano-hero-meta">
            <div>
              <div className="plano-hero-meta-value">R$ 94,1 mi</div>
              <div className="plano-hero-meta-label">Recurso do Plano</div>
            </div>
            <div>
              <div className="plano-hero-meta-value">11,51%</div>
              <div className="plano-hero-meta-label">Rentabilidade 2025</div>
            </div>
            <div>
              <div className="plano-hero-meta-value">136,54%</div>
              <div className="plano-hero-meta-label">Desempenho</div>
            </div>
          </div>
        </div>
      </section>

      <SecaoEconomia />
      <SecaoRentabilidade />
      <SecaoCusteioAdministrativo />
      <SecaoDesempenhoPlano />
      <SecaoRateioEInvestimentos />
      <SecaoSustentabilidade />
      <SecaoExecucaoOrcamentaria />
      <SecaoAcompanhamentoDespesas />
      <SecaoEvolucoes />
      <SecaoCustoAdministracao />
      <SecaoCustosFinais />
      <Band quote={'"O PGA registrou evolução em 2025, com rentabilidade de 11,51% e desempenho de 136,54% do índice de referência, mantendo foco em eficiência administrativa e governança de custos."'} />

      <SecaoIndicePlanos particlesId="services-particles-pga" />

      <Footer2 />
    </>
  );
}

export default PlanoPGA;
