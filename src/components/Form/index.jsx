import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ReactComponent as CancelSvg } from './../../assets/cancel.svg';
import { fetchCreateJog } from '../../store/actions/jogs';

import './style.scss';
import './../../styles/common.scss';

const Form = ({ setIsOpenForm, fetchCreateJog }) => {
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const handleClickClose = () => setIsOpenForm(false);

  const handleClickSubmit = () => {
    fetchCreateJog({ distance, time, date });
    setIsOpenForm(false);
  };

  const handleChangeDistance = (event) => setDistance(event.target.value);

  const handleChangeTime = (event) => setTime(event.target.value);

  const handleChangeDate = (event) => setDate(event.target.value);

  return (
    <div className="inner">
      <div className="form">
        <button className="form__close-button icon-button" onClick={handleClickClose}>
          <CancelSvg />
        </button>
        <div className="form__fields">
          <div className="form__field">
            <span className="form__label">Distance</span>
            <input onChange={handleChangeDistance} className="form__input input" type="text" />
          </div>
          <div className="form__field">
            <span className="form__label">Time</span>
            <input onChange={handleChangeTime} className="form__input input" type="text" />
          </div>
          <div className="form__field">
            <span className="form__label">Date</span>
            <input onChange={handleChangeDate} className="form__input input" type="text" />
          </div>
        </div>
        <button className="form__button button" onClick={handleClickSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.jogs.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCreateJog: (data) => dispatch(fetchCreateJog(data)),
});

Form.propTypes = {
  setIsOpenForm: PropTypes.func,
  fetchCreateJog: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
