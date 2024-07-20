import { TiArrowForwardOutline } from "react-icons/ti";

interface ButtonProps {
  name: string;
}

export default function NavButton({ name }: ButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center text-xl gap-1 px-4 py-3 rounded-full bg-spotify-green font-bold hover:bg-spotify-dark-green"
    >
      {name}
      <TiArrowForwardOutline />
    </button>
  );
}
