export default function Services() {

  const services = [
    {
      title: "Event Photography",
      desc: "Capture birthdays, house functions & celebrations",
      price: "₹999 onwards"
    },
    {
      title: "Instagram Reels",
      desc: "Content creation for cafes, gyms & brands",
      price: "₹1999 / month"
    },
    {
      title: "Pre-Wedding Shoots",
      desc: "Beautiful couple shoots with cinematic feel",
      price: "₹4999 onwards"
    },
    {
      title: "Custom Packages",
      desc: "Tailored solutions for weddings & big events",
      price: "Contact Us"
    }
  ];

  return (
    <section id="services" className="py-24 bg-orange-50">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>

        <p className="text-gray-500 mb-12">
          Flexible packages for every kind of event
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-1"
            >

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-500 mb-4">
                {service.desc}
              </p>

              <p className="text-orange-500 font-bold text-lg">
                {service.price}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}