import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
        Home
      </NavLink>{" "}
      <NavLink to="/categories" exact>
        Categories
      </NavLink>
    </div>
  );
}
