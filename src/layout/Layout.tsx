import Title from "@/components/Title";
import { AppBar } from "./AppBar";

export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}
