
import { Link } from "react-router-dom";

export default function About() {
  const highlights = [
    {
      number: "01",
      title: "Modern Solutions",
      description:
        "Creative and modern digital experiences built around your goals.",
    },
    {
      number: "02",
      title: "Client Focused",
      description:
        "Direct communication and personal attention for every project.",
    },
    {
      number: "03",
      title: "Quality First",
      description:
        "Clean design, thoughtful development, and attention to detail.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b1020] text-white py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-400 uppercase tracking-[4px] text-sm font-semibold">
            Who We Are
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-5">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              TechNova
            </span>
          </h2>

          <p className="mt-7 text-gray-400 text-lg leading-relaxed">
            TechNova is a small, dedicated team of developers and designers
            building modern websites, mobile apps, and digital experiences.
            As a growing studio, we bring fresh ideas and give every client
            direct, hands-on attention — no red tape, no account managers,
            just people who care about getting your project right.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.number}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/[0.05] transition duration-300"
            >
              <span className="text-4xl font-extrabold text-purple-400/40 group-hover:text-purple-400 transition">
                {item.number}
              </span>

              <h3 className="text-xl font-bold mt-6 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Next step button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
          >
            Discover Our Services →
          </Link>
        </div>

      </div>
    </section>
  );
}