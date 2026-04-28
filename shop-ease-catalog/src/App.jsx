import { useState } from 'react';
import './App.css';
import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, title: "Laptop", category: "Electronics", price: "$999", image: "laptop.jpg" },
  { id: 2, title: "Coffee Maker", category: "Home Appliances", price: "$49", image: "coffee-maker.jpg" },
  { id: 3, title: "Headphones", category: "Electronics", price: "$199", image: "headphones.jpg" },
];

function App() {
  const [filter, setFilter] = useState("");
  
  const filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  return (
    <div>
      <h1>ShopEase Product Catalog</h1>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Home Appliances")}>Home Appliances</button>
      <button onClick={() => setFilter("")}>All</button>
      
      <div className='product-list'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;