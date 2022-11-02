import type { Prisma } from "@prisma/client";
import {
  useMutation,
  useQueryClient,
  MutateFunction,
} from "@tanstack/react-query";
import axios from "axios";

type MutateFn = (input: Prisma.TodoCreateInput) => Promise<any>;

export const postTodo = async (todoInput: Prisma.TodoCreateInput) => {
  const res = await axios.post("/api/todos", todoInput);
  return res.data;
};

export const useMut = (fn: MutateFn) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(fn, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return mutation;
};

// export declare function useMutation<
//   TData = unknown,
//   TError = unknown,
//   TVariables = void,
//   TContext = unknown
// >(
//   mutationFn: MutationFunction<TData, TVariables>,
//   options?: Omit<
//     UseMutationOptions<TData, TError, TVariables, TContext>,
//     "mutationFn"
//   >
// ): UseMutationResult<TData, TError, TVariables, TContext>;

// mutationFn: MutationFunction<TData, TVariables>
// export declare type MutateFunction<
//   TData = unknown,
//   TError = unknown,
//   TVariables = void,
//   TContext = unknown
// > = (
//   variables: TVariables,
//   options?: MutateOptions<TData, TError, TVariables, TContext>
// ) => Promise<TData>;

// set generic via keyword ?

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

// input type이 정해지도록?

// export declare function useMutation<
//   TData = unknown,
//   TError = unknown,
//   TVariables = void,
//   TContext = unknown
// >(
//   mutationKey: MutationKey,
//   options?: Omit<
//     UseMutationOptions<TData, TError, TVariables, TContext>,
//     "mutationKey"
//   >
// ): UseMutationResult<TData, TError, TVariables, TContext>;
// export declare function useMutation<
//   TData = unknown,
//   TError = unknown,
//   TVariables = void,
//   TContext = unknown
// >(
//   mutationKey: MutationKey,
//   mutationFn?: MutationFunction<TData, TVariables>,
//   options?: Omit<
//     UseMutationOptions<TData, TError, TVariables, TContext>,
//     "mutationKey" | "mutationFn"
//   >
// ): UseMutationResult<TData, TError, TVariables, TContext>;

// useMutation(mutateFn)
// type input

// How to capture the type ?

// type argument inference

//  Here we use type argument inference — that is, we want the compiler to set the value of Type for us automatically based on the type of the argument we pass in:

// generic type variable
