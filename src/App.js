import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./Component/Home";
import Student from "./Component/Student";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
// import Table from '@mui/material/Table';




function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
          
        </Router>    
     
    </div>
  );
}

export default App;
// https://www.geeksforgeeks.org/whats-the-difference-between-usecontext-and-redux/


// https://saksham09102015.herokuapp.com/
// npm i react-router-dom
// npm install @mui/material
// npm install @mui/material @emotion/react @emotion/styled
// npm install @material-ui/core
// npm install @mui/core
// npm install @mui/material @mui/styled-engine-sc styled-components