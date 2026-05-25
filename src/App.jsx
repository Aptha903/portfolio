export default function PremiumPortfolio() {
  const projects = [
    {
      title: "Gender Bias Detection in Job Descriptions",
      description:
        "Designed an NLP-powered intelligent analysis system to identify biased language in recruitment content and support inclusive hiring practices.",
      stack: ["Python", "NLP", "Scikit-learn", "Machine Learning"],
    },
    {
      title: "Human Scream Detection & Crime Reduction",
      description:
        "Developed a real-time emergency audio recognition system capable of detecting distress screams using AI-driven audio analysis.",
      stack: ["Python", "Audio AI", "Machine Learning", "Signal Processing"],
    },
    {
      title: "FitFusion",
      description:
        "Created a personalized fitness and health recommendation platform with smart workout guidance and user tracking features.",
      stack: ["Python", "Flask", "Web App", "Recommendation System"],
    },
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "Data Science",
    "FastAPI",
    "SQL",
    "Flask",
    "Pandas",
    "Scikit-learn",
    "REST APIs",
    "GitHub",
    "MongoDB",
    "Linux",
  ];

  return (
    <div className="bg-[#060816] text-white min-h-screen overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#060816]/70 px-6 md:px-14 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          APTHA<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 md:px-14 lg:px-24 pt-24 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 rounded-full text-cyan-300 text-sm mb-6">
              Open to AI/ML & Python Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Aptha H P
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-5 font-semibold leading-relaxed">
              Python Developer
              <span className="text-cyan-400"> • </span>
              AI & Machine Learning Enthusiast
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mt-8 max-w-2xl">
              Passionate Information Science Engineering student focused on
              Artificial Intelligence, Machine Learning, and backend
              development. I build impactful real-world solutions using data,
              automation, and intelligent systems.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="https://github.com/Aptha903"
                target="_blank"
                className="bg-cyan-400 text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20"
              >
                View GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aptha-h-p-9951242a6"
                target="_blank"
                className="border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Glass Card */}
          <div className="relative flex justify-center">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-2xl rounded-[40px] opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Photo Card */}
              <div className="relative w-[360px] h-[460px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
                <img
                  src="/aptha-photo.jpg"
                  alt="Aptha H P"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060816] via-transparent to-transparent" />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-5">
                    <p className="text-slate-300 text-sm tracking-wide">
                      AI & Machine Learning Enthusiast
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                      Aptha H P
                    </h3>

                    <div className="flex items-center gap-3 mt-4 text-sm text-slate-400">
                      <span>Python Developer</span>
                      <span>•</span>
                      <span>2026 Graduate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="px-6 md:px-14 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Resume
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Download My Resume
            </h2>

            <p className="text-slate-400 text-lg mt-5 max-w-2xl leading-relaxed">
              Explore my technical skills, project experience, AI/ML work, and development background in a professional resume format.
            </p>
          </div>

          <a
            href="/Aptha_HP_Resume (5).pdf"
            download
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl shadow-cyan-500/20"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-14 lg:px-24 py-20 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Experience
          </p>

          <h2 className="text-4xl font-bold mb-14">
            Professional Journey
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:border-cyan-400/30 transition duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-2xl font-bold">
                  Data Science & Machine Learning Intern
                </h3>

                <p className="text-cyan-300 mt-2 text-lg">
                  Internship Experience
                </p>
              </div>

              <div className="text-slate-400 text-sm bg-white/5 px-5 py-2 rounded-full border border-white/10">
                2025 - Present
              </div>
            </div>

            <div className="mt-8 space-y-5 text-slate-400 text-lg leading-relaxed">
              <p>
                • Worked on data preprocessing, exploratory data analysis, and machine learning workflows using Python.
              </p>

              <p>
                • Built predictive models and analytical systems using Pandas, NumPy, and Scikit-learn.
              </p>

              <p>
                • Gained hands-on experience in backend integration, REST APIs, and real-world AI applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-14 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[35px] p-10 md:p-14 backdrop-blur-xl shadow-2xl">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building AI-powered systems with clean and scalable solutions.
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mt-8">
            I am an aspiring AI and Python developer passionate about solving
            meaningful problems using Machine Learning, Data Science, and
            backend technologies. I enjoy creating systems that combine
            intelligent automation with practical real-world applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-14 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
                Technical Skills
              </p>
              <h2 className="text-4xl font-bold">Core Technologies</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg group-hover:text-cyan-300 transition">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-14 lg:px-24 py-24 bg-white/[0.02]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Selected Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-[35px] p-8 hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-bold text-xl mb-8">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-bold leading-snug mb-5 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-14 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Build Something Great Together
          </h2>

          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Open to internships, AI/ML roles, Python development opportunities,
            and exciting collaborations.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
            <div className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-lg">
              📧 apthagowda456@gmail.com
            </div>

            <div className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-lg">
              📱 8310694903
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        © 2026 Aptha H P — Premium Portfolio
      </footer>
    </div>
  );
}
