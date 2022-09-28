import type { Todo } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import formatDate from "../../utils/formatDate";
import Checkbox from "../Checkbox";

interface ItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: ItemProps) => {
  const { content, createdAt, done, id } = todo;

  // const { mutate } = useMutation();
  const queryClient = useQueryClient();
  // queryClient.invalidateQueries()
  // invalidate queries

  return (
    <div className="flex items-center justify-between p-1 bg-gray-100 rounded-md">
      <div>
        <p className="text-lg">{content}</p>
        <span className="text-sm text-gray-400">
          createdAt: {formatDate(new Date(createdAt))}
        </span>
      </div>
      <div>
        <Checkbox checked={done} onChange={() => {}} value={`${id}`} />
      </div>
    </div>
  );
};

export default TodoItem;
