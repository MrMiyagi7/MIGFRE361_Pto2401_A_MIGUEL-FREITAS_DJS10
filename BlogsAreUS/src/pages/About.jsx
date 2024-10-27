import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-content">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Blogs Are Us</strong>, your go-to platform for
        engaging, informative, and diverse blog content. Our mission is to
        connect readers with high-quality articles on a variety of topics, from
        technology and lifestyle to travel and personal development.
      </p>
      <p>
        Founded by a team of passionate writers and content creators, Blogs Are
        Us is designed to be a space for inspiration, learning, and community.
        We believe in the power of words to spark curiosity and empower readers
        to explore new ideas and perspectives.
      </p>
      <p>
        Thank you for being part of our journey. We hope our content inspires,
        educates, and entertains you!
      </p>
      <button className="hero-button">
        <Link className="link-text" to={"/Contact"}>
          Contact Us
        </Link>
      </button>
    </div>
  );
}
