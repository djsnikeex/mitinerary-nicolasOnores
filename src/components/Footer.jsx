import React from 'react'


const Footer = () => {
  return (
     <footer 
      className="footer bg-gray-800  className='relative py-3 flex flex-col items-center  overflow-hidden"
    >
      <div className='relative z-[1] container m-auto px-6 md:px-12'>
          <div className='m-auto md:w-10/12 lg:w-8/12 xl:w-6/12'>
            <div className='flex flex-wrap items-center justify-between md:flex-nowrap'>
                <div className='w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start'>
                <div className=" flex m:w-6/12 justify-center md:justify-start ">
        
                <ul role="list" className=' flex justify-center items-start flex-wrap w-max'>

                  <li>
                        <a href="#" className='flex justify-start space-x-3 p-3 hover:text-indigo-700 transition'>
                        <img src="https://icones.pro/wp-content/uploads/2022/07/symbole-de-la-planete-terre-bleu.png" className="h-6 object-cover object-center" alt="logo" />
                        </a>
                      </li>


                      <li>
                        <a href="#" className='flex justify-start space-x-3 p-3 hover:text-indigo-700 transition'>
                        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" className="h-6 object-cover object-center" alt="logo" />
                          
                        </a>
                      </li>
                      <li>
                          <a href="#" className='flex items-center space-x-3 p-3 hover:text-indigo-700 transition'>
                          <img src=" 
            https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png
            " className="h-6 object-cover object-center" alt="logo" />
                              
                          </a>
                        </li>
                        <li>
                          <a href="#" className='flex items-center space-x-3  p-3 hover:text-indigo-700 transition'>
                          <img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" className="h-6 mx-0 my-0object-cover object-center" alt="logo" /> 
                            
                          </a>
                        </li>
                      </ul>

                      </div>




                </div>
        
        
       

        <div className='w-10/12 m-auto  mt-16  text-center sm:text-left sm:w-5/12 sm:mt-auto'>
                        <span className='block text-gray-300'>
                           
                          <span className='font-semibold text-white'>🚩32°53'S  68°49'W Mendoza, Argentina</span>



                        </span>
                        <span className='block text-white'> 👨‍💻Nicolás Onores  &copy; 2023</span>
                        <span className='block text-white'>🎓Cohort 04 <a href="#" className='font-semibold text-white'> MERN</a></span>
              </div>
      </div>
      
      </div>
      </div>

    </footer> 

  )
}

export default Footer