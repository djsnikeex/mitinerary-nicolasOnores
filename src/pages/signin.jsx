import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { user_login } from '../store/actions/userActions'
import { GoogleSignIn } from '../components/googleSignin'
import "../styles/card.css";
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSignIn = async (e) => {
        e.preventDefault()

        try{
            dispatch(user_login({
                data: formData
            }))
        }
        catch(err){
            console.log(err)
        }
    }
    



  return (
    <>
   

    <div className="flex items-center justify-center   bg-hero-bg2 bg-cover bg-top bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 h-[80vh]" >

      <div className="max-w-md w-full space-y-8 
       rounded-lg
      px-4 py-6 shadow-xl sm:rounded-lg sm:px-10 sm:py-8

      "
      id='card' >

        <div>

          <img className="mx-auto h-12 w-auto" src="https://icones.pro/wp-content/uploads/2022/07/symbole-de-la-planete-terre-bleu.png" alt="Workflow" />

          <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-600 ">
              
              Sign in to your account

          </h2>

         

      </div>

      <form className="mt-8 space-y-6" action="" method="POST" onSubmit={handleSignIn}>

          <input type="hidden" name="remember" defaultValue="true" />

          <div className="rounded-md shadow-sm -space-y-px">


              <div>

                  <label htmlFor="email-address" className="sr-only">

                      Email address

                  </label>

                  <input

                      id="email-address"

                      name="email"

                      type="email"

                      autoComplete="email"

                      onChange= {handleInput}

                      required

                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-indigo-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

                      placeholder="Email address"

                  />

              </div>

              <div>
                  
                    <label htmlFor="password" className="sr-only">
  
                        Password
  
                    </label>
  
                    <input
  
                        id="password"
  
                        name="password"
  
                        type="password"

                        onChange= {handleInput}
  
                        autoComplete="current-password"
  
                        required
  
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-indigo-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
  
                        placeholder="Password"
  
                    />

              </div>

          </div>

          
            <div
            className='flex items-center justify-center'
            >
            <GoogleSignIn/>
            </div>
          <div>
          
              <button
                
                    type="submit"
  
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                    onClick={handleSignIn}

                    
              >
                Sign in
              </button>
              

          </div>
          <div className="flex items-center justify-between">
              
                <div className="flex items-center">
  
                
  
                    
  
                </div>
  
                <div className="text-sm text-center flex justify-center justify-item">
  
                    <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-900 text-center">

                        Don't have an account yet? Sign up
                    </Link>


  
                </div>

          </div>

      </form>

      </div>
      

    </div>










    

    </>
  )
}

export default signin