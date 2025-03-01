import React from "react";

const Contact = () => {
  return (
    <> 
       <div className="fakeHadding"></div>
    <div className="contact"> 
      <h2>Contact Me</h2>
      <div className="contact-container ul">
        <div id="p1" className="contact-item li">
          <i className="devicon-google-plain colored"></i>
          <p>Email</p>
          <h6> <a href="raazanpandey@gmail.com">raazanpandey@gmail.com</a></h6>
        </div>
        <div id="p5" className="contact-item li">
          <i className="devicon-android-plain colored"></i>
          <p>Phone</p>
          <h4><a href="tel:7693994978">7693994978</a></h4>
        </div>
        <div id="p2" className="contact-item li">
        <i class="devicon-google-plain colored"></i>
         <p>Location</p>
        <h5>Bhopal, Madhya Pradesh, India</h5>
        </div>
        <div id="p4" className="contact-item li">
          <a href="https://www.linkedin.com/in/raazan-pandey-a450b8317/" target="_blank" rel="noopener noreferrer">
            <i className="devicon-linkedin-plain colored"></i>
          </a>
          <p>LinkedIn</p>
          <h5><strong>Raazan Pandey</strong></h5>
        </div>
        <div id="p3" className="contact-item li">
          <a href="https://github.com/RaaZanPandey/" target="_blank" rel="noopener noreferrer">
            <i className="devicon-github-original colored"></i>
          </a>
          <p>GitHub</p>
          <h5><strong>RaaZanPandey</strong></h5>
        </div>
      </div>
    </div>

    </>
  );
};

export default Contact;
