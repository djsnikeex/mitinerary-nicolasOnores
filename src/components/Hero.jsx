import Carrousel from "./Carrousel"
import "../styles/hero.css"
import { Link as LinkRouter } from 'react-router-dom'


const Hero = () => {
  return (
    <>
    <section
    className=" bg-hero-bg bg-cover bg-center bg-no-repeat rounded shadow-2xl mx-auto my-auto  overflow-hidden
      w-full h-full "
  >
    <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24  flex flex-col items-center justify-start	h-full ">
      <div className="text-center ltr:sm:text-left rtl:sm:text-right ">
        <h2 className="text-3xl font-bold text-white/90 sm:text-4xl md:text-5xl
        ">
          <span className="block">MyTinary</span>
        </h2>
        <p className="mt-3 text-xl text-white sm:mt-4 md:text-2xl">
          <span className="block">Find your perfect trip, designed by insiders who know and love their cities</span>
        </p>
  
        <div className="mt-4 sm:mt-8">
          
            { <LinkRouter to='/cities' className="inline-block  rounded-full bg-indigo-600 px-12 py-3 text-lg  font-light text-white  transition border border-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 ">🛬 Explore the world with us 🛬</LinkRouter> }
          
        </div>
        
      </div>
      
    </div>
    <Carrousel/>
      </section>
      
      </>
    
  )
}

export default Hero