// React and Style
import React, { useState, createContext } from 'react';
import './index.scss';

// Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import HomePrivate from '@screens/Home/Private';
import Home from '@screens/Home/Public';
import Login from '@screens/Login';
import Register from '@screens/Register';
import NotFound from '@screens/NotFound';

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