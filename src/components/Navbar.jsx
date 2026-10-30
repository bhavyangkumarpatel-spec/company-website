
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `text-sm font-medium transition duration-300 ${
      isActive
        ? "text-purple-400"
        : "text-gray-300 hover:text-purple-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080b16]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}
          className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <span className="text-white text-xl font-extrabold">T</span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              Tech<span className="text-purple-400">Nova</span>
            </h1>
            <p className="text-[10px] tracking-[3px] text-gray-400">
              DIGITAL SOLUTIONS
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkStyle}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:scale-105 shadow-lg shadow-purple-500/20 transition duration-300"
          >
            Let's Talk →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1222] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-center px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold"
          >
            Let's Talk →
          </Link>
        </div>
      )}
    </nav>
  );
}
