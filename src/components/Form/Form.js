import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/form.scss';

const buttonsShape = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  view: PropTypes.oneOf(['primary', 'secondary']),
  method: PropTypes.func,
};

const propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.shape(buttonsShape)),
};

const defaultProps = {
  title: '',
  buttons: [{ name: 'Ok', view: 'primary', type: 'submit', method: () => {}}],
};

const Form = props => {
  const { title, buttons, children } = props;

  return (
    <form className="form-wrapper">
      {!!title && <h3 className="form-title">{title}</h3>}

      <div>{children}</div>

      <div className="form-buttons">
        {buttons.map((button, index) =>
          <button
            key={`button_${index}`}
            className={`button_${button.view}`}
            type={button.type}
            onClick={button.method}
          >{button.name}</button>)}
      </div>
    </form>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
