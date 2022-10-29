import React from "react";
import Temperature from "./Temperature";

export default function WeatherForecastDay(props) {
    let date = new Date(props.data.time * 1000);


    function day() {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getDay();
        return( days[day]);
    }
    function month() {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = date.getMonth();
        return( months[month]);    
    }
    function dat() {
        let dat = date.getDate();
        return( dat );
    }

    return(
        <div className="one-day">
            <div className="forecast-temperature-icon">                
                <Temperature celsius={props.data.temperature.day} />
                <img src={props.data.condition.icon_url} id="forecast-icon" alt="weather icon"/>
            </div>
            <div className="forecast-description">
                <p id="forecast-description">{props.data.condition.description}</p>
            </div> 
            <div className="forecast-day">
                {day()} {dat()}, {month()}
            </div>
        </div>
    ) ;
}