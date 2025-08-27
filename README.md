# 🏹 Parque Aventura - Sistema de Pontuação

Uma aplicação web moderna e responsiva para gestão de pontuações em atividades de arco e flecha e paintball no Parque Aventura.

## ✨ **Funcionalidades Principais**

### 🎯 **Jogos Suportados**
- **Arco e Flecha** - Sistema de pontuação de 0-10 pontos + "Fora"
- **Paintball** - Sistema de pontuação de 0, 6, 8, 10, 20, 30 pontos

### 👥 **Gestão de Jogadores**
- Adicionar/remover jogadores dinamicamente
- Configuração personalizada do número de rondas (1-100)
- Ronda padrão: 20 para Arco e Flecha

### 📊 **Sistema de Pontuação**
- Interface intuitiva com botões coloridos por pontuação
- Scoreboard em tempo real durante o jogo
- Indicador visual do jogador atual
- Progresso do jogo com barra visual

### 🏆 **Resultados e Estatísticas**
- **Classificação final** com medalhas (ouro, prata, bronze)
- **Estatísticas individuais** por jogador
- **Média de pontos** e precisão
- **Histórico de rondas** com destaque para melhores pontuações
- **Achievements** baseados no desempenho

### 🌍 **Internacionalização**
- **Português** (padrão)
- **Inglês**
- Interface adaptada para ambos os idiomas

## 🎨 **Design e UX**

### **Princípios de Design**
- **Mobile-first** - Otimizado para telemóveis
- **Responsivo** - Adapta-se a todos os tamanhos de ecrã
- **Acessível** - Suporte para navegação por teclado
- **Profissional** - Visual moderno e atrativo

### **Paleta de Cores**
- **Verde** - Tema principal do Parque Aventura
- **Azul** - Jogador atual e elementos interativos
- **Dourado** - Destaque para vencedores e melhores pontuações
- **Branco/Cinza** - Fundos e textos para legibilidade

### **Componentes Visuais**
- **Cartões elegantes** com sombras e bordas arredondadas
- **Botões interativos** com efeitos hover e active
- **Gradientes suaves** para profundidade visual
- **Animações fluidas** para transições e interações

## 📱 **Responsividade**

### **Mobile (≤768px)**
- Layout em coluna única
- Botões de pontuação otimizados para toque
- Scoreboard sem scroll interno
- Navegação simplificada

### **Tablet (768px-1024px)**
- Layout híbrido com elementos lado a lado
- Grid de pontuação expandido
- Melhor aproveitamento do espaço

### **Desktop (>1024px)**
- Layout completo com máximo aproveitamento
- Grid de pontuação 5x5 para Arco e Flecha
- Estatísticas em colunas múltiplas

## 🚀 **Tecnologias Utilizadas**

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis CSS e flexbox
- **JavaScript ES6+** - Lógica de jogo e gestão de estado
- **Design System** - Sistema de tokens para consistência visual

## 📁 **Estrutura do Projeto**

```
papbv/
├── index.html          # Interface principal
├── styles.css          # Estilos e design system
├── script.js           # Lógica de jogo
├── README.md           # Documentação
├── Tiro ao Arco.png    # Ícone personalizado para Arco e Flecha
└── Paintball.png       # Ícone personalizado para Paintball
```

## 🎮 **Como Jogar**

### 1. **Seleção do Jogo**
- Escolher entre "Arco e Flecha" ou "Paintball"
- Configurar número de rondas desejado

### 2. **Configuração de Jogadores**
- Adicionar nomes dos jogadores
- Confirmar configurações

### 3. **Durante o Jogo**
- Jogador atual é destacado em verde
- Clicar na pontuação obtida em cada ronda
- Scoreboard atualiza em tempo real
- Progresso visual mostra avanço do jogo

### 4. **Resultados Finais**
- Classificação automática por pontuação total
- Estatísticas detalhadas por jogador
- Destaque dourado para vencedores
- Opção de novo jogo

## 🔧 **Funcionalidades Técnicas**

### **Gestão de Estado**
- Estado do jogo persistente durante a sessão
- Validação de dados em tempo real
- Gestão de erros e estados inválidos

### **Performance**
- Animações otimizadas com CSS transforms
- Lazy loading de elementos pesados
- Debouncing para eventos frequentes

### **Acessibilidade**
- Suporte para navegação por teclado
- Indicadores visuais claros
- Textos alternativos para elementos visuais
- Suporte para `prefers-reduced-motion`

## 🌟 **Melhorias Implementadas**

### **Versão Atual (v2.0)**
- ✅ **Interface redesenhada** - Visual moderno e profissional
- ✅ **Scoreboard otimizado** - Sem scroll interno, melhor legibilidade
- ✅ **Sistema de dourado** - Só no fim, não durante a atividade
- ✅ **Cores melhoradas** - Melhor contraste e visibilidade
- ✅ **Efeitos hover** - Interatividade em todos os elementos
- ✅ **Responsividade** - Funciona perfeitamente em todos os dispositivos
- ✅ **Ícones personalizados** - Substituição dos emojis por PNGs
- ✅ **Secção de resultados** - Completamente redesenhada

### **Funcionalidades Especiais**
- **Rondas douradas** - Destacam automaticamente as melhores pontuações
- **Indicadores visuais** - Jogador atual claramente identificado
- **Estatísticas avançadas** - Precisão, acertos e médias
- **Sistema de achievements** - Reconhecimento de desempenho

## 📱 **Compatibilidade**

### **Navegadores Suportados**
- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+

### **Dispositivos Testados**
- ✅ **iPhone** (iOS 14+)
- ✅ **Android** (Android 10+)
- ✅ **Tablets** (iPad, Android)
- ✅ **Desktop** (Windows, macOS, Linux)

## 🚀 **Deploy**

### **GitHub Pages**
A aplicação está disponível em: [https://aicrag46.github.io/papbv/](https://aicrag46.github.io/papbv/)

### **Deploy Local**
1. Clonar o repositório
2. Abrir `index.html` no navegador
3. Ou usar servidor local: `python -m http.server 8000`

## 🤝 **Contribuições**

Contribuições são bem-vindas! Para contribuir:

1. Fazer fork do projeto
2. Criar branch para feature (`git checkout -b feature/AmazingFeature`)
3. Commit das mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para o branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 **Licença**

Este projeto está sob a licença MIT. Ver `LICENSE` para mais detalhes.

## 👨‍💻 **Autor**

**Parque Aventura** - Sistema desenvolvido para gestão de atividades recreativas.

---

## 🎯 **Roadmap Futuro**

### **Funcionalidades Planeadas**
- [ ] **Histórico de jogos** - Guardar resultados anteriores
- [ ] **Modo escuro** - Alternativa ao tema atual
- [ ] **Sons e efeitos** - Feedback auditivo
- [ ] **Partilha de resultados** - WhatsApp, Email, etc.
- [ ] **Modo offline** - Funcionar sem internet
- [ ] **Backup local** - Guardar dados no dispositivo

### **Melhorias Técnicas**
- [ ] **PWA** - Progressive Web App
- [ ] **Service Worker** - Cache e atualizações
- [ ] **IndexedDB** - Armazenamento local avançado
- [ ] **WebSockets** - Jogos em tempo real
- [ ] **API REST** - Backend para persistência

---

**⭐ Se este projeto te ajudou, considera dar uma estrela no GitHub!** 