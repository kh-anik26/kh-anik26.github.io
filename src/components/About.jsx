function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Who I Am
          </h2>
        </div>

        {/* About content */}
        <div className="text-center">
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I'm a developer interested in building modern and
            practical web applications. I'm currently focusing on
            JavaScript, React, and full-stack web development.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I enjoy learning new technologies, solving programming
            problems, and turning ideas into working applications.
            I'm continuously improving my skills by building projects
            and experimenting with different technologies.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;