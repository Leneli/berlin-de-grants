import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Map } from '../Map';
import '../../styles/grant.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  empfaengerid: PropTypes.string.isRequired,
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
  const [showMap, setShowMap] = useState(false);
  const { name, id, empfaengerid, geber, art, jahr, anschrift, politikbereich, zweck, betrag } = props;

  // TODO: styles for clicable item (address)

  return (
    <div className="grant" id={id} empfaenger={empfaengerid}>
      {grantLine('Name', name)}
      {grantLine('Geber', geber)}
      {grantLine('Art', art)}
      {grantLine('Jahr', jahr)}
      <div onClick={() => setShowMap(!showMap)}>{grantLine('Anschrift', anschrift)}</div>
      {grantLine('Politikbereich', politikbereich)}
      {grantLine('Zweck', zweck)}
      {grantLine('Betrag', betrag)}

      {showMap && (
        <div>
          <Map />
        </div>
      )}
    </div>
  );
};

Grant.propTypes = propTypes;

export default Grant;
