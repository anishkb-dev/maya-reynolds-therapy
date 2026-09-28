import Image from "next/image";
import {
  therapist, hero, statement, whoWeHelp, pullQuote,
  expertise, howWeWork, divider, services, office, closing, about, faqs,
} from "@/content/profile";

/* Drop real files into /public/images and swap these paths.
   Image choice is called out as "a major evaluation factor" — pick
   photographs that match the palette and the section's message. */
const IMG = {
  heroMain: "/images/hero-main.jpg",       // 504x578  (0.87)
  heroStrip: "/images/hero-strip.jpg",     // 117x382  (0.31)
  who: ["/images/who-1.jpg", "/images/who-2.jpg", "/images/who-3.jpg"], // 370x421 (0.88)
  quoteBand: "/images/quote-band.jpg",     // 1462x575 (2.54) full-bleed
  approach: "/images/approach.jpg",        // 331x696  (0.48) tall
  divider: "/images/divider.jpg",          // 781x539  (1.45)
  closingNarrow: "/images/closing-narrow.jpg", // 173x492 (0.35)
  closingMain: "/images/closing-main.jpg",     // 504x610 (0.83)
  portrait: "/images/maya.jpg",
  office1: "/images/office-1.jpg",
  office2: "/images/office-2.jpg",
  statement: "/images/statement.jpg",   // 443x631 (0.70)
};

export function SiteNav() {
  const links = ["About", "Approach", "Specialties", "Office", "FAQs"];
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-line">
      <nav className="wrap flex items-center justify-between py-5">
        <a href="#" className="leading-tight">
          <span className="block font-[family-name:var(--font-newsreader)] text-xl">
            {therapist.name}
          </span>
          <span className="eyebrow text-[0.625rem]">{therapist.title}</span>
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="eyebrow hover:text-accent transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="eyebrow border border-ink rounded-full px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,0.45fr)] lg:items-center py-8 lg:py-12">
      <div className="relative aspect-[3/4] w-full">
        <Image src={IMG.heroMain} alt="" fill sizes="(max-width:1024px) 100vw, 30vw" className="object-cover" priority />
      </div>
      <div>
        <p className="eyebrow mb-8">{hero.eyebrow}</p>
        <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.16] mb-8">
          {hero.headingBefore}{" "}
          <span className="text-accent-ink italic">{hero.headingAccent}</span>{" "}
          {hero.headingAfter}
        </h1>
        <p className="max-w-[46ch] text-ink-soft mb-7">{hero.sub}</p>
        <a href="#contact" className="link-cta inline-block">{hero.cta}</a>
      </div>
      <div className="relative hidden lg:block aspect-[2/3] w-full">
        <Image src={IMG.heroStrip} alt="" fill sizes="15vw" className="object-cover" />
      </div>
    </section>
  );
}

export function StatementBlock() {
  return (
    <section id="about" className="section bg-secondary">
      <div className="wrap max-w-4xl">
        <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-6">{statement.lead}</h2>
        <p className="eyebrow mb-6">{statement.eyebrow}</p>
        {statement.body.map((p, i) => (
          <p key={i} className="text-ink-soft mb-5 max-w-[62ch]">{p}</p>
        ))}
      </div>
    </section>
  );
}

export function WhoWeHelp() {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-7">Who I work with</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {whoWeHelp.map((c, i) => (
            <div key={c.title}>
              {/* original: 370x421 per column */}
              <div className="relative aspect-[370/421] mb-6">
                <Image
                  src={IMG.who[i]}
                  alt=""
                  fill
                  sizes="(max-width:768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl mb-3">{c.title}</h3>
              <p className="text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Original: full-bleed 1462x575 image with the line set over it. */
export function PullQuote() {
  return (
    <section className="relative isolate flex items-center min-h-[clamp(20rem,40vw,36rem)]">
      <Image
        src={IMG.quoteBand}
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-ink/35" />
      <p className="wrap max-w-3xl text-center text-surface text-[clamp(1.5rem,3.2vw,2.4rem)] font-[family-name:var(--font-newsreader)] font-light leading-snug">
        {pullQuote}
      </p>
    </section>
  );
}

/* Bio + portrait — required by their checklist, absent from the original homepage. */
export function About() {
  return (
    <section id="about-maya" className="section">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-start">
        <div className="relative aspect-[4/5] w-full">
          <Image src={IMG.portrait} alt={`${therapist.name}, ${therapist.credentials}`} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-6">{about.eyebrow}</p>
          <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-8">{about.heading}</h2>
          {about.bio.map((p, i) => (
            <p key={i} className="text-ink-soft mb-5 max-w-[60ch]">{p}</p>
          ))}
          <ul className="mt-7 border-t border-line pt-6 space-y-2">
            {about.credentials.map((cr) => (
              <li key={cr} className="eyebrow text-ink">{cr}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Native <details> — accessible and keyboard-operable with no JavaScript. */
export function Faqs() {
  return (
    <section id="faqs" className="section">
      <div className="wrap max-w-3xl">
        <p className="eyebrow mb-6">Questions</p>
        <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-7">Before you reach out</h2>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line py-5">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-xl font-[family-name:var(--font-newsreader)] font-light">
                {f.q}
                <span className="shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="text-ink-soft mt-4 max-w-[62ch]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="bg-secondary py-[clamp(2rem,3.5vw,3.25rem)]">
      <div className="wrap">
        <p className="eyebrow mb-6">Areas of focus</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4">
          {expertise.map((e) => (
            <li key={e} className="eyebrow text-ink text-sm">{e}</li>
          ))}
          <li className="eyebrow text-ink-soft text-sm">…and more</li>
        </ul>
      </div>
    </section>
  );
}

export function HowWeWork() {
  return (
    <section id="approach" className="section bg-secondary">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.42fr)] lg:items-start">
        <div>
          <p className="eyebrow mb-6">{howWeWork.eyebrow}</p>
          <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-7">{howWeWork.heading}</h2>
          {/* original splits the body into two columns side by side */}
          <div className="grid gap-8 md:grid-cols-2">
            {howWeWork.body.map((p, i) => (
              <p key={i} className="text-ink-soft">{p}</p>
            ))}
          </div>
          <a href="#contact" className="link-cta inline-block mt-7">{howWeWork.cta}</a>
        </div>
        {/* Original is a tall narrow image. Locking the aspect made the section
            ~880px tall against ~300px of text, leaving a dead half-screen, so the
            image stretches to the text column's height instead and crops. */}
        <div className="relative w-full min-h-[22rem] lg:min-h-full">
          <Image src={IMG.approach} alt="" fill sizes="(max-width:1024px) 100vw, 25vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

/* Original: a single serif line alongside one large 781x539 image. */
export function DividerStatement() {
  return (
    <section className="section">
      <div className="wrap grid gap-9 lg:grid-cols-2 lg:items-center">
        <p className="text-[clamp(1.5rem,3vw,2.15rem)] font-[family-name:var(--font-newsreader)] font-light leading-snug">
          {divider}
        </p>
        <div className="relative aspect-[781/539] w-full">
          <Image src={IMG.divider} alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function Specialties() {
  return (
    <section id="specialties" className="section">
      <div className="wrap">
        <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-8">Specialties</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="bg-surface-2 border border-line p-7">
              <h3 className="text-2xl mb-4">{s.title}</h3>
              <p className="text-ink-soft mb-6">{s.body}</p>
              <a href="#contact" className="link-cta inline-block">Learn more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PART 3 — new section, not present in the original template. */
export function OurOffice() {
  return (
    <section id="office" className="section bg-secondary">
      <div className="wrap grid gap-9 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow mb-6">{office.eyebrow}</p>
          <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-6">{office.heading}</h2>
          {office.body.map((p, i) => (
            <p key={i} className="text-ink-soft mb-5 max-w-[52ch]">{p}</p>
          ))}
          <dl className="mt-8 space-y-3 border-t border-line pt-6">
            {office.details.map((d) => (
              <div key={d.label}>
                <dt className="eyebrow mb-1">{d.label}</dt>
                <dd className="text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/10]">
            <Image src={IMG.office1} alt="" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="relative aspect-square">
            <Image src={IMG.office2} alt="" fill sizes="22vw" className="object-cover" />
          </div>
          <div className="relative aspect-square">
            <Image src={IMG.portrait} alt={therapist.name} fill sizes="22vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section id="contact" className="section">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)_minmax(0,0.75fr)] lg:items-center">
        {/* original: 173x492 narrow, left */}
        <div className="relative hidden lg:block aspect-[173/492] w-full">
          <Image src={IMG.closingNarrow} alt="" fill sizes="15vw" className="object-cover" />
        </div>
        <div className="text-center">
          <p className="eyebrow mb-6">{closing.eyebrow}</p>
          <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-6">{closing.heading}</h2>
          <p className="text-ink-soft mb-7 max-w-[48ch] mx-auto">{closing.body}</p>
          <a
            href="mailto:hello@example.com"
            className="eyebrow !text-surface inline-block bg-primary px-8 py-4 hover:bg-accent transition-colors"
          >
            {closing.cta}
          </a>
        </div>
        {/* original: 504x610, right */}
        <div className="relative aspect-[504/610] w-full">
          <Image src={IMG.closingMain} alt="" fill sizes="(max-width:1024px) 100vw, 30vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-col md:flex-row gap-6 justify-between text-ink-soft text-sm">
        <div>
          <p className="font-[family-name:var(--font-newsreader)] text-lg text-ink">
            {therapist.name}, {therapist.credentials}
          </p>
          <p>{therapist.title}</p>
        </div>
        <div>
          <p>{therapist.address}</p>
          <p>Telehealth across California</p>
        </div>
      </div>
    </footer>
  );
}
