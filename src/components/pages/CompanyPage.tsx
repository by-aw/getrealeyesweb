import AboutCompany from "../sections/AboutCompany";
import CompanyHero from "../sections/CompanyHero";
import FinalHero from "../sections/FinalHero";
import Footer from "../sections/Footer";

export default function CompanyPage() {
  return (
    <main className="main px-4 md:px-12 h-full overflow-scroll">
      <CompanyHero />
      <AboutCompany />
      <FinalHero />
      <Footer />
    </main>
  );
}
