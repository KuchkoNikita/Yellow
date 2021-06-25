import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { actionFilterStart, actionFilterEnd } from '../../store/actions/filter';

import '../../styles/common.scss';
import './style.scss';

const Filter = ({ isOpen, actionFilterStart, actionFilterEnd }) => {
  const [filterStart, setFilterStart] = useState();
  const [filterEnd, setFilterEnd] = useState();

  const handleChangeStart = (event) => setFilterStart(event.target.value);
  const handleChangeEnd = (event) => setFilterEnd(event.target.value);

  const handleBlurStart = () => {
    actionFilterStart(moment(filterStart, 'DD.MM.YYYY'));
  };
  const handleBlurEnd = () => {
    actionFilterEnd(moment(filterEnd, 'DD.MM.YYYY'));
  };

  return (
    <>
      {isOpen ? (
        <div className="filter" data-testid="filter">
          <div className="filter__field">
            <span className="filter__label">Date from</span>
            <input
              onBlur={handleBlurStart}
              onChange={handleChangeStart}
              type="text"
              className="filter__input input"
            />
          </div>
          <div className="filter__field">
            <span className="filter__label">Date to</span>
            <input
              onBlur={handleBlurEnd}
              onChange={handleChangeEnd}
              type="text"
              className="filter__input input"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

Filter.propTypes = {
  isOpen: PropTypes.bool,
  actionFilterStart: PropTypes.func,
  actionFilterEnd: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isOpen: state.filter.isOpenFilter,
});

const mapDispatchToProps = (dispatch) => ({
  actionFilterStart: (filterStart) => dispatch(actionFilterStart(filterStart)),
  actionFilterEnd: (filterEnd) => dispatch(actionFilterEnd(filterEnd)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
