import React from "react";
import Navbar from "./components/Navbar.jsx";
import { counterContext } from "./context.js";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />
        <div>
          <h1>useContext in react</h1>

          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase Count {count}
          </button>
        </div>
      </counterContext.Provider>
    </>
  );
}

/*
    useContext:- 
    useContext is a hook that allows us to access the context value. 
    It takes a context object as an argument and returns the current value of the context.

    Syntax:

    const value = useContext(MyContext);

    Example:

    const value = useContext(MyContext);

    Usage:
    const { state, dispatch } = useContext(MyContext);

    where state is the current state and dispatch is the function to dispatch actions.

    Note:
    The MyContext object can be created using the createContext function.
    const MyContext = createContext();
    where MyContext is the context object.

    The useContext hook is used to access the context value.
*/
