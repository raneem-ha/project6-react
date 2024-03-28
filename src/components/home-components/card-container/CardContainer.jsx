import React from 'react'
import './CardContainer.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../App'

const CardContainer = ({title,children}) => {
  const {val}= useContext(ThemeContext)
  return (
    <div className='section-2'>
        <h1 className={(val)? 'dark-color':'light-color'}>{title}</h1>
    <div className="container">
        {children}
    </div>
    </div>
  )
}

export default CardContainer