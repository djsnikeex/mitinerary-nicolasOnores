import React from 'react'
import CardDetails from '../components/CardDetails'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/card.css'
import ItineraryCard from '../components/ItineraryCard'
import { useDispatch, useSelector } from 'react-redux'



export default function Details() {

    const {id} = useParams();
    const[cities, setCities]= useState();

    
    useEffect(()=>{
          Axios.get(`http://localhost:4000/api/cities/${id}`)
          .then(response=>{
            
            setCities(response.data.city)
            
            console.log('cargado')
            }
            )
            

          .catch(error=>{console.log(error)})
    },[]);

    return (
        <div className=''>
            <CardDetails cities={cities}/>
        </div>
    )
}