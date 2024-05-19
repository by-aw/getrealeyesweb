import fda from "@/assets/fda.png";
import { STOCK_IMAGE } from "@/utils";
import { Link } from "react-router-dom";
import { LearnMoreCard } from "../cards/LearnMoreCard";

export const LearnMore = () => {
  return (
    //on scroll decrease translate-y
    <div
      id="learnmore"
      className="flex flex-col gap-12 learnmore mb-16 md:translate-y-0 md:mt-16"
    >
      <LearnMoreCard
        title="Expression is how we communicate 🗣️"
        description="So we offer a wide range of 250 colors to let you express yourself."
        img={import.meta.env.VITE_TALK ?? STOCK_IMAGE}
      >
        <Link
          className="h-16 rounded-2xl bg-primary justify-center items-center text-xl flex mt-4 md:mt-auto"
          to={"/get"}
        >
          <p>See all colors</p>
        </Link>
      </LearnMoreCard>
      <LearnMoreCard
        title="You’re in good hands"
        description="Our eye contacts are backed by the FDA"
        img={import.meta.env.VITE_HAND ?? STOCK_IMAGE}
      >
        <div className="p-2 bg-white w-max rounded-lg mt-auto">
          <img className="h-16 w-40" src={fda} />
        </div>
      </LearnMoreCard>
      <LearnMoreCard
        title="Made by people like you"
        description="We, just like you, founded this company in order to express our selves."
        img={import.meta.env.VITE_EYES ?? STOCK_IMAGE}
      >
        <Link
          className="h-16 rounded-2xl bg-primary justify-center items-center text-xl flex mt-4 md:mt-auto"
          to={"/company"}
        >
          <p>Learn more</p>
        </Link>
      </LearnMoreCard>
    </div>
  );
};
