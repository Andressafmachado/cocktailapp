import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontSize: 20, fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{ fontSize: 20, fontWeight: "bold" }}
        to="/categoryPage/:strcategory"
      >
        categoryPage
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{ fontSize: 20, fontWeight: "bold" }}
        to="/cocktailpage/:idDrink"
      >
        cocktailpage
      </NavLink>
    </div>
  );
}
