import React from 'react'
import HeroSection from './HeroSection'

const About = () => {
  const imageUrl="https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/about1.svg"
  return (
    <div>
      <HeroSection imageUrl={imageUrl}/>
    </div>
  )
}

export default About