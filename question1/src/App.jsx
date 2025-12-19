import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

function ComponentA() {
  return <h2>Status is TRUE</h2>;
}

function ComponentB() {
  return <h2>Status is FALSE</h2>;
}

export default App;