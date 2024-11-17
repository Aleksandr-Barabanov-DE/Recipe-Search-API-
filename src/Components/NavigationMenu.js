import "../Styles/Variables.css";
import "../Styles/NavigationMenu.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/MainPage", label: "Main" },
  { to: "/Wines", label: "Wines" },
  { to: "/Recipes", label: "Recipes" },
];

export default function NavigationMenu() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getLinkClass = (path) =>
    location.pathname === path ? "active navigation-link" : "navigation-link";

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
            <Link className={getLinkClass(to)} to={to}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
