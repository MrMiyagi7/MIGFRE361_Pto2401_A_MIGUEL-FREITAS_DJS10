import { react, useEffect, useState } from "react";

export default function DisplayBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      if (!response.ok) {
        throw new Error("Data fetching failed");
      }
      return response.json();
    });
  });
}
