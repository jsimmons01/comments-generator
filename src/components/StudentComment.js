import { COMMENTS } from "../comments";
import React from "react";

const StudentComment = () => {

  const comments = COMMENTS;
  return (
    <>
    {comments.map((comment)=> (
      <p key={comment.id}>{comment.text}</p>
    ))}
    </>
  )

 
};

export default StudentComment;
