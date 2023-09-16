import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../styles/card.css";
import ItineraryCard from "./ItineraryCard";
import { useDispatch, useSelector } from "react-redux";

export default function DetailsCard({ cities }) {
  const { id } = useParams();

  const dispatch = useDispatch();

  
  return (
    <>
      {!cities ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className="flex justify-center items-center sm:h-full md:h-[80vh] lg:h-[80vh]  flex-col bg-hero-bg bg-cover bg-no-repeat shadow-2xl"
          style={{ backgroundImage: `url(${cities.image})` }}
        >
          <div
            className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-gray-900 
            gap-4
            "
          >
            <h1 className="text-5xl font-semibold text-center text-white">
              {cities.city}
            </h1>
            <h2 className="text-2xl font-semibold text-center text-white">
              {cities.country}
            </h2>

            {cities.itineraries.length <= 0 ? (
                    <div
                    className="flex justify-center items-center gap-4 rounded border flex-wrap border-indigo-500"
                    id="card"
                  >
                  <p className="text-xl font-semibold text-center text-white">
                    No itineraries yet
                  </p>
                    </div>
                ) : (
                    <div
              className="grid-cols-1 sm:grid md:grid-cols-3 w-full px-8  
              sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16
              "
           >
      {cities.itineraries.map((itinerary) => (
        <div
              className="flex flex-wrap justify-center items-center  rounded border h-full border-indigo-500"
              id="card"
            >
        <ItineraryCard key={itinerary} id={itinerary} className="
        sm:
        w-64 h-64
         flex-wrap flex justify-center items-center rounded border border-indigo-500 


        
        " />
        
        </div>

      ))}
        </div>
                )}
      
              
                
                <Link
                  to="/cities"
                  className="  bg-indigo-600 rounded text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 my-4"
                >
                  Back
                </Link>
                
  
               
              </div>
              
            </div>
      )}
    </>
  );
}
