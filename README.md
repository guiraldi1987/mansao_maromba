# 🌋 Landing Page Mansão Maromba - O Sabor Energético

Este é o projeto completo de uma Landing Page premium de alta conversão desenvolvido para o energético fictício **Mansão Maromba**. O tema visual adota o estilo **Laranja Vulcânico & Dark Premium Hardcore**, ideal para o público fitness e de alta performance.

O projeto foi inteiramente estruturado com auxílio de Inteligência Artificial (**Antigravity** e **Google Gemini**), adotando as melhores práticas de desenvolvimento web moderno, com semântica HTML5, CSS componentizado e metodologia BEM.

---

## 🚀 1. Histórico de Iteração de Prompts (Mínimo de 3)

Para atender aos requisitos de engenharia de prompt e refinamento contínuo, a construção foi dividida em três fases incrementais:

### Iteração 1: Geração da Base Estrutural e Tema
> **Prompt:** *"Crie o planejamento, público-alvo e proposta de valor para um energético fitness premium chamado 'Mansão Maromba'. A estrutura da landing page deve conter cabeçalho, hero section com slogan 'O sabor energético', seção de benefícios da fórmula, seção sobre a história e diferenciais do produto, depoimentos inspiradores de atletas fisiculturistas e uma seção especial de CTA para compra coletiva. Adote um tema visual dark premium com cores agressivas e de destaque."*
*   **Resultado:** Definição completa da persona, proposta de valor da marca e esqueleto semântico das seções da página.

### Iteração 2: Refinamento Estético e Destaque Vulcânico
> **Prompt:** *"Refine o design da landing page aplicando uma paleta de cores 'Laranja Vulcânico' (fundo preto profundo `#0a0a0c`, cinza escuro `#121216` e detalhes/hover em laranja elétrico vibrante `#ff5500` com sombras neon brilhantes). Aumente a hierarquia visual dos botões de compra utilizando efeitos de pulso luminoso e destaque o produto central, uma lata 3D que flutua suavemente."*
*   **Resultado:** Definição das variáveis no CSS principal, animações de flutuação para o produto, e as microinterações de brilho nos botões.

### Iteração 3: Inclusão da Tabela Nutricional Realista e Interatividade
> **Prompt:** *"Adicione uma seção interativa dedicada à fórmula científica hardcore do energético. Crie uma tabela nutricional realista de alta fidelidade (estilo Supplement Facts de marcas de fisiculturismo importadas), destacando os ingredientes ativos: Cafeína Anidra (200mg), Beta-Alanina (1.500mg) e Taurina (1.000mg). No arquivo JavaScript, implemente um observador de interseção para fazer com que os números das métricas de ingredientes na tela subam progressivamente (contador animado) quando o usuário rolar a página."*
*   **Resultado:** Implementação do componente `ingredients.css` com a tabela estilizada e o script progressivo no `app.js`.

---

## 📂 2. Estrutura Organizacional do Projeto (CSS Componentizado)

O código adota uma arquitetura limpa, modular e componentizada sob a metodologia **BEM (Block, Element, Modifier)**. O arquivo principal `css/main.css` centraliza o design system e importa os módulos individuais:

```
/
├── index.html              # Estrutura HTML5 semântica e acessível
├── README.md               # Este guia do projeto e documentação
├── css/
│   ├── main.css            # Orquestrador global, variáveis e resets
│   └── components/
│       ├── header.css      # Menu de navegação responsivo com efeito glassmorphism
│       ├── button.css      # Botões de ação, microinterações e pulse glows
│       ├── hero.css        # Seção principal com imagem de lata flutuante
│       ├── benefits.css    # Cards de benefícios e hovers de transformação
│       ├── ingredients.css  # Detalhamento de ingredientes ativos e tabela nutricional
│       ├── about.css       # Seção "Sobre" com métricas de performance animadas
│       ├── testimonials.css# Depoimentos estruturados com estrelas avaliativas
│       ├── cta.css         # Área de oferta especial com tags de escassez
│       └── footer.css      # Rodapé corporativo com disclaimers acadêmicos
├── assets/
│   └── images/
│       ├── lata.png        # Render 3D premium da lata Mansão Maromba
│       ├── gym_bg.png      # Background desfocado de academia hardcore com neon
│       └── energy_bg.png   # Textura abstrata de explosão de faíscas laranjas
└── js/
    └── app.js              # Efeitos dinâmicos, contadores numéricos e rastro de faíscas
```

---

## 🛠️ 3. Recursos Interativos de Destaque

1.  **Contador de Métricas Dinâmico:** Na seção "Sobre", ao rolar a página, os números de miligramas sobem de `0` a `200` e `1500` de forma animada.
2.  **Rastro de Faíscas Vulcânicas (Dynamic Particle Effect):** Ao passar o mouse pela seção final de compra (CTA), pequenas partículas brilhantes surgem e sobem evaporando na tela, criando uma sensação altamente energética.
3.  **Botões com Pulsação de Conversão:** Os botões principais de CTA possuem sombras animadas em ciclos de onda neon (`@keyframes pulse-orange`) para direcionar a atenção do usuário.
4.  **Sticky Glassmorphism Header:** O cabeçalho se adapta suavemente quando o usuário rola a página, ativando um desfoque translúcido inteligente para melhorar a leitura dos textos de fundo.

---

## 🌐 4. Como Publicar no GitHub Pages (Passo a Passo)

Siga este procedimento para colocar a landing page online publicamente e obter o link de entrega:

1.  **Crie uma conta ou faça login** no [GitHub](https://github.com).
2.  **Crie um novo repositório:**
    *   Clique no botão **"New"** (ou "+" no canto superior direito e selecione *New repository*).
    *   Dê um nome ao repositório (ex: `mansao-maromba-lp`).
    *   Deixe o repositório marcado como **Public** (Obrigatório para o plano gratuito do GitHub Pages).
    *   Não marque a opção de adicionar README (pois já criamos um).
    *   Clique em **"Create repository"**.
3.  **Suba os arquivos para o repositório:**
    *   No seu computador, se você tiver o Git instalado, abra o terminal na pasta do projeto e execute:
        ```bash
        git init
        git add .
        git commit -m "First commit: Mansão Maromba Landing Page"
        git branch -M main
        git remote add origin https://github.com/SEU-USUARIO/mansao-maromba-lp.git
        git push -u origin main
        ```
    *   *Alternativa (Sem Terminal):* Na página do repositório vazio no GitHub, clique no link **"uploading an existing file"**, arraste todos os arquivos e pastas do projeto (`index.html`, pasta `css/`, pasta `assets/`, pasta `js/`) diretamente para o navegador e clique em **"Commit changes"**.
4.  **Ative o GitHub Pages:**
    *   Dentro do seu repositório no GitHub, acesse a aba **"Settings"** (Configurações) no topo.
    *   No menu lateral esquerdo, clique na opção **"Pages"**.
    *   Na seção *Build and deployment*, localize a opção **"Source"** e mude para **"Deploy from a branch"**.
    *   Abaixo, em *Branch*, selecione **`main`** (ou `master`) e clique no botão **"Save"** ao lado.
5.  **Acesse sua Landing Page online:**
    *   Aguarde cerca de 1 a 2 minutos para o GitHub processar os arquivos.
    *   Atualize a página de configurações. No topo da tela de configurações do "GitHub Pages", aparecerá uma caixa indicando: 
        `Your site is live at https://seu-usuario.github.io/mansao-maromba-lp/`
    *   Clique no link gerado para visualizar e entregar a página publicada!
