// data/projects.ts
export type personalProjectType = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tech: string[];
}[];

export const personalProjects: personalProjectType = [
  {
    href: "https://github.com/LuaanNguyen/Mine-Alliance",
    imageSrc: "/Mine_Alliance.png",
    imageAlt: "Mine Alliance ⛏️",
    title: "Mine Alliance ⛏️",
    description:
      "An innovative, AI-driven application designed to unite stakeholders across Arizona's mining industry, promoting responsible and sustainable practices.",
    tech: [
      "AWS EC2",
      "AWS SageMaker Studio",
      "NextJS",
      "TypeScript",
      "Flask",
      "Python",
      "SQLAlchemy",
      "OpenAI",
    ],
  },
  {
    href: "https://github.com/LuaanNguyen/static-site-generator",
    imageSrc: "/staticsitegenerator_infrastructure.png",
    imageAlt: "Static Site Generator",
    title: "Static Site Generator ♺ (In progress)",
    description:
      "This Python program takes raw content files (like Markdown and images) and turns them into a static website (a mix of HTML and CSS files).",
    tech: ["Python"],
  },
  {
    href: "https://github.com/LuaanNguyen/asteroids",
    imageSrc: "/asteroids.png",
    imageAlt: "Asteroids Game",
    title: "Asteroids Game ☄️",
    description:
      "Developed a simple version of the Asteroids Game (https://freeasteroids.org/). I learned how to use pygame for the first time. The game was meant to solidified my OOP concepts.",
    tech: ["Pygame", "Python", "OOP"],
  },
  {
    href: "https://thesoda.io/",
    imageSrc: "/thesodaio.png",
    imageAlt: "Thesoda.io",
    title: "The Software Developers Association (SoDA) Website 🥤",
    description:
      "Directed a website revamp for the Software Developer Association, one of the largest Arizona State University's student organizations, with 8 other technical officers. Assisted with the creation of a Flask back-end for the points system, Discord bots, as well as SEO optimization.",
    tech: [
      "ReactJS",
      "Flask",
      "Digital Ocean",
      "Netlify",
      "AceternityUI",
      "TailwindCSS",
      "TypeScript",
      "Python",
      "SEO",
    ],
  },
  {
    href: "https://www.luannguyen.net/",
    imageSrc: "/luan-portfolio.jpeg",
    imageAlt: "My Portfolio",
    title: "Personal Portfolio 🪪",
    description:
      "I spent under 24 hours on a random weekend to develop my brand-new portfolio, inpsired by Spotify.",
    tech: [
      "NEXTJS",
      "AceternityUI",
      "TailwindCSS",
      "TypeScript",
      "Google Analytics",
      "SEO",
    ],
  },
  {
    href: "https://board-game-cafe-website.vercel.app/",
    imageSrc: "/sipnplay.png",
    imageAlt: "Sip n Play Cafe Website",
    title:
      "Sip n Play Boardgame Café Website ☕️ (Codédex Hackathon 2024 Winner)",
    description:
      "This project was created as a website revamp for Sip & Play Boardgame Cafe, with a collection of over 500+ games! Sip & Play is Park Slope's very first board game cafe, offering a wide menu of apps, sandwiches and salads along with boba, beer, wine and coffee.",
    tech: ["React", "ThreeJS", "TailwindCSS", "JavaScript"],
  },
  {
    href: "https://github.com/Smit2553/Fiber",
    imageSrc: "/fiber.png",
    imageAlt: "Fiber Project",
    title: "🥑 Fiber (CalHacks 2024)",
    description:
      "An AI-powered mobile application to scan the barcodes of groceries, providing comprehensive nutritional value, additives, and organic dimension for the users. This allows users to easily identify healthier options while grocery shopping.",
    tech: ["React Native", "Expo", "Python", "Flask", "OpenAI"],
  },
  {
    href: "https://ethicalspectacle.com/",
    imageSrc: "/ethicalspectacle.png",
    imageAlt: "Ethical Spectable Research Website",
    title: "Ethical Spectable Research Website 💻",
    description:
      "This is a website to introduce people to our Ethical Spectacle Research company. This website showcases our projects, research, and leaderboards of the current members.",
    tech: ["NEXTJS", "JavaScript", "Python", "Flask", "MySQL", "TailwindCSS"],
  },
  {
    href: "https://www.unionize101.org",
    imageSrc: "/unionize101.png",
    imageAlt: "Unionize101 Website",
    title: "Unionize101 Website 💻",
    description:
      "This is a website to educate worker and union leaders about starting a Union. A multidisciplinary team of 6 interns collaborated in the span of 12 weeks to produce a fully functional web-app.",
    tech: [
      "NEXTJS",
      "TypeScript",
      "GhostCMS",
      "Docker",
      "Figma",
      "TailwindCSS",
      "Google Analytics",
      "SEO",
    ],
  },
  {
    href: "https://github.com/LuaanNguyen/epics-mern",
    imageSrc: "/shrimp-farming.png",
    imageAlt: "EPICS project",
    title: "Online Database for Study Abroad Program 📊",
    description:
      "Developed and implement a device that will analyze water quality to assist Vietnamese shrimp farmers. The desired outcomes of this project entail the establishment of a functional, self-updating database to facilitate communication with shrimp farmers and ensure consistent data conversion and updating.",
    tech: ["React", "Express", "NodeJS", "MongoDB", "TailwindCSS"],
  },
  {
    href: "https://worldwise-xi-five.vercel.app/",
    imageSrc: "/worldwise.jpg",
    imageAlt: "Worldwise",
    title: "Wordwise 🌎",
    description:
      "This project ultilize Geolocation and Leaflet Map's API to track user's travel experiences",
    tech: ["React", "JavaScript", "Leaflet"],
  },
  {
    href: "https://popcorn-picks.vercel.app/",
    imageSrc: "/popcorn-picks.png",
    imageAlt: "Popcorn Picks",
    title: "Popcorn Picks 🍿",
    description:
      "Popcorn Picks: A Personalized Movie Tracker to track your movie experience.",
    tech: ["React", "JavaScript"],
  },
  {
    href: "https://github.com/LuaanNguyen/chatbot-chatgpt",
    imageSrc: "/chatgpt-terminal.jpg",
    imageAlt: "Personal ChatGPT",
    title: "Personal ChatGPT 🤖",
    description:
      "Ultilized OpenAI's API to create a chatbot within the MacOS Terminal that is as capable as regular ChatGPT 3.5",
    tech: ["NodeJS", "JavaScript", "OpenAI's API"],
  },
  {
    href: "https://luaannguyen.github.io/marriott-bonvoy-bootstrap-clone/#",
    imageSrc: "/homevillas.png",
    imageAlt: "Marriot Bonvoy Website",
    title: "Marriot Bonvoy Website 🏝️",
    description:
      "Devised a prototype leveraging the Mapbox API to create Marriot Bonvoy’s Homes & Villas home page website. Employed DOM manipulation techniques to develop and customize website sections, ensuring alignment with stakeholder requirements and enhancing overall user experience.",
    tech: ["HTML/CSS", "JavaScript", "Bootstrap", "MapBox API"],
  },
  {
    href: "https://b7c0c00a-ee15-4855-91dc-f508d9c2049b-00-1pkpcsn82sekg.spock.replit.dev/",
    imageSrc: "/hiking-matching-game.png",
    imageAlt: "Hiking Game",
    title: "Hiking Matching Game 🥾",
    description:
      "A hiking-theme matching game that I created while learning JavaScript",
    tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
  },
  {
    href: "https://luaannguyen.github.io/FSE100-final-project/",
    imageSrc: "/fine-motor-skills.png",
    imageAlt: "Space Games",
    title: "Space Games 👾",
    description:
      "Designed and developed key functionalities, game algorithms, and interface for three online games in p5.js with a team of four engineers and presented the finished products to over 20 stakeholders.",
    tech: ["HTML/CSS", "JavaScript", "p5.js"],
  },

  // Add more project objects here...
];
