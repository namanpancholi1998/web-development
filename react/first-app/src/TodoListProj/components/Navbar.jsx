import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-900 text-white p-4">
      <div className="logo">
        <span className="font-bold text-xl mx-8">MyTodo</span>
      </div>

      <ul className="flex gap-8 mx-8">
        <li className="cursor-pointer hover:font-semibold transition-all">
          Home
        </li>
        <li className="cursor-pointer hover:font-semibold transition-all">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
}
