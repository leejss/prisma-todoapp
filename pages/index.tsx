import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import Button from "../components/Button";
import Input from "../components/Input";
import Item from "../components/Item";
import { getTodos } from "../fetch-api/todos";

const Home = () => {
  const { data, isLoading } = useQuery(["todos"], getTodos);

  return (
    <div className=" shrink-0 grow flex flex-col items-center justify-between h-full  max-w-[400px] min-w-[280px]">
      <div className="flex-1 w-full p-2 bg-white rounded-md">
        {isLoading ? (
          <>
            <Skeleton height={35} />
            <Skeleton height={35} />
          </>
        ) : (
          <ul>
            <Item todo={data![0]} />
          </ul>
        )}
      </div>
      <div className="flex w-full gap-2 py-2">
        <Button>Add</Button>
        <Input />
      </div>
    </div>
  );
};

export default Home;

// Set loading state
