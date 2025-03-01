import React from 'react'

const Skills = () => {
  return (
    <>
      <div className="fakeHadding"></div>
      <div className='skill'>

        <div className="TechnicalSkills skills">
          <h1 className='h1'>Tech Skills</h1>
          <div className="tech">

            <ul className='ul'>
              <li className='li'>
                <strong>Programming Languages:</strong>
                <div class="logo-container">
                  <i class="devicon-cplusplus-plain colored"></i>
                  <span className='techSk'>C++</span>
                </div>
                <div className="logo-container">
                  <i class="devicon-javascript-plain colored"></i>
                  <span className='techSk'>JavaScript</span>
                </div>

              </li>
              <li className='li'>
                <strong>Web Development:</strong>
                <div class="logo-container">
                  <i class="devicon-html5-plain colored"></i>
                  <span className='techSk'>HTML</span>
                </div>
                <div class="logo-container">
                  <i class="devicon-css3-plain colored"></i>
                  <span className='techSk'>CSS</span>
                </div>

                <div class="logo-container">
                  <i class="devicon-react-original colored"></i>
                  <span className='techSk'>React.js</span>
                </div>
                <div class="logo-container">
                  <i class="devicon-bootstrap-plain colored"></i>
                  <span className='techSk'>Bootstrap</span>
                </div>

              </li>

              <li className='li'>
                <strong>Version Control:</strong>
                <div class="logo-container">
                  <i class="devicon-git-plain colored"></i>
                  <span className='techSk'>Git</span>
                </div>
                <div class="logo-container">
                  <i class="devicon-github-original"></i>
                  <span className='techSk'>GitHub</span>
                </div>

              </li>
            </ul>
          </div>
        </div>
        <div className="SoftSkills skills">
  <h1 className='h1'>Soft Skills</h1>
  <div className="soft">
    <ul className='ul'>
      <li className='li'>
        <strong>Communication:</strong>
        <div class="logo-container">
          <i class="devicon-communication-plain colored"></i>
          <span className='softSK'>Fluent in English, I can communicate my ideas effectively, ensuring clarity in both professional and personal conversations.</span>
        </div>
      </li>
      <li className='li'>
        <strong>Teamwork:</strong>
        <div class="logo-container">
          <i class="devicon-communication-plain colored"></i>
          <span className='softSK'>Enjoy working with teams, building strong relationships, and collaborating to achieve common goals, whether individually or as part of a group.</span>
        </div>
      </li>

     
      <li className='li'>
        <strong>Leadership:</strong>
        <div class="logo-container">
          <i class="devicon-leadership-plain colored"></i>
          <span className='softSK'>With leadership experience from my childhood, including being a team captain, I guide others, helping them grow and succeed as part of a team.</span>
        </div>
      </li>
      <li className='li'>
        <strong>Problem Solving:</strong>
        <div class="logo-container">
          <i class="devicon-problem-solving-plain colored"></i>
          <span className='softSK'>Excellent at critical thinking, I can break down complex problems and find effective solutions, both in tech and real-world situations.</span>
        </div>
      </li>
    </ul>
  </div>
</div>



      </div>
    </>
  )
}

export default Skills
