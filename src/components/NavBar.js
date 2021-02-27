import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontSize: 20, fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{ fontSize: 20, fontWeight: "bold" }}
        to="/categorie"
      >
        categorie
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{ fontSize: 20, fontWeight: "bold" }}
        to="/cocktaildetail"
      >
        cocktaildetail
      </NavLink>
    </div>
  );
}
