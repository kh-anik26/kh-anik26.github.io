function Hero() {
  const name = "Kamrul Hassan Anik";
  const role = "Full-Stack Developer";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        <p className="text-blue-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {name}
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          {role}
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I build modern, responsive web applications using
          JavaScript, React, and other web technologies.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;