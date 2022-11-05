import type { ReactNode } from "react";
import Header from "./Header";
import NavList from "./NavList";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid sm:grid-cols-[150px_1fr] bg-dark-900 text-neon-green">
      <nav className="hidden sm:block bg-dark-800 p-3 shadow-inner">
        <NavList />
      </nav>
      <main className="grid grid-rows-[100px_1fr] h-screen p-3">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
