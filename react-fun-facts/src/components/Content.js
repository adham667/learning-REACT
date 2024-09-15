import React from "react";


export default function Content(props){
    const styles ={
        "background-color": props.mode ? "#282d35" : "white",
        "color" : props.mode ? "#f5f5f5" : "black"
    }
    return(
        <div className="container" style={styles}>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke </li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}