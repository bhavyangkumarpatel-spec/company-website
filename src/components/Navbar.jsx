export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          TechNova
        </h1>

        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>

          <a href="#services" className="hover:text-blue-400">
            Services
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}