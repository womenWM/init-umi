import React from 'react';
import Logo from './logo';
import styles from './index.scss';

function NavBar() {
  return (
    <header className={styles.nav_bar}>
      <Logo />
    </header>
  );
}

export default NavBar;
