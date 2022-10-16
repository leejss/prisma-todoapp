import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main
      className="fixed top-0 left-0 right-0 bottom-0  overflow-auto flex justify-center "
      style={{
        backgroundImage: "linear-gradient(0deg, #87dbfa 0%, #a1fbd3 100%)",
      }}
    >
      {children}
    </main>
  );
};

export default Layout;

//  height 100vh
// fixed

// position fixed

// positioned relative to initial containing block established by the viewport
// but checkout the ancestor!
// creates new stacking context

// which one is more responsive ?

// why center not workd??

// scroll container
