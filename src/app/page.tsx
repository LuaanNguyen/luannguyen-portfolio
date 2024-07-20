import Hero from "./components/Hero";
import { Spotlight } from "./components/ui/Spotlight";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24">
      <Hero />
    </main>
  );
}
