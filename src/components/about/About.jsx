import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'

const About = () => {
  return (
    <section id='about'>
      <h2>About</h2>
      <div className="header-separator"></div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">

          <h4>Hi there!</h4>

          <p>
            My name is Mitja, I'm a Multimedia Developer currently employed at Upknowledge.
          </p>
          <p>
            I have 3 years of recent Unity Development experience. Before that I studied and worked with all things media, such as animations, video production and graphic design.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact me</a>

        </div>
      </div>

    </section>

  )
}

export default About