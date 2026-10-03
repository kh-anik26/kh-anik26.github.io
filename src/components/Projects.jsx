import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Projects
          </h2>
        </div>

        {/* Projects */}
        {projects.length === 0 ? (
          <div className="text-center py-16 border border-gray-800 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Projects coming soon
            </h3>

            <p className="text-gray-400">
              I'm currently working on some projects.
              Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;