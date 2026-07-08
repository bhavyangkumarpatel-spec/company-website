import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TechNova</h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-400">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4 flex flex-col space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}