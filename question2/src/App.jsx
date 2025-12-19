import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          textAlign: "center",
          lineHeight: "100px",
          marginBottom: "10px"
        }}
      >
        Color Toggle Div
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Change Color
      </button>
    </div>
  );
}

export default App;