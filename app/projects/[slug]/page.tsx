import React, { ReactNode } from 'react'
import { projects } from "../../data/projectData"
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { div, li, ul } from 'motion/react-client'
import { Suspense } from 'react'


export function generateStaticParams() {
    return projects.map((p) => ({ sluh: p.slug}))
}

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <ProjectContent params={params}/>
    </Suspense>
  );
}

async function ProjectContent({ params,}: {params: Promise<{slug: string }>}) {
    const { slug } = await params
    const pj = projects.find((p) => p.slug === slug)

    if (!pj) return <div>Project not found</div>
  return (
    <div className='flex flex-col flex-1 snap-y snap-proximity overflow-y-auto scroll-smooth items-center px-3 py-15 w-[90%] mx-auto text-sm text-[var(--textColor)] md:w-[80%] lg:text-base lg:text-base/7'>
        <div className='fixed top-0 flex items-start w-full px-8 py-6'>
            <Link href="/#projects" className='flex items-center w-[90%] gap-2 cursor-pointer hover:scale-102 transition-transform'>
                Back
            </Link>
        </div>
        
        <div className='w-full flex flex-col-reverse gap-12 items-center justify-center md:flex-row md:gap-20 lg:justify-center lg:gap-35 lg:items-center'>
            <div className='flex flex-col self-start md:my-auto'>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl'>{pj.heading}</h1>
                    <h2 className='text-base/5 text-[var(--textColor)] md:text-lg/6 md:mt-1 md:max-w-[30ch] lg:text-xl/7'>{pj.subtitle}</h2>
                    <p className='max-w-[60ch] mt-2 md:max-w-[46ch] xl:max-w-[52ch]'>{pj.overview}</p>
                </div>
                <div >
                    <p className='mb-2 mt-4'>Tech-Stack:</p>
                    <ul className='flex gap-2 flex-wrap md:max-w-[400px] lg:text-base'>
                        {pj.techStack.map((tech, i) => {
                            return (
                                <li key={i} className='border border-[var(--pink)] py-1 px-2 w-fit rounded-sm'>
                                    <p>{tech}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                 <div className='flex gap-4 my-8 md:gap-7 lg:gap-10'>
                    <a className='button flex items-center gap-2 text-xs font-bold text-[var(--textColor)] bg-[var(--pink)] p-2 border rounded-xl lg:px-3' rel="stylesheet" href={pj.linkWebsite}>Visit website</a> 
                    <a className='button flex items-center gap-2 text-xs font-bold text-[var(--textColor)] bg-[var(--pink)] p-2 border rounded-xl lg:px-3' rel="stylesheet" href={pj.linkGit}>View code <FaGithub className='h-4 w-4 md:h-5 md:w-5'/></a>
                </div>
            </div>

            <img className='h-[400px] rounded-xl lg:h-[500]' src={pj.video} alt="" />
        </div>

        <div className='py-10 flex flex-col gap-7 lg:flex-row lg:justify-between lg:gap-30 lg:my-20'>
            <div>
                <h3 className='font-bold mb-2'>Features</h3>
                <ul className='list-disc list-inside list-outside my-2 ml-3'>
                    {pj.features.map((feature, i) => {
                      return  <li className='my-1' key={i}>{feature}</li>
                    })}
                </ul>
            </div>
            <div>
                <h3 className='mb-2'>Flow</h3>
                <ul>
                    {pj.flow.map((section, i) => {
                        return(
                            <li key={i} className='flex my-1'>
                                <h4 className='font-bold mr-1'>{section.title}</h4>
                                <p> {section.text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

        <div className='flex flex-wrap justify-center gap-1 '>
            {pj.squareImg.map((img, i) => {
            return(
                <img key={i} src={img} className=' rounded-sm h-35 w-35'/>
            )
        })}
        </div>

        <div className='py-10 flex flex-col gap-7 lg:flex-row lg:justify-between lg:gap-30 lg:my-20'>

            <div className='lg:w-[50%]'>
                <h3 className='font-bold mb-2'>Technical challenges</h3>
                <p className='mt-2'>{pj.learned}</p>
            </div>

            <div className='lg:w-[50%]'>
                <h3 className='font-bold mb-2'>Limitations</h3>
                <ul className="list-disc list-outside space-y-2 ml-3">
                    {pj.limitations.map((section, i) => {
                        return(
                            <li key={i}>
                            <p>{section}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

        <div className='lg:w-[70%] lg:mx-auto'>
            <h3 className='font-bold'>Security</h3>
            <ul>
                {pj.security.map((section, i) => {
                return(
                    <li key={i} className='mb-2'>
                        <h4 className='font-bold'>{section.title}</h4>
                        <p>{section.text}</p>
                    </li> 
                )
            })}
            </ul>
        </div>

        <div className='py-10 flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-30 lg:my-20'>
            <div className='w-[90%] lg:w-[50%]'>
                <h3 className='font-bold'>Roadmap</h3>
                <p>{pj.roadmapIntro}</p>
                <ul>
                {pj.roadmap.map((section, i) => { 
                    return(
                        <li key={i} className='my-1'>
                        <h4 className='font-bold'>{section.title}</h4>
                        <p>{section.text}</p>
                        </li>   
                    )
                })} 
                </ul>
            </div>

            <div className='w-[90%] lg:w-[50%]'>
                <h3 className='font-bold'>Learned</h3>
                <p>{pj.learned}</p>
            </div>
        </div>




       
     
     <div className='flex flex-col mt-15 md:flex-row gap-5 lg:mt-15'>
        {pj.image.map((image, i) => {
            return <img className='h-[400px] w-auto rounded-xl lg:h-[500px]' key={i} src={image}/>
        })}
     </div>



 

    </div>
  )
}

