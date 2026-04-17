import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0f14]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center">
          <Logo />
        </a>

        {/* DESKTOP NAV (Pill Style) */}
        <nav className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                active === item.name
                  ? "bg-teal-500 text-black font-medium"
                  : "text-gray-300 hover:text-teal-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU (Drawer Style) */}
      {open && (
        <div className="md:hidden bg-[#0b0f14]/95 border-t border-white/10 backdrop-blur-lg">
          <nav className="flex flex-col p-5 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  setActive(item.name);
                }}
                className={`px-4 py-3 rounded-lg text-sm transition ${
                  active === item.name
                    ? "bg-teal-500 text-black font-medium"
                    : "text-gray-300 hover:bg-white/5 hover:text-teal-400"
                }`}
              >
                {item.name}
              </a>
            ))}

            <button className="mt-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-black font-medium py-2 rounded-full">
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
