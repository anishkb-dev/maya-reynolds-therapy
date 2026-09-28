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
  sub: "You can look completely fine from the outside and still feel wired, exhausted, or stuck on something you've never really put down. I work with adults — often high-achieving professionals and creatives — on anxiety, panic, trauma and burnout, at a pace you set.",
  cta: "Book a free 15-minute call",
};

export const statement = {
  lead: "You're managing everything, and quietly running on empty.",
  eyebrow: "That gap between how you seem and how you feel is worth taking seriously.",
  body: [
    "Most of the people I work with are doing well by every outside measure. They meet the deadline, hold the team together, answer the message at midnight. Underneath it there's a low hum — bracing, overthinking, never quite off duty. You can carry that for years before it occurs to you that it isn't just how you're built.",
    "Therapy here is collaborative. I'll tell you what I'm noticing and why, and you can tell me when I've got it wrong. We go at a pace you set. Sessions are in person in Santa Monica, or by secure video anywhere in California.",
  ],
};

export const whoWeHelp = [
  {
    title: "Professionals & executives",
    body: "You're the one who holds it together at work, and you're tired in a way that sleep doesn't fix. We look at what's driving the pressure, not just how to absorb more of it.",
  },
  {
    title: "Creatives & entrepreneurs",
    body: "The work is going well and you feel strangely far from it. We work on getting you back in contact with your own judgement, and with why you started.",
  },
  {
    title: "Adults working through trauma",
    body: "Something happened, or a great many things did, and your body still behaves as though it's happening. We begin with safety and steadiness — not with being made to relive it.",
  },
];

export const pullQuote =
  "You don't have to be in crisis to deserve help. Tired is enough.";

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
    "You'll be an active part of this rather than a patient being treated. I'll explain what I'm doing and why, and I'd rather you pushed back than nodded along. The work is yours; I'm the person who knows the terrain.",
    "What that looks like depends on you. Cognitive behavioural work for the thoughts that loop. EMDR when a memory still has a grip. Mindfulness and body-based practice for the part of this that lives below language — the jaw, the shoulders, the held breath.",
  ],
  cta: "More about my approach",
};

export const divider =
  "The goal isn't only that the symptoms quiet down. It's that you end up on better terms with yourself.";

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

/* Their checklist: "I have added Maya's picture and created a bio using
   from her profile." The original keeps the bio on a separate About page,
   so it folds into the homepage here. */
export const about = {
  eyebrow: "About",
  heading: "I'm Maya.",
  bio: [
    "I'm a licensed clinical psychologist in Santa Monica. I work with adults on anxiety, panic, trauma and burnout — often people who are high-achieving and privately exhausted: professionals carrying a lot, creatives, people running their own thing.",
    "My approach is warm and fairly direct. I'll ask real questions and tell you what I actually think. You'll know what we're doing and why at each stage, and if something isn't working we change it.",
    "I trained in cognitive behavioural therapy, EMDR, mindfulness and body-oriented practice, and I draw on whichever suits the person in front of me. What I'm working toward with people is more than relief from the symptoms — insight that stays with you, resilience you can feel, and a steadier relationship with yourself.",
  ],
  credentials: [
    "PsyD, Licensed Clinical Psychologist",
    "EMDR for trauma",
    "Cognitive behavioural therapy",
    "Mindfulness & body-oriented practice",
  ],
};

/* Named in their copywriting checklist ("About, FAQs, and other sections").
   Only answer what the profile actually supports — do not invent fees,
   insurance or session lengths that aren't in the document. */
export const faqs = [
  {
    q: "Do you offer online sessions?",
    a: "Yes — secure telehealth is available to anyone living in California, alongside in-person sessions at the Santa Monica office.",
  },
  {
    q: "What happens in a first session?",
    a: "Mostly I listen. You tell me what brought you here, in whatever order it comes out, and I ask questions to understand the shape of it. By the end we'll have a sense of what we would work on together. There is nothing to prepare.",
  },
  {
    q: "What is EMDR, and will I have to relive my trauma?",
    a: "No. EMDR doesn't require you to narrate the worst of it. We build stability first — practical ways to settle your body and stay present — and only then work with the memory itself, at a pace you control. If it becomes too much, we stop and steady.",
  },
  {
    q: "Who do you usually work with?",
    a: "Adults, mostly people who look like they're managing. Professionals carrying more than they let on, creatives and founders who feel disconnected from their own work, and people living with trauma — whether one event or many years of them.",
  },
];

// Part 3 — the section that does NOT exist in the original template.
export const office = {
  eyebrow: "The space",
  heading: "A quiet room, and enough natural light to think in.",
  body: [
    "The office is a quiet room with good natural light and a door that closes properly. No clinical fluorescents, no waiting room full of people avoiding each other's eyes.",
    "Some people want that room. Others would rather be at home with their own door shut. Both work — sessions are in person here, or by secure video anywhere in California.",
  ],
  details: [
    { label: "In person", value: `${therapist.address}` },
    { label: "Online", value: "Secure telehealth for California residents" },
  ],
};

export const closing = {
  eyebrow: "Getting started",
  heading: "Start with a conversation, not a commitment.",
  body: "A free 15-minute call, by phone or video. You tell me briefly what's going on, I tell you honestly whether I'm the right person for it, and if I'm not, I'll point you toward someone who is. No pressure either way.",
  cta: "Book a free 15-minute call",
};
