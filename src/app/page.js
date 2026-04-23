import Link from "next/link";
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            StackShop
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Discover high-quality products with a modern shopping experience.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl text-center font-semibold mb-10">
          Featured Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/product"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition hover:scale-105 shadow-md hover:shadow-cyan-500/30"
          >
            View All Products
          </Link>
        </div>
      </section>
    </main>
  );
}
