import React, { useState } from 'react';
import buttons from '../api/buttons';

const ButtonContainer = ({ handleClick }) => {
  const [activeButton, setActiveButton] = useState(buttons[0].type); 

  const handleButtonClick = (type) => {
    handleClick(type);
    setActiveButton(type);
  };

  return (
    <div className='d-flex gap-3 align-items-center justify-content-center ' id='button-container'>
      {buttons.map((button) => (
        <button
          className={`btn ${activeButton === button.type ? 'btn-success' : 'btn-danger'}`}
          key={button.name}
          onClick={() => handleButtonClick(button.type)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
