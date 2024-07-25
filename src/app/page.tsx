"use clients";
import { useState } from "react";
import ProfileCard from "./components/sections/ProfileCard";
import Footer from "./components/Footer";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import ProgrammingLanguages from "./components/sections/ProgrammingLanguages";
import SpotifyAlbum from "./components/sections/SpotifyAlbum";
import ExperienceItem from "./components/sections/ExperienceItems";

export default function Home() {
  return (
    <>
      <main className="w-screen max-w-[1600px] mx-auto pt-6 px-32 grid grid-cols-6 grid-rows-8 gap-6 max-lg:flex max-lg:flex-col max-md:px-6 mb-40">
        <ProfileCard />
        {/* <ExperienceItem />
        <Projects />
        <ProgrammingLanguages /> */}
        <div className="col-span-4 row-span-6 col-start-3 row-start-1 bg-spotify-light-dark rounded-xl">
          <h2 className="text-2xl max-md:text-xl font-bold pl-5 pt-5">
            Professional Experience
            <section></section>
          </h2>
        </div>
        <Skills />
        <SpotifyAlbum />
        <Footer />
      </main>
    </>
  );
}
