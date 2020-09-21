import React, { useState, useEffect } from 'react';

import AllMyPlayers from '../AllMyPlayers/AllMyPlayers';

import authData from '../../../helpers/data/authData';
import myPlayersData from '../../../helpers/data/myPlayersData';

import './MyTeam.scss';

const MyTeam = (props) => {
  const [myPlayers, setMyPlayers] = useState([]);

  const getMyPlayers = () => {
    myPlayersData.getMyPlayersByUid(authData.getUid())
      .then((res) => setMyPlayers(res))
      .catch((err) => console.error(err));
  };

  useEffect(getMyPlayers, []);

  const deletePlayerEvent = (myPlayerId) => {
    myPlayersData.deletePlayer(myPlayerId)
      .then(() => {
        getMyPlayers();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="MyTeam-page">
      <h1>MY TEAM</h1>
      <div className="AllMyPlayers">
        <AllMyPlayers myPlayers={myPlayers} deletePlayerEvent={deletePlayerEvent} />
      </div>
    </div>
  );
};

export default MyTeam;
