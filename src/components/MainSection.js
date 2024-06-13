import React from 'react'
import "./MainSection.css";

const MainSection = (
  { weather: {temp, name , country, details, icon}}) => {
  return (
    <>
      <div className="d-flex flex-column pt-3 align-items-center">
        <div className="liveLocation">{name} , {country}</div>
        <div className='temperature'>{Math.round(temp)}°C</div>
      </div>
      <div className="weather d-flex justify-content-evenly align-items-center pb-5">
        <div className='photo'><img src= {`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather' /></div>
        <div className='fs-1'>{details}</div>
        <div className='fs-5'><img src= {`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather' /></div>
      </div>
      <hr/> 
    </>
  )
}
export default MainSection;
