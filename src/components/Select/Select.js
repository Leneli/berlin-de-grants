import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/select.scss';

const ALL = 'ALL';

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
  const [options, setOptions] = useState(list);
  const [value, setValue] = useState(noSelected ? '' : selected ? selected.value : ALL);
  const [visibleOptions, setVisibleOptions] = useState(false);

  const onChangeInput = e => {
    const value = e.target.value || '';
    const newOptions = [];

    for (let i = 0; i < list.length; i++) {
      const label = list[i].label || '';
      const index = label.toLowerCase().search(value.toLowerCase());
      
      if (index > -1) {
        newOptions.push({
          value: list[i].value,
          label:
            value ?
              label.replace(new RegExp(value, 'i'), `<b>${label.slice(index, index + value.length)}</b>`) :
              label,
        });
      }
    }

    setOptions(newOptions);
    setValue(value);
  };

  const onClickOption = value => {
    setOptions(list);
    setValue(value);
  };

  // TODO: render?
  // TODO: проверить selectedId и noSelected
  // TODO: стили для выбранного элемента (selected)

  return (
    <div className="select">
      <input
        type="text"
        className={`input ${visibleOptions && 'select-input'}`}
        value={value}
        onClick={() => { setVisibleOptions(!visibleOptions) }}
        onChange={onChangeInput}
      />

      {visibleOptions && (
        <div className="options">
          {hasAll && <div className="option" onClick={() => setValue(ALL)}>{ALL}</div>}

          {options.map((option, index) => {
            return (
              <div
                key={`option_${index}`}
                className="option"
                onClick={() => { onClickOption(option.value) }}
                dangerouslySetInnerHTML={{ __html: option.label }}
              ></div>
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
