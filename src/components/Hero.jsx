
export default function Hero() {
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080b16] text-white flex items-center"
    >
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          YOUR DIGITAL GROWTH PARTNER
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-8">
          Websites That
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Grow Your Business.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          We build fast, modern, and custom websites designed
          to strengthen your online presence and turn visitors
          into customers.
        </p>

        {/* Homepage navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 hover:scale-105 transition duration-300"
          >
            Get Started →
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-purple-400/50 transition duration-300"
          >
            Explore Services
          </button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <span>✦ Modern Design</span>
          <span>✦ Responsive Layouts</span>
          <span>✦ User-Focused Experience</span>
        </div>
      </div>
    </section>
  );
}
