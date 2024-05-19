import { LensBuilderContext } from "@/context/LensBuilderContext";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { EyePreview } from "./Sidebar/EyePreview";

export default function CheckoutPage() {
  const [lensBuilder] = useContext(LensBuilderContext);

  return lensBuilder?.plan ? (
    <div className="flex flex-col gap-4">
      <div className="md:hidden w-[100dvw] h-[calc(100%)] absolute top-0 left-0 pointer-events-none">
        <EyePreview color drag />
      </div>
      <h2 className="text-lg font-semibold">Your order has been placed</h2>
      <p>Estimated Arival: 2-3 days</p>
      <p>Shipping to: 123 Street Street</p>
      <p>Phone: 800-804-8080</p>
      <div className="flex gap-4 mt-auto lg:flex-row flex-col">
        <Link
          className="p-4 transition-all hover:bg-background/50 rounded-lg border border-background/50 w-full text-center"
          to="/"
        >
          Delivery Updates
        </Link>
        <Link
          className="p-4 transition-all hover:bg-background/50 rounded-lg border border-background/50 w-full text-center"
          to="/"
        >
          View Invoice
        </Link>
      </div>
    </div>
  ) : (
    <Navigate to={"/get/plans"} />
  );
}
