import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMyPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/myPlayers.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getMyPlayer = (myPlayerId) => axios.get(`${baseUrl}/myPlayers/${myPlayerId}.json`);

const createMyPlayer = (newMyPlayer) => axios.post(`${baseUrl}/myPlayers.json`, newMyPlayer);

const deleteMyPlayer = (myPlayerId) => axios.delete(`${baseUrl}/myPlayers/${myPlayerId}.json`);

const updateMyPlayer = (myPlayerId, updatedMyPlayer) => axios.put(`${baseUrl}/myPlayers/${myPlayerId}.json`, updatedMyPlayer);

export default {
  getMyPlayersByUid,
  getMyPlayer,
  createMyPlayer,
  deleteMyPlayer,
  updateMyPlayer,
};
