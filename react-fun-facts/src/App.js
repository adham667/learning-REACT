import './App.css';
import Header from './components/Header';
import Content from "./components/Content"
import React, {useState} from "react"

function App() {
  const [modeText, setModeText] = useState("Light Mode");
  const [mode, setMode] = useState(false);
  function handleChange(e){
      if(mode){
          setModeText("Light Mode")
          setMode(false);
          document.body.style.backgroundColor= "white";
        }
        else{
          setModeText("Dark Mode")
          setMode(true)
          document.body.style.backgroundColor= "#282d35";
      }
  }

  return (
    <div className="App">
      <Header {...{mode, modeText,handleChange}}/>
    <Content{...{mode}}/>
    </div>
  );
}

export default App;
