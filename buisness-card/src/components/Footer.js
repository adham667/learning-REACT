import React from "react";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
export default function Footer(){
    return (
        <div className="footer">
            <FaSquareTwitter />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaGithubSquare />
        </div>
    )
}