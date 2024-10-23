import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <img className="nav-logo" src="/favicon.ico"></img>
        <div className="nav-item-container">
          <h3 className="nav-item">Home</h3>
          <h3 className="nav-items">Blogs</h3>
          <h3 className="nav-items">About us</h3>
          <h3 className="nav-items">Contact us</h3>
        </div>
      </nav>
    </header>
  );
}
