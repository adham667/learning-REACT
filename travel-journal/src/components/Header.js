import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";

export default function Header(){
    return (
        <div className="header">
            <FaGlobeAfrica size={26} className="icon" />
            <h3 className="title" >my travel journal.</h3>
        </div>
    )
}