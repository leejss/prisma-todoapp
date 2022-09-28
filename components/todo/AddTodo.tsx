import type { Prisma } from "@prisma/client";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import useTodoMutation, { postTodo } from "./todoMutation";

const AddTodo = () => {
  const [content, setContent] = useState("");
  const mutation = useTodoMutation();
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
      className="flex w-full gap-2 py-2"
    >
      <Button type="submit">Add</Button>
      <Input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </form>
  );
};

export default AddTodo;
