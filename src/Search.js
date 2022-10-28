import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import Current from "./Current";
import axios from "axios";

export default function Search(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    const apiKey = "73o7172cea30e38a3304ab4ff8bt0abf";

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            city: response.data.city,
            country: response.data.country,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            date: new Date(response.data.time * 1000),
            feel: response.data.temperature.feels_like,

        });
    }

    function search() {
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);
    }
    
    function cityChange(event){
        setCity(event.target.value);
    }
    function cityByCoords(event){
        event.preventDefault();
        function handlePosition(position){
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
          }
        navigator.geolocation.getCurrentPosition(handlePosition)
        }

    if(weatherData.ready) {
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
                        <button className="current-loc-btn" onClick={cityByCoords}>
                            <FontAwesomeIcon icon={faLocationCrosshairs} id="search-loc-icon" />
                        </button>
                    </div>
                </div>
                <div className="Info">
                    <Current data={weatherData} />
                    {/*forecast*/}
                </div>
            </div>
        );
    } else {
        search();
        return (
          "Loading..."  
        );
    } 
}