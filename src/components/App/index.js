// React and Style
import React, { useState, createContext } from 'react';
import './index.scss';

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import HomePrivate from "../Home/Private";
import Home from '../Home/Public';
import Login from '../Login';
import Register from '../Register';
import NotFound from '../NotFound';

export const UserContext = createContext();

const App = () => {
  const [user] = useState(null);

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={user ? HomePrivate : Home} />
          {!user && <Route path='/login' component={Login} />}
          {!user && <Route path='/register' component={Register} />}
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;