import React from "react";
import { useHistory } from "react-router";
import "./SinglePost.css";

const SinglePost = ({ post: { id, title, body } }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/post/${id}`);
  };

  return (
    <div className="single__post">
      <h3>This is a of userId : {id}</h3>
      <h4>Post Title: {title}</h4>
      <p>Description: {body}</p>
      <button onClick={handleClick}>Post Details</button>
    </div>
  );
};

export default SinglePost;
