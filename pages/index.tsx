import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <section className="bg-[url('/images/home/golden_hills.jpg')] bg-cover bg-center h-screen w-full">
        <nav className="flex justify-between px-4 py-2">
          <div>Isaac</div>
          <Link href="/gallery">Gallery</Link>
        </nav>
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-5xl text-white">Isaac Hilton-VanOsdall</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
