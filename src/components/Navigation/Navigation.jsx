import cs from './navigation.module.scss';
import cx from 'classnames';

const Navigation = ({ actions = {}, className }) => {
  return (
    <nav className={cx(cs.navigation, className)}>
      <button
        type='button'
        className={cx(cs.navigation__button)}
        onClick={actions.addContribution}
      >
        Dodaj Wkład
      </button>
      <button
        type='button'
        className={cx(cs.navigation__button)}
        onClick={actions.calculateProfit}
      >
        Oblicz zysk
      </button>
    </nav>
  );
};

export default Navigation;
