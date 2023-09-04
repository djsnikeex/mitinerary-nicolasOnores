import React from 'react'
import { useEffect, useState } from 'react'
import { get_itinerary } from '../store/actions/itineraryAction'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {FaRegMoneyBillAlt} from 'react-icons/fa'


const ItineraryCard = ({id}
    ) => {
      
  
      const [itinerary, setItinerary] = useState([]);

      useEffect(() => {
        
        axios.get(`http://localhost:4000/api/itineraries/${id}`)
          .then((response) => {
            setItinerary(response.data.itinerary);
            
          })
    
          .catch((error) => {
            console.log(error);
          });
      }, []);

      const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };



      
  return (
    <>
      

        <div className='flex flex-col container justify-between w-full items-center px-5 py-3 text-center'>
          <img className='h-8 w-8 rounded-full object-cover' src={itinerary.image} alt='profile' />
          <h3 className='text-xl font-semibold text-white'>{itinerary.title}</h3>
          <span className='text-sm font-medium text-white'>{itinerary.duration} hours</span>
        </div>

        <div className='flex flex-col justify-between w-full items-center px-5 py-3 text-center'>
          <span className='text-sm font-medium text-white text-center flex justify-center'>Price:  {
            [...Array(itinerary.price)].map((e, i) => <FaRegMoneyBillAlt key={i} className='
            fill-green-500 flex justify-center items-center gap-2
            '
            />)
          }</span>
          
          
              
              <span className='text-sm font-medium text-white'> #{itinerary.hashtags}</span>

          <span className='text-sm font-medium text-white'>Likes: {itinerary.rating}</span>
          
          <span className='text-sm font-medium text-white'>City: {itinerary.cityId}</span>
          <span className='text-sm font-medium text-white'>Itinerary: {itinerary._id}</span>
        </div>

<div>
        <button
          onClick={handleViewMore}
          className='text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-full mt-2'
        >
          View More
        </button>

        {showMore && (
          <div>
            {/* Espacio para actividades y comentarios (por ahora "under construction") */}
            <p className='text-sm text-gray-500'>Activities: under construction</p>
            <p className='text-sm text-gray-500'>Comments: under construction</p>
          </div>
        )}
</div>


      </>
    
  )
}

export default ItineraryCard