import React from 'react'
import "./about.css"
import About1 from "../../img/alex_carousel/about1.JPG"
import About2 from "../../img/alex_carousel/about2.JPG"
import About3 from "../../img/alex_carousel/about3.JPG"
import About4 from "../../img/alex_carousel/about4.JPG"
import skills from "../../img/skills.png"

function about() {
  return (
    <div className='a'>
        <div className="a-left">
        <div class="container">
            
            <div class="card">
              <img src={About1} alt="Alex sitting on a tree." id='card-image' />
            </div>
            <div class="card">
              <img src={About2} alt="Alex coding a project in HTML." id='card-image' />
            </div>
            <div class="card">
              <img src={About3} alt="Alex relaxing on a tree." id='card-image' />
            </div>
            <div class="card">
              <img src={About4} alt="Alex sitting on a roof." id='card-image' />
            </div>
          </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        “Don’t settle for what life gives you; make life better and build something.” - Ashton Kutcher
        </p>
        <p className="a-desc">
          The quote above travels through my brain as repetitively as the marquee on the <a href='http://drneato.com/'>website</a> <br/>
          of my very first computer science teacher. How can I impact the world around me to make life better for not only myself,
          but those who share this planet with me? Ever since I took my first programming course 6+ years ago, this question has found
          its answer for me. I can help others achieve their vision for their company through clear communication, hard work ethic, and
          efficient/effective code.
        </p>
        <div className="a-skills">
          <img src={skills} alt="" className="a-skills-img" />
          <div className="a-skills-texts">
            <h4 className="a-skills-title">Web Development & Front-End Skills</h4>
            <p className="a-skills-desc">
              <ul className='list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Python</li>
                <li>Git</li>
                <li>Adobe CC</li>
                <li>Figma</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about