import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import "./styles/search.css";
import Current from "./Current";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";


export default function Search(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    const apiKey = "73o7172cea30e38a3304ab4ff8bt0abf";
    const [query, setQuery] = useState("few clouds");

    function handleResponse(response) {
        setQuery(response.data.condition.icon);
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
        
    function changeDescription() {
        let map = new Map();
        map.set("clear-sky-day", ["https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/6195041/pexels-photo-6195041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("few-clouds-day", ["https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg", "https://images.pexels.com/photos/86695/sky-clouds-outdoors-scenic-86695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("scattered-clouds-day", ["https://images.pexels.com/photos/4015182/pexels-photo-4015182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/12262726/pexels-photo-12262726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("broken-clouds-day", ["https://images.pexels.com/photos/6334811/pexels-photo-6334811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/10655631/pexels-photo-10655631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("shower-rain-day", ["https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1445335/pexels-photo-1445335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("rain-day", ["https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1445335/pexels-photo-1445335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("thunderstorm-day", ["https://images.pexels.com/photos/2226190/pexels-photo-2226190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/5191952/pexels-photo-5191952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("snow-day", ["https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("mist-day", ["https://images.pexels.com/photos/691031/pexels-photo-691031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        
        map.set("clear-sky-night", ["https://images.pexels.com/photos/6510358/pexels-photo-6510358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/4996846/pexels-photo-4996846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("few-clouds-night", ["https://images.pexels.com/photos/2985923/pexels-photo-2985923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("scattered-clouds-night", ["https://images.pexels.com/photos/2684011/pexels-photo-2684011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2294054/pexels-photo-2294054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("broken-clouds-night", ["https://images.pexels.com/photos/13511276/pexels-photo-13511276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1755680/pexels-photo-1755680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("shower-rain-night", ["https://images.pexels.com/photos/2068411/pexels-photo-2068411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/5989062/pexels-photo-5989062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("rain-night", ["https://images.pexels.com/photos/2068411/pexels-photo-2068411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/5989062/pexels-photo-5989062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("thunderstorm-night", ["https://images.pexels.com/photos/2499846/pexels-photo-2499846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/13223339/pexels-photo-13223339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);
        map.set("snow-night", ["https://images.pexels.com/photos/1717212/pexels-photo-1717212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=800"]);
        map.set("mist-night", ["https://images.pexels.com/photos/7101497/pexels-photo-7101497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/7091540/pexels-photo-7091540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]);

        let el = map.get(query);
     
        function randomNumber() {
            let numb = Math.floor(Math.random() * el.length);
            return numb;
        }
        let image = `url(${el[randomNumber()]})`;
        document.querySelector(".Search").style["background-image"] = image;
    }
        
    

    if(weatherData.ready) {
        return(
            <div className="all">
                <div className="Search">
                    <p id="header">The only weather forecast you need</p>
                    <form id="search-form" onSubmit={handleSubmit}>
                        <input type="search" placeholder="Enter the city..." className="search-input" onChange={cityChange}/>
                        <button className="search-btn" type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
                        </button>
                        <button className="current-loc-btn" onClick={cityByCoords}>
                            <FontAwesomeIcon icon={faLocationCrosshairs} id="search-loc-icon" />
                        </button>
                    </form>
                </div>
                <div className="Info" onLoad={changeDescription}>
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