
import './Section1.css'
import { ThemeContext } from '../../../App'
import { useContext } from 'react'
import book from './../../../image/book.png'

const Section1 = () => {
  const {val}= useContext(ThemeContext)
 
  return (
    <div className={(val)?"light-mode section1" :"dark-mode section1" } >
        <div className='left-div'>
            <button className={(val)?"light-mode author" :"dark-mode author" } >Author of august</button>
            <h1 >Eric-Emanuel Schmitt </h1>
            <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 
                he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
                <button className='view'>View his books</button>
        </div>
        <div className='right-div'>
            <img src={book} alt="" />
        </div>
    </div>
  )
}

export default Section1