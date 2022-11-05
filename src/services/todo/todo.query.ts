import { Todo } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos, patchTodo, postTodo } from "./todo.api";

export const useTodosQuery = () => {
  return useQuery<Todo[]>({
    queryFn: getTodos,
    queryKey: ["todos"],
  });
};

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
};

export const useDoneTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
};
