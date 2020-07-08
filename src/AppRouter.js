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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/logged" component={HomePrivate} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
