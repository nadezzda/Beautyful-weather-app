import React from "react";
import "./current.css";

export default function Current(props){
    return(
        <div className="Current">
            <div className="general-info">
                <strong><p id="temp">21°</p></strong>
                <p id="description">{props.data.description}</p>
                <p id="date">Wednesday 26, Oktober</p>
            </div>
            <div className="other-info">
                <p>Humidity: <span id="humidity">{props.data.humidity}</span></p>
                <p>Wind speed: <span id="wind">{props.data.wind}</span></p>
                <p>Feels like: <span id="feel">15</span>°</p>
            </div>   
        </div>
    );
}