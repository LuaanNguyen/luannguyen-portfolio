import Hero from "./components/Hero";
import { Spotlight } from "./components/ui/Spotlight";
import ProfileCard from "./components/sections/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-[80vh] w-screen pt-10 px-32 grid grid-cols-6 grid-rows-8 gap-10 ">
      <ProfileCard />
      <div className="col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl ">
        2
      </div>
      <div className="col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl ">
        4
      </div>
      <div className="col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl ">
        5
      </div>
      <div className="col-span-2 row-span-2 col-start-3 row-start-5 bg-spotify-light-dark rounded-xl ">
        3
      </div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-light-dark rounded-xl ">
        6
      </div>
    </main>
  );
}
