/**
 * Single source of truth for all site copy.
 *
 * EVERY line here must be traceable to Dr. Maya Reynolds' profile doc —
 * that is an explicit evaluation criterion. If you can't point at the
 * sentence in the profile it came from, rewrite it.
 *
 * Profile facts used:
 *  - Licensed Clinical Psychologist (PsyD), Santa Monica CA
 *  - Specialties: anxiety, panic, trauma, burnout (+ perfectionism)
 *  - Adults; high-achieving professionals, creatives, entrepreneurs
 *  - Clients who are "functional" outside and struggling inside
 *  - Approach: warm, collaborative, grounded
 *  - Modalities: CBT, EMDR, mindfulness, body-oriented
 *  - Trauma work leads with safety, stabilization, feeling regulated
 *  - In-person Santa Monica office (quiet, private, natural light)
 *    + secure telehealth for California residents
 *  - Goal beyond symptom relief: insight, resilience, a stronger
 *    relationship with themselves
 */

export const therapist = {
  name: "Dr. Maya Reynolds",
  credentials: "PsyD",
  title: "Licensed Clinical Psychologist",
  city: "Santa Monica",
  state: "CA",
  address: "123th Street 45 W, Santa Monica, CA 90401",
};

export const hero = {
  eyebrow: "In-person in Santa Monica & telehealth across California",
  // H1: city + primary service, once each. Accent word is styled separately.
  headingBefore: "Anxiety & trauma therapy in Santa Monica, for people who look",
  headingAccent: "fine",
  headingAfter: "on the outside.",
  sub: "You can look completely fine from the outside and still feel wired, exhausted, or stuck on something you've never really put down. I work with adults in Santa Monica — often high-achieving professionals and creatives — on anxiety, panic, trauma and burnout, at a pace you set.",
  cta: "Book a free 15-minute call",
};

export const statement = {
  lead: "You're managing everything, and quietly running on empty.",
  eyebrow: "That gap between how you seem and how you feel is worth taking seriously.",
  body: [
    "TODO — two short paragraphs. Keep every claim traceable to the profile: warm, collaborative and grounded; clients are actively involved rather than talked at; the work goes past symptom relief toward insight, resilience and a stronger relationship with themselves.",
    "TODO — second paragraph. Mention Santa Monica once and telehealth for California residents once. Don't repeat the city more than the page already does.",
  ],
};

export const whoWeHelp = [
  {
    title: "Professionals & executives",
    body: "TODO — high-achieving people holding a lot together. Draw from the profile's 'functional outside, struggling inside'.",
  },
  {
    title: "Creatives & entrepreneurs",
    body: "TODO — the profile names creatives and entrepreneurs who feel disconnected from themselves.",
  },
  {
    title: "Adults working through trauma",
    body: "TODO — single-incident or complex trauma. Lead with safety and stabilization, not excavation.",
  },
];

export const pullQuote =
  "TODO — one line, warm and human. Think about what a person needs to read at the moment they are deciding whether to reach out.";

// Straight from the profile's specialties and modalities.
export const expertise = [
  "Anxiety", "Panic", "Trauma", "Burnout", "Perfectionism",
  "EMDR", "CBT", "Mindfulness", "Body-based therapy",
  "High-achieving professionals", "Creatives & entrepreneurs",
];

export const howWeWork = {
  eyebrow: "How we work together",
  heading: "Collaborative, grounded, and paced by you.",
  body: [
    "TODO — the profile says clients should feel respected, understood and actively involved in the process. Say that in plain words, not jargon.",
    "TODO — name the modalities here (CBT, EMDR, mindfulness, body-oriented) as tools rather than a list of credentials.",
  ],
  cta: "More about my approach",
};

export const divider =
  "TODO — one serif line echoing the profile's goal: insight, resilience, and a stronger relationship with yourself.";

// Brief says pick THREE services. The template shows four — use three.
export const services = [
  {
    title: "Anxiety & panic therapy in Santa Monica",
    body: "If your mind won't switch off — replaying conversations, bracing for the next thing — anxiety therapy can help you feel steadier day to day. We'll use CBT and mindfulness, plus body-based tools you can actually use outside the room.",
  },
  {
    title: "Trauma therapy & EMDR in Santa Monica",
    body: "You don't have to retell everything to get better. Trauma therapy starts with safety and stabilization, using EMDR and body-based work to help you feel regulated again, at a pace you control.",
  },
  {
    title: "Burnout & perfectionism therapy across California",
    body: "For people who look like they're managing and are quietly running on empty. This work helps you rest without guilt, and set standards that don't cost you everything — in person in Santa Monica or online across California.",
  },
];

// Part 3 — the section that does NOT exist in the original template.
export const office = {
  eyebrow: "The space",
  heading: "A quiet room, and enough natural light to think in.",
  body: [
    "TODO — describe the office from the profile: quiet, private, natural light. Concrete detail beats 'safe space', which is on every therapist site alive.",
    "TODO — one line on the choice between in-person in Santa Monica and secure telehealth anywhere in California.",
  ],
  details: [
    { label: "In person", value: `${therapist.address}` },
    { label: "Online", value: "Secure telehealth for California residents" },
  ],
};

export const closing = {
  eyebrow: "Getting started",
  heading: "TODO — a warm closing heading, not a hard sell.",
  body: "TODO — short paragraph lowering the stakes of the first contact. Name what actually happens on the 15-minute call.",
  cta: "Book a free 15-minute call",
};
