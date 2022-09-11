import { Card, CardHeader, CardBody, Form, FormGroup, Label, Row, Col, Input  } from 'reactstrap'

const CommentBuilder = () => {
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
                      required
                    />                            
                </FormGroup>           
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="type">
                  Attitude
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                  >
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
                  Behavior
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                  >
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
                  Character
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                  >
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
                  Communication Skills
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                  >
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
                  Group Work
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                  >
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
                  Participation
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                  >
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
                  Social Skills
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                  >
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
                 Time Management
                </Label>
                <Col>
                  <Input
                    type="select"
                    id="type"
                    name="type"
                  >
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
                  >
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
                <legend className="col-form-label col-sm-2" htmlFor="gender" md={4}>Gender:</legend>
                <Col>
                  <FormGroup>
                    <Input
                        className='mx-2'
                        type="radio"
                        name="gender"
                        value="boy"
                        required
                            />
                    <Label check>Boy</Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Input

                      className='mx-2'
                      type="radio"
                      name="gender"
                      value="girl"
                      required
                    />
                    <Label check>Girl</Label>
                  </FormGroup>                
                </Col>
              </FormGroup>             
            </Row>
          </Form> 

        </CardBody>

      </Card>    
      </div>
  )
}

export default CommentBuilder