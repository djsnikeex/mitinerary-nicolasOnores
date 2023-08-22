import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/card.css'





export default function DetailsCard() {
    const {id} = useParams();
    
    const[cities, setCities]= useState();

    const[loading, setLoading]= useState(true);
    useEffect(()=>{
          Axios.get(`http://localhost:4000/api/cities/${id}`)
          .then(response=>{setCities(response.data.city)
            }
            )
            .then(()=>{setLoading(false)})

          .catch(error=>{console.log(error)})
    },[]);
    
    return (
        <>
        {loading ? (
            <h1>Loading...</h1>
        ) : (

            
            <div className=" h-[80vh] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-gradient-to-b from-transparent to-gray-900"
            style={{ backgroundImage: `url(${cities.image})` }}
            >
            <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-gray-900 
            gap-4
            ">
                <h1 className="text-5xl font-semibold text-center text-white">
                {cities.city}
                </h1>
                <h2 className="text-2xl font-semibold text-center text-white">
                {cities.country}
                </h2>

                <div className="flex justify-center items-center gap-4 rounded border border-indigo-500" id="card">
                    <div className="flex justify-center items-center flex-col gap-4">
                        <h3 className="text-2xl font-semibold text-center text-white"> Under construction</h3>
                        <p className="text-xl font-semibold text-center text-white">We are working on it</p>
                        <Link to="/cities" className="  bg-indigo-600 rounded text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Back</Link>
                    </div>
                
                </div>
            </div>
            
            
            </div>

        )}
            
        
        </>
        )}
    
        



