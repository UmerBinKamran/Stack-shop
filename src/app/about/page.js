export default function About() {
  return (
    <main className="bg-[#020617] text-white min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            StackShop
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          StackShop is a modern e-commerce web application built using Next.js
          and Tailwind CSS. It showcases a clean UI, dynamic routing, and API
          integration using DummyJSON.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition">
          <h3 className="text-xl font-semibold mb-3"> Fast & Modern</h3>
          <p className="text-gray-400 text-sm">
            Built with Next.js App Router for fast performance and smooth
            navigation.
          </p>
        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition">
          <h3 className="text-xl font-semibold mb-3"> Clean UI</h3>
          <p className="text-gray-400 text-sm">
            Designed with Tailwind CSS for a modern and responsive user
            interface.
          </p>
        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition">
          <h3 className="text-xl font-semibold mb-3"> API Powered</h3>
          <p className="text-gray-400 text-sm">
            Uses DummyJSON API to fetch real product data dynamically.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Built for Learning & Growth
        </h2>
        <p className="text-gray-400">
          This project was created using Tailwind, Next.js, and API integration.
        </p>
      </div>
    </main>
  );
}
