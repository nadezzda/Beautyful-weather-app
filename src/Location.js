import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./timePlusLocation.css";

export default function Location(props) {
    return(
        <div className="current-location">
            <div className="loc-icon">
                <FontAwesomeIcon icon={faLocationDot} id="location-icon" />
            </div>
            <div className="loc-text">
                <p className="location-city-name">{props.data.city}</p><p> , </p><p className="location-country-name">{props.data.country}</p>
            </div>
        </div>
    );
}