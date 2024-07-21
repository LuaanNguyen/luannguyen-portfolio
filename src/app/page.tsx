import ProfileCard from "./components/sections/ProfileCard";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/sections/Projects";
import ProgrammingLanguages from "./components/sections/ProgrammingLanguages";
import SpotifyAlbum from "./components/sections/SpotifyAlbum";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

// import "./main.css";

export default function Home() {
  return (
    <>
      <main className="min-h-[80px] w-screen max-w-[1800px] mx-auto pt-6 px-32 grid grid-cols-6 grid-rows-8 gap-6 max-lg:grid-cols-2 mb-40 ">
        <ProfileCard />
        <ExperienceItem />
        <Projects />
        <ProgrammingLanguages />
        <Skills />
        <SpotifyAlbum />
        <Footer />
      </main>
    </>
  );
}

function ExperienceItem() {
  return (
    <section className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl h-[450px] overflow-hidden ">
      <div className="bg-spotify-gray p-6 rounded-t-lg">
        <h2 className="text-2xl font-bold">Professional Experience</h2>
        <p className="flex items-center text-spotify-grey">
          <CiGlobe />
          1208 saves • 184086h 38m
        </p>
      </div>

      <div>
        <div className="flex flex-row p-4 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <button className="rounded-full bg-spotify-green p-4">
              <FaPlay className="text-spotify-black" />
            </button>
            <IoShuffle className="text-4xl text-spotify-grey" />
            <FiPlusCircle className="text-3xl text-spotify-grey" />
            <MdOutlineDownloadForOffline className="text-3xl text-spotify-grey" />
            <BsThreeDots className="text-3xl text-spotify-grey" />
          </div>
          <RxHamburgerMenu className="text-3xl text-spotify-grey" />
        </div>
      </div>

      <Positions />
    </section>
  );
}

function Positions() {
  return (
    <div className="p-4 overflow-y-auto h-[300px] pb-20 ">
      {experienceLists.map((position: experienceListsProps, index) => (
        <div
          className="flex gap-4 pb-2 p-2 items-center hover:bg-spotify-black rounded-lg"
          key={position.companyName}
        >
          {/* {" "}
          <Image
            src={position.imageSrc}
            width={40}
            height={40}
            alt={position.companyName}
            className="rounded-lg w-[50px]"
            layout="fixed"
          ></Image> */}
          <h4>{index + 1}</h4>
          <div>
            {" "}
            <p className="text-spotify-green font-semibold">
              {position.companyName}
            </p>
            <p className="font-bold text-spotify-white">
              {position.positionTitle}
            </p>
            <p className="text-spotify-gray">{position.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type experienceListsProps = {
  imageSrc: string;
  companyName: string;
  positionTitle: string;
  date: string;
};

const experienceLists: experienceListsProps[] = [
  {
    imageSrc: "/ESR.svg",
    companyName: "Ethical Spectacle Research",
    positionTitle: "Software Engineer Intern",
    date: "August 2024 - Decemter 2024",
  },
  {
    imageSrc: "/asu.svg",
    companyName: "ASU Enterprise Technology",
    positionTitle: "Technology Consultant",
    date: "May 2024 – Present",
  },
  {
    imageSrc: "/pinear-logo.svg",
    companyName: "Pinear",
    positionTitle: "Software Engineer Intern",
    date: "March 2024 - May 2024",
  },
  {
    imageSrc: "/asu.svg",
    companyName: "EPICS at ASU",
    positionTitle: "Software Engineer Lead",
    date: "January 2024 – April 2024",
  },
  {
    imageSrc: "/gtx.jpeg",
    companyName: "The Global Tech Experience",
    positionTitle: "Web Developer / UX/UI Designer",
    date: "August 2023 – December 2024",
  },
];
