import React from 'react'
import Typewriter from './Typewriter'

const Home = () => {
  return (
    <>
    
      <div className="fakeHadding"></div>
      <div className='home'>
        <div className="contain">
          <div className="hello">
            <p className='hlo'>HELLO I'M</p>
            <h1><Typewriter /></h1>
          </div>
          <div className="objective">
            <p >Passionate web developer, dedicated to creating user-friendly and responsive websites. I strive to blend creativity with functionality, ensuring seamless and engaging user experiences.
            </p>
          </div>
        </div>
        <div className="resume">
          <h3>Downlode Resume</h3>
        </div>
      </div>
    </>
  )
}

export default Home
