import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/form.scss';

const buttonsShape = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  method: PropTypes.func,
};

const propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.shape(buttonsShape)),
};

const defaultProps = {
  title: '',
  buttons: [{ name: 'Ok', type: 'primary', method: () => {}}],
};

const Form = props => {
  const { title, buttons, children } = props;

  return (
    <div className="form-wrapper">
      {!!title && <h3>{title}</h3>}

      <div>{children}</div>

      <div>
        {buttons.map((button, index) => <p key={`button_${index}`}>{button.name}</p>)}
      </div>
    </div>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
