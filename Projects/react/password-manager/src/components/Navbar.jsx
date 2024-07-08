import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-700 text-white">
      <div className=" flex justify-between items-center px-4 py-5 h-14">
        <div className="logo">
          <span className="">&lt;&gt;</span>
          Keep
          <span className="text-green-400">Keys&lt;/&gt; </span>
        </div>

        <ul className="flex gap-5">
          <li>
            <a href="" className="hover:font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:font-bold">
              About
            </a>
          </li>
          <li>
            <a href="" className="hover:font-bold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
