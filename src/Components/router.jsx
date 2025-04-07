import React from 'react'
import App from '../App'
import NotFound from './NotFound'
import { createBrowserRouter } from 'react-router-dom'
import Product from './Product'
import Calender from './Calender'
import About from './About'
import Contact from './Contact'
import Services, { AddUser, DeleteUser, SeeAllUser, UpdateUser } from './Services'
import Login from './login'
import Register from './register'
import Hook from './Hook'
import WrappingChild from './WrappingChild'
import LearnUseRef from './LearnUseRef'
import LearnUseMemo from "./LearnUseMemo"

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
       },
       {
        path: "login",
        element: <Login />
        },
        {
        path: "register",
        element: <Register />
        },
        {
            path:'/Use',
            element:<Hook/>
        },
        {
            path:'/child',
            element:<WrappingChild/>
        },
        {
            path:'/useref',
            element:<LearnUseRef/>
        },
        {
            path:'/usememo',
            element:<LearnUseMemo/>
        },

       {
        path: "services",
        element: <Services />,
        children: [
            {
                path: "add",
                element: <AddUser />
            },
            {
                path: "update",
                element: <UpdateUser />
            },
            {
                path: "delete",
                element: <DeleteUser />
            },
            {
                path: "allusers",
                element: <SeeAllUser />
            },
        ]
       
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
]);

export default router