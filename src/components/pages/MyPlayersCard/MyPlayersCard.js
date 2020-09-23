import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import myPlayerShape from '../../../helpers/propz/myPlayerShape';

import './MyPlayersCard.scss';

const MyPlayersCard = (props) => {
  const { myPlayer, deleteMyPlayer } = props;

  const editLink = `/edit/${myPlayer.id}`;

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
            <Link to={editLink}>
            <button type="button" className="btn btn-success">Change</button>
            </Link>
            <button type="button" className="btn btn-danger" onClick={() => { deleteMyPlayer(myPlayer.id); }}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyPlayersCard.propTypes = {
  myPlayer: myPlayerShape.myPlayerShape,
  deleteMyPlayer: PropTypes.func.isRequired,
};

export default MyPlayersCard;
