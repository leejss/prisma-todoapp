import type { ReactNode } from "react";
import AddTodo from "./todo/AddTodo";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid sm:grid-cols-[150px_1fr] grid-rows-[100px_1fr_auto] h-screen p-3 bg-cold-black text-neon-green">
      <nav className="hidden sm:block">
        <h1>hello!</h1>
      </nav>
      <header className="flex flex-col justify-between items-start mb-2">
        <h1 className="text-3xl font-bold">Todos</h1>
        <span className="text-sm bg-light-dark px-1 rounded">작업</span>
      </header>
      <main>{children}</main>
      <AddTodo />
    </div>
  );
};

export default Layout;
