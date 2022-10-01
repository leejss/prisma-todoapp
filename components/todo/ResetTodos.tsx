import { useResetTodoMutation } from "./todoMutation";

const ResetTodos = () => {
  const mutation = useResetTodoMutation();

  if (mutation.isError) {
    // return
  }

  return (
    <button
      className="bg-orange-400 w-full rounded-lg text-white py-1 px-2 font-bold"
      onClick={() => {
        mutation.mutate();
      }}
    >
      Reset Todos
    </button>
  );
};

export default ResetTodos;
