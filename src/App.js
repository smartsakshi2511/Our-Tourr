 import React from 'react'
import { Routes, Route,  } from 'react-router-dom'
import Home from './Pages/HomePage/Home.jsx'
import Holidays from "./Pages/HolidaysPage/Holidays.jsx"
import Destination from "./Pages/DestinationPage/Destination.jsx";
import NavBar from './Component/NavigationBar/NavBar.jsx';
import "./App.css"

 function App() {
   return (
     <div className='App'>
    <NavBar  fixed="top" />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/holidays' element={<Holidays/>}/>
      <Route path='/destination' element={<Destination/>}/>
     </Routes>
     
     </div>
   )
 }
 
 export default App