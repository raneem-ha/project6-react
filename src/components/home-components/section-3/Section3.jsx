import React from 'react'
import './Section3.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../App'

const section3 = () => {
  const {val}= useContext(ThemeContext)
  return (
    <div className='section3'>
        <div className="left">

            <h1>Did you know us? </h1>
            <p>We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one.
                 BWorld works with the must popular publishs just for your delight. <br></br>
If you are about books, you must to subscribe to our newsletter. </p>
<form action="" >
    <input type="text" placeholder='Your name 'className={(val)? 'light-mode':'dark-mode'} />
    <input type="text" name="" id="" placeholder='Your e-mail' className={(val)? 'light-mode':'dark-mode'}/>
    <button className={(val)? 'dark-color':'light-color'}>Subscribe</button>
</form>
        </div>
        <div className="right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463879.63814617327!2d46.49287046226946!3d24.72483154557882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh!5e0!3m2!1sen!2ssa!4v1704916817588!5m2!1sen!2ssa" ></iframe>
        
    </div>
    </div>
  
  )}

export default section3