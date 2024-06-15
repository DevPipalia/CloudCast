import React from "react"
import TopButtons from "./components/TopButtons"
import Inputs from "./components/Inputs"
import Time from "./components/Time"
import Temparature from "./components/Temparature"
import Forecast from "./components/Forecast"
import getWeatherData from "./services/WeatherService"
import getFormattedWeatherData from "./services/WeatherService"


function App() {
  const getWeather=async()=>{
    const data = await getFormattedWeatherData({q:"berlin"})
    console.log(data)
  }

  getWeather();
  return (
    <>
      <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
        <TopButtons/>
        <Inputs/>
        <Time/>
        <Temparature/>
        <Forecast/>
      </div>
    </>
  )
}

export default App
