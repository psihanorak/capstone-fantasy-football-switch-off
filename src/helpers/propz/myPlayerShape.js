import PropTypes from 'prop-types';

const myPlayerShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  jersey: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { myPlayerShape };
