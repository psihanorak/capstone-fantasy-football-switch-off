import React from 'react';

import KidPlayer from '../../../images/kid football player.png';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1>HOME</h1>
        <img src={KidPlayer} alt="youth football player" />
      </div>
    );
  }
}

export default Home;
