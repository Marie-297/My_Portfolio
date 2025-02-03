import { BentoGrid, BentoGridItem } from '@/Components/ui/bentoGrid'
import gridItem from '@/data/gridItem'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='pb-10'>
      <div className='lg:pt-10 pt-4 flex flex-col items-center lg:gap-10 gap-6 px-4'>
        <h1 className='text-white lg:text-5xl text-2xl dark:text-black font-bold'>ABOUT <span className='text-orange-700 font font-extrabold text-2xl lg:text-5xl'>ME</span></h1>
        <BentoGrid>
          {gridItem.map(({id, title, desc, icon, className, image,}) => (
            <BentoGridItem title={title} description={desc} key={id} id={id} icon={icon} className={className} image={image} />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}

export default AboutPage
