import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='header'>
        <a href="http://www.cay-teas.com/" target='_blank'>
            <img className='logo' src={logo} alt="cay teas" />
        </a>
    </header>
  )
}

export default Header