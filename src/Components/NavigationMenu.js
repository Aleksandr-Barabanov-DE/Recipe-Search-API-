import "../Styles/Variables.css";
import "../Styles/NavigationMenu.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/MainPage", label: "Main" },
  { to: "/Wines", label: "Wines" },
  { to: "/Recipes", label: "Recipes" },
];

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navigation-menu">
      <div className="menu__icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`menu__list ${isMenuOpen ? "active" : ""}`}>
        {links.map(({ to, label }) => (
          <li key={to} onClick={toggleMenu}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? "active navigation-link" : "navigation-link"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
