import type { Prisma } from "@prisma/client";
import axios from "axios";

export const postTodo = async (todoInput: Prisma.TodoCreateInput) => {
  const res = await axios.post("/api/todos", todoInput);
  return res.data;
};
