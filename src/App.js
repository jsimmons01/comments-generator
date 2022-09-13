import Home from "./components/Home";
import Builder from "./components/Builder";
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
          <Route exact path='/builder' element={<Builder />}></Route>
          <Route exact path='/resources' element={<Resources />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
