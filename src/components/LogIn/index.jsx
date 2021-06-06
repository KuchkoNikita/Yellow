import React from 'react';
import './style.scss';
import './../../styles/common.scss';
import { ReactComponent as BearSvg } from './../../assets/bear-face.svg';

const LogIn = () => {
  return (
    <div className="login">
      <BearSvg className="login__image" />
      <button className="button login__button">Let me in</button>
    </div>
  );
};

export default LogIn;
