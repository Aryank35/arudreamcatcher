// import data from "../data/siteData.json"; // if using JSON

export default function Portfolio() {

  const images = [
  { src: "/portfolio/Bridge.jpg", title: "Architecture" },
  { src: "/portfolio/animal-showcase.jpg", title: "Nature" },
  { src: "/portfolio/Gandhi.jpg", title: "Portrait" },
  { src: "/portfolio/greenery.jpg", title: "Greenery" },
  { src: "/portfolio/park-path-01.jpg", title: "Pathways" },
  { src: "/portfolio/playArea.jpg", title: "Lifestyle" },
  { src: "/portfolio/seat.jpg", title: "Minimal Shots" },
  { src: "/portfolio/sunflower.jpg", title: "Details" }
];

  return (
    <section id="portfolio" className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Work
        </h2>

        <p className="text-gray-500 mb-12">
          A glimpse of moments we’ve captured
        </p>

        {/* Pinterest Layout */}

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

          {images.map((item, index) => (

            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg break-inside-avoid group cursor-pointer"
            >

              {/* Image */}

              <img
                src={item.src}
                alt={item.title}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <p className="text-white text-lg font-semibold">
                  {item.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}