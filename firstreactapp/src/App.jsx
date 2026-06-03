import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const increaseEmployee = () => {
    setCount(count + 1);
  };

  const decreaseEmployee = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      <h1>Employee Counter App</h1>

      <h2>Total Employees: {count}</h2>

      <button onClick={increaseEmployee}>
        Add Employee
      </button>

      <button
        onClick={decreaseEmployee}
        style={{ marginLeft: "10px" }}
      >
        Remove Employee
      </button>

    </div>
  );
}

export default App;