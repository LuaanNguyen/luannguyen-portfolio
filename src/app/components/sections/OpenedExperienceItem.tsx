import { MdClose } from "react-icons/md";
import { ProjectsProps } from "../../page";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";
import {
  personalProjects,
  type personalProjectType,
} from "../../../../data/projects";

export default function OpenedExperienceItem({
  onSetExperienceSection,
}: ProjectsProps) {
  return (
    <div className="col-span-4 row-span-6 col-start-3 row-start-1 bg-spotify-light-dark rounded-xl overflow-hidden">
      <div className="flex justify-between rounded-t-xl">
        <div className="pt-6 pl-6">
          <h2 className="text-2xl max-md:text-xl font-bold ">Projects</h2>
          <p className="flex items-center text-spotify-grey max-md:text-sm">
            <CiGlobe /> X total projects • Updated July 25, 2024
          </p>
        </div>

        <button
          type="button"
          className="p-3 m-4 hover:bg-spotify-green rounded-full"
          onClick={onSetExperienceSection}
        >
          <MdClose className="text-2xl" />
        </button>
      </div>
      <section className="flex gap-5 m-5">
        {personalProjects.map((project) => (
          <div
            key={project.title}
            className="min-w-[100px] min-h-[150px] hover:bg-spotify-gray-hover rounded-xl flex flex-col p-4 gap-1"
          >
            <Image
              src="/codedex-hackathon.jpeg"
              alt="Picture of the author"
              width={200}
              height={200}
              objectFit="none" // change to suit your needs
              className="rounded-lg "
            ></Image>
            <h4 className="text-lg">Project Name</h4>
            <p className="text-sm text-spotify-grey">Project Origin</p>
            <p className="text-sm">Description</p>
          </div>
        ))}
      </section>
    </div>
  );
}
