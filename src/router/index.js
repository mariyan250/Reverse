// React
import React from 'react';

// Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Screens
import HomePrivate from 'screens/Home/Private';
import Home from 'screens/Home/Public';
import Login from 'screens/Login';
import Register from 'screens/Register';
import NotFound from 'screens/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePrivate} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
