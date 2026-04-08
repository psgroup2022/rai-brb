# Adina React Design System

## Objetivo

Este design system consolida a linguagem visual do template Adina React e da camada institucional criada para o RAI da Previdencia BRB. O objetivo e reduzir decisao visual ad hoc, transformar estilos recorrentes em tokens reutilizaveis e dar uma base clara para evolucao de componentes.

## Escopo

- Base de tema existente em `main.css`
- Utilitarios legados em `spacing.css`
- Extensoes institucionais em `rai.css`
- Token layer nova em `design-tokens.css`

## Principios

1. Estrutura editorial com contraste alto.
2. Hierarquia tipografica forte, com titulos pesados e corpo limpo.
3. Superficies predominantemente brancas com acento escuro.
4. Azul institucional como camada de marca, nao como cor de tudo.
5. Espacamento em escala previsivel, evitando valores arbitrarios.
6. Transicoes curtas e discretas, sempre funcionais.

## Arquitetura Visual

### Tema base Adina

- Tipografia principal: `Manrope`
- Display complementar: `Poppins`
- Cor dominante: `#20282d`
- Superficie padrao: `#ffffff`
- Superficie suave: `#f5f9ff`
- Borda padrao: `#e6e6e6`
- Forte uso de pills, circulos e botoes com raios altos

### Camada institucional BRB

- Azul profundo: `#0a1f3c`
- Azul institucional: `#004282`
- Azul medio: `#0074c8`
- Ciano de destaque: `#00aeef`
- Tipografia institucional opcional para pecas especiais:
  - Titulos: `DM Serif Display`
  - Texto: `DM Sans`

## Tokens Fundamentais

### Cores

- Brand 900: `#0a1f3c`
- Brand 800: `#183a6e`
- Brand 700: `#004282`
- Brand 500: `#0074c8`
- Accent 500: `#00aeef`
- Accent 100: `#e0f5fd`
- Text default: `#20282d`
- Text muted: `#475569`
- Border: `#e6e6e6`
- Surface: `#ffffff`
- Surface subtle: `#f5f9ff`

### Tipografia

- H1: `80px / 1.12 / 800`
- H2: `50px / 1.12 / 800`
- H3: `30px / 1.12 / 800`
- H4: `24px / 1.12 / 800`
- H5: `20px / 1.12 / 800`
- Body: `16px / 1.6 / 400`
- Small UI: `14px / 1.6 / 500-600`
- Caption: `12px / 1.4 / 500`

### Espacamento

Escala recomendada para novas implementacoes:

- 4
- 8
- 12
- 16
- 20
- 24
- 28
- 32
- 40
- 48
- 60
- 80

Observacao: `spacing.css` ainda expoe utilitarios legados de 5 em 5 pixels ate 200. Para novas telas, prefira a escala acima.

### Raios

- `6px` para chips pequenos
- `10px` para botoes compactos e cards simples
- `14px` para inputs e controles
- `18px` para cards premium
- `20px` para containers de destaque
- `999px` para pills

### Sombras

- `sm`: cards default e dropdowns leves
- `md`: floating actions e botoes escuros
- `lg`: elementos de marca em destaque
- `xl`: hover states com acento ciano

## Componentes Base

### Botao

- Primario do tema: fundo `#20282d`, texto branco, pill radius, padding generoso.
- Primario institucional: fundo `#00aeef`, texto `#0a1f3c`, radius medio, hover com elevacao.
- Secundario: fundo branco, borda clara, texto escuro.

### Input

- Altura padrao: `56px`
- Padding horizontal: `26px`
- Borda: `#e0e2e3`
- Placeholder: cinza suave
- Para header/toolbar, permitir versao compacta de `50px`

### Card

- Fundo branco
- Borda clara ou transparente conforme contexto
- Radius entre `14px` e `18px`
- Shadow discreto por padrao
- Hover somente quando houver acao ou profundidade a comunicar

### Header

- Layout recomendado: logo a esquerda, navegacao a direita, utilitarios ao lado do menu
- Nao competir com o hero em cor ou peso visual
- Busca deve ser contextual e compacta

### Footer

- Fundo institucional profundo
- Logo branca sem container quando aplicada sobre fundo escuro
- Textos secundarios com contraste acima de 70 porcento

## Responsividade

Breakpoints observados no template:

- `<= 575px`: mobile pequeno
- `576px - 767px`: mobile grande
- `768px - 991px`: tablet
- `992px - 1199px`: desktop pequeno
- `1200px - 1399px`: desktop
- `>= 1400px`: widescreen

Regra pratica:

- reduzir densidade antes de reduzir legibilidade
- manter blocos de texto abaixo de 70 caracteres por linha
- em mobile, trocar linhas horizontais complexas por empilhamento

## Decisoes de Governanca

1. Tokens novos entram primeiro em `design-tokens.css`.
2. Componentes novos devem consumir tokens, nao hex solto.
3. `main.css` segue como legado do template; nao deve continuar crescendo sem criterio.
4. Personalizacoes institucionais devem preferir aliases semanticos como `--ds-color-surface-inverse` e `--ds-color-action-accent`.

## Proximos Passos Recomendados

1. Migrar botoes e inputs recorrentes para classes `ds-*`.
2. Substituir espacamentos arbitrarios do projeto por escala controlada.
3. Criar biblioteca de componentes documentados: header, hero, card KPI, footer e tabelas.
4. Corrigir warnings antigos do template para reduzir ruido de manutencao.