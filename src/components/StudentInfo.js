import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { COMMENTS } from "../comments";
import StudentComment from "./StudentComment";



/*************************************************** TO DO**************************************************************************
  
    * style page (  large screen inpu length)
    * add helpful links, maybe an about page
    * add a read me file
    * add a build your comment component
    * will need an array of comments based on behavior, personality, etc.        
************************************Aspirations*********************************

 * add comments to a document that teacher can send to themselves
 *update project with hooks
 *random comment generate


 

 
 *********************************************************************************************************************************/
class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: " ",
      lastName: " ",
      gender: " ",
      type: "Average Performer",  
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
      firstName: " ",
      lastName: " ",
      gender: " ",
      type: "Average Performer",
      showComment: false

    })
  }


  render() {
    return (
      <div className="row row-content">
        <div className="col-md">
          <Form onSubmit={this.toggleComment} >
            <FormGroup row>
              <Label htmlFor="firstName" md={4}>
                Student's first name:
              </Label>
              <Col>
                <Input
                  
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  placeholder="Timothy"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastName" md={4}>
                Student's last name:
              </Label>
              <Col>
                <Input
                  type='text'
                  id="lastName"
                  name="lastName"
                  placeholder="Anderson"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  required
                />
              </Col>                
            </FormGroup>
            
            <FormGroup row>
              <Label htmlFor="gender" md={4}>Gender:</Label>
            <Col>
            <Input
                  className='mx-2'
                  type="radio"
                  name="gender"
                  value="boy"
                  checked={this.state.gender === "boy"}
                  onChange={this.handleInputChange}
                  required
                />
                <Label check>Boy</Label>
            </Col>
               
              <Col>
              <Input

                  className='mx-2'
                  type="radio"
                  name="gender"
                  value="girl"
                  checked={this.state.gender === "girl"}
                  onChange={this.handleInputChange}
                  required
                />
              <Label check>Girl</Label>
              </Col>       
              </FormGroup>
              <FormGroup row>
              <Label htmlFor="type" md={4}>
                Comment Type:
              </Label>
              <Col>
                <Input
                  type="select"
                  id="type"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleInputChange}
                >
                  <option>High Performer</option>
                  <option>Average Performer</option>
                  <option>Below Average Performer</option>
                  <option>Behavior Problems</option>

                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button type="submit"  color={this.state.showComment ? 'outline info' : 'success'} size="lg" block>
                 {this.state.showComment ? 'New Student' : 'Generate Comments'} 
                </Button>
              </Col>
            </FormGroup>
           
          </Form>
         
        </div>
        {this.state.showComment && <StudentComment firstName={this.state.firstName} lastName={this.state.lastName} gender={this.state.gender} type={this.state.type}  /> 
        } 
      </div>
    );
  }
}



export default StudentInfo;
