import type { Prisma } from "@prisma/client";
import axios from "axios";

const TODO_URL = "/api/todos";

export const getTodos = async () => {
  const { data } = await axios.get(TODO_URL);
  return data;
};

export const postTodo = async (todoInput: Prisma.TodoCreateInput) => {
  const res = await axios.post(TODO_URL, todoInput);
  return res.data;
};

export const patchTodo = async (patchInput: { id: number; done: boolean }) => {
  // id, done
  const res = await axios.patch(`/api/todos/${patchInput.id}`, patchInput);
  return res.data;
};

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
