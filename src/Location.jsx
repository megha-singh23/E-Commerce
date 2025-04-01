import React, { useContext } from 'react'
import Banner from './Components/Banner'
import Product from './Components/Product'
import Footer from './Components/footer'
import {Theme} from './Components/ThemeContext'

const Location = () => {

  const con=useContext(Theme);
  return (
    <>

    <Banner/>
    <Product/>
    <Footer/>
    {console.log(con)}
    <h1 className={`bg-[${con.bgColor}]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt iste expedita laboriosam,
       fuga exercitationem sed, ipsa aut, maxime quaerat at deleniti molestiae accusamus porro! Tempora sed
       eius vel ad.</h1>
    </>
  )
}

export default Location