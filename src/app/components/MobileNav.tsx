import Link from "next/link";

interface MobileNavProps {
  handleMobile: () => void;
}

export default function MobileNav({ handleMobile }: MobileNavProps) {
  const links = [
    { section: "Profile", href: "#profile" },
    { section: "Experience", href: "#experience" },
    { section: "Projects", href: "#projects" },
    { section: "Programming Languages", href: "#programming-languages" },
    { section: "Skills", href: "#skills" },
    { section: "Spotify Album", href: "#spotify-album" },
  ];

  return (
    <nav className="bg-spotify-light-dark flex flex-col text-left">
      {links.map((link, index) => (
        <div
          key={index}
          className="p-4 hover:bg-spotify-green rounded-lg"
          onClick={handleMobile}
        >
          <a
            href={link.href}
            className="text-spotify-white text-lg font-semibold"
          >
            {link.section}
          </a>
        </div>
      ))}
    </nav>
  );
}
