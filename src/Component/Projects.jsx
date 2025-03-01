import React from 'react'
import project1 from '../Images/project1.png';
import project2 from '../Images/project2.png';
import project3 from '../Images/project3.png';
import project4 from '../Images/project4.png';
const Projects = () => {
  return (
    <>
     <div className='projects'>
  <div className="Project ul">

    <div id='p1'  className="project li">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-font">
            <img src={project1} alt="Project 1" />
          </div>
          <div className="flip-box-back">
            <h3>Personal Portfolio 💼</h3>
            <p>A sleek and responsive portfolio showcasing my projects, skills, and experience. Designed with a modern UI to highlight my journey in web development and programming. </p>
            
          </div>
        </div>
      </div>
    </div>

    <div id='p2'  className="project li">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-font">
            <img src={project2} alt="Project 2" />
          </div>
          <div className="flip-box-back">
            <h3>Music Player Website 🎵</h3>
            <p>A sleek and responsive music player with intuitive controls, playlist management, and a smooth listening experience. Play, pause, and enjoy your favorite tracks effortlessly!</p>
          </div>
        </div>
      </div>
    </div>

    <div id='p3'  className="project li">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-font">
            <img src={project3} alt="Project 3" />
          </div>
          <div className="flip-box-back">
            <h3>Recipe Search App 🍽️</h3>
            <p>A dynamic recipe search app that helps you find delicious recipes based on ingredients. Powered by an API for quick and easy meal inspiration!</p>
          </div>
        </div>
      </div>
    </div>

    <div id='p4' className="project li">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-font">
            <img src={project4} alt="Project 4" />
          </div>
          <div className="flip-box-back">
            <h3>Weather App ⛅</h3>
            <p>A real-time weather app using RapidAPI to fetch accurate forecasts. Get temperature, humidity, and weather conditions for any location instantly.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


    </>
  )
}

export default Projects
