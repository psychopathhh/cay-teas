import React from 'react'
import cake from '../assets/about-cake.png'
import ContactButton from '../useful-elements/ContactButton'

const About = () => {
  return (
    <section className='about'>
        <h2 className='heading'>About us</h2>
        <article className='about__container'>
            <img className='about__image' src={cake} alt="desserts" />
            <div className="about__content">
                <span className='about__content-heading'>Enjoy our unique food</span>
                <p className='about__content-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi corrupti aspernatur quisquam molestiae sint illo voluptatum fugiat labore perspiciatis illum ab dolorem dicta nisi excepturi, est dolor sed exercitationem autem.</p>
                <ContactButton/>
            </div>
        </article>
    </section>
  )
}

export default About