import React from 'react';
import './style.scss';
import './../../styles/common.scss';
import { ReactComponent as BearSvg } from './../../assets/sad-emoticon.svg';

const LogIn = () => {
  return (
    <div className="empty">
      <BearSvg className="empty__image" />
      <span className="empty__description">Nothing is there</span>
      <button className="button empty__button">Create your jog first</button>
    </div>
  );
};

export default LogIn;
