import React from 'react';

import myPlayersData from '../../../helpers/data/myPlayersData';

class EditMyPlayer extends React.Component {
  state = {
    myPlayer: {
      imageUrl: '',
      jersey: '',
      displayName: '',
      team: '',
      position: '',
    },
  }

  componentDidMount() {
    myPlayersData.getMyPlayer(this.props.match.params.myPlayerId)
      .then((res) => {
        const myPlayer = res.data;
        this.setState({ myPlayer });
      })
      .catch((err) => console.error(err));
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    const { myPlayer } = this.state;
    myPlayer.imageUrl = e.target.value;
    this.setState({ myPlayer });
  }

  changeJerseyEvent = (e) => {
    e.preventDefault();
    const { myPlayer } = this.state;
    myPlayer.jersey = e.target.value;
    this.setState({ myPlayer });
  }

  changeDisplayNameEvent = (e) => {
    e.preventDefault();
    const { myPlayer } = this.state;
    myPlayer.displayName = e.target.value;
    this.setState({ myPlayer });
  }

  changeTeamEvent = (e) => {
    e.preventDefault();
    const { myPlayer } = this.state;
    myPlayer.team = e.target.value;
    this.setState({ myPlayer });
  }

  changePositionEvent = (e) => {
    e.preventDefault();
    const { myPlayer } = this.state;
    myPlayer.position = e.target.value;
    this.setState({ myPlayer });
  }

  updateMyPlayer = (e) => {
    e.preventDefault();
    const { myPlayerId } = this.props.match.params;

    myPlayersData
      .updateMyPlayer(myPlayerId, this.state.myPlayer)
      .then(() => {
        this.props.history.push(`/myteam/${myPlayerId}`);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const {
      imageUrl,
      jersey,
      displayName,
      team,
      position,
    } = this.state.myPlayer;

    return (
      <div className="Locker-page">
      <h1>Locker Room</h1>
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
            <button className="btn btn-success" onClick={this.updateMyPlayer}>Update Player</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditMyPlayer;
