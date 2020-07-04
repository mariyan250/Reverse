// React and Style
import React, { useState, createContext } from 'react';
import './index.scss';

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import NotFound from '../NotFound';

export const UserContext = createContext();

const App = () => {
  const data = { name: 'Mariyan V.', email: 'mariyan250@gmail.com' };
  const [user, setUser] = useState(data);

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={user ? Home : Login} />
          {!user && <Route path='/register' component={Register} />}
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;