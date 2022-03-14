import Link from "next/link";
import { FC } from "react";

const ProjectGrid : FC = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-4 h-full w-full">
      <Link href="/projects/iterative-design">
        <div className="border-4 rounded-lg border-gray-200 w-full h-full p-5 flex flex-row justify-between cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-2xl">
          <div className="overflow-hidden">
            <h3 className="text-lg font-nunito font-bold">
              Iterative Design: HelloSaurus
            </h3>
            <p className="text-md font-mont">
              An unsolicited redesign of the startup HelloSaurus, an educational
              video platform for kids.
            </p>
          </div>
          <img
            className="h-full w-full object-contain"
            src="/images/hello-dino.png"
          ></img>
        </div>
      </Link>
      <Link href="/projects/development">
        <div className="overflow-hidden relative border-4 rounded-lg border-gray-200 w-full h-full cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-2xl">
          <div className="z-10 absolute p-5">
            <h3 className="text-lg font-nunito font-bold">
              React Development: The Plant Shop
            </h3>
            <p className="text-md font-mont">
              A basic React app using Ant Design to practice React.js with a
              filtered and sorted product layout.
            </p>
          </div>
          <img
            className="opacity-40 z-0 h-full w-full object-cover transition-opacity duration-300 hover:opacity-30"
            src="/images/plants.jpeg"
          ></img>
        </div>
      </Link>
      <Link href="/projects/ab-testing">
        <div className="overflow-hidden relative border-4 rounded-lg border-gray-200 w-full h-full cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-2xl">
          <div className="z-10 absolute p-5">
            <h3 className="text-lg font-nunito font-bold">
              A/B Testing: The Cactus Shop
            </h3>
            <p className="text-md font-mont">
              An A/B user test using statistical analysis to analyze the
              difference in user engagement based on a layout change.
            </p>
          </div>
          <img
            className="opacity-40 z-0 h-full w-full object-cover transition-opacity duration-300 hover:opacity-30"
            src="/images/cacti.jpeg"
          ></img>
        </div>
      </Link>
      <Link href="/projects/responsive-redesign">
        <div className="overflow-hidden relative border-4 rounded-lg border-gray-200 w-full h-full cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-2xl">
          <div className="z-10 absolute p-5">
            <h3 className="text-lg font-nunito font-bold">
              Responsive Redesign: Ormsby's Computers
            </h3>
            <p className="text-md font-mont">
              A responsive redesign and implementation of the homepage of
              Ormsby's Computer Systems in Central Vermont.
            </p>
          </div>
          <img
            className="opacity-40 z-0 h-full w-full object-cover transition-opacity duration-300 hover:opacity-30"
            src="/images/bridge.jpg"
          ></img>
        </div>
      </Link>
    </div>
  );
}

export default ProjectGrid