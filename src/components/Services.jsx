
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      number: "01",
      description: "Custom, responsive websites built with modern frameworks.",
      details:
        "We build modern websites that help businesses establish a professional online presence and reach more customers.",
      features: [
        "Business and company websites",
        "Responsive mobile-friendly design",
        "Landing pages and portfolios",
        "React and modern frontend development",
        "Website deployment and maintenance",
      ],
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      number: "02",
      description: "Mobile experiences designed for Android and iOS users.",
      details:
        "We help businesses plan and develop convenient mobile app experiences that make their services accessible on the go.",
      features: [
        "Android and iOS app development",
        "User-friendly app interfaces",
        "Cross-platform app solutions",
        "App screen and feature design",
        "Testing and improvement",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      number: "03",
      description: "Clean, intuitive interfaces that are easy and enjoyable to use.",
      details:
        "We design attractive and easy-to-use digital experiences that help visitors navigate websites and applications confidently.",
      features: [
        "Website and app interface design",
        "Wireframes and page layouts",
        "User-friendly navigation",
        "Colors, typography, and visual design",
        "Responsive design planning",
      ],
    },
  ];

  useEffect(() => {
    if (!selectedService) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080b16] text-white py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-purple-400 uppercase tracking-[4px] text-sm font-semibold">
            What We Do
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-5 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Explore our digital solutions and discover how
            we can help your business grow.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setSelectedService(service)}
              aria-label={`Learn more about ${service.title}`}
              className="group relative text-left p-8 md:p-9 rounded-2xl
                bg-white/[0.03] border border-white/10
                hover:bg-white/[0.06] hover:border-purple-500/50
                hover:-translate-y-2 hover:shadow-xl
                hover:shadow-purple-900/20
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <div className="flex justify-between items-center mb-9">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/20 flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>

                <span className="text-4xl font-bold text-white/10 group-hover:text-purple-400/40 transition">
                  {service.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-purple-400 font-semibold">
                Explore Service
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>

        {/* Next step: Projects */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to see what we can create?
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-gradient-to-r from-purple-600 to-blue-600
              text-white font-semibold
              hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20
              transition-all duration-300"
          >
            Explore Our Projects
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-title"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#11182b] border border-white/10 shadow-2xl shadow-purple-900/30 p-7 md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white text-2xl transition"
              aria-label="Close service details"
            >
              ×
            </button>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/20 flex items-center justify-center text-3xl mb-7">
              {selectedService.icon}
            </div>

            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
              Service Details
            </span>

            <h3
              id="service-title"
              className="text-3xl md:text-4xl font-bold mt-3 mb-5"
            >
              {selectedService.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              {selectedService.details}
            </p>

            <h4 className="text-xl font-bold mb-5">
              What We Offer
            </h4>

            <ul className="space-y-4 mb-9">
              {selectedService.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              onClick={() => setSelectedService(null)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300"
            >
              Contact Us About This Service →
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
