import React from 'react'
import '../styles/card.css'

const NotFound = () => {
  return (
    <>
        
        
        <div className="flex justify-center items-center w-full flex-col py-2 h-[65vh]">
        <div className='
        w-46
        h-full
        relative
        flex flex-col
        justify-center
        items-center
        rounded-lg
        shadow-lg
        overflow-hidden 
        py-2
        border-2 border-indigo-600
        bg-gradient-to-b from-transparent to-gray-900
        '
        id="card">
            <img src="https://images.vexels.com/media/users/3/145746/isolated/preview/d6cf0196d86757f0c33e79de293b6ce1-hombre-con-lupa.png" className="w-full  object-cover object-center
            opacity-30 
            
            " alt="logo" />
            <h2 className="text-3xl font-semibold text-center
            text-white 
            
            ">Search not found</h2>
            

        </div>
            

        </div>
            

            
        
        
        </>


    

    
  )
}

export default NotFound