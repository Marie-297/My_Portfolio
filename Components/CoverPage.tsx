import React from 'react'
import { TextGenerateEffect } from './ui/textGenerate'
import { Button } from './ui/button'
import { CiLocationArrow1 } from "react-icons/ci";
import Link from 'next/link';

const CoverPage = () => {
  return (
    <div className='text-center'>
      <h2 className='uppercase text-center tracking-widest text-white text-xs md:text-sm lg:text-lg mb-6'>Transforming Web Experiences with Next.js</h2>
      <TextGenerateEffect 
      className='text-center uppercase tracking-widest text-white'
      words="Welcome to my Marie's Portfolio, Innovative Solution for a digital world." 
      />
      <p className='text-white font-bold italic'>Hi 👋 I'm Mariama, a Full Stack Software Engineer dedicated to creating impactful and user-friendly web applications.</p>
      <Link href="/about">
        <Button className='rounded-lg mt-10 bg-white text-orange-700 font-extrabold text-lg'>View my Work
          <CiLocationArrow1 className='text-2xl' />
        </Button>
      </Link>
    </div>
  )
}

export default CoverPage
