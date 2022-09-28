import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Prisma } from "@prisma/client";
import axios from "axios";

export const postTodo = async (todoInput: Prisma.TodoCreateInput) => {
  const res = await axios.post("/api/todos", todoInput);
  return res;
};

const useTodoMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return mutation;
};

export default useTodoMutation;
