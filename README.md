# RAI 2025 - Previdência BRB

Aplicação React + Vite para o Relatório Anual de Informações (RAI) 2025 da Previdência BRB.

## Stack

- React 19
- Vite 6
- React Router
- Bootstrap + React Bootstrap
- GSAP / Swiper / Chart.js

## Requisitos

- Node.js 20+
- npm 10+

## Scripts

- `npm run dev`: inicia o ambiente local
- `npm run build`: gera build de produção
- `npm run preview`: serve o build localmente
- `npm run lint`: valida código com ESLint

## Estrutura Principal

- `src/pages`: páginas e seções do relatório
- `src/layout`: cabeçalhos e rodapés
- `src/constant`: conteúdo estático, menus e mapeamento de assets
- `src/assets`: CSS, fontes, imagens e vídeos
- `docs/design-system`: referência de design system e tokens

## Fluxo de Rotas

As rotas são centralizadas em `src/route/route.jsx`.  
A home oficial atual é `"/"` (componente `Index2`).

## Observações

- O projeto possui base herdada de template e camadas institucionais BRB.
- Novas telas devem priorizar os tokens e padrões descritos em `DESIGN.md` e `docs/design-system/`.
