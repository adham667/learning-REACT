import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Location(props){
    return (
        <div>
            <div className="card">
                <img src={props.imageUrl}/>
                <div className="info">
                    <div className="loc">
                        <FaLocationDot />
                        <span className="location">{props.location}</span>
                        <a href={props.googleMapsUrl}>View on google maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <span className="date">{props.startDate}-{props.endDate}</span>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

// {
//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"
//     },