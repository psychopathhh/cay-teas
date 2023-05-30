import React, { useEffect, useRef } from 'react'
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

const images = [
    i_1,i_2,i_3,i_4,i_5,i_6,i_7,i_8,i_9,i_10,i_11,i_12,i_13    
]

const Galery = () => {
    const ref = useRef(null)
    let track
    useEffect(() => {
        track = ref.current
    }, [ref])
  const mouseDown = e => {
    track.dataset.mouseDownAt = e.clientX
  }
  const mouseMove = e => {
    if(track.dataset.mouseDownAt === '0') return
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = track.offsetWidth / 2
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentage = parseFloat(track.dataset.prevPercentage)+percentage

    track.dataset.percentage = nextPercentage
    track.style.transform = `translate(${nextPercentage}%, -50%)`
  }
  const mouseUp = () => {
    track.dataset.mouseDownAt = '0'
    track.dataset.prevPercentage = track.dataset.percentage
  }
  return (
    <section onMouseMove={mouseMove} onMouseDown={mouseDown} onMouseUp={mouseUp} className='galery'>
        <div ref={ref} className="galery__track" data-mouse-down-at='0' data-prev-percentage='0'>
            {
                images.map(image => 
                    <img key={image} src={image} alt="image" draggable='false'/>
                    )
            }
        </div>
    </section>
  )
}

export default Galery