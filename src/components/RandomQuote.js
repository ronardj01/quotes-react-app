import React, { Component } from 'react';

const RandomQuote = ({ result }) => {
  console.log(result)
  return (
  <div className ='container'>
    <div class="card m-5">
      <div class="card-header">
        Quote
        </div>
      <div class="card-body">
        <p class="card-text">{`"${result[0]}"`}</p>
        <h5 class="card-title">{result[1]}</h5>
      </div>
    </div>
    <button type='button' className="btn btn-primary">Random Quote</button>
  </div>
  )
};

export default RandomQuote;