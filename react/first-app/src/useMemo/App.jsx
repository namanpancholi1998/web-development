import React, { useMemo, useState } from "react";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    idex: i,
    isMagical: i === 29_000_000,
  };
});

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(nums);

  //   const magical = number.find((item) => item.isMagical === true); // 29_000_000 is magical number
  const magical = useMemo(
    () => number.find((item) => item.isMagical === true),
    [number]
  );

  return (
    <>
      <span>Magical number is {magical?.idex}</span>
      <div>
        <h1>useMemo in react</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            if (count == 10) {
              setNumber(
                new Array(10_000_000).fill(0).map((_, i) => {
                  return {
                    idex: i,
                    isMagical: i === 9_000_000,
                  };
                })
              );
            }
          }}
        >
          <span>{count}</span>
          <span>Click Me</span>
        </button>
      </div>
    </>
  );
}

/*
  useMemo
  useMemo is used to optimize our code.
  it is used to create a memoized value.

  Syntax:
  const memoizedValue = useMemo(() => {
    return value;
  }, [dependencyList]);

  where dependencyList is an array of values that are used as dependencies for the memoized value.

  Example:

  const memoizedValue = useMemo(() => {
    return value;
  }, [dependencyList]);

  Usage:

  const memoizedValue = useMemo(() => {
    return value;
  }, [dependencyList]);

  
*/
