import AddTodo from "../components/todo/AddTodo";
import ResetTodos from "../components/todo/ResetTodos";
import Todos from "../components/todo/Todos";

const Home = () => {
  return (
    <div className="shrink-0 grow flex flex-wrap flex-col items-center justify-between max-h-[700px] h-full min-h-[500px] max-w-[400px] min-w-[280px] overflow-auto gap-2">
      <ResetTodos />
      <Todos />
      <AddTodo />
    </div>
  );
};

export default Home;

// responsive without media query

// height control

// 어떤 값이 다른 값에 relative하기 원할 때 relative unit을 쓴다.

// center not work

// it overflow but not scrolled!

// weired behavior
