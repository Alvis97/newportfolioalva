"use client"

import React from 'react'
import { projects } from "../data/projectData"
import Link from 'next/link'

function ProjectPage() {
  return (
    <div className='flex flex-col flex-1 gap-10 justify-evenly items-center w-full py-7'>
        <div className='bg-[var(--darkBrown)] p-3 rounded-xl w-xs md:w-xl'>
            <div className='flex justify-between items-center border-b border-b-[var(--foreground)] pb-2'>
                <p className='text-xs md:text-base text-[var(--foreground)]'>Projects/</p>
                <p className='text-xs md:text-base'>{projects.length.toString().padStart(2, "0")} ITEMS</p>
            </div>
            <ul>
            {projects.map(projectItem => {
                return (
                    <li 
                    key={projectItem.id}
                    className='border-b py-4 px-1 flex items-center'>
                        <img 
                        src={projectItem.cardImage} 
                        alt={projectItem.cardTitle}
                        className='h-25 w-25 rounded-sm xl:h-30 xl:w-30' 
                        />
                        <div className='pl-4'>
                            <h2 className='text-base mb-1 md:text-xl md:mb-2' >{projectItem.cardTitle}</h2>
                            <p className='text-sm md:text-base'>{projectItem.cardTool}</p>
                            <Link href={`/projects/${projectItem.slug}`} className='text-sm md:text-base'>View project</Link>
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