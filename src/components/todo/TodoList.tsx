import { useMutation } from "@tanstack/react-query";
import { atom } from "jotai";
import { FC } from "react";
import { formatTodoDate } from "../../utils/dateHelper";
import Checkbox from "../Checkbox";
import Spinner from "../Spinner";
import useTodosQuery from "./todosQuery";

export const listNodeAtom = atom<HTMLUListElement | null>(null);

const TodoList = () => {
  const { data, isLoading } = useTodosQuery();

  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="flex flex-col gap-1 overflow-auto">
      {data &&
        data.map(({ content, createdAt, done, id }) => (
          <TodoItem key={id} content={content} date={createdAt} done={done} />
        ))}
    </ul>
  );
};

export default TodoList;

interface TodoItemProps {
  content: string;
  date: Date;
  done: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ content, date, done }) => {
  // done todo
  const mutation = useMutation({});
  return (
    <li className="animate-fadeIn flex bg-dar text-white p-2 rounded bg-dark-800">
      <button className="flex justify-center items-center px-3">
        <Checkbox checked={done} value="" onChange={() => {}} />
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
