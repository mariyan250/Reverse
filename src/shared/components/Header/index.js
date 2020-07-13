// React and Style
import React, { useState } from 'react';
import './index.scss';

// Components
import Hamburger from 'shared/components/Hamburger';

function Header() {
  const [burgerOpened, setBurgerOpened] = useState(false);

  return (
    <div className="header px-4 py-3 d-flex justify-content-between align-items-center">
      <h1>Reverse</h1>
      <Hamburger
        className={`hamburger ${burgerOpened ? 'toggled' : ''}`}
        onClick={() => setBurgerOpened(!burgerOpened)}
      />
    </div>
  );
}

export default Header;
