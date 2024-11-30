import {About, Service, Contact, HeroSection} from "./index"
const Home = () => {
  const imageUrl="https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/hero.svg"
  return (
   <>
   <HeroSection imageUrl={imageUrl}/>
   <Service/>
   <Contact/>
   </>
  )
}

export default Home