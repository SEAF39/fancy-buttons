/* TextRepeaterButton.jsx */
import React, { useState } from 'react';

function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];

  const handleClick = () => {
    setRepetitions(repetitions + 1);
  };


  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>{props.text}I like this text!</span>);
  }

 
  return (
    <button className="TextRepeaterButton" onClick={handleClick}>
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;
