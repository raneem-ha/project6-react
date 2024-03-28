import React, { useState ,useContext } from 'react'
import './BookDetails.css'

import { ThemeContext } from '../../../App'

const BookDetails = ({data}) => {
  const {val}= useContext(ThemeContext)
  const[num,setNum]=useState(1)
  return (
    <div className="book-details">
      <div className='left_img'><img src={data.image_url} alt="" /></div>
      <div className="right-details">
        <h1>{data.title}</h1>
        <span>{data.authors}</span>
        <h3>About Book</h3>
        <p>{data.description}</p>
        <div className="count">
          <div className={(val)?"dark-color minus" :"light-color minus"}onClick={() => setNum((num) => num - 1)}>
            -
          </div>
          <div className='num'>{num}</div>
          <div className="plus" onClick={() => setNum((num) => num + 1)}>
            +
          </div>
        </div>
        <div className="buttons">
          <button  className={(val)?"light-mode add ":"dark-mode add"}>Add to cart</button>
          <button className={(val)?"light-mode favo" :"dark-mode favo"}>Favorite</button>
        </div>
<div className="data">
        <div>Pages Number :<span className={(val)? 'dark-color':'light-color'}>{data.num_pages}  pages</span></div>
        <div>Rating Count :<span className={(val)? 'dark-color':'light-color'}>{data.rating}</span></div>
        <div>Reviews:<span className={(val)? 'dark-color':'light-color'}>{data.review_count}</span></div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails