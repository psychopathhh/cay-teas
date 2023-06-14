import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import tea from '../assets/tea.png'

const menu = [
  {
    heading: 'Tea',
    mainImage: tea,
    list: [
      {
        imageOfItem: tea,
        headingOfItem: 'Fresh Ginger Tea'
      },
      {
        imageOfItem: tea,
        headingOfItem: 'Butterfly Pea Flower tea'
      },
      {
        imageOfItem: tea,
        headingOfItem: 'Rose Garden'
      },
    ]
  },
  {
    heading: 'Coffee',
    mainImage: tea,
    list: [
      {
        imageOfItem: tea,
        headingOfItem: 'Latte'
      },
      {
        imageOfItem: tea,
        headingOfItem: 'Cay-Tea\'s Mocha'
      },
      {
        imageOfItem: tea,
        headingOfItem: 'Capuccino de luxe'
      },
    ]
  },
  {
    heading: 'Desserts',
    mainImage: tea,
    list: [
      {
        imageOfItem: tea,
        headingOfItem: 'Fresh Ginger Tea'
      },
      {
        imageOfItem: tea,
        headingOfItem: 'Butterfly Pea Flower tea'
      },
      {
        imageOfItem: tea,
        headingOfItem: 'Rose Garden'
      },
    ]
  },
]

const Menu = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='menu'>
        <h2 data-aos='fade-down' className="heading menu__heading">Menu</h2>
        <div>
          {
            menu.map((section, i) => 
              <article key={section.heading} className={i%2 ? 'menu__container background' : 'menu__container background-yellow'}>
                <ul className={i%2 ? 'menu-reverse-0' : ''} data-aos={i%2 ? 'fade-left' : 'fade-right'}>
                  <span className="heading-menu">{section.heading}</span>
                  {
                    section.list.map(item => 
                      <li key={item.headingOfItem} className='menu__item'>
                        <img className='menu__item-image' src={item.imageOfItem} alt={item.imageOfItem} />
                        <span className='menu__item-heading'>{item.headingOfItem}</span>
                      </li>
                      )
                  }
                </ul>
                <img className={i%2 ? 'menu-reverse-1 menu__image' : 'menu__image'} src={section.mainImage} alt={section.mainImage} />
              </article>
            )
          }
        </div>
    </section>
  )
}

export default Menu