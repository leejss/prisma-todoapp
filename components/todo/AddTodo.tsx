import type { Prisma } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { postTodo } from "../../api/todo";
import { listNodeAtom } from "./TodoList";

const AddTodo = () => {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  // const listNode = useAtomValue(listNodeAtom);

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!content) return;
        const todo: Prisma.TodoCreateInput = {
          content,
          done: false,
        };
        mutation.mutate(todo, {
          onSuccess: () => {
            setContent("");
          },
        });
      }}
      className="w-full min-h-[50px] bg-light-dark rounded flex items-center px-3"
    >
      <label htmlFor="addTodo" className="text-3xl">
        ﹢
      </label>
      <input
        id="addTodo"
        type="text"
        value={content}
        placeholder="Add a Task"
        className="w-full h-full outline-none bg-transparent px-2 text-sm placeholder:text-gray-700"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </form>
  );
};

export default AddTodo;
