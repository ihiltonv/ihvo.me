import Link from "./typography/Link";

export default function ProjectList() {
  return (
    <>
      <div className="space-y-4 max-w-2xl mx-auto mt-10">
        <div>
          <Link to={"https://github.com/ihiltonv/where2meet"} external={true}>
            Where2Meet
          </Link>
          <p className="text-sans">
            A Webapp for friends to find the best place to meet up. Built using
            a Java backend interfacing with the Yelp API and a React.js
            frontend.
          </p>
        </div>
        <div>
          <Link to={"https://github.com/ihiltonv/ihvo.me"} external={true}>
            ihvo.me
          </Link>
          <p className="text-sans">
            This website! Built using Next.js with Tailwind CSS.
          </p>
        </div>
        <div>
          <Link to={"/projects/iterative-design"}>
            Iterative Design: HelloSaurus
          </Link>
          <p className="text-sans">
            An unsolicited redesign of the startup HelloSaurus, an educational
            video platform for kids.
          </p>
        </div>
        <div>
          <Link to={"/projects/development"}>
            React Development: The Plant Shop
          </Link>
          <p className="text-sans">
            A basic React app using Ant Design to practice React.js with a
            filtered and sorted product layout.
          </p>
        </div>
        <div>
          <Link to={"/projects/ab-testing"}>A/B Testing: The Cactus Shop</Link>
          <p className="text-sans">
            An A/B user test using statistical analysis to analyze the
            difference in user engagement based on a layout change.
          </p>
        </div>
        <div>
          <Link to={"/projects/responsive-redesign"}>
            Responsive Redesign: Ormsby's Computers
          </Link>
          <p className="text-sans">
            A responsive redesign and implementation of the homepage of Ormsby's
            Computer Systems in Central Vermont.
          </p>
        </div>
      </div>
    </>
  );
}
