import React from "react";
import blogs from "../Data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>All Blog Posts</h1>
      {blogs.map((blog) => (
        <div key={blog.id} style={styles.card}>
          <h2>{blog.title}</h2>
          <p><strong>Date:</strong> {blog.date}</p>
          <p>{blog.content.substring(0, 100)}...</p>
          <Link to={`/blogs/${blog.id}`} style={styles.readMore}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto"
  },
  heading: {
    textAlign: "center"
  },
  card: {
    background: "white",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  },
  readMore: {
    color: "#007bff",
    fontWeight: "bold"
  }
};

export default Blogs;
