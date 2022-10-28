import React, { useState} from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFarenheit(event) {
        event.preventDefault();
        setUnit("farenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function convertToFarenheit() {
        return (props.celsius * 9) / 5 + 32;
    }

    if(unit === "celsius") {
        return (
            <div className="temperature">
                <p className="temp">{Math.round(props.celsius)}</p><p className="units"> °C | <a href="/" onClick={showFarenheit}>°F</a></p>
            </div>
        );
    } else {
        return (
            <div className="temperature">
                <p className="temp">{Math.round(convertToFarenheit())}</p><p className="units"> °F | <a href="/" onClick={showCelsius}>°C</a></p>
            </div>
        );
    }
}