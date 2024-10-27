import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <img className="nav-logo" src="/favicon.ico"></img>
        <div className="nav-item-container">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Blogs"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Contact us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
