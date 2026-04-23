import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-[#0b1220] border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-500/20 transition duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
        />

        {product.discountPercentage > 0 && (
          <span className="absolute top-3 left-3 bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded-md">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-cyan-400 transition">
          {product.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
          {product.category}
        </p>
        <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
          {"★".repeat(Math.round(product.rating))}
          <span className="text-gray-400 ml-1">({product.rating})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold text-lg">
            ${product.price}
          </span>

          {product.discountPercentage > 0 && (
            <span className="text-gray-500 line-through text-sm">
              $
              {Math.round(
                product.price / (1 - product.discountPercentage / 100)
              )}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
