/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import TechCard from "./TechCard";

function ProjectCard({ project }) {
  const { index, name, image, github, live, description, tech } = project;

  return (
    <>
      <a href={live} target="_blank" rel="nofollow noopener">
        <img
          src={image}
          key={index}
          className="shadow-lg shadow-stone-200 dark:shadow-neutral-500 object-fill container mx-auto content-div opacity-25 hover:opacity-75"
        />
      </a>

      <div className="flex flex-col justify-between ms-3">
        <div className="pt-3">
          <span className="text-xl font-bold tracking-wider">{name}</span>
          <p className="mt-1 whitespace-pre-wrap">{description}</p>
        </div>
        <div className="gap-1">
          <ul className="flex flex-row list-disc gap-2 -indent-4 pl-3 text-xs mb-3">
            {tech.map((item, index) => (
              <TechCard item={item} key={index} />
            ))}
          </ul>

          <a href={live} target="_blank" rel="nofollow noopener">
            <button className="text-center border py-1 px-2 text-gray-700 text-lg me-1 dark:text-slate-300">
              VISIT SITE
            </button>
          </a>
          <a href={github} target="_blank" rel="nofollow noopener">
            <button className="text-center border py-1 px-2 text-gray-700 text-lg ms-1 dark:text-slate-300">
              GITHUB
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
