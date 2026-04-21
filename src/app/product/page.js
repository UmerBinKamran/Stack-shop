import { getAllProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="bg-[#020617] text-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl text-center md:text-4xl font-extrabold mb-2">
          All Products
        </h1>
        <p className="text-gray-400 text-center">
          Browse all available items in StackShop
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
