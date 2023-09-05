import React from "react";

import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import NotFound from "../components/NotFound";

const cities = () => {
  const [cities, setCities] = useState([]);
  

  useEffect(() => {
    Axios.get("http://localhost:4000/api/cities")
      .then((res) => {
        setCities(res.data.cities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = async (e) => {

    try {
      await Axios.get(
        `http://localhost:4000/api/cities?city=${e.target.value}`
      ).then((res) => setCities(res.data.cities));
      
    } catch (error) {
      console.log(error);
      setCities([]);
    }
  };


  return (
    <>
      <div className="flex justify-center items-center h-full w-full flex-col bg-hero-bg bg-cover bg-no-repeat shadow-2xl
      ">
        <div className="bg-black/25 w-full py-4">
          
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-5xl font-semibold text-center text-white">Cities</h1>
        </div>
        <div className="flex  items-center w-full justify-around flex-wrap px-4 ">
          <h2 className="
            text-2xl
            font-semibold
            text-center
            text-white
            
          
          ">
            Find the best places to visit
          </h2>
          <div>
          <div className="search flex px-3 ">
          <input type="text" className="searchTerm border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" placeholder="Search by city "  onChange={handleInputChange}/>
          </div>
          </div>
        </div>
        

        <div className="flex justify-center items-center py-4  min-h-[70vh] w-full ">
          {cities?.length > 0 ? (
            <div
              className="grid-cols-1 sm:grid md:grid-cols-3 w-full px-8  
              sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16
              "
           
            >
              {cities?.map((ciudad) => (
                <Link key={ciudad._id} to={`/cities/${ciudad._id}`}>
                  <Card
                    key={ciudad._id}
                    city={ciudad.city}
                    country={ciudad.country}
                    image={ciudad.image}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </div>
        
      </div>
      </div>
    </>
  );
};

export default cities;