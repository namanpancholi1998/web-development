import React, { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAdd = () => {
    setTodoList([...todoList, { todo, isDone: false }]);
    setTodo("");
  };
  const handleEdit = (isDone) => {
    isDone = true;
  };

  const handleDelete = () => {
    alert("Delete Todo");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 md:rounded-xl bg-slate-400 p-5 min-h-[80vh] w-[100vw] md:w-[80vw]">
        <div className="addTodo flex gap-5 justify-center mb-6">
          <input
            type="text"
            value={todo}
            placeholder="Add Todo"
            className="w-1/2 p-2 rounded-lg"
            onChange={handleChange}
          />

          <button
            className="addBtn bg-slate-700 hover:bg-slate-500 transition-all text-white p-2 rounded-lg"
            onClick={handleAdd}
          >
            Add Todo
          </button>
        </div>

        <h1 className="text-xl font-bold">Your Todo</h1>

        <div className="todos">
          {todoList.map((todo) => {
            return (
              <div
                key={todo}
                className="todo flex gap-3 items-center w-1/2 justify-between my-2 "
              >
                <div className={todo.isDone ? "line-through" : ""}>
                  {todo.todo}
                </div>

                <div className="buttons flex gap-1">
                  <button
                    className="bg-slate-700 hover:bg-slate-500 transition-all text-white px-5 rounded-lg "
                    onClick={() => handleEdit(todo.isDone)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-slate-700 hover:bg-red-500 transition-all text-white p-2 rounded-lg"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
