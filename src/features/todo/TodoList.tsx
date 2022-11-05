import { useTodosQuery } from "@root/src/services/todo/todo.query";
import Spinner from "@src/components/Spinner";
import { atom } from "jotai";
import TodoItem from "./TodoItem";

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
          <TodoItem key={id} id={id} content={content} date={createdAt} done={done} />
        ))}
    </ul>
  );
};

export default TodoList;
