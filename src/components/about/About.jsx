import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 Years Working</small>

            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0</small>

            </article>
            <article className="about__card">
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>Many many</small>

            </article>
          </div>

          <p>
            Text here asdasd ads  asdas da dsadsadsads ads a dsasda das ad a d
            Text here asdasd ads  asdas da dsadsadsads ads a dsasda das ad a d
          </p>

          <a href="#contact" className='btn btn-primary'>Contact me</a>

        </div>
      </div>

    </section>

  )
}

export default About