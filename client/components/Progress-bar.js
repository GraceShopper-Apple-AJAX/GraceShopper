import React from "react";

import './styles/Checkout.css';


const ProgressBar = (props) => {
  const { bgcolor, percentage, label } = props;

  const containerStyles = {
    height: 40,
    width: '80%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 1s ease-in-out',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles} >
      <div style={fillerStyles} id="containerStyle">
        <span style={labelStyles}>{`${label}`}</span>
      </div>
    </div>
  );
};


export default ProgressBar;
