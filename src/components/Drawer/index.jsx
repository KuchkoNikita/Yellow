import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as LogoSvg } from './../../assets/logo.svg';
import { ReactComponent as CancelSvg } from './../../assets/cancel.svg';
import './style.scss';
import './../../styles/common.scss';

const Drawer = ({ isOpen, setIsOpen }) => {
  const handleClick = () => setIsOpen(false);

  return (
    <>
      {isOpen ? (
        <div className="drawer">
          <div className="drawer__header">
            <LogoSvg className="drawer__logo" />
            <CancelSvg className="drawer__cancel-button" onClick={handleClick} />
          </div>
          <nav className="drawer__navigation">
            <NavLink className="drawer__link" to="/jogs" exact={false} onClick={handleClick}>
              JOGS
            </NavLink>
            <NavLink className="drawer__link" to="/info" exact={false} onClick={handleClick}>
              INFO
            </NavLink>
            <NavLink className="drawer__link" to="/contacts" exact={false} onClick={handleClick}>
              CONTACT US
            </NavLink>
          </nav>
        </div>
      ) : null}
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Drawer;
