export default function Contact() {

  const phone = "9337440067"; // replace with your number

  return (
    <section id="contact" className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Book Your Shoot
        </h2>

        <p className="text-gray-500 mb-10">
          Tell us about your event and we’ll get back to you quickly
        </p>

        {/* CONTACT OPTIONS */}

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          {/* WhatsApp */}

          <a
            href={`https://wa.me/${phone}?text=Hi, I want to book a shoot`}
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg text-lg font-semibold transition hover:scale-105"
          >
            💬 Chat on WhatsApp
          </a>

          {/* Call */}

          <a
            href={`tel:${phone}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg text-lg font-semibold transition hover:scale-105"
          >
            📞 Call Now
          </a>

        </div>

      </div>

    </section>
  );
}