import { BentoGrid, BentoGridItem } from '@/Components/ui/bentoGrid'
import gridItem from '@/data/gridItem'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-white text-5xl'>ABOUT <span className='text-orange-700 font font-extrabold text-lg'>ME</span></h1>
      <div className='mt-10 pb-10 flex flex-col items-center gap-10 px-4'>
        <h1 className='text-white text-5xl'>ABOUT <span className='text-orange-700 font font-extrabold text-5xl'>ME</span></h1>
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
