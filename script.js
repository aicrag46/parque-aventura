/* ============================================================
   PARQUE AVENTURA — Immersive Scoring Engine
   Vanilla JS · no build step · GitHub Pages friendly
   ============================================================ */

"use strict";

/* ---------- Global state ---------- */
const gameState = {
  selectedGame: null,
  players: [],
  currentPlayerIndex: 0,
  currentRound: 1,
  totalRounds: 20,
  gameStarted: false,
  gameEnded: false,
  language: "pt",
  soundOn: true,
  ambienceOn: true,
};

let resultsSummary = null;

const AVATAR_COLORS = [
  ["#5fe08c", "#1f5c3d"], ["#ffd97a", "#f5a623"], ["#7fd0c4", "#2f8f86"],
  ["#ff8a3d", "#c14a1e"], ["#c9a0ff", "#6b3fa0"], ["#ff9db1", "#c14a63"],
  ["#8fd0ff", "#2f6fbf"], ["#e0e07a", "#8a8a2e"],
];

/* ---------- Game configs ---------- */
const gameConfigs = {
  archery: { icon: "🏹", defaultRounds: 20, scores: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], hasMiss: true },
  paintball: { icon: "🎨", defaultRounds: 40, scores: [30, 20, 10, 8, 6], hasMiss: true },
};

/* ---------- i18n ---------- */
const translations = {
  pt: { title: "Parque Aventura", subtitle: "Sistema de Pontuação", archery: "Arco e Flecha", paintball: "Paintball", addPlayer: "Adicionar Jogador", playerName: "Nome do jogador", roundsLabel: "Número de Rondas", startGame: "Iniciar Jogo", currentRound: "Ronda", of: "de", points: "pts", accuracy: "precisão", hits: "acertos", realTimeScoreboard: "Placar em tempo real", endGame: "Terminar Jogo", finalResults: "Resultados Finais", newGame: "Novo Jogo", achievements: "Conquistas e Estatísticas", totalAccuracy: "Precisão Total", bestPlayer: "Melhor Jogador", maxScore: "Pontuação Máxima", average: "Média", individualStats: "Estatísticas Individuais", totalScore: "Pontuação Total", averageScore: "Média", bestRound: "Melhor", miss: "Fora", chooseActivity: "Escolha a Atividade", playerSetup: "Configuração dos Jogadores", current: "Atual", add: "Adicionar", back: "Voltar", start: "Iniciar", percentage: "%", playersHint: "Adiciona pelo menos um jogador para começar." },
  en: { title: "Parque Aventura", subtitle: "Scoring System", archery: "Archery", paintball: "Paintball", addPlayer: "Add Player", playerName: "Player name", roundsLabel: "Number of Rounds", startGame: "Start Game", currentRound: "Round", of: "of", points: "pts", accuracy: "accuracy", hits: "hits", realTimeScoreboard: "Real-time scoreboard", endGame: "End Game", finalResults: "Final Results", newGame: "New Game", achievements: "Achievements & Stats", totalAccuracy: "Total Accuracy", bestPlayer: "Best Player", maxScore: "Top Score", average: "Average", individualStats: "Individual Statistics", totalScore: "Total Score", averageScore: "Average", bestRound: "Best", miss: "Miss", chooseActivity: "Choose Activity", playerSetup: "Player Setup", current: "Current", add: "Add", back: "Back", start: "Start", percentage: "%", playersHint: "Add at least one player to begin." },
  fr: { title: "Parque Aventura", subtitle: "Système de Score", archery: "Tir à l'Arc", paintball: "Paintball", addPlayer: "Ajouter un Joueur", playerName: "Nom du joueur", roundsLabel: "Nombre de Manches", startGame: "Commencer", currentRound: "Manche", of: "sur", points: "pts", accuracy: "précision", hits: "réussis", realTimeScoreboard: "Score en temps réel", endGame: "Terminer", finalResults: "Résultats Finaux", newGame: "Nouveau Jeu", achievements: "Réalisations & Stats", totalAccuracy: "Précision Totale", bestPlayer: "Meilleur Joueur", maxScore: "Meilleur Score", average: "Moyenne", individualStats: "Statistiques Individuelles", totalScore: "Score Total", averageScore: "Moyenne", bestRound: "Meilleure", miss: "Raté", chooseActivity: "Choisir l'Activité", playerSetup: "Configuration des Joueurs", current: "Actuel", add: "Ajouter", back: "Retour", start: "Commencer", percentage: "%", playersHint: "Ajoutez au moins un joueur pour commencer." },
  de: { title: "Parque Aventura", subtitle: "Punktesystem", archery: "Bogenschießen", paintball: "Paintball", addPlayer: "Spieler Hinzufügen", playerName: "Spielername", roundsLabel: "Anzahl der Runden", startGame: "Spiel Starten", currentRound: "Runde", of: "von", points: "Pkt", accuracy: "Genauigkeit", hits: "Treffer", realTimeScoreboard: "Echtzeit-Punktestand", endGame: "Spiel Beenden", finalResults: "Endergebnisse", newGame: "Neues Spiel", achievements: "Erfolge & Statistiken", totalAccuracy: "Gesamtgenauigkeit", bestPlayer: "Bester Spieler", maxScore: "Höchstwert", average: "Durchschnitt", individualStats: "Einzelstatistiken", totalScore: "Gesamtpunktzahl", averageScore: "Durchschnitt", bestRound: "Beste", miss: "Daneben", chooseActivity: "Aktivität Wählen", playerSetup: "Spieler Einrichtung", current: "Aktuell", add: "Hinzufügen", back: "Zurück", start: "Starten", percentage: "%", playersHint: "Füge mindestens einen Spieler hinzu, um zu beginnen." },
  it: { title: "Parque Aventura", subtitle: "Sistema di Punteggio", archery: "Tiro con l'Arco", paintball: "Paintball", addPlayer: "Aggiungi Giocatore", playerName: "Nome del giocatore", roundsLabel: "Numero di Round", startGame: "Inizia Gioco", currentRound: "Round", of: "di", points: "pt", accuracy: "precisione", hits: "centri", realTimeScoreboard: "Punteggi in tempo reale", endGame: "Termina Gioco", finalResults: "Risultati Finali", newGame: "Nuovo Gioco", achievements: "Conquiste & Statistiche", totalAccuracy: "Precisione Totale", bestPlayer: "Miglior Giocatore", maxScore: "Punteggio Max", average: "Media", individualStats: "Statistiche Individuali", totalScore: "Punteggio Totale", averageScore: "Media", bestRound: "Migliore", miss: "Mancato", chooseActivity: "Scegli Attività", playerSetup: "Configurazione Giocatori", current: "Attuale", add: "Aggiungi", back: "Indietro", start: "Inizia", percentage: "%", playersHint: "Aggiungi almeno un giocatore per iniziare." },
};

const EXTRA_I18N = {
  pt: { sharePhoto: "Criar imagem", takePhoto: "Tirar / escolher foto", noPhoto: "Sem foto", savePhoto: "Guardar", share: "Partilhar", champion: "Campeão", results: "Resultados" },
  en: { sharePhoto: "Create image", takePhoto: "Take / choose photo", noPhoto: "No photo", savePhoto: "Save", share: "Share", champion: "Champion", results: "Results" },
  fr: { sharePhoto: "Créer une image", takePhoto: "Prendre / choisir une photo", noPhoto: "Sans photo", savePhoto: "Enregistrer", share: "Partager", champion: "Champion", results: "Résultats" },
  de: { sharePhoto: "Bild erstellen", takePhoto: "Foto aufnehmen / wählen", noPhoto: "Ohne Foto", savePhoto: "Speichern", share: "Teilen", champion: "Champion", results: "Ergebnisse" },
  it: { sharePhoto: "Crea immagine", takePhoto: "Scatta / scegli foto", noPhoto: "Senza foto", savePhoto: "Salva", share: "Condividi", champion: "Campione", results: "Risultati" },
};
Object.keys(EXTRA_I18N).forEach((l) => Object.assign(translations[l], EXTRA_I18N[l]));

function t(key) { return (translations[gameState.language] || translations.pt)[key] || key; }

/* Element bindings for dynamic labels by id */
const I18N_IDS = {
  scoreboardTitle: "realTimeScoreboard",
  finalResultsTitle: "finalResults",
  achievementsTitle: "achievements",
  individualStatsTitle: "individualStats",
};

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  Object.entries(I18N_IDS).forEach(([id, key]) => { const el = document.getElementById(id); if (el) el.textContent = t(key); });
  if (gameState.selectedGame) {
    const nameEl = document.getElementById("selectedGameName");
    if (nameEl) nameEl.textContent = t(gameState.selectedGame);
  }
  document.documentElement.lang = gameState.language;
}

function changeLanguage(lang) {
  if (!translations[lang]) return;
  gameState.language = lang;
  document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("lang-btn--active"));
  const btn = [...document.querySelectorAll(".lang-btn")].find((b) => b.getAttribute("onclick") === `changeLanguage('${lang}')`);
  if (btn) btn.classList.add("lang-btn--active");
  applyTranslations();
  if (gameState.gameStarted && !gameState.gameEnded) { updateHUD(); updateScoreboard(); }
}

/* ---------- Screens ---------- */
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("screen--active"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("screen--active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Game selection ---------- */
function selectGame(game) {
  gameState.selectedGame = game;
  const cfg = gameConfigs[game];
  gameState.totalRounds = cfg.defaultRounds;
  document.getElementById("selectedGameIcon").textContent = cfg.icon;
  document.getElementById("selectedGameName").textContent = t(game);
  document.getElementById("roundsInput").value = cfg.defaultRounds;
  playTone(game === "archery" ? 520 : 320, 0.12, "sine");
  haptic(12);
  showScreen("playerSetup");
}

function backToSelection() { haptic(8); showScreen("gameSelection"); }

/* ---------- Player setup ---------- */
function addPlayer() {
  const input = document.getElementById("playerName");
  const name = input.value.trim();
  if (!name) { input.focus(); return; }
  if (gameState.players.length >= 12) return;
  gameState.players.push({ name, scores: [], totalScore: 0, hits: 0, bestRound: 0 });
  input.value = "";
  input.focus();
  renderPlayers();
  playTone(440, 0.08, "triangle");
  haptic(8);
}

function removePlayer(index) {
  gameState.players.splice(index, 1);
  renderPlayers();
  haptic(6);
}

function renderPlayers() {
  const list = document.getElementById("playersList");
  const hint = document.getElementById("playersHint");
  list.innerHTML = "";
  gameState.players.forEach((p, i) => {
    const [c1, c2] = AVATAR_COLORS[i % AVATAR_COLORS.length];
    const chip = document.createElement("div");
    chip.className = "player-chip";
    chip.innerHTML = `
      <span class="player-chip__avatar" style="background:linear-gradient(145deg,${c1},${c2})">${initials(p.name)}</span>
      <span class="player-chip__name"></span>
      <button class="player-chip__remove" type="button" aria-label="remove">&times;</button>`;
    chip.querySelector(".player-chip__name").textContent = p.name;
    chip.querySelector(".player-chip__remove").addEventListener("click", () => removePlayer(i));
    list.appendChild(chip);
  });
  hint.classList.toggle("players-hint--hidden", gameState.players.length > 0);
  document.getElementById("startGameBtn").disabled = gameState.players.length === 0;
}

function initials(name) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase() || "?";
}

function stepRounds(delta) {
  const input = document.getElementById("roundsInput");
  let v = parseInt(input.value, 10) || 1;
  v = Math.min(100, Math.max(1, v + delta));
  input.value = v;
  gameState.totalRounds = v;
  haptic(5);
}

/* ---------- Start game ---------- */
function startGame() {
  if (gameState.players.length === 0) return;
  let rounds = parseInt(document.getElementById("roundsInput").value, 10) || gameConfigs[gameState.selectedGame].defaultRounds;
  gameState.totalRounds = Math.min(100, Math.max(1, rounds));
  gameState.players.forEach((p) => { p.scores = []; p.totalScore = 0; p.hits = 0; p.bestRound = 0; });
  gameState.currentPlayerIndex = 0;
  gameState.currentRound = 1;
  gameState.gameStarted = true;
  gameState.gameEnded = false;

  const isArchery = gameState.selectedGame === "archery";
  document.getElementById("targetStage").hidden = !isArchery;
  document.getElementById("boardStage").hidden = isArchery;
  document.getElementById("shotMarks").innerHTML = "";
  document.getElementById("splatMarks").innerHTML = "";

  buildScoreOptions();
  updateHUD();
  updateScoreboard();
  applyTranslations();
  playTone(660, 0.16, "sine");
  haptic(20);
  showScreen("gameScreen");
}

/* ---------- Score tiers ---------- */
function scoreTier(game, value) {
  if (value === 0) return "tier-miss";
  if (game === "archery") {
    if (value === 10) return "tier-max";
    if (value >= 7) return "tier-high";
    if (value >= 4) return "tier-mid";
    return "tier-low";
  }
  // paintball
  if (value === 30) return "tier-max";
  if (value === 20) return "tier-high";
  if (value === 10) return "tier-mid";
  return "tier-low";
}

function buildScoreOptions() {
  const container = document.getElementById("scoreOptions");
  const cfg = gameConfigs[gameState.selectedGame];
  const grid = document.createElement("div");
  grid.className = `score-grid score-grid--${gameState.selectedGame}`;

  cfg.scores.forEach((value) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `score-btn ${scoreTier(gameState.selectedGame, value)}`;
    const label = value === (gameState.selectedGame === "archery" ? 10 : 30) ? "★" : "";
    btn.innerHTML = `<span class="score-btn__value">${value}</span>${label ? `<span class="score-btn__label">${label}</span>` : ""}`;
    btn.addEventListener("click", (e) => selectScore(value, e));
    grid.appendChild(btn);
  });

  if (cfg.hasMiss) {
    const miss = document.createElement("button");
    miss.type = "button";
    miss.className = "score-btn tier-miss";
    miss.innerHTML = `<span class="score-btn__value">✕</span><span class="score-btn__label" data-i18n="miss">${t("miss")}</span>`;
    miss.addEventListener("click", (e) => selectScore(0, e));
    grid.appendChild(miss);
  }

  container.innerHTML = "";
  container.appendChild(grid);
}

/* ---------- Scoring ---------- */
function selectScore(value, evt) {
  if (gameState.gameEnded) return;
  const player = gameState.players[gameState.currentPlayerIndex];
  player.scores.push(value);
  player.totalScore += value;
  if (value > 0) player.hits += 1;
  if (value > player.bestRound) player.bestRound = value;

  // feedback
  scorePop(value, evt);
  if (gameState.selectedGame === "archery") addShotMark(value);
  else addSplatMark(value);
  soundForScore(value);
  haptic(value === 0 ? 30 : 12);

  // advance
  gameState.currentPlayerIndex += 1;
  if (gameState.currentPlayerIndex >= gameState.players.length) {
    gameState.currentPlayerIndex = 0;
    gameState.currentRound += 1;
  }

  if (gameState.currentRound > gameState.totalRounds) { endGame(); return; }

  updateHUD();
  updateScoreboard();
}

function playedRounds(player) { return player.scores.length; }
function accuracyOf(player, useTotal) {
  const denom = useTotal ? gameState.totalRounds : Math.max(1, playedRounds(player));
  return Math.round((player.hits / denom) * 100);
}

/* ---------- HUD ---------- */
function updateHUD() {
  const player = gameState.players[gameState.currentPlayerIndex];
  const [c1, c2] = AVATAR_COLORS[gameState.currentPlayerIndex % AVATAR_COLORS.length];
  const avatar = document.getElementById("hudAvatar");
  avatar.textContent = initials(player.name);
  avatar.style.background = `linear-gradient(145deg,${c1},${c2})`;
  document.getElementById("currentPlayer").textContent = player.name;
  document.getElementById("currentScore").textContent = player.totalScore;
  document.getElementById("currentAccuracy").textContent = accuracyOf(player, false) + "%";
  document.getElementById("currentRoundText").textContent = gameState.currentRound;
  document.getElementById("totalRoundsText").textContent = "/ " + gameState.totalRounds;

  const ring = document.getElementById("progressRing");
  const circumference = 2 * Math.PI * 19;
  const progress = (gameState.currentRound - 1) / gameState.totalRounds;
  ring.style.strokeDashoffset = String(circumference * (1 - progress));
}

/* ---------- Scoreboard ---------- */
function updateScoreboard() {
  const content = document.getElementById("scoreboardContent");
  const ranked = gameState.players.map((p, i) => ({ p, i })).sort((a, b) => b.p.totalScore - a.p.totalScore);
  const maxScore = Math.max(1, ...gameState.players.map((p) => p.totalScore));

  content.innerHTML = "";
  ranked.forEach((entry, rank) => {
    const { p, i } = entry;
    const [c1, c2] = AVATAR_COLORS[i % AVATAR_COLORS.length];
    const isCurrent = i === gameState.currentPlayerIndex;
    const isLeader = rank === 0 && p.totalScore > 0;
    const row = document.createElement("div");
    row.className = `sb-row${isCurrent ? " sb-row--current" : ""}${isLeader ? " sb-row--leader" : ""}`;
    row.innerHTML = `
      <span class="sb-row__bar" style="width:${(p.totalScore / maxScore) * 100}%"></span>
      <span class="sb-row__rank">${isLeader ? '<span class="sb-crown">👑</span>' : rank + 1}</span>
      <span class="sb-row__name"><span class="player-chip__avatar" style="width:22px;height:22px;font-size:0.6rem;background:linear-gradient(145deg,${c1},${c2})">${initials(p.name)}</span><span class="sb-name-text"></span></span>
      <span class="sb-row__score">${p.totalScore}</span>`;
    row.querySelector(".sb-name-text").textContent = p.name;
    content.appendChild(row);
  });
}

/* ---------- Shot marks on target ---------- */
function addShotMark(value) {
  const g = document.getElementById("shotMarks");
  const radii = { 10: 3, 9: 9, 8: 17, 7: 25, 6: 35, 5: 45, 4: 56, 3: 68, 2: 80, 1: 91, 0: 100 };
  const r = radii[value] ?? 100;
  const angle = Math.random() * Math.PI * 2;
  const jitter = value === 0 ? 3 : Math.min(6, Math.max(2, r * 0.18));
  const rr = Math.max(0, r - Math.random() * jitter);
  const x = 100 + Math.cos(angle) * rr;
  const y = 100 + Math.sin(angle) * rr;
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", x.toFixed(1));
  dot.setAttribute("cy", y.toFixed(1));
  dot.setAttribute("r", "3.2");
  dot.setAttribute("class", "shot-mark");
  if (value === 0) dot.style.opacity = "0.4";
  g.appendChild(dot);
  while (g.childElementCount > 24) g.removeChild(g.firstChild);
}

const PAINT_HOLES = {
  30: { x: 120, y: 72, r: 30 }, 20: { x: 56, y: 56, r: 16 }, 10: { x: 184, y: 56, r: 16 },
  8: { x: 64, y: 128, r: 12 }, 6: { x: 176, y: 128, r: 12 },
};
function addSplatMark(value) {
  const g = document.getElementById("splatMarks");
  const [c1] = AVATAR_COLORS[gameState.currentPlayerIndex % AVATAR_COLORS.length];
  let cx, cy, spread;
  const hole = PAINT_HOLES[value];
  if (hole) {
    const a = Math.random() * Math.PI * 2, rr = Math.random() * hole.r * 0.55;
    cx = hole.x + Math.cos(a) * rr; cy = hole.y + Math.sin(a) * rr; spread = hole.r * 0.5;
  } else { // miss — splat off the holes
    cx = 30 + Math.random() * 180; cy = 168 + Math.random() * 22; spread = 6;
  }
  const grp = document.createElementNS("http://www.w3.org/2000/svg", "g");
  grp.setAttribute("class", "splat-mark");
  const main = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  main.setAttribute("cx", cx.toFixed(1)); main.setAttribute("cy", cy.toFixed(1));
  main.setAttribute("r", (spread * 0.7).toFixed(1)); main.setAttribute("fill", c1);
  grp.appendChild(main);
  for (let i = 0; i < 5; i++) {
    const a = Math.random() * Math.PI * 2, d = spread * (0.7 + Math.random() * 0.9);
    const drop = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    drop.setAttribute("cx", (cx + Math.cos(a) * d).toFixed(1));
    drop.setAttribute("cy", (cy + Math.sin(a) * d).toFixed(1));
    drop.setAttribute("r", (1 + Math.random() * 2.4).toFixed(1));
    drop.setAttribute("fill", c1);
    grp.appendChild(drop);
  }
  if (!hole) grp.style.opacity = "0.55";
  g.appendChild(grp);
  while (g.childElementCount > 18) g.removeChild(g.firstChild);
}

/* ---------- End game / results ---------- */
function endGame() {
  gameState.gameEnded = true;
  gameState.gameStarted = false;
  const ranked = [...gameState.players].sort((a, b) => b.totalScore - a.totalScore);
  const totalHits = gameState.players.reduce((s, p) => s + p.hits, 0);
  const totalShots = gameState.players.reduce((s, p) => s + playedRounds(p), 0);
  resultsSummary = {
    ranked, game: gameState.selectedGame, rounds: gameState.totalRounds,
    totalAcc: totalShots ? Math.round((totalHits / totalShots) * 100) : 0,
    date: new Date(),
  };
  renderPodium(ranked);
  renderFinalResults(ranked);
  renderAchievements(ranked);
  renderIndividualStats(ranked);
  applyTranslations();
  showScreen("resultsScreen");
  celebrate();
  winFanfare();
  haptic([20, 40, 20, 40, 60]);
}

function playerIndexOf(player) { return gameState.players.indexOf(player); }

function renderPodium(ranked) {
  const podium = document.getElementById("podium");
  const order = [ranked[1], ranked[0], ranked[2]]; // 2nd, 1st, 3rd
  const posClass = ["podium__col--2", "podium__col--1", "podium__col--3"];
  const medals = { 0: "🥇", 1: "🥈", 2: "🥉" };
  podium.innerHTML = "";
  order.forEach((player, slot) => {
    if (!player) return;
    const rank = ranked.indexOf(player);
    const gi = playerIndexOf(player);
    const [c1, c2] = AVATAR_COLORS[gi % AVATAR_COLORS.length];
    const col = document.createElement("div");
    col.className = `podium__col ${posClass[slot]}`;
    col.innerHTML = `
      <span class="podium__medal">${medals[rank]}</span>
      <span class="podium__avatar" style="background:linear-gradient(145deg,${c1},${c2})">${initials(player.name)}</span>
      <span class="podium__name"></span>
      <span class="podium__score">${player.totalScore}</span>
      <div class="podium__block"><span class="podium__pos">${rank + 1}</span></div>`;
    col.querySelector(".podium__name").textContent = player.name;
    podium.appendChild(col);
  });
}

function renderFinalResults(ranked) {
  const box = document.getElementById("finalResults");
  box.innerHTML = "";
  ranked.forEach((player, rank) => {
    const gi = playerIndexOf(player);
    const [c1, c2] = AVATAR_COLORS[gi % AVATAR_COLORS.length];
    const row = document.createElement("div");
    row.className = `result-row${rank === 0 ? " result-row--gold" : ""}`;
    row.innerHTML = `
      <span class="result-row__rank">${rank + 1}</span>
      <span class="result-row__name"><span class="player-chip__avatar" style="width:26px;height:26px;font-size:0.65rem;background:linear-gradient(145deg,${c1},${c2})">${initials(player.name)}</span><span class="rr-name"></span></span>
      <span class="result-row__score">${player.totalScore} <small>${t("points")}</small></span>`;
    row.querySelector(".rr-name").textContent = player.name;
    box.appendChild(row);
  });
}

function renderAchievements(ranked) {
  const grid = document.getElementById("achievementsGrid");
  const totalHits = gameState.players.reduce((s, p) => s + p.hits, 0);
  const totalShots = gameState.players.reduce((s, p) => s + playedRounds(p), 0);
  const totalAcc = totalShots ? Math.round((totalHits / totalShots) * 100) : 0;
  const best = ranked[0];
  const maxRound = Math.max(0, ...gameState.players.map((p) => p.bestRound));
  const avg = best ? (best.totalScore / Math.max(1, playedRounds(best))).toFixed(1) : "0";

  const cards = [
    { icon: "🎯", value: totalAcc + "%", label: t("totalAccuracy") },
    { icon: "🏆", value: best ? best.name : "—", label: t("bestPlayer") },
    { icon: "💥", value: maxRound, label: t("maxScore") },
    { icon: "📊", value: avg, label: t("average") },
  ];
  grid.innerHTML = cards.map((c) => `
    <div class="achievement-card">
      <div class="achievement-icon">${c.icon}</div>
      <div class="achievement-value">${escapeHtml(String(c.value))}</div>
      <div class="achievement-label">${escapeHtml(c.label)}</div>
    </div>`).join("");
}

function renderIndividualStats(ranked) {
  const box = document.getElementById("individualStatsContent");
  box.innerHTML = "";
  ranked.forEach((player) => {
    const gi = playerIndexOf(player);
    const [c1, c2] = AVATAR_COLORS[gi % AVATAR_COLORS.length];
    const avg = (player.totalScore / Math.max(1, playedRounds(player))).toFixed(1);
    const acc = accuracyOf(player, true);
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <div class="stat-card__head">
        <span class="stat-card__avatar" style="background:linear-gradient(145deg,${c1},${c2})">${initials(player.name)}</span>
        <span class="stat-card__name"></span>
      </div>
      <div class="stat-card__grid">
        <div class="stat-mini"><b>${player.totalScore}</b><small>${escapeHtml(t("totalScore"))}</small></div>
        <div class="stat-mini"><b>${avg}</b><small>${escapeHtml(t("average"))}</small></div>
        <div class="stat-mini"><b>${player.bestRound}</b><small>${escapeHtml(t("bestRound"))}</small></div>
        <div class="stat-mini"><b>${acc}%</b><small>${escapeHtml(t("accuracy"))}</small></div>
      </div>`;
    card.querySelector(".stat-card__name").textContent = player.name;
    box.appendChild(card);
  });
}

/* ---------- New game ---------- */
function newGame() {
  gameState.selectedGame = null;
  gameState.players = [];
  gameState.currentPlayerIndex = 0;
  gameState.currentRound = 1;
  gameState.gameStarted = false;
  gameState.gameEnded = false;
  document.getElementById("playersList").innerHTML = "";
  document.getElementById("startGameBtn").disabled = true;
  renderPlayers();
  applyTranslations();
  showScreen("gameSelection");
  haptic(10);
}

/* ---------- Utilities ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function haptic(pattern) { if (navigator.vibrate) try { navigator.vibrate(pattern); } catch (_) {} }

function scorePop(value, evt) {
  const el = document.createElement("div");
  el.className = "score-pop";
  el.textContent = value === 0 ? t("miss") : "+" + value;
  if (value === 0) el.style.color = "var(--clay-400)";
  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  if (evt && evt.currentTarget) {
    const r = evt.currentTarget.getBoundingClientRect();
    x = r.left + r.width / 2; y = r.top;
  }
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 820);
}

/* ============================================================
   AUDIO — synthesized, no assets
   ============================================================ */
let audioCtx = null;
function ensureAudio() {
  if (!gameState.soundOn) return null;
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (_) { return null; }
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function playTone(freq, dur, type = "sine", gain = 0.12) {
  const ctx = ensureAudio(); if (!ctx) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type; osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(gain, ctx.currentTime + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
  osc.connect(g).connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + dur + 0.02);
}
function playNoise(dur, filterFreq, gain = 0.18) {
  const ctx = ensureAudio(); if (!ctx) return;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = ctx.createBufferSource(); src.buffer = buffer;
  const flt = ctx.createBiquadFilter(); flt.type = "lowpass"; flt.frequency.value = filterFreq;
  const g = ctx.createGain(); g.gain.value = gain;
  src.connect(flt).connect(g).connect(ctx.destination);
  src.start(); src.stop(ctx.currentTime + dur);
}
function soundForScore(value) {
  if (!gameState.soundOn) return;
  if (gameState.selectedGame === "archery") {
    playNoise(0.08, 2200, 0.12); // thwack
    if (value > 0) playTone(300 + value * 40, 0.14, "sine", 0.1);
  } else {
    playNoise(0.12, 900 + value * 12, 0.2); // splat
    if (value > 0) playTone(160 + value * 6, 0.1, "triangle", 0.08);
  }
  if (value === 0) playTone(110, 0.18, "sine", 0.09);
}
function winFanfare() {
  if (!gameState.soundOn) return;
  const notes = [523, 659, 784, 1047];
  notes.forEach((n, i) => setTimeout(() => playTone(n, 0.3, "triangle", 0.12), i * 120));
}
function toggleSound() {
  gameState.soundOn = !gameState.soundOn;
  const btn = document.getElementById("soundBtn");
  const icon = btn.querySelector(".fab__icon");
  icon.textContent = gameState.soundOn ? "🔊" : "🔇";
  btn.classList.toggle("fab--off", !gameState.soundOn);
  if (gameState.soundOn) { ensureAudio(); playTone(660, 0.1); }
}

/* ============================================================
   CONFETTI
   ============================================================ */
function celebrate() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);
  const W = window.innerWidth, H = window.innerHeight;
  const colors = ["#5fe08c", "#ffd97a", "#ff8a3d", "#7fd0c4", "#f5c451", "#ffffff"];
  const pieces = [];
  for (let i = 0; i < 160; i++) {
    pieces.push({
      x: W / 2 + (Math.random() - 0.5) * 120,
      y: H * 0.28,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -14 - 4,
      size: Math.random() * 8 + 4,
      color: colors[(Math.random() * colors.length) | 0],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.4,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    });
  }
  let frame = 0;
  function tick() {
    ctx.clearRect(0, 0, W, H);
    frame++;
    let alive = false;
    pieces.forEach((p) => {
      p.vy += 0.35; p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.rot += p.vr;
      if (p.y < H + 30) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color; ctx.globalAlpha = Math.max(0, 1 - frame / 200);
      if (p.shape === "rect") ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      else { ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });
    if (alive && frame < 220) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, W, H);
  }
  tick();
}

/* ============================================================
   AMBIENCE PARTICLES (fireflies)
   ============================================================ */
let ambienceRAF = null;
function startAmbience() {
  const canvas = document.getElementById("ambience");
  const ctx = canvas.getContext("2d");
  let W, H, dpr;
  function resize() {
    dpr = window.devicePixelRatio || 1;
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);
  const flies = Array.from({ length: 46 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.8 + 0.6,
    vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
    phase: Math.random() * Math.PI * 2, speed: Math.random() * 0.02 + 0.008,
  }));
  function tick() {
    ctx.clearRect(0, 0, W, H);
    if (gameState.ambienceOn) {
      flies.forEach((f) => {
        f.x += f.vx; f.y += f.vy; f.phase += f.speed;
        if (f.x < 0) f.x = W; if (f.x > W) f.x = 0;
        if (f.y < 0) f.y = H; if (f.y > H) f.y = 0;
        const glow = (Math.sin(f.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r + glow * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,255,190,${0.15 + glow * 0.5})`;
        ctx.shadowBlur = 8; ctx.shadowColor = "rgba(150,255,170,0.8)";
        ctx.fill();
      });
    }
    ambienceRAF = requestAnimationFrame(tick);
  }
  tick();
}
function toggleAmbience() {
  gameState.ambienceOn = !gameState.ambienceOn;
  const btn = document.getElementById("ambienceBtn");
  btn.classList.toggle("fab--off", !gameState.ambienceOn);
  if (!gameState.ambienceOn) {
    const canvas = document.getElementById("ambience");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  }
  haptic(6);
}

/* ============================================================
   PHOTO COMPOSER — Strava-style shareable results image
   ============================================================ */
const logoImg = new Image();
logoImg.src = "logo.png";
let composerPhoto = null;

function openComposer() {
  if (!resultsSummary) return;
  document.getElementById("composer").hidden = false;
  composerPhoto = null;
  renderShareCard(null);
  haptic(10);
}
function closeComposer() { document.getElementById("composer").hidden = true; }

function drawCover(ctx, img, W, H) {
  const ir = img.width / img.height, cr = W / H;
  let dw, dh;
  if (ir > cr) { dh = H; dw = H * ir; } else { dw = W; dh = W / ir; }
  ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
}
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else { ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
}

function renderShareCard(img) {
  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const F = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
  const s = resultsSummary;
  ctx.clearRect(0, 0, W, H);

  // Background: photo or branded gradient
  if (img) {
    drawCover(ctx, img, W, H);
  } else {
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, "#0b2e2b"); g.addColorStop(0.5, "#0c261c"); g.addColorStop(1, "#06140d");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    const rg = ctx.createRadialGradient(W * 0.78, H * 0.12, 0, W * 0.78, H * 0.12, W * 0.6);
    rg.addColorStop(0, "rgba(255,200,120,0.4)"); rg.addColorStop(1, "rgba(255,200,120,0)");
    ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
  }
  // Scrims
  let ts = ctx.createLinearGradient(0, 0, 0, 340);
  ts.addColorStop(0, "rgba(3,12,7,0.8)"); ts.addColorStop(1, "rgba(3,12,7,0)");
  ctx.fillStyle = ts; ctx.fillRect(0, 0, W, 340);
  let bs = ctx.createLinearGradient(0, H * 0.30, 0, H);
  bs.addColorStop(0, "rgba(3,12,7,0)"); bs.addColorStop(0.42, "rgba(3,12,7,0.85)"); bs.addColorStop(1, "rgba(3,12,7,0.97)");
  ctx.fillStyle = bs; ctx.fillRect(0, H * 0.30, W, H * 0.70);

  // Header — real brand logo lockup (carries the name) + game/date
  const dateStr = s.date.toLocaleDateString(gameState.language, { day: "2-digit", month: "long", year: "numeric" });
  ctx.save();
  rrect(ctx, 56, 46, 150, 150, 26); ctx.clip();
  try { if (logoImg.complete && logoImg.naturalWidth) ctx.drawImage(logoImg, 56, 46, 150, 150); } catch (_) {}
  ctx.restore();
  ctx.textBaseline = "alphabetic"; ctx.textAlign = "left";
  ctx.fillStyle = "#fff"; ctx.font = `800 40px ${F}`;
  ctx.fillText(t("results"), 230, 112);
  ctx.fillStyle = "#5fe08c"; ctx.font = `600 30px ${F}`;
  ctx.fillText(`${t(s.game)}  •  ${dateStr}`, 230, 158);

  // Champion spotlight
  const champ = s.ranked[0];
  const rest = s.ranked.slice(1);
  const cy0 = 560;
  ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
  ctx.font = "94px sans-serif";
  ctx.fillText("🥇", W / 2, cy0);
  ctx.fillStyle = "#ffd97a"; ctx.font = `700 32px ${F}`;
  ctx.fillText(t("champion").toUpperCase(), W / 2, cy0 + 48);
  ctx.fillStyle = "#fff"; ctx.font = `800 70px ${F}`;
  ctx.fillText(clip(ctx, champ.name, W - 160), W / 2, cy0 + 128);
  ctx.fillStyle = "#5fe08c"; ctx.font = `800 50px ${F}`;
  ctx.fillText(`${champ.totalScore} ${t("points")}`, W / 2, cy0 + 190);

  // Full ranking of everyone else
  let listTop = cy0 + 240;
  if (rest.length) {
    ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.font = `700 24px ${F}`;
    ctx.fillText(t("results").toUpperCase(), W / 2, listTop);
    listTop += 34;
  }
  const listBottom = H - 92;
  const rowH = Math.min(78, (listBottom - listTop) / Math.max(1, rest.length));
  const avatarR = Math.min(20, rowH * 0.27);
  const nameF = Math.min(34, Math.max(19, rowH * 0.44));
  const rankColors = { 2: "#d3dbe4", 3: "#e0a86a" };
  rest.forEach((p, i) => {
    const rank = i + 2;
    const yc = listTop + i * rowH + rowH / 2;
    const [c1, c2] = AVATAR_COLORS[gameState.players.indexOf(p) % AVATAR_COLORS.length];
    rrect(ctx, 100, yc - rowH / 2 + 4, W - 200, rowH - 8, 16);
    ctx.fillStyle = "rgba(255,255,255,0.07)"; ctx.fill();
    // rank badge (drawn disc — always visible, no emoji dependency)
    const rr = avatarR * 0.92;
    ctx.beginPath(); ctx.arc(146, yc, rr, 0, Math.PI * 2);
    ctx.fillStyle = rankColors[rank] || "rgba(255,255,255,0.14)"; ctx.fill();
    ctx.fillStyle = rank <= 3 ? "#05100a" : "#e6eee6";
    ctx.font = `800 ${Math.round(rr * 1.05)}px ${F}`; ctx.textAlign = "center";
    ctx.fillText(String(rank), 146, yc + rr * 0.35);
    // avatar
    ctx.beginPath(); ctx.arc(200, yc, avatarR, 0, Math.PI * 2);
    const ag = ctx.createLinearGradient(200 - avatarR, yc - avatarR, 200 + avatarR, yc + avatarR);
    ag.addColorStop(0, c1); ag.addColorStop(1, c2); ctx.fillStyle = ag; ctx.fill();
    ctx.fillStyle = "#05100a"; ctx.font = `700 ${Math.round(avatarR * 1.05)}px ${F}`;
    ctx.fillText(initials(p.name), 200, yc + avatarR * 0.36);
    // name + score
    ctx.textAlign = "left"; ctx.fillStyle = "#fff"; ctx.font = `600 ${Math.round(nameF)}px ${F}`;
    ctx.fillText(clip(ctx, p.name, W - 480), 200 + avatarR + 22, yc + nameF * 0.34);
    ctx.textAlign = "right"; ctx.font = `800 ${Math.round(nameF * 1.05)}px ${F}`;
    ctx.fillText(String(p.totalScore), W - 128, yc + nameF * 0.34);
  });

  // Footer stat
  ctx.textAlign = "center"; ctx.fillStyle = "#5fe08c"; ctx.font = `600 25px ${F}`;
  ctx.fillText(`${t("totalAccuracy")}: ${s.totalAcc}%  •  ${s.rounds} ${t("currentRound").toLowerCase()}s`, W / 2, H - 46);
}

function clip(ctx, text, maxW) {
  if (ctx.measureText(text).width <= maxW) return text;
  let str = text;
  while (str.length > 1 && ctx.measureText(str + "…").width > maxW) str = str.slice(0, -1);
  return str + "…";
}

function cardBlob() { return new Promise((res) => document.getElementById("shareCanvas").toBlob(res, "image/png", 0.95)); }

async function downloadCard() {
  const blob = await cardBlob(); if (!blob) return;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `parque-aventura-${Date.now()}.png`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  haptic(12);
}
async function shareCard() {
  const blob = await cardBlob(); if (!blob) return;
  const file = new File([blob], "parque-aventura.png", { type: "image/png" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: "Parque Aventura", text: `${t("results")} — ${t(resultsSummary.game)}` }); }
    catch (_) {}
  } else { downloadCard(); }
}

document.addEventListener("DOMContentLoaded", () => {
  const photoInput = document.getElementById("photoInput");
  if (photoInput) photoInput.addEventListener("change", (e) => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    const img = new Image();
    img.onload = () => { composerPhoto = img; renderShareCard(img); };
    img.src = URL.createObjectURL(f);
  });
  const noPhoto = document.getElementById("noPhotoBtn");
  if (noPhoto) noPhoto.addEventListener("click", () => { composerPhoto = null; renderShareCard(null); });
  const dl = document.getElementById("downloadCardBtn");
  if (dl) dl.addEventListener("click", downloadCard);
  const sh = document.getElementById("shareCardBtn");
  if (sh) sh.addEventListener("click", shareCard);
});

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  renderPlayers();
  startAmbience();
  const nameInput = document.getElementById("playerName");
  if (nameInput) nameInput.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); addPlayer(); } });
  const roundsInput = document.getElementById("roundsInput");
  if (roundsInput) roundsInput.addEventListener("change", () => {
    let v = Math.min(100, Math.max(1, parseInt(roundsInput.value, 10) || 1));
    roundsInput.value = v; gameState.totalRounds = v;
  });
});

/* Expose handlers used via inline onclick */
window.selectGame = selectGame;
window.backToSelection = backToSelection;
window.addPlayer = addPlayer;
window.stepRounds = stepRounds;
window.startGame = startGame;
window.endGame = endGame;
window.newGame = newGame;
window.changeLanguage = changeLanguage;
window.toggleSound = toggleSound;
window.toggleAmbience = toggleAmbience;
window.openComposer = openComposer;
window.closeComposer = closeComposer;
