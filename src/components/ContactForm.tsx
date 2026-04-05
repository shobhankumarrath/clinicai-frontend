import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");

      await axios.post("http://localhost:5000/api/contact", formData);
      // 🔥 Replace this later with your real backend URL

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {success && <p className="text-center text-green-600">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
