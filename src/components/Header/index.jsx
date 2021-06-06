import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MenuSvg } from './../../assets/menu.svg';
import { ReactComponent as FilterSvg } from './../../assets/filter.svg';
import { ReactComponent as LogoSvg } from './../../assets/logo.svg';
import './style.scss';

const Header = ({ isOpenFilter, setIsOpenDrawer, setIsOpenFilter }) => {
  const handleFilterClick = () => setIsOpenFilter(!isOpenFilter);
  const handleDrawerClick = () => setIsOpenDrawer(true);

  return (
    <div className="header">
      <LogoSvg className="header__logo" />
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
          <FilterSvg className="header__image" />
        </button>
        <button onClick={handleDrawerClick} className="header__menu-button icon-button">
          <MenuSvg className="header__image" />
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  isOpenDrawer: PropTypes.bool,
  isOpenFilter: PropTypes.bool,
  setIsOpenDrawer: PropTypes.func,
  setIsOpenFilter: PropTypes.func,
};

export default Header;
