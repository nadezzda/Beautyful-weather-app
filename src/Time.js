import React from "react";

export default function FormattedDate(props){
    let hours = props.data.getHours();
    if (hours < 10){
        hours = `0${hours}`;  
    }
    let minutes = props.data.getMinutes();
    if (minutes < 10){
    minutes = `0${minutes}`;  
    }
    return( 
        <div className="time">
            {hours}:{minutes}
        </div>
    );
}