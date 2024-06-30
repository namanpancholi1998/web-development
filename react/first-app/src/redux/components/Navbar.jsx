import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Navbar</h1>
      <h2>Count : {count}</h2>
    </div>
  );
}

export default Navbar;
