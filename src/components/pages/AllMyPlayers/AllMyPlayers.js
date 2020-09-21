import React from 'react';

import MyPlayersCard from '../MyPlayersCard/MyPlayersCard';

const AllMyPlayers = (props) => {
  const myPlayerCards = (allMyPlayers) => {
    const myPlayerList = allMyPlayers.map((myPlayer) => <MyPlayersCard myPlayer={myPlayer} key={myPlayer.id} />);
    return myPlayerList;
  };

  return (
    <div className="AllMyPlayers">
      {myPlayerCards(props.myPlayers)}
    </div>
  );
};

export default AllMyPlayers;
