"use client"
import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaRegCircle, FaCircle } from "react-icons/fa6";
import ProjectStack from './ProjectStack';

function LandingPage() {
  return (
    <div className='flex flex-col flex-1 justify-evenly items-center w-full'>

        {/* Scroll div */}
        <ProjectStack>
        <div className='w-[90%] text-center pt-10'>
            <p className='text-xs text-[var(--green)] mb-5'>
              AVAILABLE FOR OPPORTUNITIES
            </p>
            <h1 className='mb-1 md:mb-2 xl:mb-3'>
              Building the <br/> frontend of Web3.
            </h1>
            <h2>
              Frontend Developer <br />
            React · Typescript · Solana
            </h2>
        </div>
        </ProjectStack>

    </div>
  )
}

export default LandingPage