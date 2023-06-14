import React from 'react'

import breakfast_img from '../assets/breakfast.png'
import birthdays_img from '../assets/birthdays.png'
import anniversary_img from '../assets/anniversary.jpg'
import proposal_img from '../assets/proposal.jpg'
import ReadMore from '../useful-elements/ReadMore'

const services = [
    {
        title: 'breakfast',
        image: breakfast_img
    },
    {
        title: 'anniversary',
        image: anniversary_img
    },
    {
        title: 'birthdays',
        image: birthdays_img
    },
    {
        title: 'proposal',
        image: proposal_img
    },
]

const Services = () => {
  return (
    <section className='services'>
        <h2 data-aos='fade-up' className='heading'>Our services</h2>
        <ul className='services__container'>
            {
            services.map(service => 
                <li key={service.title} data-aos="zoom-in-down" className="services__card">
                    <img src={service.image} alt={`${service.image}`} className="services__card-image" />
                    <span className="heading-mini">{service.title}</span>
                </li>
            )
            }
        </ul>
        <ReadMore/>
    </section>
  )
}

export default Services