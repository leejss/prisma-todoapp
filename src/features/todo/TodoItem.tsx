import Checkbox from "@root/src/components/Checkbox";
import { useDoneTodoMutation } from "@root/src/services/todo/todo.query";
import { formatTodoDate } from "@root/src/utils/dateHelper";
import { FC } from "react";

interface TodoItemProps {
  content: string;
  date: Date;
  done: boolean;
  id: number;
}

const TodoItem: FC<TodoItemProps> = ({ content, date, done, id }) => {
  const { mutate } = useDoneTodoMutation();
  const toggleDone = () => {
    if (done) {
      mutate({
        id,
        done: false,
      });
    } else {
      mutate({
        id,
        done: true,
      });
    }
  };
  return (
    <li className="animate-fadeIn flex bg-dar text-white p-2 rounded bg-dark-800">
      <button className="flex justify-center items-center px-3">
        <Checkbox checked={done} onChange={toggleDone} />
      </button>
      <div className="flex flex-col text-sm">
        <p className="">{content}</p>
        <div>
          <span className="text-gray-400">Tasks </span>
          <span>{formatTodoDate(new Date(date))}</span>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
