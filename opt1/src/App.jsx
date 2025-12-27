import React, { useState, useMemo, useCallback } from "react";

/* Child Component */
const ProductList = React.memo(({ products, onSelect }) => {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button onClick={() => onSelect(product.id)}>Select</button>
        </div>
      ))}
    </div>
  );
});

export default function App() {
  // Large products list
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ]);

  const [counter, setCounter] = useState(0);

  // ✅ useMemo: total price recalculates ONLY when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // ✅ useCallback: stable function reference
  const handleProductSelect = useCallback((id) => {
    console.log("Selected product id:", id);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter: {counter}
      </button>

      <hr />

      <ProductList
        products={products}
        onSelect={handleProductSelect}
      />
    </div>
  );
}