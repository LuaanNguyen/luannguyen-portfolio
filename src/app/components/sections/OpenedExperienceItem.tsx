import { MdClose } from "react-icons/md";
import { ProjectsProps } from "../../page";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";
import {
  personalProjects,
  type personalProjectType,
} from "../../../../data/projects";
import Link from "next/link";

type ExperienceItemProps = {
  className?: string; // Optional className prop
};

type ProjectsPropsWithClassName = ProjectsProps & ExperienceItemProps;

export default function OpenedExperienceItem({
  onSetExperienceSection,
  className,
}: ProjectsPropsWithClassName) {
  return (
    <div
      id="project"
      className={`${className} col-span-4 row-span-6 col-start-3 row-start-1 bg-spotify-light-dark rounded-xl overflow-y-scroll max-h-[80vh] pb-5`}
    >
      <div className="flex justify-between rounded-t-xl pb-6">
        <div className="pt-6 pl-6">
          <h2 className="text-2xl max-md:text-2xl font-bold ">Projects</h2>
          <p className="flex items-center text-spotify-grey max-md:text-sm gap-1">
            <CiGlobe /> {personalProjects.length} completed projects • Updated
            July 25, 2024
          </p>
        </div>

        <button
          type="button"
          className="p-3 m-4 hover:bg-spotify-green rounded-full max-md:hidden"
          onClick={onSetExperienceSection}
        >
          <MdClose className="text-2xl" />
        </button>
      </div>
      <section className="flex flex-row flex-wrap gap-5 p-2 max-md:items-center max-md:justify-center">
        {personalProjects.map((project) => (
          <Link target="_blank" key={project.title} href={project.href}>
            <div className="w-[250px] max-h-[500px] max-md:w-[350px]  hover:bg-spotify-gray-hover rounded-xl flex flex-col p-4 gap-2">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={400}
                height={400}
                objectFit="cover" // Adjust based on your needs
                className="rounded-lg"
              />
              <h4 className="text-md">{project.title}</h4>
              <p className="text-sm text-spotify-grey">{project.description}</p>
              <div className="flex gap-1 flex-wrap">
                {project.tech.map((el) => (
                  <div
                    className="text-[10px] bg-spotify-green rounded-md items-center p-1"
                    key={el}
                  >
                    <p className="text-center">{el}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
