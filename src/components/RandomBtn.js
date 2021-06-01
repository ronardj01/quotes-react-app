import React, { Component } from 'react';

const RandomBtn = ({whenClick}) => {
  return (
    <button onClick={whenClick} type='button' className="btn btn-primary">Random Quote</button>
  )
};

export default RandomBtn;