import React from 'react';
import '../Resources/Button.css'
import writeicon from '../Resources/Assets/writeicon.png'

function Button({ label, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {writeicon && <img src={writeicon} alt="writeicon" className="button-icon" />}
      {label}
    </button>
  );
}

export default Button;