

const API_KEY = "221b81f9429a4e740b4068ebec67d6f7";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};
const formatCurrentWeather = (data) => {

  const {
    weather,
    main: { temp, feels_like, humidity, pressure },
    visibility,
    wind: { speed },
    dt,
    sys: { country},
    name,
    timezone,cod
  } = data;
  const { main: details, icon } = weather[0];

  return { temp, feels_like, humidity, pressure, visibility, name, dt, country, details, icon, speed,timezone,cod};
};

const getFormattedWeatherData = async (searchParams) => {
  try {
    const formattedCurrentWeather = await getWeatherData(
      "weather",
      searchParams
    ).then(formatCurrentWeather);
    return { ...formattedCurrentWeather };
  } catch (error) {
    console.log(error.message);
  } 
};

export default getFormattedWeatherData;