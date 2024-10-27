import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-content">
      <div className="hero-image">
        <h2>Welcome to Blogs Are Us!</h2>
        <p>Blogs Are Us have just the right blog for you!</p>
        <button className="hero-button">
          <Link className="link-text" to={"/Blogs"}>
            CHECK OUT OUR BLOG POSTS
          </Link>
        </button>
      </div>
    </div>
  );
}
