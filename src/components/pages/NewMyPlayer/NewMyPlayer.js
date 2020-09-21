import React from 'react';

import authData from '../../../helpers/data/authData';
import myPlayersData from '../../../helpers/data/myPlayersData';

import './NewMyPlayer.scss';

class NewMyPlayer extends React.Component {
  state = {
    imageUrl: '',
    jersey: '',
    displayName: '',
    team: '',
    position: '',
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeDisplayNameEvent = (e) => {
    e.preventDefault();
    this.setState({ displayName: e.target.value });
  }

  changeJerseyEvent = (e) => {
    e.preventDefault();
    this.setState({ jersey: e.target.value });
  }

  changeTeamEvent = (e) => {
    e.preventDefault();
    this.setState({ team: e.target.value });
  }

  changePositionEvent = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  addMyPlayerEvent = (e) => {
    e.preventDefault();
    const {
      imageUrl, jersey, displayName, team, position,
    } = this.state;

    const newMyPlayer = {
      imageUrl, jersey, displayName, team, position,
    };
    newMyPlayer.uid = authData.getUid();

    myPlayersData.createMyPlayer(newMyPlayer)
      .then(() => {
        this.props.history.push('/myteam');
      })
      .catch((err) => console.error('create newMyPlayer does not work', err));
  }

  render() {
    const {
      imageUrl,
      jersey,
      displayName,
      team,
      position,
    } = this.state;

    return (
      <div className="NewPlayer-page">
        <h1>NEW PLAYER</h1>
        <div className="NewPlayer-form">
          <form className="col-6 offset-3">
            <div className="form-group">
              <label htmlFor="imageUrl">Player's Image</label>
              <input
              type="text"
              className="form-control"
              id="imageUrl"
              value={imageUrl}
              placeholder="Enter Photo URL Here"
              onChange={this.changeImageUrlEvent} />
            </div>
            <div className="form-group">
              <label htmlFor="displayName">Player's Name</label>
              <input
              type="text"
              className="form-control"
              id="displayName"
              value={displayName}
              placeholder="Input Name Here"
              onChange={this.changeDisplayNameEvent} />
            </div>
            <div className="form-group">
              <label htmlFor="jersey">Player's Jersey #</label>
              <input
              type="text"
              className="form-control"
              id="jersey"
              value={jersey}
              placeholder="Input Jersey #"
              onChange={this.changeJerseyEvent} />
            </div>
            <div className="form-group">
              <label htmlFor="team">Favorite Team</label>
              <select
              className="form-control"
              id="team"
              onChange={this.changeTeamEvent}
              placeholder="Choose your favorite NFL team.">
              <option value={team} defaultValue>Choose Team</option>
              <option>ARI</option>
              <option>ATL</option>
              <option>BAL</option>
              <option>BUF</option>
              <option>CAR</option>
              <option>CHI</option>
              <option>CIN</option>
              <option>CLE</option>
              <option>DAL</option>
              <option>DEN</option>
              <option>DET</option>
              <option>GB</option>
              <option>HOU</option>
              <option>IND</option>
              <option>JAC</option>
              <option>KC</option>
              <option>MIA</option>
              <option>MIN</option>
              <option>NYG</option>
              <option>NYJ</option>
              <option>NE</option>
              <option>NO</option>
              <option>OAK</option>
              <option>PHI</option>
              <option>PIT</option>
              <option>SD</option>
              <option>SF</option>
              <option>SEA</option>
              <option>STL</option>
              <option>TB</option>
              <option>TEN</option>
              <option>WAS</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="position">Player's Position</label>
              <select
              className="form-control"
              id="position"
              onChange={this.changePositionEvent} placeholder="Choose your position.">
              <option value={position} defaultValue>Choose Position</option>
              <option>QB</option>
              <option>RB</option>
              <option>WR</option>
              <option>TE</option>
              <option>K</option>
              <option>DEF</option>
              </select>
            </div>
            <button className="btn btn-success" onClick={this.addMyPlayerEvent}>Add Player</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewMyPlayer;
