import { Link } from "react-router-dom";

export default function DashedCircle({
  className,
  selected,
  children,
  onClick,
  color,
  link,
}: {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  link: string;
}) {
  return (
    <Link onClick={onClick} to={link}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 88 88"
        fill="none"
      >
        <circle
          style={{
            fill: selected
              ? `hsla(var(--${color ?? "primary"}))`
              : `hsla(var(--${color ?? "primary"}))`,
            fillOpacity: selected ? 1 : 0.5,
            stroke: selected
              ? `hsl(var(--${color ?? "primary"}))`
              : `hsl(var(--${color ?? "primary"}))`,
          }}
          cx="44"
          cy="44"
          r="42.5"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray={selected ? "0" : "16 16"}
        />
        <foreignObject className="w-full h-full">
          <div className="top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]">
            {children}
          </div>
        </foreignObject>
      </svg>
    </Link>
  );
}
