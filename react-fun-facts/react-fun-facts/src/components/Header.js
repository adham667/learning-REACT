import React from "react"
import image from "../8057863.png"

export default function Header(){
    return (<header >
        <nav className="nav">
                <img src={image} className="logo"></img>
                <h1 className="title">ReactFacts</h1>
        </nav>
    </header>)
    }
