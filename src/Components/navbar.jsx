import { useState } from "react"
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { PiTrademarkRegisteredBold } from "react-icons/pi";


const Navbar = () => {
const[isUserModalOpen,setUserModal]=useState(false);
    const [isUserLoggedIn]=useState(false);

    const products=useSelector((state)=>state.cart.value);
    const toggleUserModal=()=>{
        setUserModal(!isUserModalOpen);
    }

    const cartRef=useRef(null);
    const overlayRef=useRef(null);
    const toggleCart=()=>{
        
        const overlay=overlayRef.current;
        const cart=cartRef.current;
        cart.classList.replace('max-w-full','w-0');
        overlay.classList.add('hidden');

    }
    return (
        <nav className="bg-gray-800 fixed top-0 w-full z-10">
           { <Cart cartRef={cartRef} overlayRef={overlayRef} toggleCart={toggleCart}/>}
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-between w-full sm:items-stretch sm:justify-between">
                        <div className="flex shrink-0 items-center">

                            <Link to={"/"}>
                                <img className="h-8 w-auto" src="logo.png" alt="Your Company" />
                            </Link>

                        </div> 
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <NavLink to="/"
                                    className={({ isActive }) =>
                                        `rounded-md px-3 py-2 text-sm font-medium 
                                ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                    aria-current="page">Home</NavLink>

                                <NavLink to="/about" className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>About</NavLink>
                                <NavLink to="/contact" className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Contact</NavLink>
                                <div className="relative group inline-block text-left">
                                    <div>
                                        <NavLink
                                            to="/services"
                                            className={({ isActive }) => `inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}                                            id="menu-button"
                                            aria-expanded="true"
                                            aria-haspopup="true"
                                        >
                                            Services
                                            <svg
                                                className="-mr-1 size-5 text-gray-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </NavLink>
                                    </div>
                                    <div
                                        className="hidden group-hover:block transition-all duration-[3s] absolute right-0 z-10 left-0 w-56 origin-top-right rounded-md bg-gray-800 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                        tabIndex={-1}
                                    >
                                        <div className="py-1" role="none">   
                                            <NavLink
                                                to="services/add"
                                                className={({ isActive }) => `block rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-0"
                                            >
                                                Fast Delivery
                                            </NavLink>
                                            <NavLink
                                                to="services/update"
                                                className={({ isActive }) => `block rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-1"
                                            >
                                                24/7 Customer Support
                                            </NavLink>
                                            <NavLink
                                                to="services/delete"
                                                className={({ isActive }) => `block rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-2"
                                            >
                                                Easy Returns
                                            </NavLink>
                                            <NavLink
                                                to="services/allusers"
                                                className={({ isActive }) => `block rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-2"
                                            >
                                                Secure Payments
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                   

                            </div>
                        </div>
                        {
                            isUserLoggedIn ? <UserOperation 
                            toggleUserModal={toggleUserModal} 
                            isUserModalOpen={isUserModalOpen}
                            />:
                            <div className="flex gap-2">
                            <Link to='/login'><button className="rounded p-2 px-2 bg-green-500 font-semibold cursor-pointer flex justify-between items-center gap-2"> <FaRegUserCircle />Login</button></Link>
                            <Link to='/register'><button className="rounded p-2 px-2 bg-blue-500 font-semibold cursor-pointer flex justify-between items-center gap-2"><PiTrademarkRegisteredBold />
                            Register</button></Link>
                            <Link to=''><button className="rounded p-2 px-2 bg-yellow-500 font-semibold cursor-pointer flex justify-between items-center gap-2" onClick={()=>toggleCart() }><FaCartShopping />Cart {products.length}</button></Link>
                            </div>
                        }
                    </div>
                    
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <NavLink to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</NavLink>
                    <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</NavLink>
                    <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</NavLink>
                    <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</NavLink>
                </div>
            </div>
        </nav>

    )
}

export default Navbar

const UserOperation=({toggleUserModal,isUserModalOpen})=>{
    return(
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>
                        <div className="relative ml-3">
                            <div>
                                <button type="button" 
                                onClick={toggleUserModal}
                                className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                            {
                                isUserModalOpen && <div className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</NavLink>
                                <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</NavLink>
                                <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</NavLink>
                            </div>
                            }
                            
                        </div>
                    </div>
    )
}