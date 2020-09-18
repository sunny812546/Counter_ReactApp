import React, { useState } from "react";
import Button from "./Button";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    return count > 10 ? 11 : setCount(count + 1);
  };
  return (
    <div className="App">
      <header>
        <h1>This is Counter App Using Hooks</h1>
      </header>
      <h2>
        Current Counter Value: <span>{count}</span>
      </h2>
      <Button
        title="Reset Counter"
        onClick={() => {
          setCount(0);
        }}
      />
      <Button title="Increment Counter" onClick={Increment} />
      <Button
        title="Decrement Counter"
        onClick={() => (count < 1 ? 0 : setCount(count - 1))}
      />
    </div>
  );
};

export default App;
