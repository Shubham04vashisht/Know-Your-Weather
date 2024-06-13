import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const cities = [
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Bengaluru" },
    { id: 3, name: "Kolkata" },
    { id: 4, name: "London" },
    { id: 5, name: "Tokyo" },
  ];
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };
  return (
    <>
      <div className="cities pt-3 fs-5">
        {cities.map((city) => {
          return (
            <ul key={city.id}>
              <li>
                <a href="#" onClick={() => setQuery({ q: city.name })}>
                  {city.name}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="searchbar px-5 pb-2 d-flex justify-content-around align-items-center">
        <input
          value={city}
          placeholder="Search the city..."
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <a href="#">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={handleSearchClick}
          />
        </a>
        <a href="#">
          <i
            className="fa-solid fa-location-dot"
            onClick={handleLocationClick}
          />
        </a>
      </div>

      <hr />
    </>
  );
};
export default Navbar;
