import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { COMMENTS } from "../comments";
import StudentComment from "./StudentComment";



/*************************************************** TO DO**************************************************************************
    *******************************Get the app working to dos******************
    *create a comment file with comments like intro and subject
    *chnage size of new student button
    *create validation for the form
    * style page 
    * add links
    * set up two ways to do comments, one to generate all for a section. The other to generate one comment.      
         
************************************Aspirations*********************************

 * add comments to a document that teacher can send to themselves
 *update project with hooks
 *random comment generate

 

 
 *********************************************************************************************************************************/
class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: " ",
      gender: " ",
      type: "Intro",  
      comments: COMMENTS,
      showComment: false
     
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleComment = this.toggleComment.bind(this);
    this.addNewStudent = this.addNewStudent.bind(this);
    //this.insertName = this.insertName.bind(this);
  }
   

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  toggleComment(e){
    e.preventDefault();
    
    //Set up validation for inputs 
    // if(this.state.studentName === ''){
    //   alert('Please enter a student name')
    //   return
    // }
  
    this.setState({
      showComment: !this.state.showComment,
      
    })
  
  }

  addNewStudent(){
    this.setState({
      studentName: " ",
      gender: " ",
      type: "Intro",
      showComment: false

    })
  }


  render() {
    return (
      <div className="row row-content">
        <div className="col-md">
          <Form onSubmit={this.toggleComment} >
            <FormGroup row>
              <Label htmlFor="studentName" md={4}>
                Student's Name:
              </Label>
              <Col md={4}>
                <Input
                  type="text"
                  id="studentName"
                  name="studentName"
                  placeholder="Student Name"
                  value={this.state.studentName}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col>
                <Input
                  type="radio"
                  name="gender"
                  value="boy"
                  checked={this.state.gender === "boy"}
                  onChange={this.handleInputChange}
                />
                <Label check>Boy</Label>
              </Col>

              <Col>
                <Input
                  type="radio"
                  name="gender"
                  value="girl"
                  checked={this.state.gender === "girl"}
                  onChange={this.handleInputChange}
                />
                <Label check>Girl</Label>
              </Col>
            </FormGroup>
            
            <FormGroup row>
              <Label htmlFor="type" md={4}>
                Type
              </Label>
              <Col md={4}>
                <Input
                  type="select"
                  id="type"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleInputChange}
                >
                  <option>Intro</option>
                  <option>Behavior (positive)</option>
                  <option>Behavior (needs improvement)</option>
                  <option>Closure</option>

                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button type="submit" color="success" size="lg" block>
                  Generate Comment
                </Button>
              </Col>
            </FormGroup>
            <FormGroup>
             <Label for="exampleText">
                 Comment
             </Label>
              
            </FormGroup>
           
          </Form>
          
          {/* When submit is pressed then comment is presented */}
          
            
          
         
        </div>
        {this.state.showComment && <StudentComment studentName={this.state.studentName} gender={this.state.gender} type={this.state.type}  /> 
        } 
        
        {this.state.showComment && <Button onClick={this.addNewStudent} className='newStudentBtn' outline color='primary' size='sm'>New Student</Button>}
      </div>
    );
  }
}

export default StudentInfo;
