import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMyPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/myPlayers.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getPlayers = (playerId) => axios.get(`${baseUrl}/players/${playerId}.json`);

export default { getMyPlayersByUid, getPlayers };
