"use client"
import React, { useEffect, useState } from 'react'
import { IoPartlySunnyOutline, IoSunnyOutline } from "react-icons/io5";

function DarkmodeButton() {
    const [ darkmode, setDarkmode ] = useState(false)

    useEffect(() => {
        setDarkmode(document.documentElement.classList.contains("dark"))
    }, [])

    function toggle() {
        const next = !darkmode
        setDarkmode(next)
        document.documentElement.classList.toggle("dark", next)
        try{
            localStorage.setItem("theme", next ? "dark" : "light")
        } catch {}
    }
  return (
    <button
    onClick={toggle}
    aria-label="Toggle theme"
    className='cursor-pointer hover:scale-110 duration-300 ease-in-out'
    >
    {darkmode ?  <IoSunnyOutline className='h-14 w-14 md:h-7 md:w-7' /> : <IoPartlySunnyOutline className='h-14 w-14 md:h-7 md:w-7' />}    
    </button>
  )
}

export default DarkmodeButton