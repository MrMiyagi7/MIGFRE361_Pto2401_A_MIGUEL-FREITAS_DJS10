import { react, useEffect, useState } from "react";

export default function DisplayBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts");
  });
}
