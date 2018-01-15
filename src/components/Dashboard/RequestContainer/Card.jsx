import React from 'react';

const Card = () => (
  <div className="card">
    <div className="card--header">
      <div className="item-details">
        <div className="item-category">Entertainment <strong>Dinner with client</strong></div>
      </div>
      <small className="item-date">15/01/1992</small>
    </div>
    <div className="card--body">
      <div className="item-price"> $100,000 X 10</div>
      <div className="item-category">Requested by Tarun, APAC</div>
    </div>
  </div>
);

export default Card;
