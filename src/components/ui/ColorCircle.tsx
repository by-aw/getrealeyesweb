import DashedCircle from "../svg/dashedcircle";

export default function ColorCircle({
  className,
  name,
  selected,
  onClick,
  color,
  link,
}: {
  className: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
  color: string;
  link: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-center ">
      <DashedCircle
        className={className}
        onClick={onClick}
        link={link}
        color={color}
        selected={selected}
      />
      <p>{name}</p>
    </div>
  );
}
