import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function ExperienceItem() {
  return (
    <section
      className={`relative max-md:col-span-1 col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl h-[450px] overflow-hidden max-md:min-h-[600px]`}
      id="#experience"
    >
      <div className="bg-spotify-gray p-6 rounded-t-lg">
        <h2 className="text-xl max-md:text-xl font-bold">
          Professional Experience
        </h2>
        <p className="flex items-center text-spotify-grey max-md:text-sm">
          <CiGlobe />
          1208 saves • 184086h 38m
        </p>
      </div>

      <div>
        <div className="flex flex-row p-4 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <button className="rounded-full bg-spotify-green p-4">
              <FaPlay className="text-spotify-black" />
            </button>
            <IoShuffle className="text-4xl text-spotify-grey" />
            <FiPlusCircle className="text-3xl text-spotify-grey" />
            <MdOutlineDownloadForOffline className="text-3xl text-spotify-grey" />
            <BsThreeDots className="text-3xl text-spotify-grey" />
          </div>
          <RxHamburgerMenu className="text-3xl text-spotify-grey" />
        </div>
      </div>

      <Positions />
    </section>
  );
}

function Positions() {
  return (
    <div className="p-4 md:overflow-y-auto h-[300px] pb-20">
      {experienceLists.map((position: experienceListsProps, index) => (
        <div
          className="flex gap-4 pb-2 p-2 items-center sm:hover:bg-spotify-black rounded-lg"
          key={position.companyName}
        >
          {/* {" "}
            <Image
              src={position.imageSrc}
              width={40}
              height={40}
              alt={position.companyName}
              className="rounded-lg w-[50px]"
              layout="fixed"
            ></Image> */}
          <h4>{index + 1}</h4>
          <div>
            {" "}
            <p className="text-spotify-green font-semibold text-sm">
              {position.companyName}
            </p>
            <p className="font-bold text-spotify-white">
              {position.positionTitle}
            </p>
            <p className="text-spotify-gray text-sm">{position.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type experienceListsProps = {
  imageSrc: string;
  companyName: string;
  positionTitle: string;
  date: string;
};

const experienceLists: experienceListsProps[] = [
  {
    imageSrc: "/ESR.svg",
    companyName:
      "School of Electrical, Computer and Energy Engineering — ASU ECEE",
    positionTitle: "Software Engineer",
    date: "September 2024 - Present",
  },
  {
    imageSrc: "/ESR.svg",
    companyName: "Ethical Spectacle Research",
    positionTitle: "Software Engineer Intern",
    date: "August 2024 - Present",
  },
  {
    imageSrc: "/asu.svg",
    companyName: "ASU Enterprise Technology",
    positionTitle: "IT Consultant",
    date: "May 2024 – August 2024",
  },
  {
    imageSrc: "/pinear-logo.svg",
    companyName: "Pinear",
    positionTitle: "Software Engineer Intern",
    date: "March 2024 - May 2024",
  },
  {
    imageSrc: "/asu.svg",
    companyName: "EPICS at ASU",
    positionTitle: "Lead Software Engineer",
    date: "January 2024 – April 2024",
  },
  {
    imageSrc: "/gtx.jpeg",
    companyName: "The Global Tech Experience",
    positionTitle: "Web Developer / UX/UI Designer",
    date: "August 2023 – December 2024",
  },
];
