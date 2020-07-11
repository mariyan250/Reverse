import React, { createContext, useState, useEffect } from 'react';

export const User = createContext();

function UserContext(props) {
  const [user] = useState(null);

  useEffect(() => {
    // setUser({ email: 'mariyan250', name: 'Mariyan V.' });
  }, []);

  return <User.Provider value={{ user }}>{props.children}</User.Provider>;
}

export default UserContext;
