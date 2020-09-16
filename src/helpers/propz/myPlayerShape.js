import PropTypes from 'prop-types';

const myPlayerShape = PropTypes.shape({
  myPlayerId: PropTypes.string.isRequired,
  active: PropTypes.boolean.isRequired,
  jersey: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  fname: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { myPlayerShape };
