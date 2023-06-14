import React  from 'react'
import cake from '../assets/about-cake.png'
import ContactButton from '../useful-elements/ContactButton'

const About = () => {
  return (
    <section className='about'>
        <h2 data-aos='fade-up' className='heading'>About us</h2>
        <article data-aos='zoom-in' className='about__container'>
            <img className='about__image' src={cake} alt="desserts" />
            <div className="about__content">
                <span className='about__content-heading'>Enjoy our unique food</span>
                <p className='about__content-text'>Other than cakes, hot and cold drinks, we also offer pretty good lunch meals as well. Moreover, our waiting staff is very friendly and attentive. It is a great place to get in a hot afternoon in Antalya.</p> 
                <div className='about__button'><ContactButton/></div>
            </div>
        </article>
    </section>
  )
}

export default About