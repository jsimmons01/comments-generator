import { Card, CardBody, CardHeader } from "reactstrap";
import Generator from './Generator'
import Adjectives from './Adjectives'


const Home = () => {
   
    return (
      <div className="container"> 
     
      <Card>
      <CardHeader className='text-center' tag='h1'>
            Comment Generator
          </CardHeader>
         
          <CardBody>
            <Directions />
          <Generator /> 
          </CardBody>
     
      </Card>
      <Card className='my-5'>
        <CardHeader className='text-center' tag="h2">
          Adjectives
        </CardHeader>
        <CardBody>
        <Adjectives />
        </CardBody>
      </Card>

 
      <Card className='my-5'>
       
            
            <CardBody className='card-body'>
              <About />
             
            </CardBody>
          
       </Card>
      
      </div>
    );
  }


function About() {
  return (
    <div>
      <p className='mx-3'>
      This app was created to give teachers a format to use to write
       report card comments. The purpose of this app is to assist you in doing the hardest part of
       writing comments - starting! 
      </p>
    </div>
  );
}

function Directions() {
  return (
    <div>
      <p className='mx-3'>
       Multiple comments will be generated for each type of comment. Generate the type of comment and take out or switch sentences as needed. To generate comments for a new student just click on the "New Student" button. 
       To select specific comments click on "Builder" above. Be sure to personalize the comments for each student. This is only a tool to get you started. Check out the list of adjectives below to make your comments even more unique.
      </p>
    </div>
  );
}

export default Home;
