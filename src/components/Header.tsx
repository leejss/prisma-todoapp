import { useRouter } from "next/router";
import { nav } from "./NavList";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex flex-col justify-between items-start mb-2">
      <h1 className="text-3xl font-bold">{nav[router.pathname as keyof typeof nav]}</h1>
    </header>
  );
};

export default Header;
