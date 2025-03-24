import React from 'react'
import App from '../App'
import NotFound from './NotFound'
import { createBrowserRouter } from 'react-router-dom'
import Product from './Product'
import Calender from './Calender'
import About from './About'
import Contact from './Contact'


const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            
       {
        path:'/About',
        element:<About/>
       },
       {
        path:'/Contact',
        element:<Contact/>
       },
       {
        path:'/Calender',
        element:<Calender/>
       }
    ]
    },
    {
        path:'/Product',
        element:<Product/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])

export default router