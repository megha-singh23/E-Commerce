import React from 'react'
import Navbar from './Components/navbar'
import Location from './Location'
import { Outlet, useLocation } from 'react-router-dom'

const App = () => {
  const location=useLocation();
  return (
    <>
    <Navbar/>  
    {location.pathname==='/'? <Location/>: <Outlet/>}
</>
  )
}

export default App