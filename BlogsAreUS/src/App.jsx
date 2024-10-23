import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DisplayBlogPosts from "./blogPosts";
import Header from "../Components/header";
import Footer from "../Components/footer";

function App() {
  return (
    <>
      <Header />
      <DisplayBlogPosts />
      <Footer />
    </>
  );
}

export default App;
