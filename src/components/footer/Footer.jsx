import React from 'react'
import './Footer.css'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

const Footer = ({ copy }) => {
  const { val } = useContext(ThemeContext)
  return (
    <div className={(val) ? 'dark-color footer' : 'light-color footer'}>
      <div className='footer-copy'>{copy}
      </div>
    </div>
  )
}

export default Footer