import Image from "next/image";
import {
  therapist, hero, statement, whoWeHelp, pullQuote,
  expertise, howWeWork, divider, services, office, closing,
} from "@/content/profile";

/* Drop real files into /public/images and swap these paths.
   Image choice is called out as "a major evaluation factor" — pick
   photographs that match the palette and the section's message. */
const IMG = {
  heroMain: "/images/hero-main.jpg",
  heroStrip: "/images/hero-strip.jpg",
  portrait: "/images/maya.jpg",
  office1: "/images/office-1.jpg",
  office2: "/images/office-2.jpg",
};

export function SiteNav() {
  const links = ["About", "Approach", "Specialties", "Office", "FAQs"];
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-line">
      <nav className="wrap flex items-center justify-between py-5">
        <a href="#" className="leading-tight">
          <span className="block font-[family-name:var(--font-display)] text-xl">
            {therapist.name}
          </span>
          <span className="eyebrow text-[0.625rem]">{therapist.title}</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
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
    <section className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,0.45fr)] lg:items-center py-16 lg:py-24">
      <div className="relative aspect-[3/4] w-full">
        <Image src={IMG.heroMain} alt="" fill sizes="(max-width:1024px) 100vw, 30vw" className="object-cover" priority />
      </div>
      <div>
        <p className="eyebrow mb-8">{hero.eyebrow}</p>
        <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.16] mb-8">
          {hero.headingBefore}{" "}
          <span className="text-accent italic">{hero.headingAccent}</span>{" "}
          {hero.headingAfter}
        </h1>
        <p className="max-w-[46ch] text-ink-soft mb-10">{hero.sub}</p>
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
        <p className="eyebrow mb-8">{statement.eyebrow}</p>
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
        <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-12">Who I work with</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {whoWeHelp.map((c) => (
            <div key={c.title}>
              <h3 className="text-2xl mb-3">{c.title}</h3>
              <p className="text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PullQuote() {
  return (
    <section className="section">
      <p className="wrap max-w-3xl text-center text-[clamp(1.5rem,3vw,2.15rem)] font-[family-name:var(--font-display)] font-light leading-snug">
        {pullQuote}
      </p>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="section bg-secondary">
      <div className="wrap">
        <p className="eyebrow mb-8">Areas of focus</p>
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
    <section id="approach" className="section">
      <div className="wrap max-w-4xl">
        <p className="eyebrow mb-6">{howWeWork.eyebrow}</p>
        <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-8">{howWeWork.heading}</h2>
        {howWeWork.body.map((p, i) => (
          <p key={i} className="text-ink-soft mb-5 max-w-[62ch]">{p}</p>
        ))}
        <a href="#contact" className="link-cta inline-block mt-4">{howWeWork.cta}</a>
      </div>
    </section>
  );
}

export function DividerStatement() {
  return (
    <section className="py-20 bg-primary text-surface">
      <p className="wrap max-w-3xl text-center text-[clamp(1.5rem,3vw,2.15rem)] font-[family-name:var(--font-display)] font-light leading-snug">
        {divider}
      </p>
    </section>
  );
}

export function Specialties() {
  return (
    <section id="specialties" className="section">
      <div className="wrap">
        <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-12">Specialties</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="bg-surface-2 border border-line p-8">
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
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow mb-6">{office.eyebrow}</p>
          <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-6">{office.heading}</h2>
          {office.body.map((p, i) => (
            <p key={i} className="text-ink-soft mb-5 max-w-[52ch]">{p}</p>
          ))}
          <dl className="mt-8 space-y-4 border-t border-line pt-8">
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
    <section id="contact" className="section bg-primary text-surface">
      <div className="wrap max-w-2xl text-center">
        <p className="eyebrow !text-surface/70 mb-6">{closing.eyebrow}</p>
        <h2 className="text-[clamp(1.85rem,3.4vw,2.5rem)] mb-6">{closing.heading}</h2>
        <p className="text-surface/80 mb-10">{closing.body}</p>
        <a
          href="mailto:hello@example.com"
          className="eyebrow !text-primary inline-block bg-surface px-8 py-4 hover:bg-accent hover:!text-surface transition-colors"
        >
          {closing.cta}
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap flex flex-col md:flex-row gap-6 justify-between text-ink-soft text-sm">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg text-ink">
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
