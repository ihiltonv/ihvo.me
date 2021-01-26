import NextLink from "next/link";

export default function Link({
  children,
  to,
  external = false,
  size = "text-xl",
}) {
  const internal = (
    <a
      href={to}
      className={
        "block font-sans font-bold transition duration-300 ease-in-out text-purple-800 hover:text-purple-600 " +
        size
      }
    >
      {children}
    </a>
  );

  if (!external) {
    return <NextLink href={to}>{internal}</NextLink>;
  }

  return internal;
}
