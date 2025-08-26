# Parque Aventura - Sistema de Pontuação

Uma aplicação web moderna e responsiva para gestão de pontuações em atividades de Arco e Flecha e Paintball, ideal para parques de aventura e atividades ao ar livre.

## 🌟 Características Principais

### 🎯 **Funcionalidades do Jogo**
- **Sistema de Pontuação** para Arco e Flecha (10, 8, 7, 6, 5, 4, 3, 2, 1, 0) e Paintball (30, 20, 10, 8, 6, 0)
- **Múltiplos Jogadores** com nomes personalizados
- **Sistema de Rondas** estilo bowling (todos jogam uma vez por ronda)
- **Configuração Flexível** de número de rondas
- **Estatísticas em Tempo Real** com precisão e acertos

### 🌍 **Sistema Multilingue**
- **5 Idiomas**: Português, Inglês, Francês, Alemão, Italiano
- **Bandeiras Visuais** para seleção de idioma
- **Tradução Completa** de toda a interface
- **"Parque Aventura"** mantido em todas as línguas

### 🎨 **Design e Interface**
- **Tema Verde/Natureza** inspirado em parques biológicos
- **Design Mobile-First** otimizado para telemóveis e tablets
- **Interface Moderna** com gradientes, sombras e animações
- **Cores Específicas** para pontuações do Arco e Flecha
- **Animações Suaves** e efeitos visuais

### 📱 **Progressive Web App (PWA)**
- **Instalável** como aplicação nativa
- **Funciona Offline** após instalação
- **Ícone Personalizado** do Parque Aventura
- **Tema Verde** consistente

## 🚀 Como Publicar

### 1. **Preparar Arquivos**
```bash
# Certifique-se de que todos estes arquivos estão na pasta:
- index.html
- styles.css
- script.js
- manifest.json
- logo.png (imagem do logo)
- README.md
```

### 2. **Opções de Hospedagem**

#### **Netlify (Recomendado)**
1. Aceda a [netlify.com](https://netlify.com)
2. Faça login/crie conta
3. Arraste a pasta do projeto para a área de deploy
4. Aguarde o upload e deploy automático
5. O site estará disponível em `https://[nome-aleatorio].netlify.app`

#### **GitHub Pages**
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá para Settings > Pages
4. Selecione a branch main
5. O site estará disponível em `https://[username].github.io/[repo-name]`

#### **Vercel**
1. Aceda a [vercel.com](https://vercel.com)
2. Conecte com GitHub/GitLab
3. Selecione o repositório
4. Deploy automático

### 3. **Configurações Pós-Deploy**

#### **Personalizar URL (Netlify)**
- Vá para Site settings > Domain management
- Clique em "Change site name"
- Escolha um nome personalizado: `parque-aventura-scoreboard`

#### **Configurar Domínio Personalizado**
- Compre um domínio (ex: `scoreboard.parqueaventura.pt`)
- Configure DNS para apontar para o Netlify
- Adicione o domínio nas configurações do Netlify

## 📱 Como Usar

### **Para Utilizadores Finais**
1. **Aceder**: Abrir o link no navegador
2. **Escolher Idioma**: Selecionar bandeira no topo
3. **Selecionar Atividade**: Arco e Flecha ou Paintball
4. **Adicionar Jogadores**: Inserir nomes e número de rondas
5. **Jogar**: Clicar nas pontuações conforme os resultados
6. **Ver Resultados**: Estatísticas finais com rankings e conquistas

### **Para Administradores**
- **Instalar como App**: Clicar em "Instalar" no navegador
- **Configurar QR Code**: Gerar QR code para o link do site
- **Partilhar**: Enviar link ou QR code para participantes

## 🎨 Personalização

### **Cores e Tema**
- **Cores Principais**: Verde escuro (#228B22) e Verde claro (#32CD32)
- **Tema**: Natureza e parques biológicos
- **Gradientes**: Verde para elementos principais

### **Logo**
- **Formato**: PNG recomendado
- **Tamanho**: 192x192px ou 512x512px
- **Localização**: `logo.png` na pasta raiz

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos e animações
- **JavaScript**: Lógica do jogo e sistema de idiomas
- **PWA**: Manifest e funcionalidades offline
- **Flag Icons**: Bandeiras para seleção de idioma

## 📊 Funcionalidades Técnicas

- **Estado Global**: Gestão centralizada do jogo
- **Sistema de Idiomas**: Tradução dinâmica da interface
- **Responsividade**: Adaptação automática a diferentes ecrãs
- **Animações**: Efeitos visuais e transições suaves
- **Local Storage**: Persistência de dados no navegador

## 🌟 Próximas Funcionalidades

- [ ] **Histórico de Jogos**: Guardar resultados anteriores
- [ ] **Modo Competição**: Sistema de eliminatórias
- [ ] **Exportar Dados**: CSV/Excel dos resultados
- [ ] **Mais Idiomas**: Espanhol, Holandês, etc.
- [ ] **Temas Personalizáveis**: Diferentes esquemas de cores

## 📞 Suporte

Para questões técnicas ou sugestões:
- **Email**: [seu-email@exemplo.com]
- **GitHub**: [link-para-issues]

---

**Desenvolvido com ❤️ para parques de aventura e atividades ao ar livre**

*Versão 2.0 - Tema Verde/Natureza + Sistema Multilingue* 