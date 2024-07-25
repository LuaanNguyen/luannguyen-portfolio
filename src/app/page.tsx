"use clients";
import { useContext, useState } from "react";
import ProfileCard from "./components/sections/ProfileCard";
import Footer from "./components/Footer";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import ProgrammingLanguages from "./components/sections/ProgrammingLanguages";
import SpotifyAlbum from "./components/sections/SpotifyAlbum";
import ExperienceItem from "./components/sections/ExperienceItems";
import OpenedExperienceItem from "./components/sections/OpenedExperienceItem";

export default function Home() {
  //const { experienceSection, setExperienceSection } = useGeneralContext();

  return (
    <>
      {" "}
      <main className="w-screen max-w-[1600px] mx-auto pt-6 px-32 grid grid-cols-6 grid-rows-8 gap-6 max-lg:flex max-lg:flex-col max-md:px-6 mb-40">
        <ProfileCard />
        {/* <ExperienceItem />
        <Projects />
        <ProgrammingLanguages /> */}
        <OpenedExperienceItem />
        <Skills />
        <SpotifyAlbum />
        <Footer />
      </main>
    </>
  );
}
