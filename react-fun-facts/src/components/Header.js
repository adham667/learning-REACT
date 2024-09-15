import React, {useState} from "react"
import image from "../8057863.png"

export default function Header(props){
    console.log(props)
    const mode= props.mode
    const modeText=props.modeText
    let styles = {
        "background-color":  mode === true ? "#21222a" : "white",
        
    }
    let modeTextstyles = {
        color: mode ? "white" : "black"
    }
    return (<header >
        <nav className="nav" style={styles}>
                <div className="box">
                    <img src={image} className="logo"></img>
                    <h1 className="title">ReactFacts</h1>
                </div>
                <div className="mode">
                <span style={modeTextstyles}>{modeText}</span>
                <div class="dark-mode-switch">
                    <input type="checkbox" id="darkModeToggle" class="dark-mode-checkbox" onChange={props.handleChange}/>
                    <label for="darkModeToggle" class="dark-mode-label"></label>
                </div>
                </div>
        </nav>
    </header>)
    }
