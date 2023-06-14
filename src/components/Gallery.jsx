import React from 'react'

import i_1 from '../assets/1.png'
import i_2 from '../assets/2.jpg'
import i_3 from '../assets/3.png'
import i_4 from '../assets/4.jpg'
import i_5 from '../assets/5.jpg'
import i_6 from '../assets/6.png'
import i_7 from '../assets/7.jpg'
import i_8 from '../assets/8.jpg'
import i_9 from '../assets/9.jpg'
import i_10 from '../assets/10.jpg'
import i_11 from '../assets/11.png'
import i_12 from '../assets/12.png'
import i_13 from '../assets/13.png'

const imagesRendering = [
    i_1,i_2,i_3,i_4,i_5,i_6,i_7,i_8,i_9,i_10,i_11,i_12,i_13    
]

const Gallery = () => {
  return (
    <section className='gallery'>
        <h2 className="gallery__heading heading-slogan">Explore the best tastes!</h2>
        <div className="gallery__wheel">
            {
                imagesRendering.map((image, i) => 
                    <div style={{'--i':i+1}} key={i} className='gallery__wheel-card'>
                        <img src={image} alt="image"/>
                    </div>
                    )
            }
        </div>
    </section>
  )
}

export default Gallery