// React
import React, { useEffect } from 'react';

// Router and Routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'constants/routes';

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

// Components
import Header from 'components/Header';

function App({ getUser, user }) {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Router>
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
    </Router>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, { getUser })(App);
