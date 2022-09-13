import { Card, CardHeader, CardBody, Form, FormGroup, Label, Row, Col, Input, Button  } from 'reactstrap'
import { useState } from 'react';
import { BUILDERCOMMENTS } from '../builderComments';


const Builder = () => {
  /**************************
   * complete comments array
   * think about if I really need a toggler
   * add gender to the comment
   * add directions
   */

  const comments = BUILDERCOMMENTS;
  const [firstName, setFirstName] =  useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('Boy');
  const [intro, setIntro ] = useState('');
  const [character, setCharacter ] = useState('');
  const [time, setTime ] = useState('');
  const [work, setWork ] = useState('');
  const [lang, setLang ] = useState('');
  const [math, setMath ] = useState('');
  const [writing, setWriting ] = useState('');
  const [conclusion, setConclusion ] = useState('');


  
  const toggleComment = (e) => {

    e.preventDefault();
    

  }

  function Comment ( {firstName, lastName, gender, intro, character, time, work, lang, math, writing, conclusion} )  {
     
    const studentComment = firstName + ' ' + lastName + ' ' + intro + ' ' + character + ' ' +  time + ' ' + 
     work + ' ' + lang + ' ' +  math + ' ' +  writing + ' ' +  conclusion
    
    return (
      gender === 'girl' ? studentComment.replace(/Student/g, 'She').replace(/student/g, 'her') : studentComment.replace(/Student/g, 'He').replace(/student/g, 'his')
     
    )

  }




  return (
     <div className="container">
      <Card className='m-2'>
        <CardHeader className='text-center card-body' tag='h1'>
          Comment Builder
        </CardHeader>
        <CardBody>
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
                          value="boy"
                          
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
                        value="girl"
                       
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
                    <option>High Performer</option>
                    <option>Average Performer</option>
                    <option>Below Average Performer</option>
                    <option>Behavior Problems</option>

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
                    <option>High Performer</option>
                    <option>Average Performer</option>
                    <option>Below Average Performer</option>
                    <option>Behavior Problems</option>

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Language Arts
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                  >
                    <option>Select</option>
                    <option>High Performer</option>
                    <option>Average Performer</option>
                    <option>Below Average Performer</option>
                    <option>Behavior Problems</option>

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
                    <option>High Performer</option>
                    <option>Average Performer</option>
                    <option>Below Average Performer</option>
                    <option>Behavior Problems</option>

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
                    <option>High Performer</option>
                    <option>Average Performer</option>
                    <option>Below Average Performer</option>
                    <option>Behavior Problems</option>

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Conclusion
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                  >
                    <option>Select</option>
                    <option>High Performer</option>
                    <option>Average Performer</option>
                    <option>Below Average Performer</option>
                    <option>Behavior Problems</option>

                  </Input>
                </Col>
              </FormGroup>
            </Row>
            <Row className='m-2'>
              <Button onClick ={toggleComment} type='submit' size='lg' color="success" block>
                Build Comment
              </Button>  
            </Row>
            <Row>
              <Card>
                <CardBody>
                <Comment firstName={firstName} lastName={lastName} intro={intro} character={character} time={time} work={work} lang={lang} math={math} writing={writing}
                conclusion={conclusion}  />
                </CardBody>
              </Card>
            
             
            </Row>
          </Form> 

        </CardBody>
      </Card>    
      </div>
  )
  }

export default Builder