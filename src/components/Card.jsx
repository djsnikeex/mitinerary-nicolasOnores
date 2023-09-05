import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/card.css"

const NewsCard = ({ city, country, image }) => {
  return (
    <div className="relative h-72 w-full flex items-end justify-start text-left bg-cover bg-center
    border-2 border-gray-200  overflow-hidden shadow-lg
    
    " style={{ backgroundImage: `url(${image})` }} id='card'> 
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500
">{city}</span>
          
        </div>
      </div>
      <main className="p-5 z-10">
        <h3  className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">{country}</h3>
      </main>
    </div>
  );
};

export default NewsCard;
