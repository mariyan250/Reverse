// React and Style
import React, { useContext } from 'react';
import './index.scss';

// Context
import { UserContext } from '../App';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <main className="home">
      <h1>Welcome {user.email}!</h1>
    </main>
  );
};

export default Home;