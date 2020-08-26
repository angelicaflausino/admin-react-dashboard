import React from 'react';
import PropTypes from 'prop-types';

function Content({ children }) {
  return (
    <section className="content">
      {children}
    </section>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
