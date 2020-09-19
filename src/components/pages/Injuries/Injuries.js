import React from 'react';

import Injury from '../../../images/injuries.png';
import './Injuries.scss';

class Injuries extends React.Component {
  render() {
    return (
      <div className="injuries-page">
        <img src={Injury} alt="" />
      </div>
    );
  }
}

export default Injuries;
