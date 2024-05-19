import FinalHero from "../sections/FinalHero";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import { LearnMore } from "../sections/LearnMore";

function LearnMorePage() {
  return (
    <main className="main px-4 md:px-12">
      <Hero />
      <LearnMore />
      <FinalHero />
      <Footer />
    </main>
  );
}

export default LearnMorePage;
