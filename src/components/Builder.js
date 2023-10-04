import { Card, CardHeader, CardBody, Form, FormGroup, Label, Row, Col, Input, Button  } from 'reactstrap'
import { useState } from 'react';
import { BUILDERCOMMENTS } from '../builderComments';


const Builder = () => {
  /**************************
 
   * make the card smaller for both generator and builder
  
   */

  const comments = BUILDERCOMMENTS;
  const [firstName, setFirstName] =  useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(' ');
  const [intro, setIntro ] = useState('');
  const [character, setCharacter ] = useState('');
  const [time, setTime ] = useState('');
  const [work, setWork ] = useState('');
  const [reading, setReading ] = useState('');
  const [math, setMath ] = useState('');
  const [writing, setWriting ] = useState('');
  const [closure, setClosure ] = useState('');
  const [showComment, setShowComment] = useState(false);


  
  const toggleComment = (e) => {

    e.preventDefault();
    setShowComment(!showComment)
  }

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setIntro('');
    setCharacter('');
    setTime('');
    setWork('');
    setReading('');
    setMath('');
    setWriting('');
    setClosure('');
    setShowComment(false);
    
  }

  function Comment ( {firstName, lastName, gender, intro, character, time, work, reading, math, writing, closure} )  {
     
    const studentComment = firstName + ' ' + lastName + ' ' + intro + ' ' + character + ' ' +  time + ' ' + 
     work + ' ' + reading + ' ' +  math + ' ' +  writing + ' ' + firstName + ' ' + closure
    
    return (
      gender === 'girl' ? studentComment.replace(/Student/g, 'She').replace(/student/g, 'her') : studentComment.replace(/Student/g, 'He').replace(/student/g, 'his')
     
    )
  
  }

  return (
     <div className="container">
      <Card className='m-2'>
        <CardHeader className='text-center card-body' tag='h1' style={{background:'#79B36D'}}>
          Comment Builder
        </CardHeader>
        <CardBody style={{background:'#79B36D'}}>
        <Form>
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
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
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
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Anderson"
                      required
                    />                            
                </FormGroup>   
              </Col>
            </Row>
            <FormGroup>
              <legend className="col-form-label col-sm-2" htmlFor="gender" md={4}>Gender:</legend>
              
                  <Col>
                    <FormGroup check>
                      <Input
                          className='mx-2'
                          type="radio"
                          name="gender"
                          value={gender}
                          
                          onChange={(e) => setGender(e.target.value)}
                          required
                              />
                      <Label check>Boy</Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup check>
                      <Input

                        className='mx-2'
                        type="radio"
                        name="gender"
                        value={gender}
                       
                        onChange={(e) => setGender(e.target.value)}
                        required
                      />
                      <Label check>Girl</Label>
                    </FormGroup>                
                  </Col>
                               
            </FormGroup>             
            
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Intro
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                  >
                    <option>Select</option>

                   {comments.filter((comment) => comment.type === 'Intro').map((comment) => <option key={comment.id}>{comment.text}</option>)} 
                       

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Character
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                  >
                    <option>Select</option>
                    {comments.filter((comment) => comment.type === 'Character').map((comment) => <option key={comment.id}>{comment.text}</option>)} 

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Time Management
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option>Select</option>
                    {comments.filter((comment) => comment.type === 'Time').map((comment) => <option key={comment.id}>{comment.text}</option>)} 

                  </Input>
                </Col>
              </FormGroup>
            </Row>        
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                 Work Habits
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                  >
                    <option>Select</option>
                    {comments.filter((comment) => comment.type === 'Work').map((comment) => <option key={comment.id}>{comment.text}</option>)} 

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Reading
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={reading}
                    onChange={(e) => setReading(e.target.value)}
                  >
                    <option>Select</option>
                    {comments.filter((comment) => comment.type === 'Reading').map((comment) => <option key={comment.id}>{comment.text}</option>)} 

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                 Math
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={math}
                    onChange={(e) => setMath(e.target.value)}
                  >
                    <option>Select</option>
                    {comments.filter((comment) => comment.type === 'Math').map((comment) => <option key={comment.id}>{comment.text}</option>)} 

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Writing
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={writing}
                    onChange={(e) => setWriting(e.target.value)}
                  >
                    <option>Select</option>
                    {comments.filter((comment) => comment.type === 'Writing').map((comment) => <option key={comment.id}>{comment.text}</option>)} 

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Closure
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={closure}
                    onChange={(e) => setClosure(e.target.value)}
                  >
                    <option>Select</option>
                    {comments.filter((comment) => comment.type === 'Closure').map((comment) => <option key={comment.id}>{comment.text}</option>)} 

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row className='m-2'>
              <Button  color="success" onClick={toggleComment} type='submit' size='lg'  block>
                Build Comment
              </Button>  
            </Row>
            {showComment &&

              <Row>
                <Card>
                  <CardBody>
                    <Comment firstName={firstName} lastName={lastName} intro={intro} character={character} time={time} work={work} reading={reading} math={math} writing={writing}
                      closure={closure}  />
                    <Button color="info" onClick={resetForm}outline block>New Student</Button>
                  </CardBody>
                </Card>
              </Row>
}
          </Form> 

        </CardBody>
      </Card>    
      </div>
  )
  }

export default Builder
