import React from 'react'

const tech = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind",
    "CSS",
    "Solana" 
];

function AboutPage() {

function TechList() {
    return (
       <div className='flex flex-col md:items-center'>
        <h3 className='mb-2 text-sm text-[var(--textColor)]'>Tech I work with:</h3>
        <ul className='flex flex-wrap gap-2 max-w-80 min-w-60 md:justify-center'>
            {tech.map((item) => (
                <li
                key={item}
                className='rounded-sm border border-[var(--pink)] px-2 py-1 text-xs text-[var(--textColor)] md:text-sm'
                >
                {item}    
                </li>
            ))}
        </ul>

       </div>
    )
}

  return (
    <div className='my-auto flex flex-col w-[90%] mx-auto shrink-0 py-5 md:w-full md:flex-row md:gap-15 md:justify-center md:items-center md:px-10'>
      {/* bild: överst på mobil, höger kolumn på desktop */}
      <div className='flex flex-col items-center gap-6 md:order-last '>
        <img
          src="/alva 1.png"
          alt="Alva Jonsson"
          width={208}
          height={288}
          className='h-34 w-25 rounded-[50%] border border-[var(--pink)] object-cover object-top mb-7 md:h-52 md:w-38'
        />

        {/* taggar visas under bilden bara på desktop */}
        <div className='hidden md:block'>
          <TechList />
        </div>
      </div>

      {/* text */}
      <div className='flex w-full max-w-xl flex-col'>
        <h1 className='mb-3 text-2xl md:text-4xl'>Hi, I’m Alva!</h1>

        <div className='flex flex-col gap-3 text-sm text-[var(--textColor)] md:text-base md:max-w-124'>
          <p>
            I’m a junior frontend developer based in Sweden with a bachelor’s degree in
            Web Development from SAE Institute London. Over the past year I’ve developed
            a growing interest in blockchain technology, particularly the Solana
            ecosystem, and recently built and secured a <span><a href="" className='font-semibold'>Solana swap app</a></span>.
          </p>
          <p>
            I’m naturally curious and enjoy exploring new ideas, learning new
            technologies and experimenting with different ways to build things.
          </p>
          <p>
            I enjoy combining creativity with problem-solving and building things that
            are both functional and thoughtfully designed. I’m currently looking for a
            junior role, an internship, or like-minded people to build projects with.
          </p>
        </div>

        {/* taggar visas under texten bara på mobil */}
        <div className='mt-6 md:hidden'>
          <TechList />
        </div>
      </div>
    </div>
  )
}

export default AboutPage