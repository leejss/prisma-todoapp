import type { Todo } from "@prisma/client";
import { formatDate } from "../../utils/dateHelper";
import Checkbox from "../Checkbox";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useDeleteTodoMutation, usePatchTodoMutation } from "./todoMutation";

interface ItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: ItemProps) => {
  const { content, createdAt, done, id } = todo;
  const deleteMutation = useDeleteTodoMutation();
  const patchMutation = usePatchTodoMutation();

  return (
    <div className="flex items-center justify-between p-1 bg-gray-100 rounded-md">
      <div>
        <p className="text-lg">{content}</p>
        <span className="text-sm text-gray-400">
          createdAt: {formatDate(new Date(createdAt))}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => {
            deleteMutation.mutate(id);
          }}
        >
          <Cross2Icon width={24} height={24} />
        </button>
        <Checkbox
          checked={done}
          onChange={() => {
            console.log("???");

            patchMutation.mutate({
              id,
              data: {
                done: !todo.done,
              },
            });
          }}
          value={`${id}`}
        />
      </div>
    </div>
  );
};

export default TodoItem;
