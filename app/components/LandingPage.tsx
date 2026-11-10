"use client"
import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaRegCircle, FaCircle } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='flex flex-col flex-1 gap-10 justify-evenly items-center w-full  py-7'>
        <div className='w-[90%] text-center md:'>
            <p className='text-xs text-[var(--green)] mb-6'>
              AVAILABLE FOR OPPORTUNITIES
            </p>
            <h1 className='text-3xl mb-1 md:text-4xl md:mb-2 xl:text-5xl xl:mb-3'>
              Building the <br/> frontend of Web3.
            </h1>
            <h2 className='text-base xl:text-lg'>
              Frontend Developer <br />
            React · Typescript · Solana
            </h2>
        </div>

        {/* Scroll div */}
        <div className='bg-[var(--darkBrown)] flex flex-col justify-between items-center p-3 rounded-xl w-[90%] h-full md:w-[65%] xl:w-[55%]'>
           

        </div>

    </div>
  )
}

export default LandingPage