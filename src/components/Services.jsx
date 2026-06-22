export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">
            Web Development
          </h3>

          <p>
            Modern responsive websites built with the latest technologies.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">
            Mobile Apps
          </h3>

          <p>
            Android and iOS applications for your business.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">
            UI/UX Design
          </h3>

          <p>
            Beautiful and user-friendly digital experiences.
          </p>
        </div>

      </div>
    </section>
  );
}