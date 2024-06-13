import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunset, GiSunrise } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Temparature = () => {

    const horizontalDetails=[
        {
            id:1,
            Icon:GiSunrise,
            Title:"Sunrise",
            Value:"02:30 AM"
        },
        {
            id:2,
            Icon:GiSunset,
            Title:"Sunset",
            Value:"18:30 PM"
        },{
            id:3,
            Icon:MdKeyboardArrowUp,
            Title:"High",
            Value:"37"
        },{
            id:4,
            Icon:MdKeyboardArrowDown,
            Title:"SLow",
            Value:"7"
        },
    ]



  return (
    <>
      <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
          <p>Rain</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-20"
          />
          <p className="text-5xl  text-white">34°</p>
          <div className="flex flex-col space-y-3 items-start">
            <div className="flex font-light justify-center text-sm items-center text-white ">
              <FaThermometerEmpty size={18} className="mr-1" color="white" />
              Real Feel: <span className="font-medium ml-1">35°C</span>
            </div>
            <div className="flex font-light justify-center text-sm items-center  text-white">
              <BiSolidDropletHalf size={18} className="mr-1" color="white" />
              Humidity: <span className="font-medium ml-1">350%</span>
            </div>
            <div className="flex font-light justify-center text-sm items-center  text-white">
              <FiWind size={18} className="mr-1" color="white"  />
              Wind: <span className="font-medium ml-1">11km/h</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3 text-white ">

        {
            horizontalDetails.map(({id,Icon,Title,Value})=>(
                <div key={id} className="flex flex-row items-center">
                    <Icon size={30}/>
                    <p className="font-light ml-1">
                        {`${Title}: `}
                        <span className="font-medium ml-1">{Value}</span>
                    </p>
            </div>

            ))
        }
            

        </div>

      </div>
    </>
  );
};

export default Temparature;
