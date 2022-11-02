const Header = () => {
  return (
    <header className="flex flex-col justify-between items-start mb-2">
      <h1 className="text-3xl font-bold">Todos</h1>
      <span className="text-sm bg-light-dark px-1 rounded">작업</span>
    </header>
  );
};

export default Header;
