import { COMMENTS } from "../comments";




const StudentComment = ({ studentName, gender,type }) => {

  const studentComment = (
    COMMENTS.filter((comment) => comment.gender === gender)).filter((comment) => comment.type === type)
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
