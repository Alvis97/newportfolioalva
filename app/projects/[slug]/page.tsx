import React, { ReactNode } from 'react'
import { projects } from "../../data/projectData"
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { div, li } from 'motion/react-client'

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    const pj = projects.find(p => p.slug === slug)

    if (!pj) return <div>Project not found</div>
  return (
    <div className='flex flex-col flex-1 snap-y snap-proximity overflow-y-auto scroll-smooth" items-center px-10 py-15 w-screen text-sm text-[var(--textColor)] md:px-20 lg:p-30 lg:text-base lg:text-base/7'>
        <div className='fixed top-0 flex items-start w-full px-8 py-6'>
            <Link href="/#projects" className='flex items-center w-[90%] gap-2 cursor-pointer hover:scale-102 transition-transform'>
                Back
            </Link>
        </div>
        <div className='flex flex-col-reverse gap-10 items-center justify-end md:flex-row md:gap-20 lg:gap-50'>
            <div>
                <div>
                    <h1 className='text-2xl mb-1 md:text-4xl'>{pj.heading}</h1>
                    <h2 className='text-lg text-[var(--textColor)] xl:text-xl'>{pj.subtitle}</h2>
                    <p className='text-sm mt-3 md:text-base'>{pj.overview}</p>
                </div>
                <div >
                    <p className='text-base mb-2 mt-5'>Tech-Stack:</p>
                    <ul className='flex gap-2 flex-wrap'>
                        {pj.techStack.map(tech => {
                            return (
                                <li className='border border-[var(--pink)] py-1 px-2 w-fit rounded-sm'>
                                    <p className='text-xs md:text-sm'>{tech}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                 <div className='flex flex-col gap-2 my-8 md:flex-row md:gap-7 lg:gap-10'>
                    <a className='button flex items-center gap-3' rel="stylesheet" href={pj.linkWebsite}>Visit website</a> 
                    <a className='button flex items-center gap-3' rel="stylesheet" href={pj.linkGit}>View code <FaGithub size={25}/></a>
                </div>
            </div>

            <img className='h-[400px] rounded-xl lg:h-[500]' src={pj.video} alt="" />
        </div>

        <div className='py-10 flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-30 lg:my-20'>
            <div>
                <h3 className='text-xl font-bold'>Features</h3>
                <ul className='list-disc list-inside my-2'>
                    {pj.features.map((feature, i) => {
                      return  <li className='text-sm my-1 md:text-base' key={i}>{feature}</li>
                    })}
                </ul>
            </div>

            <div className='lg:w-[50vw]'>
                <h3 className='text-xl font-bold'>Technical challenges</h3>
                <p className='mt-2'>{pj.challenges}</p>
            </div>
        </div>

        <div>
            <h3>Flow</h3>
            <p>{pj.flow}</p>
        </div>

        <div>
            <h3>Security</h3>
            <p>{pj.security}</p>
        </div>

<div>
    <h3>Roadmap</h3>
    <p>{pj.roadmap}</p>
</div>


       
     
     <div className='flex text-sm flex-col mt-15 md:flex-row gap-5 lg:mt-15 lg:text-base'>
        {pj.image.map((image, i) => {
            return <img className='h-[400px] w-auto rounded-xl lg:h-[500px]' key={i} src={image}/>
        })}
     </div>

    </div>
  );
}