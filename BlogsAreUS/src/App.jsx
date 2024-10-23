import "./App.css";
import DisplayBlogPosts from "./blogPosts";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <DisplayBlogPosts />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
