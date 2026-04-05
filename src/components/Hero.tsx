import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-24 pb-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Your Health, Our Priority
          </h1>

          <p className="text-gray-600 text-lg">
            Book appointments easily and chat with our AI assistant to find the
            right doctor and schedule your visit instantly.
          </p>

          <div className="flex space-x-4">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow"
              onClick={() => navigate("/chat")}
            >
              Book Appointment
            </button>

            <button
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
              onClick={() => navigate("/chat")}
            >
              Chat with AI
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
            alt="Doctor"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
