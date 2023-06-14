import React from 'react'
import { AiFillPhone, AiFillClockCircle } from 'react-icons/ai';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const info = [
    {
        icon: AiFillPhone,
        heading: 'phone number',
        content: '+90 543 233 44 64'
    },
    {
        icon: AiFillClockCircle,
        heading: 'opening hours',
        content: 'everyday, 10:00 - 20:00'
    },
    {
        icon: MdEmail,
        heading: 'email',
        content: 'info@cay-teas.com'
    },
    {
        icon: MdLocationOn,
        heading: 'Address',
        content: 'Adalya Port Hotel - Kaleiçi - Antalya - Turkey'
    }
]

const Contact = () => {
  return (
    <section id='contact' className='contact'>
        <h2 className="heading">Contact us</h2>
        <section className='contact__info'>
            <ul className='contact__info-list'>
                {
                    info.map(item => 
                        <li key={item.heading} className='contact__info-item'>
                            <div>
                                <item.icon className='contact__info-icon'/>
                                <span className='contact__info-heading'>{item.heading}</span>
                            </div>
                            <p className='contact__info-text'>{item.content}</p>
                        </li>
                    )
                }
            </ul>
            <iframe className='contact__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.196241188733!2d30.699655676042017!3d36.885653372223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c390042cb71d53%3A0x863ea5cf04ab9f5b!2zw4dhWS1UZWHigJlz!5e0!3m2!1sen!2sru!4v1686750167354!5m2!1sen!2sru" width="450" height="450" style={{border: 0, borderRadius: '1rem'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </section>
  )
}

export default Contact