export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Custom, responsive websites built with modern frameworks — fast, mobile-friendly, and built to convert visitors into customers.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native and cross-platform apps for Android and iOS, designed to give your business a seamless mobile presence.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Clean, intuitive interfaces backed by real user research — making your product easy and enjoyable to use.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}