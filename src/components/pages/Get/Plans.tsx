import { LensBuilderContext } from "@/context/LensBuilderContext";
import { CheckCircle, Plus } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

export function PlusPlan({
  details,
  selected,
  onClick,
}: {
  details?: boolean;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`flex ${details && "flex-col"} md:${
        details ? "flex-col px-4" : "flex-row"
      } flex-col gap-4 py-4 px-3 md:px-4 pr-4 bg-plus-gradient rounded-2xl mt-auto items-center justify-between w-full mb-4`}
    >
      <span
        className={`w-full md:${
          details ? "w-full" : "w-max"
        } flex flex-col gap-2`}
      >
        <span className="flex items-center">
          <h3 className="text-xl font-semibold">RealEyes</h3>
          <Plus className="mr-auto" />
          {selected && <CheckCircle weight="fill" size={32} className="" />}
        </span>
        {details ? (
          <>
            <p>Get new lenses weekly</p>
            <p>Free replacements</p>
            <p>24/7 Medical assistance</p>
            <p className="text-sm opacity-80">$6.99 / month</p>
          </>
        ) : (
          <>
            <p>Get new lenses weekly</p>
          </>
        )}
      </span>
      <Link
        onClick={onClick}
        className={`text-center p-2 bg-plus-bg rounded-xl h-max w-full md:${
          details ? "w-full" : "w-max"
        } shadow-plus-shadow`}
        to="/get/checkout"
      >
        {details ? "Choose" : "Learn more"}
      </Link>
    </div>
  );
}

export function BasicPlan({
  selected,
  onClick,
}: {
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 p-4 pr-4 bg-background/50 rounded-2xl justify-between w-full`}
    >
      <span className="flex flex-col gap-2">
        <span className="w-full flex">
          <h3 className="text-xl font-semibold mr-auto">Basic</h3>
          {selected && <CheckCircle weight="fill" size={32} className="" />}
        </span>
        <p>Single use set</p>
        <p>1 time replacement</p>
        <p className="text-sm opacity-80">$2 / one time</p>
      </span>

      <Link
        onClick={onClick}
        className={`text-center p-2 bg-secondary hover:bg-plus-bg rounded-xl h-max w-full hover:shadow-plus-shadow`}
        to="/get/checkout"
      >
        Choose
      </Link>
    </div>
  );
}

export default function PlansPage() {
  const [lensBuilder, setLensBuilder] = useContext(LensBuilderContext);
  function setPlan(plan: string) {
    setLensBuilder!((current) => {
      return { ...current, plan: plan };
    });
  }
  return lensBuilder?.color || lensBuilder?.edition === "clear" ? (
    <div className="flex gap-6 flex-col lg:flex-row">
      <PlusPlan
        onClick={() => setPlan("plus")}
        selected={lensBuilder?.plan == "plus"}
        details
      />
      <BasicPlan
        onClick={() => setPlan("basic")}
        selected={lensBuilder?.plan == "basic"}
      />
    </div>
  ) : (
    <Navigate to={"/get/color"} />
  );
}
