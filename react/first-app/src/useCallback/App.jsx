import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [adjective, seAdjective] = useState("good");

  const getAdjective = useCallback(() => {
    seAdjective("bad");
  }, []);

  return (
    <>
      <Navbar adjective={adjective} getAdjective={getAdjective} />
      <div>
        <h1>useCallback in react</h1>
      </div>
    </>
  );
}
