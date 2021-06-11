import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ReactComponent as BearSvg } from './../../assets/bear-face.svg';
import { auth } from '../../store/actions/auth';
import './style.scss';
import './../../styles/common.scss';

const LogIn = ({ auth }) => {
  const history = useHistory();
  const handleClick = () => {
    auth();
    history.push('/jogs');
  };

  return (
    <div className="inner">
      <div className="login">
        <BearSvg className="login__image" />
        <button onClick={handleClick} className="button login__button">
          Let me in
        </button>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  auth: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    auth: () => dispatch(auth()),
  };
}

export default connect(null, mapDispatchToProps)(LogIn);
