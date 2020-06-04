import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/select.scss';

const ALL = 'ALL';

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  list: PropTypes.array,
  hasAll: PropTypes.bool,
  noSelected: PropTypes.bool,
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

const defaultProps = {
  value: '',
  placeholder: '',
  list: [],
  hasAll: false,
  noSelected: false,
  selectedId: '',
  onChange: () => {},
};

const Select = props => {
  const { name, value: defValue, placeholder, list, hasAll, noSelected, selectedId, onChange } = props;
  const selected = selectedId ? list.find(option => option.id === selectedId) : undefined;
  const [options, setOptions] = useState(list);
  const [value, setValue] = useState(noSelected ? defValue : selected ? selected.value : ALL);
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
    onChange(name, value);
  };

  const onClickOption = value => {
    setOptions(list);
    setValue(value);
    onChange(name, value);
  };

  const onClickAll = () => {
    setValue(ALL)
    onChange(name);
  };

  console.log('>>> SELECT Name', name);

  // TODO: render?
  // TODO: проверить defValue, placeholder, selectedId и noSelected
  // TODO: стили для выбранного элемента (selected)

  return (
    <div className="select">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={`input ${visibleOptions && 'select-input'}`}
        value={value}
        onClick={() => { setVisibleOptions(!visibleOptions) }}
        onChange={onChangeInput}
      />

      {visibleOptions && (
        <div className="options">
          {hasAll && <div className="option" onClick={onClickAll}>{ALL}</div>}

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
