import { STOCK_IMAGE } from "@/utils";
import { LearnMoreCard } from "../cards/LearnMoreCard";

export default function AboutCompany() {
  return (
    <div
      id="learnmore"
      className="flex flex-col gap-12 md:translate-y-0 md:mt-16 z-0 mb-12"
    >
      <LearnMoreCard
        title="We are a community"
        description="Made for and by people like you."
        img={import.meta.env.VITE_TALK ?? STOCK_IMAGE}
      />
    </div>
  );
}
