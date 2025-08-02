import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-500 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">SmartCare</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300">Home</Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-yellow-300">Features</Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-yellow-300">Testimonials</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-500 text-white flex flex-col space-y-4 py-6 px-6 absolute top-[64px] left-0 w-full shadow-lg animate-slideDown">
          <Link to="/" className="hover:text-yellow-300" onClick={toggleMenu}>Home</Link>
          <Link to="/features" className="hover:text-yellow-300" onClick={toggleMenu}>Features</Link>
          <Link to="/testimonials" className="hover:text-yellow-300" onClick={toggleMenu}>Testimonials</Link>
          <Link to="/contact" className="hover:text-yellow-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
