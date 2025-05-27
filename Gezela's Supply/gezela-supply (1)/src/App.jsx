import React, { useState } from "react";

const products = [
  { id: 1, name: "Street Hoodie", price: 45, image: "https://via.placeholder.com/300x400?text=Hoodie" },
  { id: 2, name: "Denim Jacket", price: 60, image: "https://via.placeholder.com/300x400?text=Jacket" },
  { id: 3, name: "Graphic Tee", price: 25, image: "https://via.placeholder.com/300x400?text=Tee" }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-white text-black p-6 font-sans">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gezela Supply</h1>
        <div className="text-sm">Cart: {cart.length} item(s)</div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {products.map(product => (
          <div key={product.id} className="border rounded-xl shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button onClick={() => addToCart(product)} className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Cart Total: ${total}</h2>
        <a
          href="https://www.payoneer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
        >
          Pay with Payoneer
        </a>
      </div>

      <footer className="text-center text-gray-500 text-sm mt-12">
        &copy; 2025 Gezela Supply. Payments accepted via Payoneer.
      </footer>
    </div>
  );
}
