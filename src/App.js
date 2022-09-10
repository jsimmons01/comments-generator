import Home from "./components/Home";
import CommentBuilder from "./components/CommentBuilder";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Resources from "./components/Resources"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element= {<Home />}></Route>
          <Route exact path='/commentBuilder' element={<CommentBuilder />}></Route>
          <Route exact path='/resources' element={<Resources />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
