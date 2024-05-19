import eyeball from "@/assets/eyeball.png";
import { LensBuilderContext } from "@/context/LensBuilderContext";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";

export function EyePreview({
  color,
  drag,
}: {
  color?: boolean;
  drag?: boolean;
}) {
  const [lensBuilder] = useContext(LensBuilderContext);

  const imageRef = useRef<HTMLImageElement>(null);
  const [angle, setAngle] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const messageX = useTransform(x, [0, 40], ["100%", "-50%"]);
  const messageY = useTransform(y, [0, 40], ["100%", "-25%"]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (imageRef.current) {
        const imageBounds = imageRef.current.getBoundingClientRect();
        const imageCenterX = imageBounds.left + imageBounds.width / 2;
        const imageCenterY = imageBounds.top + imageBounds.height / 2;

        const dx = event.clientX - imageCenterX;
        const dy = event.clientY - imageCenterY;

        const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        setAngle(newAngle);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [angle]);
  const containerRef = useRef(null);
  return (
    <>
      <div
        ref={containerRef}
        className="w-[100dvw] h-[calc(100%-80px)] absolute top-20 left-0 invisible"
      />
      <motion.div
        drag={drag}
        dragConstraints={containerRef}
        onUpdate={(latest) => {
          x.set(latest.x as number);
          y.set(latest.y as number);
        }}
        style={{
          height: `var(--s${lensBuilder?.size})`,
          width: `var(--s${lensBuilder?.size})`,
          cursor: drag ? "grab" : "pointer",
        }}
        className="relative m-auto z-40 pointer-events-auto"
      >
        {drag && (
          <motion.div
            style={{ left: messageX, top: messageY }}
            className="absolute p-4 drop-shadow-2xl bg-background rounded-full h-max w-max"
          >
            Thank you!
          </motion.div>
        )}
        <img
          draggable={false}
          className="h-full w-full"
          style={{ transform: `rotate(${angle}deg)` }}
          ref={imageRef}
          src={eyeball}
        />
        <div
          style={{
            background: color ? `hsl(var(--${lensBuilder!.color}))` : "",
            height: `calc(var(--s${lensBuilder?.size}) - 64px)`,
            width: `calc(var(--s${lensBuilder?.size}) - 64px)`,
          }}
          className={
            "blur-sm mix-blend-overlay absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full"
          }
        />
      </motion.div>
    </>
  );
}
