import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.string,
};

const defaultProps = {
  label: '',
  tooltip: '',
};

const FormChild = props => {
  const { label, tooltip, children } = props;

  if (label) {
    return (
      <label>
        <span className="form-label">{label}: ({tooltip})</span>
        {children}
      </label>
    );
  }

  return (
    <div>{children}</div>
  );
};

FormChild.propTypes = propTypes;
FormChild.defaultProps = defaultProps;

export default FormChild;
