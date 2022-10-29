import axios from "axios";
import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";

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
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 1) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                    })}
                </div>
            </div>
            );

    } else {
        let apiKey = "73o7172cea30e38a3304ab4ff8bt0abf";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
        return null
    }
}