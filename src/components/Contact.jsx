import { useState } from "react";

export default function Contact() {
  const phone = "9337440067";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    guests: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hi, I'm ${form.name}.
Event: ${form.event}
Guests: ${form.guests}
Phone: ${form.phone}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-6">
        {/* Heading */}

        <h2 className="text-3xl font-bold text-center mb-6">Book Your Shoot</h2>

        <p className="text-center text-gray-500 mb-10">
          Fill the form or contact us directly
        </p>

        {/* FORM */}

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
            required
          />

          <select
            name="event"
            value={form.event}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-300 outline-none bg-white"
            required
          >
            <option value="">Select Event Type</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate Event</option>
            <option>Housewarming</option>
            <option>Temple Function</option>
            <option>Festival</option>
            <option>Anniversary</option>
            <option>Picnic</option>
            <option>Ring Ceremony</option>
            <option>Others</option>
          </select>

          <input
            name="guests"
            placeholder="Number of Guests"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
            Send via WhatsApp
          </button>
        </form>

        {/* QUICK ACTIONS */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* WhatsApp */}

          <a
            href={`https://wa.me/${phone}?text=Hi, I want to book a shoot`}
            target="_blank"
            className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
          >
            💬 WhatsApp
          </a>

          {/* Call */}

          <a
            href={`tel:${phone}`}
            className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
