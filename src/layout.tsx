import { Outlet } from "react-router-dom";
import Header from "./components/sections/Header";

export default function Layout() {
  return (
    <div className="h-[100dvh] flex flex-col overflow-scroll static">
      <Header />
      <Outlet />
    </div>
  );
}
