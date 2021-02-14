import React from 'react';
import './App.css';
import svg from './drawing.svg';
import ReactVivus from './vivus';
import { Controller, Scene } from 'react-scrollmagic';

function App() {
  return (
    <div className="App">
      <Controller>
      <Scene duration={6000} triggerHook="onLeave" pin>
      {(progress: number) => (
        <div>
        <div style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
          <ReactVivus
              progress = {progress}
              options = {{
                file: svg,
                type: "oneByOne"
              }}
              style = {{width:"100%", height:"100%", opacity: progress}}
          />
          <div className="sign" style={{
          position: "absolute",
          top: 0,
          left: "50vw",
          textAlign: "center",
          verticalAlign: "center",
          height: "100%"
        }} >
          <div className={progress > 0/6 ? "poem" : "hidden"} >Second choice <br></br> </div>
          <div className={progress > 1/6 ? "poem" : "hidden"} >Is never noice <br></br> </div>
          <div className={progress > 2/6 ? "poem" : "hidden"} >But with great poise <br></br> </div>
          <div className={progress > 3/6 ? "poem" : "hidden"} >Your babe enjoys <br></br> </div>
          <div className={progress > 4/6 ? "poem" : "hidden"} >Cause me and the bois <br></br> </div>
          <div className={progress > 5/6 ? "poem" : "hidden"} >Think we are really <i>toit</i> ❤️</div>
        </div>
        </div>
        
        </div>)}
      </Scene>
    </Controller>
      
    </div>
  );
}

export default App;
