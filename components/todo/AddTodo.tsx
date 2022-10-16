import type { Prisma } from "@prisma/client";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useTodosMutation } from "./todoMutation";

const AddTodo = () => {
  const [content, setContent] = useState("");
  const mutation = useTodosMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
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
      className="w-full min-h-[50px]  bg-light-dark rounded"
    >
      <input
        type="text"
        placeholder="Add a Task"
        className="w-full h-full bg-transparent px-2 text-sm placeholder:text-neon-green"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </form>
  );
};

export default AddTodo;
