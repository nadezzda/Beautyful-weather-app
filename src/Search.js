import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import Current from "./Current";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";


export default function Search(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    const apiKey = "73o7172cea30e38a3304ab4ff8bt0abf";
    const [query, setQuery] = useState("few clouds");
    let clearSky = ["https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2344227/pexels-photo-2344227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let fewClouds = ["https://images.pexels.com/photos/13327992/pexels-photo-13327992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/14023028/pexels-photo-14023028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let scatteredClouds = ["https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let brokenClouds = ["https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/3789871/pexels-photo-3789871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let showerRain = ["https://images.pexels.com/photos/2948271/pexels-photo-2948271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let rain = ["https://images.pexels.com/photos/4122226/pexels-photo-4122226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let thunderstorm = ["https://images.pexels.com/photos/2226190/pexels-photo-2226190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/258173/pexels-photo-258173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let snow = ["https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/954710/pexels-photo-954710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let mist = ["https://images.pexels.com/photos/1743392/pexels-photo-1743392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];



    function handleResponse(response) {
        setQuery(response.data.condition.description);
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
        navigator.geolocation.getCurrentPosition(handlePosition);
    }
    
    function changeDescription() {
        if (query === "clear sky") {
            let randomIndex = Math.floor(Math.random() * (clearSky.length - 1)); 
            let image = `url(${clearSky[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        } else if (query === "few clouds") {
            let randomIndex = Math.floor(Math.random() * (fewClouds.length - 1)); 
            let image = `url(${fewClouds[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        } else if (query === "scattered clouds") {
            let randomIndex = Math.floor(Math.random() * (scatteredClouds.length - 1)); 
            let image = `url(${scatteredClouds[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        } else if (query === "broken clouds") {
            let randomIndex = Math.floor(Math.random() * (brokenClouds.length - 1)); 
            let image = `url(${brokenClouds[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        }  else if (query === "shower rain") {
            let randomIndex = Math.floor(Math.random() * (showerRain.length - 1)); 
            let image = `url(${showerRain[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        } else if (query === "rain") {
            let randomIndex = Math.floor(Math.random() * (rain.length - 1)); 
            let image = `url(${rain[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        } else if (query === "thunderstorm") {
            let randomIndex = Math.floor(Math.random() * (thunderstorm.length - 1)); 
            let image = `url(${thunderstorm[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        } else if (query === "snow") {
            let randomIndex = Math.floor(Math.random() * (snow.length - 1)); 
            let image = `url(${snow[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        } else if (query === "mist") {
            let randomIndex = Math.floor(Math.random() * (mist.length - 1)); 
            let image = `url(${mist[randomIndex]})`;
            document.querySelector('.Search').style['background-image'] = image;
        } else {
            let image = `url("https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`;
            document.querySelector('.Search').style['background-image'] = image;
        }
    }
    changeDescription();

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
                    <WeatherForecast coordinates={weatherData.coordinates} />
                </div>
            </div>
        );
    } else {
        search();
        return (
            "Load.."
        );
    } 
}