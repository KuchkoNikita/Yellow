import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchJogs } from '../../store/actions/jogs';

import Cards from '../Cards/index';
import Empty from '../Empty/index';
import Form from '../Form/index';

const Jogs = ({ fetchJogs, jogsInfromation }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    fetchJogs();
  }, []);

  const jogs = useMemo(
    () =>
      isOpenForm ? (
        <Form setIsOpenForm={setIsOpenForm} />
      ) : (
        <Cards cards={jogsInfromation} setIsOpenForm={setIsOpenForm} />
      ),
    [isOpenForm, jogsInfromation]
  );

  return <>{jogsInfromation.length ? jogs : <Empty />}</>;
};

Jogs.propTypes = {
  fetchJogs: PropTypes.func,
  jogsInfromation: PropTypes.array,
};

const mapStateToProps = (state) => ({
  jogsInfromation: state.jogs.jogs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJogs: () => dispatch(fetchJogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jogs);
