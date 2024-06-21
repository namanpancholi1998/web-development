import React from "react";
import { memo } from "react";

export default memo(function Navbar({ adjective, getAdjective }) {
  console.log("Navbar rendered");

  return (
    <div>
      <h1>I am a {adjective} Navbar</h1>

      <button onClick={getAdjective}>Change Adjective</button>
    </div>
  );
});
