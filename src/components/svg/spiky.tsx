import { IS_SAFARI } from "@/utils";

export default function Spiky({ children }: { children: React.ReactNode }) {
  return IS_SAFARI ? (
    <div className="w-[128px] h-[134px] relative bg-primary rounded-full">
      <div className="top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </div>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="134"
      viewBox="0 0 128 134"
      fill="none"
      className="group"
    >
      <path
        d="M64 0L82.0747 11.3717L103.382 12.7959L111.32 32.6199L127.721 46.2959L122.491 67L127.721 87.7041L111.32 101.38L103.382 121.204L82.0747 122.628L64 134L45.9253 122.628L24.6184 121.204L16.6798 101.38L0.279213 87.7041L5.509 67L0.279213 46.2959L16.6798 32.6199L24.6184 12.7959L45.9253 11.3717L64 0Z"
        className="fill-primary origin-center motion-safe:group-hover:animate-spin-slow "
      ></path>
      <foreignObject className="w-[128px] h-[134px]">
        <div className="top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]">
          {children}
        </div>
      </foreignObject>
    </svg>
  );
}
