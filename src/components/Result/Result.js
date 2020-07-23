import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grant } from '../Grant';
import { Select } from '../Select';
import { FormChild } from '../Form';
import { SORT } from '../../constants';
import getGrants from '../../api/grants'
import '../../styles/result.scss';

const propTypes = {
  q: PropTypes.object,
  orderName: PropTypes.string,
  orderValue: PropTypes.string,
  onOrderSelect: PropTypes.func,
};

const defaultProps = {
  q: {},
  orderName: '',
  orderValue: '',
  onOrderSelect: () => {},
};

// TODO: Pagination

const Result = props => {
  const { q, orderName, orderValue, onOrderSelect } = props;
  const [grants, setGrants] = useState([]);
  const [counter, setCounter] = useState(0);
  const [perPage, setPerPage] = useState(0);

  console.log('>>> Q', q);
  console.log('>>> ...', new URLSearchParams(q).toString());

  useEffect(() => {
    getGrants()
      .then(response => {
        const { grants, counter, perPage } = response;

        setGrants(grants);
        setCounter(counter);
        setPerPage(perPage);
      })
      .catch(error => console.error(`Error in getGrants(): ${error}`));
  }, [])

  return (
    <div className="result-wrapper">
      <h3>Ergebnisse der Suche - Zuwendungsdatenbank</h3>
      <p>Ihre Suche <b>ergab {counter} Ergebnisse</b>. Um weniger Treffer zu erhalten können Sie die Suche über die Suchmaske weiter einschränken.</p>
          
      <FormChild label="Sortieren nach">
        <Select
          list={SORT}
          name={orderName}
          value={orderValue}
          onChange={onOrderSelect}
        />
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
