import React from 'react';

const Card = () => (
  <div className="card">
    <div className="row card--header">
      <div className="col-xs-12 col-sm-12 col-md-7 col-md-7 col-lg-8 item-details">
        <div className="item-category">
          Entertainment
          <strong>Dinner with client</strong>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <small className="item-date">15/01/1992</small>
      </div>
    </div>
    <div className="card--body">
      <div className="item-price"> $100,000 X 10</div>
      <div className="item-category">Requested by Tarun, APAC</div>
    </div>
  </div>
);

export default Card;
