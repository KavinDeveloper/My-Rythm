const schedules = {
  saturday: [
    { time: "05:00", end: "05:20", title: "Wake up & hydrate", note: "Drink water, open the curtains and do light stretching.", color: "#9a82ff" },
    { time: "05:20", end: "05:45", title: "Morning reset", note: "Wash up, prepare your football bag and get mentally ready.", color: "#a6d8c7" },
    { time: "05:45", end: "06:00", title: "Warm up & travel", note: "Leave for coaching and begin a gentle warm-up.", color: "#e5ca7a" },
    { time: "06:00", end: "08:00", title: "Football coaching", note: "Focus on technique, effort and listening to your coach.", color: "#ff9fc3" },
    { time: "08:00", end: "10:00", title: "Cool down & breakfast", note: "Cool down, reach home, bathe and eat a complete breakfast.", color: "#a6d8c7" },
    { time: "10:00", end: "11:00", title: "Recharge & prepare", note: "Rest briefly, then get your study space ready.", color: "#9a82ff" },
    { time: "11:00", end: "11:50", title: "Focus block 1", note: "Study your hardest subject. No phone or distractions.", color: "#ff9fc3" },
    { time: "11:50", end: "12:10", title: "Screen-free break", note: "Walk, stretch, look outside and give your eyes a rest.", color: "#e5ca7a" },
    { time: "12:10", end: "13:00", title: "Focus block 2", note: "Practice questions or revise yesterday's weak topic.", color: "#9a82ff" },
    { time: "13:00", end: "14:30", title: "Lunch & quiet rest", note: "Lunch around 1:30 pm, then relax without heavy studying.", color: "#a6d8c7" },
    { time: "14:30", end: "15:30", title: "Personal learning", note: "Revision, reading, projects or a subject you genuinely enjoy.", color: "#e5ca7a" },
    { time: "15:30", end: "17:30", title: "Hobby & free time", note: "Go outside, play, draw, game, build or enjoy time with family.", color: "#ff9fc3" },
    { time: "17:30", end: "18:30", title: "Second study block", note: "Complete homework, corrections and one final recall session.", color: "#9a82ff" },
    { time: "18:30", end: "20:30", title: "Dinner & family time", note: "Eat, unwind and stay away from stressful school work.", color: "#a6d8c7" },
    { time: "20:30", end: "21:30", title: "Preview & prepare", note: "Pack your bag, review the next day's plan and dim screens.", color: "#e5ca7a" },
    { time: "21:30", end: "22:00", title: "Sleep routine", note: "Brush, set out clothes and prepare for a proper night's sleep.", color: "#ff9fc3" }
  ],
  weekday: [
    { time: "06:30", end: "06:50", title: "Wake up & hydrate", note: "Get up slowly, drink water and start the morning calmly.", color: "#9a82ff" },
    { time: "06:50", end: "07:15", title: "Bath & get ready", note: "Freshen up and put on your school uniform.", color: "#a6d8c7" },
    { time: "07:15", end: "07:45", title: "Breakfast", note: "Eat a proper breakfast and pack what you need.", color: "#e5ca7a" },
    { time: "07:45", end: "08:00", title: "Van ready", note: "Check your bag, homework, water bottle and leave at 8:00.", color: "#ff9fc3" },
    { time: "08:00", end: "17:00", title: "School", note: "Stay focused through classes and complete work given in school.", color: "#9a82ff" },
    { time: "17:00", end: "17:15", title: "Bath", note: "Reach home, freshen up and change into comfortable clothes.", color: "#a6d8c7" },
    { time: "17:15", end: "18:00", title: "Home chores", note: "Water plants, take down hanging clothes and load the unwashed clothes.", color: "#e5ca7a" },
    { time: "18:00", end: "21:00", title: "JEE online class", note: "Attend carefully, write notes and mark doubts as they come.", color: "#ff9fc3" },
    { time: "21:00", end: "22:00", title: "Homework & finish work", note: "Complete school homework first; allow a small buffer until 10:30 or 11.", color: "#9a82ff" },
    { time: "22:00", end: "22:30", title: "Wind down", note: "Prepare for bed, keep your bag ready and stop heavy screen use.", color: "#a6d8c7" }
  ],
  friday: [
    { time: "06:30", end: "06:50", title: "Wake up & hydrate", note: "Start the day calmly and drink plenty of water.", color: "#9a82ff" },
    { time: "06:50", end: "07:15", title: "Bath & get ready", note: "Freshen up and prepare your school uniform.", color: "#a6d8c7" },
    { time: "07:15", end: "07:45", title: "Breakfast", note: "Eat well before leaving for school.", color: "#e5ca7a" },
    { time: "07:45", end: "08:00", title: "Van ready", note: "Check your bag and leave for the school van at 8:00.", color: "#ff9fc3" },
    { time: "08:00", end: "17:00", title: "School", note: "Keep Friday focused and note work that needs completion.", color: "#9a82ff" },
    { time: "17:00", end: "17:15", title: "Bath", note: "Reach home and freshen up immediately.", color: "#a6d8c7" },
    { time: "17:15", end: "18:00", title: "Home chores", note: "Water plants, collect hanging clothes and load the laundry.", color: "#e5ca7a" },
    { time: "18:00", end: "19:00", title: "JEE weekly test", note: "Begin at 6:00 and aim to complete the test within one hour.", color: "#ff9fc3" },
    { time: "19:00", end: "21:00", title: "Study or class buffer", note: "Review test mistakes or complete one priority JEE topic.", color: "#9a82ff" },
    { time: "21:00", end: "22:00", title: "Homework & other work", note: "Finish homework and use a small buffer until 10:30 or 11 if needed.", color: "#e5ca7a" },
    { time: "22:00", end: "22:30", title: "Wind down", note: "Prepare for Saturday and relax before sleep.", color: "#a6d8c7" }
  ],
  "saturday-school-half": [
    { time: "05:00", end: "05:20", title: "Wake up & hydrate", note: "Get ready for football coaching without rushing.", color: "#9a82ff" },
    { time: "05:20", end: "05:45", title: "Morning reset", note: "Dress, stretch and prepare your football gear.", color: "#a6d8c7" },
    { time: "05:45", end: "06:00", title: "Travel to coaching", note: "Reach on time and begin warming up.", color: "#e5ca7a" },
    { time: "06:00", end: "07:00", title: "Football coaching", note: "Give the session your full attention and effort.", color: "#ff9fc3" },
    { time: "07:00", end: "07:45", title: "Cool down & return", note: "Cool down, travel home and get ready for school.", color: "#a6d8c7" },
    { time: "07:45", end: "08:00", title: "School departure", note: "Pack your bag and leave for the half-day school schedule.", color: "#e5ca7a" },
    { time: "08:00", end: "13:00", title: "Half-day school", note: "Attend the morning sessions and collect all pending work.", color: "#ff9fc3" },
    { time: "13:00", end: "14:30", title: "Lunch & bath", note: "Return by 1 pm, bathe, eat and begin recovery.", color: "#a6d8c7" },
    { time: "14:30", end: "16:30", title: "Homework & school work", note: "Complete the easiest school work before it builds up.", color: "#9a82ff" },
    { time: "16:30", end: "18:30", title: "Rest, hobby & family", note: "Recover from coaching and enjoy screen-free or personal time.", color: "#e5ca7a" },
    { time: "18:30", end: "20:30", title: "Dinner & relaxation", note: "Eat and unwind; JEE online class is not scheduled today.", color: "#ff9fc3" },
    { time: "20:30", end: "21:30", title: "Weekly prep", note: "Review the weekend and prepare for the coming week.", color: "#9a82ff" },
    { time: "21:30", end: "22:00", title: "Sleep routine", note: "Put work away and get ready for proper sleep.", color: "#a6d8c7" }
  ],
  "saturday-school-full": [
    { time: "05:00", end: "05:20", title: "Wake up & hydrate", note: "Start early and drink water before football coaching.", color: "#9a82ff" },
    { time: "05:20", end: "05:45", title: "Morning reset", note: "Stretch, dress and prepare football equipment.", color: "#a6d8c7" },
    { time: "05:45", end: "06:00", title: "Travel to coaching", note: "Leave on time for the 6:00 session.", color: "#e5ca7a" },
    { time: "06:00", end: "07:00", title: "Football coaching", note: "Complete coaching, cool down and return home.", color: "#ff9fc3" },
    { time: "07:00", end: "07:45", title: "Return & get ready", note: "Cool down, bathe and prepare quickly for school.", color: "#a6d8c7" },
    { time: "07:45", end: "08:00", title: "School departure", note: "Leave with every needed school item.", color: "#e5ca7a" },
    { time: "08:00", end: "17:00", title: "Full-day school", note: "Focus through the day and remember all home assignments.", color: "#ff9fc3" },
    { time: "17:00", end: "17:15", title: "Bath", note: "Come home and freshen up before starting chores.", color: "#a6d8c7" },
    { time: "17:15", end: "18:00", title: "Home chores", note: "Water plants, collect hanging clothes and load unwashed clothes.", color: "#e5ca7a" },
    { time: "18:00", end: "19:00", title: "Dinner", note: "Eat a proper meal and begin recovering after coaching and school.", color: "#ff9fc3" },
    { time: "19:00", end: "20:30", title: "Light homework", note: "Complete one urgent task only; avoid exhausting yourself.", color: "#9a82ff" },
    { time: "20:30", end: "21:30", title: "Free recovery time", note: "Relax, talk with family or enjoy a quiet hobby.", color: "#a6d8c7" },
    { time: "21:30", end: "22:00", title: "Sleep routine", note: "Prepare clothes and bag, then sleep for proper recovery.", color: "#e5ca7a" }
  ],
  sunday: [
    { time: "05:00", end: "05:20", title: "Wake up & hydrate", note: "Begin slowly with water, fresh air and light movement.", color: "#9a82ff" },
    { time: "05:20", end: "05:45", title: "Morning reset", note: "Wash, stretch and prepare calmly for football coaching.", color: "#a6d8c7" },
    { time: "05:45", end: "06:00", title: "Warm up & travel", note: "Leave on time and reach training feeling prepared.", color: "#e5ca7a" },
    { time: "06:00", end: "08:00", title: "Football coaching", note: "Play with focus, recover your breathing and enjoy the game.", color: "#ff9fc3" },
    { time: "08:00", end: "10:00", title: "Cool down & breakfast", note: "Cool down, bathe, eat and avoid immediately lying down.", color: "#a6d8c7" },
    { time: "10:00", end: "11:00", title: "Plan the week", note: "Check homework, tests and deadlines; choose priorities.", color: "#9a82ff" },
    { time: "11:00", end: "11:50", title: "Focus block: weak area", note: "Study the topic you postponed or found hardest this week.", color: "#ff9fc3" },
    { time: "11:50", end: "12:10", title: "Break", note: "Walk around and completely change your focus.", color: "#e5ca7a" },
    { time: "12:10", end: "13:00", title: "Focus block: practice", note: "Solve questions without notes; then check your mistakes.", color: "#9a82ff" },
    { time: "13:00", end: "14:30", title: "Lunch & nap", note: "Eat lunch around 1:30 pm. Take a short rest if needed.", color: "#a6d8c7" },
    { time: "14:30", end: "15:30", title: "Finish pending homework", note: "Complete only high-value work before the next school week.", color: "#e5ca7a" },
    { time: "15:30", end: "17:30", title: "Free Sunday block", note: "Friends, family, hobby, gaming, reading or outdoor time.", color: "#ff9fc3" },
    { time: "17:30", end: "18:30", title: "Weekly revision", note: "Read notes once and make one small list for Monday.", color: "#9a82ff" },
    { time: "18:30", end: "20:30", title: "Dinner & reset", note: "Eat, help at home and organize your school bag.", color: "#a6d8c7" },
    { time: "20:30", end: "21:30", title: "Prepare for Monday", note: "Lay out clothes and books; keep the night calm.", color: "#e5ca7a" },
    { time: "21:30", end: "22:00", title: "Sleep routine", note: "Put screens away and let your body recover.", color: "#ff9fc3" }
  ]
};

const cursor = document.querySelector(".cursor");
const timeline = document.querySelector("#timeline");
const dayTabs = [...document.querySelectorAll(".day-tab")];
const dayLabel = document.querySelector("#dayLabel");
const progress = document.querySelector("#dayProgress");
const progressText = document.querySelector("#dayProgressText");

let currentDay = "saturday";

window.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => cursor.classList.add("active"));
  element.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

function storageKey(day, index) {
  return `weekend-plan-${day}-${index}`;
}

function renderSchedule() {
  timeline.innerHTML = "";
  const plan = schedules[currentDay];
  plan.forEach((task, index) => {
    const row = document.createElement("article");
    row.className = "task-row";
    row.style.setProperty("--task-color", task.color);
    if (localStorage.getItem(storageKey(currentDay, index)) === "done") row.classList.add("done");
    row.innerHTML = `
      <div class="task-dot"></div>
      <time class="task-time" datetime="${task.time}">
        <span class="time-start">${task.time}</span>
        <span class="time-end">${task.end}</span>
      </time>
      <div class="task-copy"><h3>${task.title}</h3><p>${task.note}</p></div>
      <button class="task-check" type="button" aria-label="Mark ${task.title} complete">✓</button>`;
    row.querySelector(".task-check").addEventListener("click", () => {
      row.classList.toggle("done");
      const done = row.classList.contains("done");
      localStorage.setItem(storageKey(currentDay, index), done ? "done" : "");
      updateProgress();
    });
    timeline.appendChild(row);
  });
  updateProgress();
}

function updateProgress() {
  const doneCount = [...document.querySelectorAll(".task-row.done")].length;
  const total = schedules[currentDay].length;
  const percent = Math.round(doneCount / total * 100);
  progress.style.width = `${percent}%`;
  progressText.textContent = `${percent}% complete`;
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentDay = tab.dataset.day;
    dayTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    const labels = {
      saturday: "SATURDAY / FOOTBALL",
      sunday: "SUNDAY",
      weekday: "MONDAY — THURSDAY",
      friday: "FRIDAY",
      "saturday-school-half": "SATURDAY / HALF DAY",
      "saturday-school-full": "SATURDAY / FULL DAY"
    };
    dayLabel.textContent = labels[currentDay];
    renderSchedule();
  });
});

const musicToggle = document.querySelector("#musicToggle");
let ambientContext = null;
let ambientTimer = null;
let ambientPlaying = false;
let ambientMaster = null;

function createAmbientTone(frequency, duration = 8, volume = 0.018) {
  if (!ambientContext || !ambientMaster) return;
  const now = ambientContext.currentTime;
  const oscillator = ambientContext.createOscillator();
  const overtone = ambientContext.createOscillator();
  const gain = ambientContext.createGain();
  const filter = ambientContext.createBiquadFilter();

  oscillator.type = "sine";
  overtone.type = "triangle";
  oscillator.frequency.value = frequency;
  overtone.frequency.value = frequency * 1.5;
  filter.type = "lowpass";
  filter.frequency.value = 900;

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 1.6);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(filter);
  overtone.connect(filter);
  filter.connect(gain);
  gain.connect(ambientMaster);
  oscillator.start(now);
  overtone.start(now);
  oscillator.stop(now + duration + 0.1);
  overtone.stop(now + duration + 0.1);
}

function playAmbientPattern() {
  if (!ambientPlaying) return;
  const notes = [130.81, 146.83, 164.81, 196];
  createAmbientTone(notes[Math.floor(Math.random() * notes.length)]);
}

async function startAmbientMusic() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) throw new Error("Web Audio is not supported by this browser.");

  if (!ambientContext) {
    ambientContext = new AudioContextClass();
    ambientMaster = ambientContext.createGain();
    ambientMaster.gain.value = 0.7;
    ambientMaster.connect(ambientContext.destination);
  }
  if (ambientContext.state === "suspended") {
    await ambientContext.resume();
  }

  ambientPlaying = true;
  playAmbientPattern();
  ambientTimer = window.setInterval(playAmbientPattern, 5200);
}

function stopAmbientMusic() {
  ambientPlaying = false;
  window.clearInterval(ambientTimer);
}

musicToggle?.addEventListener("click", async () => {
  try {
    if (ambientPlaying) {
      stopAmbientMusic();
    } else {
      await startAmbientMusic();
    }

    musicToggle.classList.toggle("playing", ambientPlaying);
    musicToggle.setAttribute("aria-pressed", String(ambientPlaying));
    musicToggle.setAttribute("aria-label", ambientPlaying ? "Pause ambient music" : "Play ambient music");
    musicToggle.querySelector(".music-label").textContent = ambientPlaying ? "Music on" : "Play rhythm";
  } catch (error) {
    console.error(error);
    musicToggle.querySelector(".music-label").textContent = "Audio unavailable";
  }
});

const canvas = document.querySelector("#sky");
const context = canvas.getContext("2d");
let stars = [];

function resizeSky() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  stars = Array.from({ length: 52 }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    vx: (Math.random() - .5) * .08,
    vy: (Math.random() - .5) * .08
  }));
}

function drawSky() {
  context.clearRect(0, 0, innerWidth, innerHeight);
  stars.forEach((star) => {
    star.x += star.vx; star.y += star.vy;
    if (star.x < 0 || star.x > innerWidth) star.vx *= -1;
    if (star.y < 0 || star.y > innerHeight) star.vy *= -1;
    context.beginPath(); context.arc(star.x, star.y, .65, 0, Math.PI * 2);
    context.fillStyle = "rgba(238,234,221,.24)"; context.fill();
  });
  requestAnimationFrame(drawSky);
}

window.addEventListener("resize", resizeSky);
resizeSky();
drawSky();
renderSchedule();
