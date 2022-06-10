import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button(props) {
  const { variant = 'primary', children, ...rest } = props;

  return (
    <button type="button" className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Button;
