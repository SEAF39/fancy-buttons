/* App.App.jsx */

import React, { useState } from 'react';
import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";

function App() {

  const [lightStatus, setLightStatus] = useState("off");
  const toggleLightStatus = () => {
    setLightStatus(lightStatus === "off" ? "on" : "off");
  };
  const dark = (lightStatus === 'off') ? 'dark' : '';
  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton 
          lightStatus={lightStatus} 
          toggleLightStatus={toggleLightStatus}
        />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
