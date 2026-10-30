
import { useEffect, useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Custom, responsive websites built with modern frameworks.",
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
      description:
        "Mobile experiences designed for Android and iOS users.",
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
      description:
        "Clean, intuitive interfaces that are easy and enjoyable to use.",
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
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 text-center mb-12">
          Explore our services and discover how we can help your business.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setSelectedService(service)}
              className="text-left bg-white p-8 rounded-xl shadow-lg
                hover:shadow-2xl hover:-translate-y-2
                transition duration-300 cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Learn more about ${service.title}`}
            >
              <div className="text-4xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <span className="inline-block mt-6 text-blue-600 font-semibold">
                Explore Service →
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
            bg-black/60 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-title"
            className="bg-white w-full max-w-2xl max-h-[90vh]
              overflow-y-auto rounded-2xl shadow-2xl p-8 relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-5 text-gray-500
                hover:text-black text-3xl"
              aria-label="Close service details"
            >
              ×
            </button>

            <div className="text-5xl mb-4">
              {selectedService.icon}
            </div>

            <h3
              id="service-title"
              className="text-3xl font-bold mb-4"
            >
              {selectedService.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              {selectedService.details}
            </p>

            <h4 className="text-xl font-bold mb-4">
              What We Offer
            </h4>

            <ul className="space-y-3 mb-8">
              {selectedService.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-green-600 font-bold">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setSelectedService(null)}
              className="inline-block bg-blue-600 text-white
                px-7 py-3 rounded-lg font-semibold
                hover:bg-blue-700 transition"
            >
              Contact Us About This Service →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
