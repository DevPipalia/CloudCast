import React from "react";

const Forecast = ({title,data}) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-start mt-6 text-white ">
          <p className="font-medium uppercase">{title} </p>
        </div>
        <hr className="my-1 "></hr>
        <div className="flex items-center justify-between">
          {data.map((d, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p className="font-light text-sm text-white">{d.title}</p>
              <img
                src={d.icon}
                className="w-12 m-1"
              />
              <p className="font-medium text-white">{`${d.temp.toFixed()}°`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
