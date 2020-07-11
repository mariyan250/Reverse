// React and style
import React from 'react';

// Router
import Router from './router/Router';

// Contexts
import UserContext from './contexts/user';

function App() {
  return (
    <UserContext>
      <Router />
    </UserContext>
  );
}

export default App;
