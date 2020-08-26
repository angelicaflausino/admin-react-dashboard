import React from 'react';
import PropTypes from 'prop-types';
import './SmallBox.css';

function SmallBox({
  color, counter, label, icon, link, info,
}) {
  return (
    <div className={`small-box ${color}`}>
      <div className="inner">
        <h3>{counter}</h3>
        <p>{label}</p>
      </div>
      <div className="icon">
        <i className={icon} />
      </div>
      <a href={link} className="small-box-footer">
        {info}
        <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  );
}

SmallBox.defaultProps = {
  info: 'Mais informações',
};

SmallBox.propTypes = {
  color: PropTypes.string.isRequired,
  counter: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  info: PropTypes.string,
};

export default SmallBox;
