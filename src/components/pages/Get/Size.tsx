import DashedCircle from "@/components/svg/dashedcircle";
import { LensBuilderContext } from "@/context/LensBuilderContext";
import { Baby, Person } from "@phosphor-icons/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const adultSizes = ["16mm", "14mm", "12mm"];
const childSizes = ["8mm", "7mm", "6mm"];

export default function SizePage() {
  const [lensBuilder, setLensBuilder] = useContext(LensBuilderContext);
  return lensBuilder?.edition ? (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2 opacity-50">
        <Person size={24} />
        <h2 className="text-lg font-semibold">Adult - Teen</h2>
      </span>
      <div className="flex flex-row flex-wrap justify-evenly gap-8">
        {adultSizes.map((i) => (
          <DashedCircle
            color="primary"
            link={lensBuilder.edition === "color" ? "/get/color" : "/get/plans"}
            selected={lensBuilder?.size === i}
            onClick={() => {
              setLensBuilder!((current) => {
                return { ...current, size: i };
              });
            }}
            className="w-20 text-xl"
          >
            {i}
          </DashedCircle>
        ))}
      </div>
      <span className="flex items-center gap-2 opacity-50 pt-2">
        <Baby size={24} />
        <h2 className="text-lg font-semibold">Baby</h2>
      </span>
      <div className="flex flex-row flex-wrap justify-evenly gap-8">
        {childSizes.map((i) => (
          <DashedCircle
            link={lensBuilder.edition === "color" ? "/get/color" : "/get/plans"}
            selected={lensBuilder?.size === i}
            onClick={() => {
              setLensBuilder!((current) => {
                return { ...current, size: i };
              });
            }}
            className="w-20 text-xl"
          >
            {i}
          </DashedCircle>
        ))}
      </div>
    </div>
  ) : (
    <Navigate to={"/get"} />
  );
}
