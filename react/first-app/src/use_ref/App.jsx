import React, { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let a = 0;
  const numRef = useRef(0);
  const colorRef = useRef(null);

  useEffect(() => {
    a += 1;
    numRef.current = numRef.current + 1;

    console.log(
      `Rerendering and the value of numRef is ${numRef.current} and a is ${a}`
    );
  });

  useEffect(() => {
    console.log(
      `Rerendering and the value of count is ${count} and numRef is ${numRef.current}`
    );
  }, [count]);

  function changeColor(event) {
    colorRef.current.style.backgroundColor = "red";
  }
  return (
    <div>
      <h1>Use Ref In React</h1>

      <button
        ref={colorRef}
        onClick={() => setCount(count + 1)}
        // onClick={changeColor}
      >
        Increase Count {count}
      </button>
    </div>
  );
}

export default App;
