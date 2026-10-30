
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  function goToHome() {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }

  return (
    <footer className="bg-[#080b16] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={goToHome}
              className="inline-flex items-center gap-3 mb-5 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xl font-extrabold shadow-lg shadow-purple-500/20">
                T
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Tech<span className="text-purple-400">Nova</span>
                </h2>
                <p className="text-[10px] tracking-[3px] text-gray-500">
                  DIGITAL SOLUTIONS
                </p>
              </div>
            </button>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Building modern digital experiences through
              creative design and technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-400 hover:text-purple-400 transition w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">Let's Connect</h3>

            <p className="text-gray-400 leading-relaxed mb-5">
              Have an idea or project? We'd love to hear about it.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} TechNova. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed with care ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
