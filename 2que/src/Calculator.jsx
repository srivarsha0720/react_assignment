import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    let a = Number(num1);
    let b = Number(num2);
    let result;

    if (operation === "add") {
      result = a + b;
    } else if (operation === "subtract") {
      result = a - b;
    } else if (operation === "multiply") {
      result = a * b;
    }

    setResults([...results, result]);
  };

  return (
    <div>
      <h2>Basic Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <br /><br />

      <button onClick={handleCalculate}>Perform Action</button>

      <h3>Results:</h3>
      {results.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </div>
  );
}

export default Calculator;