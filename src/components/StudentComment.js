import { COMMENTS } from "../comments";




const StudentComment = ({ studentName, gender,level }) => {

  const studentComment = (
    COMMENTS.filter((comment) => comment.gender === gender)).filter((comment) => comment.level === level)
    console.log(studentComment)
   
 
  return(
  
    studentComment.map((comment) => 
    <p key={comment.id}>
   {studentName} {comment.text}
    </p>
   ) 
    
    
  )
 
};

export default StudentComment;
