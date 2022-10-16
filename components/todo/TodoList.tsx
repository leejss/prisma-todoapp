import { ValueIcon } from "@radix-ui/react-icons";
import Skeleton from "react-loading-skeleton";
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

  // return (
  //   <>
  //     <div className="flex-1 w-full p-2 bg-white rounded-md h-full overflow-auto">
  //       {todosQuery.isLoading ? (
  //         <div className="flex flex-col gap-2">
  //           <Skeleton height={35} />
  //           <Skeleton height={35} />
  //         </div>
  //       ) : (
  //         <ul className="flex flex-col gap-2">
  //           {todosQuery.isSuccess &&
  //             todosQuery.data.map((todo) => (
  //               <li key={todo.id}>
  //                 <TodoItem todo={todo} />
  //               </li>
  //             ))}
  //         </ul>
  //       )}
  //     </div>
  //   </>
  // );
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
          <span>Tasks</span>
          <span>Sun, Oct 9</span>
        </div>
      </div>
    </li>
  );
};
