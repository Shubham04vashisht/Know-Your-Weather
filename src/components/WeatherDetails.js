import React from "react";
import "./WeatherDetails.css";

const WeatherDetails = ({weather}) => {

  const {feels_like,
    humidity,
    pressure,
    visibility,
    speed} = weather;
  const icons = [
    {
      id: 1,
      name: `${feels_like}°C`,
      subname: "Feels like",
      class: "temperature-high",
      style: "solid",
    },
    {
      id: 2,
      name: `${Math.round(speed)} m/sec`,
      subname: "Wind",
      class: "wind",
      style: "solid",
    },
    {
      id: 3,
      name: `${humidity}%`,
      subname: "Humidity",
      class: "droplet",
      style: "solid",
    },
    {
      id: 4,
      name: `${visibility / 1000} km`,
      subname: "Visibility",
      class: "eye",
      style: "solid",
    },
    {
      id: 5,
      name: `${pressure} hPa`,
      subname: "Air pressure",
      class: "gauge",
      style: "solid",
    },
  ];
  return (
    <>
      <div className="text-center mt-4 mb-2 fw-bold">WEATHER DETAILS</div>
      <div className=" weatherDetails d-flex flex-wrap justify-content-evenly mx-5 mb-3 p-4 details bg-white rounded-3">
        {icons.map((icon) => {
          return (
            <div
              className="d-flex flex-column p-3 m-2 align-items-center"
              key={icon.id}
            >
              <i className={`fa-${icon.style} fa-${icon.class}`} style={{fontSize:"3.5rem"}} />
              <div>{icon.subname}</div>
              <div className="fw-bold">{icon.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeatherDetails;
