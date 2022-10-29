import React from "react";
// import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    console.log(props)
function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
}
function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
}

function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return( days[day]);
}

   return(
    <div>
    <div className="forecast-day">
                  {day()}   
                </div>
                <div className="forecast-icon">
                {/* <WeatherIcon code={props.data.weather[0].icon} size={36} /> */}
                </div> 
                <div className="forecast-temperature">
                    <span className="forecast-temperature-max">{maxTemp()}</span>
                    <span className="forecast-temperature-min">{minTemp()}</span>
                </div>
    </div>
   ) ;
}