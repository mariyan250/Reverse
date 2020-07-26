// React
import React, { useEffect } from 'react';

// Router
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// Routes
import { routes } from 'shared/constants/routes';

// Redux
import { connect } from 'react-redux';

// Actions
import { getUser } from 'store/actions/user';

// Screens
import Home from 'screens/Home/';
import Login from 'screens/Login';
import Register from 'screens/Register';
import NotFound from 'screens/NotFound';
import SearchProduct from 'screens/SearchProduct';
import Product from 'screens/Product';
import Profile from 'screens/Profile';

import Header from 'shared/components/Header';

function App({ history, getUser, user }) {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route path={routes.search} component={SearchProduct} />
        <Route path={routes.item} component={Product} />
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
        {user && <Route path={routes.profile} component={Profile} />}
        <Route exact path={routes.home} component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, { getUser })(App);
