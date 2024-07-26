import { IoCloudDownloadOutline } from "react-icons/io5";

interface ButtonProps {
  name: string;
}

export default function NavButton({ name }: ButtonProps) {
  return (
    <a
      href="https://drive.google.com/file/d/1-sYA1UNLepdgEd145ytWHb4aEAm2e_Bb/view?usp=sharing"
      target="_blank"
    >
      {" "}
      <button
        type="button"
        className="flex items-center text-lg px-4 py-3 rounded-full bg-spotify-green font-semibold hover:bg-spotify-dark-green gap-2"
      >
        {name}
        <IoCloudDownloadOutline className="text-xl" />
      </button>
    </a>
  );
}
