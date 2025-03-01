import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Component/Navbar';
import About from "./Component/About";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route index element ={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;  