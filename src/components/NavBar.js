import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="container">
        <div className="navbar-brand">Node App</div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Информация
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
