import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common.scss';
import './style.scss';

const Filter = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="filter">
          <div className="filter__field">
            <span className="filter__label">Date from</span>
            <input type="text" className="filter__input input" />
          </div>
          <div className="filter__field">
            <span className="filter__label">Date to</span>
            <input type="text" className="filter__input input" />
          </div>
        </div>
      ) : null}
    </>
  );
};

Filter.propTypes = {
  isOpen: PropTypes.bool,
};

export default Filter;
