import React from 'react'
import { projects } from "../data/projectData"
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";

function ProjectPage() {
  return (
    <div className='flex flex-1 justify-center items-center w-full py-7'>
        <div className='bg-[var(--darkBrown)] p-3 rounded-xl w-sm md:w-xl'>
            <div className='flex justify-between items-center border-b border-b-[var(--foreground)] pb-2 w-fill'>
                <h1 className='text-sm text-[var(--textColor)]'>Projects/</h1>
                <p className='text-[var(--textColor)]/50'>{projects.length.toString().padStart(2, "0")} ITEMS</p>
            </div>
            <ul>
            {projects.map(projectItem => {
                return (
                    <li 
                    key={projectItem.id}
                    className='border-b border-b-[var(--foreground)] py-4 px-1 flex items-center'>
                        <img 
                        src={projectItem.cardImage} 
                        alt={projectItem.cardTitle}
                        className='h-25 w-25 rounded-sm xl:h-30 xl:w-30' 
                        />
                        <div className='pl-4'>
                            <h2 className='text-base font-bold text-[color:var(--textColor)] mb-1 md:mb-2' >{projectItem.cardTitle}</h2>
                            <p className='text-[var(--textColor)]/50'>{projectItem.cardTool}</p>
                            <Link className='flex items-center' href={`/projects/${projectItem.slug}`}>View project <MdArrowOutward/></Link>
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