import React from "react";
import "./styles/current.css";
import Time from "./Time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Temperature from "./Temperature";
import Date from "./Date";

export default function Current(props){
    return(
        <div className="Current">
            <div className="loc-time">
                <div className="current-location">
                    <div className="loc-icon">
                        <FontAwesomeIcon icon={faLocationDot} id="location-icon" />
                    </div>
                    <div className="loc-text">
                        <p className="location-city-name">{props.data.city},</p><p className="location-country-name">{props.data.country}</p>
                    </div>
                </div>
                <Time data={props.data.date} />
            </div>
            <div className="Current-weather-info">
                <div className="general-info">
                    <Date data={props.data.date} />
                    <div className="temp-icon">
                        <Temperature celsius={props.data.temperature} />
                        <img src={props.data.icon} id="icon" alt="weather icon"/>
                    </div>
                </div>
                <div className="other-info">
                    <p id="description">{props.data.description}</p>
                    <p>Humidity: <span id="humidity">{props.data.humidity}</span> %</p>
                    <p>Wind speed: <span id="wind">{props.data.wind}</span> m/s</p>
                    <p>Feels like: <span id="feel">{Math.round(props.data.feel)}</span> °C</p>
                </div>   
            </div>
        </div>
    );
}