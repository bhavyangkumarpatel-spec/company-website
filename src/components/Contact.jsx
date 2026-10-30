
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();

    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mnjkkagp", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle =
    "w-full p-4 rounded-xl bg-[#080b16] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b1020] text-white py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-purple-400 uppercase tracking-[4px] text-sm font-semibold">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-5 mb-6">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Tell us about it.
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left information */}
          <div className="pt-4">
            <h3 className="text-3xl font-bold mb-5">
              Let's build something great together.
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you need a business website, a mobile
              application, or a fresh digital experience,
              TechNova is ready to discuss your ideas.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Contact</p>
                  <p className="text-white font-medium">
                    Send us a message
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-xl">
                  ⚡
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Our Approach</p>
                  <p className="text-white font-medium">
                    Ideas into digital experiences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-9 shadow-2xl shadow-purple-900/10">
            <h3 className="text-2xl font-bold mb-2">
              Send a Message
            </h3>

            <p className="text-gray-400 text-sm mb-7">
              Fill out the form and tell us about your project.
            </p>

            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-5">✓</div>

                <h4 className="text-2xl font-bold text-green-400 mb-3">
                  Message Sent!
                </h4>

                <p className="text-gray-400 mb-7">
                  Thank you for contacting TechNova.
                  Your message has been submitted successfully.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    minLength={10}
                    rows={5}
                    className={`${inputStyle} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message →"}
                </button>

                {status === "error" && (
                  <p role="alert" className="text-red-400 text-center font-medium">
                    Unable to send your message. Please check your connection and try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
