import React from "react";

const HeavyComponent = () => {
  console.log("Heavy Component Rendered");

  // Simulating heavy work
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "2px solid black" }}>
      <h2>Heavy Component</h2>
      <p>This component renders only once.</p>
    </div>
  );
};

// Wrapped with React.memo
export default React.memo(HeavyComponent);