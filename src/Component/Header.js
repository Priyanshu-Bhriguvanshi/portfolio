import { useState } from "react";
import { NavLink } from "react-router-dom";

// Reusable NavLink component
const NavItem = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-teal-400"
          : "hover:text-teal-300 transition-colors duration-200"
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Toggle overflow-hidden on body to prevent scrolling
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("overflow-hidden"); // Ensure scrolling is enabled when the menu is closed
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-extrabold text-3xl">
          <NavItem to="/" onClick={closeMenu}>
            Priyanshu
          </NavItem>
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <button
          className="lg:hidden text-2xl focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <span className="text-white">✖</span>
          ) : (
            <span className="text-white">☰</span>
          )}
        </button>

        {/* Fullscreen Nav Links (Mobile) */}
        <nav
          className={`fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center gap-8 text-2xl z-40 transition-transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <ul className="text-center">
            <li>
              <NavItem to="/" onClick={closeMenu}>
                Home
              </NavItem>
            </li>
            <li>
              <NavItem to="/about" onClick={closeMenu}>
                About
              </NavItem>
            </li>
            <li>
              <NavItem to="/service" onClick={closeMenu}>
                Service
              </NavItem>
            </li>
            <li>
              <NavItem to="/contact" onClick={closeMenu}>
                Contact
              </NavItem>
            </li>
          </ul>
        </nav>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
          <NavItem to="/" onClick={closeMenu}>
            Home
          </NavItem>
          <NavItem to="/about" onClick={closeMenu}>
            About
          </NavItem>
          <NavItem to="/service" onClick={closeMenu}>
            Service
          </NavItem>
          <NavItem to="/contact" onClick={closeMenu}>
            Contact
          </NavItem>
        </nav>
      </div>
    </header>
  );
};

export default Header;
