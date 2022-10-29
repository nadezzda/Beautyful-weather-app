import axios from "axios";
import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Forecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
    setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {

        return (
            <div className="weather-forecast">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 2) {
                        return (
                            <div className="daily" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                    })}
            </div>
            );

    } else {
        let apiKey = "73o7172cea30e38a3304ab4ff8bt0abf";
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
        return null
    }
}