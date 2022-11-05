import AddTodo from "../components/todo/AddTodo";
import TodoList from "../components/todo/TodoList";

const Home = () => {
  return (
    <div className="grid grid-rows-[1fr_auto] gap-3 overflow-auto">
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default Home;
