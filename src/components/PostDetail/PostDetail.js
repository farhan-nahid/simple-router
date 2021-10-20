import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import "./PostDetail.css";

const PostDetail = () => {
  const [selectedPost, setSelectedPost] = useState({});
  const { title, body } = selectedPost;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setSelectedPost(res.data))
      .catch((err) => toast.error(err.massage));
  }, [id]);

  return (
    <div className="container post">
      <h1>This is Post Detail of : {id} </h1>
      <h3>Title: {title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostDetail;
