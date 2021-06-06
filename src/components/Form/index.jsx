import React from 'react';
import { ReactComponent as CancelSvg } from './../../assets/cancel.svg';
import './style.scss';
import './../../styles/common.scss';

const Form = () => {
  return (
    <div className="form">
      <button className="form__close-button icon-button">
        <CancelSvg />
      </button>
      <div className="form__fields">
        <div className="form__field">
          <span className="form__label">Distance</span>
          <input className="form__input input" type="text" />
        </div>
        <div className="form__field">
          <span className="form__label">Time</span>
          <input className="form__input input" type="text" />
        </div>
        <div className="form__field">
          <span className="form__label">Date</span>
          <input className="form__input input" type="text" />
        </div>
      </div>
      <button className="form__button button">Save</button>
    </div>
  );
};

export default Form;
