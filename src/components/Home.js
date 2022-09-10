import { Card, CardHeader, CardBody } from "reactstrap";
import StudentInfo from "./StudentInfo"
import Adjectives from "./Adjectives";
import Footer from "./Footer"
import Header from "./Header"
import CommentBuilder from "./CommentBuilder";



const Home = () => {
   
    return (
      <div className="container">
        <Header />
        
        <Card className='my-5'>
          <CardHeader className='text-center' tag='h1'>
          Teacher Comment Generator
          </CardHeader>
          <Card>
          <CardBody className='card-body'>
            <Directions />
          </CardBody>
        </Card>
        
          <CardBody>
            <StudentInfo />
            
          </CardBody>
        </Card>
        <Card>
          <CardHeader className='text-center' tag='h2'>Adjectives</CardHeader>
          <CardBody className="card-body">
           <Adjectives />
          </CardBody>
        </Card>
        <Footer />
       
      </div>
    );
  }


function Directions() {
  return (
    <div>
      <p className='mx-3'>
      This app was created to give teachers a format to use for
       report card comments. The purpose of this app is to assist you in doing the hardest part of
       writing comments - starting! Multiple comments will be generated for each type of comment. Generate the type of comment and take out or switch sentences as needed. To generate comments for a new student just click on the "New Student" button. Check out the list of adjectives below for further assistance. Make sure to make the comments more specific for each student. Get started now!

      </p>
    </div>
  );
}

export default Home;
