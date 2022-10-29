import React from "react";

export default function Date(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.data.getDay()];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"];
    let month = months[props.data.getMonth()];
    let date = props.data.getDate();
    let year = props.data.getFullYear();

    return(
        <div className="date">
            {day} {date}, {month} {year}
        </div>
    );
}