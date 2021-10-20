import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-posts" activeClassName="selected">
            All Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
