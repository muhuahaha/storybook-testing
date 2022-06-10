import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input(props) {
  const { size = 'medium', ...rest } = props;

  return (
    <div>
      <input className={`input ${size}`} {...rest} />
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Input;
