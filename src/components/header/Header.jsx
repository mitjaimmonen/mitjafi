import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__container-top">
          <h1>Mitja Immonen</h1>
          <h4 className="text-light">Multimedia Developer</h4>
          <CTA />
          <HeaderSocials />
        </div>
        <div className="header__container-bottom">
          <div className='me'>
            <img src={ME} alt="me" />
          </div>
        </div>


        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}

      </div>
    </header>
  )
}

export default Header