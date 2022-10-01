import ResetTodos from "../components/todo/ResetTodos";
import Todos from "../components/todo/Todos";

const Home = () => {
  return (
    <div className=" shrink-0 grow flex flex-col items-center justify-between h-full  max-w-[400px] min-w-[280px]">
      <ResetTodos />
      <Todos />
    </div>
  );
};

export default Home;
