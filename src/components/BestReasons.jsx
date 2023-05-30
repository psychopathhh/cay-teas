import React from 'react'
import food from '../assets/food-reason.jpg'
import coffee from '../assets/coffee-reason.jpg'
import atmosphere from '../assets/atmosphere-reason.jpg'

const reasons = [
  {
    title: 'Homemade food',
    photo: food
  },
  {
    title: 'Natural coffee & tea',
    photo: coffee
  },
  {
    title: 'Special atmosphere',
    photo: atmosphere
  },
]

const BestReasons = () => {
  return (
    <section className='reasons'>
      <h2 className='heading'>Why Cay-Tea's is the best place for you</h2>
      <ul className='reasons__container'>
        {reasons.map(reason =>
          <li key={reason.title} className='reasons__item'>
            <img src={reason.photo} alt="photo" className="reasons__item-image" />
            <span className='reasons__item-heading'>{reason.title}</span>
          </li>
        )}
      </ul>
    </section>
  )
}

export default BestReasons