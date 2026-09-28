import {
  SiteNav, Hero, StatementBlock, WhoWeHelp, PullQuote, About, Expertise,
  HowWeWork, DividerStatement, Specialties, OurOffice, Faqs, ClosingCta, SiteFooter,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StatementBlock />
        <WhoWeHelp />
        <PullQuote />
        <About />
        <Expertise />
        <HowWeWork />
        <DividerStatement />
        <Specialties />
        <OurOffice />
        <Faqs />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
