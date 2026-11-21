"use client"

import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { ReactNode, useEffect, useRef } from 'react'
import { projects } from "../data/projectData"
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'

export default function ProjectStack({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const step =  useTransform(scrollYProgress, (p): number => (p < 0.5 ? 0: 1))
  const snapped = useSpring(step, { stiffness: 180, damping: 24 })

  return (
    <section ref={ref} className='relative h-[150cqh] w-full shrink-0'>
      <div className='sticky top-0 flex h-[100cqh] flex-col items-center justify-center gap-3'>
          {/* Snap-punkt: kort 1 helt synligt (progress 0) */}
  <div className='pointer-events-none absolute top-0 h-px w-full snap-start' />
  {/* Snap-punkt: kort 2 helt synligt (progress 1) */}
  <div className='pointer-events-none absolute bottom-0 h-px w-full snap-end' />
        
        {children}
        <div className='relative h-[50cqh] w-[95%] md:w-[65%] xl:w-[55%] overflow-hidden rounded-2xl'>
          {projects.map((p, i) => (
            <Card key={i} i={i} project={p} progress={snapped} />
          ))}
        </div>
        <Counter progress={scrollYProgress} />
      </div>
    </section>
  )
}

function Card({ i, project, progress }: {
  i: number; project: typeof projects[0]; progress: MotionValue<number>;
}) {
  const isFirst = i === 0
  // Slotmaskin: kort 1 åker upp och ut, kort 2 kommer upp underifrån
  const y = useTransform(progress, [0, 1], isFirst ? ["0%", "-110%"] : ["110%", "0%"])
  const opacity = useTransform(progress, [0, 1], isFirst ? [1, 0] : [0, 1])

  return (
    <motion.article
      style={{ y, opacity: opacity }}
      className='absolute flex flex-col bg-[var(--foreground)]/20 inset-0 p-4 rounded-3xl shadow-xl/10 m-5'
    >
      <div className='relative min-h-0 flex-1 overflow-hidden rounded-2xl'>
      <img
        src={project.cardGif}
        alt={project.cardTitle}
        className='absolute inset-0 h-full w-full object-cover object-center'
      />
    </div>

    {/* Texten längst ner */}
    <div className='shrink-0 pb-1 flex justify-between mt-2'>
        <div>
      <h3 className=' text-xl font-extrabold md:text-2xl text-[var(--textColor)]'>{project.cardTitle}</h3>
      <p className='text-[var(--foreground)] font-medium text-xs md:text-sm mt-1'>{project.cardTool}</p>
        </div>

        <Link href={`/projects/${project.slug}`} ><MdArrowOutward className='h-5 w-5 mt-1 md:h-7 md:w-7 md:mt-0'/></Link>

    </div>
    </motion.article>
  )
}

function Counter({ progress }: { progress: MotionValue<number> }) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"])
  return (
    <div className='relative h-px w-40 bg-[#c9a49a]/30'>
      <motion.div style={{ width }} className='h-full bg-[#c9a49a]' />
    </div>
  )
}
