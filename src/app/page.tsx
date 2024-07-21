import ProfileCard from "./components/sections/ProfileCard";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/sections/Projects";
import ProgrammingLanguages from "./components/sections/ProgrammingLanguages";
import SpotifyAlbum from "./components/sections/SpotifyAlbum";
import { FaPlay } from "react-icons/fa";

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
        <div className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl">
          <ExperienceItem />
        </div>
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
    <div className="">
      <div className="bg-spotify-gray p-6 rounded-t-lg">
        <h2 className="text-2xl font-bold">Experience</h2>
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
        Hello
      </div>
    </div>
  );
}
