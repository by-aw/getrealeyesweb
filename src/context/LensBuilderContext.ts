import { createContext } from "react";

export type LensBuilderContextProps = {
  edition?: string;
  size?: string;
  color?: string;
  plan?: string;
  intensity?: string;
};

export const LensBuilderContext = createContext<
  [
    LensBuilderContextProps | undefined,
    React.Dispatch<React.SetStateAction<LensBuilderContextProps>> | undefined
  ]
>([undefined, undefined]);
