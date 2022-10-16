import Skeleton from "react-loading-skeleton";
import TodoItem from "./TodoItem";
import useTodosQuery from "./todosQuery";

const Todos = () => {
  const todosQuery = useTodosQuery();

  return (
    <>
      <div className="flex-1 w-full p-2 bg-white rounded-md h-full overflow-auto">
        {todosQuery.isLoading ? (
          <div className="flex flex-col gap-2">
            <Skeleton height={35} />
            <Skeleton height={35} />
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {todosQuery.isSuccess &&
              todosQuery.data.map((todo) => (
                <li key={todo.id}>
                  <TodoItem todo={todo} />
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Todos;
