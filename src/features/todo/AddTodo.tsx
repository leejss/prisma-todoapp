import type { Prisma } from "@prisma/client";
import { useAddTodoMutation } from "@root/src/services/todo/todo.query";
import { useState } from "react";

const AddTodo = () => {
  const [content, setContent] = useState("");
  const { mutate } = useAddTodoMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!content) return;
        const todo: Prisma.TodoCreateInput = {
          content,
          done: false,
        };
        mutate(todo, {
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
