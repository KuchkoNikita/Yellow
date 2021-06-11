import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { autoLogin } from './store/actions/auth';

import Info from './components/Info/index';
import Jogs from './components/Jogs/index';
import Contacts from './components/Contacts/index';
import LogIn from './components/LogIn/index';
import Layout from './hoc/Layout';

const App = ({ isAuthenticated, autoLogin }) => {
  const history = useHistory();

  useEffect(() => {
    autoLogin();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/jogs');
    }
  }, [isAuthenticated]);

  let routers = (
    <Switch>
      <Route path={'/auth'} component={LogIn} />
      <Redirect to="/auth" />
    </Switch>
  );

  if (isAuthenticated) {
    routers = (
      <Switch>
        <Route path={'/auth'} component={LogIn} />
        <Route path={'/jogs'} component={Jogs} />
        <Route path={'/contacts'} component={Contacts} />
        <Route path={'/info'} exact component={Info} />
        <Redirect to="/jogs" />
      </Switch>
    );
  }

  return <Layout isAuthenticated={isAuthenticated}>{routers}</Layout>;
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  autoLogin: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  autoLogin: () => dispatch(autoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
