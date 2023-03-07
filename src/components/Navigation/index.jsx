import React from 'react';
import cs from './navigation.module.scss';
import cx from 'classnames';

const Navigation = () => {
  return (
    <nav className={cx(cs.navigation)}>
      <button className={cx(cs.navigation__button)}>Dodaj Wkład</button>
      <button className={cx(cs.navigation__button)}>Oblicz zysk</button>
    </nav>
  );
};

export default Navigation;
