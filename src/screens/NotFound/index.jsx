// React and style
import React from 'react';
import './index.scss';

// TODO translate
function NotFound() {
  return (
    <main
      className="not-found vh-100 d-flex justify-content-center align-items-center"
      data-testid="not-found"
    >
      <h1 data-testid="not-found-text">Not Found!</h1>
    </main>
  );
}

export default NotFound;
