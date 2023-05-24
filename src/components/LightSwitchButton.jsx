/* LightSwitchButton.jsx */
import React, { useState } from 'react';

function LightSwitchButton(props) {
  const [light, setLight] = useState('off');

  const handleClick = () => {
    setLight(light === 'on' ? 'off' : 'on');
  };

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
      {light === 'on' && <span><i>💡</i> {props.onMessage}</span>}
      {light === 'off' && <span className="off"><i>💡</i> {props.offMessage}</span>}
    </button>
  );
}

export default LightSwitchButton;
