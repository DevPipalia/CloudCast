import React from "react";

const Time = ({weather:{formattedLocalTime,name,country}}) => {
  return (
    <>
      <div>
        <div className="flex items-center my-6 justify-center">
          <p className="text-xl font-extralight text-white ">
            {formattedLocalTime}
          </p>
        </div>
        <div className="flex items-center justify-center my-3">
          <p className="text-3xl text-white font-medium">{name},{country}</p>
        </div>
      </div>
    </>
  );
};

export default Time;
