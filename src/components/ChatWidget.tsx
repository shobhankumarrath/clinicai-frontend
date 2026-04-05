import { useEffect, useRef, useState } from "react";
import axios from "axios";

type Message = {
  text: string;
  sender: "user" | "bot";
  options?: string[];
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false); // 🔥 start CLOSED
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I can help you book an appointment.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

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
      await new Promise((res) => setTimeout(res, 1200));

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
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          💬
        </button>
      )}

      {/* CHAT PANEL */}
      {open && (
        <div
          className="
            fixed z-50 bg-white shadow-2xl flex flex-col
            md:bottom-5 md:right-5 md:w-[350px] md:h-[500px] md:rounded-2xl
            bottom-0 right-0 w-full h-[70%] rounded-t-2xl
          "
        >
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-2xl">
            <span className="font-semibold">AI Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50"
          >
            {messages.map((msg, index) => (
              <div key={index}>
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white ml-auto"
                      : "bg-white shadow text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.options && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(opt)}
                        className="bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-full text-xs"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="bg-white px-4 py-2 rounded-2xl shadow w-fit text-sm">
                👨‍💼 Assitant is typing.....
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-4 py-2 text-sm outline-none"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={() => sendMessage()}
              className="bg-blue-600 text-white px-4 rounded-full"
              disabled={loading}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
