// React
import React, { useContext } from 'react';

// Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Screens
import HomePrivate from 'screens/Home/Private';
import Home from 'screens/Home/Public';
import Login from 'screens/Login';
import Register from 'screens/Register';
import NotFound from 'screens/NotFound';

// Contexts
import { User } from '../contexts/user';

function Router() {
  const { user } = useContext(User);

  return (
    <BrowserRouter>
      <Switch>
        {user && <Route exact path='/' component={HomePrivate} />}
        {!user && <Route path='/login' component={Login} />}
        {!user && <Route path='/register' component={Register} />}
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
