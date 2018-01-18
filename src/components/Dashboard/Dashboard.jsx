import React from 'react';
import {Link} from 'react-router-dom';
import RequestContainer from './RequestContainer/RequestContainer';
import './dashboard.scss';

const Dashboard = () => (
  <div className="dashboard">
    <div className="row intro-header">
      <div className="col-sm-12 col-xs-12 col-md-10 col-lg-10 heading">
        <h1>Request Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          autem harum iste laboriosam obcaecati odio, odit pariatur, praesentium
          quam quia quidem quo recusandae repellat saepe sequi voluptatibus?
          Atque, quas.
        </p>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-2 col-lg-2 header-actions">
        <Link to="/requests/new">
          <button>New Request</button>
        </Link>
      </div>
    </div>
    <RequestContainer/>
  </div>
);

export default Dashboard;
