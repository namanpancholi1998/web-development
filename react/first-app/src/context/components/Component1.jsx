import React, { useContext } from "react";
import { counterContext } from "../context.js";

export default function Component1() {
  const value = useContext(counterContext);
  return (
    <div>
      <h1>Component1</h1>
      <h2>{value.count}</h2>
    </div>
  );
}
