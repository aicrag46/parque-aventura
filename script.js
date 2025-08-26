// Estado global da aplicação
let gameState = {
    selectedGame: null,
    players: [],
    currentPlayerIndex: 0,
    currentRound: 1,
    totalRounds: 20,
    gameStarted: false,
    gameEnded: false,
    language: 'pt' // Idioma padrão
};

// Sistema de idiomas
const translations = {
    pt: {
        title: 'Parque Aventura',
        subtitle: 'Sistema de Pontuação',
        archery: 'Arco e Flecha',
        paintball: 'Paintball',
        rounds: 'rondas (todos jogam por ronda)',
        addPlayer: 'Adicionar Jogador',
        playerName: 'Nome do jogador',
        roundsLabel: 'Número de Rondas',
        startGame: 'Iniciar Jogo',
        currentRound: 'Ronda',
        of: 'de',
        points: 'pts',
        accuracy: 'precisão',
        hits: 'acertos',
        realTimeScoreboard: 'PLACAR EM TEMPO REAL',
        endGame: 'Terminar Jogo',
        finalResults: 'Resultados Finais',
        newGame: 'Novo Jogo',
        achievements: 'Conquistas e Estatísticas',
        totalAccuracy: 'Precisão Total',
        bestPlayer: 'Melhor Jogador',
        maxScore: 'Pontuação Máxima',
        performance: 'Performance',
        individualStats: 'Estatísticas Individuais Detalhadas',
        position: 'Posição',
        totalScore: 'Pontuação Total',
        averageScore: 'Pontuação Média',
        bestRound: 'Melhor Ronda',
        roundsBreakdown: 'Detalhe por Rondas',
        miss: 'FORA',
        missTitle: 'Falha total',
        chooseActivity: 'Escolha a Atividade',
        playerSetup: 'Configuração dos Jogadores',
        next: 'Próximo',
        current: 'Atual',
        round: 'Ronda',
        rounds: 'Rondas',
        player: 'Jogador',
        players: 'Jogadores',
        total: 'Total',
        average: 'Média',
        best: 'Melhor',
        worst: 'Pior',
        accuracy: 'Precisão',
        hits: 'Acertos',
        misses: 'Falhas',
        percentage: '%',
        remove: 'Remover',
        add: 'Adicionar',
        start: 'Iniciar',
        end: 'Terminar',
        back: 'Voltar',
        continue: 'Continuar',
        finish: 'Finalizar',
        cancel: 'Cancelar',
        save: 'Salvar',
        edit: 'Editar',
        delete: 'Eliminar',
        confirm: 'Confirmar',
        yes: 'Sim',
        no: 'Não',
        ok: 'OK',
        close: 'Fechar',
        loading: 'A carregar...',
        error: 'Erro',
        success: 'Sucesso',
        warning: 'Aviso',
        info: 'Informação'
    },
    en: {
        title: 'Parque Aventura',
        subtitle: 'Scoring System',
        archery: 'Archery',
        paintball: 'Paintball',
        rounds: 'rounds (all play per round)',
        addPlayer: 'Add Player',
        playerName: 'Player name',
        roundsLabel: 'Number of Rounds',
        startGame: 'Start Game',
        currentRound: 'Round',
        of: 'of',
        points: 'pts',
        accuracy: 'accuracy',
        hits: 'hits',
        realTimeScoreboard: 'REAL-TIME SCOREBOARD',
        endGame: 'End Game',
        finalResults: 'Final Results',
        newGame: 'New Game',
        achievements: 'Achievements and Statistics',
        totalAccuracy: 'Total Accuracy',
        bestPlayer: 'Best Player',
        maxScore: 'Maximum Score',
        performance: 'Performance',
        individualStats: 'Detailed Individual Statistics',
        position: 'Position',
        totalScore: 'Total Score',
        averageScore: 'Average Score',
        bestRound: 'Best Round',
        roundsBreakdown: 'Rounds Breakdown',
        miss: 'MISS',
        missTitle: 'Complete miss',
        chooseActivity: 'Choose Activity',
        playerSetup: 'Player Setup',
        next: 'Next',
        current: 'Current',
        round: 'Round',
        rounds: 'Rounds',
        player: 'Player',
        players: 'Players',
        total: 'Total',
        average: 'Average',
        best: 'Best',
        worst: 'Worst',
        accuracy: 'Accuracy',
        hits: 'Hits',
        misses: 'Misses',
        percentage: '%',
        remove: 'Remove',
        add: 'Add',
        start: 'Start',
        end: 'End',
        back: 'Back',
        continue: 'Continue',
        finish: 'Finish',
        cancel: 'Cancel',
        save: 'Save',
        edit: 'Edit',
        delete: 'Delete',
        confirm: 'Confirm',
        yes: 'Yes',
        no: 'No',
        ok: 'OK',
        close: 'Close',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        warning: 'Warning',
        info: 'Information'
    },
    fr: {
        title: 'Parque Aventura',
        subtitle: 'Système de Score',
        archery: 'Tir à l\'Arc',
        paintball: 'Paintball',
        rounds: 'manches (tous jouent par manche)',
        addPlayer: 'Ajouter un Joueur',
        playerName: 'Nom du joueur',
        roundsLabel: 'Nombre de Manches',
        startGame: 'Commencer le Jeu',
        currentRound: 'Manche',
        of: 'sur',
        points: 'pts',
        accuracy: 'précision',
        hits: 'tirs réussis',
        realTimeScoreboard: 'TABLEAU DE SCORE EN TEMPS RÉEL',
        endGame: 'Terminer le Jeu',
        finalResults: 'Résultats Finaux',
        newGame: 'Nouveau Jeu',
        achievements: 'Réalisations et Statistiques',
        totalAccuracy: 'Précision Totale',
        bestPlayer: 'Meilleur Joueur',
        maxScore: 'Score Maximum',
        performance: 'Performance',
        individualStats: 'Statistiques Individuelles Détaillées',
        position: 'Position',
        totalScore: 'Score Total',
        averageScore: 'Score Moyen',
        bestRound: 'Meilleure Manche',
        roundsBreakdown: 'Détail par Manches',
        miss: 'RATÉ',
        missTitle: 'Échec complet',
        chooseActivity: 'Choisir l\'Activité',
        playerSetup: 'Configuration des Joueurs',
        next: 'Suivant',
        current: 'Actuel',
        round: 'Manche',
        rounds: 'Manches',
        player: 'Joueur',
        players: 'Joueurs',
        total: 'Total',
        average: 'Moyenne',
        best: 'Meilleur',
        worst: 'Pire',
        accuracy: 'Précision',
        hits: 'Tirs réussis',
        misses: 'Échecs',
        percentage: '%',
        remove: 'Supprimer',
        add: 'Ajouter',
        start: 'Commencer',
        end: 'Terminer',
        back: 'Retour',
        continue: 'Continuer',
        finish: 'Terminer',
        cancel: 'Annuler',
        save: 'Sauvegarder',
        edit: 'Modifier',
        delete: 'Supprimer',
        confirm: 'Confirmer',
        yes: 'Oui',
        no: 'Non',
        ok: 'OK',
        close: 'Fermer',
        loading: 'Chargement...',
        error: 'Erreur',
        success: 'Succès',
        warning: 'Avertissement',
        info: 'Information'
    },
    de: {
        title: 'Parque Aventura',
        subtitle: 'Punktesystem',
        archery: 'Bogenschießen',
        paintball: 'Paintball',
        rounds: 'Runden (alle spielen pro Runde)',
        addPlayer: 'Spieler Hinzufügen',
        playerName: 'Spielername',
        roundsLabel: 'Anzahl der Runden',
        startGame: 'Spiel Starten',
        currentRound: 'Runde',
        of: 'von',
        points: 'Pkt',
        accuracy: 'Genauigkeit',
        hits: 'Treffer',
        realTimeScoreboard: 'ECHTZEIT-PUNKTESTAND',
        endGame: 'Spiel Beenden',
        finalResults: 'Endergebnisse',
        newGame: 'Neues Spiel',
        achievements: 'Erfolge und Statistiken',
        totalAccuracy: 'Gesamtgenauigkeit',
        bestPlayer: 'Bester Spieler',
        maxScore: 'Höchstpunktzahl',
        performance: 'Leistung',
        individualStats: 'Detaillierte Einzelstatistiken',
        position: 'Position',
        totalScore: 'Gesamtpunktzahl',
        averageScore: 'Durchschnittspunktzahl',
        bestRound: 'Beste Runde',
        roundsBreakdown: 'Rundenaufschlüsselung',
        miss: 'VERFEHLT',
        missTitle: 'Vollständiger Fehlschuss',
        chooseActivity: 'Aktivität Wählen',
        playerSetup: 'Spieler Einrichtung',
        next: 'Nächster',
        current: 'Aktuell',
        round: 'Runde',
        rounds: 'Runden',
        player: 'Spieler',
        players: 'Spieler',
        total: 'Gesamt',
        average: 'Durchschnitt',
        best: 'Bester',
        worst: 'Schlechtester',
        accuracy: 'Genauigkeit',
        hits: 'Treffer',
        misses: 'Fehlschüsse',
        percentage: '%',
        remove: 'Entfernen',
        add: 'Hinzufügen',
        start: 'Starten',
        end: 'Beenden',
        back: 'Zurück',
        continue: 'Weiter',
        finish: 'Beenden',
        cancel: 'Abbrechen',
        save: 'Speichern',
        edit: 'Bearbeiten',
        delete: 'Löschen',
        confirm: 'Bestätigen',
        yes: 'Ja',
        no: 'Nein',
        ok: 'OK',
        close: 'Schließen',
        loading: 'Laden...',
        error: 'Fehler',
        success: 'Erfolg',
        warning: 'Warnung',
        info: 'Information'
    },
    it: {
        title: 'Parque Aventura',
        subtitle: 'Sistema di Punteggio',
        archery: 'Tiro con l\'Arco',
        paintball: 'Paintball',
        rounds: 'round (tutti giocano per round)',
        addPlayer: 'Aggiungi Giocatore',
        playerName: 'Nome del giocatore',
        roundsLabel: 'Numero di Round',
        startGame: 'Inizia Gioco',
        currentRound: 'Round',
        of: 'di',
        points: 'pt',
        accuracy: 'precisione',
        hits: 'centri',
        realTimeScoreboard: 'TABELLONE PUNTEGGI IN TEMPO REALE',
        endGame: 'Termina Gioco',
        finalResults: 'Risultati Finali',
        newGame: 'Nuovo Gioco',
        achievements: 'Conquiste e Statistiche',
        totalAccuracy: 'Precisione Totale',
        bestPlayer: 'Miglior Giocatore',
        maxScore: 'Punteggio Massimo',
        performance: 'Prestazione',
        individualStats: 'Statistiche Individuali Dettagliate',
        position: 'Posizione',
        totalScore: 'Punteggio Totale',
        averageScore: 'Punteggio Medio',
        bestRound: 'Miglior Round',
        roundsBreakdown: 'Dettaglio per Round',
        miss: 'MANCATO',
        missTitle: 'Mancato completo',
        chooseActivity: 'Scegli Attività',
        playerSetup: 'Configurazione Giocatori',
        next: 'Prossimo',
        current: 'Attuale',
        round: 'Round',
        rounds: 'Round',
        player: 'Giocatore',
        players: 'Giocatori',
        total: 'Totale',
        average: 'Media',
        best: 'Migliore',
        worst: 'Peggiore',
        accuracy: 'Precisione',
        hits: 'Centri',
        misses: 'Mancati',
        percentage: '%',
        remove: 'Rimuovi',
        add: 'Aggiungi',
        start: 'Inizia',
        end: 'Termina',
        back: 'Indietro',
        continue: 'Continua',
        finish: 'Finisci',
        cancel: 'Annulla',
        save: 'Salva',
        edit: 'Modifica',
        delete: 'Elimina',
        confirm: 'Conferma',
        yes: 'Sì',
        no: 'No',
        ok: 'OK',
        close: 'Chiudi',
        loading: 'Caricamento...',
        error: 'Errore',
        success: 'Successo',
        warning: 'Avviso',
        info: 'Informazione'
    }
};

// Configurações dos jogos
const gameConfigs = {
    archery: {
        name: 'Arco e Flecha',
        icon: '🏹',
        defaultRounds: 20,
        scores: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        scoreLabels: {
            10: 'Bulls Eye!',
            9: 'Excelente!',
            8: 'Muito Bom!',
            7: 'Bom!',
            6: 'Regular',
            5: 'Aceitável',
            4: 'Baixo',
            3: 'Muito Baixo',
            2: 'Falha',
            1: 'Falha',
            0: 'Erro'
        }
    },
    paintball: {
        name: 'Paintball',
        icon: '🔫',
        defaultRounds: 40,
        scores: [30, 20, 10, 8, 6, 0],
        scoreLabels: {
            30: 'Perfeito!',
            20: 'Excelente!',
            10: 'Bom!',
            8: 'Regular',
            6: 'Baixo',
            0: 'Erro'
        }
    }
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicação iniciada');
    
    // Mostrar tela de seleção de jogo no início
    showScreen('gameSelection');
    
    // Inicializar interface com idioma padrão
    updateInterfaceLanguage();
    
    // Configurar eventos de teclado
    const playerNameInput = document.getElementById('playerName');
    if (playerNameInput) {
        playerNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addPlayer();
            }
        });
    }
    
    // Configurar input de rondas
    const roundsInput = document.getElementById('roundsInput');
    if (roundsInput) {
        roundsInput.addEventListener('change', function() {
            updateRoundsInput();
        });
    }
    
    console.log('Interface inicializada');
});

// Função para selecionar jogo
function selectGame(gameType) {
    console.log('Jogo selecionado:', gameType);
    
    gameState.selectedGame = gameType;
    gameState.totalRounds = gameConfigs[gameType].defaultRounds;
    
    // Limpar jogadores anteriores
    gameState.players = [];
    updatePlayersList();
    
    // Atualizar interface da tela de configuração
    const gameIcon = document.getElementById('selectedGameIcon');
    const gameName = document.getElementById('selectedGameName');
    const roundsInput = document.getElementById('roundsInput');
    
    if (gameIcon) gameIcon.textContent = gameConfigs[gameType].icon;
    if (gameName) gameName.textContent = gameConfigs[gameType].name[gameState.language];
    if (roundsInput) roundsInput.value = gameState.totalRounds;
    
    // Mostrar tela de configuração de jogadores
    showScreen('playerSetup');
    
    console.log('Configuração do jogo atualizada');
}

// Função para adicionar jogador
function addPlayer() {
    const playerNameInput = document.getElementById('playerName');
    const playerName = playerNameInput.value.trim();
    
    if (playerName === '') {
        alert('Por favor, insira um nome para o jogador.');
        return;
    }
    
    if (gameState.players.some(p => p.name.toLowerCase() === playerName.toLowerCase())) {
        alert('Já existe um jogador com esse nome.');
        return;
    }
    
    // Adicionar jogador
    const newPlayer = {
        name: playerName,
        scores: [],
        totalScore: 0,
        hits: 0
    };
    
    gameState.players.push(newPlayer);
    playerNameInput.value = '';
    
    updatePlayersList();
    updateStartButton();
}

// Função para remover jogador
function removePlayer(index) {
    gameState.players.splice(index, 1);
    updatePlayersList();
    updateStartButton();
}

// Função para atualizar lista de jogadores
function updatePlayersList() {
    const playersList = document.getElementById('playersList');
    playersList.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
            <span class="player-name">${player.name}</span>
            <button class="remove-player" onclick="removePlayer(${index})">×</button>
        `;
        playersList.appendChild(playerItem);
    });
}

// Função para atualizar botão de início
function updateStartButton() {
    const startBtn = document.getElementById('startGameBtn');
    startBtn.disabled = gameState.players.length === 0;
}

// Função para atualizar input de rondas
function updateRoundsInput() {
    const roundsInput = document.getElementById('roundsInput');
    const rounds = parseInt(roundsInput.value);
    
    if (rounds < 1) {
        roundsInput.value = 1;
        gameState.totalRounds = 1;
    } else if (rounds > 100) {
        roundsInput.value = 100;
        gameState.totalRounds = 100;
    } else {
        gameState.totalRounds = rounds;
    }
}

// Função para iniciar o jogo
function startGame() {
    if (gameState.players.length === 0) {
        alert('Adicione pelo menos um jogador para iniciar o jogo.');
        return;
    }
    
    gameState.gameStarted = true;
    gameState.currentPlayerIndex = 0;
    gameState.currentRound = 1;
    
    // Inicializar scores dos jogadores
    gameState.players.forEach(player => {
        player.scores = [];
        player.totalScore = 0;
        player.hits = 0;
    });
    
    showScreen('gameScreen');
    updateGameInterface();
}

// Função para atualizar interface do jogo
function updateGameInterface() {
    const t = translations[gameState.language];
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const nextPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    const nextPlayer = gameState.players[nextPlayerIndex];
    
    // Atualizar jogador atual
    const currentPlayerElement = document.getElementById('currentPlayer');
    if (currentPlayerElement) {
        currentPlayerElement.textContent = currentPlayer.name;
    }
    
    // Atualizar estatísticas do jogador atual
    const currentScoreElement = document.getElementById('currentScore');
    if (currentScoreElement) {
        currentScoreElement.textContent = `${currentPlayer.totalScore} ${t.points}`;
    }
    
    const currentAccuracyElement = document.getElementById('currentAccuracy');
    if (currentAccuracyElement) {
        const accuracy = gameState.totalRounds > 0 ? Math.round((currentPlayer.hits / gameState.totalRounds) * 100) : 0;
        currentAccuracyElement.textContent = `${accuracy}${t.percentage}`;
    }
    
    // Atualizar progresso do jogo
    const currentRoundText = document.getElementById('currentRoundText');
    if (currentRoundText) {
        currentRoundText.textContent = `${t.currentRound} ${gameState.currentRound}`;
    }
    
    const totalRoundsText = document.getElementById('totalRoundsText');
    if (totalRoundsText) {
        totalRoundsText.textContent = `${t.of} ${gameState.totalRounds}`;
    }
    
    // Atualizar barra de progresso
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const progress = ((gameState.currentRound - 1) / gameState.totalRounds) * 100;
        progressFill.style.width = `${progress}%`;
    }
    
    // Garantir que as opções de pontuação estão visíveis/atualizadas
    updateScoreOptions();
    
    // Atualizar placar
    updateScoreboard();
}

// Função para atualizar opções de pontuação
function updateScoreOptions() {
    const scoreOptions = document.getElementById('scoreOptions');
    const config = gameConfigs[gameState.selectedGame];
    const t = translations[gameState.language];
    
    // Criar grid específico baseado no jogo
    const gridClass = gameState.selectedGame === 'paintball' ? 'score-grid paintball-grid' : 'score-grid';
    scoreOptions.innerHTML = `<div class="${gridClass}"></div>`;
    const scoreGrid = scoreOptions.querySelector('.score-grid');
    
    if (gameState.selectedGame === 'archery') {
        // Layout para arco e flecha: 2 linhas de 5 botões + botão "Fora"
        const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        
        scores.forEach(score => {
            const scoreBtn = document.createElement('button');
            scoreBtn.className = `score-btn ${gameState.selectedGame}-${score}`;
            scoreBtn.textContent = score;
            scoreBtn.title = config.scoreLabels[score];
            scoreBtn.onclick = () => recordScore(score);
            scoreGrid.appendChild(scoreBtn);
        });
        
        // Adicionar botão "Fora"
        const missBtn = document.createElement('button');
        missBtn.className = 'score-btn archery-miss';
        missBtn.innerHTML = `❌<br>${t.miss}`;
        missBtn.title = t.missTitle;
        missBtn.onclick = () => recordScore(0);
        scoreGrid.appendChild(missBtn);
        
    } else {
        // Layout para paintball: 2 linhas de 3 botões
        config.scores.forEach(score => {
            const scoreBtn = document.createElement('button');
            scoreBtn.className = `score-btn ${gameState.selectedGame}-${score}`;
            scoreBtn.textContent = score;
            scoreBtn.title = config.scoreLabels[score];
            scoreBtn.onclick = () => recordScore(score);
            scoreGrid.appendChild(scoreBtn);
        });
    }
}

// Função para criar efeito de partículas
function createParticleEffect(x, y, color) {
    const particleCount = 12;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Gerar direção aleatória para cada partícula
        const angle = (i / particleCount) * 2 * Math.PI;
        const distance = 80 + Math.random() * 40;
        const randomX = Math.cos(angle) * distance;
        const randomY = Math.sin(angle) * distance;
        
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${6 + Math.random() * 4}px;
            height: ${6 + Math.random() * 4}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            --random-x: ${randomX / 100};
            --random-y: ${randomY / 100};
            animation: particle-explosion 1s ease-out forwards;
            box-shadow: 0 0 10px ${color};
        `;
        
        document.body.appendChild(particle);
        
        // Remover partícula após animação
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Função para registar pontuação com efeito visual
function recordScore(score) {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    // Criar efeito de partículas no botão clicado
    const event = window.event;
    if (event) {
        const rect = event.target.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Cor baseada na pontuação
        let particleColor = '#FFD700';
        if (score >= 8) particleColor = '#FF1744';
        else if (score >= 6) particleColor = '#2196F3';
        else if (score >= 4) particleColor = '#424242';
        else if (score >= 2) particleColor = '#FFFFFF';
        else particleColor = '#FF9800';
        
        createParticleEffect(x, y, particleColor);
    }
    
    // Adicionar pontuação
    currentPlayer.scores.push(score);
    currentPlayer.totalScore += score;
    
    // Contar acertos (pontuação > 0)
    if (score > 0) {
        currentPlayer.hits++;
    }
    
    // Passar para o próximo jogador (todos jogam uma vez por ronda)
    gameState.currentPlayerIndex++;
    
    // Verificar se todos os jogadores jogaram nesta ronda
    if (gameState.currentPlayerIndex >= gameState.players.length) {
        // Todos os jogadores jogaram, próxima ronda
        gameState.currentRound++;
        gameState.currentPlayerIndex = 0; // Voltar ao primeiro jogador
        
        // Verificar se o jogo terminou
        if (gameState.currentRound > gameState.totalRounds) {
            gameState.gameEnded = true;
            showFinalResults();
            return;
        }
    }
    
    // Atualizar interface
    updateGameInterface();
}

// Função para terminar o jogo
function endGame() {
    gameState.gameEnded = true;
    showScreen('resultsScreen');
    showFinalResults();
}

// Função para mostrar resultados finais
function showFinalResults() {
    const t = translations[gameState.language];
    gameState.gameEnded = true;
    
    // Ordenar jogadores por pontuação
    const sortedPlayers = [...gameState.players].sort((a, b) => b.totalScore - a.totalScore);
    
    // Gerar resultados finais
    const finalResults = document.getElementById('finalResults');
    finalResults.innerHTML = '';
    
    sortedPlayers.forEach((player, index) => {
        const accuracy = gameState.totalRounds > 0 ? Math.round((player.hits / gameState.totalRounds) * 100) : 0;
        const averageScore = gameState.totalRounds > 0 ? Math.round(player.totalScore / gameState.totalRounds) : 0;
        
        let medalClass = '';
        if (index === 0) medalClass = 'gold';
        else if (index === 1) medalClass = 'silver';
        else if (index === 2) medalClass = 'bronze';
        
        const playerDiv = document.createElement('div');
        playerDiv.className = `final-player ${medalClass}`;
        
        playerDiv.innerHTML = `
            <div class="position-badge">${index + 1}</div>
            <div class="player-info-final">
                <h3>${player.name}</h3>
                <div class="final-stats">
                    <div class="final-score">${t.totalScore}: ${player.totalScore} ${t.points}</div>
                    <div class="final-accuracy">${t.accuracy}: ${accuracy}${t.percentage}</div>
                    <div class="final-hits">${t.hits}: ${player.hits}/${gameState.totalRounds}</div>
                </div>
            </div>
        `;
        
        finalResults.appendChild(playerDiv);
    });
    
    // Gerar conquistas
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = '';
    
    const totalAccuracy = Math.round((sortedPlayers.reduce((sum, p) => sum + p.hits, 0) / (gameState.players.length * gameState.totalRounds)) * 100);
    const bestPlayer = sortedPlayers[0];
    const maxScore = Math.max(...gameState.players.map(p => p.totalScore));
    const performance = Math.round((totalAccuracy + (maxScore / 100)) / 2);
    
    const achievements = [
        { icon: '🏹', title: t.totalAccuracy, value: `${totalAccuracy}${t.percentage}` },
        { icon: '⚡', title: t.bestPlayer, value: bestPlayer.name },
        { icon: '🔥', title: t.maxScore, value: `${maxScore} ${t.points}` },
        { icon: '🌟', title: t.performance, value: `${performance}${t.percentage}` }
    ];
    
    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';
        achievementCard.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-value">${achievement.value}</div>
        `;
        achievementsGrid.appendChild(achievementCard);
    });
    
    // Atualizar estatísticas individuais
    updateIndividualStats();
    
    // Mostrar tela de resultados
    showScreen('resultsScreen');
    
    // Efeito de confete
    createConfettiEffect();
}

// Função para atualizar conquistas e estatísticas
function updateAchievements(sortedPlayers) {
    if (sortedPlayers.length === 0) return;
    
    const totalScore = gameState.players.reduce((sum, player) => sum + player.totalScore, 0);
    const totalHits = gameState.players.reduce((sum, player) => sum + player.hits, 0);
    const totalShots = gameState.players.length * gameState.totalRounds;
    const averageAccuracy = totalShots > 0 ? Math.round((totalHits / totalShots) * 100) : 0;
    
    // Atualizar precisão total
    document.getElementById('totalAccuracy').textContent = `${averageAccuracy}%`;
    
    // Atualizar melhor jogador
    const bestPlayer = sortedPlayers[0];
    document.getElementById('bestPlayer').textContent = bestPlayer.name;
    
    // Atualizar pontuação máxima
    document.getElementById('maxScore').textContent = `${bestPlayer.totalScore} pts`;
    
    // Calcular performance geral
    let performance = 'Boa';
    if (averageAccuracy >= 90) performance = 'Excelente';
    else if (averageAccuracy >= 80) performance = 'Muito Boa';
    else if (averageAccuracy >= 70) performance = 'Boa';
    else if (averageAccuracy >= 60) performance = 'Regular';
    else performance = 'A Melhorar';
    
    document.getElementById('performance').textContent = performance;
    
    // Adicionar animações aos cards
    animateAchievementCards();
}

// Função para animar os cards de conquistas
function animateAchievementCards() {
    const cards = document.querySelectorAll('.achievement-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
            
            setTimeout(() => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }, 200);
        }, index * 100);
    });
}

// Função para adicionar efeitos de confete para o vencedor
function addConfettiEffect() {
    const winner = document.querySelector('.final-player.winner');
    if (winner) {
        createConfetti(winner);
    }
}

// Função para criar confete
function createConfetti(element) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 3000 + Math.random() * 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => confetti.remove();
        }, i * 100);
    }
}

// Função para novo jogo
function newGame() {
    // Resetar estado
    gameState = {
        selectedGame: null,
        players: [],
        currentPlayerIndex: 0,
        currentRound: 1,
        totalRounds: 20,
        gameStarted: false,
        gameEnded: false,
        language: 'pt' // Resetar idioma
    };
    
    // Mostrar tela de seleção
    showScreen('gameSelection');
}

// Função para mostrar uma tela específica
function showScreen(screenId) {
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    // Esconder também a tela de seleção de jogo se não for ela
    const gameSelection = document.querySelector('.game-selection');
    if (gameSelection) {
        gameSelection.style.display = screenId === 'gameSelection' ? 'block' : 'none';
    }
    
    // Mostrar a tela solicitada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.style.display = 'block';
    }
}

// Função para atualizar placar
function updateScoreboard() {
    const t = translations[gameState.language];
    const scoreboardContent = document.getElementById('scoreboardContent');
    scoreboardContent.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const isCurrentPlayer = index === gameState.currentPlayerIndex;
        
        const playerDiv = document.createElement('div');
        playerDiv.className = `player-score ${isCurrentPlayer ? 'current' : ''}`;
        
        const playerHeader = document.createElement('div');
        playerHeader.className = 'player-header';
        playerHeader.innerHTML = `
            <span class="player-name">${player.name}</span>
            <span class="player-total">${player.totalScore} ${t.points}</span>
        `;
        
        const playerRounds = document.createElement('div');
        playerRounds.className = 'player-rounds';
        
        // Mostrar pontuações das rondas
        for (let i = 0; i < gameState.totalRounds; i++) {
            const roundScore = document.createElement('span');
            roundScore.className = 'round-score';
            
            if (i < player.scores.length) {
                roundScore.innerHTML = `<div class="round-number">${i + 1}</div><div class="round-points">${player.scores[i]}</div>`;
                // Marcar a pontuação mais recente do jogador atual
                if (i === player.scores.length - 1 && isCurrentPlayer) {
                    roundScore.classList.add('current');
                }
            } else {
                roundScore.innerHTML = `<div class="round-number">${i + 1}</div><div class="round-points">-</div>`;
            }
            
            playerRounds.appendChild(roundScore);
        }
        
        // Adicionar indicador de ronda atual se for o jogador ativo
        if (isCurrentPlayer) {
            const roundIndicator = document.createElement('div');
            roundIndicator.style.cssText = 'margin-top: 12px; font-size: 1rem; color: #FFD700; font-weight: 800; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); background: rgba(0,0,0,0.6); padding: 8px 12px; border-radius: 12px; border: 2px solid rgba(255,215,0,0.4);';
            roundIndicator.textContent = `${t.currentRound} ${gameState.currentRound} ${t.of} ${gameState.totalRounds}`;
            playerDiv.appendChild(roundIndicator);
        }
        
        playerDiv.appendChild(playerHeader);
        playerDiv.appendChild(playerRounds);
        scoreboardContent.appendChild(playerDiv);
    });
}

// Função para atualizar estatísticas individuais
function updateIndividualStats() {
    const t = translations[gameState.language];
    const individualStatsContent = document.getElementById('individualStatsContent');
    individualStatsContent.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const accuracy = gameState.totalRounds > 0 ? Math.round((player.hits / gameState.totalRounds) * 100) : 0;
        const averageScore = gameState.totalRounds > 0 ? Math.round(player.totalScore / gameState.totalRounds) : 0;
        
        const playerStatsDiv = document.createElement('div');
        playerStatsDiv.className = 'player-stats-card';
        
        playerStatsDiv.innerHTML = `
            <div class="player-stats-header">
                <h4>${player.name}</h4>
                <span class="player-position">${index + 1}º</span>
            </div>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-label">${t.totalScore}</span>
                    <span class="stat-value">${player.totalScore} ${t.points}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t.averageScore}</span>
                    <span class="stat-value">${averageScore} ${t.points}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t.hits}</span>
                    <span class="stat-value">${player.hits}/${gameState.totalRounds}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t.accuracy}</span>
                    <span class="stat-value">${accuracy}${t.percentage}</span>
                </div>
            </div>
            <div class="rounds-breakdown">
                <h5>${t.rounds}:</h5>
                <div class="rounds-grid">
                    ${player.scores.map((score, roundIndex) => `
                        <div class="round-score ${roundIndex === player.scores.length - 1 ? 'current' : ''}">
                            <div class="round-number">${roundIndex + 1}</div>
                            <div class="round-points">${score}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        individualStatsContent.appendChild(playerStatsDiv);
    });
}

// Função para mudar idioma
function changeLanguage(lang) {
    gameState.language = lang;
    updateInterfaceLanguage();
    
    // Atualizar botões de idioma ativos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Função para atualizar interface com o idioma selecionado
function updateInterfaceLanguage() {
    const t = translations[gameState.language];
    
    // Atualizar título (mantém sempre "Parque Aventura")
    const titleElement = document.querySelector('.header h1');
    if (titleElement) titleElement.textContent = 'Parque Aventura';
    
    const subtitleElement = document.querySelector('.header p');
    if (subtitleElement) subtitleElement.textContent = t.subtitle;
    
    // Atualizar títulos das telas
    const chooseActivityTitle = document.querySelector('.game-selection .section-title');
    if (chooseActivityTitle) chooseActivityTitle.textContent = t.chooseActivity;
    
    const playerSetupTitle = document.querySelector('#playerSetup h2');
    if (playerSetupTitle) playerSetupTitle.textContent = t.playerSetup;
    
    const finalResultsTitle = document.querySelector('#finalResultsTitle');
    if (finalResultsTitle) finalResultsTitle.textContent = t.finalResults;
    
    // Atualizar cartões de jogo (seleção de atividade)
    const gameCards = document.querySelectorAll('.game-cards .game-card');
    if (gameCards && gameCards.length >= 2) {
        const archeryCard = gameCards[0];
        const paintballCard = gameCards[1];
        const archeryTitle = archeryCard.querySelector('h3');
        const archerySubtitle = archeryCard.querySelector('p');
        const paintballTitle = paintballCard.querySelector('h3');
        const paintballSubtitle = paintballCard.querySelector('p');
        if (archeryTitle) archeryTitle.textContent = t.archery;
        if (archerySubtitle) archerySubtitle.textContent = t.rounds;
        if (paintballTitle) paintballTitle.textContent = t.paintball;
        if (paintballSubtitle) paintballSubtitle.textContent = t.rounds;
    }
    
    // Atualizar labels
    const addPlayerBtn = document.querySelector('.add-btn');
    if (addPlayerBtn) addPlayerBtn.textContent = t.addPlayer;
    
    const playerNameInput = document.getElementById('playerName');
    if (playerNameInput) playerNameInput.placeholder = t.playerName;
    
    const roundsLabel = document.querySelector('.game-settings label');
    if (roundsLabel) roundsLabel.textContent = t.roundsLabel;
    
    const startBtn = document.querySelector('.start-btn');
    if (startBtn) startBtn.textContent = t.startGame;
    
    // Atualizar interface do jogo se estiver ativo
    if (gameState.gameStarted) {
        updateGameInterface();
    }
    
    // Atualizar botão "Fora" se estiver no arco e flecha
    if (gameState.selectedGame === 'archery') {
        const missBtn = document.querySelector('.score-btn.archery-miss');
        if (missBtn) {
            missBtn.innerHTML = `❌<br>${t.miss}`;
            missBtn.title = t.missTitle;
        }
    }
    
    // Atualizar botões de idioma ativos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const currentLangBtn = document.querySelector(`.lang-btn[onclick*="${gameState.language}"]`);
    if (currentLangBtn) currentLangBtn.classList.add('active');
    
    // Atualizar outros elementos
    const endBtn = document.querySelector('.end-btn');
    if (endBtn) endBtn.textContent = t.endGame;
    
    const newGameBtn = document.querySelector('.new-game-btn');
    if (newGameBtn) newGameBtn.textContent = t.newGame;
    
    const scoreboardTitle = document.querySelector('#scoreboardTitle');
    if (scoreboardTitle) scoreboardTitle.textContent = t.realTimeScoreboard;
    
    const achievementsTitle = document.querySelector('#achievementsTitle');
    if (achievementsTitle) achievementsTitle.textContent = t.achievements;
    
    const individualStatsTitle = document.querySelector('#individualStatsTitle');
    if (individualStatsTitle) individualStatsTitle.textContent = t.individualStats;
    
    // Atualizar nomes dos jogos selecionados
    const selectedGameName = document.querySelector('#selectedGameName');
    if (selectedGameName) {
        selectedGameName.textContent = gameState.selectedGame === 'archery' ? t.archery : t.paintball;
    }
    
    // Atualizar ícones dos jogos
    const selectedGameIcon = document.querySelector('#selectedGameIcon');
    if (selectedGameIcon) {
        selectedGameIcon.textContent = gameState.selectedGame === 'archery' ? '🏹' : '🔫';
    }
}