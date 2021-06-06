import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/index';
import Filter from '../../components/FilterForm/index';
import Drawer from '../../components/Drawer/index';
import './style.scss';

const Layout = ({ children }) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <Drawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} />
      <Header
        setIsOpenDrawer={setIsOpenDrawer}
        isOpenFilter={isOpenFilter}
        setIsOpenFilter={setIsOpenFilter}
      />
      <Filter isOpen={isOpenFilter} />
      <div className="layout">{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
