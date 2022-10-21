import React from 'react'
import './portfolio.css'
import ImgSplash from '../../assets/splash.png'
import ImgBlindSpot from '../../assets/blindspot.png'
import ImgMomSim from '../../assets/momsim.png'
import ImgStealthRaccoon from '../../assets/apple.jpg'
import ImgNutNibblers from '../../assets/nibbler.png'
import ImgHome from '../../assets/home.jpg'
import ImgSmallSteps from '../../assets/space.jpg'
import ImgAbraccoon from '../../assets/abra.jpg'

const data = [
  {
    id: 0,
    image: ImgSplash,
    title: 'Splash',
    github: 'https://github.com/mitjaimmonen/Splash',
    demo: 'https://jgranger.itch.io/splash'
  },
  {
    id: 1,
    image: ImgBlindSpot,
    title: 'Blind Spot VR Gallery',
    github: 'https://github.com/mitjaimmonen/VR-Gallery-TAMK'
  },
  {
    id: 2,
    image: ImgMomSim,
    title: 'Mom Simulator',
    github: 'https://github.com/mitjaimmonen/MomSimulator'
  },
  {
    id: 3,
    image: ImgStealthRaccoon,
    title: 'Apple Rascal',
    github: 'https://github.com/mitjaimmonen/StealthAppleThiefRascalWithGrandmasAndDogs',
    demo: 'https://rascalsgames.itch.io/apple-rascal'
  },
  {
    id: 4,
    image: ImgNutNibblers,
    title: 'Nut Nibblers',
    github: 'https://github.com/mitjaimmonen/LudumDare45',
    demo: 'https://rascalsgames.itch.io/nut-nibblers'
  },
  {
    id: 5,
    image: ImgHome,
    title: 'H O M E',
    github: 'https://github.com/mitjaimmonen/H-O-M-E',
    demo: 'https://itch.io'
  },
  {
    id: 6,
    image: ImgSmallSteps,
    title: 'Small Steps',
    github: 'https://github.com/mitjaimmonen/SmallSteps',
    demo: 'https://rascalsgames.itch.io/small-steps'
  },
  {
    id: 7,
    image: ImgAbraccoon,
    title: 'Ab-Raccoon-Dabra',
    github: 'https://github.com/mitjaimmonen/SomeRaccoonsCastSpells',
    demo: 'https://rascalsgames.itch.io/abraccoon-dabra'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github = '', demo = '' }) => {
            if (demo === '') {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} rel="noreferrer" className='btn' target='_blank'>GitHub</a>
                  </div>
                </article>
              )
            }
            else {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} rel="noreferrer" className='btn' target='_blank'>GitHub</a>
                    <a href={demo} rel="noreferrer" className='btn' target='_blank'>Itch.Io</a>
                  </div>
                </article>
              )

            }
          })
        }
      </div>
    </section>
  )
}

export default Portfolio