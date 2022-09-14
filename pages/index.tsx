import Link from "next/link";
import type { ReactNode } from "react";

const Home = () => {
  return (
    <div>
      <Title>TodoApp with prisma</Title>
      {/* Todo list */}
      <div className="flex justify-center mt-6">
        <AddTodoButton />
      </div>
    </div>
  );
};

export default Home;

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-bold text-center text-orange-700 text-8xl">
      {children}
    </h1>
  );
};

const AddTodoButton = () => {
  return (
    <button className="p-4 text-3xl font-bold border border-orange-500 rounded-lg hover:text-orange-500">
      <Link href="add">ADD TODO</Link>
    </button>
  );
};
