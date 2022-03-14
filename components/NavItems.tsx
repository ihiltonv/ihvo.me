import { FC } from "react";

export enum Sections {
  top = "top",
  projects = "projects",
  aboutMe = "aboutme",
}

const NavItems: FC<{
  current: Sections;
  scroll: (scrollTo: Sections) => void;
}> = ({ current, scroll }) => {
  return (
    <>
      <div className="space-y-8 text-right">
        <h3
          className={
            "cursor-pointer font-nunito " +
            (current === "top" ? "text-xl font-bold" : "text-sm text-gray-500")
          }
          onClick={() => scroll(Sections.top)}
        >
          Home
        </h3>
        <h3
          className={
            "cursor-pointer font-nunito " +
            (current === "projects"
              ? "text-xl font-bold"
              : "text-sm text-gray-500")
          }
          onClick={() => scroll(Sections.projects)}
        >
          Projects
        </h3>
        <h3
          className={
            "cursor-pointer font-nunito " +
            (current === "aboutme"
              ? "text-xl font-bold"
              : "text-sm text-gray-500")
          }
          onClick={() => scroll(Sections.aboutMe)}
        >
          About Me
        </h3>
      </div>
    </>
  );
};

export default NavItems;
