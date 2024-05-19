import RealEyesLogo from "../svg/realeyeslogo";
import RealEyesText from "../svg/realeyestext";

export default function Footer() {
  const year = new Date(Date.now()).getFullYear();
  return (
    <section className="flex flex-row items-center gap-4 h-ful pt-16 pb-8 md:h-max">
      <RealEyesLogo />
      <RealEyesText />
      <div className="ml-auto mt-auto">
        <p>Copyright © {year}</p>
      </div>
    </section>
  );
}
