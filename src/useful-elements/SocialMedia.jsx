import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const socials = [
    {
        id: 'instagram',
        icon: AiOutlineInstagram,
        source: 'https://www.instagram.com/cayteas/?hl=en'
    },
    {
        id: 'facebook',
        icon: FaFacebookF,
        source: 'https://www.facebook.com/cayteasboutique/'
    },
    {
        id: 'whatsup',
        icon: BsWhatsapp,
        source: 'https://wa.me/905432334464'
    }
]

const SocialMedia = () => {
  return (
    <div className='socials'>
            {
                socials.map(item =>
                    <a key={item.id} target='_blank' className='socials__item' href={item.source}>
                        <div>
                            <item.icon id={item.id} className='socials__item-icon'/>
                        </div>
                    </a>
                )
            }
    </div>
  )
}

export default SocialMedia