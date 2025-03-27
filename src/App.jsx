import React from 'react'
import Navbar from './Components/navbar'
import Location from './Location'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const location=useLocation();
  return (
    <>
    <ToastContainer/>
    <Navbar/>  
    {location.pathname==='/'? <Location/>: <Outlet/>}
</>
  )
}

export default App