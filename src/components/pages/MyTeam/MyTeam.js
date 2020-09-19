import React from 'react';
import authData from '../../../helpers/data/authData';
import myPlayersData from '../../../helpers/data/myPlayersData';

import MyPlayersCard from '../MyPlayersCard/MyPlayersCard';

import MyPlayers from '../../../images/myTeam.png';

import './MyTeam.scss';

class MyTeam extends React.Component {
  state = {
    myPlayers: [],
  }

  getMyPlayers = () => {
    myPlayersData.getMyPlayersByUid(authData.getUid())
      .then((myPlayers) => this.setState({ myPlayers }))
      .catch((err) => console.error('get myPlayers does not work', err));
  }

  componentDidMount() {
    this.getMyPlayers();
  }

  render() {
    const { myPlayers } = this.state;

    const myPlayersCard = myPlayers.map((myPlayer) => <MyPlayersCard key={myPlayer.id} myPlayer={myPlayer} />);

    return (
      <div className="myTeam-page">
        <img src={MyPlayers} alt="" />
        <div>
          { myPlayersCard }
        </div>
      </div>
    );
  }
}

export default MyTeam;
