"use client"

import React, { useState } from 'react'
import { FiMenu, FiX} from "react-icons/fi"

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-between items-center w-full h-14 border-b border-b-[var(--pink)] text-[var(--pink)] text-xs xl:text-base'>
        <p>ALVA JONSSON</p>

        <div className='md:hidden'>
            <button
              className='relative z-10'
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen} 
            >
                {isOpen ? <FiX size={24} /> :  <FiMenu size={24} />}
            </button>
        </div>

        <div className='hidden items-center gap-6 md:flex'>
            <a href="/home">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/projects">PROJECTS</a>
            <button>Sun</button>
        </div>

        
            <div
            aria-hidden={!isOpen} 
            className={`fixed inset-0 z-5 flex flex-col justify-center items-end p-5 px-[5%] gap-5 text-xl bg-[var(--background)]/60 backdrop-blur-xs left-0 top-0 w-full h-full transition-opacity duration-500 ease-out ${
                isOpen ? 'opacity-100' : 'invisible opacity-0'
            }`}>
               <a href="/home" onClick={() => setIsOpen(false)}>HOME</a>
               <a href="/about" onClick={() => setIsOpen(false)}>ABOUT</a>
               <a href="/projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
               <button>Sun</button>
            </div>
      
    </div>
  )
}

export default Navigation