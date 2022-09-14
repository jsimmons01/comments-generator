import { COMMENTS } from "../comments";






const StudentComment = ({ firstName, lastName, gender,type }) => {

  

  const studentComment = (
   COMMENTS.filter((comment) => comment.gender === gender)).filter((comment) => comment.type === type);
    
   
    console.log(studentComment)
   
 
  return(
 
      studentComment.map((comment) => 
    <p className="mx-4 my-3" key={comment.id}>
    {comment.text.replace(/firstName/g, firstName).replace(/lastName/, lastName)}
    
    </p>
     
   )  
  
  )
 
};

export default StudentComment;
