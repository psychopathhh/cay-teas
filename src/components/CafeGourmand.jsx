import React from 'react'
import i_1 from '../assets/gourmand_1.png'
import i_2 from '../assets/gourmand_2.png'
import i_3 from '../assets/gourmand_3.png'
import i_4 from '../assets/gourmand_4.png'
import i_5 from '../assets/gourmand_5.png'
import i_6 from '../assets/gourmand_6.png'

const images = [
  i_1, i_2, i_3, i_4, i_5, i_6
]
const effects = [
  'fade-down', 
  'fade-up-right',
  'fade-down-right',
  'fade-up-left',
  'fade-down-left',
  'fade-up'
]

const CafeGourmand = () => {
    return (
    <section className='gourmand'>

      <div>
        {
            images.map((image, i) => 
              <img key={i} data-aos={effects[i]} className='gourmand__image' src={image} alt={image}/>
            )
          }
      </div>
      <div className='gourmand__headings'>
        <h2 data-aos="fade-up" className='heading-slogan gourmand__heading-secondary'>Try our fabulous new food trend</h2>
        <h2 data-aos='zoom-out' className='heading-slogan gourmand__heading-primary'>Cafe gourmand</h2>
      </div>
      
    </section>
  )
}

export default CafeGourmand
