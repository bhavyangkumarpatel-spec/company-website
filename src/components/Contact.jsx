export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg h-32"
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}