import { Card, CardHeader, CardBody } from "reactstrap";
import StudentInfo from "./StudentInfo"



const Home = () => {
   
    return (
      <div className="container">
        <Card className='my-2 text-center'>
          <CardHeader tag='h1'>
          Teacher Comment Generator
          </CardHeader>
          <CardBody>
            <StudentInfo />
            
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Directions />
          </CardBody>
        </Card>
      </div>
    );
  }


function Directions() {
  return (
    <div>
      <p>
        This app was created to give teachers a format to help them create
        report card comments. The purpose of this app is to assist you in doing the hardest part of 
        writing comments - starting! We recommend you use this to write specific parts of your comments and then add more details. Again these are not complete comments, but just a guide. For the intro, all the comments will generate so choose accordingly. Get started now!
      </p>
    </div>
  );
}

export default Home;
