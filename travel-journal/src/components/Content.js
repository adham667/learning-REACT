import React from "react";
import data from "../data";
import Location from "./Location";

export default function Content(){

    let locations = data.map(item => {
        return (<Location {...item} />)
    })
    console.log(locations)
    return (
        <div className="container">
            {locations}
        </div>
    )
}