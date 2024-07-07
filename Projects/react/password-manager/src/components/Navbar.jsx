import React from "react";

function Navbar() {
  return (
    <nav className="bg-purple-200 flex justify-between items-center p-3">
      <div className="logo">Password Manager</div>
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
    </nav>
  );
}

export default Navbar;
