import React from 'react'
import "./intro.css"
import Me from "../../img/alex.png"

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, My Name Is</h2>
          <h1 className='i-name'> Alex Khazhakyan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Music Enthusiast</div>
              <div className="i-title-item">Avid Swimmer</div>
            </div>
          </div>
          <p className="i-desc">
              I am a recent graduate from California Polytechnic State University, Pomona 
              with a B.S. in Computer Science. I specialize mainly in web development, but
              I am also open to other roles involving software development.
          </p>
        </div>
        <svg className='arrows'>
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
				</svg>
      </div>
      <div className='i-right'>
        <div className="i-shape"></div>
        <img src={Me} alt="This is Me" className='i-img' />     
      </div>
    </div>
  )
}

export default Intro