import React from 'react';
import PropTypes from 'prop-types';

function Card({
  title, tools, body, footer,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-tools">
          {tools}
        </div>
      </div>
      <div className="card-body">
        {body}
      </div>
      <div className="card-footer">
        {footer}
      </div>
    </div>
  );
}

Card.defaultProps = {
  tools: null,
  footer: null,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  tools: PropTypes.element,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default Card;
