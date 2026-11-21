"use client"

import React, { useState } from 'react'
import { FiMenu, FiX} from "react-icons/fi"
import DarkmodeButton from './DarkmodeButton'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-between items-center w-[98vw] mx-auto h-14 border-b border-b-[var(--foreground)] text-[var(--foreground)]'>
        <span className='text-sm'>ALVA JONSSON</span>

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
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <DarkmodeButton/>
        </div>

        
            <div
            aria-hidden={!isOpen} 
            className={`fixed top-0 inset-0 z-5 flex flex-col justify-center items-end p-5 px-[5%] gap-5 bg-[var(--background)]/80 backdrop-blur-xs left-0 top-0 w-full h-full transition-opacity duration-500 ease-out md:hidden ${
                isOpen ? 'opacity-100' : 'invisible opacity-0'
            }`}>
               <a href="#home" className='text-xl' onClick={() => setIsOpen(false)}>HOME</a>
               <a href="#about" className='text-xl' onClick={() => setIsOpen(false)}>ABOUT</a>
               <a href="#projects" className='text-xl' onClick={() => setIsOpen(false)}>PROJECTS</a>
               <DarkmodeButton/>
            </div>
      
    </div>
  )
}

export default Navigation