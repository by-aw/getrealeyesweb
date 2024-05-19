import { ArrowDown } from "@phosphor-icons/react";
import Spiky from "../svg/spiky";

export default function Hero() {
  return (
    <section className="flex flex-col md:justify-between items-center md:flex-row pt-8">
      <div className="flex text-5xl md:text-7xl flex-col gap-4 items-center md:items-start">
        <span className="font-bold flex gap-4">
          <h1 className="bg-gradient-to-r from-pink-600 to-red-600 w-max bg-clip-text text-transparent">
            Color Contacts
          </h1>
          <h1 className="md:block hidden">👁️</h1>
        </span>
        <span className="font-bold flex gap-4">
          <h1>that let you</h1>
          <h1>🫵</h1>
        </span>
        <span className="font-bold flex gap-4">
          <h1>be you</h1>
          <h1>😄</h1>
        </span>
      </div>

      <a
        className="flex flex-col gap-2 items-center mt-8 md:mt-0 pb-16 md:pb-0"
        href="#learnmore"
      >
        <Spiky>
          <ArrowDown size={56} />
        </Spiky>
        <p className="text-xl font-semibold">learn more</p>
      </a>
    </section>
  );
}
