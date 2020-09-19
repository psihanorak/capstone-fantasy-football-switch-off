import React from 'react';

import myPlayersShape from '../../../helpers/propz/myPlayersShape';

class MyPlayersCard extends React.Component {
  static propTypes = {
    myPlayer: myPlayersShape.myPlayersShape,
  }

  render() {
    const { myPlayer } = this.props;

    return (
      <div className="MyPlayersCard-container">
        <div className="card myPlayer-card text-white bg-dark mb-3 rounded">
        <div className="card-body">
          <h2 className="card-title">{ myPlayer.displayName }</h2>
          <p className="card-text">Jersey: { myPlayer.jersey }</p>
          <p className="card-text">Team: { myPlayer.team }</p>
          <p className="card-text">Position: { myPlayer.position }</p>
          <button type="button" className="btn btn-secondary">Starter</button>
          <button type="button" className="btn btn-secondary">Wave</button>
        </div>
      </div>
      </div>
    );
  }
}

export default MyPlayersCard;
