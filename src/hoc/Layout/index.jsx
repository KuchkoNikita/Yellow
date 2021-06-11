import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/index';
import Filter from '../../components/FilterForm/index';
import Drawer from '../../components/Drawer/index';

import './style.scss';

const Layout = ({ children, isAuthenticated }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <Drawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} />
      <Header isAuthenticated={isAuthenticated} setIsOpenDrawer={setIsOpenDrawer} />
      <Filter />
      <div className="layout">{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  isAuthenticated: PropTypes.bool,
};

export default Layout;
