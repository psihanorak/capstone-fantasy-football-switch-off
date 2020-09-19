import React from 'react';

import Stadium from '../../../images/home.png';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <img src={Stadium} alt="" />
      </div>
    );
  }
}

export default Home;
