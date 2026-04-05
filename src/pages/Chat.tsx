import { useEffect, useRef, useState } from "react";
import axios from "axios";

type Message = {
  text: string;
  sender: "user" | "bot";
  options?: string[];
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I can help you book an appointment.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  // ✅ Auto scroll
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async (msg?: string) => {
    const finalMessage = msg || input;
    if (!finalMessage.trim()) return;

    setMessages((prev) => [...prev, { text: finalMessage, sender: "user" }]);

    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: finalMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          text: res.data.reply,
          sender: "bot",
          options: res.data.options,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Chat Container */}
      <div className="w-full max-w-md h-[80vh] bg-white rounded-2xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-2xl font-semibold">
          AI Assistant
        </div>

        {/* Messages */}
        <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, index) => (
            <div key={index}>
              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>

              {/* Options */}
              {msg.options && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {msg.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(opt)}
                      className="bg-blue-100 px-3 py-1 rounded-full text-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Loading indicator */}
          {loading && (
            <div className="bg-gray-200 px-4 py-2 rounded-2xl w-fit">
              Typing...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 outline-none"
          />
          <button
            onClick={() => sendMessage()}
            className="bg-blue-600 text-white px-4 rounded-full"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
