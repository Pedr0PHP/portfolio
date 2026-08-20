# Pedro H.P. Showreel

# Prompt para Lovable: Portfolio Pedro H.P. (Editor de Vídeo)

Crie um site portfolio single-page para um editor de vídeo chamado **Pedro H.P.**

## Estrutura e organização (inspirada em torlien.com)

Siga este fluxo de seções, nessa ordem:

1. **Hero minimalista em tela cheia**

   - Nome "Pedro H.P." em tipografia gigante, ocupando a tela como peça gráfica principal (não como header tradicional).

   - Subtítulo curto embaixo: "Video Editor" ou "Editor & Motion".

   - Nav fixo e discreto no topo com: Work, About, Contact.

   - Sem hero image. A tipografia é o hero.

2. **Reel em destaque**

   - Logo abaixo do hero, um player de vídeo grande (placeholder) ocupando quase a largura total, com legenda "Showreel 2026" ou similar.

   - Clique abre o vídeo em lightbox/fullscreen.

3. **Selected Work (grid de projetos)**

   - Grid vertical de cases, um por linha ou em duas colunas alternadas.

   - Cada card tem: thumbnail em vídeo com autoplay mudo em loop no hover, título do projeto, cliente, ano, tag de categoria (Music Video, Commercial, Short Film, Documentary, etc).

   - Hover suave com leve zoom e exibição do título.

   - Use 6 a 8 projetos placeholder.

4. **About**

   - Seção com texto curto em duas colunas: à esquerda um parágrafo em primeira pessoa (placeholder), à direita uma lista com Clients, Software (Premiere, After Effects, DaVinci), Awards/Features.

   - Sem foto, ou foto pequena e discreta.

5. **Contact / Footer**

   - Bloco grande com email em tipografia enorme como CTA (mailto link).

   - Links sociais abaixo em texto simples: Instagram, Vimeo, YouTube, LinkedIn.

   - Copyright discreto.

Navegação por scroll suave. Nada de animações excessivas, cursor customizado discreto opcional.

## Estilo visual

Inspirações anexadas: o lettering "New York City" (verde escuro + laranja, sans serif bold condensado e recortado) e o "Woody Herman" (vermelho saturado, script + bloco, acabamento impresso vintage). Traduza isso assim:

- **Paleta:** fundo escuro dominante (verde-floresta profundo #0B2818 ou preto-esverdeado como base principal), tipografia e elementos gráficos em laranja vibrante (#FF4A1C) como destaque. Cor secundária de apoio em off-white quente (#F3EADB) para textos longos. Use vermelho saturado (#E63027) em acentos pontuais (hover, tags de categoria).

- **Tipografia:**

  - Display/hero: fonte sans serif bold condensada, pesada, com personalidade recortada. Sugestões: **Anton**, **Bebas Neue** super aumentada, ou melhor ainda **Druk Wide Bold** / **Monument Extended**. Deve ter o impacto do lettering "New York City".

  - Subtítulos e acentos: uma fonte script retrô tipo **Lobster**, **Pacifico** ou **Alfa Slab** para dar o toque "Woody Herman" em elementos pequenos (nome de seção, assinaturas, o "Pedro" do logo talvez).

  - Corpo de texto: sans serif limpa e legível (Inter ou Neue Haas Grotesk).

- **Tratamento gráfico:** leve textura de papel/grão sutil no fundo pra puxar o acabamento impresso vintage das referências, sem exagerar. Bordas e caixas com sombra offset chapada (tipo a sombra azul do "Herman") em tags e botões, remetendo a cartaz de show antigo.

- **Layout:** muito espaço em branco (ou em verde, no caso), tipografia gigante, poucos elementos por tela. Deixa a tipografia respirar.

- **Microinterações:** transições suaves (300 a 500ms), hover nos projetos muda cor de fundo do card pra laranja com texto em verde, invertendo a paleta. Cursor grande e colorido opcional.

## Técnico

- React + Vite + Tailwind CSS.

- Totalmente responsivo, mobile-first.

- Vídeos placeholder podem ser do Pexels ou Vimeo embeds genéricos.

- SEO básico configurado: title "Pedro H.P. — Video Editor", meta description, Open Graph.

- Performance: lazy load nos vídeos do grid.

- Sem CMS, conteúdo hardcoded em um arquivo de dados JSON ou TS que facilite editar depois.

## O que eu NÃO quero

- Nada de layout de agência corporativa com headers gigantes e muitos botões.

- Nada de gradientes modernos genéricos ou glassmorphism.

- Nada de ilustrações 3D ou mascotes.

- Nada de seção "Services" com ícones e cards iguais.

O resultado deve parecer portfolio de editor com olhar autoral, quase um cartaz dos anos 70 virado site.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a2d38d7-2049-4430-a143-e8e74e607dbf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
