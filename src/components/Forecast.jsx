import React from "react";

const Forecast = () => {
  const data = [1, 2, 3, 4];
  return (
    <>
      <div>
        <div className="flex items-center justify-start mt-6 text-white ">
          <p className="font-medium uppercase">3 hour step forecast </p>
        </div>
        <hr className="my-1 "></hr>
        <div className="flex items-center justify-between">
          {data.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p className="font-light text-sm text-white">WED</p>
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                className="w-12 m-1"
              />
              <p className="font-medium text-white">12C</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
