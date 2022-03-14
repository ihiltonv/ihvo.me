import { FC } from "react";
import { Sections } from "../NavItems";

export enum Direction {
  up = "up",
  down = "down",
}

const NavArrow: FC<{
  scroll: (scrollTo: Sections) => void;
  direction: Direction;
  nextElement: Sections;
}> = ({ scroll, direction, nextElement }) => {
  return (
    <>
      <div className="inset-x-0">
        <svg
          className="h-16 w-16 ml-auto mr-auto mb-3 animate-bounce-slow cursor-pointer"
          onClick={() => scroll(nextElement)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {direction === Direction.down ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          )}
        </svg>
      </div>
    </>
  );
};

export default NavArrow;
