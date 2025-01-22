import React from 'react'
import { TextGenerateEffect } from './ui/textGenerate'
import { Button } from './ui/button'
import { CiLocationArrow1 } from "react-icons/ci";
import { MdCloudDownload } from "react-icons/md";
import SocialLink from './SocialLink';

const CoverPage = () => {
  return (
    <div className='text-center'>
      <h2 className='uppercase text-center tracking-widest text-white text-md md:text-xl lg:text-2xl mb-6 font-extrabold'>Software Developer</h2>
      <TextGenerateEffect 
      className='text-center uppercase tracking-widest text-white'
      words="Hi 👋, I'm Mariama, a Full Stack Software Engineer dedicated to creating impactful and user-friendly web applications." 
      />
      <p className='text-white font-bold italic'>Welcome to <span className='font-extrabold text-orange-700 text-lg'>Marie's Portfolio</span>, Innovative Solution for a digital world.</p>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-6 mt-10'>
        <a href="/files/CV.pdf" download="Mariama_CV.pdf">
          <Button className='rounded-lg bg-white text-orange-700 font-extrabold text-lg transition duration-300 hover:border-orange-700'>DOWNLOAD CV
            <MdCloudDownload size={80} />
          </Button>
        </a>
        <SocialLink />
      </div>
    </div>
  )
}

export default CoverPage
