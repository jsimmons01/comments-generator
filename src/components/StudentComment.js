import { COMMENTS } from "../comments";
import React from "react";
import StudentInfo from './StudentInfo'


const StudentComment = ({ studentName, gender, level }) => {

  const comments = COMMENTS;
  return (
    <div>
    
     {comments.filter((comment) => comment.gender === gender)}
      
    </div>
  )

 
};

export default StudentComment;
