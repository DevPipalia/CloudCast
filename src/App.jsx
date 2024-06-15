import React, { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import Time from "./components/Time";
import Temparature from "./components/Temparature";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/WeatherService";
import getFormattedWeatherData from "./services/WeatherService";

function App() {
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({...query,units}).then((data) => {
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground=()=>{
    if(!weather) return "from-cyan-600 to-blue-700"
    const threshold=units==="metric"?20:60
    if(weather.temp<=threshold) return "from-cyan-600 to-blue-700"
    return "from-yellow-600 to-orange-700"
  }

  return (
    <>
      <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <TopButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery} setUnits={setUnits}/>
        {weather && (
          <>
            <Time weather={weather}/>
            <Temparature weather={weather}/>
            <Forecast title='3 hour step forecast' data={weather.hourly}/>
            <Forecast title='daily forecast' data={weather.daily}/>
          </>
        )}
      </div>
    </>
  );
}

export default App;
