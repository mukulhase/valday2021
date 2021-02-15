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
          height: "100%",
          width: "50vw"
        }} >
          <div className={progress > 0/7 ? "poem" : "hidden"} >My dreamer <br></br> </div>
          <div className={progress > 1/7 ? "poem" : "hidden"} >My companion <br></br> </div>
          <div className={progress > 2/7 ? "poem" : "hidden"} >My lana <br></br> </div>
          <div className={progress > 3/7 ? "poem" : "hidden"} >My chipmunk <br></br> </div>
          <div className={progress > 4/7 ? "poem" : "hidden"} >My cuddle bud <br></br> </div>
          <div className={progress > 5/7 ? "poem" : "hidden"} >My kitty cat <br></br> </div>
          <div className={progress > 6/7 ? "poem" : "hidden"} >I love you ❤️</div>
        </div>
        </div>
        
        </div>)}
      </Scene>
    </Controller>
      
    </div>
  );
}

export default App;
