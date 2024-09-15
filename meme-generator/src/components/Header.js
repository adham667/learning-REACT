import React from 'react'
import trollface from '../troll-face-poster.png'
export default function Header() {
return (
    <div className='header'>
        <img src={trollface}/>
        <h3>Meme Generator</h3>
    </div>
)
}
