import ProfileCard from "./components/sections/ProfileCard";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/sections/Projects";
import ProgrammingLanguages from "./components/sections/ProgrammingLanguages";
import SpotifyAlbum from "./components/sections/SpotifyAlbum";

// import "./main.css";

export default function Home() {
  return (
    <>
      <main className="min-h-[80px] w-screen pt-6 px-32 grid grid-cols-6 grid-rows-8 gap-6 max-lg:grid-cols-2 mb-40 ">
        <ProfileCard />
        <div className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl "></div>
        <Projects />
        <ProgrammingLanguages />
        <Skills />
        <SpotifyAlbum />
        <Footer />
      </main>
    </>
  );
}
