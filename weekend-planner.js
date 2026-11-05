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

const scheduleRules = {
  weekend: {
    label: "WEEKEND",
    items: [
      ["Protect sleep", "Keep the same wake-up time and try to sleep by 10 pm."],
      ["Study one thing well", "Use 50-minute focus blocks instead of studying everything at once."],
      ["Earn recovery time", "Enjoy games, hobbies and family after today's important work is done."]
    ]
  },
  weekday: {
    label: "WEEKDAY",
    items: [
      ["Prepare the night before", "Keep your bag, water bottle and uniform ready so mornings stay calm."],
      ["Protect JEE attention", "Join each 6–9 pm class ready to write notes and mark every doubt."],
      ["Finish with a buffer", "Do homework after class and stop by 10:30–11 pm without letting loose work spread later."]
    ]
  },
  friday: {
    label: "FRIDAY TEST",
    items: [
      ["Test first, then review", "Aim to complete the 6 pm test within one hour and avoid rushing."],
      ["Learn from mistakes", "Use the next block to mark wrong answers and understand why they happened."],
      ["Keep Friday controlled", "Do not turn a late test into an all-nighter; finish essentials and recover."]
    ]
  },
  "saturday-school-half": {
    label: "HALF-DAY SCHOOL",
    items: [
      ["Keep football recovery easy", "Eat, cool down and avoid rushing immediately after coaching."],
      ["Leave school work with no backup", "Note every pending task before leaving and finish the easiest priority first."],
      ["Use the afternoon wisely", "Balance homework, rest and recreation; protect sleep for tomorrow."]
    ]
  },
  "saturday-school-full": {
    label: "FULL-DAY SCHOOL",
    items: [
      ["Conserve morning energy", "Treat coaching as a warm-up: do not exhaust yourself before a full school day."],
      ["Finish only what matters", "After school, choose one urgent homework task instead of overloading the evening."],
      ["Prioritize recovery", "Eat properly, get chores done and use extra time for rest rather than screens."]
    ]
  }
};

const cursor = document.querySelector(".cursor");
const timeline = document.querySelector("#timeline");
const dayTabs = [...document.querySelectorAll(".day-tab")];
const dayLabel = document.querySelector("#dayLabel");
const progress = document.querySelector("#dayProgress");
const progressText = document.querySelector("#dayProgressText");
const rulesLabel = document.querySelector("#rulesLabel");
const rulesGrid = document.querySelector("#rulesGrid");

const dailyQuotes = [
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "You do not rise to the level of your goals. You fall to the level of your systems.", author: "James Clear" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Great things are done by a series of small things brought together.", author: "Vincent van Gogh" },
  { text: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
  { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Champions keep playing until they get it right.", author: "Billie Jean King" },
  { text: "Excellence is not being the best; it is doing your best.", author: "Unknown" },
  { text: "Rest is not idleness, and sometimes the most productive thing you can do is slow down.", author: "John Lubbock" },
  { text: "A little progress each day adds up to big results.", author: "Satya Nani" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Difficult roads often lead to beautiful destinations.", author: "Unknown" },
  { text: "Consistency is what transforms average into excellence.", author: "Unknown" }
];

function localDateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function dateFromParts(year, month, day) {
  return new Date(year, month - 1, day);
}

const eventThemes = [
  { id: "new-year", name: "New Year", start: [2026, 12, 29], end: [2027, 1, 3], colors: ["#fff4b8", "#9a82ff", "#ff9fc3", "#a6d8c7", "#ffffff"], root: 174.61, notes: [1, 1.125, 1.25, 1.3333, 1.5], confettiShape: "spark" },
  { id: "diwali", name: "Diwali", start: [2026, 10, 31], end: [2026, 11, 10], colors: ["#ffd700", "#ff8c42", "#ff5c7a", "#fff3b0", "#a6d8c7"], root: 196, notes: [1, 1.2, 1.25, 1.5, 1.6667], confettiShape: "spark" },
  { id: "christmas", name: "Christmas", start: [2026, 12, 20], end: [2026, 12, 26], colors: ["#ff8f8f", "#a6d8c7", "#fff4d6", "#e5ca7a", "#ffffff"], root: 261.63, notes: [1, 1.125, 1.25, 1.3333, 1.5], confettiShape: "paper" },
  { id: "halloween", name: "Halloween", start: [2026, 10, 25], end: [2026, 10, 31], colors: ["#ff9d3d", "#a77cff", "#fff0b8", "#ff6b6b", "#20222f"], root: 146.83, notes: [1, 1.1892, 1.4142, 1.5874, 1.6818], confettiShape: "bat" },
  { id: "holi", name: "Holi", start: [2027, 3, 1], end: [2027, 3, 5], colors: ["#ff9fc3", "#9a82ff", "#a6d8c7", "#e5ca7a", "#70c8ff"], root: 220, notes: [1, 1.125, 1.3333, 1.5, 2], confettiShape: "powder" },
  { id: "republic-day", name: "Republic Day", start: [2027, 1, 24], end: [2027, 1, 26], colors: ["#ff9933", "#ffffff", "#138808", "#9a82ff", "#e5ca7a"], root: 174.61, notes: [1, 1.25, 1.3333, 1.5, 1.875], confettiShape: "paper" },
  { id: "independence-day", name: "Independence Day", start: [2027, 8, 13], end: [2027, 8, 15], colors: ["#ff9933", "#ffffff", "#138808", "#9a82ff", "#e5ca7a"], root: 174.61, notes: [1, 1.25, 1.3333, 1.5, 1.875], confettiShape: "paper" }
];

let activeEventTheme = null;

function getEventTheme(date = new Date()) {
  const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return eventThemes.find((theme) => {
    const start = dateFromParts(...theme.start);
    const end = dateFromParts(...theme.end);
    end.setHours(23, 59, 59, 999);
    return dateOnly >= start && dateOnly <= end;
  }) || null;
}

function applyEventTheme() {
  activeEventTheme = getEventTheme();
  document.body.classList.remove("theme-diwali", "theme-christmas", "theme-holi", "theme-halloween", "theme-new-year", "theme-republic-day", "theme-independence-day");
  if (!activeEventTheme) {
    document.documentElement.style.removeProperty("--event-accent");
    document.querySelector("#eventThemeLabel")?.remove();
    return;
  }
  document.body.classList.add(`theme-${activeEventTheme.id}`);
  document.documentElement.style.setProperty("--event-accent", activeEventTheme.colors[0]);
}

applyEventTheme();

function quoteIndexForToday() {
  const dateKey = localDateKey();
  let hash = 0;
  for (let index = 0; index < dateKey.length; index += 1) {
    hash = ((hash << 5) - hash) + dateKey.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash) % dailyQuotes.length;
}

function showDailyQuote() {
  const quote = dailyQuotes[quoteIndexForToday()];
  document.querySelector("#dailyQuote").textContent = `“${quote.text}”`;
  document.querySelector("#dailyQuoteAuthor").textContent = `— ${quote.author}`;
}

function enterRhythm() {
  const welcome = document.querySelector("#welcomeScreen");
  if (!welcome || welcome.classList.contains("leaving")) return;
  welcome.classList.add("leaving");
  welcome.setAttribute("aria-hidden", "true");
  document.body.classList.remove("welcome-lock");
  window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
}

showDailyQuote();
const now = new Date();
const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
window.setTimeout(showDailyQuote, midnight.getTime() - now.getTime() + 250);
document.body.classList.add("welcome-lock");
document.querySelector("#welcomeEnter")?.addEventListener("click", enterRhythm);
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 20 && document.querySelector("#welcomeScreen")?.classList.contains("leaving") === false) enterRhythm();
}, { passive: true });
window.addEventListener("keydown", (event) => {
  if (["Enter", "ArrowDown", "PageDown", " "].includes(event.key)) {
    enterRhythm();
  }
});
let welcomeTouchStart = 0;
window.addEventListener("touchstart", (event) => {
  welcomeTouchStart = event.touches[0]?.clientY || 0;
}, { passive: true });
window.addEventListener("touchmove", (event) => {
  const currentTouch = event.touches[0]?.clientY || 0;
  if (welcomeTouchStart - currentTouch > 35) enterRhythm();
}, { passive: true });

let currentDay = "saturday";
let selectedCalendarDate = new Date();
let calendarWeekStart = startOfWeek(new Date());

function startOfWeek(date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const mondayOffset = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - mondayOffset);
  return start;
}

function scheduleForDate(date) {
  const weekday = date.getDay();
  if (weekday === 0) return "sunday";
  if (weekday === 5) return "friday";
  if (weekday === 6) return "saturday";
  return "weekday";
}

function formatWeekRange(start) {
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const startLabel = start.toLocaleDateString([], { month: "short", day: "numeric" });
  const endLabel = end.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
  return `${startLabel} — ${endLabel}`;
}

function selectCalendarDay(date, scrollToSchedule = false) {
  selectedCalendarDate = new Date(date);
  currentDay = scheduleForDate(selectedCalendarDate);
  dayTabs.forEach((item) => {
    const active = item.dataset.day === currentDay;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", String(active));
  });
  dayLabel.textContent = `${selectedCalendarDate.toLocaleDateString([], { weekday: "long" }).toUpperCase()} / ${selectedCalendarDate.toLocaleDateString([], { day: "2-digit", month: "short" }).toUpperCase()}`;
  renderSchedule();
  renderRules();
  renderCalendar();
  if (scrollToSchedule) document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth" });
}

function renderCalendar() {
  const todayKey = localDateKey();
  const eventPrefix = activeEventTheme ? `${activeEventTheme.name.toUpperCase()} · ` : "";
  document.querySelector("#weekLabel").textContent = `${eventPrefix}WEEK OF ${formatWeekRange(calendarWeekStart)}`;
  const daysContainer = document.querySelector("#weekDays");
  daysContainer.innerHTML = "";
  for (let index = 0; index < 7; index += 1) {
    const date = new Date(calendarWeekStart);
    date.setDate(date.getDate() + index);
    const dateKey = localDateKey(date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "week-day";
    if (localStorage.getItem(`my-rhythm-completed-${dateKey}`) === "done") button.classList.add("completed");
    if (dateKey === todayKey) button.classList.add("today");
    if (dateKey === localDateKey(selectedCalendarDate)) button.classList.add("active");
    button.setAttribute("aria-label", date.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric", year: "numeric" }));
    button.innerHTML = `<span>${date.toLocaleDateString([], { weekday: "short" })}</span><strong>${date.getDate()}</strong>`;
    button.addEventListener("click", () => selectCalendarDay(date, true));
    daysContainer.appendChild(button);
  }
}

document.querySelector("#previousWeek")?.addEventListener("click", () => {
  calendarWeekStart.setDate(calendarWeekStart.getDate() - 7);
  renderCalendar();
});
document.querySelector("#nextWeek")?.addEventListener("click", () => {
  calendarWeekStart.setDate(calendarWeekStart.getDate() + 7);
  renderCalendar();
});

window.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => cursor.classList.add("active"));
  element.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

function storageKey(day, index) {
  return `weekend-plan-${localDateKey(selectedCalendarDate)}-${day}-${index}`;
}

let rhythmAuth = null;
let rhythmDb = null;
let rhythmUser = null;
let rhythmUnsubscribe = null;

function isFirebaseConfigured() {
  const config = window.MY_RHYTHM_FIREBASE_CONFIG;
  return config && typeof firebase !== "undefined" && config.apiKey && config.projectId;
}

function initializeCloudSync() {
  if (!isFirebaseConfigured()) {
    document.querySelector("#authMessage").textContent = "Cloud sync is not configured yet. This device will continue using local progress.";
    return;
  }

  if (!firebase.apps.length) firebase.initializeApp(window.MY_RHYTHM_FIREBASE_CONFIG);
  rhythmAuth = firebase.auth();
  rhythmDb = firebase.firestore();
  rhythmAuth.onAuthStateChanged((user) => {
    rhythmUser = user;
    const name = document.querySelector("#accountName");
    const signOutButton = document.querySelector("#authSignOut");
    if (user) {
      name.textContent = user.displayName || user.email?.split("@")[0] || "Signed in";
      signOutButton.classList.add("visible");
      document.querySelector("#authMessage").textContent = "Signed in. Your rhythm is syncing across devices.";
      startCloudSnapshot();
    } else {
      name.textContent = "Sign in";
      signOutButton.classList.remove("visible");
      if (rhythmUnsubscribe) rhythmUnsubscribe();
      rhythmUnsubscribe = null;
    }
  });
}

function collectSyncedRhythm() {
  const state = {};
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("weekend-plan-") || key.startsWith("my-rhythm-completed-") || key.startsWith("my-rhythm-music-usage-") || key.startsWith("my-rhythm-week-celebrated-") || key === "my-rhythm-music-volume" || key === "my-rhythm-rescue-plan") {
      state[key] = localStorage.getItem(key);
    }
  });
  return state;
}

function mergeRhythmStates(localState, cloudState) {
  const merged = { ...localState };
  Object.entries(cloudState || {}).forEach(([key, cloudValue]) => {
    if (key.startsWith("weekend-plan-") || key.startsWith("my-rhythm-completed-")) {
      if (localState[key] === "done" || cloudValue === "done") merged[key] = "done";
      else if (!(key in localState)) merged[key] = cloudValue ?? "";
    } else if (!(key in localState) || localState[key] === null || localState[key] === "") {
      merged[key] = cloudValue;
    }
  });
  return merged;
}

async function saveRhythmToCloud() {
  if (!rhythmUser || !rhythmDb) return;
  await rhythmDb.collection("rhythm-users").doc(rhythmUser.uid).set({
    state: collectSyncedRhythm(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
}

function startCloudSnapshot() {
  if (!rhythmUser || !rhythmDb) return;
  if (rhythmUnsubscribe) rhythmUnsubscribe();
  rhythmUnsubscribe = rhythmDb.collection("rhythm-users").doc(rhythmUser.uid).onSnapshot((snapshot) => {
    const state = snapshot.data()?.state;
    if (!state) return;
    const merged = mergeRhythmStates(collectSyncedRhythm(), state);
    Object.entries(merged).forEach(([key, value]) => {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    });
    renderCalendar();
    renderSchedule();
    renderRules();
    updateMusicLimitUI?.();
    saveRhythmToCloud().catch(() => {});
  });
}

const authScreen = document.querySelector("#authScreen");
document.querySelector("#accountButton")?.addEventListener("click", () => {
  authScreen.classList.add("open");
  authScreen.setAttribute("aria-hidden", "false");
});
document.querySelector("#authClose")?.addEventListener("click", () => {
  authScreen.classList.remove("open");
  authScreen.setAttribute("aria-hidden", "true");
});

document.querySelector("#authSignIn")?.addEventListener("click", async () => {
  if (!isFirebaseConfigured()) return;
  try {
    await rhythmAuth.signInWithEmailAndPassword(document.querySelector("#authEmail").value, document.querySelector("#authPassword").value);
    authScreen.classList.remove("open");
  } catch (error) {
    document.querySelector("#authMessage").textContent = error.message;
  }
});

document.querySelector("#authSignUp")?.addEventListener("click", async () => {
  if (!isFirebaseConfigured()) return;
  try {
    await rhythmAuth.createUserWithEmailAndPassword(document.querySelector("#authEmail").value, document.querySelector("#authPassword").value);
    authScreen.classList.remove("open");
  } catch (error) {
    document.querySelector("#authMessage").textContent = error.message;
  }
});

document.querySelector("#authGoogle")?.addEventListener("click", async () => {
  if (!isFirebaseConfigured()) return;
  try {
    await rhythmAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    authScreen.classList.remove("open");
  } catch (error) {
    document.querySelector("#authMessage").textContent = error.message;
  }
});

document.querySelector("#authSignOut")?.addEventListener("click", async () => {
  if (rhythmAuth) await rhythmAuth.signOut();
});

initializeCloudSync();

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
      if (done) celebrateTask(row);
      updateProgress(done);
      saveRhythmToCloud().catch(() => {});
    });
    timeline.appendChild(row);
  });
  updateProgress();
}

function celebrateTask(row) {
  row.classList.remove("just-completed");
  void row.offsetWidth;
  row.classList.add("just-completed");
  window.setTimeout(() => row.classList.remove("just-completed"), 700);

  const button = row.querySelector(".task-check");
  const rect = button.getBoundingClientRect();
  const colors = ["#9a82ff", "#ff9fc3", "#a6d8c7", "#e5ca7a", "#eeeadd"];
  playCelebrationSound("task");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const themeColors = activeEventTheme?.colors || colors;
  for (let index = 0; index < 12; index += 1) {
    const particle = document.createElement("i");
    const angle = (Math.PI * 2 * index) / 12;
    const distance = 42 + Math.random() * 28;
    particle.className = "completion-particle";
    particle.style.left = `${rect.left + rect.width / 2}px`;
    particle.style.top = `${rect.top + rect.height / 2}px`;
    particle.style.background = themeColors[index % themeColors.length];
    particle.style.setProperty("--particle-x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--particle-y", `${Math.sin(angle) * distance}px`);
    document.body.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
  }
}

function celebrateDay() {
  playCelebrationSound("day");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const colors = activeEventTheme?.colors || ["#9a82ff", "#ff9fc3", "#a6d8c7", "#e5ca7a", "#eeeadd"];
    for (let index = 0; index < 54; index += 1) {
      const confetti = document.createElement("i");
      confetti.className = "day-confetti";
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.background = colors[index % colors.length];
      confetti.style.setProperty("--confetti-delay", `${Math.random() * .45}s`);
      confetti.style.setProperty("--confetti-duration", `${2.4 + Math.random() * 1.8}s`);
      confetti.style.setProperty("--confetti-drift", `${-100 + Math.random() * 200}px`);
      document.body.appendChild(confetti);
      confetti.addEventListener("animationend", () => confetti.remove(), { once: true });
    }
  }

  const toast = document.createElement("div");
  toast.className = "completion-toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = `<span>Rhythm complete</span><strong>Day finished beautifully.</strong>`;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.classList.add("visible"), 20);
  window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(() => toast.remove(), 500);
  }, 3600);
}

function getWeekStartKey(date = calendarWeekStart) {
  return localDateKey(startOfWeek(date));
}

function celebrateWeek() {
  const celebrationKey = `my-rhythm-week-celebrated-${getWeekStartKey()}`;
  if (localStorage.getItem(celebrationKey) === "done") return;

  for (let index = 0; index < 7; index += 1) {
    const date = new Date(calendarWeekStart);
    date.setDate(date.getDate() + index);
    if (localStorage.getItem(`my-rhythm-completed-${localDateKey(date)}`) !== "done") return;
  }

  localStorage.setItem(celebrationKey, "done");
  playCelebrationSound("week");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const colors = activeEventTheme?.colors || ["#9a82ff", "#ff9fc3", "#a6d8c7", "#e5ca7a", "#eeeadd"];
    for (let index = 0; index < 90; index += 1) {
      const confetti = document.createElement("i");
      confetti.className = "day-confetti";
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.background = colors[index % colors.length];
      confetti.style.setProperty("--confetti-delay", `${Math.random() * .4}s`);
      confetti.style.setProperty("--confetti-duration", `${3 + Math.random() * 2}s`);
      confetti.style.setProperty("--confetti-drift", `${-140 + Math.random() * 280}px`);
      document.body.appendChild(confetti);
      confetti.addEventListener("animationend", () => confetti.remove(), { once: true });
    }
  }

  const existingToast = document.querySelector(".completion-toast");
  existingToast?.remove();
  const toast = document.createElement("div");
  toast.className = "completion-toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = `<span>Week complete</span><strong>You showed up every day. Keep becoming stronger.</strong>`;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.classList.add("visible"), 20);
  window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(() => toast.remove(), 500);
  }, 5000);
}

function updateProgress(celebrate = false) {
  const doneCount = [...document.querySelectorAll(".task-row.done")].length;
  const total = schedules[currentDay].length;
  const percent = Math.round(doneCount / total * 100);
  progress.style.width = `${percent}%`;
  if (percent === 100) {
    localStorage.setItem(`my-rhythm-completed-${localDateKey(selectedCalendarDate)}`, "done");
    renderCalendar();
    if (celebrate) {
      celebrateDay();
      celebrateWeek();
    }
  } else {
    localStorage.removeItem(`my-rhythm-completed-${localDateKey(selectedCalendarDate)}`);
    renderCalendar();
  }
  const streak = calculateRhythmStreak();
  progressText.textContent = `${percent}% complete${streak ? ` • ${streak} day streak` : ""}`;
}

let celebrationContext = null;

function playCelebrationSound(kind = "task") {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  celebrationContext ||= new AudioContextClass();
  if (celebrationContext.state === "suspended") celebrationContext.resume();

  const themeRoot = activeEventTheme?.root || 220;
  const patterns = {
    task: [themeRoot, themeRoot * 1.25],
    day: [themeRoot, themeRoot * 1.25, themeRoot * 1.5, themeRoot * 2],
    week: [themeRoot / 2, themeRoot * 0.75, themeRoot, themeRoot * 1.25, themeRoot * 1.5, themeRoot * 2]
  };
  const notes = patterns[kind] || patterns.task;
  notes.forEach((frequency, index) => {
    const start = celebrationContext.currentTime + index * (kind === "week" ? 0.09 : 0.06);
    const oscillator = celebrationContext.createOscillator();
    const overtone = celebrationContext.createOscillator();
    const gain = celebrationContext.createGain();
    oscillator.type = activeEventTheme?.id === "diwali" ? "triangle" : "sine";
    overtone.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    overtone.frequency.setValueAtTime(frequency * 2, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(kind === "week" ? 0.07 : 0.045, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.48);
    oscillator.connect(gain);
    overtone.connect(gain);
    gain.connect(celebrationContext.destination);
    oscillator.start(start);
    overtone.start(start);
    oscillator.stop(start + 0.52);
    overtone.stop(start + 0.52);
  });
}

function updateLiveClock() {
  const clock = document.querySelector("#liveClock");
  if (!clock) return;
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}
updateLiveClock();
window.setInterval(updateLiveClock, 1000);

function calculateRhythmStreak() {
  let streak = 0;
  const cursorDate = new Date();
  while (true) {
    const key = localDateKey(cursorDate);
    if (localStorage.getItem(`my-rhythm-completed-${key}`) !== "done") break;
    streak += 1;
    cursorDate.setDate(cursorDate.getDate() - 1);
  }
  return streak;
}

function renderRules() {
  let ruleKey = "weekend";
  if (currentDay === "weekday" || currentDay === "friday") ruleKey = currentDay;
  if (currentDay === "saturday-school-half" || currentDay === "saturday-school-full") ruleKey = currentDay;

  const ruleSet = scheduleRules[ruleKey];
  rulesLabel.innerHTML = `${ruleSet.label} <span>RULES</span>`;
  rulesGrid.innerHTML = ruleSet.items.map((item, index) => `
    <article>
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${item[0]}</h3>
      <p>${item[1]}</p>
    </article>
  `).join("");
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const scheduleDay = tab.dataset.day;
    if (scheduleDay === "saturday-school-half" || scheduleDay === "saturday-school-full") {
      currentDay = scheduleDay;
      dayTabs.forEach((item) => {
        item.classList.toggle("active", item === tab);
        item.setAttribute("aria-selected", String(item === tab));
      });
      const saturday = new Date(calendarWeekStart);
      saturday.setDate(saturday.getDate() + 5);
      selectedCalendarDate = saturday;
      dayLabel.textContent = scheduleDay === "saturday-school-half" ? "SATURDAY / HALF DAY" : "SATURDAY / FULL DAY";
      renderSchedule();
      renderRules();
      renderCalendar();
      return;
    }
    let matchingDate = null;
    for (let index = 0; index < 7; index += 1) {
      const date = new Date(calendarWeekStart);
      date.setDate(date.getDate() + index);
      if (scheduleForDate(date) === scheduleDay) {
        if (scheduleDay !== "weekday" || (selectedCalendarDate.getDay() >= 1 && selectedCalendarDate.getDay() <= 4)) {
          matchingDate = date;
          if (localDateKey(date) === localDateKey(selectedCalendarDate)) break;
        }
      }
    }
    if (scheduleDay === "weekday" && selectedCalendarDate.getDay() >= 1 && selectedCalendarDate.getDay() <= 4) {
      matchingDate = new Date(selectedCalendarDate);
    }
    if (matchingDate) selectCalendarDay(matchingDate, false);
  });
});

const musicToggle = document.querySelector("#musicToggle");
let ambientContext = null;
let ambientTimer = null;
let ambientPlaying = false;
let ambientMaster = null;
let musicLimitTimer = null;
let lastMusicTick = Date.now();
const dailyMusicLimitSeconds = 2 * 60 * 60;

const ambientMelodies = [
  { name: "Quiet courage", root: 130.81, notes: [1, 1.125, 1.25, 1.5] },
  { name: "Morning focus", root: 146.83, notes: [1, 1.125, 1.3333, 1.5] },
  { name: "Soft determination", root: 164.81, notes: [1, 1.2, 1.3333, 1.5] },
  { name: "Dreamy progress", root: 110, notes: [1, 1.125, 1.25, 1.5, 1.3333] },
  { name: "Calm after effort", root: 174.61, notes: [1, 1.125, 1.3333, 1.5] }
];

function todayMelody() {
  return activeEventTheme ?
    { name: `${activeEventTheme.name} glow`, root: activeEventTheme.root, notes: activeEventTheme.notes } :
    ambientMelodies[[...localDateKey()].reduce((total, character) => total + character.charCodeAt(0), 0) % ambientMelodies.length];
}

function createAmbientTone(frequency, duration = 9, volume = 0.018) {
  if (!ambientContext || !ambientMaster) return;
  const now = ambientContext.currentTime;
  const oscillator = ambientContext.createOscillator();
  const overtone = ambientContext.createOscillator();
  const gain = ambientContext.createGain();
  const filter = ambientContext.createBiquadFilter();
  const shimmer = ambientContext.createOscillator();
  const shimmerGain = ambientContext.createGain();

  oscillator.type = "sine";
  overtone.type = "triangle";
  shimmer.type = "sine";
  oscillator.frequency.value = frequency;
  overtone.frequency.value = frequency * 1.5;
  shimmer.frequency.value = frequency * 2;
  filter.type = "lowpass";
  filter.frequency.value = 1100;
  shimmerGain.gain.value = 0.004;

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 1.6);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(filter);
  overtone.connect(filter);
  shimmer.connect(shimmerGain);
  shimmerGain.connect(filter);
  filter.connect(gain);
  gain.connect(ambientMaster);
  oscillator.start(now);
  overtone.start(now);
  shimmer.start(now);
  oscillator.stop(now + duration + 0.1);
  overtone.stop(now + duration + 0.1);
  shimmer.stop(now + duration + 0.1);
}

function playAmbientPattern() {
  if (!ambientPlaying) return;
  const melody = todayMelody();
  const step = Math.floor(ambientContext.currentTime / 5.2) % melody.notes.length;
  createAmbientTone(melody.root * melody.notes[step]);
}

function musicUsageKey() {
  return `my-rhythm-music-usage-${localDateKey()}`;
}

function getMusicUsageSeconds() {
  return Number(localStorage.getItem(musicUsageKey()) || 0);
}

function saveMusicUsageSeconds(seconds) {
  localStorage.setItem(musicUsageKey(), String(Math.min(dailyMusicLimitSeconds, Math.max(0, seconds))));
}

function isMusicLimitReached() {
  return getMusicUsageSeconds() >= dailyMusicLimitSeconds;
}

function formatMusicRemaining(seconds) {
  const remaining = Math.max(0, dailyMusicLimitSeconds - seconds);
  const totalMinutes = Math.ceil(remaining / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return hours > 0 || minutes > 0 ? `${hours}h ${String(minutes).padStart(2, "0")}m remaining today` : "Daily 2-hour music limit reached";
}

function updateMusicLimitUI() {
  const status = document.querySelector("#musicLimitStatus");
  const usedSeconds = getMusicUsageSeconds();
  const reached = usedSeconds >= dailyMusicLimitSeconds;
  if (status) {
    status.textContent = formatMusicRemaining(usedSeconds);
    status.classList.toggle("exhausted", reached);
  }
  document.querySelector("#musicSettings")?.classList.toggle("music-limit-reached", reached);
  document.querySelectorAll(".spotify-player-block").forEach((block) => {
    let lock = block.querySelector(".music-limit-lock");
    if (reached && !lock) {
      lock = document.createElement("div");
      lock.className = "music-limit-lock";
      lock.textContent = "Today's 2-hour music limit has ended. Playback returns at midnight.";
      block.appendChild(lock);
    } else if (!reached && lock) {
      lock.remove();
    }
  });
  if (reached) enforceMusicLimit();
}

function enforceMusicLimit() {
  if (ambientPlaying) stopAmbientMusic();
  document.querySelectorAll(".spotify-embed").forEach((embed) => {
    embed.removeAttribute("src");
  });
}

function isMusicPlaybackActive() {
  return ambientPlaying || (musicSettings?.classList.contains("open") && !document.hidden);
}

function tickMusicLimit() {
  const now = Date.now();
  const elapsed = Math.min(60, Math.floor((now - lastMusicTick) / 1000));
  lastMusicTick = now;
  if (elapsed <= 0 || document.hidden) return;
  if (isMusicPlaybackActive() && !isMusicLimitReached()) {
    saveMusicUsageSeconds(getMusicUsageSeconds() + elapsed);
    updateMusicLimitUI();
    saveRhythmToCloud().catch(() => {});
  }
}

async function startAmbientMusic() {
  if (isMusicLimitReached()) {
    updateMusicLimitUI();
    throw new Error("Today's 2-hour music limit has been reached.");
  }
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) throw new Error("Web Audio is not supported by this browser.");

  if (!ambientContext) {
    ambientContext = new AudioContextClass();
    ambientMaster = ambientContext.createGain();
    const savedVolume = Number(localStorage.getItem("my-rhythm-music-volume") ?? 55) / 100;
    ambientMaster.gain.value = savedVolume;
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

const musicSettingsToggle = document.querySelector("#musicSettingsToggle");
const musicSettings = document.querySelector("#musicSettings");
const musicVolume = document.querySelector("#musicVolume");
const musicMood = document.querySelector("#musicMood");

musicMood.textContent = todayMelody().name;
const savedVolume = Number(localStorage.getItem("my-rhythm-music-volume") ?? 55);
musicVolume.value = String(savedVolume);

musicSettingsToggle?.addEventListener("click", () => {
  const open = musicSettings.classList.toggle("open");
  musicSettings.setAttribute("aria-hidden", String(!open));
  document.querySelectorAll(".spotify-embed").forEach((embed) => {
    if (open && !isMusicLimitReached() && embed.dataset.src) {
      embed.src = embed.dataset.src;
    } else {
      embed.removeAttribute("src");
    }
  });
  updateMusicLimitUI();
});

musicVolume?.addEventListener("input", () => {
  localStorage.setItem("my-rhythm-music-volume", musicVolume.value);
  if (ambientMaster) ambientMaster.gain.setTargetAtTime(Number(musicVolume.value) / 100, ambientContext.currentTime, 0.08);
});

lastMusicTick = Date.now();
updateMusicLimitUI();
if (!musicLimitTimer) musicLimitTimer = window.setInterval(tickMusicLimit, 1000);

const focusToggle = document.querySelector("#focusToggle");
const focusPanel = document.querySelector("#focusPanel");
const focusTime = document.querySelector("#focusTime");
const focusShortTime = document.querySelector("#focusShortTime");
const focusStart = document.querySelector("#focusStart");
const focusReset = document.querySelector("#focusReset");
let focusSeconds = 25 * 60;
let focusInterval = null;

function renderFocusTime() {
  const minutes = Math.floor(focusSeconds / 60);
  const seconds = focusSeconds % 60;
  const label = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  focusTime.textContent = label;
  focusShortTime.textContent = label;
  document.title = focusInterval ? `${label} • My Rhythm` : "My Rhythm";
}

focusToggle?.addEventListener("click", () => {
  const open = focusPanel.classList.toggle("open");
  focusPanel.setAttribute("aria-hidden", String(!open));
});

focusStart?.addEventListener("click", () => {
  if (focusInterval) {
    window.clearInterval(focusInterval);
    focusInterval = null;
    focusStart.textContent = "Start";
    document.title = "My Rhythm";
    return;
  }
  focusStart.textContent = "Pause";
  focusInterval = window.setInterval(() => {
    focusSeconds -= 1;
    if (focusSeconds <= 0) {
      window.clearInterval(focusInterval);
      focusInterval = null;
      focusSeconds = 25 * 60;
      focusStart.textContent = "Start";
      document.title = "My Rhythm";
    }
    renderFocusTime();
  }, 1000);
  renderFocusTime();
});

focusReset?.addEventListener("click", () => {
  window.clearInterval(focusInterval);
  focusInterval = null;
  focusSeconds = 25 * 60;
  focusStart.textContent = "Start";
  renderFocusTime();
});

const rescueToggle = document.querySelector("#rescueToggle");
const rescuePanel = document.querySelector("#rescuePanel");
const rescueBackdrop = document.querySelector("#rescueBackdrop");
const rescueClose = document.querySelector("#rescueClose");
const rescueReason = document.querySelector("#rescueReason");
const rescueCreate = document.querySelector("#rescueCreate");
const rescueResult = document.querySelector("#rescueResult");
let rescueTime = 60;
let rescuePriority = "school";
let rescueClassStatus = "normal";

function openRescuePanel() {
  rescuePanel.classList.add("open");
  rescueBackdrop.classList.add("open");
  rescuePanel.setAttribute("aria-hidden", "false");
  rescueReason.focus();
}

function closeRescuePanel() {
  rescuePanel.classList.remove("open");
  rescueBackdrop.classList.remove("open");
  rescuePanel.setAttribute("aria-hidden", "true");
}

rescueToggle.addEventListener("click", openRescuePanel);
rescueClose.addEventListener("click", closeRescuePanel);
rescueBackdrop.addEventListener("click", closeRescuePanel);

document.querySelectorAll("#timeOptions button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#timeOptions button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    rescueTime = Number(button.dataset.time);
  });
});

document.querySelectorAll("#priorityOptions button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#priorityOptions button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    rescuePriority = button.dataset.priority;
  });
});

document.querySelectorAll("#classStatusOptions button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#classStatusOptions button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    rescueClassStatus = button.dataset.status;
  });
});

function escapeRescueText(value) {
  const element = document.createElement("div");
  element.textContent = value;
  return element.innerHTML;
}

function formatClock(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
}

function createRescuePlan() {
  const reason = rescueReason.value.trim();
  const text = reason.toLowerCase();
  let priority = rescuePriority;
  let classStatus = rescueClassStatus;

  if (/diwali|holiday|one week leave|week leave|classes leave|no vedantu|no class|cancelled|canceled|classes off/.test(text)) classStatus = "leave";
  else if (/class canceled|class cancelled/.test(text)) classStatus = "canceled";

  if (/tired|sick|ill|injury|headache|pain|exhaust/.test(text)) priority = "health";
  else if (/test|exam|homework|school|assignment/.test(text) && !/football/.test(text)) priority = "school";
  else if (/revision|revise/.test(text)) priority = "revision";
  else if (/jee|vedantu|question|math|physics|chemistry/.test(text)) priority = "jee";
  else if (/chore|plant|laundry|washing|clothes/.test(text)) priority = "chores";
  else if (/free time|extra time|excess time|nothing to do|diwali/.test(text)) priority = "extra";

  const start = new Date();
  start.setSeconds(0, 0);
  start.setMinutes(Math.ceil(start.getMinutes() / 15) * 15);

  let selected;
  let durations;

  if (rescueTime >= 180) {
    const breakMinutes = Math.round(rescueTime * 0.08 / 5) * 5;
    const studyMinutes = Math.round((rescueTime - breakMinutes * 2) * 0.34 / 5) * 5;
    const finalMinutes = rescueTime - studyMinutes * 2 - breakMinutes * 2;

    if (classStatus === "leave" || classStatus === "canceled" || priority === "extra") {
      selected = [
        ["Replace the missed JEE class", "Study the next unlearnt Vedantu topic or watch the previous lesson for one structured block."],
        ["Screen-free reset", "Drink water, stretch, walk or have a healthy snack."],
        ["JEE problem practice", "Attempt 8–12 medium questions. Mark doubts instead of instantly checking solutions."],
        ["Move and recharge", "Take a proper break. Avoid social media scrolling and protect your attention."],
        ["Complete the remaining priority", "Use the final block for school homework, revision, a weak JEE chapter or one useful buffer task."]
      ];
      durations = [studyMinutes, breakMinutes, studyMinutes, breakMinutes, finalMinutes];
      if (priority !== "extra" && priority !== "jee") priority = "extra";
    } else if (priority === "school") {
      selected = [
        ["Urgent school work", "Complete one deadline, test preparation or correction task before starting anything else."],
        ["Quick reset", "Stand, drink water and look away from screens."],
        ["School revision block", "Study notes and recall the topic before checking the book."],
        ["Break and reset", "Eat, stretch or take a short walk."],
        ["Advance tomorrow", "Use the remaining time for homework, weak chapters or packing the next day's bag."]
      ];
      durations = [studyMinutes, breakMinutes, studyMinutes, breakMinutes, finalMinutes];
    } else if (priority === "revision") {
      selected = [
        ["Active recall", "Close the book and write what you remember from the first priority topic."],
        ["Recovery break", "Drink water and rest your eyes."],
        ["Revision sprint", "Review mistakes, formulas or definitions, then attempt one mixed set."],
        ["Reset break", "Walk, stretch or eat lightly."],
        ["Final consolidation", "Make a compact recap and schedule weak topics for the next few days."]
      ];
      durations = [studyMinutes, breakMinutes, studyMinutes, breakMinutes, finalMinutes];
    } else {
      selected = [
        ["Focused JEE class block", "Study the highest-value JEE topic and write one formula or concept summary."],
        ["Recovery break", "Drink water, stretch and leave the desk."],
        ["Problem-solving block", "Attempt progressively harder JEE questions without using solutions immediately."],
        ["Reset break", "Eat or walk so the next block is not rushed."],
        ["School and doubt buffer", "Finish urgent homework or record and solve the doubts found today."]
      ];
      durations = [studyMinutes, breakMinutes, studyMinutes, breakMinutes, finalMinutes];
    }
  } else {
    const firstMinute = Math.max(30, Math.min(rescueTime * 0.55, rescueTime - 15));
    const breakMinute = Math.max(5, Math.round(rescueTime * 0.08 / 5) * 5);
    const remaining = rescueTime - firstMinute - breakMinute;
    const plans = {
      school: [
        ["Start with the deadline", "Complete one urgent homework or revision task first. Use notes only after 10 minutes of trying."],
        ["Quick recovery", "Drink water, stretch, and look away from screens."],
        ["Finish or submit", "Complete corrections, pack the required books, and write tomorrow's first task on paper."]
      ],
      jee: [
        ["Solve one weak topic", "Open the JEE topic you are weakest in and attempt 3–5 focused questions without notes."],
        ["Correct the mistakes", "Check solutions, mark the exact mistake, and write one short rule to remember."],
        ["Lock the progress", "Solve one final question and make a two-minute recap for tomorrow."]
      ],
      revision: [
        ["Recall first", "Cover the notes and write down everything you remember from one topic."],
        ["Check the gaps", "Compare with notes and mark weak ideas rather than rereading passively."],
        ["Test yourself", "Answer five questions or explain the topic aloud from memory."]
      ],
      extra: [
        ["Use the free slot wisely", "Replace a missing JEE class with one difficult topic, or finish the most urgent school task."],
        ["Reset your energy", "Take 10 minutes away from screens and reset your desk."],
        ["Advance the week", "Finish pending work, practice weak questions, or prepare tomorrow's materials."]
      ],
      health: [
        ["Recover first", "Eat something light, hydrate, and take 10 minutes away from study and screens."],
        ["Gentle reset", "Do slow stretching or take a quiet walk. Stop immediately if anything hurts."],
        ["Safe mini-task", "Complete only the most urgent 20-minute task, then protect sleep."]
      ],
      chores: [
        ["Do the fastest chore", "Water the plants, collect clothes, or start washing—choose the one that blocks tomorrow."],
        ["Clean reset", "Put the room and school bag back in order for five minutes."],
        ["Return to priority", "Use the remaining time for the most important school task."]
      ]
    };
    selected = plans[priority];
    durations = [firstMinute, breakMinute, remaining];
  }

  let cursorTime = new Date(start);
  const steps = selected.map((step, index) => {
    const finish = new Date(cursorTime.getTime() + durations[index] * 60000);
    const result = `<article class="rescue-step"><time>${formatClock(cursorTime)}–${formatClock(finish)}</time><div><strong>${step[0]}</strong><p>${step[1]}</p></div></article>`;
    cursorTime = finish;
    return result;
  }).join("");

  const statusText = classStatus === "leave"
    ? "Vedantu / class leave"
    : classStatus === "canceled"
      ? "Vedantu class canceled"
      : "Vedantu classes running";
  const reasonText = reason
    ? `Because: “${escapeRescueText(reason)}” · ${statusText}`
    : `A fresh plan based on today's changes. · ${statusText}`;
  rescueResult.innerHTML = `
    <div class="rescue-plan">
      <div class="rescue-plan-head"><h3>Your rescue plan</h3><span>${rescueTime} MINUTES</span></div>
      <p style="font-size:11px;line-height:1.6;opacity:.48;margin:0 0 12px">${reasonText}</p>
      ${steps}
    </div>`;
  localStorage.setItem("my-rhythm-rescue-plan", rescueResult.innerHTML);
}

rescueCreate.addEventListener("click", createRescuePlan);
rescueReason.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) createRescuePlan();
});
const savedRescuePlan = localStorage.getItem("my-rhythm-rescue-plan");
if (savedRescuePlan) rescueResult.innerHTML = savedRescuePlan;

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
  const colors = [
    "238,234,221",
    "154,130,255",
    "255,159,195",
    "166,216,199",
    "229,202,122"
  ];
  stars = Array.from({ length: 180 }, (_, index) => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    vx: (Math.random() - .5) * (index % 9 === 0 ? .32 : .14),
    vy: (Math.random() - .5) * (index % 7 === 0 ? .28 : .12),
    radius: index % 19 === 0 ? Math.random() * 1.8 + 1 : Math.random() * .75 + .25,
    alpha: Math.random() * .5 + .18,
    color: colors[index % colors.length],
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: Math.random() * .018 + .008
  }));
}

function drawSky() {
  context.clearRect(0, 0, innerWidth, innerHeight);
  stars.forEach((star) => {
    star.x += star.vx; star.y += star.vy;
    star.pulse += star.pulseSpeed;
    if (star.x < 0 || star.x > innerWidth) star.vx *= -1;
    if (star.y < 0 || star.y > innerHeight) star.vy *= -1;
    const flicker = star.alpha + Math.sin(star.pulse) * .12;
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(${star.color},${Math.max(.08, flicker)})`;
    if (star.radius > 1.4) {
      context.shadowBlur = 12;
      context.shadowColor = `rgba(${star.color},.45)`;
    } else {
      context.shadowBlur = 0;
    }
    context.fill();
  });
  context.shadowBlur = 0;
  requestAnimationFrame(drawSky);
}

window.addEventListener("resize", resizeSky);
resizeSky();
drawSky();
selectCalendarDay(new Date());
renderCalendar();
