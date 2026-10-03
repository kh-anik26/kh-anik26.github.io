function ProjectCard({ project }) {
  return (
    <article className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors">

      <h3 className="text-2xl font-semibold mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          Live Demo
        </a>
      </div>

    </article>
  );
}

export default ProjectCard;