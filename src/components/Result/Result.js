import React from 'react';
import PropTypes from 'prop-types';
import { Grant } from '../Grant';
import { Select } from '../Select';
import { FormChild } from '../Form';
import '../../styles/result.scss';

const propTypes = {
  visibility: PropTypes.bool,
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  perPage: PropTypes.number,
  grants: PropTypes.array,
};

const defaultProps = {
  visibility: false,
  counter: 0,
  perPage: 0,
  grants: [],
};

// TODO: Pagination

const Result = props => {
  const { visibility, counter, grants } = props;

  if (!visibility) return null;

  return (
    <div className="result-wrapper">
      <h3>Ergebnisse der Suche - Zuwendungsdatenbank</h3>
      <p>Ihre Suche <b>ergab {counter} Ergebnisse</b>. Um weniger Treffer zu erhalten können Sie die Suche über die Suchmaske weiter einschränken.</p>
          
      <FormChild label="Sortieren nach">
        <Select />
      </FormChild>
          
      <div className="grants-wrapper">
        {grants.map(grant => (
          <Grant
            key={grant.id}
            id={grant.id}
            empfaengerid={grant.empfaengerid}
            name={grant.name}
            geber={grant.geber}
            art={grant.art}
            jahr={grant.jahr}
            anschrift={grant.anschrift}
            politikbereich={grant.politikbereich}
            zweck={grant.zweck}
            betrag={grant.betrag}
          />
        ))}
      </div>
    </div>
  );
};

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

export default Result;
