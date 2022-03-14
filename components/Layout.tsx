import "../styles/globals.css";
import LeftArrow from "./icons/LeftArrow";
import Link from "next/link";
import { FC, ReactChild } from "react";

const Layout: FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <>
      <Link href="/#projects">
        <div className="fixed mx-2 my-3 flex flex-row justify-start cursor-pointer">
          <LeftArrow />
          <div className="inline-block pt-2 font-bold text-lg">home</div>
        </div>
      </Link>
      <div className="container mx-auto flex justify-center">
        <div className="inline-block my-10">{children}</div>
      </div>
    </>
  );
};

export default Layout;
