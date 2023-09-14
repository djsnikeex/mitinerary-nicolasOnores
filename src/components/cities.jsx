import React from "react";

import Axios from "axios";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import NotFound from "../components/NotFound";
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from "../store/actions/cityActions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const cities = () => {
  const cities = useSelector((store) => store.cityReducer.cities)
  const dispatch = useDispatch();
 const navigate = useNavigate(0);
  let inputSearch = useRef();
  

  useEffect(() => {
    dispatch(get_cities())
      }, []);

  const handleInputChange = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You will be redirected to the city you are looking for",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

      confirmButtonText: 'Yes, go!'
    })
    if (result.isConfirmed) {
      dispatch(filter_cities({
      name: inputSearch.current.value
    }))}
    else if (result.isDenied) {
      Swal.fire('Searchcanceled','', 'info')
    }




  }

  const refreshPage = () => {
    navigate(0);
}



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
          <input type="text" className="searchTerm border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" placeholder="Search by city "  ref={inputSearch} />
          <button type="submit" className="searchButton bg-gray-300 h-10 w-16 rounded-lg text-sm focus:outline-none flex items-center justify-center" onClick={handleInputChange}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2em" height="2em" viewBox="0 0 48 48">
<path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"></path><path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"></path><path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z" transform="rotate(-45.001 38.24 38.24)"></path><path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"></path><path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"></path>
</svg>


          </button>
          
         
          
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