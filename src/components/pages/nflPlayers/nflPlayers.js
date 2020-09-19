import React from 'react';

import Players from '../../../images/nflPlayers.png';
import './nflPlayers.scss';

class nflPlayers extends React.Component {
  render() {
    return (
      <div className="players-page">
        <img src={Players} alt="" />
      </div>
    );
  }
}

export default nflPlayers;
