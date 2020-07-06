// React and Style
import React, { useState, createContext } from 'react';
import './index.scss';

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from '../Home';
import Login from '../Login';
import HomeLogged from '../HomeLogged';
import Register from '../Register';
import NotFound from '../NotFound';

export const UserContext = createContext();

const App = () => {
  const [user] = useState(null);

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={user ? HomeLogged : Home} />
          {!user && <Route path='/login' component={Login} />}
          {!user && <Route path='/register' component={Register} />}
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;