import Link from "next/link";

export const nav = {
  "/": "Todos",
  "/done": "Done",
};

const NavList = () => {
  return (
    <ul>
      {Object.keys(nav).map((n) => (
        <ul key={n}>
          <Link href={n}>{nav[n as keyof typeof nav]}</Link>
        </ul>
      ))}
    </ul>
  );
};

export default NavList;
