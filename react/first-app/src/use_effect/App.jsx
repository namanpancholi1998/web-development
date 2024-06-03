import React, { useState, useEffect } from "react";
import NavBar from "../use_effect/NavBar";

function App() {
  const [count, setCount] = useState(0);

  // Case 1: Run on every render
  useEffect(() => {
    alert("I will Run on every render.");
  });

  // Case 2: Run only on first render
  useEffect(() => {
    alert("Hey we are learning useEffect. Run only on first render");
  }, []);

  // Case 3: Run on every count change
  useEffect(() => {
    alert(
      `it will trigger when count will change updated count value ${count}`
    );
  }, [count]);

  return (
    <div>
      <NavBar color="red" />
      <h1>Use Effect in react </h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count {count}
      </button>
    </div>
  );
}

export default App;
