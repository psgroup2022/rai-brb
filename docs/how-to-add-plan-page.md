# Como implementar uma nova página de plano

Guia baseado na implementação dos Planos CD-02 (`src/pages/planos/cd-02.jsx`) e RegiusPrev (`src/pages/planos/regiusprev.jsx`).

---

## 1. Fonte de dados

Todo o conteúdo dos planos está em `docs/inputs/processed/PLANOS.md`, gerado via [docling](https://github.com/docling-project/docling) a partir do arquivo `docs/inputs/PLANOS.docx`.

Para processar novamente (ex: após atualização do DOCX):

```bash
docling docs/inputs/PLANOS.docx --output docs/inputs/processed/
```

Cada plano ocupa uma seção no arquivo. Localize o plano pelo nome — ex: `**Plano de Benefícios CD-02**` — e extraia os dados das seções numeradas (8.1, 8.2, 8.4 …).

---

## 2. Criar o arquivo do componente

Crie `src/pages/planos/<id-do-plano>.jsx` copiando `cd-02.jsx` como ponto de partida:

```bash
cp src/pages/planos/cd-02.jsx src/pages/planos/<novo-plano>.jsx
```

---

## 3. Estrutura do arquivo

O arquivo segue esta ordem fixa:

```
imports
ChartJS.register(...)
useReveal()          ← não alterar
DARK_CHART_OPTS / LIGHT_CHART_OPTS   ← não alterar
Band({ quote })      ← não alterar

SecaoRentabilidade() ← dados do plano
SecaoDesempenho()    ← dados do plano
SecaoInvestimentos() ← dados do plano
SecaoArrecadacao()   ← dados do plano
SecaoAtuarial()      ← dados do plano
SecaoEquilibrio()    ← dados do plano
SecaoCustos()        ← dados do plano

Plano<Nome>()        ← componente raiz: hero + sequência de seções
```

**`SecaoEconomia` é compartilhada** — já importada de `src/components/ui/SecaoEconomia.jsx`. Não duplicar.

---

## 4. Imports a ajustar

```jsx
import headerXXVideo from "../../assets/img/<novo-plano>.mp4";   // vídeo do hero
```

Mantenha os demais imports idênticos ao cd-02.jsx.

---

## 5. Seção por seção — o que substituir

### Hero (dentro de `Plano<Nome>`)

| Campo | Onde está no PLANOS.md |
|-------|------------------------|
| Tipo de plano (tag eyebrow) | Ex: "Contribuição Definida" |
| Nome do plano (`<h1>`) | Título da seção ex: `**Plano CD-02**` |
| Descrição (`<p>`) | Redigir com base no perfil do plano |
| `plano-hero-meta-value` — Rentabilidade | `RENTABILIDADE: XX,XX%` |
| `plano-hero-meta-value` — vs. Referência | `DESEMPENHO: XXX%` (ex: 152%) |
| `plano-hero-meta-value` — Patrimônio | `RECURSO DO PLANO: R$ XX.XXX.XXX` |

### `Band` quote

Redigir uma frase de destaque sobre o plano com base em `8.2 Desempenho do Plano`.

```jsx
<Band quote='"<frase destacada do plano>.' />
```

### `SecaoRentabilidade`

| Campo | Onde no PLANOS.md |
|-------|-------------------|
| Valor do gráfico — Rentabilidade | `RENTABILIDADE: XX,XX%` |
| Valor do gráfico — Índice de Referência | `ÍNDICE DE REFERÊNCIA: X,XX` (tabela Resultados) |
| Texto do parágrafo | Seção `8.1 Rentabilidade 2025` |
| Bullet points | Itens com `•` em `8.1` |

### `SecaoDesempenho`

| Campo | Onde no PLANOS.md |
|-------|-------------------|
| Texto intro | `8.2 Desempenho do Plano` |
| KPI "Recurso do Plano" | `RECURSO DO PLANO: R$ ...` |
| KPI "Referencial" | `REFERENCIAL: X,XX%` |
| KPI "Rentabilidade" | `RENTABILIDADE: XX,XX%` |
| KPI "Ganho Real" | `GANHO REAL (ACIMA DA INFLAÇÃO): X,XX% a.a.` |
| Gráfico — 3 barras | Referencial / Rentabilidade / Ganho Real |
| Total participantes | `Total de participantes: XXX` |
| Ativos % / Assistidos % / Pensionistas % | Linhas seguintes |
| Feminino % / Masculino % | Linhas de gênero |
| Média de Idade Ativos | `Média de Idade de Ativos: XX,XX` |
| Média de Idade Assistidos | `Média de Idade de Assistidos: XX,XX` |
| Maturidade | `Maturidade do Plano: XX,XX%` |
| Participantes ano anterior / atual | `XXXX: XXX` / `XXXX: XXX` |
| Delta (▲/▼ %) | `Redução/Aumento de XX,XX%` |
| Texto "Podem aderir" | Parágrafo de elegibilidade |

#### Quadro Populacional — padrão `pop-`

O bloco de quadro populacional usa classes `pop-*` (não `plano-kpi-card`). A referência canônica é `bd-01.jsx`. Estrutura obrigatória:

```jsx
<div className="pop-section dstq-reveal" style={{ marginTop: 60 }}>

  {/* Hero stat */}
  <div className="pop-hero">
    <div>
      <div className="pop-section-label">Quadro Populacional</div>
      <div className="pop-total-num">{totalParticipantes}</div>
      <span className="pop-total-label">participantes em 2025</span>
      <div className="pop-total-delta">
        <span className="pop-delta-badge">▲/▼ XX,XX%</span>
        <span className="pop-delta-context">vs. XXX em 2024</span>
      </div>
    </div>
    <div className="pop-closed-tag">
      <span className="pop-closed-icon">⊘ ou ✓</span>
      <div>
        <strong>Plano fechado / Podem aderir</strong>
        <span>texto de elegibilidade</span>
      </div>
    </div>
  </div>

  {/* Barra proporcional */}
  <div className="pop-bar-wrap dstq-reveal dstq-reveal--d1">
    <div className="pop-bar-label">Composição do plano</div>
    <div className="pop-bar">
      {/* Um segmento por categoria presente. Usar flex: XX em vez de width: XX%
          para que os segmentos preencham 100% mesmo que os valores do fonte
          não somem exatamente 100 (artefato de arredondamento do docling). */}
      <div className="pop-bar-seg pop-bar-seg--pensionistas" style={{ flex: 78 }}>
        <span>Pensionistas</span><strong>78,0%</strong>
      </div>
      <div className="pop-bar-seg pop-bar-seg--ativos" style={{ flex: 11.28 }}>
        <span>Ativos</span><strong>11,28%</strong>
      </div>
      <div className="pop-bar-seg pop-bar-seg--assistidos" style={{ flex: 10.72 }}>
        <span>Assist.</span><strong>10,7%</strong>
      </div>
    </div>
  </div>

  {/* Grid inferior: Gênero | Idades | Maturidade */}
  <div className="pop-bottom-grid dstq-reveal dstq-reveal--d2">

    <div className="pop-card">
      <div className="pop-card-label">Distribuição por Gênero</div>
      <div className="pop-gender-bar">
        {/* Usar flex: XX — nunca width — para evitar gap quando valores não somam 100 */}
        <div className="pop-gender-masc" style={{ flex: 62.72 }}>
          <span>♂ Masculino</span><strong>62,72%</strong>
        </div>
        <div className="pop-gender-fem" style={{ flex: 37.28 }}>
          <strong>37,28%</strong><span>Feminino ♀</span>
        </div>
      </div>
      <div className="pop-gender-legend">
        <span><i className="pop-dot pop-dot--masc" />Masculino — 62,72%</span>
        <span><i className="pop-dot pop-dot--fem" />Feminino — 37,28%</span>
      </div>
    </div>

    <div className="pop-card">
      <div className="pop-card-label">Média de Idade</div>
      <div className="pop-age-pair">
        <div className="pop-age-item">
          <span className="pop-age-num">XX,XX</span>
          <span className="pop-age-lbl">anos</span>
          <span className="pop-age-tag">Ativos</span>
        </div>
        <div className="pop-age-divider" />
        <div className="pop-age-item">
          {/* Se não houver assistidos, exibir "—" como valor */}
          <span className="pop-age-num">XX,XX ou —</span>
          <span className="pop-age-lbl">anos</span>
          <span className="pop-age-tag">Assistidos</span>
        </div>
      </div>
    </div>

    <div className="pop-card pop-card--maturity">
      <div className="pop-card-label">Maturidade do Plano</div>
      <div className="pop-maturity-num">XX,XX%</div>
      <div className="pop-maturity-bar">
        <div className="pop-maturity-fill" style={{ width: 'XX%' }} />
      </div>
      {/* Se não houver assistidos: "Plano em fase de acumulação — sem assistidos" */}
      <span className="pop-maturity-sub">texto descritivo</span>
    </div>

  </div>
</div>
```

> **Nunca usar `plano-kpi-card` para o quadro populacional.** O padrão `pop-` é o único correto e está definido no CSS de `style.css`.

### `SecaoInvestimentos`

**Tabela Política de Investimentos** — extrair de `Resultados da Política de Investimentos`:

| Coluna | Campo |
|--------|-------|
| Política 2026 | Coluna `2026` |
| Política 2025 | Coluna `2025` |
| Resolução 4.994 | Coluna `RESOLUÇÃO 4.994` |
| Alocação Objetivo 2026 | Coluna `ALOCAÇÃO OBJETIVO 2026` |

**Tabela Resultados dos Investimentos** — extrair de `Resultados dos Investimentos`:

| Coluna | Campo |
|--------|-------|
| 1º Sem | Coluna `1SEM` |
| 2º Sem | Coluna `2SEM` |
| 2025 | Coluna `2025` |

Linhas fixas: Renda Fixa, Renda Variável, Estruturado, Imobiliário, Operações com Participantes, Exterior, **PLANO** (total), **ÍNDICE DE REFERÊNCIA**.

#### CTA — Demonstrativo Analítico dos Investimentos

Após a tabela "Resultado dos Investimentos" (antes do gráfico de alocação), adicionar:

```jsx
<div className="dstq-cta-wrap" style={{ marginTop: 24 }}>
  <a href="#" className="dstq-cta-btn"
     style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
    <strong>CLIQUE AQUI</strong> para acessar o Demonstrativo Analítico dos Investimentos do Plano <NomePlano> – Dezembro/2025 <span>→</span>
  </a>
</div>
```

### `SecaoArrecadacao`

| Campo | Onde no PLANOS.md |
|-------|-------------------|
| Texto intro | `8.5 Arrecadação e Benefícios` — parágrafo narrativo |
| Gráfico — 3 anos | Tabela com `Arrecadação` e `Benefícios/Institutos` |
| Tabela — valores | Mesma tabela, valores em R$ |

> Atenção: os valores brutos no PLANOS.md usam ponto como separador de milhar (ex: `3.494.263`). No gráfico, passar os valores em milhar (`3494.26`) para escala legível.

### `SecaoAtuarial`

Três tabelas extraídas de `8.6 Resultado Atuarial`:

**Tabela 1 — Ativo Líquido:**

| Linha | Campo |
|-------|-------|
| Ativo Total | `Ativo Total` |
| Exigível Operacional | `Exigível Operacional` |
| Fundos | `Fundos (Administrativo e Investimento)` |
| **Total** | `Ativo Líquido do Plano` |

**Tabela 2 — Provisões Matemáticas:**

| Linha | Campo |
|-------|-------|
| Benefício Concedido | `Provisão Matemática de Benefício Concedido` |
| Benefício a Conceder | `Provisão Matemática de Benefício a Conceder` |
| **Total** | `Provisão Matemática Total` |

**Tabela 3 — Resultado Atuarial:**

| Linha | Campo |
|-------|-------|
| Ativo Líquido | `Ativo Líquido do Plano` |
| Provisão Total | `Provisão Matemática Total` (negativo) |
| Fundo Previdencial | `Fundo Previdencial` (negativo) |
| **Resultado** | `Resultado Atuarial` |

Os dois parágrafos narrativos ficam abaixo das tabelas. Ao final da seção, após o gráfico de equilíbrio, adicionar o CTA do Parecer Atuarial:

```jsx
<div className="dstq-cta-wrap" style={{ marginTop: 40 }}>
  <a href="#" className="dstq-cta-btn dstq-cta-btn--light"
     style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
    Clique aqui para acessar o Parecer Atuarial do Plano <NomePlano> <span>→</span>
  </a>
</div>
```

Note a diferença de estilo: o CTA do Demonstrativo usa `dstq-cta-btn` (escuro, em seção light), e o do Parecer usa `dstq-cta-btn--light` (claro, em seção light).

### `SecaoEquilibrio`

Dois cards com o mesmo valor (seção `8.7`):

| Card | Campo |
|------|-------|
| Patrimônio de Cobertura | `Patrimônio de Cobertura: R$ XX.XXX.XXX,XX` |
| Provisões Matemáticas | `Provisões Matemáticas: R$ XX.XXX.XXX,XX` |

### `SecaoCustos`

**Tabela 1 — Custos com a Administração** (seção `8.8`):

Colunas: `Gestão Própria | Gestão Previdencial | Total`

Linhas: Pessoal e Encargos / Treinamento e Viagens / Serviços de Terceiros / Despesas de Consumo, Depreciações, Tafic etc / Contingências (PIS e COFINS) / **TOTAIS**

**Tabela 2 — Custos com a Gestão dos Planos Previdenciais** (seção `8.9`):

Linhas: Despesas de Fomento / Pessoal e Encargos / Treinamentos/Viagens / Serviços de Terceiros / Despesas de Consumo, Depreciação, Tafic, etc / Contingências / **TOTAL** / Corretagens / Taxa Adm/Gestão / Taxa Custódia / Taxa Performance / Outras Despesas / **Sub-total (Despesas Outras)** / **TOTAL GERAL**

---

## 6. Registrar a rota

Em `src/route/route.jsx`:

```jsx
import PlanoNovoPlano from "../pages/planos/<novo-plano>";

// dentro de rootdata:
{ path: "/plano-<novo-plano>", element: <PlanoNovoPlano /> },
```

## 7. Adicionar ao menu de navegação

Em `src/constant/alldata.jsx`, dentro de `menudata2` → submenu "Nossos Planos":

```js
{ title: "Novo Plano", link: "/plano-<novo-plano>" },
```

---

## 8. Checklist de validação

- [ ] Todos os valores numéricos conferidos contra `PLANOS.md`
- [ ] Gráfico de barras Rentabilidade vs. Índice de Referência renderiza corretamente
- [ ] Gráfico de barras Arrecadação vs. Benefícios renderiza corretamente
- [ ] Quadro populacional usa classes `pop-*` (nunca `plano-kpi-card`)
- [ ] Barra de gênero usa `flex: XX` (não `width: XX%`) para preencher 100% mesmo com arredondamentos
- [ ] Tabela de investimentos: linha PLANO bate com o total informado
- [ ] CTA "CLIQUE AQUI — Demonstrativo Analítico" presente em `SecaoInvestimentos` após a tabela de resultados
- [ ] CTA "Clique aqui — Parecer Atuarial" presente ao final de `SecaoAtuarial` com classe `dstq-cta-btn--light`
- [ ] Tabela atuarial: Resultado Atuarial = 0,00 (equilíbrio)
- [ ] `SecaoEquilibrio`: os dois valores são iguais (por definição do equilíbrio técnico)
- [ ] Rota acessível em `http://localhost:5173/plano-<novo-plano>`
- [ ] Link no menu de navegação funciona
- [ ] `npm run lint` sem novos erros
