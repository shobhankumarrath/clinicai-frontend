const ChatHighlight = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Book Appointments Instantly with AI
          </h2>

          <p className="text-gray-600 text-lg">
            Skip the waiting. Chat with our AI assistant to check doctor
            availability, select your preferred time, and confirm your
            appointment in seconds.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow">
            Start Chat
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://img.freepik.com/free-vector/chatbot-concept-illustration_114360-5522.jpg"
            alt="AI Chat"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ChatHighlight;
