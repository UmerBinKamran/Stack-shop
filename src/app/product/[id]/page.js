import { getProductById } from "@/lib/api";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  const product = await getProductById(params.id);
  console.log(product);

  return (
    <main className="bg-[#020617] text-white min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/product" className="text-cyan-400 mb-6 inline-block">
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-h-[400px] object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

            <p className="text-gray-400 mb-4">{product.description}</p>

            <p className="text-3xl font-bold text-cyan-400 mb-6">
              ${product.price}
            </p>

            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
