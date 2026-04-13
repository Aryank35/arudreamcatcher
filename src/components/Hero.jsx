import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20 md:py-28 pt-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-orange-100 opacity-20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          {/* BRAND */}

          <p className="text-sm tracking-widest text-orange-500 font-semibold mb-3">
            ARU DREAMCATCHERS
          </p>

          {/* HEADING */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Capturing Your <br />
            <span className="text-orange-500">Dream Moments</span>
          </h1>

          {/* TAGLINE */}

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            We don’t just click photos — we capture emotions, stories, and
            memories that last forever.
          </p>

          {/* CTA */}

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition hover:scale-105 text-center"
            >
              Book a Shoot
            </a>

            <a
              href="#portfolio"
              className="border border-gray-300 px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition text-center"
            >
              View Portfolio
            </a>
          </div>

          {/* TRUST */}

          <p className="mt-6 text-sm text-gray-500">
            Crafted with passion by Aryan & Upasana ✨
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Glow */}
            <div className="absolute inset-0 bg-orange-300 blur-2xl opacity-20 rounded-3xl"></div>

            {/* Image */}
            <img
              src="/HeroSectionPhoto.png"
              alt="Hero"
              className="relative w-full h-auto rounded-3xl shadow-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
