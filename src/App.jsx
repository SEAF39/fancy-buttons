/* App.App.jsx */

import React from 'react';
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {
  return (
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton message="Don't click me too much!" angryMessage="Rawr!" />
        <CounterButton message="You clicked me" />
        <LightSwitchButton onMessage="I'm on!" offMessage="I'm off!" />
        <TextRepeaterButton text="I like this text" />
      </section>
    </div>
  );
}

export default App;
