import { COMMENTS } from "../comments";




const StudentComment = ({ studentName }) => {

  const findComment = (
    COMMENTS.find((comment) => comment.id > 3)
  )
   
 
  return(

   <p>
     
   {studentName} {findComment.text}
   
  </p>
  ) 

 
};

export default StudentComment;
