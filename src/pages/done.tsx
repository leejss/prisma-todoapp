import { useTodosQuery } from "@services/todo/todo.query";
import TodoItem from "@features/todo/TodoItem";

const DonePage = () => {
  const { data } = useTodosQuery();

  if (!data) return null;

  return (
    <div>
      {data
        .filter((d) => d.done)
        .map((todo) => (
          <TodoItem key={todo.id} date={todo.createdAt} {...todo} />
        ))}
    </div>
  );
};

export default DonePage;
