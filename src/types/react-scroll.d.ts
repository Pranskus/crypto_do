declare module "react-scroll" {
  import { ComponentType, ReactNode } from "react";

  interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    children?: ReactNode;
    className?: string;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<{ name: string; children?: ReactNode }>;
}
