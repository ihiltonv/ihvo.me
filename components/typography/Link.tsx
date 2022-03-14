import NextLink from "next/link";
import { FC } from "react";
import classNames from "classnames";

const Link: FC<{ to: string; external?: boolean; className?: string }> = ({
  children,
  to,
  external = false,
  className,
}) => {
  const internal = (
    <a
      href={to}
      className={classNames(
        "block font-sans font-bold transition duration-300 ease-in-out text-purple-800 hover:text-purple-600",
        className
      )}
    >
      {children}
    </a>
  );

  if (!external) {
    return <NextLink href={to}>{internal}</NextLink>;
  }

  return internal;
};

export default Link;
