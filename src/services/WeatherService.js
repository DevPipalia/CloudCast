import { DateTime } from "luxon";

const API_KEY = "1daa00d70e9666711e68413302f1806f";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const iconURLFromCode=(icon)=> `http://openweathermap.org/img/wn/${icon}@2x.png`



const formatToLocalTime = (
  secs,
  offset,
  format = "cccc,dd LLL yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const {main:details,icon} = weather[0]
  const formattedLocalTime=formatToLocalTime(dt,timezone)

  return {
  temp,
  feels_like,
  temp_min,
  temp_max,
  humidity,
  name,
  country,
  sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
  sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'),
  details,
  icon:iconURLFromCode(icon),
  formattedLocalTime,
};

};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);
  
  return {...formattedCurrentWeather}
};

export default getFormattedWeatherData;
