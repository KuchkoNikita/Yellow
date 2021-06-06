import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Card from './components/Cards/index';
import Form from './components/Form/index';
import Info from './components/Info/index';
import LogIn from './components/LogIn/index';
import Empty from './components/Empty/index';
import Layout from './hoc/Layout';

function App() {
  const routers = (
    <Switch>
      <Route path={'/empty'} component={Empty} />
      <Route path={'/cards'} component={Card} />
      <Route path={'/jogs'} component={Form} />
      <Route path={'/contacts'} component={LogIn} />
      <Route path={'/info'} exact component={Info} />
      <Redirect to="/jogs" />
    </Switch>
  );

  return (
    <BrowserRouter>
      <Layout>{routers}</Layout>
    </BrowserRouter>
  );
}

export default App;
