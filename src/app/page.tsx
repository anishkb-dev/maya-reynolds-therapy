import {
  SiteNav, Hero, StatementBlock, WhoWeHelp, PullQuote, Expertise,
  HowWeWork, DividerStatement, Specialties, OurOffice, ClosingCta, SiteFooter,
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
        <Expertise />
        <HowWeWork />
        <DividerStatement />
        <Specialties />
        <OurOffice />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
