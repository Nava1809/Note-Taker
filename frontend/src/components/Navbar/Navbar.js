import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav>
      <ul>
        <Link to="/add">
          <li>AddNote</li>
        </Link>
        <Link to="/deleteall">
          <li>DeleteAll</li>
        </Link>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/exports">
          <li>Exports</li>
        </Link>

      </ul>
      </nav>
    </div>
  );
};
export default Navbar;
