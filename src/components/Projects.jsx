
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b1020] text-white py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-purple-400 uppercase tracking-[4px] text-sm font-semibold">
            Our Work
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-5">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Explore one of our featured digital projects,
            built with modern web technologies.
          </p>
        </div>

        {/* Project card */}
        <div className="max-w-5xl mx-auto group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition duration-300">

          {/* Project preview */}
          <div className="relative bg-gradient-to-br from-[#171b38] to-[#101426] p-6 md:p-12">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-[#111827] px-4 py-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-gray-400 text-xs ml-3">
                  TechNova — Company Website
                </span>
              </div>

              <div className="min-h-64 md:min-h-80 bg-[#080b16] flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/30">
                  T
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold mt-6">
                  Tech<span className="text-purple-400">Nova</span>
                </h3>

                <p className="text-gray-400 mt-3">
                  Websites That Grow Your Business
                </p>

                <div className="mt-6 flex gap-3 flex-wrap justify-center">
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs">
                    Modern Design
                  </span>

                  <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs">
                    Responsive Website
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project details */}
          <div className="p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
                Featured Project
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
                TechNova – Company Website
              </h3>

              <p className="text-gray-400 leading-relaxed max-w-2xl">
                A modern company website designed to showcase
                digital services, company information, and
                contact details through a professional
                user-friendly experience.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                  React.js
                </span>

                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="https://company-website-brp1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition duration-300"
              >
                View Live Website ↗
              </a>
            </div>
          </div>
        </div>

        {/* Final call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Have an Idea for Your Next Project?
          </h3>

          <p className="text-gray-400 mb-7">
            Let's turn your ideas into a modern digital experience.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-gradient-to-r from-purple-600 to-blue-600
              text-white font-semibold
              hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20
              transition-all duration-300"
          >
            Start Your Project
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
