/* TextRepeaterButton.jsx */
import React, { useState } from 'react';

function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];

  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>{props.text}</span>);
  }

  const handleClick = () => {
    setRepetitions(repetitions + 1);
  };

  return (
    <button className="TextRepeaterButton" onClick={handleClick}>
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;
