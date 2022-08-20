import { useState } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import StudentInfo from "./StudentInfo";


const Home = () => {

 
   
    return (
      <div className="container">
        <Card className='my-2 text-center'>
          <CardHeader tag='h1'>
          Teacher Comment Generator
          </CardHeader>
          <CardBody>
            <StudentInfo  />
           
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
        comments. The hardest part is starting the commmnets and this tool is
        meant to help you with your report card comments. It is reccomended to
        flesh these out and add specific detail about sudents. Get started now!
      </p>
    </div>
  );
}

export default Home;
