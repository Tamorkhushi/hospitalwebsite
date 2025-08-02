import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <nav className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-500 text-white shadow-md sticky top-0 z-50">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold tracking-wide">SmartCare</h1>
    <ul className="hidden md:flex gap-8 font-medium">
      <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
      <li><Link to="/features" className="hover:text-yellow-300">Features</Link></li>
      <li><Link to="/testimonials" className="hover:text-yellow-300">Testimonials</Link></li>
      <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
    </ul>
  </div>
</nav>


  );
};

export default Navbar;
