import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
            StackShop
          </h2>
          <p className="text-gray-400 text-sm">
            A modern e-commerce experience built with Next.js and Tailwind CSS.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-cyan-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-400 transition">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm mb-2">
            Email: support@stackshop.com
          </p>
          <p className="text-gray-400 text-sm">Built By Umer </p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} StackShop. All rights reserved.
      </div>
    </footer>
  );
}
