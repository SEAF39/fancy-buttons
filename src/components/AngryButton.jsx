/* AngryButton.jsx */
import React, { useState } from 'react';

function AngryButton(props) {
  const [anger, setAnger] = useState(0);

  const handleClick = () => {
    setAnger(anger < 1 ? anger + 0.1 : 0);
  };

  return (
    <button
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      className="AngryButton"
      onClick={handleClick}
    >
      {anger < 1 && <span>{props.message}</span>}
      {anger > 1 && <span>{props.angryMessage}</span>}
    </button>
  );
}

export default AngryButton;
