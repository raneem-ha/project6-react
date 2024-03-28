import { createContext,  useState} from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/pages/Home'

import DetailsPage from './components/pages/DetailsPage'

import './App.css'

 export const ThemeContext = createContext(null)
function App() {
  const [val,setval]=useState(()=>{
    const initval=localStorage.getItem("value");
    return initval?initval:"true";
  })
  
     

   
  

 
  return (
    <ThemeContext.Provider value={{ val, setval }}>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App
