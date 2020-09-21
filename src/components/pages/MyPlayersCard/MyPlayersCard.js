import React from 'react';

import './MyPlayersCard.scss';

const MyPlayersCard = (props) => {
  const { myPlayer } = props;

  return (
    <div className="MyPlayersCard" id={myPlayer.id}>
      <div className="card" style={{ width: '20rem' }}>
        <img src={myPlayer.imageUrl} alt="" />
      <div className="card-body">
        <h2 className="card-title">{ myPlayer.displayName }</h2>
        <p className="card-text">Jersey: #{ myPlayer.jersey }</p>
        <p className="card-text">Team: { myPlayer.team }</p>
        <p className="card-text">Position: { myPlayer.position }</p>
        <div className="Start-Remove-btn">
          <button type="button" className="btn btn-success">Start</button>
          <button type="button" className="btn btn-danger" onClick={() => { props.deletePlayer(myPlayer.id); }}>Remove</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyPlayersCard;
