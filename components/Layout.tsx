import type { ReactNode } from "react";
import Header from "./Header";
import NavList from "./NavList";
import AddTodo from "./todo/AddTodo";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid sm:grid-cols-[150px_1fr] h-screen bg-cold-black text-neon-green">
      <nav className="hidden sm:block bg-cold-dark p-3 shadow-inner">
        <NavList />
      </nav>
      <main className="grid grid-rows-[100px_1fr_auto] p-3">
        <Header />
        {children}
        <AddTodo />
      </main>
    </div>
  );
};

export default Layout;
