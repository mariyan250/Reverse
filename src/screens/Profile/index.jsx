// React and Style
import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { closeHamburger } from 'store/actions/hamburger';

function Profile({ closeHamburger }) {
  useEffect(() => {
    closeHamburger();
  }, [closeHamburger]);

  return (
    <section>
      <h2>Profile</h2>
    </section>
  );
}

export default connect(null, { closeHamburger })(Profile);
