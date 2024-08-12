import React from "react";
import logo from "../movie.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="ml-[20px] w-[50px] h-[50px]" src={logo} alt="" />
      <Link to="/" className="text-blue-500 text-xl font-bold">
        Movies
      </Link>
      <Link to="/Watchlist" className="text-blue-500 text-xl font-bold">
        Watchlist
      </Link>
    </div>
  );
}

export default Navbar;
