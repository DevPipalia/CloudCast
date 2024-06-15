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

const iconURLFromCode = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

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

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    details,
    icon: iconURLFromCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
    speed
  };
};

const formatForecastWeather = (secs, offset, data) => {
  const hourly = data
    .filter((f) => f.dt > secs)
    .slice(0, 5)
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconURLFromCode(f.weather[0].icon),
      date: f.dt_txt,
    }));

    const currentDate = new Date().getDate();
    const daily = data
      .filter((f) => {
        const forecastDate = new Date(f.dt_txt).getDate();
        return forecastDate !== currentDate;
      })
      .map((f) => ({
        temp: f.main.temp,
        title: formatToLocalTime(f.dt, offset, "ccc"),
        icon: iconURLFromCode(f.weather[0].icon),
        date: f.dt_txt,
      }))
      .filter((f, i, arr) => {
        const forecastDate = new Date(f.date).getDate();
        return i === 0 || forecastDate !== new Date(arr[i - 1].date).getDate();
      });

  return { hourly, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { dt, lat, lon, timezone } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
