import { ReactNode } from "react";

export default function ProgrammingLanguages() {
  return (
    <div className="col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl ">
      <h1 className="text-xl font-semibold pl-6 pt-4">Programming Languages</h1>
      <div className="grid grid-cols-5 gap-2 p-5">
        {languageItems.map((item) => (
          <div
            className="w-[60px] bg-spotify-light-dark p-3 rounded-lg shadow-md"
            key={item.name}
          >
            {item.component}
          </div>
        ))}
      </div>
    </div>
  );
}

const languageItems: {
  name: string;
  component: ReactNode;
}[] = [
  {
    name: "HTML",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
    ),
  },
  {
    name: "CSS",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
    ),
  },
  {
    name: "JavaScript",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    ),
  },
  {
    name: "TypeScript",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    ),
  },
  {
    name: "C",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
    ),
  },
  {
    name: "C++",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
    ),
  },
  {
    name: "Java",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
    ),
  },
  {
    name: "Python",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
    ),
  },
  {
    name: "SQL",
    component: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
    ),
  },
];
