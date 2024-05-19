import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Spiky from "../svg/spiky";

const getrealeyes = "GET REAL EYES ".repeat(16);

export default function FinalHero() {
  return (
    <section className="flex flex-col md:justify-between justify-center items-center h-ful md:mt-16 md:h-max gap-8">
      <h1 className="bg-gradient-to-r from-pink-600 to-red-600 font-bold text-5xl md:text-7xl w-max bg-clip-text text-transparent">
        Seen enough?
      </h1>
      <div className="relative w-[100dvw] h-max overflow-x-clip">
        <h2 className="motion-safe:animate-marquee select-none text-3xl bg-lime-400 text-black line-clamp-1 w-max text-clip text-nowrap left-0 absolute">
          {getrealeyes}
        </h2>
      </div>
      <Link
        className="flex flex-col gap-2 items-center mt-12 pb-16 md:pb-0"
        to="/get"
      >
        <Spiky>
          <ArrowUpRight size={56} />
        </Spiky>
        <p className="text-xl font-semibold">Get Real Eyes</p>
      </Link>
    </section>
  );
}
