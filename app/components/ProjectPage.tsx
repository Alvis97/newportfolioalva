"use client"

import React from 'react'

const projects = [
    {
    id: "1", 
    img: "",   
    projectName: "01_sol-swap",
    tools: "React · TypeScript · Solana",
    link: ""
    },
    {
    id: "2",
    img: "",    
    projectName: "02_wallet-dashboard",
    tools:  "React · TypeScript · Solana",
    link: "" 
    }
]

function ProjectPage() {
  return (
    <div className='flex flex-col flex-1 gap-10 justify-evenly items-center w-full py-7'>
        <div className='bg-[var(--darkBrown)] p-3 rounded-xl w-xs md:w-xl'>
            <div className='flex justify-between items-center border-b border-b-[var(--foreground)] pb-2'>
                <p className='text-xs md:text-base text-[var(--foreground)]'>Projects/</p>
                <p className='text-xs md:text-base'>02 ITEMS</p>
            </div>
            <ul>
            {projects.map(projects => {
                return (
                    <li 
                    key={projects.id}
                    className='border-b py-3 flex items-center'>
                        <img 
                        src={projects.img} 
                        alt={projects.projectName}
                        className='h-30 w-30 xl:h-40 xl:w-40' 
                        />
                        <div>
                            <h2 className='text-base mb-1 md:text-xl md:mb-2' >{projects.projectName}</h2>
                            <p className='text-sm md:text-base'>{projects.tools}</p>
                            <a href="" className='text-sm md:text-base'>View project</a>
                        </div>
                    </li>
                )
            })}
            </ul>
           
            <div>

            </div>
        </div>
        
    </div>
  )
}

export default ProjectPage