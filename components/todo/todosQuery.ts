import { Todo } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getTodos = async () => {
  const { data } = await axios.get("/api/todos");
  return data;
};

const useTodosQuery = () => {
  const todosQuery = useQuery<Todo[]>(["todos"], getTodos);
  return todosQuery;
};

export default useTodosQuery;
