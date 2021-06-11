import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { actionToggleForm } from '../../store/actions/filter';

import { ReactComponent as MenuSvg } from './../../assets/menu.svg';
import { ReactComponent as FilterSvg } from './../../assets/filter.svg';
import { ReactComponent as LogoSvg } from './../../assets/logo.svg';

import './style.scss';

const Header = ({ isAuthenticated, isOpenFilter, setIsOpenDrawer, actionToggleForm }) => {
  const handleFilterClick = () => actionToggleForm(!isOpenFilter);
  const handleDrawerClick = () => setIsOpenDrawer(true);

  return (
    <div className="header">
      <LogoSvg className="header__logo" />
      {isAuthenticated && (
        <div className="header__buttons">
          <nav className="header__navigation">
            <NavLink
              className="header__link"
              to="/jogs"
              exact={false}
              activeClassName="header__link--active"
            >
              JOGS
            </NavLink>
            <NavLink
              className="header__link"
              to="/info"
              exact={false}
              activeClassName="header__link--active"
            >
              INFO
            </NavLink>
            <NavLink
              className="header__link"
              to="/contacts"
              exact={false}
              activeClassName="header__link--active"
            >
              CONTACT US
            </NavLink>
          </nav>
          <button className="header__filter-button icon-button" onClick={handleFilterClick}>
            <FilterSvg
              className={`header__filter-image ${
                isOpenFilter ? 'header__filter-image--active' : ''
              }`}
            />
          </button>
          <button onClick={handleDrawerClick} className="header__menu-button icon-button">
            <MenuSvg />
          </button>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  isOpenFilter: PropTypes.bool,
  actionToggleForm: PropTypes.func,
  setIsOpenDrawer: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isOpenFilter: state.filter.isOpenFilter,
});

const mapDispatchToProps = (dispatch) => ({
  actionToggleForm: (isOpen) => dispatch(actionToggleForm(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
