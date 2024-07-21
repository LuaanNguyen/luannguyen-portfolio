import { InfiniteMovingCards } from "./ui/infinite-moving-cars";
import { ReactNode } from "react";

export default function Skills() {
  return (
    <div className="col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit">
      <h1 className="text-2xl font-semibold pl-6 pt-4">My Skills</h1>
      <InfiniteMovingCards items={skillItems} speed="slow" />
    </div>
  );
}

const skillItems: { quote: ReactNode; name: string }[] = [
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    ),
    name: "React",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
    ),
    name: "NEXTJS",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
    ),
    name: "NodeJS",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
    ),
    name: "Express",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
    ),
    name: "Flask",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
    ),
    name: "jQuery",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
    ),
    name: "Bootstrap",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
    ),
    name: "TailwindCSS",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
    ),
    name: "PostreSQL",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
    ),
    name: "MongoDB",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
    ),
    name: "MongoDB",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
    ),
    name: "Docker",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
    ),
    name: "Postman",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
    ),
    name: "npm",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
    ),
    name: "git",
  },
  {
    quote: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
    ),
    name: "Figma",
  },
];
