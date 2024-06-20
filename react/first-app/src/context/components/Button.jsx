import React, { useContext } from "react";
import Component1 from "./Component1";
import { counterContext } from "../context.js";

export default function Button() {
  const value = useContext(counterContext);

  return (
    <div>
      <button onClick={() => value.setCount(value.count + 1)}>
        <span>
          <Component1 />
        </span>{" "}
        Button
      </button>
    </div>
  );
}
