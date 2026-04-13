export default function Navbar() {

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}

        <a href="#top" className="text-xl font-bold text-orange-500">
          Aru Dreamcatchers
        </a>

        {/* LINKS */}

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <a href="#portfolio" className="hover:text-orange-500">
            Portfolio
          </a>

          <a href="#services" className="hover:text-orange-500">
            Services
          </a>

          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>

        </div>

        {/* CTA */}

        <a
          href="#contact"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hidden md:block"
        >
          Book Now
        </a>

      </div>

    </nav>
  );
}