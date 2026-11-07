"use client"

import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6"
import { FiCheck, FiMail } from 'react-icons/fi';

function Footer() {
    const [copied, setCopied] = useState(false)
    const email= "alva-web@live.se";

    async function handleCopy() {
        try{
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Could not copy", err)
        }
    }
  return (
    <div className='flex justify-between items-center h-14 border-t border-t-[var(--foreground)] text-[var(--foreground)] text-xs xl:text-base'>
        <p>CONTACT ME:</p>
        <div className='flex gap-3 items-center'>
            <div className='relative flex items-center justify-center group'>
                <button onClick={handleCopy} className='cursor-pointer hover:scale-110 transition-transform'>
                    {copied ? <FiCheck className='h-5 w-5 xl:h-6 xl:w-6'/> : <FiMail className='h-5 w-5 xl:h-6 xl:w-6'/>}
                </button> 
                <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-white/50 text-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
                    Click to copy email 
                </span>  
            </div>
            <a href="https://www.linkedin.com/in/alva-jonsson/"><FaLinkedinIn className='h-5 w-5 xl:h-6 xl:w-6'/></a>
            <a href="https://x.com/alvajon1997"><FaXTwitter className='h-5 w-5 xl:h-6 xl:w-6'/></a>
            <a href="https://github.com/Alvis97"><FaGithub className='h-5 w-5 xl:h-6 xl:w-6'/></a>
        </div>
    </div>
  )
}

export default Footer