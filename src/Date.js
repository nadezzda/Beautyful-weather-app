import React from "react";

export default function FullDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.data.getDay()];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"];
    let month = months[props.data.getMonth()];
    let date = props.data.getDate();

    return(
        <div>
            {day}, {date} {month}
        </div>
    );
}