import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1 className="shadow sticky z-50 top-0 bg-red-400 ">
        <nav className="bg-white border-gray-200 px-4 lg:px-3">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            123 <Link to="/" className="flex items-center"></Link>
          </div>
        </nav>
      </h1>
    </header>
  );
}

export default Header;
