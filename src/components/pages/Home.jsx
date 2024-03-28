
import NavBar from '../NavBar/NavBar'
import Section1 from '../home-components/home-section1/Section1'

import { ThemeContext } from '../../App'
import React, { useContext, useEffect, useState } from 'react'
import Cards from '../home-components/cards/Cards'
import CardContainer from '../home-components/card-container/CardContainer'
import Section3 from '../home-components/section-3/section3'
import Footer from '../footer/Footer'
import img1 from "./../../image/Logo.png"
import img2 from './../../image/Logo-Light.svg'
import sun from './../../image/sun.svg'
import moon from './../../image/moon-01.svg'



const Home = () => {
  const {val}= useContext(ThemeContext)
  const [data,setData]=useState([]);
 
  
    useEffect(()=>{
     
 fetch("https://example-data.draftbit.com/books?_limit=8")
   .then((res) => res.json())
   .then((d) => setData(d));
      
    },[])

    const menu = [{title :"Home" , path :"/"} ,{title :"News"} , {title :"Promotion of the mount "} ,
    {title :"Plublishs"},{title :"Subscribe to the newsletter"} ]
  return (
    <div className={(val)?"light-mode " :"dark-mode" }>
        <NavBar  menu ={menu} logo = {img2} darklogo = {img1} sun={sun} moon={moon}/>
       
<Section1/>
 <CardContainer title="Selected for you"> 
{data?.map((element,index)=>{
   
       return (
         <div key={element.id}>
           <Cards
             id={element.id}
             image={element.image_url}
             author={element.authors}
             pagenum={element.num_pages}
             rate={element.rating}
           />
         </div>
       ); 
    })}  
    </CardContainer>  
     <Section3/>  
    <Footer copy="© All copyrights are reserved. B-World 2022. "></Footer>
    </div>
  )
}

export default Home