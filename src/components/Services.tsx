const services = [
  {
    title: "General Physician",
    description: "Consult for common illnesses and regular health checkups.",
    icon: "🩺",
  },
  {
    title: "Dental Care",
    description: "Professional dental treatments and oral care services.",
    icon: "🦷",
  },
  {
    title: "Skin Specialist",
    description: "Advanced treatments for skin conditions and care.",
    icon: "🧴",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
