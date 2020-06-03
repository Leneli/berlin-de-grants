import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/grant.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  geber: PropTypes.string.isRequired,
  art: PropTypes.string.isRequired,
  jahr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  anschrift: PropTypes.string.isRequired,
  politikbereich: PropTypes.string.isRequired,
  zweck: PropTypes.string.isRequired,
  betrag: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const grantLine = (label, text) => (
  <div className="grant__line">
    <span className="grant__label">{label}:</span> <span className="grant__text">{text}</span>
  </div>
); 

const Grant = props => {
  const { name, geber, art, jahr, anschrift, politikbereich, zweck, betrag } = props;

  return (
    <div className="grant">
      {grantLine('Name', name)}
      {grantLine('Geber', geber)}
      {grantLine('Art', art)}
      {grantLine('Jahr', jahr)}
      {grantLine('Anschrift', anschrift)}
      {grantLine('Politikbereich', politikbereich)}
      {grantLine('Zweck', zweck)}
      {grantLine('Betrag', betrag)}
    </div>
  );
};

Grant.propTypes = propTypes;

export default Grant;
