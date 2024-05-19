import ColorCircle from "@/components/ui/ColorCircle";
import { LensBuilderContext } from "@/context/LensBuilderContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const colors = [
  { color: "red", name: "we love red" },
  { color: "green", name: "moolah" },
  { color: "blue", name: "watar" },
  { color: "orange", name: "caramel" },
  { color: "violet", name: "ultra-violet" },
  { color: "pp", name: "pp" },
  { color: "nm", name: "nm" },
];

export default function ColorsPage() {
  const [lensBuilder, setLensBuilder] = useContext(LensBuilderContext);
  function updateColorIntensity(value: string) {
    setLensBuilder!((current) => {
      return { ...current, intensity: value };
    });
    document.documentElement.style.setProperty(
      "--intensity",
      value !== "10" ? "." + value : "1"
    );
  }
  return lensBuilder?.size ? (
    <>
      <h2 className="text-lg font-semibold opacity-50">Colors</h2>
      <div className="flex flex-row flex-wrap justify-evenly gap-8 h-max">
        {colors.map((i) => (
          <ColorCircle
            key={i.color}
            selected={lensBuilder?.color === i.color}
            onClick={() => {
              setLensBuilder!((current) => {
                return { ...current, color: i.color };
              });
            }}
            name={i.name}
            link="/get/plans"
            className="w-20 h-20"
            color={i.color}
          />
        ))}
      </div>
      <h2 className="text-lg font-semibold opacity-50">Intensity</h2>
      <input
        onChange={(ev) => {
          updateColorIntensity(ev.currentTarget.value);
        }}
        className="w-full"
        min={1}
        max={10}
        value={lensBuilder?.intensity}
        type="range"
      />
    </>
  ) : (
    <Navigate to={"/get/size"} />
  );
}
