import React, { useState, memo } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function onIncrement() {
    setCount((count) => count + 1);
  }

  function onDecrement() {
    setCount((count) => count - 1);
  }

  return (
    <div className="App">
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={onIncrement}>Increment</button>
        <p>{count}</p>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <Chart />
    </div>
  );
}

const Chart = memo(() => {
  console.log("Rendered...");
  return <div>Chart</div>;
});