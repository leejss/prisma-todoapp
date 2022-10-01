import type { Prisma } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const postTodo = async (todoInput: Prisma.TodoCreateInput) => {
  const res = await axios.post("/api/todos", todoInput);
  return res.data;
};

export const useTodosMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return mutation;
};

export async function resetTodos() {
  const res = await axios.delete("/api/todos");
  return res.data;
}

export function useResetTodoMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation(resetTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return mutation;
}

export async function deleteTodo(id: number) {
  const res = await axios.delete(`/api/todos/${id}`);
  return res.data;
}

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return mutation;
}

export async function patchTodo({
  id,
  data,
}: {
  id: number;
  data: {
    done: boolean;
  };
}) {
  const res = await axios.patch(`/api/todos/${id}`, data);
  return res.data;
}

export function usePatchTodoMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation(patchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return mutation;
}
