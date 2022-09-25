import { Prisma, Todo } from "@prisma/client";

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch("http://localhost:3000/api/todos");
  if (!res.ok) throw new Error("Something went wrong");
  return await res.json();
}
export async function postTodos(body: Prisma.TodoCreateInput) {
  const res = await fetch("http://localhost:3000/api/todos", {
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Something went wrong");
  return await res.json();
}
