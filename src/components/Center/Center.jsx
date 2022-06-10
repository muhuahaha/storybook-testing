import React from 'react';
import PropTypes from 'prop-types';
import './Center.scss';

function Center({ children }) {
  return <div className="center">{children}</div>;
}

Center.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Center;
