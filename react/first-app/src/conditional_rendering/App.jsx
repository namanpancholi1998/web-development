import React, { useState } from "react";

function App() {
  const [showBTn, setShowBtn] = useState(false);
  const [todos, setTodos] = useState([
    { title: "Todo 1", desc: "Todo 1 description" },
    { title: "Todo 2", desc: "Todo 2 description" },
    { title: "Todo 3", desc: "Todo 3 description" },
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    );
  };

  return (
    <div>
      <h1>Conditional Rendering And Rendering List in React</h1>
      {showBTn && <button>Show only when showBtn is true </button>}
      <br></br>
      <button onClick={() => setShowBtn(!showBTn)}>Show Button</button>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
}

export default App;
