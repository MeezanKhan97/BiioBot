/* =========================================================
   BioBot — script.js
   Everything runs locally in the browser. No backend, no
   API calls, no external data. The "knowledge" the chatbot
   uses lives in the KNOWLEDGE object below — edit that
   object to add or change what BioBot can talk about.
   ========================================================= */

/* ---------------------------------------------------------
   1. KNOWLEDGE BASE
   Each topic has:
     - title:     shown as a small heading in the chat bubble
     - keywords:  words/phrases that trigger this topic when
                  the user types a free-text question
     - html:      the actual answer, as ready-to-insert HTML
   --------------------------------------------------------- */
const KNOWLEDGE = {

  whatIsBiomass: {
    title: "What is biomass?",
    keywords: ["what is biomass", "define biomass", "biomass meaning", "biomass"],
    html: `
      <p><strong>Biomass</strong> is organic material that comes from plants and animals — wood,
      crop residue, animal dung, food and kitchen waste, and similar matter. It stores energy
      that originally came from the sun, captured by plants through photosynthesis.</p>
      <p>In India, biomass has traditionally been used as fuel for cooking and heating, and today
      it's also processed into modern forms like biogas, pellets and briquettes.</p>
    `
  },

  typesOfBiomass: {
    title: "Types of biomass",
    keywords: ["types of biomass", "kinds of biomass", "biomass types", "categories of biomass"],
    html: `
      <p>Biomass used in India broadly falls into a few groups:</p>
      <ul>
        <li><strong>Woody biomass</strong> — firewood, sawdust, wood waste</li>
        <li><strong>Agricultural residue</strong> — crop stalks, husks, straw, stubble</li>
        <li><strong>Animal waste</strong> — cow dung and other livestock manure</li>
        <li><strong>Organic/kitchen waste</strong> — food scraps and other household organic waste</li>
        <li><strong>Other plant matter</strong> — dry leaves, forest litter</li>
      </ul>
      <p>Try the <strong>Biomass Explorer</strong> section below to see a full profile of each.</p>
    `
  },

  firewood: {
    title: "Firewood",
    keywords: ["firewood", "wood fuel", "fuel wood", " wood ", "chulha wood"],
    html: `
      <p><strong>Source:</strong> Branches, twigs and logs, usually from locally available trees.</p>
      <p><strong>Traditional use:</strong> Burned directly in a chulha (traditional stove) or open
      hearth for cooking and heating — one of the oldest and most widespread biomass fuels in India.</p>
      <p><strong>Benefits:</strong> Widely available in rural areas, low or no direct cost, simple to use.</p>
      <p><strong>Limitations:</strong> Open-fire burning is inefficient, produces significant smoke
      that affects indoor air quality, and unsustainable collection can contribute to deforestation.</p>
    `
  },

  cowDung: {
    title: "Cow-dung cakes",
    keywords: ["cow dung", "cow-dung", "dung cake", "gobar", "cattle dung"],
    html: `
      <p><strong>Source:</strong> Dung from cattle and other livestock.</p>
      <p><strong>Traditional use:</strong> Shaped by hand into flat cakes, sun-dried, and burned
      directly as fuel for cooking and heating in many rural households.</p>
      <p><strong>Benefits:</strong> Freely available where livestock are kept, costs nothing to produce,
      and using it as fuel also disposes of the waste usefully.</p>
      <p><strong>Limitations:</strong> Direct burning produces smoke and is a relatively inefficient
      way to use the material's energy — the same dung can generate far more usable energy (as biogas)
      through anaerobic digestion instead of direct combustion.</p>
    `
  },

  agriResidue: {
    title: "Agricultural residue",
    keywords: ["agricultural residue", "crop residue", "agricultural waste", "stubble", "straw", "husk", "farm waste"],
    html: `
      <p><strong>Source:</strong> Leftover plant material after harvest — stalks, husks, straw and stubble.</p>
      <p><strong>Traditional use:</strong> Sometimes used directly as fuel or fodder; unfortunately,
      large amounts are also burned in open fields to quickly clear land for the next crop.</p>
      <p><strong>Benefits:</strong> Abundant after every harvest season, and it's a resource that
      already exists rather than one that needs to be grown separately.</p>
      <p><strong>Limitations:</strong> Open burning causes heavy air pollution and wastes nutrients
      that could return to the soil. Collection and storage also require some effort and space.</p>
      <p><strong>Better paths:</strong> Controlled processing into pellets/briquettes, composting,
      or use as animal fodder are generally better than open burning.</p>
    `
  },

  benefitsBiomass: {
    title: "Benefits of biomass",
    keywords: ["benefits of biomass", "advantages of biomass", "why use biomass", "biomass benefits"],
    html: `
      <ul>
        <li><strong>Locally available</strong> — often doesn't need to be transported long distances</li>
        <li><strong>Affordable</strong> — frequently low-cost or free, especially in rural areas</li>
        <li><strong>Renewable</strong> — replenished naturally as plants regrow and waste is generated</li>
        <li><strong>Waste utilisation</strong> — puts agricultural and organic waste to use instead of discarding it</li>
        <li><strong>Supports rural livelihoods</strong> — collection, processing and sale of biomass can provide income</li>
      </ul>
    `
  },

  limitationsBiomass: {
    title: "Limitations of traditional biomass",
    keywords: ["limitations of biomass", "limitations of traditional biomass", "problems with biomass", "disadvantages of biomass", "drawbacks"],
    html: `
      <ul>
        <li><strong>Smoke and indoor air pollution</strong> from open-fire and traditional-stove combustion</li>
        <li><strong>Low combustion efficiency</strong> — much of the fuel's energy is wasted as unburned material or heat loss</li>
        <li><strong>Deforestation risk</strong> if firewood is collected faster than trees can regrow</li>
        <li><strong>Open burning of residue</strong> contributes to air pollution and soil nutrient loss</li>
        <li><strong>Labour-intensive</strong> — collecting and preparing traditional biomass takes considerable time, often for women and children</li>
      </ul>
      <p>This is exactly why modern bioenergy approaches — biogas, pellets, improved stoves — exist
      alongside traditional practice, not to erase it.</p>
    `
  },

  biogas: {
    title: "What is biogas?",
    keywords: ["what is biogas", "biogas", "gobar gas", "biogas plant", "anaerobic digestion"],
    html: `
      <p><strong>Biogas</strong> is a gas mixture (mostly methane and carbon dioxide) produced when
      organic matter — cow dung, kitchen waste, crop residue — breaks down in the absence of oxygen,
      a process called <strong>anaerobic digestion</strong>, inside a biogas plant/digester.</p>
      <p><strong>Uses:</strong> Cooking fuel, lighting, and sometimes small-scale electricity generation.</p>
      <p><strong>Bonus:</strong> The leftover material, called <strong>digestate</strong>, is a nutrient-rich
      organic manure — so a biogas plant produces clean fuel and useful fertiliser from the same input.</p>
      <p>Compare: <em>Cow dung → dung cakes → direct combustion</em> (traditional) versus
      <em>Cow dung + organic waste → anaerobic digestion → biogas + digestate</em> (modern).</p>
    `
  },

  modernBioenergy: {
    title: "Modern bioenergy",
    keywords: ["modern bioenergy", "bioenergy", "biomass pellets", "pellets", "briquettes", "biomass briquettes", "renewable energy"],
    html: `
      <p>Modern bioenergy takes the same raw materials used traditionally and processes them more
      efficiently:</p>
      <ul>
        <li><strong>Biogas</strong> — anaerobic digestion of dung/organic waste into gas + manure</li>
        <li><strong>Biomass pellets</strong> — residue or sawdust compressed into small, dense, easy-to-store pellets</li>
        <li><strong>Biomass briquettes</strong> — larger compacted blocks made from crop residue or wood waste</li>
        <li><strong>Improved/efficient combustion</strong> — improved cookstoves and controlled-combustion
        devices that burn traditional fuels more completely, with less smoke</li>
      </ul>
      <p>These aren't automatic upgrades for every situation — the right choice depends on the
      material and local conditions. See the visual flow in the <strong>Bioenergy</strong> section.</p>
    `
  },

  sustainableManagement: {
    title: "Sustainable fuel management",
    keywords: ["sustainable fuel management", "sustainability", "sustainable fuel", "manage biomass", "fuel management", "pollution", "smoke", "traditional fuel"],
    html: `
      <p>Practical, everyday ways to manage biomass fuel more sustainably:</p>
      <ul>
        <li>Avoid unnecessary open burning of crop residue or waste</li>
        <li>Use biomass fuel efficiently — dry fuel, right-sized fires, well-maintained stoves</li>
        <li>Source firewood from sustainably managed or permitted supplies</li>
        <li>Reduce fuel wastage in storage and use</li>
        <li>Consider appropriate cleaner technologies, like improved cookstoves, where feasible</li>
        <li>Properly manage agricultural and organic waste rather than discarding or burning it</li>
        <li>Consider biogas where suitable — especially where livestock waste is already generated</li>
        <li>Store biomass properly, kept dry and away from contamination</li>
      </ul>
    `
  }
};

/* Fallback message when nothing matches */
const FALLBACK_MESSAGE = "I\u2019m currently focused on biomass and sustainable bioenergy. Try asking me about biomass fuels, biogas, agricultural residue, traditional fuels or sustainable fuel management.";

/* Quick-question buttons: label shown to the user -> topic key in KNOWLEDGE */
const QUICK_QUESTIONS = [
  { label: "What is biomass?", topic: "whatIsBiomass" },
  { label: "Types of biomass", topic: "typesOfBiomass" },
  { label: "Firewood", topic: "firewood" },
  { label: "Cow-dung cakes", topic: "cowDung" },
  { label: "Agricultural residue", topic: "agriResidue" },
  { label: "Benefits of biomass", topic: "benefitsBiomass" },
  { label: "Limitations of traditional biomass", topic: "limitationsBiomass" },
  { label: "What is biogas?", topic: "biogas" },
  { label: "Modern bioenergy", topic: "modernBioenergy" },
  { label: "Sustainable fuel management", topic: "sustainableManagement" }
];

/* ---------------------------------------------------------
   2. FREE-TEXT MATCHING
   Very small keyword-scoring "engine": count how many of a
   topic's keywords appear in the user's message, and answer
   with whichever topic scores highest (if any score > 0).
   --------------------------------------------------------- */
function findBestTopic(userText){
  const text = " " + userText.toLowerCase() + " ";
  let bestKey = null;
  let bestScore = 0;

  for (const key in KNOWLEDGE){
    const topic = KNOWLEDGE[key];
    let score = 0;
    topic.keywords.forEach(kw => {
      if (text.includes(kw.toLowerCase())) score += kw.trim().includes(" ") ? 2 : 1; // phrase matches count more
    });
    if (score > bestScore){
      bestScore = score;
      bestKey = key;
    }
  }
  return bestKey; // null if nothing matched
}

/* Friendly handling for simple greetings, outside the main KB */
function tryGreeting(userText){
  const text = userText.toLowerCase().trim();
  if (/^(hi|hello|hey|namaste)\b/.test(text)){
    return "Hello! Ask me about biomass, traditional fuels like firewood and cow dung, biogas, or sustainable fuel management \uD83C\uDF31";
  }
  if (/thank/.test(text)){
    return "You're welcome! Let me know if you'd like to explore another biomass or bioenergy topic.";
  }
  return null;
}

/* ---------------------------------------------------------
   3. CHAT WINDOW RENDERING
   --------------------------------------------------------- */
const chatWindow = document.getElementById("chatWindow");

function addMessage(html, sender){
  const bubble = document.createElement("div");
  bubble.className = "msg " + (sender === "bot" ? "msg-bot" : "msg-user");
  bubble.innerHTML = html;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function addUserMessage(text){
  // Escape any HTML the user typed, then show as plain text
  const safe = document.createElement("div");
  safe.textContent = text;
  addMessage(`<p>${safe.innerHTML}</p>`, "user");
}

function addBotTopic(topicKey){
  const topic = KNOWLEDGE[topicKey];
  addMessage(topic.html, "bot");
}

function addBotPlainText(text){
  addMessage(`<p>${text}</p>`, "bot");
}

function respondTo(userText){
  const greeting = tryGreeting(userText);
  if (greeting){
    addBotPlainText(greeting);
    return;
  }
  const topicKey = findBestTopic(userText);
  if (topicKey){
    addBotTopic(topicKey);
  } else {
    addBotPlainText(FALLBACK_MESSAGE);
  }
}

/* ---------------------------------------------------------
   4. WIRE UP THE CHAT UI
   --------------------------------------------------------- */
function initChat(){
  // Welcome message
  addMessage(
    `<p><strong>Hello! I\u2019m BioBot \uD83C\uDF31</strong></p>
     <p>I can help you learn about biomass, traditional fuels, bioenergy and sustainable fuel management.</p>
     <p>What would you like to know?</p>`,
    "bot"
  );

  // Suggested question chips
  const suggestionsBar = document.getElementById("chatSuggestions");
  QUICK_QUESTIONS.forEach(q => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = q.label;
    chip.addEventListener("click", () => {
      addUserMessage(q.label);
      // tiny delay so the reply feels conversational, not instant
      setTimeout(() => addBotTopic(q.topic), 250);
    });
    suggestionsBar.appendChild(chip);
  });

  // Free-text form
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addUserMessage(text);
    input.value = "";
    setTimeout(() => respondTo(text), 250);
  });
}

/* ---------------------------------------------------------
   5. BIOMASS EXPLORER
   --------------------------------------------------------- */
const EXPLORER_ITEMS = [
  {
    key: "firewood",
    icon: "\uD83C\uDF32",
    label: "Firewood",
    whatItIs: "Branches, twigs and logs collected from trees, used as a direct combustion fuel.",
    traditionalUse: "Burned in a chulha or open hearth for cooking and heating.",
    modernUses: "Feedstock for wood pellets/briquettes; burned in improved, more efficient cookstoves.",
    benefits: "Widely available in rural and forested areas; simple to use; low direct cost.",
    limitations: "Inefficient open-fire combustion, smoke and indoor air pollution, deforestation risk if over-harvested.",
    sustainableTip: "Source from managed woodlots or permitted supply, use seasoned (dry) wood, and prefer improved stoves."
  },
  {
    key: "cowdung",
    icon: "\uD83D\uDC04",
    label: "Cow dung",
    whatItIs: "Manure from cattle and other livestock, rich in organic matter.",
    traditionalUse: "Shaped into sun-dried cakes and burned directly for cooking and heating.",
    modernUses: "Feedstock for biogas plants via anaerobic digestion, producing gas plus nutrient-rich digestate manure.",
    benefits: "Freely available wherever livestock are kept; using it as fuel also manages the waste.",
    limitations: "Direct burning is smoky and energy-inefficient compared to biogas conversion.",
    sustainableTip: "Where feasible, route dung to a biogas digester instead of direct burning, to capture far more of its energy."
  },
  {
    key: "agriresidue",
    icon: "\uD83C\uDF3E",
    label: "Agricultural residue",
    whatItIs: "Leftover plant material after harvest — stalks, husks, straw and stubble.",
    traditionalUse: "Sometimes used as fuel or fodder; commonly burned in open fields to clear land quickly.",
    modernUses: "Compressed into pellets/briquettes, composted, or used as controlled-processing feedstock.",
    benefits: "Abundant after every harvest; already produced as a by-product, not grown separately.",
    limitations: "Open burning causes heavy air pollution and wastes soil nutrients; needs collection and storage effort.",
    sustainableTip: "Avoid open burning — compost it, use it as fodder, or process it into pellets/briquettes instead."
  },
  {
    key: "dryleaves",
    icon: "\uD83C\uDF42",
    label: "Dry leaves",
    whatItIs: "Fallen, dried plant leaves and forest litter.",
    traditionalUse: "Occasionally burned as kindling or, more often, swept and discarded/burned as \"waste\".",
    modernUses: "Well suited to composting into organic manure rather than combustion, in most cases.",
    benefits: "Freely available, easy to collect from gardens, farms and forest floors.",
    limitations: "Low energy density as fuel; burning produces smoke for relatively little heat value.",
    sustainableTip: "Composting is usually the better path for dry leaves — it returns nutrients to soil instead of releasing smoke."
  },
  {
    key: "organicwaste",
    icon: "\uD83C\uDF5A",
    label: "Organic / kitchen waste",
    whatItIs: "Food scraps and other biodegradable household waste.",
    traditionalUse: "Historically often discarded, or fed to livestock where possible.",
    modernUses: "Strong candidate for small-scale or community biogas digesters, alongside composting.",
    benefits: "Generated daily in every household; diverting it reduces landfill waste and pollution.",
    limitations: "Needs proper segregation from non-organic waste before it can be processed effectively.",
    sustainableTip: "Segregate organic waste at source, and compost it or feed it into a biogas system where available."
  }
];

function initExplorer(){
  const grid = document.getElementById("explorerGrid");
  const detail = document.getElementById("explorerDetail");

  EXPLORER_ITEMS.forEach(item => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "explorer-item";
    btn.setAttribute("data-key", item.key);
    btn.innerHTML = `<span class="icon" aria-hidden="true">${item.icon}</span><span class="label">${item.label}</span>`;

    btn.addEventListener("click", () => {
      // toggle active state
      grid.querySelectorAll(".explorer-item").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      detail.innerHTML = `
        <h3>${item.icon} ${item.label}</h3>
        <p>${item.whatItIs}</p>
        <dl>
          <dt>Traditional use</dt><dd>${item.traditionalUse}</dd>
          <dt>Possible modern uses</dt><dd>${item.modernUses}</dd>
          <dt>Benefits</dt><dd>${item.benefits}</dd>
          <dt>Limitations</dt><dd>${item.limitations}</dd>
          <dt>Sustainable management</dt><dd>${item.sustainableTip}</dd>
        </dl>
      `;
    });

    grid.appendChild(btn);
  });
}

/* ---------------------------------------------------------
   6. QUIZ
   --------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  {
    question: "What is biomass?",
    options: [
      "Organic material from plants and animals that stores energy",
      "A type of fossil fuel found underground",
      "A synthetic chemical used in batteries",
      "A mineral mined from rock"
    ],
    correct: 0
  },
  {
    question: "What process converts cow dung and organic waste into biogas?",
    options: ["Combustion", "Anaerobic digestion", "Distillation", "Composting only"],
    correct: 1
  },
  {
    question: "Which is a key limitation of traditional open-fire firewood burning?",
    options: [
      "It produces no smoke at all",
      "It is more efficient than any modern stove",
      "It produces smoke and burns fuel inefficiently",
      "It requires electricity to operate"
    ],
    correct: 2
  },
  {
    question: "What is 'digestate', produced alongside biogas?",
    options: [
      "A toxic waste product with no use",
      "A nutrient-rich organic manure",
      "A type of biomass pellet",
      "Purified drinking water"
    ],
    correct: 1
  },
  {
    question: "Which practice best supports sustainable fuel management?",
    options: [
      "Burning all crop residue in open fields after harvest",
      "Collecting firewood faster than trees can regrow",
      "Using biomass efficiently and avoiding unnecessary open burning",
      "Discarding kitchen waste rather than composting or digesting it"
    ],
    correct: 2
  },
  {
    question: "Biomass pellets and briquettes are typically made from...",
    options: [
      "Crushed rock and sand",
      "Compressed agricultural residue, sawdust or wood waste",
      "Refined crude oil",
      "Recycled plastic only"
    ],
    correct: 1
  }
];

let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function renderQuizQuestion(){
  const shell = document.getElementById("quizShell");
  const q = QUIZ_QUESTIONS[quizIndex];
  quizAnswered = false;

  const optionsHtml = q.options.map((opt, i) =>
    `<button type="button" class="quiz-option" data-index="${i}">${opt}</button>`
  ).join("");

  shell.innerHTML = `
    <div class="quiz-card">
      <p class="quiz-progress">Question ${quizIndex + 1} of ${QUIZ_QUESTIONS.length} &middot; Score: ${quizScore}</p>
      <p class="quiz-question">${q.question}</p>
      <div class="quiz-options">${optionsHtml}</div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      <div class="quiz-actions" id="quizActions"></div>
    </div>
  `;

  const optionButtons = shell.querySelectorAll(".quiz-option");
  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (quizAnswered) return;
      quizAnswered = true;
      const chosen = parseInt(btn.getAttribute("data-index"), 10);
      const isCorrect = chosen === q.correct;
      if (isCorrect) quizScore++;

      optionButtons.forEach((b, i) => {
        b.disabled = true;
        if (i === q.correct) b.classList.add("correct");
        else if (i === chosen) b.classList.add("incorrect");
      });

      document.getElementById("quizFeedback").textContent = isCorrect
        ? "Correct!"
        : `Not quite — the correct answer is: "${q.options[q.correct]}"`;

      const actions = document.getElementById("quizActions");
      const nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "btn btn-primary";
      nextBtn.textContent = (quizIndex === QUIZ_QUESTIONS.length - 1) ? "See result" : "Next question";
      nextBtn.addEventListener("click", () => {
        quizIndex++;
        if (quizIndex < QUIZ_QUESTIONS.length){
          renderQuizQuestion();
        } else {
          renderQuizResult();
        }
      });
      actions.appendChild(nextBtn);
    });
  });
}

function renderQuizResult(){
  const shell = document.getElementById("quizShell");
  const total = QUIZ_QUESTIONS.length;
  let message;
  if (quizScore === total) message = "Excellent! You've got a strong grip on biomass and bioenergy basics.";
  else if (quizScore >= total * 0.6) message = "Good work! You know the essentials — revisit a topic or two above to fill any gaps.";
  else message = "Worth another look — try chatting with BioBot about the topics above, then retake the quiz.";

  shell.innerHTML = `
    <div class="quiz-card quiz-result">
      <p class="quiz-question">Quiz complete</p>
      <p class="score">${quizScore} / ${total}</p>
      <p>${message}</p>
      <div class="quiz-actions">
        <button type="button" class="btn btn-primary" id="quizRetry">Retake quiz</button>
      </div>
    </div>
  `;
  document.getElementById("quizRetry").addEventListener("click", () => {
    quizIndex = 0;
    quizScore = 0;
    renderQuizQuestion();
  });
}

function initQuiz(){
  quizIndex = 0;
  quizScore = 0;
  renderQuizQuestion();
}

/* ---------------------------------------------------------
   7. MOBILE NAV TOGGLE
   --------------------------------------------------------- */
function initNav(){
  const toggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  toggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  // Close the mobile menu after a link is tapped
  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------
   8. INITIALISE EVERYTHING ONCE THE PAGE LOADS
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initChat();
  initExplorer();
  initQuiz();
});
