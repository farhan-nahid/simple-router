import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SinglePost from "../SinglePost/SinglePost";
import "./AllPost.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => toast.error(err.massage));
  }, []);

  return (
    <section className="container">
      <h1>Total post : {posts.length}</h1>
      {posts.length ? (
        <div className="post__container">
          {
            // map posts data
            posts.map((post) => (
              <SinglePost key={post.id} post={post} />
            ))
          }
        </div>
      ) : (
        <h1 className="spinner">Loading...</h1>
      )}
    </section>
  );
};

export default Home;
