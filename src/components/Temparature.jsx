import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunset, GiSunrise } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Temparature = ({weather:{details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like}}) => {

    const horizontalDetails=[
        {
            id:1,
            Icon:GiSunrise,
            Title:"Sunrise",
            Value:sunrise
        },
        {
            id:2,
            Icon:GiSunset,
            Title:"Sunset",
            Value:sunset
        },{
            id:3,
            Icon:MdKeyboardArrowUp,
            Title:"High",
            Value:`${temp_max.toFixed()}°`
        },{
            id:4,
            Icon:MdKeyboardArrowDown,
            Title:"Low",
            Value:`${temp_min.toFixed()}°`
        },
    ]



  return (
    <>
      <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
          <p>{details}</p>
        </div>
        <div className="flex items-center justify-between py-3 mx-5 mb-6">
          <img
            src={icon}
            className="w-20"
          />
          <p className="text-5xl  text-white">{`${temp.toFixed()}°`}</p>
          <div className="flex flex-col space-y-3 items-start">
            <div className="flex font-light justify-center text-sm items-center text-white ">
              <FaThermometerEmpty size={18} className="mr-1" color="white" />
              Real Feel: <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
            </div>
            <div className="flex font-light justify-center text-sm items-center  text-white">
              <BiSolidDropletHalf size={18} className="mr-1" color="white" />
              Humidity: <span className="font-medium ml-1">{`${humidity.toFixed()}°`}</span>
            </div>
            <div className="flex font-light justify-center text-sm items-center  text-white">
              <FiWind size={18} className="mr-1" color="white"  />
              Wind: <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3 mb-6 text-white ">

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
