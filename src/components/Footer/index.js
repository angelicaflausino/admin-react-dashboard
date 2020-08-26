import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children }) {
  return (
    <footer className="main-footer">
      {children}
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Footer;
