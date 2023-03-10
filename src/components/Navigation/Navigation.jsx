import React from 'react';
import cs from './navigation.module.scss';
import cx from 'classnames';

const Navigation = ({ addContribution, calculateProfit }) => {
  return (
    <nav className={cx(cs.navigation)}>
      <button
        className={cx(cs.navigation__button)}
        onClick={addContribution}
      >
        Dodaj Wkład
      </button>
      <button
        className={cx(cs.navigation__button)}
        onClick={calculateProfit}
      >
        Oblicz zysk
      </button>
    </nav>
  );
};

export default Navigation;
