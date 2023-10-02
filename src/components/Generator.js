import { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col,Row } from "reactstrap";
import { COMMENTS } from "../comments";
import StudentComment from "./StudentComment";

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
    this.resetForm = this.resetForm.bind(this);
   
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

    
    this.setState({
      showComment: !this.state.showComment,
      
    })
  
  }

  resetForm(){
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
      <div className="container">
            <Form onSubmit={this.toggleComment} >
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="firstName">
                      Student's First Name:
                    </Label>
                  
                      <Input
                        
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        placeholder="Timothy"
                      />             
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="lastName">
                      Student's Last Name:
                    </Label>          
                      <Input
                        type='text'
                        id="lastName"
                        name="lastName"
                        placeholder="Anderson"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        required
                      />                            
                  </FormGroup>           
                </Col>
              </Row>
              <Row>
                <FormGroup>
                  <Label htmlFor="type">
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
              </Row>       
                <FormGroup>             
                  <legend className="col-form-label col-sm-2" htmlFor="gender" md={4}>Gender:</legend>
         
                    <FormGroup>
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
                    </FormGroup>
               
                    <FormGroup>
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
                    </FormGroup>                         
                </FormGroup>             
         
              <FormGroup>
                <Col>
                  <Button  style={{background:'#79B36D'}} type="submit" size="lg" block>
                  Generate Comments 
                  </Button>
                </Col>
              </FormGroup>         
            </Form>
           {this.state.showComment  &&
           <Row>
           <Col>
            <StudentComment firstName={this.state.firstName} lastName={this.state.lastName} gender={this.state.gender} type={this.state.type} /> 
           <Button size="lg" color="info" onClick={this.resetForm} outline block>New Student</Button>
        
           </Col>
         </Row>  
           
           } 
           
          
       
      </div>
    );
  }
}



export default StudentInfo;
