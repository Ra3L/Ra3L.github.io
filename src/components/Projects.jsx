/* eslint-disable react/no-unescaped-entities */
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { data } from "../data/data.js";

function Projects() {
  const project = data;

  return (
    <div
      name="projects"
      className="w-full h-screen bg-neutral-50 dark:bg-neutral-700 break-after-page"
    >
      <div className="max-w-[64rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <SectionHeader>Projects</SectionHeader>
          <p className="py-6 text-xl">
            Here are some of the projects I've worked on. Feel free to explore
            them and let me know your thoughts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto">
          {project.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
