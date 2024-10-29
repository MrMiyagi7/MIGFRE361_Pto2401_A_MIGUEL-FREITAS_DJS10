import { react, useEffect, useState } from "react";

export default function DisplayBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="main-content">
      <h1>Blog Posts</h1>
      {posts.length > 0 ? ( // Ensure posts exist before mapping
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p> // Shows loading message while posts are being fetched
      )}
    </div>
  );
}
