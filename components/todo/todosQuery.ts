import { Todo } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const getTodos = async () => {
  const { data } = await axios.get("/api/todos");
  // await sleep(3000);
  return data;
};

const useTodosQuery = () => {
  const todosQuery = useQuery<Todo[]>({
    queryFn: getTodos,
    queryKey: ["todos"],
  });
  return todosQuery;
};

export default useTodosQuery;
