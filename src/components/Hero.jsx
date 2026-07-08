export default function Hero() {
  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Websites That Grow Your Business
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          We build fast, modern, custom websites — designed to turn
          visitors into customers.
        </p>

        <button
          onClick={scrollToContact}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:scale-105 transition"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}