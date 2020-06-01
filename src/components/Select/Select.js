import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/select.scss';

const ALL = '-- ALL --';

const propTypes = {
  list: PropTypes.array,
  hasAll: PropTypes.bool,
  noSelected: PropTypes.bool,
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  list: [],
  hasAll: false,
  noSelected: false,
  selectedId: '',
};

const Select = props => {
  const { list, hasAll, noSelected, selectedId } = props;
  const selected = selectedId ? list.find(option => option.id === selectedId) : undefined;
  const [value, setValue] = useState(noSelected ? '' : selected ? selected.value : ALL);
  const [visibleOptions, setVisibleOptions] = useState(false);

  // TODO: render?
  // TODO: проверить selectedId и noSelected
  // FIXME: fix list visibility methods

  return (
    <div className="select">
      <input
        type="text"
        className={`input ${visibleOptions && 'select-input'}`}
        value={value}
        onFocus={() => { setVisibleOptions(true) }}
        onClick={() => { setVisibleOptions(!visibleOptions) }}
      />

      {visibleOptions && (
        <div className="options">
          {hasAll && <div className="option" onClick={() => setValue(ALL)}>{ALL}-</div>}

          {list.map((option, index) => {
            return (
              <div
                key={`option_${index}`}
                className="option"
                onClick={() => { setValue(option.value) }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
