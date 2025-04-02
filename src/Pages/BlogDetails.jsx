import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../Data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2 style={{ textAlign: "center" }}>Blog not found!</h2>;

  return (
    <div style={styles.container}>
      <h1>{blog.title}</h1>
      <p style={styles.date}><strong>Date:</strong> {blog.date}</p>
      <p>{blog.content}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  },
  date: {
    color: "#555",
    fontStyle: "italic"
  }
};

export default BlogDetails;
