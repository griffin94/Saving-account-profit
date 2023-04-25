import Button from 'react-bootstrap/Button';
import cx from 'classnames';

const Navigation = ({ actions = {} }) => (
  <div
    className={cx(
      'd-flex',
      'flex-column',
      'flex-md-row',
      'mt-5',
      'mt-md-3',
      'gap-2'
    )}
  >
    <Button
      type='button'
      className={cx('flex-grow-1')}
      onClick={actions.addContribution}
      variant='primary'
    >
      Dodaj Wkład
    </Button>
    <Button
      type='button'
      className={cx('flex-grow-1')}
      onClick={actions.calculateProfit}
      variant='primary'
    >
      Oblicz zysk
    </Button>
  </div>
);

export default Navigation;
