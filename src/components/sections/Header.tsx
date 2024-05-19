import { List } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";
import RealEyesLogo from "../svg/realeyeslogo";

export default function Header() {
  return (
    <header className="px-4 pt-8 md:px-12 md:pt-12 pb-6 flex items-center sticky justify-between top-0 bg-background z-50">
      <Link to="/">
        <RealEyesLogo />
      </Link>
      <label
        className="bg-secondary rounded-full p-2 md:hidden z-30"
        htmlFor="navmenu"
      >
        <List size={24} />
      </label>
      <input id="navmenu" className="peer/navmenu hidden" type="checkbox" />
      <label
        htmlFor="navmenu"
        className="invisible md:hidden fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-black/50 backdrop-blur-sm z-20 max-md:peer-checked/navmenu:visible"
      />
      <section className="md:flex flex-col md:flex-row max-md:peer-checked/navmenu:flex max-md:peer-checked/navmenu:absolute max-md:peer-checked/navmenu:top-[100%] max-md:peer-checked/navmenu:left-0 max-md:peer-checked/navmenu:p-2 max-md:peer-checked/navmenu:bg-secondary rounded-lg hidden gap-4 md:absolute w-full md:w-max md:left-[50%] md:translate-x-[-50%] z-30">
        <NavLink
          className={({ isActive }) =>
            "text-xl " +
            (isActive &&
              "bg-gradient-to-r from-pink-600 to-red-600 w-max bg-clip-text text-transparent")
          }
          to={"/"}
        >
          Learn more
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-xl " +
            (isActive &&
              "bg-gradient-to-r from-pink-600 to-red-600 w-max bg-clip-text text-transparent")
          }
          to={"/get"}
        >
          Get
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-xl " +
            (isActive &&
              "bg-gradient-to-r from-pink-600 to-red-600 w-max bg-clip-text text-transparent")
          }
          to={"/company"}
        >
          Company
        </NavLink>
      </section>
    </header>
  );
}
