import React, {useState, useEffect} from 'react'
export default function Form() {
    const [memes, setMemes] = useState([])
    const [meme , setMeme] = useState({
        toptext:"",
        bottomtext:"",
        url:""
    }); 

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then((res)=>res.json())
        .then((data=>{
            setMemes(data.data.memes)
        }
        ))
        
        
    }, [])

    function handleChange(event){
        const {name, value} = event.target;
        // console.log(event)
        setMeme(prevstate => ({
            ...prevstate,
            [name]:value
        }))
    }

    function handleclick(){
        // console.log(memes);
        
        let item = memes[(Math.floor(Math.random()*memes.length))]
        setMeme(prev => {
            return{
                ...prev,
                url:item.url
            }
        });
    }
return (
    <div className='form'>
        <div className='text'>
            <div className='tinput'>
            <label>Top text</label>
            <input name='toptext' type='text' placeholder='top text' onChange={handleChange}></input>
            </div>
            <div className='tinput'>
            <label>Bottom text</label>
            <input name='bottomtext' type='text' placeholder='bottom text' onChange={handleChange}></input>
            </div>
        </div>
        <button onClick={handleclick}>Get a new meme image 📸</button>
        <div className='meme'>
        <img src={meme.url} alt='meme here'/>
        <h2 className='top'>{meme.toptext}</h2>
        <h2 className='bottom'>{meme.bottomtext}</h2>
        </div>
    </div>
)
}
