
import NavBar from '../NavBar/NavBar'
import Footer from '../footer/Footer'
import { ThemeContext } from '../../App'
import { useContext, useEffect, useState } from 'react'
import img1 from "./../../image/Logo.png"
import img2 from './../../image/Logo-Light.svg'
import sun from './../../image/sun.svg'
import moon from './../../image/moon-01.svg'


import BookDetails from '../details-components/book-details/BookDetails'
import { useParams } from 'react-router-dom'


const DetailsPage = () => {
    const {val}= useContext(ThemeContext)
    let { id } = useParams();
   
 
   
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`https://example-data.draftbit.com/books/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);

          console.log(res);
        });
    }, []); 
  return (
    <div className={(val)?"light-mode " :"dark-mode" }>
    <NavBar  menu ={[{title :"Home" , path :"/"} ,{title :"News"} , {title :"Promotion of the mount "} ,
    {title :"Plublishs"},{title :"Subscribe to the newsletter"} ]} logo = {img2} darklogo = {img1} sun={sun} moon={moon} /> 
    
    
    
    
    
    
    <BookDetails data={data} />
     
    
    
    <Footer copy="© All copyrights are reserved. B-World 2022. "></Footer> 
    
   




    </div>


   



  )
}

export default DetailsPage