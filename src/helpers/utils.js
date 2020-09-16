const convertFirebaseCollection = (data) => {
  const objectCollection = data;
  const arrayCollection = [];

  if (objectCollection) {
    Object.keys(objectCollection).forEach((playerId) => {
      objectCollection[playerId].id = playerId;
      arrayCollection.push(objectCollection[playerId]);
    });
  }
  return arrayCollection;
};

export default { convertFirebaseCollection };
