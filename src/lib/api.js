const api = "https://dummyjson.com/products";

// Get limited products (for Home)
export async function getProducts(limit = 6) {
  const res = await fetch(api);
  const data = await res.json();
  return data.products.slice(0, limit);
}

// Get all products
export async function getAllProducts() {
  const res = await fetch(api);
  const data = await res.json();
  return data.products;
}

// Get single product
export async function getProductById(id) {
  const res = await fetch(`${api}/${id}`);
  return res.json();
}
