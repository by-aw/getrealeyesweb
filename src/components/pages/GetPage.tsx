import {
  LensBuilderContext,
  LensBuilderContextProps,
} from "@/context/LensBuilderContext";
import { getRoutePath } from "@/main";
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function GetPage() {
  const navigate = useNavigate();
  const lensBuilderState = useState<LensBuilderContextProps>({});
  const nestedRoute = getRoutePath("/", "/get")?.children?.find(
    (c) => c.path === window.location.pathname
  );
  const routeTitle = nestedRoute?.titleBar;
  const routeIcon = nestedRoute?.titleBarIcon;
  const sidebar = nestedRoute?.sideBar;
  const planPageActive = window.location.pathname == "/get/plans";
  return (
    <main className="main px-4 md:px-12 h-full pb-4 md:pb-12">
      <LensBuilderContext.Provider value={lensBuilderState}>
        <section
          className={`flex md:flex-row flex-col h-full bg-secondary gap-1 p-1 rounded-3xl ${
            !planPageActive && "md:mb-12 mb-4"
          }`}
        >
          {sidebar}
          <div className="flex flex-1 flex-col gap-3 p-4 rounded-[20px] h-full">
            <div className="relative">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="p-1 rounded-lg hover:bg-background/50"
              >
                <CaretLeft size={24} />
              </button>
              <span className="flex items-center gap-2 w-max absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                {routeIcon}
                <h2 className="text-lg font-semibold">{routeTitle}</h2>
              </span>
            </div>
            <div className="h-full overflow-y-scroll">
              <Outlet />
            </div>
          </div>
        </section>
      </LensBuilderContext.Provider>
    </main>
  );
}
