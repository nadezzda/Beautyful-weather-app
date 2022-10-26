import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import Current from "./Current";
import axios from "axios";
import Location from "./Location";
import FormattedDate from "./FormattedDate";

export default function Search(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            city: response.data.name,
            country: response.data.sys.country,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
            feel: response.data.main.feels_like,

        });
    }

    function search() {
        const apiKey = "e3d95195ebd5be820d2030b9b1c8249a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);
    }
    
    function cityChange(event){
        setCity(event.target.value);
    }

    return(
        <div className="all">
            <div className="Search">
                <p id="header">The only weather forecast you need</p>
                <div className="form">
                    <form id="search-form" onSubmit={handleSubmit}>
                        <input type="search" placeholder="Enter the city..." className="search-input" onChange={cityChange}/>
                        <button className="search-btn" type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
                        </button>
                    </form>
                    <button className="current-loc-btn">
                        <FontAwesomeIcon icon={faLocationCrosshairs} id="search-loc-icon" />
                    </button>
                </div>
            </div>
            <div className="Info">
                {/* <div className="time">
                    <h2>Last update: </h2>
                    <h2 className="date"><FormattedDate date={weatherData.date} /></h2>
                </div> */}
                <Location data={weatherData} />
                <Current data={weatherData} />
            </div>
        </div>
    );
}