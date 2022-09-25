import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main
      className="flex justify-center items-center p-[60px] h-[100vh]"
      style={{
        backgroundImage: "linear-gradient(0deg, #87dbfa 0%, #a1fbd3 100%)",
      }}
    >
      {children}
    </main>
  );
};

export default Layout;
