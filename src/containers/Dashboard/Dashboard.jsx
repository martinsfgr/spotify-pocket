import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Player } from '../';

import './Dashboard.scss';

const Dashboard = ({ children }) => (
  <div 
    className="dashboard"
    data-testid="dashboard"
    style={{paddingBottom: `${playerHeight}px`}}
  >
    {children}

    <Player />
  </div>
);

Dashboard.defaultProps = {
  children: [],
}

Dashboard.PropTypes = {
  children: PropTypes.node,
}

export default Dashboard;
