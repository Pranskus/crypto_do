declare module "react-sparklines" {
  import { ComponentType, ReactNode } from "react";

  export interface SparklinesProps {
    data: number[];
    limit?: number;
    width?: number;
    height?: number;
    margin?: number;
    min?: number;
    max?: number;
    children?: ReactNode;
  }

  export interface SparklinesLineProps {
    color?: string;
    style?: React.CSSProperties;
  }

  export const Sparklines: ComponentType<SparklinesProps>;
  export const SparklinesLine: ComponentType<SparklinesLineProps>;
}
