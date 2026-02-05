# SINTAEMA Website - README

## Sobre o Projeto

Site institucional moderno e responsivo do SINTAEMA/SC (Sindicato dos Trabalhadores em Água, Esgoto e Meio Ambiente de Santa Catarina).

**Slogan:** "Água é vida, privatizá-la é crime"

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design system moderno com CSS Variables, Flexbox e Grid
- **JavaScript (ES6+)**: Interatividade e funcionalidades dinâmicas
- **Font Awesome 6.5.1**: Ícones
- **Google Fonts**: Inter e Roboto

## Estrutura de Arquivos

```
Site-Sintaema/
├── index.html              # Página inicial
├── sobre.html              # Sobre o SINTAEMA
├── juridico.html           # Assessoria Jurídica
├── noticias.html           # Notícias
├── midia.html              # Galeria de Mídia
├── campanhas.html          # Campanhas Salariais
├── financas.html           # Prestação de Contas
├── filiacao.html           # Filiação
├── contato.html            # Contato
├── css/
│   └── styles.css          # Estilos principais
├── js/
│   ├── main.js             # JavaScript principal
│   ├── gallery.js          # Galeria de imagens
│   └── news.js             # Funcionalidades de notícias
├── images/                 # Imagens do site
│   ├── logo/
│   ├── news/
│   └── gallery/
└── documents/              # Documentos para download
    ├── estatuto.pdf
    └── acts/
```

## Funcionalidades

### Navegação
- Menu responsivo com hamburger menu para mobile
- Navegação sticky (fixa no topo ao rolar)
- Destaque automático da página ativa
- Smooth scrolling para âncoras

### Design
- Design system completo com variáveis CSS
- Paleta de cores da marca SINTAEMA
- Totalmente responsivo (mobile, tablet, desktop)
- Animações e transições suaves
- Cards modernos com efeitos hover

### Formulários
- Validação de formulários em JavaScript
- Mensagens de erro personalizadas
- Validação de e-mail

### Performance
- Lazy loading de imagens
- CSS otimizado
- JavaScript modular

## Como Executar Localmente

### Opção 1: Servidor Python
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 2: Servidor Node.js
```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute na pasta do projeto
http-server -p 8000

# Acesse: http://localhost:8000
```

### Opção 3: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## Paleta de Cores

```css
--color-primary-dark: #003366;  /* Azul Marinho */
--color-primary: #0066CC;       /* Azul Claro */
--color-accent: #CC0000;        /* Vermelho Acento */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
```

## Compatibilidade de Navegadores

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Como Atualizar Conteúdo

### Adicionar Notícia
1. Abra `index.html` ou `noticias.html`
2. Copie um card de notícia existente
3. Atualize:
   - Imagem (`src="images/news/sua-imagem.jpg"`)
   - Data
   - Título
   - Texto
   - Link

### Atualizar Diretoria
1. Abra `sobre.html`
2. Localize a seção "Diretoria"
3. Atualize nome, cargo e e-mail nos cards

### Adicionar Documento
1. Coloque o PDF na pasta `documents/`
2. Crie um link: `<a href="documents/seu-arquivo.pdf" download>`

## SEO

O site inclui:
- Meta tags descritivas
- Open Graph tags para redes sociais
- Estrutura semântica HTML5
- URLs amigáveis
- Alt text em imagens

## Acessibilidade

- Navegação por teclado
- Labels em formulários
- ARIA labels em ícones
- Contraste adequado de cores
- Texto alternativo em imagens

## Contato

**SINTAEMA/SC**
- Endereço: Av. Mauro Ramos, 502 - Centro, Florianópolis/SC
- CEP: 88020-301
- Telefone: (48) 3224-3868
- E-mail: secretaria@sintaema.org.br

## Licença

© 2026 SINTAEMA/SC - Todos os direitos reservados
CNPJ: 83.566.729/0001-57
