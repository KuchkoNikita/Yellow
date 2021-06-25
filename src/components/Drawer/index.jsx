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
        <div data-testid="drawer" className="drawer">
          <div className="drawer__header">
            <LogoSvg className="drawer__logo" data-testid="logo" />
            <button className="drawer__cancel-button icon-button" onClick={handleClick}>
              <CancelSvg />
            </button>
          </div>
          <nav className="drawer__navigation">
            <NavLink
              data-testid="jogs-link"
              className="drawer__link"
              to="/jogs"
              exact={false}
              onClick={handleClick}
            >
              JOGS
            </NavLink>
            <NavLink
              data-testid="info-link"
              className="drawer__link"
              to="/info"
              exact={false}
              onClick={handleClick}
            >
              INFO
            </NavLink>
            <NavLink
              data-testid="contacts-link"
              className="drawer__link"
              to="/contacts"
              exact={false}
              onClick={handleClick}
            >
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
