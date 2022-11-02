import { formatTodoDate } from "../../utils/dateHelper";
import Checkbox from "../Checkbox";
import useTodosQuery from "./todosQuery";

const TodoList = () => {
  const todosQuery = useTodosQuery();

  return (
    <ul className="flex flex-col gap-1">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoList;

const TodoItem = () => {
  return (
    <li className="flex bg-warm-dark text-white p-2 rounded">
      <button className="flex justify-center items-center px-3">
        <Checkbox checked value="" onChange={() => {}} />
      </button>
      <div className="flex flex-col text-sm">
        <p className="">you dont know js yet chapter 6 읽기</p>
        <div>
          <span className="text-gray-400">Tasks </span>
          <span>{formatTodoDate(new Date())}</span>
        </div>
      </div>
    </li>
  );
};
