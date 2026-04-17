import { useState, useRef, useEffect } from "react";
import { askAI } from "../services/ai";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const boxRef = useRef(null);
  const chatEndRef = useRef(null);

  // 🔥 HANDLE AI CALL
  const handleAsk = async () => {
    if (!input.trim()) return;

    const userText = input;

    // add user message
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");

    // typing indicator
    setMessages((prev) => [...prev, { role: "ai", text: "Typing..." }]);

    try {
      const res = await askAI(userText);

      try {
        const parsed = JSON.parse(res);

        // 🔥 auto fill form
        window.dispatchEvent(
          new CustomEvent("ai-fill-form", { detail: parsed }),
        );

        setMessages((prev) => [
          ...prev.slice(0, -1),
          {
            role: "ai",
            text: `✨ ${parsed.event} for ${parsed.guests} people\n💰 Budget: ${parsed.budgetSuggestion}`,
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "ai", text: res },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "ai", text: "⚠️ Error getting response" },
      ]);
    }
  };

  // 🔥 ENTER KEY
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAsk();
  };

  // 🔥 AUTO SCROLL
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔥 CLOSE OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 
        bg-orange-500 text-white w-12 h-12 md:w-14 md:h-14 
        rounded-full shadow-lg flex items-center justify-center 
        text-xl md:text-2xl hover:scale-110 transition z-50"
      >
        🤖
      </button>

      {/* BACKDROP */}
      {open && <div className="fixed inset-0 bg-black/20 z-40"></div>}

      {/* CHAT BOX */}
      {open && (
        <div
          ref={boxRef}
          className="
          fixed z-50 animate-fadeIn
          bottom-0 left-0 right-0 w-full rounded-t-2xl p-4
          md:bottom-24 md:right-6 md:left-auto md:w-80 md:rounded-2xl
          bg-white shadow-2xl flex flex-col"
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold">AI Assistant</p>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* QUICK SUGGESTIONS */}
          <div className="flex flex-wrap gap-2 mb-2">
            {[
              "Wedding for 200 people",
              "Birthday party for 30",
              "Pre wedding shoot",
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => setInput(q)}
                className="text-xs bg-orange-100 px-3 py-1 rounded-full hover:bg-orange-200"
              >
                {q}
              </button>
            ))}
          </div>

          {/* CHAT MESSAGES */}
          <div className="flex-1 overflow-y-auto space-y-2 mb-2 max-h-60">
            {messages.map((msg, i) => (
              <div
                className={`p-3 rounded-xl text-sm whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-orange-500 text-white ml-auto"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={chatEndRef}></div>
          </div>

          {/* INPUT */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your event..."
            className="w-full border p-3 rounded-lg text-sm focus:ring-2 focus:ring-orange-300"
          />

          {/* BUTTON */}
          <button
            onClick={handleAsk}
            className="mt-2 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Ask
          </button>
        </div>
      )}
    </>
  );
}
