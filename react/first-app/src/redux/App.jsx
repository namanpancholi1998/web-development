import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter/counterSlice.js";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <h1>Redux</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <h2>Currently Counter is : {counter}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </Provider>
  );
}

export default App;

/*
  Redux -> Single source of truth where we can manage our state.
  1. Store -> Global state container
  2. Reducer -> Manage state based on action
  3. Action -> Trigger reducer with state
  4. Dispatcher -> Trigger reducer with action
*/
