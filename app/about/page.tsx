import { BentoGrid, BentoGridItem } from '@/Components/ui/bentoGrid'
import gridItem from '@/data/gridItem'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h1>ABOUT</h1>
      <div>
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
