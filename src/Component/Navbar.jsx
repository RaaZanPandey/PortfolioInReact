import React from 'react';
import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const ref = useRef();
 const Btn = useRef();
  function HandleClick() {
    setOpen(prev => !prev);
    if(!open)
    {
      ref.current.style.left = '0%';
      Btn.current.classList.replace('ri-align-justify', 'ri-close-line');
      ref.current.style.left = '3%';
      Btn.current.style.color = 'red';
    }
    else{
      ref.current.style.left = '-100%';
      Btn.current.classList.replace('ri-close-line', 'ri-align-justify')
      Btn.current.style.color = 'aqua';
    }
 
  }
  return (
    <>
      <div className="mainNav">
        <div onClick={HandleClick} className="hamBarger btnn">
          <i ref={Btn} className="ri-align-justify"></i>
        </div>
        <nav ref={ref}  className="navbar navbar-expand-lg">

            <ul className="navbar-nav">
              <li>
                <Link to="/" smooth={true} duration={500} className={location.pathname === "/" ? "active" : ""}>Home</Link>
              </li>
              <li>
                <Link to="/about" smooth={true} duration={500} className={location.pathname === "/about" ? "active" : ""}>About</Link>
              </li>
              <li>
                <Link to="/education" smooth={true} duration={500} className={location.pathname === "/education" ? "active" : ""}>Education</Link>
              </li>
              <li>
                <Link to="/skills" smooth={true} duration={500} className={location.pathname === "/skills" ? "active" : ""}>Skills</Link>
              </li>
              <li>
                <Link to="/project" smooth={true} duration={500} className={location.pathname === "/project" ? "active" : ""}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" smooth={true} duration={500} className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
              </li>
            </ul>
  
        </nav>
      </div>
    </>
  );
};

export default Navbar; 