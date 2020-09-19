import React from 'react';

import myPlayersShape from '../../../helpers/propz/myPlayersShape';

import './MyPlayersCard.scss';

class MyPlayersCard extends React.Component {
  static propTypes = {
    myPlayer: myPlayersShape.myPlayersShape,
  }

  render() {
    const { myPlayer } = this.props;

    return (
      <div className="MyPlayersCard" id={myPlayer.id}>
        <div className="card" style={{ width: '20rem' }}>
          <img src={myPlayer.imageUrl} alt="" />
        <div className="card-body">
          <h2 className="card-title">{ myPlayer.displayName }</h2>
          <p className="card-text">Jersey: #{ myPlayer.jersey }</p>
          <p className="card-text">Team: { myPlayer.team }</p>
          <p className="card-text">Position: { myPlayer.position }</p>
          <button type="button" className="btn btn-success">Start</button>
          <button type="button" className="btn btn-danger">Waive</button>
        </div>
      </div>
      </div>
    );
  }
}

export default MyPlayersCard;
