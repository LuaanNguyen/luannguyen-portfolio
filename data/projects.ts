// data/projects.ts
export type personalProjectType = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tech: string[];
  categories: string[];
}[];

export const personalProjects: personalProjectType = [
  {
    href: "https://board-game-cafe-website.vercel.app/",
    imageSrc: "/sipnplay.png",
    imageAlt: "Sip n Play Cafe Website",
    title: "Sip n Play Boardgame Café Website (Codédex Hackathon 2024 Winner)",
    description:
      "This project was created as a website revamp for Sip & Play Boardgame Cafe, with a collection of over 500+ games! Sip & Play is Park Slope's very first board game cafe, offering a wide menu of apps, sandwiches and salads along with boba, beer, wine and coffee.",
    tech: [
      "React",
      "React Three Fiber",
      "ThreeJS",
      "TailwindCSS",
      "JavaScript",
    ],
    categories: ["Web Development", "Design"], // Add relevant categories
  },
  {
    href: "https://github.com/Smit2553/Fiber",
    imageSrc: "/fiber.png",
    imageAlt: "Fiber Project",
    title: "🥑 Fiber (CalHacks 2024)",
    description:
      "An AI-powered mobile application to scan the barcodes of groceries, providing comprehensive nutritional value, additives, and organic dimension for the users. This allows users to easily identify healthier options while grocery shopping.",
    tech: ["React Native", "Expo", "Python", "Flask", "OpenAI"],
    categories: ["Mobile Development", "AI"], // Add relevant categories
  },
  // Add more project objects here...
];
