import ClearLens from "@/assets/ClearLens.png";
import ColorLens from "@/assets/ColorLens.png";
import { LensBuilderContext } from "@/context/LensBuilderContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


export default function EditionsPage() {
  const [lensBuilder, setLensBuilder] = useContext(LensBuilderContext);
  return (
    <div className="flex gap-4">
      <Link
        onClick={() => {
          setLensBuilder!((current) => {
            return { ...current, edition: "clear" };
          });
        }}
        className={
          "flex w-full flex-col items-center py-5 bg-background/50 rounded-2xl " +
          (lensBuilder?.edition == "clear" && "bg-primary")
        }
        to={"/get/size"}
      >
        <img className="w-16 h-16" src={ClearLens} />
        <p>Clear</p>
      </Link>
      <Link
        onClick={() => {
          setLensBuilder!((current) => {
            return { ...current, edition: "color" };
          });
        }}
        className={
          "flex w-full flex-col items-center py-5 bg-background/50 rounded-2xl " +
          (lensBuilder?.edition == "color" && "bg-primary")
        }
        to={"/get/size"}
      >
        <img className="w-16 h-16" src={ColorLens} />
        <p>Color</p>
      </Link>
    </div>
  );
}
