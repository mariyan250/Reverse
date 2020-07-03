// React and Style
import React from 'react';
import './index.scss';

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Login from '../Login';
import Register from '../Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;