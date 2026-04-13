export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        <h2 className="text-2xl font-bold text-orange-400">
          Aru Dreamcatchers
        </h2>

        <p className="mt-4 text-gray-400">
          Capturing your moments into timeless memories
        </p>

        <div className="mt-6 flex justify-center gap-6 text-gray-400">

          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
          <a href="#">Call</a>

        </div>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Aru Dreamcatchers
        </p>

      </div>

    </footer>
  );
}