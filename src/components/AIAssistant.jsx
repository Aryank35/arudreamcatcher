import { useState, useRef, useEffect } from "react";

export default function AIAssistant() {

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const boxRef = useRef(null);

  const handleAsk = () => {
    if (input.toLowerCase().includes("birthday")) {
      setResponse("🎉 For birthday events, we recommend Event Photography starting at ₹999.");
    } 
    else if (input.toLowerCase().includes("wedding")) {
      setResponse("💍 Wedding shoots start from ₹4999 with customizable packages.");
    } 
    else {
      setResponse("✨ Tell me about your event and I'll suggest the best package!");
    }
  };

  // Close on outside click
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
      {/* FLOATING BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 
        bg-orange-500 text-white w-12 h-12 md:w-14 md:h-14 
        rounded-full shadow-lg flex items-center justify-center 
        text-xl md:text-2xl hover:scale-110 transition z-50"
      >
        🤖
      </button>

      {/* BACKDROP (Mobile UX) */}

      {open && (
        <div className="fixed inset-0 bg-black/20 z-40"></div>
      )}

      {/* CHAT BOX */}

      {open && (
        <div
          ref={boxRef}
          className="
          fixed z-50 animate-fadeIn

          /* Mobile */
          bottom-0 left-0 right-0 w-full rounded-t-2xl p-4

          /* Desktop */
          md:bottom-24 md:right-6 md:left-auto md:w-80 md:rounded-2xl

          bg-white shadow-2xl
          "
        >

          {/* Header */}

          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold">AI Assistant</p>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Input */}

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your event..."
            className="w-full border p-3 rounded mb-2 text-sm"
          />

          <button
            onClick={handleAsk}
            className="w-full bg-orange-500 text-white py-2 rounded"
          >
            Ask
          </button>

          {/* Response */}

          {response && (
            <p className="mt-3 text-sm text-gray-600">
              {response}
            </p>
          )}

        </div>
      )}
    </>
  );
}