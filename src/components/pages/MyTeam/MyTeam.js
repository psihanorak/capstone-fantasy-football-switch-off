import React from 'react';

import authData from '../../../helpers/data/authData';
import myPlayersData from '../../../helpers/data/myPlayersData';

import MyPlayersCard from '../MyPlayersCard/MyPlayersCard';

import './MyTeam.scss';

class MyTeam extends React.Component {
  state = {
    myPlayers: [],
  }

  getMyPlayers = () => {
    myPlayersData.getMyPlayersByUid(authData.getUid())
      .then((myPlayers) => this.setState({ myPlayers }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getMyPlayers();
  }

  deleteMyPlayer = (myPlayerId) => {
    myPlayersData.deleteMyPlayer(myPlayerId)
      .then(() => this.getMyPlayers())
      .catch((err) => console.error(err));
  }

  render() {
    const { myPlayers } = this.state;

    const myPlayersCard = myPlayers.map((myPlayer) => <MyPlayersCard key={myPlayer.id} myPlayer={myPlayer} deleteMyPlayer={this.deleteMyPlayer} />);

    return (
      <div className="MyTeam-page">
        <h1>MY TEAM</h1>
        <div className="MyPlayers">
          {myPlayersCard}
        </div>
      </div>
    );
  }
}

export default MyTeam;
