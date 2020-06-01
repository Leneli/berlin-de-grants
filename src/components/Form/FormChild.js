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

// TODO: tooltip component

const FormChild = props => {
  const { label, tooltip, children } = props;

  if (label) {
    return (
      <label className="form-child-wrapper">
        <span className="form-label">{label}:&nbsp;
          {!!tooltip && <span>({tooltip})</span>}
        </span>

        {children}
      </label>
    );
  }

  return (
    <div className="form-child-wrapper">{children}</div>
  );
};

FormChild.propTypes = propTypes;
FormChild.defaultProps = defaultProps;

export default FormChild;
