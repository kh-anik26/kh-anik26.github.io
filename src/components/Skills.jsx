function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Typescript",
    "Express.js",
    "PostgreSQL",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-gray-800 rounded-lg p-5 text-center hover:border-blue-500 hover:bg-gray-900 transition-all"
            >
              <p className="font-medium">
                {skill}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;