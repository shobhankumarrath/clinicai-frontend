import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">Clinic Care</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
            onClick={() => navigate("/chat")}
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          <a href="#" className="block text-gray-700">
            Home
          </a>
          <a href="#" className="block text-gray-700">
            Services
          </a>
          <a href="#" className="block text-gray-700">
            Contact
          </a>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
