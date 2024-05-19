import {
  CheckCircle,
  Crop,
  CurrencyCircleDollar,
  Palette,
} from "@phosphor-icons/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  NonIndexRouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import CompanyPage from "./components/pages/CompanyPage.tsx";
import CheckoutPage from "./components/pages/Get/Checkout.tsx";
import ColorsPage from "./components/pages/Get/Colors.tsx";
import EditionsPage from "./components/pages/Get/Editions.tsx";
import PlansPage from "./components/pages/Get/Plans.tsx";
import { CheckoutSidebar } from "./components/pages/Get/Sidebar/Confirmation.tsx";
import { EditionsSidebar } from "./components/pages/Get/Sidebar/Editions.tsx";
import { LensPreviewSidebar } from "./components/pages/Get/Sidebar/LensPreview.tsx";
import SizePage from "./components/pages/Get/Size.tsx";
import GetPage from "./components/pages/GetPage.tsx";
import LearnMorePage from "./components/pages/LearnMorePage.tsx";
import Editions from "./components/svg/editions.tsx";
import "./index.css";
import Layout from "./layout.tsx";

interface NestedRoute extends NonIndexRouteObject {
  titleBar?: string;
  titleBarIcon?: React.ReactNode;
  sideBar?: React.ReactNode;
  children?: Array<NestedRoute>;
}

export function getRoutePath(path: string, nestedPath?: string) {
  const route = routes.find((child) => child.path === path);
  if (!route) return undefined;
  if (nestedPath) {
    return route.children?.find((child) => child.path === nestedPath);
  } else {
    return route;
  }
}

export const routes: Array<NestedRoute> = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LearnMorePage /> },
      { path: "/company", element: <CompanyPage /> },
      {
        path: "/get",
        element: <GetPage />,
        children: [
          {
            path: "/get",
            element: <EditionsPage />,
            titleBar: "Choose an edition",
            titleBarIcon: <Editions />,
            sideBar: <EditionsSidebar />,
          },
          {
            path: "/get/size",
            element: <SizePage />,
            titleBar: "Choose your size",
            titleBarIcon: <Crop size={24} />,
            sideBar: <LensPreviewSidebar />,
          },
          {
            path: "/get/color",
            element: <ColorsPage />,
            titleBar: "Choose a color",
            titleBarIcon: <Palette size={24} />,
            sideBar: <LensPreviewSidebar />,
          },
          {
            path: "/get/plans",
            element: <PlansPage />,
            titleBar: "Choose your plan",
            titleBarIcon: <CurrencyCircleDollar size={24} />,
            sideBar: <LensPreviewSidebar />,
          },
          {
            path: "/get/checkout",
            element: <CheckoutPage />,
            titleBar: "Confirmation",
            titleBarIcon: <CheckCircle weight="fill" size={24} />,
            sideBar: <CheckoutSidebar />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
