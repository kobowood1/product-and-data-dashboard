const testers = [
  { name: "Ives Machiz", date: "2026-05-27", segment: "Finance teaching", department: "WPC Finance", role: "Clinical Assistant Professor" },
  { name: "Caitlyn Zang", date: "2026-06-03", segment: "Health programs", department: "Edson College - BHP", role: "Associate Program Director" },
  { name: "Renette Makanoeich", date: "2026-05-29", segment: "Human resources", department: "Office of Human Resources", role: "Sr. HR Business Partner" },
  { name: "Celia Coochwytewa", date: "2026-05-29", segment: "Nursing operations", department: "Edson College of Nursing and Health Innovation", role: "Assistant Director, Academic Operations" },
  { name: "Matt Keating", date: "2026-05-26", segment: "Instructional design", department: "Edson College", role: "Instructional Designer" },
  { name: "Michael Weiland", date: "2026-05-20", segment: "Academic leadership", department: "WPC", role: "Director" },
  { name: "OTENG NTSWENG", date: "2026-06-04", segment: "Information systems", department: "Information Systems", role: "Clinical Assistant Professor" },
  { name: "Dan Mazzola", date: "2026-06-04", segment: "Information systems", department: "Information Systems/WPC", role: "Clinical Professor/Assistant Chair/Faculty Director for AI in Business and MS ISM" }
];

const signals = [
  {
    tester: "Ives Machiz",
    segment: "Finance teaching",
    theme: "Realism and Conversational Quality",
    type: "Positive",
    priority: "P1",
    impact: 8,
    effort: 4,
    evidence: "Very realistic, human and financial concerns were on point, emotions and background familiarity were strong.",
    insight: "The avatar can already carry role-play realism when the scenario, persona, and evaluation rubric are aligned."
  },
  {
    tester: "Ives Machiz",
    segment: "Finance teaching",
    theme: "Evaluation and Evidence Artifacts",
    type: "Feature Request",
    priority: "P1",
    impact: 8,
    effort: 3,
    evidence: "Wanted a printout of the detailed evaluation feedback.",
    insight: "Evaluation output is valuable enough to become a durable learner/instructor artifact."
  },
  {
    tester: "Ives Machiz",
    segment: "Finance teaching",
    theme: "Instructor Controls and Customization",
    type: "Feature Request",
    priority: "P2",
    impact: 6,
    effort: 3,
    evidence: "Requested an optional pause button for instructors to take notes and make tweaks.",
    insight: "Facilitation controls matter for instructors who are testing, observing, or tuning simulations."
  },
  {
    tester: "Ives Machiz",
    segment: "Finance teaching",
    theme: "Identity and Personalization",
    type: "Risk",
    priority: "P1",
    impact: 7,
    effort: 2,
    evidence: "The avatar called the tester John, which felt unsettling.",
    insight: "Basic learner identity handling is a low-effort trust builder."
  },
  {
    tester: "Ives Machiz",
    segment: "Finance teaching",
    theme: "Safety and Guardrails",
    type: "Risk",
    priority: "P0",
    impact: 9,
    effort: 6,
    evidence: "Wanted guardrails so students cannot force inappropriate behavior or capture regrettable outputs.",
    insight: "Safety controls and screen-recording assumptions need to be treated as launch criteria."
  },
  {
    tester: "Caitlyn Zang",
    segment: "Health programs",
    theme: "Realism and Conversational Quality",
    type: "Positive",
    priority: "P1",
    impact: 8,
    effort: 4,
    evidence: "Audio-to-voice synchronization was excellent and created a more authentic conversational experience.",
    insight: "Voice synchronization is a differentiated strength and should be protected as a quality bar."
  },
  {
    tester: "Caitlyn Zang",
    segment: "Health programs",
    theme: "Scenario and Context Fit",
    type: "Risk",
    priority: "P0",
    impact: 9,
    effort: 6,
    evidence: "The avatar centered nursing and physician-oriented perspectives that may not match BHP courses.",
    insight: "Professional-role assumptions can make the experience feel misaligned for interdisciplinary programs."
  },
  {
    tester: "Caitlyn Zang",
    segment: "Health programs",
    theme: "Learner Scaffolding",
    type: "Feature Request",
    priority: "P0",
    impact: 9,
    effort: 5,
    evidence: "Asked for adjustable difficulty levels, learner profiles, hints, and productive mistake recovery.",
    insight: "The same avatar must support novice and advanced learners without requiring unusual assertiveness."
  },
  {
    tester: "Caitlyn Zang",
    segment: "Health programs",
    theme: "Instructor Controls and Customization",
    type: "Feature Request",
    priority: "P1",
    impact: 8,
    effort: 6,
    evidence: "Requested customization of avatar identities, professions, communication styles, and complexity levels.",
    insight: "Instructor-configurable persona settings are key to scaling beyond one discipline."
  },
  {
    tester: "Caitlyn Zang",
    segment: "Health programs",
    theme: "Representation and Inclusion",
    type: "Risk",
    priority: "P1",
    impact: 7,
    effort: 5,
    evidence: "Suggested diversifying avatar demographics and avoiding a default White male persona.",
    insight: "Representation is part of instructional fit, not a cosmetic preference."
  },
  {
    tester: "Renette Makanoeich",
    segment: "Human resources",
    theme: "Knowledge Accuracy and Grounding",
    type: "Risk",
    priority: "P0",
    impact: 10,
    effort: 7,
    evidence: "The avatar hallucinated website addresses and provided the wrong SPP policy.",
    insight: "Knowledge-grounded responses are mandatory before HR or policy use cases can be trusted."
  },
  {
    tester: "Renette Makanoeich",
    segment: "Human resources",
    theme: "Voice, Timing, and Pacing",
    type: "Risk",
    priority: "P1",
    impact: 7,
    effort: 4,
    evidence: "The avatar spoke too fast and listed capabilities before the user could state a need.",
    insight: "Conversation pacing should give users room to initiate and redirect."
  },
  {
    tester: "Renette Makanoeich",
    segment: "Human resources",
    theme: "Knowledge Accuracy and Grounding",
    type: "Feature Request",
    priority: "P0",
    impact: 9,
    effort: 7,
    evidence: "Expected the avatar to use Check-In Bot knowledge base data for HR business partner information.",
    insight: "The experience needs explicit knowledge-base retrieval and freshness boundaries."
  },
  {
    tester: "Celia Coochwytewa",
    segment: "Nursing operations",
    theme: "Scenario and Context Fit",
    type: "Risk",
    priority: "P1",
    impact: 8,
    effort: 4,
    evidence: "A clinical patient scenario should show a hospital background and patient gown.",
    insight: "Visual setting and wardrobe are part of simulation authenticity."
  },
  {
    tester: "Celia Coochwytewa",
    segment: "Nursing operations",
    theme: "Flow Clarity and Completion",
    type: "Feature Request",
    priority: "P0",
    impact: 9,
    effort: 3,
    evidence: "Users need instructions to say provide feedback, use the feedback button correctly, and end the call.",
    insight: "Session-start and session-end guidance are immediate usability fixes."
  },
  {
    tester: "Celia Coochwytewa",
    segment: "Nursing operations",
    theme: "Voice, Timing, and Pacing",
    type: "Risk",
    priority: "P1",
    impact: 7,
    effort: 5,
    evidence: "Reported a recurring stutter in the avatar speech.",
    insight: "Speech defects break immersion even when the scenario is otherwise strong."
  },
  {
    tester: "Celia Coochwytewa",
    segment: "Nursing operations",
    theme: "Realism and Conversational Quality",
    type: "Positive",
    priority: "P2",
    impact: 7,
    effort: 4,
    evidence: "Avatar emotions and responses matched the scenario; conversation felt smooth and natural.",
    insight: "Emotional alignment is a repeated strength across domains."
  },
  {
    tester: "Matt Keating",
    segment: "Instructional design",
    theme: "Realism and Conversational Quality",
    type: "Positive",
    priority: "P1",
    impact: 8,
    effort: 4,
    evidence: "Felt more natural over time after an initial uncanny valley effect.",
    insight: "Onboarding can help users move past first-contact discomfort."
  },
  {
    tester: "Matt Keating",
    segment: "Instructional design",
    theme: "Safety and Guardrails",
    type: "Positive",
    priority: "P1",
    impact: 8,
    effort: 5,
    evidence: "When asked inappropriate political questions, it redirected back to medical questions naturally.",
    insight: "Some guardrail behavior is already working and should be regression-tested."
  },
  {
    tester: "Matt Keating",
    segment: "Instructional design",
    theme: "Evaluation and Evidence Artifacts",
    type: "Feature Request",
    priority: "P1",
    impact: 8,
    effort: 4,
    evidence: "Requested a written record of the exchange so students can submit the conversation to instructors.",
    insight: "Transcripts unlock grading, reflection, and LMS-friendly assignment workflows."
  },
  {
    tester: "Matt Keating",
    segment: "Instructional design",
    theme: "Scenario and Context Fit",
    type: "Feature Request",
    priority: "P1",
    impact: 7,
    effort: 4,
    evidence: "Needs appropriate setting, patient wardrobe, and testing with clear instructions and an assignment.",
    insight: "Avatar quality needs to be evaluated inside full learning-design context."
  },
  {
    tester: "Michael Weiland",
    segment: "Academic leadership",
    theme: "Voice, Timing, and Pacing",
    type: "Risk",
    priority: "P1",
    impact: 7,
    effort: 4,
    evidence: "Nursing school voice did not match the person; journalism timing was rushed.",
    insight: "Voice-persona match and word timing are visible quality checks for each avatar."
  },
  {
    tester: "Michael Weiland",
    segment: "Academic leadership",
    theme: "Flow Clarity and Completion",
    type: "Risk",
    priority: "P2",
    impact: 5,
    effort: 2,
    evidence: "The initial Starting Call screen felt weird.",
    insight: "Small UI copy and state changes can reduce early confusion."
  },
  {
    tester: "Michael Weiland",
    segment: "Academic leadership",
    theme: "Scenario and Context Fit",
    type: "Question",
    priority: "P1",
    impact: 8,
    effort: 5,
    evidence: "Expected a more thought-out scenario or actual case to judge effectiveness.",
    insight: "The experience should be tested as a complete instructional activity, not only as avatar tech."
  },
  {
    tester: "Michael Weiland",
    segment: "Academic leadership",
    theme: "Evaluation and Evidence Artifacts",
    type: "Feature Request",
    priority: "P1",
    impact: 8,
    effort: 5,
    evidence: "Asked if outcomes or themes can be tracked so students know when the activity is finished.",
    insight: "Outcome tracking can guide completion and create assessment signal."
  },
  {
    tester: "OTENG NTSWENG",
    segment: "Information systems",
    theme: "Realism and Conversational Quality",
    type: "Positive",
    priority: "P1",
    impact: 9,
    effort: 4,
    evidence: "Maya Thompson, Robert, and Marcus Hill conveyed an emotional dimension clearly and felt authentic.",
    insight: "Emotional cues are a major driver of perceived realism, attachment, and learner engagement."
  },
  {
    tester: "OTENG NTSWENG",
    segment: "Information systems",
    theme: "Assessment Analytics and Integrity",
    type: "Feature Request",
    priority: "P1",
    impact: 8,
    effort: 5,
    evidence: "Requested timing or timestamp features to interpret pauses, silence, disengagement, uncertainty, or possible outside-tool use.",
    insight: "Timing data can help instructors understand engagement and assessment integrity."
  },
  {
    tester: "OTENG NTSWENG",
    segment: "Information systems",
    theme: "Accessibility and Multimodal Support",
    type: "Feature Request",
    priority: "P1",
    impact: 8,
    effort: 4,
    evidence: "Requested captions so students can engage with both auditory and visual cues.",
    insight: "Captions support accessibility, engagement, and stronger learning outcomes."
  },
  {
    tester: "OTENG NTSWENG",
    segment: "Information systems",
    theme: "Technical Content Handling",
    type: "Feature Request",
    priority: "P1",
    impact: 7,
    effort: 6,
    evidence: "Requested testing for statistics use cases involving symbols, formulas, and technical notation such as pi, mu, and alpha.",
    insight: "Technical notation support is needed before expanding into quantitative or formula-heavy learning scenarios."
  },
  {
    tester: "OTENG NTSWENG",
    segment: "Information systems",
    theme: "Learning Design Alignment",
    type: "Insight",
    priority: "P1",
    impact: 8,
    effort: 5,
    evidence: "Recommended grounding prompts and experiences in the science of learning and instruction rather than treating the tool as a panacea.",
    insight: "Pilot design should be anchored in learning theory and measurable learning outcomes."
  },
  {
    tester: "Dan Mazzola",
    segment: "Information systems",
    theme: "Voice, Timing, and Pacing",
    type: "Risk",
    priority: "P1",
    impact: 7,
    effort: 4,
    evidence: "Reported bad lip sync during the interaction.",
    insight: "Lip sync quality is a visible immersion and credibility issue."
  },
  {
    tester: "Dan Mazzola",
    segment: "Information systems",
    theme: "Camera and Privacy Clarity",
    type: "Risk",
    priority: "P1",
    impact: 8,
    effort: 3,
    evidence: "Was not sure what the camera was for or whether it was looking at the user.",
    insight: "Camera ambiguity can create trust and privacy concerns before learning starts."
  },
  {
    tester: "Dan Mazzola",
    segment: "Information systems",
    theme: "Learning Design Alignment",
    type: "Risk",
    priority: "P1",
    impact: 8,
    effort: 3,
    evidence: "The avatar used the SMART framework without defining the acronym, describing it, or explaining why it was important.",
    insight: "Instructional frameworks need a clear setup before the avatar asks learners to use them."
  },
  {
    tester: "Dan Mazzola",
    segment: "Information systems",
    theme: "Flow Clarity and Completion",
    type: "Feature Request",
    priority: "P1",
    impact: 8,
    effort: 3,
    evidence: "Requested a setup, framework, and backstory for the engagement.",
    insight: "Scenario pre-briefing is needed before beginning the interaction."
  },
  {
    tester: "Dan Mazzola",
    segment: "Information systems",
    theme: "Flow Clarity and Completion",
    type: "Risk",
    priority: "P1",
    impact: 8,
    effort: 3,
    evidence: "The session started immediately with structure, no hello, no purpose, and no setup about honors projects, which felt startling.",
    insight: "Start-of-session orientation needs to establish purpose, context, and expected learner role."
  }
];

const themes = [
  {
    name: "Realism and Conversational Quality",
    summary: "Most testers saw credible realism: smooth conversation, emotional alignment, and strong audio synchronization.",
    action: "Protect this as the core promise while adding onboarding for first-use awkwardness."
  },
  {
    name: "Scenario and Context Fit",
    summary: "The avatar experience succeeds or fails inside the learning context: role assumptions, setting, wardrobe, and case design matter.",
    action: "Create scenario QA checklists for persona, environment, professional role, and assignment framing."
  },
  {
    name: "Learner Scaffolding",
    summary: "Advanced learners may benefit from challenge, but novice learners need hints, learner profiles, and room to recover.",
    action: "Add beginner/intermediate/advanced modes and instructor-controlled scaffolding."
  },
  {
    name: "Evaluation and Evidence Artifacts",
    summary: "Instructors want transcripts, printable feedback, outcome tracking, and records students can submit.",
    action: "Ship transcript and evaluation export before broad classroom pilots."
  },
  {
    name: "Flow Clarity and Completion",
    summary: "Testers were uncertain how to end sessions, trigger feedback, interpret buttons, or know when they were done.",
    action: "Add a pre-brief, in-session status, and a clear end-call/feedback handoff."
  },
  {
    name: "Knowledge Accuracy and Grounding",
    summary: "Policy and HR use cases expose high trust risk when the avatar hallucinates or misses known knowledge-base data.",
    action: "Gate knowledge-heavy pilots behind retrieval grounding, citations, and refusal behavior."
  },
  {
    name: "Voice, Timing, and Pacing",
    summary: "Too-fast speech, rushed word timing, stutter, and voice-person mismatch were repeated quality issues.",
    action: "Add avatar-by-avatar speech QA and pace controls."
  },
  {
    name: "Instructor Controls and Customization",
    summary: "Instructors need control over pause, identity, profession, communication style, difficulty, and assumptions.",
    action: "Prioritize a configuration surface for pilot owners."
  },
  {
    name: "Safety and Guardrails",
    summary: "Early redirects worked in one case, but testers still want launch criteria around inappropriate use and recordability.",
    action: "Define safety test suites and classroom-use policies."
  },
  {
    name: "Representation and Inclusion",
    summary: "Demographics and professional perspectives should reflect the diversity of teaching cases and learner populations.",
    action: "Make avatar identity a configurable dimension, not a fixed default."
  },
  {
    name: "Assessment Analytics and Integrity",
    summary: "Timing, silence, and pause behavior may reveal engagement, uncertainty, or possible outside-tool reliance.",
    action: "Add timestamped interaction logs and guidance for interpreting pauses during assessment."
  },
  {
    name: "Accessibility and Multimodal Support",
    summary: "Captions can strengthen accessibility and help students process both auditory and visual cues.",
    action: "Add caption support and make it available as a default learner option."
  },
  {
    name: "Technical Content Handling",
    summary: "Statistics, formulas, symbols, and technical notation need explicit testing before use in quantitative courses.",
    action: "Create QA cases for technical notation, formulas, and discipline-specific vocabulary."
  },
  {
    name: "Learning Design Alignment",
    summary: "The strongest pilots will be grounded in how people learn, not only in the novelty of the avatar interaction.",
    action: "Anchor scenario prompts, rubrics, and duration tests in learning science and instructional goals."
  },
  {
    name: "Camera and Privacy Clarity",
    summary: "Users need to know what camera access does, whether they are being observed, and how visual input affects the session.",
    action: "Add a plain-language camera purpose disclosure and visible camera state before sessions begin."
  }
];

const roadmap = [
  {
    title: "Trusted knowledge grounding",
    priority: "P0",
    theme: "Knowledge Accuracy and Grounding",
    description: "Connect avatars to vetted knowledge bases for policy, HR, and institutional facts; add citations and fallback behavior.",
    evidence: "Wrong SPP policy and hallucinated websites create direct trust risk."
  },
  {
    title: "Session guidance and completion",
    priority: "P0",
    theme: "Flow Clarity and Completion",
    description: "Pre-brief the learner, show session state, explain feedback flow, establish purpose, and make ending the call unambiguous.",
    evidence: "Multiple testers did not know how to trigger feedback, why the activity started, or when the activity was finished."
  },
  {
    title: "Learner modes and scaffolding",
    priority: "P0",
    theme: "Learner Scaffolding",
    description: "Offer beginner, intermediate, and advanced modes with hints, role framing, and recovery from mistakes.",
    evidence: "Novice learners may struggle if the avatar is directive or requires assertive redirection."
  },
  {
    title: "Transcript and evaluation export",
    priority: "P1",
    theme: "Evaluation and Evidence Artifacts",
    description: "Generate downloadable transcripts, printable evaluation feedback, and instructor-facing outcome summaries.",
    evidence: "Testers explicitly requested records for grading, reflection, and submission."
  },
  {
    title: "Scenario fidelity QA",
    priority: "P1",
    theme: "Scenario and Context Fit",
    description: "Validate background, wardrobe, persona, profession, case assumptions, and assignment fit for each pilot.",
    evidence: "Clinical scenarios need patient dress and hospital settings; interdisciplinary programs need broader framing."
  },
  {
    title: "Voice and pacing controls",
    priority: "P1",
    theme: "Voice, Timing, and Pacing",
    description: "Add per-avatar pacing tests, voice-persona match checks, and optional learner pace controls.",
    evidence: "Rushed words, stutter, and voice mismatch reduce perceived quality."
  },
  {
    title: "Instructor configuration panel",
    priority: "P2",
    theme: "Instructor Controls and Customization",
    description: "Let pilot owners configure communication style, complexity, role assumptions, identity, and pause behavior.",
    evidence: "Customization requests recur, but can follow the P0/P1 foundations."
  },
  {
    title: "Representation library",
    priority: "P2",
    theme: "Representation and Inclusion",
    description: "Expand avatar demographics and professional roles so defaults match intended teaching cases.",
    evidence: "Diverse cases should not start from a single default persona."
  },
  {
    title: "Timing and engagement analytics",
    priority: "P1",
    theme: "Assessment Analytics and Integrity",
    description: "Capture timestamps, pauses, and silence events so instructors can interpret engagement and assessment behavior.",
    evidence: "Timing data was requested to understand pauses, uncertainty, disengagement, and possible outside-tool use."
  },
  {
    title: "Captions and multimodal access",
    priority: "P1",
    theme: "Accessibility and Multimodal Support",
    description: "Add captions so learners can follow avatar interactions through both audio and text.",
    evidence: "Captions were requested to support engagement and learning outcomes."
  },
  {
    title: "Technical notation QA",
    priority: "P1",
    theme: "Technical Content Handling",
    description: "Test and improve how avatars read, interpret, and speak formulas, symbols, and discipline-specific notation.",
    evidence: "Statistics notation was flagged as a necessary expansion area."
  },
  {
    title: "Camera purpose disclosure",
    priority: "P1",
    theme: "Camera and Privacy Clarity",
    description: "Explain whether camera access is used, what it observes, and how it affects the session before learners begin.",
    evidence: "A tester was unsure what the camera was for or whether it was watching them."
  },
  {
    title: "Pre-brief and framework setup",
    priority: "P1",
    theme: "Learning Design Alignment",
    description: "Introduce purpose, backstory, learner role, and any frameworks or acronyms before the avatar starts the task.",
    evidence: "A tester found the immediate start with SMART and structure startling and underexplained."
  }
];

const readiness = [
  { label: "Conversational realism", value: 82, note: "Emotional realism is strong, but lip sync, voice-persona fit, and pacing remain visible quality risks." },
  { label: "Instructional workflow", value: 54, note: "Needs clearer pre-briefing, scenario context, framework explanation, and session flow." },
  { label: "Assessment artifacts", value: 56, note: "High demand for transcripts, printable evaluation, outcome tracking, and timestamp analytics." },
  { label: "Trust and safety", value: 50, note: "Guardrails exist in pockets, but knowledge accuracy, camera clarity, and misuse controls need launch criteria." }
];

const colors = ["#1f6f8b", "#9b5d2e", "#4a6f44", "#8f3f56", "#6b5b95", "#2d768f", "#7c6a36", "#6a6f7a", "#b4573f", "#427d75"];

const state = {
  search: "",
  theme: "all",
  segment: "all",
  signal: "all"
};

const byId = (id) => document.getElementById(id);

function uniqueValues(key) {
  return [...new Set(signals.map((item) => item[key]))].sort();
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + 1;
    return acc;
  }, {});
}

function filteredSignals() {
  const needle = state.search.trim().toLowerCase();
  return signals.filter((item) => {
    const matchesSearch = !needle || Object.values(item).some((value) => String(value).toLowerCase().includes(needle));
    const matchesTheme = state.theme === "all" || item.theme === state.theme;
    const matchesSegment = state.segment === "all" || item.segment === state.segment;
    const matchesSignal = state.signal === "all" || item.type === state.signal;
    return matchesSearch && matchesTheme && matchesSegment && matchesSignal;
  });
}

function populateFilters() {
  const themeFilter = byId("themeFilter");
  const segmentFilter = byId("segmentFilter");
  uniqueValues("theme").forEach((theme) => themeFilter.append(new Option(theme, theme)));
  uniqueValues("segment").forEach((segment) => segmentFilter.append(new Option(segment, segment)));
}

function renderKpis(items) {
  byId("testerCount").textContent = testers.length;
  byId("signalCount").textContent = items.length;
  byId("featureCount").textContent = items.filter((item) => item.type === "Feature Request").length;
  byId("priorityCount").textContent = items.filter((item) => ["P0", "P1"].includes(item.priority)).length;
}

function renderThemeChart(items) {
  const counts = countBy(items, "theme");
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...entries.map((entry) => entry[1]));
  byId("themeChart").innerHTML = entries.map(([theme, count], index) => `
    <div class="bar-row">
      <span class="bar-label">${theme}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${(count / max) * 100}%; background:${colors[index % colors.length]}"></span></span>
      <span class="bar-value">${count}</span>
    </div>
  `).join("") || "<p class='label'>No matching signals.</p>";
}

function renderSignalChart(items) {
  const counts = countBy(items, "type");
  const entries = Object.entries(counts);
  const total = Math.max(1, items.length);
  let cursor = 0;
  const stops = entries.map(([type, count], index) => {
    const start = cursor;
    cursor += (count / total) * 100;
    return `${colors[index % colors.length]} ${start}% ${cursor}%`;
  }).join(", ");
  byId("signalChart").innerHTML = `
    <div class="donut" style="background: conic-gradient(${stops || "#e8eef4 0 100%"});">
      <span class="donut-center">${items.length}</span>
    </div>
    <div class="signal-list">
      ${entries.map(([type, count], index) => `
        <div class="signal-item">
          <span><i class="dot" style="background:${colors[index % colors.length]}"></i>${type}</span>
          <strong>${count}</strong>
        </div>
      `).join("") || "<p class='label'>No matching signals.</p>"}
    </div>
  `;
}

function renderReadiness() {
  byId("readinessList").innerHTML = readiness.map((item) => `
    <div class="readiness-item">
      <strong>${item.label}</strong>
      <div class="progress" aria-hidden="true"><span style="width:${item.value}%"></span></div>
      <p class="label">${item.value}/100 - ${item.note}</p>
    </div>
  `).join("");
}

function renderRoadmap(items) {
  const allowedThemes = new Set(items.map((item) => item.theme));
  const filtered = roadmap.filter((item) => state.theme === "all" ? true : allowedThemes.has(item.theme));
  byId("roadmap").innerHTML = filtered.map((item) => `
    <article class="roadmap-card">
      <span class="priority ${item.priority.toLowerCase()}">${item.priority}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <span class="meta">${item.evidence}</span>
    </article>
  `).join("");
}

function requestTitle(item) {
  const titles = {
    "Wanted a printout of the detailed evaluation feedback.": "Printable evaluation feedback",
    "Requested an optional pause button for instructors to take notes and make tweaks.": "Instructor pause control",
    "Asked for adjustable difficulty levels, learner profiles, hints, and productive mistake recovery.": "Learner difficulty and hint modes",
    "Requested customization of avatar identities, professions, communication styles, and complexity levels.": "Avatar and scenario customization",
    "Expected the avatar to use Check-In Bot knowledge base data for HR business partner information.": "Knowledge-base connected answers",
    "Users need instructions to say provide feedback, use the feedback button correctly, and end the call.": "Clear feedback and end-call flow",
    "Requested a written record of the exchange so students can submit the conversation to instructors.": "Session transcript for submission",
    "Needs appropriate setting, patient wardrobe, and testing with clear instructions and an assignment.": "Scenario setting and assignment fit",
    "Asked if outcomes or themes can be tracked so students know when the activity is finished.": "Outcome and completion tracking",
    "Requested timing or timestamp features to interpret pauses, silence, disengagement, uncertainty, or possible outside-tool use.": "Timestamp and pause analytics",
    "Requested captions so students can engage with both auditory and visual cues.": "Captions for multimodal learning",
    "Requested testing for statistics use cases involving symbols, formulas, and technical notation such as pi, mu, and alpha.": "Technical notation support",
    "Requested a setup, framework, and backstory for the engagement.": "Scenario pre-brief and backstory"
  };
  return titles[item.evidence] || item.theme;
}

function renderFeatureRequests(items) {
  const requests = items
    .filter((item) => item.type === "Feature Request")
    .sort((a, b) => {
      const priorityOrder = { P0: 0, P1: 1, P2: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority] || b.impact - a.impact;
    });
  byId("requestCount").textContent = `${requests.length} request${requests.length === 1 ? "" : "s"}`;
  byId("featureRequests").innerHTML = requests.map((item) => `
    <article class="request-card">
      <div class="chip-row">
        <span class="priority ${item.priority.toLowerCase()}">${item.priority}</span>
        <span class="chip">${item.theme}</span>
      </div>
      <h3>${requestTitle(item)}</h3>
      <p>${item.evidence}</p>
      <span class="meta">${item.tester} - impact ${item.impact}/10, effort ${item.effort}/10</span>
    </article>
  `).join("") || "<p class='label'>No matching feature requests.</p>";
}

function renderMatrix() {
  byId("matrix").innerHTML = `
    <span class="axis y">Higher impact</span>
    <span class="axis x">Higher effort</span>
    <span class="quadrant q1">Quick wins</span>
    <span class="quadrant q2">Strategic bets</span>
    <span class="quadrant q3">Monitor</span>
    <span class="quadrant q4">Sequence later</span>
    ${roadmap.map((item) => {
      const themeSignals = signals.filter((signal) => signal.theme === item.theme);
      const avgImpact = themeSignals.reduce((sum, signal) => sum + signal.impact, 0) / themeSignals.length;
      const avgEffort = themeSignals.reduce((sum, signal) => sum + signal.effort, 0) / themeSignals.length;
      const color = item.priority === "P0" ? "var(--p0)" : item.priority === "P1" ? "var(--p1)" : "var(--p2)";
      const left = Math.min(92, Math.max(8, avgEffort * 10));
      const bottom = Math.min(92, Math.max(8, avgImpact * 10));
      return `<span class="bubble" title="${item.title}: impact ${avgImpact.toFixed(1)}, effort ${avgEffort.toFixed(1)}" style="left:${left}%; bottom:${bottom}%; background:${color};"><strong>${item.priority}</strong><em>${item.title}</em></span>`;
    }).join("")}
  `;
}

function renderQuotes(items) {
  const chosen = items
    .filter((item) => ["P0", "P1"].includes(item.priority))
    .slice(0, 6);
  byId("quotes").innerHTML = chosen.map((item) => `
    <article class="quote-card">
      <blockquote>"${item.evidence}"</blockquote>
      <span class="meta">${item.tester} - ${item.theme}</span>
    </article>
  `).join("") || "<p class='label'>No matching evidence excerpts.</p>";
}

function renderThemeCards(items) {
  const counts = countBy(items, "theme");
  byId("themeCards").innerHTML = themes
    .filter((theme) => state.theme === "all" ? true : theme.name === state.theme)
    .map((theme) => {
      const themeSignals = items.filter((item) => item.theme === theme.name);
      const types = [...new Set(themeSignals.map((item) => item.type))];
      return `
        <article class="theme-card">
          <h3>${theme.name}</h3>
          <p>${theme.summary}</p>
          <p><strong>Recommended action:</strong> ${theme.action}</p>
          <div class="chip-row">
            <span class="chip">${counts[theme.name] || 0} signals</span>
            ${types.map((type) => `<span class="chip">${type}</span>`).join("")}
          </div>
        </article>
      `;
    }).join("");
}

function renderTable(items) {
  byId("resultCount").textContent = `${items.length} result${items.length === 1 ? "" : "s"}`;
  byId("signalTable").innerHTML = items.map((item) => `
    <tr>
      <td><strong>${item.tester}</strong></td>
      <td>${item.segment}</td>
      <td>${item.theme}</td>
      <td><span class="chip">${item.type}</span> <span class="chip">${item.priority}</span></td>
      <td>${item.evidence}</td>
    </tr>
  `).join("");
}

function renderAll() {
  const items = filteredSignals();
  renderKpis(items);
  renderThemeChart(items);
  renderSignalChart(items);
  renderReadiness();
  renderRoadmap(items);
  renderFeatureRequests(items);
  renderMatrix();
  renderQuotes(items);
  renderThemeCards(items);
  renderTable(items);
}

function bindEvents() {
  byId("searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderAll();
  });
  byId("themeFilter").addEventListener("change", (event) => {
    state.theme = event.target.value;
    renderAll();
  });
  byId("segmentFilter").addEventListener("change", (event) => {
    state.segment = event.target.value;
    renderAll();
  });
  byId("signalFilter").addEventListener("change", (event) => {
    state.signal = event.target.value;
    renderAll();
  });
  byId("copyLink").addEventListener("click", async () => {
    await navigator.clipboard.writeText(window.location.href);
    byId("copyLink").setAttribute("title", "Copied");
  });
  byId("printDashboard").addEventListener("click", () => window.print());
}

populateFilters();
bindEvents();
renderAll();
