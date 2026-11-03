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
const nextTime = document.querySelector("#nextTime");
const nextTask = document.querySelector("#nextTask");

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
      <time class="task-time">${task.time}<br>— ${task.end}</time>
      <div class="task-copy"><h3>${task.title}</h3><p>${task.note}</p></div>
      <button class="task-check" type="button" aria-label="Mark ${task.title} complete">✓</button>`;
    row.querySelector(".task-check").addEventListener("click", () => {
      row.classList.toggle("done");
      const done = row.classList.contains("done");
      localStorage.setItem(storageKey(currentDay, index), done ? "done" : "");
      updateProgress();
      updateNextTask();
    });
    timeline.appendChild(row);
  });
  updateProgress();
  updateNextTask();
}

function updateProgress() {
  const doneCount = [...document.querySelectorAll(".task-row.done")].length;
  const total = schedules[currentDay].length;
  const percent = Math.round(doneCount / total * 100);
  progress.style.width = `${percent}%`;
  progressText.textContent = `${percent}% complete`;
}

function updateNextTask() {
  const firstIncomplete = [...timeline.querySelectorAll(".task-row")].find((row) => !row.classList.contains("done"));
  if (!firstIncomplete) {
    nextTime.textContent = "DONE";
    nextTask.textContent = "Everything is complete";
    return;
  }
  const index = [...timeline.children].indexOf(firstIncomplete);
  const task = schedules[currentDay][index];
  nextTime.textContent = task.time;
  nextTask.textContent = task.title;
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentDay = tab.dataset.day;
    dayTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    dayLabel.textContent = currentDay.toUpperCase();
    renderSchedule();
  });
});

document.querySelector("#focusButton").addEventListener("click", () => {
  const next = [...timeline.querySelectorAll(".task-row")].find((row) => !row.classList.contains("done"));
  if (next) next.scrollIntoView({ behavior: "smooth", block: "center" });
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
