import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todos = localStorage.getItem("todoList");

    if (todos) {
      let todo = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(todo);
    }
  }, []);

  const saveTodo = (params) => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAdd = () => {
    if (!todo) {
      return toast.error("Add Todo cannot be empty");
    }
    setTodoList([...todoList, { id: uuidv4(), todo, isDone: false }]);
    setTodo("");
    saveTodo();
  };
  const handleEdit = (e, id) => {
    const todo = todoList.filter((todo) => todo.id === id);
    setTodo(todo[0].todo);
    handleDelete(id);
    saveTodo();
  };

  const handleDelete = (id) => {
    let newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    saveTodo();
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodoList(newTodoList);
    saveTodo();
  };
  return (
    <>
      <Navbar />
      <div className="md:container mx-auto md:my-5 md:rounded-xl bg-slate-400 p-5 min-h-[80vh] w-[100vw] md:w-[80vw] max-sm:h-[90vh]">
        <p className=" text-[13px] md:text-2xl font-bold text-center mb-5">
          Task Manager - Manage Your Tasks at One Place
        </p>
        <div className="addTodo flex gap-5 justify-center mb-6 max-sm:flex-col">
          <input
            type="text"
            value={todo}
            placeholder="Add Todo"
            className="w-1/2 p-2 rounded-lg max-sm:w-full"
            onChange={handleChange}
          />

          <button
            className="addBtn bg-slate-700 hover:bg-slate-500 transition-all text-white p-2 rounded-lg"
            // disabled={!todo}
            onClick={handleAdd}
          >
            Add Todo
          </button>
        </div>
        <input
          type="checkbox"
          checked={showFinished}
          onChange={toggleFinished}
        />{" "}
        Show Finished
        <h2 className="text-xl font-bold">Your Todo</h2>
        <div className="todos">
          {todoList.map((todo) => {
            return (
              (showFinished || !todo.isDone) && (
                <div
                  key={todo.id}
                  className="todo flex gap-3 items-center md:w-1/2 justify-between my-2 "
                >
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    name={todo.id}
                    id="isDone"
                    onChange={handleCheckbox}
                  />
                  <div className={todo.isDone ? "line-through" : ""}>
                    {todo.todo}
                  </div>

                  <div className="buttons flex gap-1 h-full">
                    <button
                      className="bg-slate-700 w-1/2 hover:bg-green-500 transition-all text-white px-5 rounded-lg "
                      onClick={(e) => handleEdit(e, todo.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-slate-700 w-1/2 hover:bg-red-500 transition-all text-white p-2 rounded-lg"
                      onClick={(e) => {
                        handleDelete(todo.id);
                      }}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}
