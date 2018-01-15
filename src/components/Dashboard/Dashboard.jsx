import React from 'react';
import RequestContainer from './RequestContainer/RequestContainer';
import './dashboard.scss';

const Dashboard = () => (
  <div className="dashboard">
    <div className="intro-header">
      <div className="heading">
        <h1>Request Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          autem harum iste laboriosam obcaecati odio, odit pariatur, praesentium
          quam quia quidem quo recusandae repellat saepe sequi voluptatibus?
          Atque, quas.
        </p>
      </div>
      <div className="header-actions">
        <button>New Request</button>
      </div>
    </div>
    <RequestContainer />
  </div>
);

export default Dashboard;
