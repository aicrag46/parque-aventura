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

  document.getElementById("targetStage").hidden = gameState.selectedGame !== "archery";
  document.getElementById("shotMarks").innerHTML = "";

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

/* ---------- End game / results ---------- */
function endGame() {
  gameState.gameEnded = true;
  gameState.gameStarted = false;
  const ranked = [...gameState.players].sort((a, b) => b.totalScore - a.totalScore);
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
