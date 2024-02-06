import { ReactNode } from "react";

type MainType = {
  children: ReactNode;
  className?: string;
};

export function Main({ children, className }: MainType) {
  return <main className={`${className} min-h-screen p-12 w-full`}>{children}</main>;
}
