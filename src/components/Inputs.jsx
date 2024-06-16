import React, { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");
  const handleSearchClick=()=>{
    if(city!==" ") setQuery({q:city})
  }

  const handleLocationClick=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const{latitude,longitude}=position.coords
        setQuery({lat:latitude,lon:longitude})
      })
    }
  }
  return (
    <>
      <div className="flex flex-row justify-center mx-6 my-6">
        <div className="flex flex-row justify-center w-3/4 items-center space-x-4">
          <input
            type="text"
            placeholder="search by city"
            className="text-gray-600 text-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
          <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            color="white"
            onClick={handleSearchClick}
          />
          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            color="white"
            onClick={handleLocationClick}
          />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button className="text-2xl font-medium transition ease-out hover:scale-125 text-white" onClick={()=>setUnits("metric")}>
            °C
          </button>
          <button className="text-2xl font-medium mx-1  text-white">|</button>
          <button className="text-2xl font-medium transition ease-out hover:scale-125  text-white" onClick={()=>setUnits("imperial")}>
            °F
          </button>
        </div>
      </div>
    </>
  );
};

export default Inputs;
