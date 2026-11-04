const cursor = document.querySelector(".cursor");
const hero = document.querySelector(".hero");
const arena = document.querySelector("#gameArena");
const player = document.querySelector("#player");
const intro = document.querySelector("#gameIntro");
const gameOver = document.querySelector("#gameOver");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const collectables = [...document.querySelectorAll(".collectable")];
const fragmentSlots = [...document.querySelectorAll("#fragmentSlots i")];
const timeValue = document.querySelector("#timeValue");
const scoreValue = document.querySelector("#scoreValue");
const gamePrompt = document.querySelector("#gamePrompt");
const hazardLayer = document.querySelector("#hazards");
const soundButton = document.querySelector(".sound-toggle");
const soundLabel = document.querySelector(".sound-label");

let active = false;
let score = 0;
let collected = 0;
let timeLeft = 45;
let frameId = 0;
let timerId = 0;
let lastTime = 0;
let invulnerable = false;
let audioContext = null;
let muted = false;

const playerPosition = { x: 0, y: 0 };
const keys = new Set();
const hazards = [];

window.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => cursor.classList.add("active"));
  element.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

function getTone(frequency, duration = .12, volume = .04) {
  if (muted) return;
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(volume, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

soundButton.addEventListener("click", () => {
  muted = !muted;
  soundButton.classList.toggle("playing", !muted);
  soundLabel.textContent = muted ? "SOUND OFF" : "SOUND ON";
});

function resetCollectables() {
  const positions = [
    ["17%", "31%", "-12deg"],
    ["73%", "19%", "14deg"],
    ["17%", "68%", "8deg"],
    ["78%", "64%", "-8deg"]
  ];
  collectables.forEach((item, index) => {
    item.classList.remove("collected");
    item.style.left = positions[index][0];
    item.style.right = "auto";
    item.style.top = positions[index][1];
    item.style.bottom = "auto";
    item.style.transform = `rotate(${positions[index][2]})`;
  });
}

function setPlayerToCenter() {
  const rect = arena.getBoundingRect?.() || arena.getBoundingClientRect();
  playerPosition.x = rect.width / 2;
  playerPosition.y = rect.height / 2;
  player.style.left = `${playerPosition.x}px`;
  player.style.top = `${playerPosition.y}px`;
}

function startGame() {
  active = true;
  score = 0;
  collected = 0;
  timeLeft = 45;
  invulnerable = false;
  intro.style.display = "none";
  gameOver.classList.remove("visible");
  hero.classList.add("game-active");
  scoreValue.textContent = "0000";
  timeValue.textContent = "45";
  fragmentSlots.forEach((slot) => slot.classList.remove("filled"));
  gamePrompt.textContent = "COLLECT THE FOUR";
  resetCollectables();
  setPlayerToCenter();
  createHazards();
  getTone(196, .28, .08);
  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft--;
    timeValue.textContent = String(timeLeft).padStart(2, "0");
    if (timeLeft <= 10) gamePrompt.textContent = "THE QUIET IS CLOSING IN";
    if (timeLeft <= 0) endGame(false);
  }, 1000);
  cancelAnimationFrame(frameId);
  lastTime = performance.now();
  frameId = requestAnimationFrame(gameLoop);
}

function createHazards() {
  hazardLayer.innerHTML = "";
  hazards.length = 0;
  for (let i = 0; i < 5; i++) {
    const element = document.createElement("div");
    element.className = "hazard";
    hazardLayer.appendChild(element);
    hazards.push({
      element,
      x: 100 + Math.random() * Math.max(100, arena.clientWidth - 200),
      y: 100 + Math.random() * Math.max(100, arena.clientHeight - 200),
      vx: (Math.random() > .5 ? 1 : -1) * (45 + Math.random() * 35),
      vy: (Math.random() > .5 ? 1 : -1) * (45 + Math.random() * 35),
      phase: Math.random() * 10
    });
  }
}

function gameLoop(now) {
  if (!active) return;
  const delta = Math.min((now - lastTime) / 1000, .034);
  lastTime = now;
  const speed = 330 * delta;

  if (keys.has("arrowleft") || keys.has("a")) playerPosition.x -= speed;
  if (keys.has("arrowright") || keys.has("d")) playerPosition.x += speed;
  if (keys.has("arrowup") || keys.has("w")) playerPosition.y -= speed;
  if (keys.has("arrowdown") || keys.has("s")) playerPosition.y += speed;

  const padding = 28;
  playerPosition.x = Math.max(padding, Math.min(arena.clientWidth - padding, playerPosition.x));
  playerPosition.y = Math.max(padding, Math.min(arena.clientHeight - padding, playerPosition.y));
  player.style.left = `${playerPosition.x}px`;
  player.style.top = `${playerPosition.y}px`;

  hazards.forEach((hazard) => {
    hazard.x += hazard.vx * delta;
    hazard.y += hazard.vy * delta;
    if (hazard.x < 20 || hazard.x > arena.clientWidth - 20) hazard.vx *= -1;
    if (hazard.y < 20 || hazard.y > arena.clientHeight - 20) hazard.vy *= -1;
    hazard.element.style.left = `${hazard.x}px`;
    hazard.element.style.top = `${hazard.y}px`;
    const dx = hazard.x - playerPosition.x;
    const dy = hazard.y - playerPosition.y;
    if (!invulnerable && Math.sqrt(dx * dx + dy * dy) < 28) hitPlayer();
  });

  collectables.forEach((item) => {
    if (item.classList.contains("collected")) return;
    const rect = item.getBoundingClientRect();
    const arenaRect = arena.getBoundingClientRect();
    const itemX = rect.left + rect.width / 2 - arenaRect.left;
    const itemY = rect.top + rect.height / 2 - arenaRect.top;
    const dx = itemX - playerPosition.x;
    const dy = itemY - playerPosition.y;
    if (Math.sqrt(dx * dx + dy * dy) < 46) collectFragment(item);
  });

  frameId = requestAnimationFrame(gameLoop);
}

function collectFragment(item) {
  item.classList.add("collected");
  collected++;
  score += 1000 + timeLeft * 12;
  fragmentSlots[collected - 1].classList.add("filled");
  scoreValue.textContent = String(score).padStart(4, "0");
  gamePrompt.textContent = collected === 4 ? "YOU FOUND THE WHOLE SKY" : `${item.dataset.name.toUpperCase()} — FOUND`;
  getTone(220 * (1 + collected * .25), .32, .06);
  if (collected === collectables.length) {
    setTimeout(() => endGame(true), 650);
  }
}

function hitPlayer() {
  invulnerable = true;
  score = Math.max(0, score - 180);
  timeLeft = Math.max(0, timeLeft - 2);
  scoreValue.textContent = String(score).padStart(4, "0");
  timeValue.textContent = String(timeLeft).padStart(2, "0");
  player.classList.remove("hit");
  void player.offsetWidth;
  player.classList.add("hit");
  gamePrompt.textContent = "THE QUIET TOOK TWO SECONDS";
  getTone(72, .18, .07);
  setTimeout(() => {
    invulnerable = false;
    player.classList.remove("hit");
    if (active && collected < 4 && timeLeft > 10) gamePrompt.textContent = "COLLECT THE FOUR";
  }, 900);
}

function endGame(won) {
  if (!active) return;
  active = false;
  clearInterval(timerId);
  cancelAnimationFrame(frameId);
  hero.classList.remove("game-active");
  gameOver.classList.add("visible");
  getTone(won ? 330 : 82, won ? .7 : .5, .07);
  if (won) {
    document.querySelector("#resultEyebrow").textContent = "THE SKY IS WHOLE AGAIN";
    document.querySelector("#resultTitle").textContent = "You found it all.";
    document.querySelector("#resultCopy").textContent = `${String(score).padStart(4, "0")} POINTS / ${timeLeft} SECONDS REMAINING`;
  } else {
    document.querySelector("#resultEyebrow").textContent = "THE QUIET CLOSED IN";
    document.querySelector("#resultTitle").textContent = collected ? "Almost somewhere." : "Not this time.";
    document.querySelector("#resultCopy").textContent = `${collected} OF 4 FRAGMENTS / ${String(score).padStart(4, "0")} POINTS`;
  }
}

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (["arrowleft", "arrowright", "arrowup", "arrowdown", "w", "a", "s", "d"].includes(key)) {
    event.prevent.preventDefault?.();
    keys.add(key);
  }
});
window.addEventListener("keyup", (event) => keys.delete(event.key.toLowerCase()));

arena.addEventListener("pointermove", (event) => {
  if (!active) return;
  const rect = arena.getBoundingClientRect();
  playerPosition.x = event.clientX - rect.left;
  playerPosition.y = event.clientY - rect.top;
});
arena.addEventListener("pointerdown", (event) => {
  if (!active) return;
  arena.setPointerCapture?.(event.pointerId);
});

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
soundButton.classList.add("playing");

const canvas = document.querySelector("#constellation");
const context = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  stars = Array.from({ length: Math.min(70, Math.floor(innerWidth / 20)) }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    vx: (Math.random() - .5) * .08,
    vy: (Math.random() - .5) * .08,
    radius: Math.random() * 1.1 + .2
  }));
}

function drawConstellation() {
  context.clearRect(0, 0, innerWidth, innerHeight);
  stars.forEach((star) => {
    star.x += star.vx;
    star.y += star.vy;
    if (star.x < 0 || star.x > innerWidth) star.vx *= -1;
    if (star.y < 0 || star.y > innerHeight) star.vy *= -1;
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(238,234,221,.28)";
    context.fill();
  });

  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const dx = stars[i].x - stars[j].x;
      const dy = stars[i].y - stars[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 95) {
        context.beginPath();
        context.moveTo(stars[i].x, stars[i].y);
        context.lineTo(stars[j].x, stars[j].y);
        context.strokeStyle = `rgba(238,234,221,${.065 * (1 - distance / 95)})`;
        context.stroke();
      }
    }
  }
  requestAnimationFrame(drawConstellation);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawConstellation();
