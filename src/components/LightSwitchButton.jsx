/* LightSwitchButton.jsx */
import React from "react";

const LightSwitchButton = (props) => {
  const { lightStatus, toggleLightStatus } = props;

  return (
    <button 
    onClick={() => toggleLightStatus()}
    className="LightSwitchButton"
    >
      {lightStatus === "on" && (
        <span className="on">
          <i>💡</i>I'm ON!
        </span>
      )}
      {lightStatus === "off" && (
        <span className="off">
          <i>💡</i>I'm OFF!
        </span>
      )}
    </button>
  );
};

export default LightSwitchButton;