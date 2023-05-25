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
       {/*// If anger is less than 1, display a warning message*/}
       {anger < 1 && <span>I'm warning you</span>}
      {/*// If anger is greater than 1, display an angry message*/}
      {anger > 1 && <span>PLEASE STOP:,I WARNED YOU!</span>}
    </button>
  );
}

export default AngryButton;
