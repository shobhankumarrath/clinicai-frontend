const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Clinic Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">MediCare Clinic</h3>
          <p className="text-gray-400">
            Providing quality healthcare with modern technology and AI-assisted
            services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Phone: +91 9876543210</p>
          <p className="text-gray-400">Email: clinic@email.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        © 2026 MediCare Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
