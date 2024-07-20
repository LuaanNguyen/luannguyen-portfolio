import ProfileCard from "./components/sections/ProfileCard";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
// import "./main.css";

export default function Home() {
  return (
    <>
      <main className="min-h-[100vh] w-screen pt-6 px-32 grid grid-cols-6 grid-rows-8 gap-6 max-lg:grid-cols-2 mb-40">
        <ProfileCard />
        <div className="col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl ">
          2
        </div>
        <div className="col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl ">
          4
        </div>
        <Skills />
        <div className="col-span-2 row-span-2 col-start-3 row-start-5 bg-spotify-light-dark rounded-xl ">
          3
        </div>
        <div className="col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-light-dark rounded-xl ">
          6
        </div>
        <Footer />
      </main>
    </>
  );
}
