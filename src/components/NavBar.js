// import React from "react";
// import { NavLink } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
//       <div className="container">
//         <div className="navbar-brand">Node App</div>

//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/" exact>
//               Главная
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/about">
//               Информация
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Login } from "./Login";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const loginToggle = () => setLogin(!isLogin);
  const toggle = () => setIsOpen(!isOpen);
  console.log(isLogin);
  return (
    <div>
      <Navbar color="primary" light expand="md">
        <div className="container">
          <NavbarBrand href="/">Note</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex align-items-center" navbar>
              <NavItem>
                <NavLink href="/">
                  <span className="header__item">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">
                  <span className="header__item">About</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => loginToggle()}
                  className={'header__item'}
                >
                  Login
                </span>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <div style={{display:'flex', justifyContent:'center' }}>
        <Login isLogin={isLogin} />
      </div>
    </div>
  );
};

export default NavBar;
