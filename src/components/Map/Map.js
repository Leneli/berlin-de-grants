import React from 'react';
import PropTypes from 'prop-types';
import { MAP_KEY } from '../../constants/keys';
import '../../styles/map.scss';

const propTypes = {
  address: PropTypes.string,
};

const defaultProps = {
  address: '',
};

const loadMap = () => {};

const Map = ({ address }) => {
  return (
    <div className="map-wrapper">
      Map is here {address}
    </div>
  );
};

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Map;
