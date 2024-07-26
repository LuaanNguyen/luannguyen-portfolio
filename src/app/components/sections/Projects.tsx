import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "../../page";
import { BackgroundGradient } from "../ui/background-gradient";
import { FaArrowDown } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-black rounded-xl"
      id="projects"
    >
      <div className="flex pl-6 pt-4 mb-3 rounded-xl gap-5">
        <button className="text-md text-spotify-black font-semibold bg-spotify-white px-4 py-2 rounded-full text-spotify-light-dark">
          <p className="flex flex-row ">Recent Projects</p>
        </button>

        <BackgroundGradient>
          <button
            className="text-md text-spotify-white inline-flex items-center px-2 py-2 font-semibold rounded-full text-spotify-light-gray hover:bg-spotify-gray"
            onClick={onSetExperienceSection}
          >
            <span className="mr-1">Explore All Projects</span>
            <GrLinkNext className="text-2xl" />
          </button>
        </BackgroundGradient>
      </div>
      <StickyScroll content={projectLists} />
    </div>
  );
}

const projectLists: {
  title: string;
  description: string;
  content?: React.ReactNode | any;
}[] = [
  {
    title: "🍵 Sip n Play Café Website (Codédex Hackathon Winner)",
    description:
      "This project was created as a website revamp for Sip & Play Boardgame Cafe, with a collection of over 500+ games! Sip & Play is Park Slope's very first board game cafe, offering a wide menu of apps, sandwiches and salads along with boba, beer, wine and coffee.",
    content: (
      <a target="_blank" href="https://board-game-cafe-website.vercel.app/">
        <Image
          src="/codedex-hackathon.jpeg"
          alt="Sip n Play Cafe Website"
          width={500}
          height={500}
        />
      </a>
    ),
  },
  {
    title: "🥑 Fiber (Calhacks 2024)",
    description:
      "An AI-powered mobile application to scan the barcodes of groceries, providing comprehensive nutritional value, additives, and organic dimension for the users. This allows users to easily identify healthier options while grocery shopping.",
    content: (
      <a target="_blank" href="https://github.com/Smit2553/Fiber">
        <Image
          src="/fiber.png"
          alt="Fiber Project"
          loading="lazy"
          width={500}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "Online Database for Study Abroad Program 📊",
    description:
      "The desired outcomes of this project entail the establishment of a functional, self-updating database to facilitate communication with shrimp farmers and ensure consistent data conversion and updating. The database must support the visualization of critical parameters such as water temperature, pH, oxygen concentration, and salinity over time.",
    content: (
      <a target="_blank" href="https://github.com/LuaanNguyen/epics-mern">
        <Image
          src="/shrimp-farming.png"
          alt="EPICS Project"
          loading="lazy"
          width={500}
          height={300}
        />
      </a>
    ),
  },
];
