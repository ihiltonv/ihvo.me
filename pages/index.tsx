import React, { FC, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import Link from "../components/typography/Link";
import "../styles/globals.css";

import NavArrow, { Direction } from "../components/icons/NavArrow";
import LinkedIn from "../components/icons/LinkedIn";
import Email from "../components/icons/Email";
import NavItems, { Sections } from "../components/NavItems";
import GitHub from "../components/icons/GitHub";
import ProjectList from "../components/ProjectList";

const Home : FC = () => {
  const [currPage, setCurrPage] = useState<Sections>(Sections.top);

  useEffect(() => {
    const callback = () => scrollListen(currPage);
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, [currPage]);

  const scroll = (scrollTo : Sections) => {
    const div = document.getElementById(scrollTo);
    div.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const scrollListen = useCallback(
    (current) => {
      const delta = 5;
      if (
        document.getElementById(Sections.top) === null ||
        document.getElementById(Sections.projects) === null ||
        document.getElementById(Sections.aboutMe) === null
      ) {
        return;
      }
      const top =
        document.getElementById(Sections.top).getBoundingClientRect()["y"] - delta;
      const projOffset =
        document.getElementById(Sections.projects).getBoundingClientRect()["y"] -
        delta;
      const aboutMeOffset =
        document.getElementById(Sections.aboutMe).getBoundingClientRect()["y"] - delta;
      if (Math.abs(top) < Math.abs(projOffset)) {
        if (current !== Sections.top) {
          setCurrPage(Sections.top);
        }
      } else if (Math.abs(projOffset) < Math.abs(aboutMeOffset)) {
        if (current !== Sections.projects) {
          setCurrPage(Sections.projects);
        }
      } else {
        if (current !== Sections.aboutMe) {
          setCurrPage(Sections.aboutMe);
        }
      }
    },
    [currPage]
  );

  const titleStyles = "text-5xl font-bold font-nunito text-left";

  return (
    <>
      <Head>
        <title>Isaac Hilton-VanOsdall</title>
      </Head>
      <div className="w-1/12 hidden md:block fixed right-3 top-mid">
        <NavItems current={currPage} scroll={scroll} />
      </div>
      <div className="container mx-auto w-10/12 pt-12 h-screen">
        <div className="flex flex-row justify-between" id={Sections.top}>
          <h1 className={titleStyles}>Isaac Hilton-VanOsdall</h1>
          <div className="flex flex-row space-x-4">
            <GitHub />
            <LinkedIn />
            <Email />
          </div>
        </div>
        <div className="table h-70v sm:mx-12 lg:mx-72">
          <div className="table-cell align-middle">
            <p className="font-mont text-xl">
              <span className="text-purple-800 font-bold">Hi, I'm Isaac.</span>{" "}
              I study computer science at Brown University with a focus on AI
              and Software Engineering. Born and raised in Barre, VT. Currently
              working as a software engineer for
              <Link to="https://junilearning.com" external={true}>
                Juni Learning.
              </Link>
            </p>
          </div>
        </div>
        <div className="h-7v">
          <NavArrow scroll={scroll} nextElement={Sections.projects} direction={Direction.down} />
        </div>
      </div>
      <div className="container mx-auto h-10v pt-10" id={Sections.projects}>
        <h1 className={titleStyles}>Projects</h1>
      </div>
      <div className="container mx-auto w-10/12 pt-12 h-auto lg:h-83v flex flex-col justify-items-center">
        <div className="container mx-auto mt-12 sm:w-4/5 h-3/4">
          <ProjectList />
        </div>
      </div>
      <div className="hidden lg:block h-7v">
        <NavArrow scroll={scroll} nextElement={Sections.aboutMe} direction={Direction.down} />
      </div>
      <div className="container mx-auto h-10v pt-10" id={Sections.aboutMe}>
        <h1 className={titleStyles}>About Me</h1>
      </div>
      <div className="container mx-auto sm:w-10/12 pt-12 h-auto lg:h-83v table">
        <div className="container mx-auto mt-12 p-24 sm:w-4/5 h-3/4 table-cell align-middle">
          <div className="flex flex-col lg:flex-row justify-items-start w-full sm:w-10/12">
            <img
              className="rounded-full w-64 h-64 block mx-auto lg:inline-block sm:mr-12"
              src="/images/ihiltonv.jpeg"
            ></img>
            <div className="space-y-2">
              <p className="mt-12 font-mont text-lg">
                <span className="text-purple-800 font-bold">
                  I'm a current senior at Brown University studying Computer
                  Science
                </span>{" "}
                with a focus on AI and Software Engineering. My interests
                include deep learning, web design and teaching computer science.
                As an avid mountain biker and rock climber I love to spend my
                free time outdoors. I'm also a musician, playing viola for the
                past 15 years.
              </p>
              <Link to="/Resume.pdf" className="text-md">
                My Resume
              </Link>
              <Link
                to="https://github.com/ihiltonv"
                external={true}
                className="text-md"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-7v">
        <NavArrow scroll={scroll} nextElement={Sections.top} direction={Direction.up} />
      </div>
    </>
  );
}

export default Home