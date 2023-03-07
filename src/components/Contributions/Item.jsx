import React from 'react';
import { Textfield } from '../';
import { INVESTMENTS_LABELS } from '../../constans';
import cx from 'classnames';
import cs from './item.module.scss';

const Item = (props) => {
  return (
    <div className={cx(cs.item)}>
      {Object.entries(props).map(([key, value]) => (
        <Textfield
          name={key}
          value={value}
          label={INVESTMENTS_LABELS[key]}
        />
      ))}
    </div>
  );
};

export default Item;
