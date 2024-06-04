import { LensBuilderContext } from "@/context/LensBuilderContext";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { EyePreview } from "./EyePreview";

export function LensPreviewSidebar() {
  const [lensBuilder] = useContext(LensBuilderContext);
  const dragConstraintsRef = useRef(null);
  const sliderPosition = useMotionValue(0);
  const size = useTransform(sliderPosition, [0, 258], ["0%", "100%"]);
  return (
    <div className="flex p-1 bg-gradient-to-br from-purple-600/15 to-orange-600/15 rounded-[20px] md:w-[45%]">
      <div
        ref={dragConstraintsRef}
        className="w-full h-full bg-secondary rounded-[16px] flex relative"
      >
        {lensBuilder?.color && (
          <motion.div
            drag="x"
            dragElastic={false}
            dragConstraints={dragConstraintsRef}
            onUpdate={(latest) => {
              sliderPosition.set(latest.x as number);
            }}
            className="absolute h-full flex flex-col z-20"
          >
            <p className="beforeafter px-1 py-3 bg-primary rounded-full left-[50%] z-20 select-none hover:drop-shadow-lg">
              Before / After
            </p>
            <div className="bg-primary h-full rounded-full w-2 flex-1 absolute left-[50%] translate-x-[-50%]" />
          </motion.div>
        )}
        <EyePreview color />
        <div
          style={{
            height: `var(--s${lensBuilder?.size})`,
            width: `var(--s${lensBuilder?.size})`,
          }}
          className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
        >
          <motion.div
            style={{ width: size }}
            className="w-[200px] overflow-clip clip"
          >
            <EyePreview />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
