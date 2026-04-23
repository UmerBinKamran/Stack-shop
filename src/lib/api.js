const api = "https://dummyjson.com/products";

export async function getProducts(limit = 6) {
  const res = await fetch(api);
  const data = await res.json();
  return data.products.slice(0, limit);
}

export async function getAllProducts() {
  const res = await fetch(api);
  const data = await res.json();
  return data.products;
}
export async function getProductById(id) {
  const res = await fetch(`${api}/${id}`);
  return res.json();
}
