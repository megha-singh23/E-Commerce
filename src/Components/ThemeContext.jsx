import React from 'react'
import { createContext } from 'react'

const data={
    color:"red",
    bgColor:"green",
    border:2
}

const Theme=createContext();

const ThemeContext = ({children}) => {
  return (
    <Theme.Provider value={data}>
        {console.log(data)}
        {children}
    </Theme.Provider>
  )
}

export default ThemeContext;
export {Theme}
