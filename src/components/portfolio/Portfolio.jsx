import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/space.jpg'
import IMG2 from '../../assets/slash.jpg'
import IMG3 from '../../assets/splash.png'
import IMG4 from '../../assets/cow.jpg'
import IMG5 from '../../assets/abra.jpg'
import IMG6 from '../../assets/space.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Game Jam Project',
    github: 'https://github.com',
    demo: 'https://itch.io'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Game Jam Project',
    github: 'https://github.com',
    demo: 'https://itch.io'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Game Jam Project',
    github: 'https://github.com',
    demo: 'https://itch.io'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Game Jam Project',
    github: 'https://github.com',
    demo: 'https://itch.io'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Game Jam Project',
    github: 'https://github.com',
    demo: 'https://itch.io'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Game Jam Project',
    github: 'https://github.com',
    demo: 'https://itch.io'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} rel="noreferrer" className='btn' target='_blank'>GitHub</a>
                  <a href={demo} rel="noreferrer" className='btn' target='_blank'>Itch</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio